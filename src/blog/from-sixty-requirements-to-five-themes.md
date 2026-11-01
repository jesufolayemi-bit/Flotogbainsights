---
title: "From Sixty Requirements to Five Themes"
slug: from-sixty-requirements-to-five-themes
series: "From Requirements to Roadmap: How a Business Analyst Turns a Long List Into a Sequence People Can Plan Around"
day: 2
dek: "Grouping by the problem being solved, and tying every theme to a business goal"
description: "Sixty requirements became five themes in an afternoon. How a BA groups requirements by the problem being solved and ties each theme to a goal."
date: 2026-11-03T06:00:00.000Z
cover: "/images/blog/roadmap-day-2-five-themes.jpg"
readingTime: 6
linkedinPost: |
  Sixty requirements became five themes in an afternoon. Eight were duplicates. Nothing important was deleted.

  The conversation changed anyway. Instead of five departments defending their own items, the room was looking at problems: late deliveries, missing items, a clumsy checkout, a loyalty scheme nobody understood, and a customer service team working blind.

  The trick is to group by the problem being solved, not by who asked. Then tie each theme to a goal the business already measures. A theme with no goal behind it is a hobby.

  This is day 2 of 5 on turning requirements into a roadmap. Day 1 showed why a priority-sorted list is not one.

  Read the full article below. Link to my website/blog is in the comments.

  Which theme would you find hiding in your own backlog?

  #BusinessAnalysis #ProductManagement #Roadmap #Requirements #FlotogBAInsights
tableImages:
  - "/images/blog/tables/from-sixty-requirements-to-five-themes-table-1.png"
---
<img src="/images/blog/roadmap-day-2-five-themes.jpg" alt="Paper cards sorted into clusters on a wall, each held by coloured string, with a hand moving one card and duplicates set aside in a tray" width="1376" height="768" loading="lazy">

The analyst pins sixty cards to a wall, one per requirement, and invites the five people who sent most of them. For the first ten minutes everyone defends their own cards. After an afternoon of sorting, the wall holds five clusters, eight duplicates sit in a tray, and a different conversation is under way. Nobody is defending a department's list any more. They are arguing about problems. If you are joining us on day two, here is where we are. This week is five days on turning a long list of requirements into a roadmap, following one analyst at a regional online grocery retailer who has 60 requirements for the customer app and the delivery operation, collected from store operations, marketing, customer service and the delivery fleet, and who has to plan the next two quarters. On day one we saw that a list answers what has been asked for, while a roadmap answers where we are going, in what order and how sure we are. Today we begin the conversion, by grouping the requirements into themes.

## Group by the problem, not by who asked

Requirements arrive sorted by source. Store operations sent a batch, marketing sent a batch, customer service sent another. If you leave them that way, the roadmap reproduces the organisation chart, and every department sees its own list in its own box. The more useful grouping is by the problem being solved, because that is what the business will actually make decisions about.

A simple method works well. Read every requirement and finish its sentence with "so that": the customer sees an accurate delivery slot so that they are home when the driver arrives. The part after "so that" is the real subject of the requirement, and requirements with similar endings belong together, even when they came from different departments. Cluster them, then name each cluster as a problem the business has, not a feature it wants. "Delivery reliability" is a theme. "Live map tracking" is one requirement inside it. Merge exact duplicates as you go, and keep a record of which original items each merged item replaced, so nobody feels their request vanished. In the example, eight of the 60 turned out to be duplicates or close overlaps, leaving 52.

Check each cluster against two tests. Could you explain it to a new colleague in one sentence? And does every requirement in it genuinely belong? A cluster that needs three sentences to describe is probably two themes. A requirement that fits nowhere deserves a direct question to its owner: what problem does this solve? Sometimes there is a good answer and a new theme appears. Sometimes there is silence, and that tells you something too.

It helps to see the method on a few real lines. One requirement asks for the app to show the driver's estimated arrival time. Another asks for a text message when the driver is ten minutes away. A third asks for a way to reschedule a slot from the order screen. They came from marketing, customer service and store operations, and on a flat list they sit pages apart. Finish each with "so that" and all three end in the same place: so that the customer is home when the order arrives, and the delivery is not repeated. That shared ending is the theme. Seeing it also tells you which of the three is the core item and which are refinements, a judgment the list on its own could never support.

## Tie every theme to a goal

Themes become powerful when each is connected to something the business already cares about and, ideally, already measures. This turns the roadmap from a list of things the team wants to build into a plan for moving numbers the leadership team recognises. In the example, the retailer tracks the share of orders delivered outside the promised slot, the number of repeat orders per customer, and the share of baskets abandoned at checkout. The table below shows the five themes, how many requirements each absorbed, and the goal each serves.

<p class="table-title"><strong>FIVE THEMES FROM 52 REQUIREMENTS, EACH TIED TO A BUSINESS GOAL</strong></p>

<table>
<thead><tr><th>Theme</th><th>Requirements</th><th>Goal it serves</th></tr></thead>
<tbody><tr><td><strong>Delivery reliability</strong></td><td>15</td><td>Fewer orders delivered outside the promised slot, and fewer refunds.</td></tr><tr><td><strong>Substitutions and out-of-stocks</strong></td><td>12</td><td>Fewer complaints about missing items, and fewer abandoned baskets.</td></tr><tr><td><strong>Checkout and payments</strong></td><td>10</td><td>Lower checkout abandonment.</td></tr><tr><td><strong>Loyalty and promotions</strong></td><td>10</td><td>More repeat orders per customer.</td></tr><tr><td><strong>Customer service tools</strong></td><td>5</td><td>Faster resolution, and fewer repeat contacts.</td></tr><tr><td><strong>Total</strong></td><td><strong>52</strong></td><td></td></tr></tbody>
</table>

*Illustrative. The total row is the sum of the themes: 52 requirements after eight duplicates were merged out of the original 60.*

Look at the right-hand column. A theme with no goal behind it is a hobby, and the roadmap is the place to find that out, early and politely. If a department's requirements cluster into a theme that no goal supports, there are two honest options. Either the goal list is missing something real, and the leadership team should say so, or the theme should wait. Both outcomes are better than carrying it silently into the plan.

## What the grouping changes in the room

The effect on stakeholders is often larger than the analyst expects. A person who sent three requirements now sees them sitting next to eleven others that address the same problem, some from departments they rarely speak to. Conflicts that were invisible in a flat list become obvious: two requirements that solve the same problem in incompatible ways, or one team's urgent item that quietly depends on another team's later one. Those conversations were always going to happen. The grouping lets them happen early and calmly, with the evidence on the wall.

One more habit is worth building here: keep a short parking lot. Some requirements will not map cleanly to any theme, and some will map but conflict with another requirement. Write them on a separate sheet with a one-line note on what is unresolved and who needs to decide. A parking lot keeps the room moving, shows that nothing has been lost, and gives you a ready list of questions for the next stakeholder conversation. Analysts who skip it tend to spend the second half of the workshop re-arguing the same three items, which is exactly what grouping by problem was meant to avoid. Treat the parking lot as part of the roadmap work, because the items in it are often the first early signs of a missing theme or an unmet goal.

Keep the traceability while you do it. Each original requirement should still carry its identifier and map to exactly one theme, so that when the head of customer service asks what became of her request, the answer takes ten seconds. A spreadsheet with a theme column does this adequately, and the sorted wall is a good workshop tool. Do not delete anything at this stage. The aim is to organise, and the next step is to decide what comes first, which is where tomorrow picks up.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Sequencing: Dependencies, Risk and Capacity - What goes first, and why the loudest sponsor is not on the list of factors.</em>
