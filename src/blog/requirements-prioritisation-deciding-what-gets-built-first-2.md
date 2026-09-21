---
title: "The Kano Model: Why Satisfaction Isn't Linear"
series: "Requirements Prioritisation: Deciding What Gets Built First"
day: 3
description: "MoSCoW answers a specific, narrow question well: how urgent is this, relative to everything else competing for the same limited capacity. It does not answer…"
date: 2026-09-16T06:00:06.067Z
cover: "/images/blog/f4dc16_9657a19b801d4eb0b8fc33f5179d8692.png"
readingTime: 4
wixId: "95d2e6b9-7223-4b77-b345-d1247486d113"
---
<img src="/images/blog/f4dc16_9a4dcdb498bf4e0b93996c4cd9f1ceaf.png" alt="The Kano Model: Why Satisfaction Isn't Linear" width="1024" height="572" loading="lazy">

MoSCoW answers a specific, narrow question well: how urgent is this, relative to everything else competing for the same limited capacity. It does not answer a different, equally important question: what does actually building this earn you in customer satisfaction, and does that return scale the way you'd assume.

That second question is what the Kano model, developed by Noriaki Kano, answers, and the shape of the answer surprises most people the first time they see it plotted against a simple assumption most teams carry without ever examining it: that more investment in a feature produces proportionally more satisfaction.

## The Actual Curve

<img src="/images/blog/f4dc16_9657a19b801d4eb0b8fc33f5179d8692.png" alt="The Kano Model: Why Satisfaction Isn't Linear" width="958" height="719" loading="lazy">

**A basic, or threshold**, feature is something customers simply assume will work, and never think to ask for explicitly, because its presence is not a feature to them; it is baseline table stakes. A banking app that lets you check your balance. A checkout flow that accepts a valid card. Nobody praises these when they work. Everybody notices, loudly, when they don't.

The curve shape reflects this precisely. Missing a basic feature tanks satisfaction steeply, often out of proportion to how small the gap might seem from the inside. Fully delivering it only brings satisfaction up to neutral, and no amount of additional polish on a basic feature pushes satisfaction meaningfully above that line, because customers were never going to be delighted by something they assumed would simply be there. This is very often the same set of items that qualify as MoSCoW Musts, described from a different angle: no workaround exists, and satisfaction collapses without it.

**Performance** features are different: they follow something close to a straight line. More of it genuinely buys more satisfaction, and less of it genuinely costs satisfaction, roughly proportionally. Battery life on a phone. Load time on a website. Storage space on a cloud plan. These are the features most prioritisation conversations implicitly assume all features behave like, which is exactly why Kano is useful: it reveals that most features do not actually behave this way at all.

**Delighters** are the strangest of the three. A delighter is a feature nobody expected, and nobody would think to explicitly ask for, which makes its curve genuinely different from the other two. Its absence costs essentially nothing, because there was no expectation to violate. Its presence, even a modest version of it, can produce satisfaction wildly disproportionate to what it actually cost to build, precisely because it was unexpected.

This is the category MoSCoW alone completely misses, because a delighter is very often not a 'Must' and not even a strong 'Should' by MoSCoW's own tests; the release functions perfectly well without it, yet it can be the single highest return item on the entire list in terms of actual customer sentiment, word of mouth, and retention.

## Why This Changes How a Backlog Gets Read

Running items through both frameworks, not just one, surfaces a genuine blind spot each framework has on its own. MoSCoW alone will correctly protect every Basic feature as a Must and correctly deprioritise a low-urgency delighter as a Could, purely on the urgency test, since the release does function without it. That framing misses the actual return on investment a small delighter can produce, return that a pure urgency lens has no way to capture, because urgency and payoff are genuinely different questions.

A backlog that only ever asks '***how urgent?***' will systematically starve the category of feature most likely to produce outsized, disproportionate satisfaction, not because anyone made a bad call, but because the framework being used was never built to see that category clearly in the first place.

## Sorting a Real Feature

Ask two questions about any feature under debate.

- First, if this were missing entirely, would a customer be upset, indifferent, or would they have expected it to be missing and be pleasantly surprised to find it there?
- Second, does more of this feature produce proportionally more satisfaction, or does satisfaction plateau quickly regardless of how much more gets built?

The answers to those two questions sort almost any feature into one of the three curves reliably enough to inform a real prioritisation conversation.

One honest caveat is that ***Kano categories are not permanent, and treating them as fixed is a common misreading of the model***. A genuine delighter today, the first app to offer a certain kind of notification or a certain kind of personalisation, very often becomes a basic expectation within a few years, once competitors copy it and customers start assuming it. The curve a feature sits on is a snapshot of current customer expectations, not a permanent property of the feature itself, which means this kind of categorisation is worth revisiting periodically rather than deciding once and filing away.

For a more rigorous read than the quick test above, when the stakes are higher and it is worth checking your instinct against real customer input, the original Kano technique uses a paired survey question for each feature under debate. Ask customers how they would feel if the feature were present, with options ranging from I like it to I dislike it. Then ask the same customers how they would feel if the feature were absent, using the same scale. Cross-referencing the two answers reliably sorts a feature into Basic, Performance, or Delighter far more accurately than guessing from inside the team, because it removes the team's own assumptions about what customers care about and replaces them with what customers actually say.

This is more effort than the quick two-question test from earlier, and it is not necessary for every item on a backlog. It earns its place specifically for the handful of features where the team's instinct is genuinely split, or where a large investment decision is riding on getting the category right.

Tomorrow combines this with MoSCoW and a simple value versus effort view into one working session, for the moments where frameworks alone still leave a real disagreement in the room.

***Go out and be successful.***

**Oluwatosin Ogunkoya**  **·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·**  [**www.flotogbainsights.com**](/)

*TOMORROW*

*Combining Frameworks: The Value/Effort Matrix -* *How to actually run a prioritisation session when stakeholders disagree about what counts as a Must.*
