---
title: "MoSCoW, Done Properly"
series: "Requirements Prioritisation: Deciding What Gets Built First"
day: 2
description: "Almost every team that uses MoSCoW makes the same mistake, and it is not about the framework itself, it is about the discipline of applying its first…"
date: 2026-09-15T06:00:06.280Z
cover: "/images/blog/f4dc16_7303cb98413e421799f4eea66d763574.png"
readingTime: 5
wixId: "8c3e74f7-f28a-4bc0-94c4-643ccf94b90e"
---
<img src="/images/blog/f4dc16_f9c544f82ec84c2a945b1079d7ca7294.png" alt="MoSCoW, Done Properly" width="1024" height="572" loading="lazy">

Almost every team that uses MoSCoW makes the same mistake, and it is not about the framework itself, it is about the discipline of applying its first category honestly. The MoSCoW sorts requirements into four categories: <strong><em>Must, Should, Could, and Won't</em></strong>. The framework itself is simple enough to explain in a minute. The discipline of applying it honestly, especially to the Must category, is where almost every real implementation quietly breaks down.

## The Four Categories

<img src="/images/blog/f4dc16_7303cb98413e421799f4eea66d763574.png" alt="MoSCoW, Done Properly" width="969" height="633" loading="lazy">

<strong>MUST:</strong> A Must is not the most important item on the list, and it is not the item with the loudest or most senior stakeholder behind it. The actual test is narrower: <strong><em>does the release genuinely fail to function, or fail to be legally or contractually viable, without this specific item, with no workaround available at all?</em></strong> A payment processing bug that blocks checkout entirely is a Must. A login flow that has no working password reset path is a Must. A reporting dashboard that would be genuinely useful for an upcoming board meeting is not a Must, no matter how much political weight sits behind the request, because the release still functions and ships without it.

The uncomfortable consequence of applying this test honestly is that very few items on a typical backlog actually qualify. Most teams find their genuine Must list is a fraction of what gets informally treated as urgent, and that gap is exactly where priority inflation from yesterday quietly creeps back in, because saying a stakeholder's request is not a Must feels like saying it does not matter, when it actually only means the release can genuinely ship without it this time.

<strong>Should:</strong> This is different; <strong><em>it genuinely matters and causes real pain if it slips, but a workaround exists, even an ugly one</em></strong>. A Should is the item where, if it does not make this release, someone will be frustrated, and something will be harder than it needs to be, but the release still works, and nobody is blocked entirely. This is usually the largest honest category on a well-prioritised backlog, and it deserves real capacity, typically the second largest share after Must, not the leftover time after everything else.

<strong>Could:</strong> is the next step down as it has no real impact if it slips. This is not a lesser or dismissive category; it is an honest one, and defending a Could item as if it were a Should is one of the more common ways inflation creeps back into an otherwise disciplined list. Could items are exactly what should get cut first, calmly and without drama, the moment capacity gets tight partway through a release.

<strong>Won't</strong><strong><em>:</em></strong> is the category most teams skip entirely, and it is arguably the one doing the most work to prevent inflation. Explicitly naming what will not happen this release, said out loud and written down, stops an item from being silently re-argued in every subsequent conversation. An item that simply never got prioritised stays open for debate indefinitely. An item marked Won't, with a reason attached, is closed, at least for this release, and everyone in the room heard the same decision at the same time.

## Applying It Honestly

Here is roughly how this plays out on a real, bloated backlog, generalised from a pattern I have seen often enough to know it holds up.

<div class="callout">

<strong>REPRIORITIZING A BACKLOG HONESTLY</strong>

<strong>You:</strong>

<em>Looking at this list, we have eighteen items marked Must for a release with capacity for about eight. That means ten of these are not actually Musts by definition, whatever they're currently labelled. Let's test each one: does the release genuinely fail without it, no workaround at all?</em>

<strong>Stakeholder:</strong>

<em>The dashboard redesign has to be a Must; the board is expecting it.</em>

<strong>You:</strong>

<em>That's a real deadline pressure, and I hear it. But does the release fail to function without the redesign, or does the current dashboard still work, just not as polished as you'd like it to be for that meeting?</em>

<strong>Stakeholder:</strong>

<em>It still works; it's just not what I wanted to show them.</em>

<strong>You:</strong>

<em>Then that's a strong Should, not a Must, and I'd rather we call it that honestly now than discover it under pressure in release week.</em>

</div>

This is not a comfortable conversation, and running it eighteen times against a real backlog takes real discipline. It is also the entire mechanism that prevents the priority inflation covered yesterday, because it forces the trade-off question at the point of prioritisation rather than deferring it to a worse moment later. Now sometimes, even after applying the test honestly, the genuine Must list still exceeds real capacity, and this is worth naming rather than quietly fudging. If eight items truly are release-blocking and capacity only covers five, the answer is not to relabel three of them as Should to make the numbers work. The honest answer is that the release date or the scope of the release itself needs to change, and that is a conversation for whoever owns that decision, not something a prioritisation exercise can paper over on its own. MoSCoW is a tool for making a real constraint visible. It is not a tool for making an impossible constraint disappear.

A few categories of requests tend to confuse people applying the Must test for the first time, and it is worth naming them directly.

1. Legal and regulatory requirements are almost always genuine Musts, even when they carry no visible customer-facing impact, because the release genuinely cannot ship without them in the sense that shipping without them creates real liability.
2. Security vulnerabilities above a certain severity follow the same logic.
3. Technical debt is the trickiest case: it rarely qualifies as a Must on its own, since the release usually still functions without addressing it, but it can become one indirectly if it is the actual root cause blocking a genuine Must item, which is worth checking explicitly rather than assuming technical debt items are automatically lower priority by category.

A useful habit when a borderline case comes up is to ask what specifically breaks, for whom, and how severely, if this item is left out entirely. A vague answer, something along the lines of 'it would be bad,' is usually a sign the item is a strong 'Should' wearing a 'Must's' label. A specific, concrete answer, such as 'checkout fails for a defined group of users under a defined condition', is usually a genuine Must.

It is also worth revisiting the same test partway through a release, not only at the start. An item classified as a Should in planning can quietly become a Must if circumstances change, a competitor ships something that shifts customer expectations, or a regulatory deadline moves closer. Reclassification is not a failure of the original prioritisation, it is the same honest test applied again with more current information, and treating it that way keeps the framework a living tool rather than a decision made once and never revisited.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong>  ·  <strong>Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>The Kano Model: Why Satisfaction Isn't Linear - Why MoSCoW alone misses something important, and what the actual Kano curve reveals about what stakeholders notice.</em>
