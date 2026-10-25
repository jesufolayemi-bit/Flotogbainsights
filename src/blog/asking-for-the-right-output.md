---
title: "Asking for the Right Output"
slug: asking-for-the-right-output
series: "Prompting for Business Analysts: Writing Instructions That Get Usable Drafts, Using Skills You Already Have"
day: 3
dek: "Format, scope and the habit of getting the assistant to ask you questions first"
description: "Name the shape you want, ask for one task at a time, and let the assistant interview you first. How BAs get usable output from an AI assistant."
date: 2026-10-28T06:00:00.000Z
cover: "/images/blog/prompting-day-3-right-output.jpg"
readingTime: 6
linkedinPost: |
  "Write me requirements" is a request for everything. It returned everything, and none of it was usable.

  The analyst changed one line: "Give me 12 user stories in the given-when-then style, as a table, with the open questions listed separately." The same assistant produced something she could review in ten minutes.

  Shape matters as much as content. When you name the format, ask for one task at a time, and tell the assistant to list its assumptions, you get drafts that fit into your process instead of fighting it. One more habit changes the game: asking the assistant to interview you before it drafts anything.

  Today I'm covering output formats, scope, and the interview technique.

  This is day 3 of 5 on prompting for business analysts. So far: the five parts of a prompt, and the context that makes a draft yours.

  Read the full article below. Link to my website/blog is in the comments.

  Which deliverable would you most like to get in a usable format on the first try?

  #BusinessAnalysis #Prompting #AIforBAs #UserStories #FlotogBAInsights
tableImages:
  - "/images/blog/tables/asking-for-the-right-output-table-1.png"
---
<img src="/images/blog/prompting-day-3-right-output.jpg" alt="Containers of different shapes on a desk, with a sheet of paper being folded to fit a teal tray" width="1600" height="893" loading="lazy">

An analyst asks an AI assistant to "write me requirements" for the intake form and gets an essay. It mixes functional and non-functional points, has no numbering, repeats itself twice and ends with a summary she did not ask for. She changes one line: "Give me 12 user stories in the given-when-then style, as a table, with the open questions listed separately." The same assistant now produces something she can review in ten minutes. The only thing that changed was the shape she asked for. If you are joining us on day three, here is where we are. This week is five days on prompting for business analysts, following one analyst who is writing the requirements for a service request intake form for a facilities team that currently takes requests by email, where repairs get lost and urgency is unclear. Day one showed that a prompt is a specification with five parts: role, task, context, constraints and format. Day two covered context: the audience, the situation, the limits and one real example, and why confidential material should be anonymised before it is pasted anywhere. Today we turn to the shape of the output you ask for.

Giving the assistant enough context to work with is the first half of a good prompt. The second half is telling it what to hand back. Analysts have strong views about what a good deliverable looks like, because they produce them every week: a numbered requirement list, a user story with acceptance criteria, a decision table, a stakeholder map, a set of interview questions. Those formats are not decoration. They are how the work gets reviewed, estimated and built. An assistant that produces a pleasant essay when you needed a table has produced something you must now convert, which is often as much effort as writing it yourself.

## Name the shape, and keep to one job

The simplest improvement to any prompt is to say what the output should look like, as precisely as you would specify a template to a colleague. Which format: a list, a table, a document with headings? How many items? In what order? With which columns? Which standard, such as given-when-then or the role-want-benefit pattern for user stories? Which reader, and therefore which level of detail? The table below shows common analyst requests rewritten in this way.

<p class="table-title"><strong>FROM A BROAD REQUEST TO A SPECIFIC ONE</strong></p>

<table>
<thead><tr><th>Instead of</th><th>Ask for</th></tr></thead>
<tbody><tr><td><strong>Write me requirements</strong></td><td>A numbered list of functional requirements, each with one acceptance criterion, ten at most.</td></tr><tr><td><strong>Help me with user stories</strong></td><td>Twelve user stories in the role-want-benefit pattern, in a table with a column for acceptance criteria.</td></tr><tr><td><strong>Summarise this process</strong></td><td>A step-by-step list of the process as described, then a separate list of unclear or missing steps.</td></tr><tr><td><strong>Prepare for my interview</strong></td><td>Fifteen open questions for the facilities manager, grouped by theme, with a follow-up for each.</td></tr><tr><td><strong>Review my document</strong></td><td>A list of ambiguous statements, each with the exact quote and a suggested rewrite.</td></tr></tbody>
</table>

*Illustrative. The right-hand column names count, shape and purpose.*

The second discipline is scope: one task per prompt. A request that bundles "write the requirements, list the risks, suggest a rollout plan and draft the email to stakeholders" gets four shallow answers. The same four requests as four prompts, each building on the last, get four useful ones. Splitting also helps you review, because you can check each output against its own purpose before moving on. If you notice yourself writing "and also" more than once in a prompt, that is the signal to split it.

Length and level are part of the shape too, and they are easy to forget. Say how long the output should be, in items or in words, and who it is pitched at. "Explain the approval step in two sentences for a facilities manager who has never seen a process diagram" returns something quite different from the same request aimed at an engineer. If you want a specific tone, such as plain, formal or encouraging, name it. Without these instructions the assistant defaults to a general-purpose middle that suits nobody in particular, and you spend the next round pulling it towards the audience you had in mind from the start.

A related habit is to ask for the reasoning you need and not the reasoning you do not. When the output is a draft you will edit, ask for the draft. When it is a judgment you will rely on, ask the assistant to say why, in a sentence or two per item, so you can see what it based the answer on. A list of risks is more useful with a one-line cause beside each, and a recommendation is more useful with the assumptions it rests on.

## Ask for assumptions and open questions

Assistants fill gaps silently. If your prompt does not say whether the form is for staff or for visitors, the draft will assume one of them and sound sure about it. The simplest protection is to end the prompt with a standing request: "List any assumptions you made, and any questions you would need answered to improve this." It costs one sentence, and it surfaces the gaps in your own thinking along with the assistant's guesses.

Treat that list as a requirements asset. Some of the assumptions will be correct and can be confirmed with the stakeholder in seconds. Some will be wrong, and finding that out on Wednesday afternoon is much cheaper than on the day of the review. Some will reveal a decision nobody had made. Analysts often find the questions list more valuable than the draft that came with it, and they carry it straight into their next stakeholder meeting.

## Let the assistant interview you

The most useful technique this week takes only a minute to try. When you are not sure what context to provide, hand the job back: "I need to write requirements for a service request intake form for a facilities team. Before drafting anything, ask me up to eight questions you need answered, one at a time." The assistant then plays the role of a careful junior analyst, asking about users, volumes, urgency, approvals and exceptions. You answer in a sentence each, and by the end you have written the context section without having to think of every item in advance.

Two cautions keep this honest. Answer the questions with facts you actually hold, and when you do not know, say "unknown" so the gap stays visible and does not get patched with a guess. And read the questions themselves, because a good interview reveals what the assistant considers important. If it never asks about approvals or exceptions, that is a signal to raise them yourself. Tomorrow turns to what happens next, when the draft arrives and the real analyst work starts.

The interview technique also works in reverse, as a way to prepare. Before a workshop, ask the assistant to play a sceptical stakeholder and put five hard questions to your proposal. The questions will not be perfect, but several will be ones you had not thought about, and rehearsing the answers costs nothing. Analysts who use it this way describe it as a sparring partner. It never replaces the real conversation with the real stakeholder, and it should not try to. It makes you better prepared for that conversation, which is where the actual decisions get made.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Iterate Like an Analyst - Treating the first answer as a draft, the follow-up prompts worth keeping, and how a prompt improves over three rounds.</em>
