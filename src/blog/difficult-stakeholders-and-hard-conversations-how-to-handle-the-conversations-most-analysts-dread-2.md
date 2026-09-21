---
title: "The SAID Framework for the Conversation You're Dreading"
series: "Difficult Stakeholders and Hard Conversations: How to Handle the Conversations Most Analysts Dread"
day: 3
description: "The conversation I dreaded most as a junior business analyst was telling a senior stakeholder that a deadline they had already announced publicly was not…"
date: 2026-08-12T13:45:15.131Z
cover: "/images/blog/f4dc16_174dd35fe8ff4d71aefae20b2085ff3f.png"
readingTime: 5
wixId: "4ef72fc4-a4ff-4b68-a880-2241aca5e6c1"
---
<img src="/images/blog/f4dc16_952b142cabf7413991ff600d4101bbfe.png" alt="The SAID Framework for the Conversation You're Dreading" width="1024" height="572" loading="lazy">

<em>The conversation I dreaded most as a junior business analyst was telling a senior stakeholder that a deadline they had already announced publicly was not going to happen.</em> I put it off for four days, rehearsing softer and softer versions of the same sentence in my head. When I finally had the conversation, it took under five minutes, and it went better than almost anything I had rehearsed, because I stopped trying to improvise something diplomatic in the moment and used a structure instead.

## The SAID Framework

This is the structure I use now for almost every conversation I am dreading, from a missed deadline to pushing back on a bad requirement to telling someone their pet feature is not making the release. Four parts, always in this order.

- <strong>State</strong>: say the fact plainly, with no cushioning, no apologising in advance, and no burying it in the third sentence.
- <strong>Acknowledge</strong>: name the impact on them specifically, not generically. This is not an apology; it is proof you understand what this costs them.
- <strong>Impact</strong>: explain the consequence if nothing changes, so the conversation has a reason to exist beyond delivering bad news.
- <strong>Decide</strong>: propose the next concrete step and explicitly invite their input on it, so the conversation ends with a plan rather than just a disclosure.

The order matters more than the exact wording. Skipping straight from State to Decide without acknowledging impact is what makes people feel steamrolled, because it treats their reaction as irrelevant. Lingering too long in Acknowledge without ever reaching Decide is what makes people feel like you are stalling or fishing for reassurance instead of solving the actual problem.

Here is roughly how that missed-deadline conversation actually went, adapted slightly so the shape is reusable rather than tied to one specific project.

<div class="callout">

<strong>Me (State):</strong>

<em>I need to flag that the March 1st date we committed to isn't going to hold. We're going to land closer to March 15th based on where testing is right now.</em>

<strong>Stakeholder:</strong>

<em>That's not great; I've already told the board this ships March 1st.</em>

<strong>Me (Acknowledge):</strong>

<em>I know, and I understand that puts you in a difficult spot with a date you've already communicated upward. That's exactly why I wanted to bring this to you the moment I was confident about it, rather than closer to the date.</em>

<strong>Me (Impact):</strong>

<em>If we push forward and try to hold March 1st anyway, we'd be shipping with the two defects we found in payment processing still open, which I don't think either of us wants on something customer-facing.</em>

<strong>Me (Decide):</strong>

<em>I'd suggest we move the date to March 15th and I can give you a short summary of exactly why, in language you could use with the board today if that's useful. Does that work, or would a different framing help on your end?</em>

</div>

Notice that the conversation never asks the stakeholder to simply absorb bad news. By the end of it, they have a revised date, a reason they can repeat upward, and language they can use immediately. That is what turns a dreaded conversation into a working one.

## Why State has to come first, not last

The most common mistake BAs make with hard news is leading with context, building up to the actual point across several sentences of preamble. This feels kinder in the moment and almost never lands that way. Most stakeholders can tell within the first sentence that something is being softened, and the anticipation of bad news arriving is often more stressful for them than the news itself. Leading with State respects the other person enough to give them the fact immediately, and everything after that is you handling it well rather than delaying it.

## Adapting SAID for pushback, not just bad news

The same four steps work when you need to push back on a requirement rather than deliver bad news. State becomes the specific concern rather than the missed deadline. Acknowledge becomes naming why the requirement matters to them. Impact becomes the actual risk of building it as specified. Decide becomes a concrete alternative, not just an objection.

<div class="callout">

<strong>AN EXAMPLE: PUSHING BACK ON A REQUIREMENT</strong>

<strong>You (State):</strong>

<em>I don't think we should build the approval step exactly as specified, it would let two people approve their own submissions.</em>

<strong>You (Acknowledge):</strong>

<em>I know speed was the main reason this was designed the way it was, and that matters, especially given the volume your team processes.</em>

<strong>You (Impact):</strong>

<em>As written though, it opens up a real audit risk, and if it gets flagged in a review it would likely need to be rebuilt anyway, which costs more time than it saves now.</em>

<strong>You (Decide):</strong>

<em>What if we kept the same speed for everyone except self-submissions, which route to a second approver automatically? That keeps almost all of the speed gain without the audit exposure. Would that work for your team?</em>

</div>

This is the same structure doing different work. It is not about softening disagreement, it is about making sure disagreement always arrives with a reason and a next step attached, rather than landing as a flat no.

## The most common way people break the framework

The failure mode I see most often is treating Acknowledge as an apology rather than an observation. There is a real difference between 'I'm sorry this is inconvenient' and 'I know this puts you in a difficult spot with the board.' The first is about your own discomfort with delivering the message. The second is about their actual situation. Stakeholders can tell the difference immediately, even if they could not articulate why one version lands better than the other. An apology asks them to reassure you. An acknowledgement shows them you already understand their position, which is far more useful to them in the moment.

The second common failure is arriving at Decide with a vague next step instead of a concrete one. 'We'll figure something out' is not a decision; it is a promise to have this same conversation again later. Every Decide step should name an actual action, a date, and ideally a question that hands the next move back to the other person so the conversation ends as a two way plan rather than a one way announcement.

## A third scenario: when you do not have a solution yet

Sometimes you need to have the conversation before you have worked out the Decide step, because waiting for a full solution would cost more time than having the conversation early. SAID still works here, it simply changes what Decide asks for.

<div class="callout">

<strong>EXAMPLE: NO SOLUTION YET</strong>

<strong>You (State):</strong>

<em>I want to flag early that the data migration is looking more complex than we scoped; there are three legacy formats we didn't know about until this week.</em>

<strong>You (Acknowledge):</strong>

<em>I know this affects the go-live date you've already committed to, and I wanted you to hear it now rather than closer to the deadline.</em>

<strong>You (Impact):</strong>

<em>I don't yet know exactly how much time this adds, but it's unlikely to be zero, and I'd rather give you an early flag than a late surprise.</em>

<strong>You (Decide):</strong>

<em>I'll have a real estimate by Thursday. Can we hold a short slot on Friday to decide together whether we adjust the date or the scope, once I know the actual number?</em>

</div>

The Decide step here is not a solution, it is a commitment to a specific next step and a specific moment where a real decision will get made. That is enough to keep the conversation from feeling like an open-ended worry dropped on someone's desk.

<strong><em>Go out and be successful.</em></strong>

## Oluwatosin Ogunkoya | Flotog BA Insights  |  www.flotogbainsights.com

<em>TOMORROW</em>

<em>Disagreeing Without Damaging the Relationship - The specific phrases that hold a boundary and the ones that quietly undermine it, plus a full case study.</em>
