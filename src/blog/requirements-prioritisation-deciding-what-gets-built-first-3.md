---
title: "Combining Frameworks: The Value/Effort Matrix"
series: "Requirements Prioritisation: Deciding What Gets Built First"
day: 4
description: "MoSCoW tells you what is non-negotiable. Kano tells you what pays off disproportionately. Neither one, on its own, tells you where to actually spend the time…"
date: 2026-09-17T06:00:07.887Z
cover: "/images/blog/f4dc16_d4553c6d178f4938affe3f12cf865a4c.png"
readingTime: 4
wixId: "e8349a65-f471-439e-8837-ae675dc2fc05"
---
<img src="/images/blog/f4dc16_d4553c6d178f4938affe3f12cf865a4c.png" alt="Combining Frameworks: The Value/Effort Matrix" width="1024" height="572" loading="lazy">

MoSCoW tells you what is non-negotiable. Kano tells you what pays off disproportionately. Neither one, on its own, tells you where to actually spend the time sitting in the large middle ground between those two extremes, which is where most of a real backlog actually lives. This is what a value versus effort matrix is for, and it earns its place specifically in the exact moment a room genuinely disagrees about where something belongs, which happens on almost every real prioritisation session eventually.

## The Four Quadrants

<img src="/images/blog/f4dc16_971eb9fba32e49f9848ce43259d36bc9.png" alt="Combining Frameworks: The Value/Effort Matrix" width="863" height="719" loading="lazy">

- Quick wins - high value and low effort - are the easiest call on the entire list. Do these first, close to automatically, and use them to build momentum and trust early in a release.
- Major projects - high value and high effort - are genuinely worth doing; they simply cannot be squeezed in casually alongside everything else, and deserve dedicated planning rather than being treated as just another backlog item.
- Fill-ins - low value and low effort - are fine to slot in around bigger work when there is spare capacity, but never worth deliberately planning a release around, because the return does not justify prioritising them ahead of anything else.
- Thankless tasks - low value and high effort - are the ones that quietly drain a team's capacity for the least return of anything on the list, and are usually the first candidates to genuinely reconsider or cut.

## Running the Session

The actual value of this exercise is rarely the finished chart, though. It is the argument that happens while a room is deciding where a specific item belongs on it. A Must-labelled item that someone tries to place in the low-value corner surfaces a real disagreement about whether it genuinely qualifies as a Must at all, a disagreement that a simple label would have hidden entirely, because everyone nodded along when the label was assigned without ever being forced to plot it against an actual axis.

A real prioritisation session that combines all three tools follows roughly this shape. Start with MoSCoW to separate the genuine Musts, using the honest test from Tuesday, and set those aside as already committed. Run Kano quickly on the remaining Should and Could items to flag any potential delighters that a pure urgency lens would undervalue. Then plot everything that is left on the value versus effort matrix, and let the room argue about placement, because the argument itself is where the real information surfaces.

| **A DISAGREEMENT THE MATRIX SURFACESStakeholder A:***The legacy data import tool should be near the top; it's high value, we get asked about it constantly.***You:***How many customers actually ask for it, and how much effort would it genuinely take to build?***Stakeholder A:***Maybe a handful of customers a quarter. Effort-wise, it would probably take a full sprint; the legacy format is a mess.***You:***So a handful of requests a quarter against a full sprint of effort. On the matrix, that reads a lot closer to a thankless task than a major project. Does that match your instinct once we see it plotted that way?***Stakeholder A:***Honestly, when you put it like that, no, it doesn't seem worth a full sprint.* |
| --- |

Nobody in that exchange was wrong or arguing in bad faith. The stakeholder's instinct that the item mattered was genuine, built from real customer conversations. What the matrix did was force that instinct to be compared against an actual effort estimate and an actual frequency, rather than staying a feeling that a Must or Should label could have absorbed without ever being tested.

Occasionally a disagreement survives even after plotting an item honestly, usually because value itself is being measured differently by different people in the room, one person weighing revenue impact, another weighing customer trust, another weighing internal team morale. When that happens, the matrix has done its job even without fully resolving the disagreement, because it has isolated the actual point of disagreement: which axis, which measure of value, rather than leaving the argument as a vague sense that two people simply see the priority differently.

## Making It Work in Practice

Not every prioritisation decision needs the full combined exercise described above. A small, routine backlog grooming session, adding a handful of minor bug fixes and small enhancements, is well served by a quick MoSCoW pass alone, applying the honest Must test and moving on. The full combined session, MoSCoW followed by a Kano check followed by the value versus effort matrix, earns its time specifically for major planning moments: a quarterly roadmap decision, a release with genuinely competing priorities, or any point where a room has already tried to agree informally and failed.

Whichever version of the session you run, one discipline is worth protecting: plot items before anyone announces where they think it belongs, not after. A room that hears a senior stakeholder declare something a quick win before the group has actually discussed effort or value tends to anchor on that framing regardless of what the honest numbers would say. Asking people to place their own sticky note on the grid first, independently, then comparing where different people put the same item, surfaces disagreement far more reliably than a single person narrating their view and everyone else nodding along.

Value tends to generate the most disagreement in these sessions, but effort causes just as much damage when it is wrong, usually more quietly. The person requesting a feature is rarely the person who has to build it, and a request that sounds simple from outside a codebase can hide real complexity that only becomes visible once someone who actually works in that system weighs in. The fix is procedural rather than clever: never finalise an effort estimate on the matrix without input from whoever would actually build the item, even a rough five-minute gut check, rather than letting the room guess based on how the request sounds when described out loud.

***Go out and be successful.***

**Oluwatosin Ogunkoya**  **·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·**  [**www.flotogbainsights.com**](/)

*TOMORROW*

*From Priority List to Actual Commitment -* *How a prioritised list survives contact with a real release, and communicating what didn't make the cut without damaging trust.*
