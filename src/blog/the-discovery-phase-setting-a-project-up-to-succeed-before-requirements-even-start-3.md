---
title: "Naming the Unknowns: Scoping What You Don't Know Yet"
series: "The Discovery Phase: Setting a Project Up to Succeed Before Requirements Even Start"
day: 4
description: "Every project has at least one part that is genuinely unknown at the start, not vague, not simply unclear, actually unknown in the sense that nobody on the…"
date: 2026-09-24T05:59:19.912Z
cover: "/images/blog/f4dc16_d1b45b45083047c19ab6902ac22844eb.png"
readingTime: 4
wixId: "a973ed50-477d-4842-ad68-2285f4516f12"
---
<img src="/images/blog/f4dc16_d1b45b45083047c19ab6902ac22844eb.png" alt="Naming the Unknowns: Scoping What You Don't Know Yet" width="1024" height="572" loading="lazy">

Every project has at least one part that is genuinely unknown at the start, not vague, not simply unclear, actually unknown in the sense that nobody on the team currently has the answer, and no amount of asking around the room will produce one.

The instinct in that moment usually runs toward one of two bad options. Guess a number, write it into the plan with false confidence, and hope it holds up once real work begins. Or treat the unknown as a reason to stall the entire project, waiting for certainty that may not arrive on its own no matter how long the team waits.

## The Third Option

Real discovery uses a third path, and it is the one most teams underuse simply because it was never presented to them as an option. Time-box a small, focused piece of work specifically designed to answer the unknown, on purpose, before committing the rest of the project to an assumption built on guesswork. This is sometimes called a spike, borrowed from agile practice, though the underlying idea predates the term. The point is not the label. It is the discipline of treating a genuine unknown as something to deliberately investigate on a fixed budget, rather than something to either fake certainty about or let paralyse everything else.

A team unsure whether a legacy system could actually support a new integration did not guess an answer into the project plan, and did not wait indefinitely for someone to somehow already know. They spent three focused days building a small, throwaway test connection to find out directly, then used that concrete answer, whichever way it landed, to scope the rest of the project honestly instead of around a hopeful assumption.

## Sizing a Time-Box Well

A good time-box has three properties worth checking before committing to one.

1. It answers one specific question, not a general area of uncertainty. Can this legacy system support the integration is a real question with a real answer. Let's understand the legacy system better is not, because it has no natural stopping point and can absorb unlimited time without ever producing a clear yes or no. Narrow the question until it has a specific, checkable answer before setting the time-box at all.
2. It is genuinely time-boxed, meaning the team agrees in advance on a fixed, short amount of time, days rather than weeks in almost every case, and stops at that limit regardless of whether the answer feels complete. A time-box that quietly extends because the answer is almost there is not a time-box; it is an open-ended investigation wearing a time-box's name, and it recreates the exact stalling problem the technique was meant to solve in the first place.
3. And it produces a genuine decision, not just more information. The team unsure about the legacy system did not walk away from their three days with an interesting technical report to file. They walked away with a scoping decision: build the integration this way, or don't build it at all and look at a different approach instead. A time-box that produces information without forcing a decision has not actually resolved the unknown; it has just gathered more detail about it, which is a different and less useful thing.

## What to Do With the Answer

Once a time-box produces its answer, that answer belongs in the discovery output alongside everything else this week has covered, not filed away separately as a technical footnote. If the legacy system genuinely cannot support the integration, that is not a disappointing result to quietly work around. It is exactly the kind of fact the whole discovery phase exists to surface before the rest of the project gets built on top of an assumption that would have collapsed later, at a far more expensive moment.

It is worth being honest that not every unknown deserves its own time-boxed investigation. Minor uncertainties that would cost little to be wrong about can simply be flagged as assumptions and revisited if they turn out to matter. The discipline of a time-box is worth spending specifically on the unknowns where being wrong would be expensive, and naming which unknowns clear that bar is itself part of the judgment discovery is meant to apply.

A simple test helps decide which unknowns actually warrant a time-box: multiply how likely you genuinely think it is that the assumption turns out wrong by how expensive it would be if it did. An unknown that is unlikely to be wrong and cheap to fix even if it is does not need three days of dedicated investigation; it needs a single sentence in the brief noting the assumption and moving on. An unknown that is plausible to be wrong and expensive to discover late is exactly what a focused spike exists for. Running this quick mental math before committing time to an investigation keeps the discipline itself from becoming the kind of open-ended, unbounded activity it was designed to prevent.

One more thing worth protecting: keep the output of a spike separate from a full solution. The team investigating the legacy system integration built the smallest possible test connection that could answer their specific question, not a production-ready version of the real integration. A spike that quietly grows into real, permanent work loses the entire benefit of being time-boxed, because the team is now emotionally and practically invested in keeping code that was only ever meant to answer a question, not become the actual answer.

This is worth saying plainly to whoever is sponsoring the project too, since a three-day pause to investigate an unknown can look, from the outside, like the project has stalled rather than progressed. Framing it clearly as a specific, bounded investigation with a fixed end date and a concrete decision attached to it, rather than an open-ended delay, tends to land as exactly what it is: a small, deliberate cost paid now to avoid a much larger one paid later, once the same uncertainty surfaces on its own during actual delivery.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>From Discovery to a Requirements-Ready Brief</em>

<em>Turning discovery output into something the requirements phase can actually start from, and getting sign-off before it does.</em>
