---
title: "Break It Down Until You Can Estimate It: A Framework for Honest Estimates"
slug: break-it-down-until-you-can-estimate-it-a-framework-for-honest-estimates
series: "From Requirements Owner to Schedule Owner: Five Tools for the Business Analyst Who Has Just Been Handed a Deadline"
day: 2
dek: "No one can estimate a big task. Everyone can estimate a small one."
description: "Nobody can estimate a vague task. Break work down until you can, ask three questions, and give ranges with the three-point method. A framework for analysts."
date: 2026-11-17T06:00:00.000Z
readingTime: 5
linkedinPost: |
  Nobody can estimate "build the reporting module". Almost anyone can estimate "write the query for the monthly summary".

  That is the whole idea behind a work breakdown: keep splitting the work until each piece is small enough to estimate honestly. Add three questions and a best, likely and worst figure, and a guess becomes an estimate you can defend.

  The carousel walks through the framework in eight slides. Save it for the next time someone asks "how long will it take?"

  This is day 2 of 5 on moving from requirements owner to schedule owner.

  Read the full article on my website. Link is in the comments.

  What is the biggest task you have ever been asked to estimate in one go?

  #BusinessAnalysis #ProjectManagement #Estimation #BAtoPM #FlotogBAInsights
cover: "/images/blog/day-2-break-it-down.jpg"
linkedinFormat: carousel
carouselPdf: "/images/blog/carousels/day-2-carousel-break-it-down.pdf"
carouselCaption: |
  Nobody can estimate "build the reporting module". Almost anyone can estimate "write the query for the monthly summary".

  That is the whole idea behind a work breakdown: keep splitting the work until each piece is small enough to estimate honestly. Add three questions and a best, likely and worst figure, and a guess becomes an estimate you can defend.

  The carousel walks through the framework in eight slides. Save it for the next time someone asks "how long will it take?"

  This is day 2 of 5 on moving from requirements owner to schedule owner.

  Read the full article on my website. Link is in the comments.

  What is the biggest task you have ever been asked to estimate in one go?

  #BusinessAnalysis #ProjectManagement #Estimation #BAtoPM #FlotogBAInsights
tableImages:
  - "/images/blog/tables/break-it-down-until-you-can-estimate-it-a-framework-for-honest-estimates-table-1.png"
---
<img src="/images/blog/day-2-break-it-down.jpg" alt="One large gold block splitting into three blue blocks and then into many small blocks" width="1600" height="900" loading="lazy">

Nobody can estimate "build the reporting module" with any confidence. Almost anyone can estimate "write the query that produces the monthly summary". The first is a wish with a name on it. The second is a piece of work. The whole art of estimating is turning the first kind of statement into a list of the second kind. If you are joining us on day two, here is where we are. This week is five tools for the business analyst who now owns a delivery date as well as the requirements. On day one we named five shifts: from what to when, from describing to committing, from one answer to a range, from stakeholders to dependencies, and from being consulted to being accountable. Today's tool is the one the rest of the week rests on, because a plan can only be as good as the estimates inside it.

## The work breakdown: from a deliverable to estimable tasks

A work breakdown is a simple idea with a formal name. You take the thing you have been asked to deliver and split it into its main parts, which are often called work packages. You then split each part into smaller pieces, and keep going until each piece is a task one person could finish and describe. The breakdown is a list of what has to exist or be done, not a list of when. Timing comes later.

A practical test for when to stop splitting is whether you can say who would do the piece and roughly how long it would take, without hedging. A common rule of thumb is that a task should be small enough for one person to finish in about a week or less. If your answer to "how long?" is "it depends" or "I would need to look into it", the piece is still too big, or it hides something nobody has examined. Both are useful findings, because an unexamined piece is where surprises live.

Business analysts have a head start here, because the requirements list is already a breakdown of what the business wants. The step that is new is turning each requirement into the work needed to deliver it: design, build, test, train, communicate, release. A requirement such as "managers can approve requests online" becomes several tasks, and some of them, such as agreeing who the approvers are, may not involve any technical work at all. Do not forget those tasks. Non-technical work is the most commonly missing line in a first breakdown.

Two cautions keep a breakdown honest. First, make it complete: the breakdown should cover all of the work, including the unglamorous parts like testing, documentation, handover and project management itself. A good check is to ask what would have to be true for the deliverable to be accepted, and make sure each of those things has a task. Second, do not split beyond usefulness. A breakdown with hundreds of two-hour tasks is expensive to maintain and gives a false feeling of precision. Stop when estimates become reliable, not when the list becomes long.

## Three questions that make an estimate honest

Once a task is small enough, an estimate is only as good as the thinking behind it. Three questions are worth asking about every task, and they take a minute each.

The first question is: what exactly is included? Many estimates differ because people are picturing different pieces of work. One person includes testing and another does not. One assumes a ready-made template exists and another assumes it has to be built. Writing a single sentence about what the task includes and excludes removes a large share of later disagreements, and it gives you something to point at when scope quietly grows.

The second question is: who will do it, and how fast do they work on this kind of task? The same task takes different time for different people, and an estimate made for an experienced colleague is wrong if a newcomer does the work. It is also worth asking how much of that person's week is genuinely free for this work. Someone with a full-time job elsewhere and a part-time commitment to your project will deliver in elapsed time, not effort time, and the gap between the two is a classic source of slipped dates.

The third question is: what could make this bigger? Ask it out loud and write down the answers. A missing approval, a system that behaves differently from its documentation, data that is dirtier than expected, a person who goes on leave. You do not need to predict which will happen. Naming them tells you how wide the range should be, and it gives you a list of risks to watch long before they become delays.

## Ranges instead of single numbers

A single number hides what you know and what you do not. A simple, widely used technique is to give three figures for each task: a best case, a most likely case and a worst case. From those you can work out an expected figure using a weighted average, where the most likely figure counts four times: add the best case, four times the most likely, and the worst case, then divide by six. This is the three-point method, sometimes called PERT after the planning technique it comes from. It is not magic, but it forces the conversation about how bad things could get.

<p class="table-title"><strong>THREE TASKS, ESTIMATED AS RANGES (WORKING DAYS)</strong></p>

<table>
<thead><tr><th>Task</th><th>Best</th><th>Likely</th><th>Worst</th><th>Expected</th></tr></thead>
<tbody><tr><td><strong>Configure the approval workflow</strong></td><td>2</td><td>3</td><td>8</td><td>3.7</td></tr><tr><td><strong>Write the test scenarios</strong></td><td>3</td><td>4</td><td>7</td><td>4.3</td></tr><tr><td><strong>Prepare the training material</strong></td><td>2</td><td>3</td><td>4</td><td>3.0</td></tr><tr><td><strong>Total</strong></td><td>7</td><td>10</td><td>19</td><td>11.0</td></tr></tbody>
</table>

*Illustrative figures. Expected = (best + 4 x likely + worst) / 6, rounded to one decimal place.*

Read the table for what it teaches, not for the arithmetic. Adding the likely figures gives 10 days. The expected total is 11 days, because the first task has a long tail of things that could go wrong and the weighted average respects that. The worst-case total is 19 days, which is not a forecast but a warning of how far things could stretch if several problems arrived together. Notice also that the third task has a narrow range, which tells you the team understands it well, while the first has a wide range, which tells you where to spend your attention.

When someone asks "how long will it take?", you now have an answer that is honest and easy to defend: "Most likely around 11 days, and I would plan for 11 with a plan for the first task running long. The wide range is in the approval workflow, and I will know more once we have seen how the approvers want to work." That sentence is far more useful than "two weeks", because it tells the listener where the uncertainty lives. Tomorrow we take estimates like these and turn them into a dated plan.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>From Requirements List to Dated Plan in Six Steps - Sequence the work, find the critical path, add a buffer and put dates against it.</em>
