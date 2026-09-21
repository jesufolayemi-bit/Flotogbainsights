---
title: "Interpreting Data Honestly: Avoiding the Traps That Mislead"
series: "Data Analysis for Business Analysts: How to Read It, Interpret It Honestly, and Make Better Decisions"
day: 3
description: "DAY 3 | Interpreting Data Honestly: Avoiding the Traps That Mislead"
date: 2026-06-11T05:05:21.265Z
cover: "/images/blog/f4dc16_06c091f8588844d09d1ced5a06d2fe67.png"
readingTime: 6
wixId: "d73ece85-14a1-4788-beba-cf51ded066ff"
---
<img src="/images/blog/f4dc16_06c091f8588844d09d1ced5a06d2fe67.png" alt="Interpreting Data Honestly: Avoiding the Traps That Mislead" width="1424" height="736" loading="lazy">

<strong>Here is a single fact about a business, presented two ways.</strong>

- Version one: customer complaints rose by 40% last quarter. A serious problem that demands attention.
- Version two: customer complaints rose from 10 to 14 last quarter, against a total of 50,000 transactions. A negligible change well within normal variation.

Both statements describe the same data. Both are factually true. And they lead a reader to completely opposite conclusions about whether there is a problem. This is the central challenge of interpreting data, and it is the reason this is the most important article in this week's series. Data does not interpret itself. People interpret it, and people bring their beliefs, their incentives, and their blind spots to the work. The Business Analyst's job is to be the person who interprets honestly, especially when honest interpretation is inconvenient.

#### Why Misleading Data Is Usually Not a Lie

It is tempting to think of misleading data as deception, as someone deliberately manipulating numbers to fool an audience. This happens, but it is the exception. The far more common situation is that people present data in a way that supports what they already believe, without any conscious intent to mislead. The marketing team genuinely believes the campaign worked, so they present the metrics that show it working. The operations manager genuinely believes they need more resources, so they present the data that demonstrates the strain. The project team genuinely believes the project is on track, so they present the measures that are green and explain away the ones that are red. Everyone is being honest in their own mind. Everyone is presenting a partial truth. And the sum of all these partial truths is an organisation making decisions on a distorted picture of reality. This is why the BA's role matters so much. The BA is one of the few people in the organisation whose job is to care about the whole picture rather than the part that supports a particular position. That neutrality is the BA's most valuable contribution to data-informed decision-making.

#### The Traps That Mislead

## The Truncated Axis

The most common visual trap is a chart where the vertical axis does not start at zero. By starting the axis near the lowest data point, a small change is stretched to fill the chart and looks dramatic. A change from 50 to 52 can be made to look like a doubling if the axis runs from 49 to 53. When you see a chart that shows a dramatic trend, the first thing to check is the axis. If it does not start at zero, ask whether the change is genuinely as significant as the chart makes it look. Sometimes it is. Often it is not.

## The Cherry-Picked Time Period

Any trend can be reversed by choosing the right start and end points. A business in long-term decline can show growth by starting the chart at its lowest recent point. A volatile metric can be made to look stable by choosing a period that happens to begin and end at similar values. When you see a trend over a specific time period, ask why that period was chosen. What does the data look like over a longer period? What happens if you move the start point? A trend that only exists for one carefully chosen window is not a trend. It is a selection.

## The Misleading Average

We covered this yesterday, and it belongs here too because it is one of the most common interpretation traps. An average can hide a distribution that tells a completely different story. When someone presents an average, ask about the spread. Ask whether there are outliers pulling the average in one direction. Ask whether the median tells a different story.

## Correlation Presented as Causation

Two things moving together does not mean one causes the other. Ice cream sales and drowning deaths both rise in summer. Ice cream does not cause drowning. They share a common cause: warm weather. In business data, this trap is everywhere. A new initiative launched, and sales went up; therefore, the initiative caused the increase. Perhaps. Or perhaps sales were rising anyway, or a seasonal effect was responsible, or a competitor left the market at the same time. When you see a causal claim built on two things moving together, ask what else could explain the relationship.

## The Missing Denominator

A number on its own often means nothing without the total it came from. 14 complaints sounds different depending on whether it is out of 50 transactions or 50,000. A raw number without its denominator is one of the most common ways data misleads, because it triggers a reaction without providing the context needed to judge whether the reaction is warranted. Whenever you are given a raw number, ask: out of how many? The denominator is often where the real story lives.

## Survivorship Bias

This trap occurs when the data only includes the cases that made it through some filter, and the cases that did not are invisible. If you analyse the characteristics of your current customers to understand what makes a good customer, you are missing everyone who tried your product and left. The data you can see is shaped by who survived to be in it. When analysing any dataset, ask who or what is not in it. The cases that are missing are often more informative than the cases that remain.

#### How to Interpret Honestly

Spotting the traps is the defensive skill. Interpreting honestly is the positive practice that the traps are a part of. Honest interpretation rests on a few habits that a Business Analyst can build deliberately.

1. The first habit is to separate what the data shows from what you want it to show. Before interpreting any dataset, it is worth naming, even just to yourself, what conclusion you are hoping for or expecting. Naming it makes it easier to notice when you are bending the interpretation toward it. The most honest analysts are the ones most aware of their own bias.
2. The second habit is to actively look for the alternative explanation. Whenever the data appears to support a conclusion, ask what else could explain the same pattern. If you cannot rule out the alternatives, the conclusion is weaker than it looks. This single habit prevents most of the causation errors that lead organisations astray.
3. The third habit is to state the limitations alongside the findings. Honest data interpretation does not present a conclusion as more certain than the data supports. It says what the data shows, and it says what the data cannot tell us. A recommendation that acknowledges its own limitations is more trustworthy, not less, and a stakeholder who has been given the limitations can make a better decision than one who has been given false certainty.
4. The fourth habit is to be willing to deliver the inconvenient interpretation. This is the hardest one. When the data does not support what everyone wants it to support, the honest interpretation is the unwelcome one. The BA who can deliver that interpretation with clarity and tact, who can say the data does not show what we hoped it would, is doing the single most valuable thing a Business Analyst can do with data.

#### The BA as the Honest Broker

In most organisations, almost everyone who presents data has a stake in the conclusion. The Business Analyst is one of the few people positioned to be a neutral interpreter, an honest broker who cares more about getting the interpretation right than about which conclusion it supports. This neutrality is not a soft skill. It is a discipline. It requires resisting the pressure to give people the answer they want. It requires the confidence to say the data is inconclusive when it is inconclusive, rather than manufacturing a finding to satisfy the demand for one. And it requires the integrity to apply the same scrutiny to data that supports your own view as to data that challenges it.

The BA who builds a reputation as an honest broker of data becomes something rare and valuable in an organisation: a trusted source of interpretation that people rely on precisely because they know it is not bent toward a predetermined answer. That reputation is one of the most powerful professional assets a Business Analyst can have.

<strong><em>Go out and be successful.</em></strong>

## Oluwatosin Ogunkoya | Flotog BA Insights | www.flotogbainsights.com

<em>Tomorrow: From Data to Decision. How to turn numbers into analytical judgement, how to present data so it informs rather than manipulates, and how to build a recommendation that data genuinely supports.</em>
