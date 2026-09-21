---
title: "Why Requirements Fail & What Excellence Actually Looks Like"
series: "Requirements Excellence: The Craft at the Heart of Business Analysis"
day: 1
description: "DAY 1 | Why Requirements Fail & What Excellence Actually Looks Like"
date: 2026-05-18T12:52:12.252Z
cover: "/images/blog/f4dc16_2dc258a486d9464ab34029a532da930b.jpeg"
readingTime: 7
wixId: "e99f2299-30da-4e39-b7d7-3532f320d2cc"
---
<img src="/images/blog/f4dc16_2dc258a486d9464ab34029a532da930b.jpeg" alt="Why Requirements Fail &amp; What Excellence Actually Looks Like" width="1024" height="559" loading="lazy">

I want to tell you about a project that almost destroyed a team. Not a small internal tool. A customer-facing platform that had taken eighteen months and a significant budget to build. The business had waited for it. The marketing team had planned campaigns around it. The go-live date had been communicated to customers.

Two weeks before launch, the head of operations sat in a review session and said four words that changed everything.

"This is not it."

Not "this needs some adjustments." Not "can we make a few changes." The platform that had been built did not do what the business needed it to do. Not in a minor way. In a fundamental, structural way that could not be fixed in two weeks.

The project was delayed by four months. The budget overran significantly. Two members of the project team left the organisation. And when we traced the failure back to its root, we found it in the requirements. Not in the technology. Not in the development team. In a requirements document that had been produced diligently, signed off promptly, and was completely wrong from the beginning. The BA had written down what the stakeholders said. Nobody had found out what they meant.

## The Real Cost of Poor Requirements

The systems and software industry has been studying the cost of requirements failures for decades. The numbers are consistently alarming. The Standish Group's research suggests that requirements-related issues; unclear, incomplete, or misunderstood requirements, account for the majority of project failures and cost overruns. IBM's Systems Sciences Institute found that a defect costs roughly 100 times more to fix in production than it does to prevent during the requirements phase.

But these figures, as striking as they are, only capture the direct financial cost. The indirect cost of poor requirements is harder to measure and often larger. There is the cost to the business relationship. A project that delivers something wrong does not just cost money. It damages the trust between the delivery team and the business. That trust, once damaged, makes every subsequent project harder. Stakeholders become more defensive, more demanding, and less willing to engage openly because their last experience taught them that engagement does not prevent failure.

There is the cost to the BA's professional reputation. The Business Analyst who consistently produces requirements that lead to rework, disputes, and late delivery will not be given the significant programmes. They may be technically proficient in many areas. But if the quality of their requirements work is uncertain, they will not be trusted with the projects that define careers.

And there is the cost that nobody talks about openly: the personal cost to the people who have to fix it. The developers who worked to a specification that turned out to be wrong. The testers whose UAT scripts were built on requirements that did not reflect what the business actually needed. The project manager who has to tell a sponsor that the delivery date is no longer achievable. Poor requirements are not an abstract quality problem. They have real consequences for real people.

## What a Requirement Actually Is

Here is the definition most BA textbooks give you: a requirement is a statement of what a system must do or what quality it must have.

That is technically accurate. But it does not help you write better requirements. So let me give you a more useful framing.

<strong><em>A requirement is a precise, verifiable statement of a capability, behaviour, or quality that a solution must exhibit in order to satisfy a business need.</em></strong>

Every word in that definition is doing work. Precise means there is no room for interpretation. Two people reading the requirement independently should arrive at the same understanding of what it means. Verifiable means there is a way to confirm whether the requirement has been met. If you cannot design a test that would tell you whether the requirement has been satisfied, it is not a requirement. It is an aspiration. Capability, behaviour, or quality covers the full scope of what requirements describe. And in order to satisfy a business need keeps the focus where it belongs: on the business outcome, not the technical implementation.

Now look at how far most requirements documentation is from that standard.

"<strong><em>The system should be user-friendly</em></strong>." That is not a requirement. It is an opinion. What does user-friendly mean? How would you test for it? What specific behaviour must the system exhibit?

"<strong><em>The report must be fast</em></strong>." Fast according to whom? Fast compared to what? What is the specific performance standard the system must meet?

"<strong><em>The system must handle large volumes of data</em></strong>." How large? What is the threshold? Under what conditions? Within what timeframe?

These are not extreme examples. I have seen requirements exactly like these in documents that were reviewed, approved, and used as the basis for system development. And then everyone expressed surprise when the delivered system did not meet the business's expectations.

## The Difference Between Documenting and Discovering

The most important distinction in requirements work is this: <strong><em>there is a difference between documenting what a stakeholder tells you and discovering what the system actually needs to do.</em></strong>

Documenting is a clerical function. You ask a question, you write down the answer. The stakeholder says "we need to be able to run a monthly report" and you write "the system must produce a monthly report." The requirement is captured. The question is whether it is right.

Discovering is an analytical function. You ask the question, you hear the answer, and then you go deeper. What does the report need to contain? Who will use it? How will they use it? What decisions will it inform? What happens if the data it needs is not available? What are the edge cases? What does the current process do that the new system must replicate, and what does it do that the new system should do differently?

The difference between a BA who documents and a BA who discovers is the difference between a requirements document that reflects what stakeholders said in a workshop and a requirements document that reflects what the system needs to do in the real world.

Stakeholders are not trying to mislead you when they give you incomplete requirements. They are not withholding information. They are giving you their best current understanding of what they need, filtered through what they think is possible, shaped by assumptions they have not examined, and articulated using language that makes sense in their world but may not translate cleanly into system behaviour.

Your job is not to accept that at face value. Your job is to help them get to the real requirement; the precise, verifiable, complete statement of what the system must do, by asking the questions they have not thought to ask themselves.

## What Requirements Excellence Actually Looks Like

Requirements excellence is not about producing longer documents or more detailed specifications. Some of the worst requirements I have encountered were in documents that ran to hundreds of pages. Length is not quality. Requirements excellence is about producing requirements that are correct, complete, and clear enough that a development team can build from them with confidence, a test team can verify against them without ambiguity, and a stakeholder can recognise the delivered system as the one they asked for. It shows up in specific, observable ways. A requirement written to a high standard has no ambiguous words. It does not use terms like "appropriate," "suitable," "adequate," "user-friendly," or "as needed" without defining what those terms mean in the specific context of the project. It specifies the actor, the action, and the condition. It has a corresponding acceptance criterion that can be tested.

It shows up in the elicitation process. A BA pursuing excellence does not accept the first answer. They probe. They challenge assumptions. They ask what happens in the exception case. They bring different stakeholders' requirements into dialogue with each other and surface the conflicts before they become development problems. It shows up in the management of requirements over time. Requirements do not stay static. Business needs change. Stakeholders learn more as the project progresses. A BA pursuing excellence has a process for managing that change, for capturing what changed, why it changed, what the impact is, and how the baseline is updated, rather than treating change as a problem to be avoided.

## The Mindset Shift That Changes Everything

Everything in requirements excellence flows from one fundamental shift in how you see your role. <strong><em>You are not a scribe. You are an analyst</em></strong>. A scribe takes what is given and writes it down. An analyst takes what is given and examines it, challenges it, tests it against what else they know, and works to understand not just what was said but what was meant, what was assumed, and what was not said at all.

When you approach requirements work as an analyst, every stakeholder conversation becomes an investigation. Every requirement becomes a hypothesis to be tested, not a statement to be recorded. Every sign-off becomes a milestone on the way to a verified baseline, not a task to be completed.

That shift from scribe to analyst is what separates requirements documentation from requirements excellence. And it is available to every Business Analyst regardless of experience level, industry, or methodology. It is not a skill you acquire over years of practice. It is a decision you make about how you are going to do this work.

This week, we are going to build every dimension of that practice.

- Day 2: Elicitation Mastery - the techniques, the questions, and the discipline that gets to the real requirement
- Day 3: Writing Requirements That Hold Up - functional and non-functional requirements in depth, quality criteria, and the documentation failures that cost projects
- Day 4: Managing Requirements Through the Lifecycle - validation, traceability, change management, and what happens after sign-off
- Day 5: Requirements Excellence in your career - what mastery looks like at every BA level, interview preparation, and the six principles to carry forward.

<strong><em>Go out and be successful.</em></strong>

## Oluwatosin Ogunkoya | Flotog BA Insights | www.flotogbainsights.com

<em>Tomorrow: Elicitation Mastery. The six techniques every BA must command, the questions that surface what stakeholders do not know they know, and the elicitation mistakes that produce shallow requirements.</em>
