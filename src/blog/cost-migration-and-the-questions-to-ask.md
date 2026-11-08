---
title: "Cost, Migration and the Questions to Ask"
slug: cost-migration-and-the-questions-to-ask
series: "Cloud and Infrastructure Basics: What a Business Analyst Needs to Know About Where Systems Run, and What to Ask About It"
day: 5
dek: "How cloud pricing surprises people, the main ways to move, and a checklist you can reuse"
description: "The first cloud bill was three times the estimate. Why cloud costs surprise people, four ways to migrate a system, and a checklist for your next project."
date: 2026-11-13T06:00:00.000Z
cover: "/images/blog/cloud-day-5-cost-migration.jpg"
readingTime: 6
linkedinPost: |
  The first cloud bill was three times the estimate. Nothing was misconfigured. Nobody had asked what would be left running.

  Cloud pricing is pay for what you use, which is wonderful until something is left on that nobody uses. Test systems, old copies, data moved out of the provider, all quietly add up. The fix is not clever. It is a few requirements about cost visibility, written before the project starts.

  The same goes for the move itself. There are four standard ways to migrate a system, with very different effort and benefit, and the right one depends on what the business actually needs.

  This is day 5 of 5 on cloud basics for BAs. This week: where systems run, service models, availability, data, and today, cost and migration.

  Read the full article below. Link to my website/blog is in the comments.

  What was the most surprising line on a cloud bill you have seen?

  #BusinessAnalysis #CloudComputing #Migration #CostManagement #FlotogBAInsights
tableImages:
  - "/images/blog/tables/cost-migration-and-the-questions-to-ask-table-1.png"
---
<img src="/images/blog/cloud-day-5-cost-migration.jpg" alt="A row of taps along a stone trough with two left running, beside a brass meter, a clipboard and a gold-handled wrench" width="1600" height="873" loading="lazy">

Three months after go-live, the first full cloud bill arrives at three times the estimate. Nothing has been hacked and nothing is misconfigured in any dramatic sense. The estimate was built on what the system needed. The bill reflects everything that was switched on, including a test environment nobody turned off, several large copies of the database kept "just in case", and a monthly data export that happens to be charged by the gigabyte. If you are joining us on day five, here is where we are. This week is five days of cloud and infrastructure basics for business analysts, following one analyst at a regional chain of 12 private clinics who has been asked to write requirements for moving the appointment booking and patient records system from a server at head office to the cloud. Day one covered what the cloud is and why a move is a requirements question. Day two covered infrastructure, platform and software as a service and who is responsible for what. Day three covered availability in hours and the questions of recovery time and recovery point. Day four covered where the data sits, who can see it and how to get it back. Today we finish with cost, the move itself and a checklist.

## Why cloud bills surprise people

Cloud pricing follows use. You pay for the computing power running, the storage held and the data moved, usually by the hour, the gigabyte or the transaction. That is what makes it flexible, and it is also what makes it easy to overspend, because nothing stops you paying for something you no longer need. An unused server that is left on costs the same as a busy one. The traditional purchase gives you a large bill once. The cloud gives you a smaller one every month, with no natural ceiling.

Four sources of surprise appear again and again. Resources left running after a project ends, such as test or training systems. Capacity set higher than the system ever uses. Data transfer charges, especially for data moving out of the provider's network. And discounts missed or mismanaged, because most providers offer lower prices for commitments of a year or more, which saves money if the forecast is right and costs money if it is wrong. None of these is a failure of technology. They are failures of ownership: nobody was named to watch the bill, and nobody had written down what normal looked like.

A few plain requirements go a long way. Name who owns the cost and reviews it monthly. Ask for budget alerts that warn before a threshold is crossed, not after. Label each resource with the project and the owner it belongs to, so that every line on the bill can be traced. And ask for a short list of what should be switched off, and by when, when each phase ends. A full financial case is the subject of its own week later in this series, but the habit of asking who watches the bill belongs in every cloud project.

## Four ways to move a system

The word migration covers very different amounts of work. Four approaches cover most cases, and the right one depends on what the business wants from the move, not on what is technically fashionable. The table below sets them out for the clinic.

<p class="table-title"><strong>FOUR WAYS TO MOVE THE CLINIC'S BOOKING SYSTEM</strong></p>

<table>
<thead><tr><th>Approach</th><th>What it means</th><th>Effort and benefit</th><th>Fit for the clinics</th></tr></thead>
<tbody><tr><td><strong>Rehost</strong></td><td>Move the existing system as it is onto rented servers.</td><td>Least effort. Few of the benefits.</td><td>Fast, but keeps today's limits.</td></tr><tr><td><strong>Replatform</strong></td><td>Move it, and swap some parts for managed services.</td><td>Moderate effort. Some benefit, such as easier backups.</td><td>A sensible middle path.</td></tr><tr><td><strong>Rebuild</strong></td><td>Redesign the system to use cloud services fully.</td><td>Most effort. Most benefit, and most risk.</td><td>Only if the system needs it.</td></tr><tr><td><strong>Replace</strong></td><td>Retire the system and adopt a finished product.</td><td>Depends on the product. Changes how people work.</td><td>Worth testing against the other three.</td></tr></tbody>
</table>

*Illustrative. Rehost, replatform, rebuild and replace are common labels. Providers and consultants use slightly different ones.*

The honest answer to "which is best?" is that it depends on what the business needs, and that is an analyst's question. If the clinics mainly want the cupboard server gone, a rehost is quick and cheap. If they want better availability and easier growth, replatforming may be worth the extra effort. If their booking process itself is painful, replacing the system with a modern product may deliver more than any migration. Each choice carries its own requirements, risks and costs, and the analyst's job is to keep the decision tied to the problem it is meant to solve. Moving a poor system to the cloud gives you the same poor system, now with a monthly bill.

The move itself carries risks that deserve a plan of their own. The cutover, when the old system stops and the new one takes over, is the riskiest moment, and it is wise to ask how it will be done. Will there be a period when both systems run side by side? How will bookings made during the switch be carried across? What is the rollback plan if something goes wrong, and who decides to use it? For a clinic chain, a sensible answer might be a weekend cutover, a short parallel run in one clinic first, and a clear rule that if the check at six on Monday morning fails, the old system is switched back on. Writing that rule down in advance removes the temptation to push on at the wrong moment.

## The checklist, and what it adds to your career

Pulling the week together, a short set of questions covers most of what an analyst needs on a cloud project. Where will the system run, and under which service model? Who is responsible for patching, backups, monitoring and out-of-hours support? What availability is needed, what recovery time and what recovery point, and what will each cost? Where will the data and its copies sit, who can see it, and how will access be recorded? How do we get our data out when the contract ends? Who owns the cost, and how will we spot a surprise before it arrives? And which migration approach fits what the business is actually trying to achieve?

It is worth saying who should be in the room. The sponsor decides what the business wants. The clinics' managers say what a bad day looks like. The IT lead knows the current system. The vendor describes what it can and cannot do, and finance owns the bill. The analyst's role is not to know every answer, but to make sure each group has been asked, and to put the answers in one place where they can be compared. That alone often prevents the commonest cloud failure, which is a project that satisfied the technical team and surprised everyone else.

Almost none of these questions needs engineering knowledge. They need curiosity, plain language and the habit of turning an assumption into a requirement. That combination is rare, and project teams notice when someone has it. Analysts who can have this conversation with an engineer, a vendor and a sponsor in the same afternoon are easier to include in decisions and harder to replace. Pick one system your organisation depends on and answer the first three questions about it this week. You may find that nobody has written the answers down. Next week the series moves to project management, and to what changes when you move from owning requirements to owning a schedule.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>NEXT WEEK</em>

<em>From Requirements Owner to Schedule Owner - What changes when a business analyst takes responsibility for the plan, the dates and the people who deliver them.</em>
