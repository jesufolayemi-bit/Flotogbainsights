---
title: "Iterate Like an Analyst"
slug: iterate-like-an-analyst
series: "Prompting for Business Analysts: Writing Instructions That Get Usable Drafts, Using Skills You Already Have"
day: 4
dek: "The first answer is a draft, and the follow-ups that turn it into something you would sign"
description: "The first draft took 40 seconds; the one she signed took four more rounds. Six follow-up prompts worth keeping, and when to start again."
date: 2026-10-29T06:00:00.000Z
cover: "/images/blog/prompting-day-4-iterate.jpg"
readingTime: 6
linkedinPost: |
  The first draft took 40 seconds. The version she was willing to put her name on took four more rounds.

  That is not a failure of the tool. It is how analysts have always worked. Nobody signs off a first draft of a requirements document, and the same standard applies to what an assistant gives you. The skill is in the follow-ups: challenge this, what is missing, give me two alternatives, rewrite for this reader.

  Each round takes seconds, and each is a review you would run on a colleague's work. The analysts who get the best results treat the first answer as the start of the conversation, not the end of it.

  Today I'm sharing the follow-up prompts worth keeping and a before-and-after across three rounds.

  This is day 4 of 5 on prompting for business analysts. So far: the five parts of a prompt, the context to supply, and how to ask for the right output.

  Read the full article below. Link to my website/blog is in the comments.

  What is the first follow-up question you ask when a draft lands on your desk?

  #BusinessAnalysis #Prompting #AIforBAs #CriticalThinking #FlotogBAInsights
tableImages:
  - "/images/blog/tables/iterate-like-an-analyst-table-1.png"
---
<img src="/images/blog/prompting-day-4-iterate.jpg" alt="Three drafts of the same page fanned across a desk, heavily marked, lightly marked and clean with a tick" width="1600" height="893" loading="lazy">

The first draft takes 40 seconds to arrive. The version the analyst is willing to put her name on takes four more rounds and about fifteen minutes. She is not frustrated by this, because she has worked this way her whole career. Nobody she has worked with has ever signed off a first draft of a requirements document, and she does not intend to start with one from an assistant. What she has learned is which follow-ups turn a plausible draft into a reliable one. If you are joining us on day four, here is where we are. This week is five days on prompting for business analysts, following one analyst who is writing the requirements for a service request intake form for a facilities team that currently takes requests by email, where repairs get lost and urgency is unclear. Day one showed that a prompt is a specification with five parts: role, task, context, constraints and format. Day two covered the context to supply, and what to leave out. Day three covered naming the shape of the output, keeping to one task per prompt, and asking for assumptions and open questions. Today is about what happens when the draft arrives.

A common misunderstanding about prompting is that the goal is the perfect prompt, one message that produces a finished result. That is sometimes possible for simple tasks and almost never possible for real analyst work, where the quality of the output depends on reviewing it against things the assistant cannot see: your stakeholders, your history, your standards. A better model is a conversation with a fast, tireless junior colleague. The first message gets you a draft. The next several get you a good one. Your job in between is the job you already do, which is review.

## Review before you reply

Before typing a follow-up, read the draft the way you would read a colleague's. Does it answer the question you asked? Does it match what you know about the situation? Where does it sound confident about something you have never told it? Mark three things: what is right, what is wrong and what is missing. The most common error in the first round is not an outright mistake. It is a plausible statement that does not apply to your organisation, such as an approval step you do not have, or a user group you do not serve.

Check the specifics against your own knowledge. Names, figures, dates, citations and any claim about how a regulation or standard works should be confirmed from a source you trust before they go into a deliverable. That responsibility stays with you, and it is covered in more depth in a later week of this series. For now, the working rule is simple: the assistant drafts, and you decide what stays.

Then reply specifically. "Make it better" gives the assistant nothing to aim at, and it will usually change things you liked. "Keep requirements 1 to 6 as they are. Rewrite 7 and 8 so each has a testable acceptance criterion" tells it exactly what to touch. Precision in follow-ups saves rounds, in the same way that precise review comments save a colleague an afternoon.

One more request earns its place at this stage: ask the assistant to show what it changed. When you send a revision request, add "list the changes you made" and the answer gives you a short audit trail. It lets you confirm that only the intended items moved, and it catches the occasional quiet edit to something you had already approved. Analysts already do this with tracked changes in a document, and the instinct carries over directly. A revised draft whose changes you cannot see is a draft you would have to re-read in full, which removes much of the time saved.

## Six follow-ups worth keeping

A small set of follow-ups covers most of what analysts need, and each corresponds to a review question you would ask a person. Challenge it: "What is the weakest part of this draft, and why?" Test it: "List five situations this does not cover." Widen it: "Give me two alternative approaches and the trade-offs of each." Narrow it: "Rewrite this for a non-technical sponsor, in under 150 words." Check it: "Which statements here are assumptions and not facts I gave you?" And tidy it: "Make the terminology consistent and remove any repetition." Used in sequence, those six take a draft through the same passes a careful reviewer would.

The table below follows one prompt across three rounds for the intake form, to show how each round changes the draft.

<p class="table-title"><strong>ONE REQUEST ACROSS THREE ROUNDS</strong></p>

<table>
<thead><tr><th>Round</th><th>What the analyst asked</th><th>What changed</th></tr></thead>
<tbody><tr><td><strong>1</strong></td><td>Draft ten functional requirements for the intake form with acceptance criteria.</td><td>A usable first draft, with two requirements too vague to test and one assumption about approvals.</td></tr><tr><td><strong>2</strong></td><td>List situations this does not cover, and fix the vague requirements.</td><td>Urgent repairs, duplicate requests and requests with no photo are added. The vague items now have testable criteria.</td></tr><tr><td><strong>3</strong></td><td>Which statements are assumptions? Rewrite for the facilities manager.</td><td>The approvals assumption is flagged and confirmed with her. Language is simplified for review.</td></tr></tbody>
</table>

*Illustrative. Three short rounds, each a review step the analyst would run on any draft.*

Notice that the analyst's judgment drives every row. The assistant found missing situations, but she decided which ones mattered. It flagged an assumption about approvals, and only the facilities manager could confirm it. The iteration is fast because the mechanics are cheap. The quality comes from the analyst deciding what to keep.

It is also worth keeping a short note of what you rejected and why. If the assistant proposed a mandatory photo upload and the facilities manager said no because staff submit requests from their phones in basements with no signal, that reason belongs in the context for the next round, and in your decision log. Otherwise the same idea returns in round four, or in next month's project, and you rediscover the same objection. Writing down rejected options is standard good practice in analysis, and it is just as useful here, because the conversation has no memory of your reasons unless you restate them.

## Knowing when to stop, and when to start again

Iteration has diminishing returns, and the signal is easy to recognise. When each round changes wording and not substance, you have reached the limit of what the conversation can add, and the remaining effort is better spent with a stakeholder. When the draft keeps drifting away from what you want, the cause is usually in the original context, and it is faster to rewrite the opening prompt, with what you have learned, than to correct the same misunderstanding repeatedly. Long conversations can also wander, and early instructions can fade as the exchange grows, so a clean restart with a tight summary of what you have settled is often quicker than a tenth correction. Starting a fresh conversation with a better first prompt is not a failure. It is the equivalent of rewriting a brief once you understand the problem properly.

Keep the version that worked. The final form of the prompt, with its context, its constraints and the corrections you needed to make, is worth more than the draft it produced, because it is something you can use again. That is exactly what tomorrow is about: turning the prompts that worked into a small library you can reach for on the next project.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Build a Prompt Library You Can Reuse - Templates for recurring BA tasks, how to name and share them, and a one-week practice plan.</em>
