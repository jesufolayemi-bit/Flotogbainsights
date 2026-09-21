---
title: "From Diagram to Decision"
series: "Business Process Modelling: Making BPMN Actually Useful"
day: 5
dek: "Getting a room to actually act on a process map"
description: "Getting a room to actually act on a process map"
date: 2026-09-11T06:00:10.989Z
cover: "/images/blog/f4dc16_de09ec51f7794175a33a8c248a14fb93.png"
readingTime: 4
wixId: "316af909-c45a-4b2a-bb1e-3ca27f9cdc2f"
---
<img src="/images/blog/f4dc16_6ba538fbfa6c449085b474a11b29b374.png" alt="From Diagram to Decision" width="1024" height="572" loading="lazy">

A process map that gets a polite nod in a meeting and never gets opened again has failed at its actual job, regardless of how correctly every symbol on it follows the notation covered this week. The diagram itself was never the deliverable. The decision it enables is the deliverable, and the majority of process maps that quietly die after one meeting die for the same reason: nobody in the room was ever actually asked to decide anything while looking at it.

## Walk in with a question, not just a diagram

The single most important change here is what you ask the room, not anything about the diagram itself. 'Does this look right?' or 'Does this match how the process works? ' invites agreement, and agreement is easy to give without engaging closely, which is exactly how a diagram gets nodded at and forgotten. A sharper question forces real engagement.

| **THE QUESTION THAT GETS A DECISION INSTEAD OF A NODYou:***Looking at this map, there are three points where a request can stall for more than two days. Which one should we tackle first, given the resources we actually have this quarter?* |
| --- |

That question cannot be answered with a polite nod. It forces the room to actually look at the specific gateways and delays on the diagram, weigh them against each other, and commit to a real next step before the meeting ends. The map did its job the moment it made that comparison possible in a way plain description never could have. Here is a complete process map built using everything covered this week: two pools, one of them split into two lanes, the core symbol set from Tuesday, an as-is level of honesty about where things actually branch, and no missing exception paths.

<img src="/images/blog/f4dc16_de09ec51f7794175a33a8c248a14fb93.png" alt="From Diagram to Decision" width="969" height="561" loading="lazy">

Notice what this diagram does and does not include. Two pools make the participant boundary immediate: the customer sits in a separate pool from the company, and every arrow crossing that gap is a dashed message flow. Inside the company, sales and operations are lanes of the same pool, not separate participants, so the handoff between them is a solid sequence flow, never dashed. One gateway captures the one decision that actually branches the process, whether the sign-up information is complete. The exception path is not an afterthought; it loops back across the pool boundary to the customer with a real next step rather than trailing off the edge of the page. And every task label is specific enough that two different readers would describe the same action if asked.

This is not a complicated diagram. It uses six symbol types, the exact set from Tuesday, and nothing more. It is also a genuinely complete and useful one, because every element on it is doing real work, and nothing on it is decoration.

## What this week actually built

- On Monday, we named the gap between a technically correct diagram and a genuinely useful one.
- On Tuesday, I gave you the small, practical symbol set that covers the overwhelming majority of real business processes.
- Wednesday walked through mapping the as-is honestly, before touching any redesign, using a real example that surfaced a hidden problem nobody had named.
- Thursday covered the specific, common mistakes - wrong lanes and missing exception paths chief among them - that quietly undermine an otherwise reasonable map.
- And today closes the loop: a map only matters once it drives an actual decision in a real room.

If you started this week with little or no BPMN experience, you now have the actual toolkit: six symbols used with real judgment, a method for mapping the current state honestly, a checklist for catching the mistakes that quietly ruin a map, and a way to make sure the diagram gets used rather than filed away. None of this requires memorising the full specification. It requires using a small, well-understood set of tools with the same care you would bring to any other piece of analysis work. So pick one real process this week, something you already half understand, and map it as-is using everything above. The first one always takes longer than it should. The second one will not.

The first diagram you draw after this week will probably not look as clean as the examples above, and that is completely normal. Every clean diagram in this series went through a rougher first draft that got tightened once the actual flow became clear. What changes after this week is not that your first attempt becomes perfect; it is that you now have a way to recognise what is wrong with a rough first draft and fix it deliberately, rather than either leaving it messy or not knowing where to start.

***Go out and be successful.***

**Oluwatosin Ogunkoya**  **·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·**  [**www.flotogbainsights.com**](/)

*NEXT WEEK*

*Requirements Prioritisation: Deciding What Gets Built First -* *MoSCoW, Kano, and the practical judgment calls that decide what actually makes the cut.*
