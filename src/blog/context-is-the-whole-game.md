---
title: "Context Is the Whole Game"
slug: context-is-the-whole-game
series: "Prompting for Business Analysts: Writing Instructions That Get Usable Drafts, Using Skills You Already Have"
day: 2
dek: "What to include, what to leave out, and how to keep sensitive information out of the prompt"
description: "Two prompts asked for the same thing: one 18 words, one 120. What context to give an AI assistant, what to leave out, and what never to paste."
date: 2026-10-27T06:00:00.000Z
cover: "/images/blog/prompting-day-2-context-v2.jpg"
readingTime: 6
linkedinPost: |
  Two prompts asked for the same thing. One was 18 words and the other was 120.

  The short one returned a generic list that could have come from any company. The long one returned a draft the facilities manager recognised as her own building within a minute.

  The difference was context: who the work was for, what was already known, one real example, and the limits that applied. Most analysts under-supply context out of habit, because they assume the assistant knows what they know. It does not. It knows what you typed, and nothing else.

  Today covers what to put in, what to leave out, and how to keep client names and personal data out of the conversation altogether.

  This is day 2 of 5 on prompting for business analysts. Day 1 showed that a prompt is a specification with five parts.

  Read the full article below. Link to my website/blog is in the comments.

  What is the one piece of context you always forget to give?

  #BusinessAnalysis #Prompting #AIforBAs #Productivity #FlotogBAInsights
tableImages:
  - "/images/blog/tables/context-is-the-whole-game-table-1.png"
---
<img src="/images/blog/prompting-day-2-context-v2.jpg" alt="Illustration of index cards sorted into two piles, one under a gold clip and one under a teal glass paperweight, below a pinned sample document" width="1600" height="893" loading="lazy">

Two analysts ask an AI assistant for the same thing: a draft set of requirements for a service request form. One prompt runs to 18 words and the other to about 120. The short one returns a generic list that could have come from any organisation. The long one returns something the facilities manager looks at and says, within a minute, "that is our building." The assistant in both cases was identical. What differed was what each analyst had been willing to tell it. If you are joining us on day two, here is where we are. This week is five days on prompting for business analysts, following one analyst who is writing the requirements for a service request intake form for a facilities team that currently takes requests by email, where repairs get lost and urgency is unclear. On day one we saw that a prompt is a specification, and that a good one has five parts: role, task, context, constraints and format. Today we take the part that does most of the work, which is context.

Context is where prompting is won or lost, and it is also where analysts have a head start. Most of a business analyst's working day is spent gathering context: who the stakeholders are, what the problem looks like on the ground, what has been tried, what the limits are. The assistant has none of that, and it cannot go and find any of it. It has only what is in the conversation. The five parts of a prompt (role, task, context, constraints and format) all depend on this one: a role without context is a costume, and a task without context is a guess.

## What to put in

The most useful context falls into four groups. The first is the audience: who will read the output and what they care about. A summary for a facilities manager who wants fewer lost repairs is written differently from the same summary for a finance director who wants a cost per request. The second is the situation: the current process, the pain, the history and what has already been ruled out. A sentence such as "staff email requests today, and repairs are sometimes lost and urgency is unclear" does more work than a paragraph of general advice.

The third is the limits that apply: the scope boundary, the standards your organisation uses, the vocabulary your stakeholders recognise. If your team writes acceptance criteria in a given-when-then pattern, say so. If "tenant" and "occupant" mean different things in your business, say so. These are the things a new analyst would learn from a team handbook in the first week, and the assistant needs them in the first message.

The fourth is the one most analysts skip, and it is the highest value of all: an example. If you have a requirement you consider well written, paste one, anonymised, and say "match this style and level of detail." If you have a table layout you want, show one. An example carries a lot of information that is hard to describe, such as the tone, the granularity, the structure and the way you handle edge cases. One good sample usually does more than three paragraphs of description, and it saves a round of corrections afterwards.

It also helps to say what you do not know. "The volume of requests is unknown, so do not assume one" stops the assistant from inventing a number and presenting it as a fact, and it marks the gap for you to close with a stakeholder. Analysts do this instinctively in a workshop, where an honest "we do not know yet" is respected, and the same honesty makes an assistant's draft more useful, because the unknowns stay visible instead of being quietly filled with confident guesses. The table below shows the difference in practice, using the same intake form task. The strong version is longer, but every added sentence answers a question the assistant would otherwise have to guess at.

<p class="table-title"><strong>WEAK AND STRONG VERSIONS OF THE SAME PROMPT</strong></p>

<table>
<thead><tr><th></th><th>Weak prompt</th><th>Strong prompt</th></tr></thead>
<tbody><tr><td><strong>Audience</strong></td><td>Not stated</td><td>For the facilities manager, who will approve the scope.</td></tr><tr><td><strong>Situation</strong></td><td>Not stated</td><td>Staff email requests. Repairs get lost and urgency is unclear.</td></tr><tr><td><strong>Limits</strong></td><td>Not stated</td><td>Ten fields at most. No finance integration in this phase.</td></tr><tr><td><strong>Example</strong></td><td>None</td><td>One existing requirement pasted, with "match this style".</td></tr><tr><td><strong>Result</strong></td><td>Generic list of fields</td><td>Draft the facilities manager recognises as her own building.</td></tr></tbody>
</table>

*Illustrative. The task sentence is the same in both; only the context changes.*

## What to leave out

More is not always better. Context that does not bear on the task makes the answer worse, because the assistant treats everything you supply as relevant. Three kinds of material are best cut. The first is background that does not change the output: the full history of the project, the org chart, the minutes of three earlier meetings. Give the two sentences that matter and leave the rest. The second is contradictory instructions: "keep it brief" and "cover every scenario" in the same prompt force the assistant to choose, and it may not choose the way you would. Decide which matters and say so. The third is your own half-formed solution, presented as a fact. If you are not sure, say "I am considering X, test the idea" and not "use X."

A useful test before sending is to read the prompt as if you were the one receiving it, with no knowledge of the project. Would you know who it was for, what the problem was, what the limits were and what a finished answer should look like? If any of those is missing, add it. If a sentence would not change what you would do, delete it. Most good prompts end up a paragraph or two long, and nearly all of that length is context.

## Information that should never be pasted

Business analysts handle material that is confidential by default: client names, contracts, personal data about staff and customers, pricing, internal strategy, security details. Before you paste anything into an assistant, find out what your organisation permits. Many companies approve specific tools and prohibit others, and some forbid putting client material into any external service. That policy applies to you as it does to everyone, and it comes before any productivity argument. If your organisation has no written policy yet, that is itself worth raising, because analysts will be using these tools whether or not anyone has set the rules, and a short, clear rule protects both the business and the person pasting.

Even where a tool is approved, a simple habit protects you: anonymise first. Replace names with roles, a company with "the client", and figures with plausible placeholders, and strip out anything that identifies a person. The assistant almost never needs the real name to do the job, and your draft will be as good without it. When in doubt about a specific document, ask your manager or your data protection lead before pasting, not after.

That habit also makes your prompts reusable. A prompt written with roles and placeholders can be used on the next project without editing, and it is safe to share with a colleague. Thursday and Friday build on exactly that idea.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Asking for the Right Output - How to request stories, tables and question lists, one task at a time, and how to make the assistant ask you first.</em>
