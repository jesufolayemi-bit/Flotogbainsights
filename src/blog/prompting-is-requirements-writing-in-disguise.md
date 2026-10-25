---
title: "Prompting Is Requirements Writing in Disguise"
slug: prompting-is-requirements-writing-in-disguise
series: "Prompting for Business Analysts: Writing Instructions That Get Usable Drafts, Using Skills You Already Have"
day: 1
dek: "Why a prompt is a specification, and the five parts every good one has"
description: "A vague prompt gets a vague draft, from people and software alike. Why prompting is requirements writing, and the five parts every good prompt has."
date: 2026-10-26T06:00:00.000Z
cover: "/images/blog/prompting-day-1-requirements-in-disguise.jpg"
readingTime: 5
linkedinPost: |
  An analyst typed "write requirements for a service request form" into an AI assistant and got four pages of generic text.

  She was disappointed. A colleague read the prompt and asked her one question: if a junior analyst had been given that brief, what would they have come back with?

  The same four pages. A prompt is a specification, and a vague one gets a vague result from people and software alike. The good news for business analysts is that you already have the skill. Writing a clear prompt uses the same muscles as writing a clear requirement, and five parts cover almost every case.

  This week is five days on prompting for BAs, using ordinary analyst tasks.

  Read the full article below. Link to my website/blog is in the comments.

  What is the vaguest brief you have ever been handed, and what did you do about it?

  #BusinessAnalysis #Prompting #AIforBAs #Requirements #FlotogBAInsights
tableImages:
  - "/images/blog/tables/prompting-is-requirements-writing-in-disguise-table-1.png"
---
<img src="/images/blog/prompting-day-1-requirements-in-disguise.jpg" alt="A hand-drawn requirements page beside a laptop showing the same five-section flow, with a pencil between them" width="1600" height="893" loading="lazy">

An analyst types "write requirements for a service request form" into an AI assistant and gets back four pages of generic text. It lists a name field, an email field, a description box and a submit button, plus a paragraph about user-friendly design. She is disappointed, and a colleague reads the prompt over her shoulder. "If you had handed that sentence to a junior analyst," he says, "what would they have given you?" She thinks about it. "The same four pages." That exchange contains most of what this week has to say. A prompt is an instruction written for a reader who has no memory of your project, no knowledge of your stakeholders and no way to ask you what you meant. It will try to be helpful with whatever it is given, and when it is given very little it fills the gaps with the most average guess available. A new analyst on their first day behaves the same way. The difference is that the junior would, at some point, come back and ask questions. The assistant usually will not unless you tell it to, which means the questions have to be answered before you press enter.

Business analysts are better placed for this than they tend to assume. The skill that makes a prompt work is the skill that makes a requirement work: saying who the work is for, what it is meant to achieve, what is known, what limits apply and what a finished version looks like. This week uses one running example, an analyst writing a service request intake form for a facilities team that currently takes requests by email. It is illustrative, and every technique in it applies to any analyst task.

## The same mistakes, in a new place

Consider the usual faults in a weak requirement. It jumps to a solution before stating the problem. It leaves the audience unspecified. It uses words such as "user-friendly" or "quick" that nobody can test. It has no boundary, so the work can expand without end. And it never says what done looks like, so nobody can tell whether it has been delivered. Now read the prompt from the opening again: "write requirements for a service request form." It proposes a form, which is a solution, without saying what problem the form solves. It has no audience, no limits and no sense of what a good result would be.

That is the first reframe, and it is worth carrying through the week. When a prompt disappoints, ask what you would say about the same sentence in a requirements review. The comments you would make there are the edits the prompt needs: what problem does this solve, for whom, within what limits, and how will we know it worked? Analysts who make this habit find that their prompts improve without learning any special vocabulary, because they are applying a check they already run on every document.

It also changes how the work feels. A prompt stops being a magic phrase that either works or does not, and becomes a short document with a purpose, which can be reviewed, improved and reused like any other. That is a much more comfortable place for an experienced professional to stand than trying to guess which words an assistant happens to like. It also means the improvement transfers: a better habit of briefing helps with the assistant, with developers, with stakeholders and with your own notes.

## Five parts of a good prompt

Nearly every useful prompt for analyst work contains five parts, and they map directly onto things you already include in a good brief. The table below shows each part with an example from the running scenario.

<p class="table-title"><strong>THE FIVE PARTS OF A PROMPT, APPLIED TO THE INTAKE FORM</strong></p>

<table>
<thead><tr><th>Part</th><th>What it does</th><th>Example</th></tr></thead>
<tbody><tr><td><strong>Role</strong></td><td>Sets the point of view and the level of expertise.</td><td>You are a senior business analyst working with a facilities team.</td></tr><tr><td><strong>Task</strong></td><td>States the single job to be done.</td><td>Draft the functional requirements for a service request intake form.</td></tr><tr><td><strong>Context</strong></td><td>Supplies what is known about the situation.</td><td>Staff currently email requests. Repairs get lost and urgency is unclear.</td></tr><tr><td><strong>Constraints</strong></td><td>Sets limits, exclusions and standards.</td><td>Maximum ten fields. No integration with the finance system in this phase.</td></tr><tr><td><strong>Format</strong></td><td>Describes what the output should look like.</td><td>A numbered list of requirements, each with one acceptance criterion.</td></tr></tbody>
</table>

*Illustrative. The same five parts apply to almost any analyst task.*

None of the five is clever. Role gives the assistant a standpoint, which changes the tone and depth of the answer: a senior analyst, a sceptical reviewer and a friendly trainer will say different things about the same document. Task keeps the request to one job, which is much easier to do well than three bundled together. Context is the part analysts underuse and the part that matters most, and it gets all of tomorrow. Constraints are where you put the boundaries you would put in a scope statement. Format tells the assistant what shape of output you can use, which saves you from reformatting a wall of text into the table you needed.

The order is flexible, and many analysts put the task first and the role second, but leaving any of the five to chance is how a disappointing result gets produced. You will not need all five every time. A quick question about a term needs only a task. A draft that other people will read needs most of them. The skill is in sensing which parts a given job requires, in the same way you decide how much detail a requirement needs before it is safe to hand over.

## What the rewritten prompt looks like

Put the five parts together and the opening prompt becomes something like this. "You are a senior business analyst working with a facilities team. Draft the functional requirements for a service request intake form. Staff currently email requests, and repairs are sometimes lost and urgency is unclear. Limit the form to ten fields, and leave out integration with the finance system for now. Present a numbered list of requirements, each with one acceptance criterion, and list any assumptions you made at the end." It takes about a minute longer to write than the original sentence, and the draft that comes back will be something you can actually start reviewing.

Notice what the rewrite did not need. It did not need clever phrasing, a list of magic words, or a long essay. It needed the kind of information a careful colleague would have asked for in the first five minutes of a conversation. When a prompt grows, it should be because the task genuinely needs more context, not because the writer believes length is a technique.

Tomorrow takes the hardest part of this, context, and shows what to put in, what to leave out and how to handle information that should not be pasted anywhere at all.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Context Is the Whole Game - What to include, what to leave out, and how to handle sensitive information safely.</em>
