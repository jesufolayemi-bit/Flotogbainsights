---
title: "Why Nobody Reads Most BPMN Diagrams Twice"
series: "Business Process Modelling: Making BPMN Actually Useful"
day: 1
dek: "The gap between a technically correct diagram and a genuinely useful one"
description: "The gap between a technically correct diagram and a genuinely useful one"
date: 2026-09-07T06:00:14.545Z
cover: "/images/blog/f4dc16_e9f92b068d1f402aa68222340f15f492.png"
readingTime: 4
wixId: "879a0be4-5176-419b-a463-11b86dcfe320"
---
<img src="/images/blog/f4dc16_c38f98a772cb4d119bd233431667056a.png" alt="Why Nobody Reads Most BPMN Diagrams Twice" width="1024" height="572" loading="lazy">

Most business analysts learn BPMN once, in a course or a certification prep, and then spend years afterwards either avoiding it entirely or producing diagrams so dense that nobody but the person who drew them can actually follow the flow. I have watched both failure modes cause real damage on real projects. The analyst who avoids modelling describes a process in three paragraphs of prose, and three stakeholders in the same meeting walk away with three different mental pictures of what was actually agreed. The analyst who over-models produces a diagram with a dozen gateways and nested sub-processes, technically correct in every detail, that the one person who needed to approve it nods at in the meeting and never opens again. Neither of these is a talent problem. Both come from the same gap: nobody ever explained which parts of BPMN notation are genuinely load-bearing in a normal business conversation, and which parts are decoration that most rooms do not actually need.

## What BPMN is actually for

BPMN, Business Process Model and Notation, exists to answer one question clearly: ***what happens, in what order, and who does it***. That is the whole job. It is not there to demonstrate that you know the full specification, and it is not there to impress anyone with the number of symbols on the page. A process map earns its place the moment someone unfamiliar with the process can look at it and understand, without a verbal explanation, what happens and who is responsible for each step.

The full BPMN specification includes dozens of event types, gateway types, and connector variations, most of which exist for edge cases that rarely show up in a typical business process. Almost none of that belongs in a diagram meant for a room of stakeholders who are not BPMN experts, and treating the full spec as the standard to aim for is exactly what produces the diagrams nobody reads twice.

## Seeing the difference directly

<img src="/images/blog/f4dc16_e9f92b068d1f402aa68222340f15f492.png" alt="Why Nobody Reads Most BPMN Diagrams Twice" width="969" height="220" loading="lazy">

*The same underlying process, drawn two different ways.*

Both diagrams above are technically valid BPMN. Both would pass a strict notation review. Only one of them would survive being shown to a stakeholder who has never seen a process map before and asked to confirm it is accurate. The left version demonstrates knowledge of parallel gateways and sub-process decomposition. The right version does the actual job a process map exists to do: it lets a reader understand what happens in a single pass, with no verbal narration required.

Notice that the right version does not hide complexity; it simply keeps only the complexity that changes the outcome. A genuine decision, needs approval or not, stays on the page as a gateway. The internal detail of how that approval actually gets handled, who reviews it, what criteria they use, does not need to live on this diagram at all. It can live in a separate, more detailed map if the audience for that detail ever needs one.

## Why this matters more than knowing the full notation

A business analyst who can recite every BPMN event type from memory but cannot produce a diagram a stakeholder will actually read has a smaller practical skill than one who knows a dozen symbols well and uses them with real judgment about what the audience needs. This is the same distinction the Certifications series drew between a credential proving knowledge and real capability proving itself under actual working conditions. Notation knowledge is necessary. It is not sufficient on its own, and treating it as sufficient is the single biggest reason so many process maps get drawn once and never looked at again.

## This week's arc

Tomorrow is the actual toolkit: the handful of symbols that do almost all the real work in a typical business process map, explained clearly enough that you could start drawing immediately afterwards.

Wednesday walks through mapping an as-is process before touching anything about how it should improve, using a full worked example.

Thursday covers the specific, common mistakes that quietly make an otherwise reasonable map useless, with before and after fixes.

Friday closes with how to actually get a room to act on a process map, rather than nodding at it once and forgetting it exists by the following week.

By the end of Friday, if you have never drawn a BPMN diagram before this week, you should have everything needed to open a blank page and draw one that a real stakeholder would actually understand and trust.

Nothing this week requires special software. Every diagram covered here could be sketched on a whiteboard, a napkin, or a plain page with a pen, and in the early stages of mapping a real process, that is very often exactly where it should stay. The tool matters far less than the discipline behind it. A polished diagram built in dedicated modelling software still fails if it is drawn with the wrong granularity or missing the exception paths covered later this week, and a rough pen sketch on paper still succeeds if it gets those fundamentals right. Learn the thinking first. The software is a formatting choice you can make afterwards.

***Go out and be successful.***

## Oluwatosin Ogunkoya

*Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·*  [*www.flotogbainsights.com*](/)
*TOMORROW*

*The Handful of Symbols That Do Almost All the Work -* *The complete practical toolkit, explained clearly enough to start drawing immediately.*
