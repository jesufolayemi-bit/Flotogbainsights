---
title: "The Obvious Fix That Makes Things Worse"
series: "Systems Thinking: Seeing the Whole Problem Before You Touch Any Part of It"
day: 1
description: "A support team I worked near once fixed their queue problem. Average wait time dropped by half within a month, and the dashboard looked exactly the way…"
date: 2026-10-05T06:00:09.391Z
cover: "/images/blog/f4dc16_3d2ce4a82afd4c0ebce09011182f5162.png"
readingTime: 5
wixId: "5f5cfc4e-5b91-4ecc-898e-2b8b8309f22d"
---
<img src="/images/blog/f4dc16_8034d0f6d6204ff487908e83bb0559a5.png" alt="The Obvious Fix That Makes Things Worse" width="1024" height="572" loading="lazy">

A support team I worked near once fixed their queue problem. Average wait time dropped by half within a month, and the dashboard looked exactly the way everyone had hoped it would. Six weeks later, complaints were up, not down. The fix had worked exactly as designed, which was the strange part. Agents had been told, reasonably, to close tickets faster, and they did. The trouble was in what closing faster actually meant in practice. Harder issues that used to get the time they genuinely needed were now closed on the first quick answer instead, whether or not that answer actually solved anything. Those customers came back a week later with the same problem, now angrier, and this time asking for a supervisor by name.

## Why the whack-a-mole pattern happens

Nobody on that team made a bad decision. Every individual choice, measured on its own, was reasonable. Management wanted shorter wait times and said so clearly. Agents responded to the incentive they were actually given, which rewarded speed and said nothing about whether the issue was genuinely resolved. The queue number improved because the system did precisely what it was built to reward, and the cost of that improvement simply moved to a part of the system that nobody had a dashboard for yet, which was repeat contacts and customer frustration a few weeks downstream.

This is the pattern that systems thinking exists to catch, and it shows up constantly in BA work under different names. A change that is locally correct, that solves exactly the problem it was aimed at, and is globally worse, because the system it sits inside absorbed the pressure somewhere else instead of actually releasing it. The queue was never really the problem. It was one visible symptom of a larger arrangement that also included how issues got escalated, how agents were measured, and what a customer expected to happen the second time they called about the same thing.

## A system fights back

Systems have a habit of absorbing pressure rather than releasing it, and this is worth sitting with because it explains why so many fixes feel successful at first and then quietly fail. A system under pressure to hit one visible number will very often find a way to hit it, and the resources that used to go toward the thing the number was supposed to represent get redirected toward the number itself instead. Wait time went down because the thing being measured was wait time, not customer satisfaction, and the two had quietly stopped being the same thing the moment the incentive was set.

<div class="callout">

<strong>THE CONVERSATION THAT SHOULD HAVE HAPPENED BEFORE THE FIX SHIPPED</strong>

<strong>Operations lead:</strong>

<em>We need wait times down. Target agents closing tickets faster.</em>

<strong>BA:</strong>

<em>Before we set that target, what happens to a ticket an agent can't genuinely resolve in the time we're asking for?</em>

<strong>Operations lead:</strong>

<em>I suppose they'd close it with whatever answer gets it off their screen.</em>

<strong>BA:</strong>

<em>Then we're not actually reducing the work</em>; <em>we're moving it two weeks downstream into a repeat contact, and repeat contacts usually come in angrier than first contacts. Can we track resolution on the first contact alongside speed, not speed on its own?</em>

</div>

That one question, asked before the target shipped rather than diagnosed six weeks after, is the entire difference between systems thinking and ordinary problem solving. It does not require a model, a diagram, or a framework. It requires pausing on the obvious fix long enough to ask what else in the system depends on the thing you are about to change, and what that thing will do once the pressure is removed from where it currently sits.

## What this means for how you fix things

None of this is an argument against fixing problems quickly, and it is not a case for analysis paralysis before every reasonable change. Most fixes are genuinely fine, and most systems are more forgiving than the queue example suggests. The habit worth building is narrower and more useful than universal caution: before shipping a fix aimed at one visible symptom, ask what else in the system is connected to it, and where the pressure you are relieving here is actually going to land. Sometimes the honest answer is nowhere troubling, and the fix really is just a fix. Sometimes the honest answer is a repeat-contact problem six weeks out that nobody is currently measuring, and that is worth knowing before the dashboard looks good for all the wrong reasons.

There is also a harder version of this worth naming honestly, which is that the person who shipped the original fix is rarely the one who notices it went wrong. The queue dashboard belonged to operations. The repeat-contact pattern that emerged six weeks later showed up first as a vague sense among frontline agents that customers seemed more frustrated lately, long before anyone connected it back to the ticket-closing target. Systems tend to distribute their consequences across different teams, different dashboards, and different weeks, which is exactly why the connection between cause and effect so rarely gets made by the person positioned to make it. Part of the discipline this week is building is simply widening who gets asked before a fix ships, not just whoever owns the number that is about to improve.

I keep coming back to this particular story because of how unremarkable it was at every single step. Nobody involved made a decision anyone would call careless. The target was set by someone trying to respond to a real customer complaint about long waits. The agents hitting that target were doing exactly what they were told mattered. The dashboard genuinely improved, in public, in front of people whose job it was to report on it. Every individual link in that chain would survive scrutiny on its own. It was only the whole shape, followed from the target through to the repeat contacts six weeks later, that revealed the actual story, and that shape is invisible to anyone looking at a single step in isolation.

This week builds that habit one piece at a time. Tomorrow is a practical way to actually see a system before changing any part of it, since the queue story above only looks obvious in hindsight, and in the room, with the pressure on to show improvement fast, it rarely feels that way at the time.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Mapping the Whole System Before You Touch Any Part of It - A practical way to see the loops and dependencies around a problem, not just the problem itself.</em>
