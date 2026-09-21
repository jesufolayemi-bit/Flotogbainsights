---
title: "The Mistakes That Often Make a Process Map Useless"
series: "Business Process Modelling: Making BPMN Actually Useful"
day: 4
description: "A process map can use every BPMN symbol technically correctly, follow every rule from Tuesday's toolkit, and still be wrong in a way that only becomes…"
date: 2026-09-10T06:00:10.937Z
cover: "/images/blog/f4dc16_cf2bca7085fc4435920b0e86277173f7.png"
readingTime: 3
wixId: "e72f0809-3e1d-4af4-8401-7b381df53f2a"
---
<img src="/images/blog/f4dc16_6847331933bc44afa9d8e84226896b84.png" alt="The Mistakes That Often Make a Process Map Useless" width="1024" height="572" loading="lazy">

A process map can use every BPMN symbol technically correctly, follow every rule from Tuesday's toolkit, and still be wrong in a way that only becomes obvious once someone actually tries to use it to answer a real question. Two mistakes cause most of the practical damage I see in real process maps, and both are easy to miss during a review, because the diagram still looks complete and professional at a glance.

## Mistake one: the task in the wrong lane

This happens constantly with approval steps. An analyst mapping a process from the requester's point of view naturally draws every step, including the approval, inside the requester's lane, because that is whose process it feels like from the outside. The actual decision, though, belongs to whoever is doing the approving, and drawing it in the wrong lane quietly misrepresents who actually owns that step, which matters enormously the moment someone needs to know who to escalate a delay to.

## Mistake two: the missing exception path

Most diagrams map the happy path beautifully, every step in order, leading cleanly to a satisfying end event. Then they simply stop wherever something could go wrong, leaving no answer for what actually happens next if a request gets denied, a check fails, or an approval never comes. A gateway with only one path drawn out of it, when the underlying decision genuinely has two possible outcomes, is one of the most common and most costly gaps in real process maps.

## Seeing both fixed together

<img src="/images/blog/f4dc16_cf2bca7085fc4435920b0e86277173f7.png" alt="The Mistakes That Often Make a Process Map Useless" width="969" height="642" loading="lazy">

The before version places the approval task inside the employee's lane, alongside every other step, which quietly hides the fact that IT is the actual decision maker. It also has no path at all for a denied request, so anyone trying to use this diagram to understand what happens when access gets refused has no answer on the page.

The after version fixes both at once. The gateway and the approval decision now sit inside IT's lane, correctly showing who owns that call. And the denied path leads somewhere real, a notification back to the employee, rather than disappearing off the edge of the diagram. Neither fix required new symbols or more complexity. Both required actually thinking through the full range of what can happen, not just the version where everything goes smoothly.

Beyond the two above, wrong granularity quietly undermines more diagrams than people realise. A task labelled '<strong><em>Handle the request</em></strong>' technically satisfies the rule that a task represents one piece of work, but it hides so much inside that label that the diagram stops being useful the moment someone asks what actually happens during that step. The fix from Tuesday's granularity test still applies here: could two different people read this task and describe the same action? If not, the task needs to be broken into the actual steps it is currently hiding.

A short, repeatable check catches most of what matters here, run before a diagram goes anywhere near a stakeholder review.

- For every task, ask who actually does this and confirm the lane matches.
- For every gateway, ask what happens on every single path leading out of it, and confirm each one reaches somewhere real, not just the one that was easiest to draw.
- For every task label, run the two-reader test from Tuesday and confirm the granularity holds up.

None of these checks requires new BPMN knowledge. They require treating a first draft as a first draft, and reviewing it with the same scepticism you would apply to a stakeholder's account of their own process, which the as-is mapping technique from yesterday already trained you to do.

All three mistakes covered today share something in common: they do not break the diagram's internal logic. A reviewer skimming for whether the notation is used correctly will pass a diagram with a misplaced lane or a missing exception path, because nothing about the symbols themselves is wrong. Catching these requires reading the diagram for meaning, not just for notation, asking whether it actually reflects the real situation rather than whether it follows the rules from Tuesday correctly. That shift, from checking notation to checking meaning, is most of what separates a reviewed diagram from a trustworthy one.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong>  ·  <strong><em>Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</em></strong>  [<strong><em>www.flotogbainsights.com</em></strong>](/)

<em>TOMORROW</em>

<em>From Diagram to Decision - Closing the week: how to get a room to actually act on a process map, plus a full worked example pulling everything together.</em>
