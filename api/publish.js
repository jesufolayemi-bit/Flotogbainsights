// Daily publish trigger, called by Vercel Cron (see "crons" in vercel.json).
//
// Scheduled blog posts are left out of the build until their date arrives in
// Dubai (see eleventy.config.js). This endpoint asks Vercel to rebuild the
// site each morning so that day's post appears.
//
// Needs two environment variables in Vercel (Settings -> Environment Variables,
// Production):
//   DEPLOY_HOOK_URL  the Deploy Hook URL (Settings -> Git -> Deploy Hooks)
//   CRON_SECRET      any long random string; Vercel sends it with each cron
//                    call so nobody else can trigger rebuilds through this URL
export default async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  const hook = process.env.DEPLOY_HOOK_URL;
  if (!hook) {
    return res.status(500).json({ ok: false, error: "DEPLOY_HOOK_URL is not set" });
  }

  const r = await fetch(hook, { method: "POST" });
  const body = await r.text();
  if (!r.ok) {
    console.error("Deploy hook failed", r.status, body);
    return res.status(502).json({ ok: false, status: r.status });
  }
  console.log("Rebuild triggered", new Date().toISOString());
  return res.status(200).json({ ok: true });
}
