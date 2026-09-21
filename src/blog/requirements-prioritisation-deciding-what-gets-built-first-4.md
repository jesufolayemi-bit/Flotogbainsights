---
title: "From Priority List to Actual Commitment"
series: "Requirements Prioritisation: Deciding What Gets Built First"
day: 5
description: "A prioritised list, however well built, is not the finish line. It is the starting point for a real release that will test every single decision on it…"
date: 2026-09-18T07:01:34.969Z
cover: "/images/blog/f4dc16_fd9a3838fc0c4fea834370d0ff1908a2.png"
readingTime: 6
wixId: "fbf629ef-485c-48a1-bf57-470e4336736e"
---
<img src="/images/blog/f4dc16_2216c81056e14918a9fa645d065b12ea.png" alt="From Priority List to Actual Commitment" width="1024" height="572" loading="lazy">

A prioritised list, however well built, is not the finish line. It is the starting point for a real release that will test every single decision on it, usually within the first two weeks. Two things happen reliably once a prioritised list meets an actual release.

1. New scope shows up mid-stream, arguing convincingly that it deserves to jump the queue.
2. And someone whose item did not make the cut needs an honest answer about why, delivered in a way that does not quietly reopen a decision the whole room already made together.

New scope arriving mid-release is not a failure of the original prioritisation; it is a normal feature of real work, and pretending it will not happen is how a carefully built list quietly falls apart within the first sprint. The fix is a rule agreed before the release starts, not negotiated item by item under the pressure of a specific, urgent-sounding request.

The rule that holds up in practice: new scope enters a committed release only by displacing something of equal or greater size already in it, never by simply adding to what was already committed. This keeps the total capacity honest, the same capacity constraint the entire week has been built around, rather than letting the release quietly grow past what the team actually has room for.

Seeing that capacity laid out honestly helps too.

<img src="/images/blog/f4dc16_fd9a3838fc0c4fea834370d0ff1908a2.png" alt="From Priority List to Actual Commitment" width="969" height="263" loading="lazy">

A chart like this, shared openly with stakeholders before new requests arrive, does real work on its own. Most prioritisation conversations happen through labels: a list of items each marked Must, Should, or Could, sitting one below the other. A label tells you what category something belongs to. It does not tell you, at a glance, that the whole thing adds up to a fixed, already fully spent amount. This chart does. 60% of a finite release is gone before anyone raises a new idea. 25% more is already committed to Should items that were themselves fought for and agreed on. By the time you get to the 15% left for Could, there is no meaningful slack sitting anywhere in the release, and the chart makes that visible in one glance in a way a scrolling list of labelled tickets never quite manages.

That visibility is what actually changes the conversation the moment new scope shows up mid-release, which it always eventually does. Without this picture in front of them, a stakeholder asking for something new is implicitly asking into what feels like open space, because nothing in front of them shows otherwise. The request feels small and reasonable on its own, the same way every individual item felt reasonable back in Monday's priority inflation problem. With this chart already shared and already agreed on, the same request is now landing against a release that everyone in the room has already seen is full.

The conversation stops being "***can we fit this in?***" and becomes "***what comes out to make room for it?***" which is a completely different negotiation, and a much more honest one. This is also where the chart connects directly to the scope: new scope only enters a committed release by displacing something of equal or greater size already inside it, never by simply adding on top. The chart is what makes that rule enforceable in the room rather than just a principle stated in a planning document nobody remembers by week three. You are not asking a stakeholder to take your word that capacity is tight. You are pointing at a picture they already saw and already agreed to, and asking them, specifically, which of these three colored blocks they would like to shrink to make space for the new one. That is a much harder question to dodge than a vague sense that the team seems busy, and it is exactly the kind of question that keeps a release honest instead of quietly growing past what was actually committed to.

## Communicating What Didn't Make the Cut

The SAID structure from the Difficult Stakeholders series, State, Acknowledge, Impact, Decide, applies just as well to a prioritisation decision as it does to bad news or pushback. The situation is structurally identical: someone needs a fact they may not want to hear, delivered in a way that respects what it costs them and ends with a real next step rather than a flat no.

| **COMMUNICATING A WON'T DECISIONYou (State):***The dashboard redesign didn't make this release. It's classified as a Should, and capacity this cycle only covers the Musts and a small number of top Should items.***You (Acknowledge):***I know you were hoping to have it live for the board meeting, and I understand that timing matters to you specifically.***You (Impact):***The current dashboard still works for that meeting; it just won't have the visual polish you wanted, and I want to be upfront about that rather than let you find out later.***You (Decide):***I'd like to put it first in line for next release. Would it help if I put together a one-page summary of what the redesign will include, so you have something concrete to reference in the meantime?* |
| --- |

Notice this message does not reopen the prioritisation debate, and it does not pretend the decision does not cost the stakeholder anything. It states the fact, names the real cost to them specifically, and hands them a concrete next step, which is what makes a Won't decision land as a considered trade-off rather than a dismissal.

## Closing the Week

- On Monday we discussed priority inflation, what happens by default when trade-offs never get forced into the open.
- Tuesday I shared how MoSCoW can be done honestly, especially the real test for what qualifies as a Must.
- Wednesday introduced the Kano model and the blind spot MoSCoW alone has around delighters.
- Thursday combined both into a value versus effort matrix for the moments a room genuinely disagrees.
- Today closes the loop: a list only matters once it survives contact with a real release, protected from silent scope creep and communicated honestly to everyone whose item did not make it in.

Please remember that none of these tools removes the discomfort of telling someone their request did not make the cut. What they do is replace guesswork and inflation with a defensible, honestly applied process, so that when a hard call has to be made, and it always eventually does, you can explain exactly why, on the record, in a way that holds up under real scrutiny.

That is worth the friction every one of these tools adds to a process that would otherwise move faster without them. Testing whether something is truly a Must takes longer than simply marking it high priority. Running Kano on a feature list takes longer than sorting by urgency alone. Plotting a matrix and arguing about placement takes longer than accepting the loudest stakeholder's framing. That friction is not waste. It is the actual cost of making decisions that hold up once a real release puts pressure on them, and it is consistently cheaper than the alternative: a list that looked decisive on the day it was written and quietly fell apart the moment reality tested it.

One last step most teams skip entirely, and it is worth building into the standard release rhythm rather than treating as optional is that: once a release actually ships, go back to the Won't list and the Could items that got cut, and check whether the release genuinely suffered from their absence or whether the decision held up exactly as expected. This does two things at once:

1. It gives you real evidence the next time someone argues a similar item is secretly a Must, since you can point to the last release that shipped fine without something similar.
2. And it catches the rare case where a cut item turns out to have mattered more than it seemed at the time, which is useful information for calibrating the next round of prioritisation rather than something to feel defensive about.

A short retrospective question covers this well: of everything we marked Should or Could this release, what would we reclassify if we were doing it again with what we now know? The answer is rarely dramatic, and it is exactly the kind of small correction that keeps a prioritisation process honest over many releases rather than slowly drifting back toward the inflation this week opened with.

***Go out and be successful.***

**Oluwatosin Ogunkoya**  **·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·**  [**www.flotogbainsights.com**](/)

*NEXT WEEK*

*The Discovery Phase -* *Setting a project up to succeed before requirements even start.*
