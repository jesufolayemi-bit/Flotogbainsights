---
title: "Why \"Everything Is a Priority\" Is Not a Strategy"
series: "Requirements Prioritisation: Deciding What Gets Built First"
day: 1
description: "I once tracked a real team's backlog labelling over ten consecutive sprints. In sprint one, 22% of items carried a high priority tag. By sprint ten, it was…"
date: 2026-09-14T06:00:05.752Z
cover: "/images/blog/f4dc16_652719e3b8664a648bdfb2ff2a02eb23.png"
readingTime: 5
wixId: "3cee8202-868b-490d-9b1a-b5f6d1b1cca9"
---
<img src="/images/blog/f4dc16_a6034d4cfcb9461f89b7e303820d912b.png" alt="Why &quot;Everything Is a Priority&quot; Is Not a Strategy" width="1024" height="572" loading="lazy">

I once tracked a real team's backlog labelling over ten consecutive sprints. In sprint one, 22% of items carried a high priority tag. By sprint ten, it was 96%. Nobody made one bad decision that caused this. Every single markup, looked at in isolation, was individually reasonable. A stakeholder had a genuine reason their specific item mattered. Nobody on the team wanted to be the person who told someone else, to their face, that their request was not that important. Multiply that instinct across dozens of small, well-meaning decisions, and the backlog inflates on its own, with no single moment anyone could point to as the mistake.

## The Inflation Pattern

<img src="/images/blog/f4dc16_652719e3b8664a648bdfb2ff2a02eb23.png" alt="Why &quot;Everything Is a Priority&quot; Is Not a Strategy" width="969" height="506" loading="lazy">

This is a real pattern, not an exaggerated one. Each individual sprint's markup decisions looked defensible. The trend line is where the actual problem lives, and a trend line is exactly the kind of thing nobody notices from inside a single sprint, because each sprint only ever sees its own small increment of drift. What does this actually cost, once it happens? A priority label exists to do one job: tell someone, quickly, what to work on first when there is not enough time for everything. Once 96% of a backlog carries the same label, it has stopped doing that job entirely. It now carries the same amount of information as no label at all, except with one dangerous difference. Everyone who marked their item high priority believes it is protected, and that belief survives right up until release week, when the real capacity constraint finally forces an honest decision anyway, now under time pressure, with stakeholders who were never told their item was ever actually at risk.

This is the real cost of priority inflation. It does not eliminate hard trade-off decisions. It only delays them to the worst possible moment, and adds a layer of broken trust on top, because the decision now looks like a last-minute cut rather than a considered call made with everyone's full knowledge. None of this happens because anyone is careless, either. Priority inflation is not a discipline failure or evidence that a team does not care about doing this well. It is the predictable result of making prioritisation decisions one at a time, in isolation, with no shared framework forcing anyone to actually compare items against each other or against a fixed, limited amount of capacity. Without a real constraint made visible, every individual request gets judged only against the question '<strong><em>is this worth doing</em></strong>,' and the honest answer to that question, for almost anything a stakeholder bothers to ask for, is usually yes.

The question that actually needs asking is never 'is this worth doing.' It is <strong><em>'is this worth doing before everything else also competing for the same limited time?</em></strong>' and that second question cannot be answered one item at a time. It requires seeing the whole list at once, against a real, finite capacity, which is exactly what the frameworks this week cover are built to force.

## Catching and Fixing It

One short question, asked at the right moment, is usually enough to surface the trade-off directly.

<div class="callout">

<strong>THE QUESTION THAT ACTUALLY SURFACES THE TRADE-OFF</strong>

<strong>Stakeholder:</strong>

<em>This reporting fix needs to be a high priority; my team relies on those numbers every week.</em>

<strong>You:</strong>

<em>I don't doubt that it matters. Here's the honest version of the question, though: if this goes in, something else currently planned for this release comes out. Looking at the list together, what would you take out to make room for it?</em>

</div>

That second question rarely gets asked in practice, and it is the entire mechanism that prevents inflation. It converts a one-sided request, which is easy to grant, into a genuine trade-off, which forces the requester to weigh their own item against everything else actually competing for the same limited capacity.

This kind of drift is also hard to catch in real time. It is almost invisible from inside any single sprint, which is exactly what lets it run unchecked for as long as it does. A team reviewing this sprint's backlog sees a handful of new items, each with an individually reasonable case for urgency, added to a list that already looked mostly reasonable last time anyone checked. Nobody is ever looking at the full trend across ten sprints in the middle of doing the actual work. The chart above only exists because someone deliberately went back and tracked it after the fact, and that deliberate act of measurement is itself the first real defence against inflation, since a problem nobody is tracking is a problem nobody can see forming.

The good news is that catching it does not require sophisticated tooling. At the start of every planning cycle, before any new discussion happens, count how many items currently carry a high priority label and divide by the total backlog size. Write the number down somewhere it will still be visible in three months: a shared document, a simple spreadsheet, anywhere that survives past the current sprint. Do this for four or five consecutive cycles, and the trend becomes visible in a way no single snapshot ever reveals. A number that climbs steadily, even slowly, is the same pattern shown above, just caught earlier and at a point where it is far cheaper to correct.

And if you inherit a backlog that has already drifted this far, sitting at 80-90% high priority, resetting it is not a single dramatic relabeling session, which tends to feel arbitrary to everyone who has an item on the list and generates more resistance than it resolves. The fix that actually holds is applying the honest Must test covered tomorrow to every item, one at a time, in front of whoever owns each one, so the new label is something they arrived at with you rather than something handed down. It is slower than a mass relabel, and it is the only version that survives the next planning cycle without quietly reinflating back to where it started.

## This Week's Arc

Tomorrow covers MoSCoW done properly, including the most commonly misused rule in the whole framework: what genuinely qualifies as a Must.

Wednesday introduces the Kano model, and why a straight line from 'not delivered' to 'delighted' is the wrong mental model for how satisfaction actually works.

Thursday combines both into a value versus effort matrix for the moments frameworks alone cannot settle a disagreement.

Friday closes with how a prioritised list survives contact with an actual release, and how to communicate what did not make the cut without damaging the trust the whole exercise depends on.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong>  ·  <strong>Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>MoSCoW, Done Properly - The four categories, taught with real discipline, and the most misused rule: what actually qualifies as a Must.</em>
