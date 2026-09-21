---
title: "The Handful of Symbols That Do Almost All the Work"
series: "Business Process Modelling: Making BPMN Actually Useful"
day: 2
dek: "The practical BPMN toolkit: what each core symbol means and when to use it"
description: "The practical BPMN toolkit: what each core symbol means and when to use it"
date: 2026-09-08T06:00:09.792Z
cover: "/images/blog/f4dc16_3591a348a50c472898a93ed81184d9a6.png"
readingTime: 6
wixId: "88fab007-617f-424a-8bac-cb10df0b851b"
---
<img src="/images/blog/f4dc16_71f802e74f5243928a8a62e83d2b350b.png" alt="The Handful of Symbols That Do Almost All the Work" width="1024" height="572" loading="lazy">

The full BPMN specification runs to dozens of event types, gateway variations, and connector rules. A genuinely useful process map, the kind that survives being shown to a real stakeholder, leans on about six of them, used consistently and well. This is the practical toolkit, the version that actually gets used on real projects rather than the version tested in a certification exam. Learn these six well, and you can draw the overwhelming majority of the process maps a working business analyst will ever need.

## The core toolkit

<img src="/images/blog/f4dc16_3591a348a50c472898a93ed81184d9a6.png" alt="The Handful of Symbols That Do Almost All the Work" width="969" height="513" loading="lazy">

<em>The handful of symbols that do almost all the real work.</em>

## Start and end events: the boundary of the process

- A start event, drawn as a thin circle, marks the one place a process begins. A well-drawn process has exactly one start event. If you find yourself wanting two, that is usually a sign you are actually modelling two different processes, or two different triggers for the same process, which BPMN's more advanced event types can handle but which a beginner diagram is usually better off keeping simple and separate.
- An end event, drawn as a thick-bordered circle, marks a point where the process is genuinely finished. Every path through the diagram should eventually reach one.

This sounds obvious, and it is the single most common thing missing from real diagrams I review: an exception path that trails off into nothing because nobody thought through where it actually ends.

## Tasks: one box, one piece of work

A task, drawn as a rounded rectangle, represents one person or system doing one identifiable piece of work. The discipline that matters here is granularity. A task labelled 'Process the order' is almost always hiding three or four real steps inside it, and a reader cannot tell from that label whether the process actually works. A task labelled 'Check inventory availability' is specific enough to mean something on its own.

A useful test: <strong><em>could two different people read this task label and describe the same action?</em></strong> If the label is vague enough that two people might picture different things happening, the granularity is probably wrong.

## The exclusive gateway: where a real decision lives

A gateway, drawn as a diamond, marks a point where the path through the process genuinely splits based on a decision or a condition. The exclusive gateway, marked with an X, is the one you will use most often: exactly one of the paths leading out gets taken, never more than one.

The discipline that matters here is restraint. Not every mention of 'if' in a description needs its own gateway. A gateway belongs on the diagram only when the decision actually changes what happens next in a way worth showing. A minor variation in how a task gets done, with no difference in the overall flow, usually belongs inside the task itself, not as a separate branching path on the diagram.

## Sequence flow and message flow: two different arrows, two different jobs

- A sequence flow, a solid arrow, shows the order work happens in inside one participant, one pool. This is the arrow you will use for almost everything inside a single pool, including when it crosses from one lane to another within that same pool.
- A message flow, a dashed arrow, is different and often misused by beginners in the opposite direction from what you would expect. It belongs only between two separate pools, two genuinely different participants such as a customer and a company, or two separate organisations. A dashed arrow connecting two lanes that sit inside the same pool is not a stylistic choice; it is incorrect notation, because a message flow specifically represents communication crossing a participant boundary, and two lanes of one pool are still the same participant.

Getting this distinction right matters more than it seems, because mixing the two up makes a diagram genuinely ambiguous about whether something is an internal handoff or a real external communication.

## Pools versus lanes: the distinction that trips people up

A pool represents one participant, one company, one person, one system, drawn as its own bounded container, visually separate from any other pool. A lane subdivides a single pool into the different roles or teams inside that one participant, drawn as adjacent strips inside the same outer boundary, touching each other with no gap. The visual gap is the entire signal: pools sit apart from each other; lanes sit flush against each other inside one pool.

This is also the rule for which arrow to use. Sequence flow stays inside one pool, and that includes crossing from one lane to another lane in the same pool, since both lanes still belong to the same participant. Message flow only ever crosses the gap between two separate pools. A diagram that draws two lanes of one company touching each other, then connects them with a dashed message flow, has quietly contradicted itself: the lanes say same participant, the dashed arrow says different participants. Watch for this specifically when reviewing your own diagrams, since it is an easy mistake to make and an easy one to miss.

Whichever one applies, a pool or a lane, drawn as a labelled container, groups the steps that belong to one participant or one role inside a participant. This single element does more to make a diagram genuinely useful than almost anything else on this list, because it answers the question stakeholders actually ask most often in a review: whose job is this step? A diagram with no lanes forces the reader to guess ownership from context. A diagram with clear lanes answers it at a glance.

## What is deliberately left off this list

Timer events, message events, parallel gateways, inclusive gateways, sub-processes, boundary events, and a long list of other valid BPMN elements are all real and occasionally necessary. They are left off this core list on purpose, because a beginner reaching for them too early is the exact pattern that produced the cluttered diagram from yesterday. Learn to use the six above with real confidence first. The rest of the specification is there when a specific situation genuinely calls for it, and by the time you are reaching for it, you will already know why.

## Seeing all six work together

Reading six definitions in a row is not the same as seeing them do real work in one place. Here is a small, complete process, ordering a coffee, that uses every single symbol covered above, nothing more.

<img src="/images/blog/f4dc16_9b1f26f43d064432921af932e7d5bd76.png" alt="The Handful of Symbols That Do Almost All the Work" width="969" height="520" loading="lazy">

Walk through it slowly, matching each element back to its definition.

- The start event marks the one moment the process begins: the customer ordering. The dashed message flow shows that request crossing the gap between two separate pools, the customer's and the barista's, since these are two genuinely different participants, not two lanes of one company.
- Inside the barista's own pool, a solid sequence flow connects Take order to the gateway, because that is one participant's own steps happening in order.
- The gateway itself is doing real work, not decoration. Whether the order is custom genuinely changes what happens next, which is exactly the bar a gateway needs to clear from the discipline on restraint above. Both branches lead somewhere, and both rejoin at Call out order, so no path on this diagram trails off unanswered.
- And the final message flow, order handed over, crosses back over that same pool boundary into the customer's pool, closing the process at an end event that genuinely marks completion.

Notice what is not on this diagram. No timer showing how long the coffee takes to make. No sub-process breaking down exactly how the espresso machine works. No boundary event for what happens if the barista runs out of milk. All three would be valid BPMN. None of them would make this diagram more useful for the audience it is actually for, which is the entire discipline this week is trying to build.

## A short practice exercise

Before moving on to Wednesday, try mapping one small process from your own day using only these six symbols, the same way the coffee example above does. Submitting a timesheet, approving a small purchase, checking a package in at reception, anything with a genuine start, a genuine end, and at least one real decision in the middle. The goal is not accuracy or completeness. It is building the physical habit of reaching for a start event, a handful of tasks, one gateway, and an end event, before your instinct has a chance to reach for anything more complicated than that.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong>  ·

Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  · [www.flotogbainsights.com](/)

<em>TOMORROW</em>

<em>Map the As-Is Before You Touch the To-Be - A fully worked example of mapping a current, messy process, and what it surfaces that nobody had said out loud.</em>
