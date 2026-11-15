---
title: "From Requirements List to Dated Plan in Six Steps"
slug: from-requirements-list-to-dated-plan-in-six-steps
series: "From Requirements Owner to Schedule Owner: Five Tools for the Business Analyst Who Has Just Been Handed a Deadline"
day: 3
dek: "A requirements list says what. A plan says what, in what order, and by when."
description: "Six steps turn a requirements list into a dated plan: estimate, sequence, find the critical path, add one buffer, then set dates. A worked example included."
date: 2026-11-18T06:00:00.000Z
readingTime: 6
linkedinPost: |
  A requirements list is not a plan. It tells you what to build, but not in what order, who is waiting on whom, or when any of it will be done.

  Here is the six-step route I use to turn one into the other:

  1. List the tasks

  2. Estimate each one as a range

  3. Say what each task waits on

  4. Find the critical path, the longest chain of waiting

  5. Add one buffer, not padding on every task

  6. Put dates and owners against the result

  The article works through a small example, with the numbers, so you can follow along.

  This is day 3 of 5 on moving from requirements owner to schedule owner.

  Read the full article below. Link to my website/blog is in the comments.

  Which step do you usually skip?

  #BusinessAnalysis #ProjectManagement #ProjectPlanning #BAtoPM #FlotogBAInsights
cover: "/images/blog/day-3-dated-plan.jpg"
tableImages:
  - "/images/blog/tables/from-requirements-list-to-dated-plan-in-six-steps-table-1.png"
---
<img src="/images/blog/day-3-dated-plan.jpg" alt="A network of connected nodes with the longest path highlighted in gold" width="1600" height="900" loading="lazy">

A requirements list tells you what has to be built. It does not tell you in what order, who is waiting on whom, or when any of it will be finished. Turning the list into a plan is a short, learnable process, and most of the value comes from two things analysts rarely do on a first attempt: drawing the dependencies, and finding the longest chain of waiting. If you are joining us on day three, here is where we are. This week is five tools for the business analyst who now owns a delivery date. Day one covered five shifts in thinking, from what to when, from describing to committing, from one answer to a range, from stakeholders to dependencies, and from being consulted to being accountable. Day two showed how to break work into small tasks and give each an estimate as a range. Today we take a set of estimated tasks and turn them into a dated plan, in six steps.

## Why a list is not yet a plan

A list of requirements, even a well-written one, is a statement of intent. Each line says something the finished product must do, and the order on the page usually reflects how the information was gathered, not how the work must happen. Two requirements may look equally important and still be very different in timing, because one can start immediately and the other cannot begin until a third is done.

A plan adds three things the list lacks: duration, sequence and ownership. Duration is how long each piece takes. Sequence is what must finish before something else can start. Ownership is who is responsible and available. When you add those, something useful happens. You discover that the total time is not the sum of the task durations, because some work can happen in parallel, and that a small number of tasks decide the date while the rest have room to move.

The example below is deliberately tiny, so that every number can be checked at a glance. It has six tasks, with durations in working days and the tasks each one waits on. Real projects have more lines, but the method does not change.

<p class="table-title"><strong>A SMALL WORKED EXAMPLE (WORKING DAYS)</strong></p>

<table>
<thead><tr><th>Task</th><th>Days</th><th>Starts after</th></tr></thead>
<tbody><tr><td><strong>A. Confirm scope</strong></td><td>2</td><td>Nothing</td></tr><tr><td><strong>B. Design the solution</strong></td><td>4</td><td>A</td></tr><tr><td><strong>C. Build the core features</strong></td><td>6</td><td>B</td></tr><tr><td><strong>D. Build the reports</strong></td><td>3</td><td>B</td></tr><tr><td><strong>E. Test everything</strong></td><td>4</td><td>C and D</td></tr><tr><td><strong>F. Prepare for go-live</strong></td><td>2</td><td>E</td></tr></tbody>
</table>

*Illustrative. The durations are the expected figures from your estimates.*

## The six steps

1. List the tasks. Start from the breakdown you built on day two and make sure every requirement has the work needed to deliver it, including testing, training and handover. A plan built on an incomplete list is wrong from the first day.

>

2. Estimate each task as a range. Use the best, likely and worst figures, and take the expected figure from them. Use the expected figure in the plan, and keep the worst case in view as a warning.

>

3. Say what each task waits on. For every task, ask: what has to be finished before this can start? Include things outside your team, such as an approval or a delivery from someone else. In the table above, tasks C and D both wait on B, and E waits on both of them.

>

4. Find the critical path. Follow each chain of waiting from start to finish and add up the days. The longest chain decides the earliest finish date, and any delay on it delays the whole project. Here, A then B then C then E then F is 2 + 4 + 6 + 4 + 2 = 18 days. The route through the reports, A then B then D then E then F, is 2 + 4 + 3 + 4 + 2 = 15 days.

>

5. Add one buffer. Place a single block of spare time at the end of the critical path, not a little padding on every task. For this example, about 20% is 4 days, which makes 22 working days. Explain what the buffer is for, and agree that it is a shared reserve for the project and not a private allowance for each task.

>

6. Put dates and owners against the result. Only now do you turn working days into calendar dates, taking account of weekends, public holidays and when people are really available. Name one owner per task, and share the plan with each of them so they can say whether it looks right.

Notice the order. Dates come last, not first. Many first plans start with the date someone wants and work backwards, which produces a plan that fits the wish and not the work. Working forward from honest estimates, then comparing the result with the wish, turns the conversation into one about trade-offs instead of one about hope.

## Reading the result: the critical path and the buffer

The critical path in the example is 18 days, and the reports have 3 days of float, which means they could slip by up to 3 days without moving the finish date. That is useful in two ways. First, it tells you where to put your attention: any delay to the scope, design, core build, testing or go-live preparation delays the whole project, while a small delay to the reports does not. Second, it tells you where you have flexibility. If you need to pull the date in, shortening a task on the critical path helps, and shortening the reports does not.

Be careful with the second point. When you shorten the critical path, a different path can become the longest, and the plan changes. If the core build were cut from 6 days to 2, the route through the reports (15 days) would become the longest, and the critical path would move. Re-check the chains after every change, because the plan is a living picture, not a fixed answer.

The buffer deserves a short word of its own. Padding every task by a little feels safe, but people use all the time they are given, so the padding vanishes without being noticed. A single buffer at the end of the critical path is visible, can be managed and can be reported on. When it begins to shrink, you have an early signal that the date is at risk, which is exactly the kind of early news a schedule owner needs. The figure of 20% used here is an illustration, not a rule. The right size depends on how uncertain the work is, and your three-point ranges are the best guide you have.

Share the plan early, with its assumptions, and ask the owners to challenge it. A plan that nobody but you has seen is a guess in a nicer format. Tomorrow is a short, practical tool for a moment every schedule owner meets: someone asks for a date, and you have to decide what to ask before you answer.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Eight Questions to Ask Before You Commit to a Date - A checklist for the moment someone asks, "When will it be done?"</em>
