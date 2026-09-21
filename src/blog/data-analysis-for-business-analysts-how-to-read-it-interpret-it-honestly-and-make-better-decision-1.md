---
title: "Reading Data: The Foundations Every BA Must Master"
series: "Data Analysis for Business Analysts: How to Read It, Interpret It Honestly, and Make Better Decisions"
day: 2
description: "Before you can interpret data, you have to be able to read it. And reading data properly is a skill that most Business Analysts never formally learned. This…"
date: 2026-06-09T13:53:20.503Z
cover: "/images/blog/f4dc16_b97f4b6b50d0478c91890af2a50a0e8a.png"
readingTime: 6
wixId: "08e9d500-dcf2-4b26-8f43-6069d9f42a38"
---
**DAY 2** | **Reading Data: The Foundations Every BA Must Master**

<img src="/images/blog/f4dc16_b97f4b6b50d0478c91890af2a50a0e8a.png" alt="Reading Data: The Foundations Every BA Must Master" width="1424" height="736" loading="lazy">

**Before you can interpret data, you have to be able to read it. And reading data properly is a skill that most Business Analysts never formally learned.** This is not a criticism. The path into business analysis rarely runs through statistics. Most BAs came from business roles, from operations, from project work, from domains where data was something you received rather than something you analysed. The foundations of reading data were never part of the training, and there is rarely a moment later in a career where someone stops and teaches them. So the gap persists quietly. A BA can be experienced, capable, and effective in most of their work, and still feel a flicker of uncertainty when a dataset appears and they are expected to engage with it. Today is about closing that gap with the foundations that make reading data straightforward rather than intimidating.

#### The Types of Data

The first foundation is understanding what type of data you are looking at, because the type determines what you can legitimately do with it. Data falls into two broad families.

1. Qualitative data describes qualities or categories. It is not numerical in nature, even when it is sometimes coded with numbers. The region a customer lives in, the type of product they bought, whether they are satisfied or dissatisfied, the department a process belongs to. These are categories.
2. Quantitative data is numerical and measures quantity. The number of orders processed, the time a process takes, the revenue generated, the number of defects found. These are measurements.

Within quantitative data there is a further distinction that matters.

- Discrete data can only take specific values, usually whole numbers. The number of complaints received in a day is discrete. You cannot receive 4.5 complaints.
- Continuous data can take any value within a range. The time taken to resolve a complaint is continuous. It could be 4 minutes, 4.5 minutes, or 4.7 minutes.

Why does this matter for a BA? Because the type of data determines which analysis is valid. You can calculate an average resolution time because it is continuous quantitative data. Calculating the average of a set of region codes is meaningless, even though the software will happily do it for you. Understanding the type of data protects you from performing analysis that produces a number with no meaning.

#### The Measures That Matter

When people summarise data, they almost always reach for the average. The average is useful, but it is one of several measures of central tendency, and relying on it alone is one of the most common ways that data gets misread.

## The Mean

The mean is what most people call the average. Add up all the values and divide by the number of values. The mean is useful when the data is reasonably evenly distributed. It becomes misleading when the data contains extreme values, because the mean is pulled toward them. Consider a team of ten people where nine earn around 30,000 and one, the director, earns 300,000. The mean salary is 57,000. That number describes nobody in the team. It is technically correct and practically useless as a description of what people earn.

## The Median

The median is the middle value when all the values are arranged in order. In the salary example, the median is 30,000, which describes the team far more honestly than the mean. The median is resistant to extreme values, which makes it the better measure whenever the data contains outliers or is unevenly distributed. A practical rule for BAs: whenever you are given an average, ask whether it is the mean or the median, and ask whether the data is likely to contain extreme values. If it does, the median usually tells the truer story.

## The Mode

The mode is the most frequently occurring value. It is the most useful measure for categorical data, where mean and median do not apply. If you want to know the most common reason customers contact support, the mode is what you are looking for.

## The Range and the Spread

Central tendency tells you where the middle of the data is. It tells you nothing about how spread out the data is. And the spread is often where the most important information lives. The range is the simplest measure of spread: the difference between the highest and lowest value. More useful is the standard deviation, which measures how far values typically sit from the mean. A small standard deviation means the data is tightly clustered around the average. A large one means it is widely spread.

Two processes can have the same average completion time but completely different reliability. One completes every case in close to the average time. The other has some cases that finish almost instantly and others that take far longer, averaging out to the same number. The average hides this difference entirely. The spread reveals it. For a BA assessing process performance, the spread is often more important than the average.

#### Understanding Distributions

A distribution is the shape of your data: how the values are spread across their range. Understanding the shape is what allows you to choose the right measure and to spot when a summary is hiding something. Some data follows a normal distribution, the familiar bell curve, where most values cluster around the middle, and fewer values appear at the extremes. For normally distributed data, the mean is a good summary and the standard deviation is meaningful.

Much real-world business data is not normally distributed. It is skewed, with a long tail in one direction. Income is skewed. Response times are skewed. Transaction values are skewed. For skewed data, the mean is pulled toward the tail, and the median is the more honest summary.

You do not need to perform statistical tests to benefit from this. Simply looking at the shape of the data, by viewing it as a histogram or even just scanning the values, tells you whether you are dealing with something evenly distributed or something with a long tail. That single observation changes which measure you should trust.

#### Reading a Dataset Before You Trust It

Before drawing any conclusion from a dataset, there are questions a Business Analyst should ask. These questions are the difference between building a recommendation on solid ground and building it on sand.

1. Where did this data come from, and how was it collected? Data collected through one method may not be comparable with data collected through another. Survey data, system data, and manually recorded data all have different reliability characteristics.
2. What time period does it cover, and is that period representative? A dataset covering an unusual period, a holiday season, a system outage, or a one-off event may not support conclusions about normal operation.
3. How complete is it? Missing data is one of the most common and most overlooked problems. If a fifth of the records are missing a key field, any analysis of that field is built on incomplete information. Always ask what is missing and whether the missing data is random or systematic.
4. What is the sample size? A pattern in a dataset of ten records is not the same as a pattern in a dataset of ten thousand. Small samples produce unreliable patterns that disappear when more data is added. Be cautious about conclusions drawn from small numbers.
5. What does this data not capture? Every dataset has boundaries. It measures some things and not others. The most important factor in a situation may be something the data does not capture at all. Knowing what is outside the data is as important as understanding what is inside it.

#### The Foundation That Makes Everything Else Possible

None of what is in today's article is advanced. There are no statistics here that a Business Analyst cannot grasp in an afternoon. And yet these foundations are exactly what separates a BA who reads data with quiet confidence from one who feels a flicker of uncertainty every time the numbers appear. The types of data tell you what analysis is valid. The measures of central tendency and spread tell you how to summarise honestly. Understanding distributions tells you which measure to trust. And the questions you ask of a dataset before trusting it protect you from building on a foundation that cannot hold the weight of your conclusion. Master these, and the harder work of interpreting data honestly, which is where we go tomorrow, becomes possible.

***Go out and be successful.***

## Oluwatosin Ogunkoya | Flotog BA Insights | www.flotogbainsights.com

*Tomorrow: Interpreting Data Honestly. The traps that mislead, the techniques people use to make data say what they want, and how to be the person in the room who sees through them.*
