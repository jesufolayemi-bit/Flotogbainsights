---
title: "Mapping the Whole System Before You Touch Any Part of It"
slug: mapping-the-whole-system-before-you-touch-any-part-of-it
series: "Systems Thinking: Seeing the Whole Problem Before You Touch Any Part of It"
day: 2
dek: "A practical way to see the loops and dependencies around a problem, not just the problem by itself"
description: "Process maps show steps in order. A system map shows what pushes back when you change one. How BAs can draw one on a single page, and what to leave off it."
date: 2026-10-06T06:00:00.000Z
readingTime: 5
---
Most process maps show the steps in order. Step one happens, then step two, then step three. These maps are genuinely useful for exactly what they are built for, and they miss the thing that actually matters once a system is under pressure: what pushes back when you change one of the steps. A system map asks a different question than a process map does. Not what happens next in the sequence, but what else is connected to this particular point, and what happens to those connections if this one thing changes. Yesterday's queue story is a system map waiting to be drawn. Wait time connects to how fast agents close tickets, which connects to what counts as resolved, which connects to repeat contacts, which connects back to wait time again. That last connection, looping back to where it started, is exactly what a simple process map, drawn left to right, has no way of showing.

## How to actually draw one

You do not need specialist software or formal notation for this, and reaching for a tool before the thinking is done usually gets in the way more than it helps. Write the problem in the middle of a page. Around it, write everything that genuinely affects it or is affected by it: people, incentives, other processes, customer behavior, anything with a real causal connection rather than a loose association. Draw an arrow for every real influence you can name, and for each one, note plainly whether more of the first thing causes more or less of the second. More pressure to close tickets fast causes more quick, low-quality closures. More quick, low-quality closures causes more repeat contacts. More repeat contacts causes more pressure on the queue, which is where the arrow comes back around to where it started.

That last step, the arrow returning to its starting point, is the moment a straight-line process map turns into an actual system map, and it is usually the single most useful thing to look for on the whole page. A straight line of boxes cannot show you a loop, because a loop is not a sequence, it is a cycle, and a cycle is exactly the shape that lets a fix at one end quietly undo itself at the other end weeks later.

## What to include, and what to leave off

The instinct, once you start drawing, is to include everything, and a map that tries to include everything becomes unusable within about ten minutes. The discipline that keeps a system map genuinely useful is restricting it to connections you can actually defend with a real mechanism, not ones that merely feel related. "Marketing spend affects the queue" is too vague to draw an honest arrow for. "Marketing spend affects how many new customers sign up in a given month, which affects how many support contacts come in six to eight weeks later once those customers hit their first real issue" is specific enough to draw, defend, and eventually test against real data.

<div class="callout">

<strong>TESTING WHETHER A CONNECTION BELONGS ON THE MAP</strong>

<strong>Analyst sketching the map:</strong>

<em>Does staff morale belong on this diagram?</em>

<strong>Colleague:</strong>

<em>Only if you can say exactly what it changes. Low morale, slower average handle time, more sick days, something specific.</em>

<strong>Analyst:</strong>

<em>Fair. I'll add it as affecting handle time directly, since that's the mechanism I can actually point to, and leave the vaguer version off.</em>

</div>

That filter, requiring a specific mechanism rather than a vague association, is what keeps a system map from turning into a messy brainstorm with arrows everywhere. A map with eight well-defended connections is more useful than one with thirty connections that mostly represent a feeling that two things are probably related somehow.

## What changes once you can see the whole thing

Drawing the map rarely produces a dramatic revelation on its own. What it reliably produces is a very specific, very useful kind of hesitation right before a fix ships, the moment where someone looks at the page and says, out loud, "wait, if we speed this part up, doesn't that put more pressure on the part three boxes over?" That question, asked with the map in front of the room rather than purely from memory, is far easier for a group to ask together than it is for any one person to hold the whole system in their head during a fast-moving meeting.

This is also, quietly, one of the most useful things a facilitator can bring into a workshop, tying directly back to last week's series. A system map drawn on the wall before the room starts debating a fix gives everyone the same shared picture of what connects to what, which does a great deal to prevent the kind of fast, confident agreement that sounded fine in the room and unraveled three weeks later. It also changes who gets to contribute. A support agent who has never sat in a strategy meeting in their life can look at a map with the queue in the middle and immediately say, correctly, that the arrow to repeat contacts is missing, because they live inside that connection every single day. The map becomes a shared object the whole room can correct together, rather than a private model sitting inside one analyst's head that nobody else has any way to challenge.

A map drawn once also has a second life worth planning for from the start. The first draft of any system map is wrong in small ways, and that is fine, because the real value shows up the second and third time it gets pulled back out, when a new fix is being considered and someone can point at the existing page and ask whether this new change interacts with a connection that is already sitting there in ink. Treating the map as a living reference, updated a little each time rather than redrawn from nothing, turns a one-off exercise into something closer to institutional memory for how the system actually behaves.

Tomorrow goes one level deeper into the specific shape that causes the most damage inside these maps: the loop that feeds itself, and the loop that quietly fights every fix aimed at it.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Feedback Loops: The Pattern Behind Most Mystery Problems - Reinforcing loops that quietly run away, and balancing loops that fight every fix you try.</em>
