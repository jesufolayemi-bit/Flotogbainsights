---
title: "Sequencing: Dependencies, Risk and Capacity"
slug: sequencing-dependencies-risk-and-capacity
series: "From Requirements to Roadmap: How a Business Analyst Turns a Long List Into a Sequence People Can Plan Around"
day: 3
dek: "What goes first, and the factors that decide it once the scoring is set aside"
description: "Loyalty had the loudest sponsor; delivery had the dependencies. How a BA sequences a roadmap by dependency, risk, learning, capacity and dates."
date: 2026-11-04T06:00:00.000Z
cover: "/images/blog/roadmap-day-3-sequencing.jpg"
readingTime: 6
linkedinPost: |
  Loyalty had the loudest sponsor. Delivery reliability had the dependencies. Reliability went first.

  That was not a popularity contest. Customer service tools needed delivery tracking data, substitutions needed a stock feed, and a loyalty scheme on top of an unreliable delivery service would only advertise the problem.

  Once the requirements are grouped into themes, sequencing is mostly detective work: what depends on what, what could sink the plan, what we would learn early, how much the team can really do at once, and which dates are fixed by the outside world.

  This is day 3 of 5 on turning requirements into a roadmap. So far: why a list is not a roadmap, and how 60 requirements became five themes.

  Read the full article below. Link to my website/blog is in the comments.

  What is the dependency that most often surprises your team?

  #BusinessAnalysis #ProductManagement #Roadmap #Dependencies #FlotogBAInsights
tableImages:
  - "/images/blog/tables/sequencing-dependencies-risk-and-capacity-table-1.png"
---
<img src="/images/blog/roadmap-day-3-sequencing.jpg" alt="A branching line of wooden blocks starting from a large navy block, with teal ribbons to later blocks and an hourglass beside them" width="1376" height="768" loading="lazy">

Two sponsors want to go first. The head of marketing wants the loyalty scheme live as soon as possible. The head of operations wants delivery reliability fixed. The analyst has the five themes, a goal behind each and a room that expects her to pick a side. She does not pick a side. She draws a map of what depends on what, and the order appears on its own. If you are joining us on day three, here is where we are. This week is five days on turning a long list of requirements into a roadmap, following one analyst at a regional online grocery retailer who has been handed 60 requirements for the customer app and the delivery operation and has to plan the next two quarters. Day one showed that a priority-sorted list is not a roadmap, because it cannot explain its order, its dependencies or its boundaries. Day two grouped 52 distinct requirements into five themes, each tied to a goal: delivery reliability, substitutions and out-of-stocks, checkout and payments, loyalty and promotions, and customer service tools. Today we decide what goes first.

## Dependencies come before preferences

A dependency exists when one piece of work cannot start, or cannot deliver its value, until another is done. Analysts are well placed to find them, because they have read every requirement and know which ones quietly assume something else. Four kinds turn up repeatedly. Technical dependencies, where one feature is built on another. Data dependencies, where a feature needs information that does not yet exist. Organisational dependencies, where a team or a decision must be in place first. And external dependencies, such as a supplier, a regulator or a partner's release date.

In the example, three show up quickly. Substitutions need a reliable feed of stock levels from the warehouse system, and that feed does not exist yet. Customer service tools need the delivery events that live tracking will produce, so they cannot be built first. And a loyalty scheme layered on an unreliable delivery service would simply advertise the problem more loudly, because customers who are rewarded for ordering will notice every late slot. Draw the themes as boxes and the dependencies as arrows. The box that most arrows leave from is the foundation, and it usually goes first, whatever its sponsor's seniority.

Finding dependencies is mostly a matter of asking the right question of each requirement. Ask: what has to be true before this can work, and what will break or be pointless if it is missing? Then ask the people who would know. Engineers know the technical ones, operations knows which teams must be ready, and procurement knows which suppliers are already late. Walk through the requirements with each of them for twenty minutes and write down every "well, that depends on\...". It is common to find that two requirements everyone treated as independent are tied together by a shared database table or a shared team, and that the order matters far more than anyone realised. Ask also what the dependency is on, not only that one exists, so the arrow on your map can carry a note.

## Risk, learning, capacity and fixed dates

Dependencies give a partial order. Four more factors settle the rest. The first is risk: do early whatever could sink the plan if it turned out harder than expected, so the bad news arrives while there is still time to adapt. The second is learning: put early whatever tests an assumption the later work rests on, such as whether customers actually accept substitutions they did not choose. The third is capacity. A team can only do so much at once, and a plan that starts all five themes in parallel is a plan that finishes none of them. Be realistic about how many themes one team can carry, and sequence accordingly.

Capacity deserves more honesty than it usually gets. A team of six cannot do five themes in parallel and finish any of them well, because each theme draws on the same people for design, testing and release. Ask the delivery lead how many themes the team can carry at once, and take the answer seriously, including the time lost to support work and holidays. If the honest number is two, the roadmap shows two in Now, and the rest wait. It is far better to show that on a page than to discover it through three themes that are each half done at the end of the quarter.

The fourth is fixed dates. Some deadlines are set by the outside world and do not move: a regulatory change, a contract that expires, a promotional peak that marketing has already committed to and paid for. A fixed date turns a flexible theme into one with a deadline, and it can override the order that dependencies alone would suggest. Notice what is missing from this list. A scoring formula is not a factor, and neither is the seniority of the person who asked. Both may inform the discussion, and prioritisation techniques have their place, but sequencing is a different question. It asks what has to come before what.

## Putting the reasoning on one page

The table below pulls the factors together for the five themes. It is the page to bring to the sponsors, because every placement comes with a reason that can be checked.

<p class="table-title"><strong>SEQUENCING THE FIVE THEMES</strong></p>

<table>
<thead><tr><th>Theme</th><th>Depends on</th><th>Risk, fixed date or learning</th><th>Placement</th></tr></thead>
<tbody><tr><td><strong>Delivery reliability</strong></td><td>Nothing outside the team.</td><td>Highest impact on refunds. Foundation for two other themes.</td><td>Now</td></tr><tr><td><strong>Checkout and payments</strong></td><td>Nothing outside the team.</td><td>Small, low-risk fixes with quick evidence.</td><td>Now</td></tr><tr><td><strong>Substitutions and out-of-stocks</strong></td><td>Stock feed from the warehouse system.</td><td>Tests whether customers accept substitutions.</td><td>Next</td></tr><tr><td><strong>Loyalty and promotions</strong></td><td>Reliable delivery and checkout.</td><td>Fixed date: a promotional peak in the fourth month.</td><td>Next, before the peak</td></tr><tr><td><strong>Customer service tools</strong></td><td>Delivery events from tracking.</td><td>Lower urgency. Needs the first theme finished.</td><td>Later</td></tr></tbody>
</table>

*Illustrative. The stock feed itself is a small piece of groundwork placed in Now so that substitutions can start on time.*

A last point on handling the room. Present the factors before you present the order. If you open with the sequence, people will argue about their own item's position. If you open with the dependency map and the fixed dates, they will often reach the order by themselves, and the analyst's role becomes confirming it. When someone still disagrees, ask them which factor they believe is wrong: is the dependency real, is the date fixed, is the risk overstated? That keeps the disagreement on evidence that can be checked, and it keeps the analyst out of the position of defending a preference. A sequence that can be traced to a dependency or a date is much harder to overturn than one that rests on judgment.

The loudest sponsor does not go first in this table, but she is not ignored either. Her theme has a place, a reason for its place and a date that protects the promotion she cares about. That is usually enough, because most sponsors accept a sequence they can follow far more readily than one handed down as a verdict. Tomorrow turns the sequence into something readers will actually look at.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Now, Next, Later: A Roadmap People Will Read - Showing confidence instead of false dates, and how to say no with the roadmap in your hand.</em>
