---
title: "Analyse and Improve: The Average Is Hiding the Problem"
slug: analyse-and-improve-the-average-is-hiding-the-problem
series: "Lean Six Sigma for BAs Who Aren't Black Belts: The Parts That Transfer Straight Into Everyday BA Work"
day: 4
dek: "Finding where the failures concentrate, then testing a change before announcing it"
description: "An average of 4.1 days hid a quarter of late cases. How BAs split data to find where failures concentrate, then pilot a fix before rolling it out."
date: 2026-10-15T06:00:00.000Z
readingTime: 5
linkedinPost: |
  An average of 4.1 days looks fine against a five-day promise. Thirty out of 120 tenants waited longer anyway.

  Customers do not experience averages. They experience their own case, and a process can beat its average and still fail a quarter of the people it serves.

  When we split the data by request type, the pattern jumped out: 24 of the 30 late decisions came from the one request type that needed an engineer's sign-off. Split that group by the day of the week each request arrived, and the cause showed itself in a single line of the table. The fix cost almost nothing, and we tested it on 15 requests before changing anything for everyone.

  Today's article is about finding where variation concentrates and proving a change works before you announce it.

  Read the full article in this week's newsletter. Link in the comments.

  When did a simple data split last show you a problem the average had been hiding?

  #BusinessAnalysis #LeanSixSigma #ProcessImprovement #RootCause #FlotogBAInsights
---
An average of 4.1 working days looks comfortable against a five-day promise, and that comfort is exactly the problem. Thirty of the 120 requests still took longer than five days, because customers do not experience averages. They experience their own case, and a process can beat its average while failing a quarter of the people it serves. The Analyse phase is where a baseline turns into an explanation, and the explanation starts with a change in what you look at. Stop asking how the process performs overall and start asking where the failures live.

## Variation is the real culprit

Statisticians separate variation into two kinds, and the distinction decides what you do next. Common-cause variation is built into the process: the steady spread of results that appears when nothing unusual is happening. Special-cause variation comes from a specific, identifiable event, such as an outage, a staff absence or a one-off exception. The two need opposite responses. A special cause deserves investigation, because something specific happened and can be understood. A common cause cannot be investigated one case at a time, because there is no single event to find. It can only be reduced by changing the process itself.

The costly mistake is treating common-cause variation as if every late case were somebody's special failure. A manager who questions each late request one by one, and reprimands whoever handled it, is reacting to normal process spread as though it were misconduct. It rarely improves anything, and it teaches people to hide delays. When a quarter of cases fail in a pattern that repeats week after week, the process is producing that failure, and the people inside it are mostly absorbing it.

## Slice the data until the pattern shows

The tool for finding where variation lives is stratification, which simply means splitting the baseline by the factors you recorded alongside it. Split the illustrative data by request type and the picture changes at once. The 90 standard requests had an average of 3.3 days, and only 6 of them were late. The 30 requests that needed a structural engineer's review averaged 6.5 days, and 24 of them were late. Put differently, one request in four came from the engineer-review group, and that group produced 80 percent of every late decision. Any improvement effort spread evenly across all requests would have been aimed at the wrong target.

That lopsided pattern is the Pareto principle in practice: a minority of cases or causes tends to produce a majority of the failures, so the first useful cut is usually to find that minority. Then keep slicing inside it. Within the engineer-review group, splitting by arrival day produced the decisive table. The 12 requests that arrived on Monday or Tuesday averaged about 4.3 days. The 18 that arrived from Wednesday to Friday averaged 8.0 days, and every one of them was late. Engineer reviews, it turned out, were held in a single weekly slot on Thursdays with an effective cut-off on Tuesday, so a request arriving on Wednesday simply waited for the following week's slot.

Notice how this cause was found. Nobody guessed, and nobody asked the engineers whether they felt overloaded. The data narrowed the search twice, first to a request type and then to an arrival day, until the explanation was visible in a table. The five whys covered earlier in this series are the right companion tool for explaining why a pattern exists once the data has shown where it is, and the evidence beats an opinion in the room every time. Keep a note of the ones you rule out as well, because "it is not the individual handlers, and it is not the paperwork" is a finding that saves the next team weeks.

## Improve by testing, not announcing

With a verified cause, generate options before choosing. Here there were three: add a second engineer review slot early in the week, flag engineer-review requests at intake so they are scheduled the day they arrive, or allow remote review of low-risk drawings. Compare them on expected impact, cost and the risk of side effects, and choose the one that attacks the verified cause at the lowest cost. The second slot was cheap, fast and aimed directly at the Wednesday-to-Friday cluster, so it went first.

Then pilot it. A pilot is the smallest real test that can produce evidence, and its success criteria are agreed before it starts, so nobody can shift the goalposts after the results arrive. For four weeks, engineer-review requests could also be reviewed in a Monday slot, with the criterion that the late share inside that group had to fall from 80 percent to 40 percent or lower without any rise in requests returned for rework. The pilot handled 15 engineer-review requests. Three were late, a rate of 20 percent, and the average dropped from 6.5 days to 4.9.

Be careful about what a pilot is allowed to claim. It runs for a short time, on a small number of cases, usually under extra attention from the project team, and all three of those conditions flatter the result. The pilot's job is to show that a change is plausible and safe at small scale, which is why the full rollout keeps measuring against the baseline using the same operational definition. If the late share creeps back above target once the extra attention fades, you have learned something valuable about whether the change was strong enough to survive ordinary conditions.

Check for side effects with last week's second-order question: and then what happens? The Monday slot raised the engineers' review time from about three hours a week to about five, which the engineering lead accepted in advance, and rework did not rise. Then do the arithmetic at full scale. If the engineer-review group holds a 20 percent late rate, that is 6 late requests out of 30, which added to the 6 late standard requests gives 12 out of 120, or 10 percent, exactly the provisional goal. Fifteen requests is a small pilot, so treat it as strong evidence and not proof, and keep measuring during the full rollout. Tomorrow covers the phase that decides whether any of this is still true a year from now.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Control: Making the Gain Stay - The phase that decides whether the improvement lasts, plus how all five phases map onto the BA lifecycle you already run.</em>
