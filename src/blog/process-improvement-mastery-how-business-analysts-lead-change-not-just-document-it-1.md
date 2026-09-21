---
title: "Root Cause Analysis: Finding the Real Problem"
series: "Process Improvement Mastery: How Business Analysts Lead Change, Not Just Document It"
day: 2
description: "There is a pattern I have seen repeat itself across improvement projects in different industries and different organisations. A problem is visible.…"
date: 2026-06-02T14:30:09.658Z
cover: "/images/blog/f4dc16_92798cb61f194e9985ba4c53e43ab773.png"
readingTime: 7
wixId: "f276250c-2341-4787-9734-acc89e27a3bc"
---
**DAY 2** | **Root Cause Analysis: Finding the Real Problem**

<img src="/images/blog/f4dc16_92798cb61f194e9985ba4c53e43ab773.png" alt="Root Cause Analysis: Finding the Real Problem" width="2848" height="1472" loading="lazy">

**There is a pattern I have seen repeat itself across improvement projects in different industries and different organisations.** A problem is visible. Management asks for it to be fixed. A team is assembled. They look at the problem, discuss it, and design a solution based on what they can see. The solution is implemented. The problem either returns or a new version of it appears somewhere else in the process. The reason is almost always the same. ***The solution addressed the symptom. The root cause was never found.***

Root cause analysis is the structured work of tracing a visible problem back to its origin. Not the step where it becomes visible. Not the place where it hurts the most. The point in the process, the system, or the organisation where, if something were changed, the problem would stop occurring. Finding that point is harder than it sounds. Problems present themselves at the surface. Their causes are often several layers down, in places that are not immediately connected to where the pain is felt. The BA who knows how to dig is the one who produces improvements that last.

## Why Surface-Level Fixes Fail

A surface-level fix addresses what is immediately visible without asking why it is there. It treats the symptom as the problem. And it works, in the short term, in the same way that taking a painkiller works for a broken bone. The pain reduces. The underlying damage remains. And eventually the pain returns, often worse. In process improvement, surface-level fixes are seductive because they are fast and they produce visible results. If customer complaints about slow response times are the problem, adding more staff to the response team produces visible results quickly. The queue reduces. The manager reports improvement. The underlying reason the queue was long in the first place, perhaps a system that requires three manual re-entries of the same data, is untouched. Six months later, the queue is long again. More staff are requested. The cycle repeats. Root cause analysis breaks this cycle. It takes longer upfront. It requires asking uncomfortable questions about why things are the way they are. And it produces improvements that do not need to be repeated. Let's discuss three techniques for finding the root cause.

## Technique 1: The 5 Whys

The 5 Whys is the simplest and most widely applicable root cause analysis technique. The principle is straightforward: take a problem statement and ask why it is happening. Take the answer and ask why that is happening. Repeat until you reach a cause that, if addressed, would prevent the problem from recurring. Five iterations is the guideline, not a rule. Some problems need three. Some need seven. Here is an example from a finance team I worked with.

Problem: Monthly management accounts are consistently late.

Why? Because the consolidation process takes longer than the time available.

Why does the consolidation take so long? Because data from three regional systems has to be manually extracted, reformatted, and combined each month.

Why is it done manually? Because the three systems do not share a common data format.

Why do they not share a format? Because they were implemented at different times by different teams with no integration requirement.

Why was no integration requirement set? Because the original system implementations were treated as standalone projects with no consideration of downstream reporting needs.

The root cause is not the consolidation process. It is a historical systems implementation decision that created a permanent manual overhead. The fix is not to make the consolidation faster. It is to address the data format gap, either through integration or through a standardised extract format that removes the reformatting step.

A surface-level fix would have hired a temporary resource to do the consolidation faster. A root cause fix removes the need for most of the consolidation work entirely.

The 5 Whys works best for problems with a clear cause-and-effect chain, where each why leads to a single, identifiable next cause. It is less effective for complex problems with multiple contributing causes, or for problems where the cause is genuinely uncertain. For those, the fishbone diagram is more useful.

## Technique 2: The Fishbone Diagram

The fishbone diagram, also called the Ishikawa diagram or cause-and-effect diagram, is a structured visual technique for mapping all the potential causes of a problem and organising them by category. The problem statement sits at the right of the diagram, at the head of the fish. The main categories of cause form the bones of the fish. The most commonly used categories in process improvement work are ***People, Process, Technology, Measurement, Environment, and Management***. Within each category, the team identifies specific causes that may be contributing to the problem. The fishbone is particularly valuable in two situations.

1. The first is when a problem has multiple potential causes across different parts of the operation, and you need to ensure none are overlooked.
2. The second is in a group setting, where the structured format gives everyone a framework for contributing without the conversation drifting.

Running a fishbone session as a BA requires specific facilitation choices. Start with the problem statement and make sure everyone in the room agrees on it before beginning. A fishbone built on an ambiguous problem statement produces ambiguous causes. Work through one category at a time, asking the group to identify every possible contributing cause before moving to the next. Encourage quantity at this stage. Do not evaluate causes as they are generated. Once all categories are complete, the group votes or discusses to identify the most likely root causes for investigation.

The fishbone produces a hypothesis, not a conclusion. The causes identified in the session are the most likely contributors based on the team's knowledge and experience. They still need to be verified against data before a fix is designed. A fishbone that leads directly to a solution without data validation is an improvement initiative built on opinion rather than evidence.

## Technique 3: Fault Tree Analysis

Fault Tree Analysis is a top-down, logical technique for tracing how a specific failure or problem can occur. It starts with the undesired event at the top and works downward through a tree of logical relationships to identify the combinations of conditions or failures that could cause it. Where the 5 Whys follows a single chain and the fishbone maps a broad landscape of potential causes, fault tree analysis maps the logical pathways to failure. It is particularly useful for problems where the concern is about how something could go wrong in the future, such as a risk assessment for a new process, rather than why something has already gone wrong.

In BA practice, fault tree analysis is most valuable in high-risk process design, where understanding the failure modes of a proposed process is as important as understanding its normal operation. If you are designing a new payment authorisation process, a fault tree helps you identify every combination of conditions under which an unauthorised payment could slip through and design controls that address each pathway. The technique requires logical precision. Each node in the tree represents either an AND gate, meaning all contributing conditions must be present for the parent event to occur, or an OR gate, meaning any one contributing condition is sufficient. Getting these relationships right is the critical skill in fault tree analysis, and it is where BA analytical rigour produces the most value.

## Choosing the Right Technique

The three techniques are not interchangeable. Each is suited to a specific type of problem investigation.

- **Use the 5 Whys** when the problem has a clear causal chain, and you need a fast, low-overhead way to trace it. It works well for operational problems with a single dominant cause and is the right starting point for most day-to-day improvement conversations.
- **Use the fishbone** when the problem is complex, when multiple causes are suspected across different parts of the operation, or when you need to run a group session that surfaces contributions from people with different perspectives. It is the right technique when you want to ensure completeness before narrowing down to the most likely causes.
- **Use fault tree analysis** when the concern is about failure risk in a new or redesigned process, or when the logical pathways to failure are complex, and you need to map them systematically. It is the right technique for risk-focused improvement work and for any situation where understanding how a process could fail is as important as understanding how it should succeed.

## The Mistakes That Produce Surface-Level Fixes

1. **Stopping at the first answer**: The first cause identified in any root cause session is almost always a symptom of something deeper. The BA who accepts the first answer and moves to solution design is designing a fix for the wrong problem. Keep asking why until the answer leads somewhere that, if changed, would prevent the problem entirely.
2. **Analysing without data**: Root cause analysis produces hypotheses. Data validates them. A fishbone session that identifies six potential causes and then immediately proceeds to solution design is guesswork with a framework attached. Before designing a fix, gather the data that confirms which cause is actually driving the problem. Process data, error logs, complaint records, and observations are all valid sources.
3. **Running the analysis with the wrong people in the room**: The people closest to the problem know things that nobody else does. A root cause analysis run entirely by managers and analysts, without the people who actually run the process every day, will miss the tacit knowledge that explains why the process really fails. The person who has been working the complaints queue for three years knows exactly where the bottlenecks are. Ask them.
4. **Confusing cause with blame**: Root cause analysis is not a search for who is at fault. It is a search for what needs to change. When sessions drift toward blame, people stop contributing honest information and start protecting themselves. Keep the conversation on the process, the system, and the structure. The question is always: what needs to be different, not who did something wrong.

***Go out and be successful.***

## Oluwatosin Ogunkoya | Flotog BA Insights | www.flotogbainsights.com

*Tomorrow: Lean Thinking and Kaizen. How to see waste in a process the way Lean practitioners see it, what Value Stream Mapping looks like in BA practice, and how to apply continuous improvement principles without needing a certification.*
