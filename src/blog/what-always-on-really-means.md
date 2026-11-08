---
title: "What \"Always On\" Really Means"
slug: what-always-on-really-means
series: "Cloud and Infrastructure Basics: What a Business Analyst Needs to Know About Where Systems Run, and What to Ask About It"
day: 3
dek: "Uptime in hours, recovery time, and how much data you can afford to lose"
description: "99.9% uptime still allows nearly nine hours of downtime a year. How a BA turns availability into hours, recovery time and recovery point."
date: 2026-11-11T06:00:00.000Z
cover: "/images/blog/cloud-day-3-always-on.jpg"
readingTime: 6
linkedinPost: |
  99.9% uptime sounds almost perfect. It allows nearly nine hours of downtime a year, and the clinics' busiest morning could be one of them.

  Availability promises are written in percentages, and percentages hide the hours. A system that is 99% available can be down for more than three days a year. The vendor can meet that promise while a business loses a week of bookings.

  The better question for an analyst to ask the business is plain: how long can we be down, and how much data can we afford to lose? Those two answers, recovery time and recovery point, drive the design and the price.

  This is day 3 of 5 on cloud basics for BAs. So far: where systems run, and the three service models.

  Read the full article below. Link to my website/blog is in the comments.

  Has anyone ever asked your team how long it could be down?

  #BusinessAnalysis #CloudComputing #Availability #Requirements #FlotogBAInsights
tableImages:
  - "/images/blog/tables/what-always-on-really-means-table-1.png"
---
<img src="/images/blog/cloud-day-3-always-on.jpg" alt="A large wall clock with a gold band on its dial, beside an hourglass and a desk calendar, with an exit sign glowing in the dark behind" width="1600" height="873" loading="lazy">

The vendor's proposal promises 99.9% availability, and the clinic's operations director nods. It sounds almost perfect. The analyst asks one question: how many hours of downtime is that, and which hours? The vendor's answer, a little under nine hours a year, is fine on paper. If those nine hours fall on a Monday morning when every clinic is taking its week's bookings, the director will not think it is fine at all. If you are joining us on day three, here is where we are. This week is five days of cloud and infrastructure basics for business analysts, following one analyst at a regional chain of 12 private clinics who is writing requirements for moving the appointment booking and patient records system from a server at head office to the cloud. Day one covered what the cloud actually is and why moving a system is a requirements question. Day two covered the three ways of renting technology, infrastructure, platform and software as a service, and the shared responsibility for patching, backups and out-of-hours support. Today we deal with how available the system must be, and what happens when it is not.

## Percentages hide the hours

Availability is the share of time a system is working when it should be. Vendors state it as a percentage, and the numbers sound similar: 99%, 99.9%, 99.99%. They are not similar at all, because each extra nine cuts the allowed downtime by a factor of ten. Translating the percentages into time is one of the most useful things an analyst can do, because it lets the business judge what it is actually being offered. The table below does the arithmetic for a year.

<p class="table-title"><strong>WHAT EACH AVAILABILITY LEVEL ALLOWS, OVER A YEAR</strong></p>

<table>
<thead><tr><th>Availability</th><th>Downtime allowed per year</th><th>What that feels like for the clinics</th></tr></thead>
<tbody><tr><td><strong>99%</strong></td><td>About 3.7 days</td><td>A bad week, possibly a lost week of bookings.</td></tr><tr><td><strong>99.9%</strong></td><td>About 8.8 hours</td><td>One long outage, or several shorter ones.</td></tr><tr><td><strong>99.99%</strong></td><td>About 53 minutes</td><td>A brief interruption a few times a year.</td></tr><tr><td><strong>99.999%</strong></td><td>About 5 minutes</td><td>Almost never noticed. Costs far more.</td></tr></tbody>
</table>

*Illustrative arithmetic. A year is taken as 365 days. Higher levels cost more, and the right level depends on what an outage costs the business.*

Two more points matter before anyone accepts a number. First, the figure usually covers the provider's own infrastructure, not everything the clinic depends on. A fault in the clinic's internet connection, in a configuration mistake or in the application itself may not count towards it. Second, the usual remedy for missing an availability promise is a service credit, a small refund on the next bill, and not compensation for the business lost during the outage. The promise is worth reading, but it is not insurance.

Look also at what the figure excludes. Most availability promises leave out planned maintenance, which may be scheduled at times that suit the provider and not the clinics. Some count only complete outages, so a system that responds so slowly that reception cannot use it may still be recorded as available. Others measure over a month or a quarter, which can hide a bad week inside a good average. Ask the vendor how availability is measured, over what period, what is excluded, and who decides whether the promise has been missed. The answers can matter as much as the number.

## How long can we be down, and how much can we lose?

The more useful question for the business is not a percentage. It is: if the system fails during a normal working day, how long can the clinics manage without it, and how much recent data can they afford to lose? These two questions have names. The first is the recovery time objective, how quickly the service must be back. The second is the recovery point objective, how far back in time the restored data may be, measured as the amount of work the business can bear to re-enter or lose.

Ask them in plain words, clinic by clinic if necessary. "If the booking system stopped at nine on a Monday, how long could reception work from paper before it became a real problem?" The answer might be an hour. "If we restored it to how it was twenty minutes ago, what would be lost?" The answer might be up to three bookings, which can be re-taken by phone. Written as requirements, those answers become a recovery time of one hour and a recovery point of twenty minutes, and they will drive the design. A recovery point of twenty minutes means data copied across at least that often. A recovery time of one hour means a standby arrangement ready to take over, which is a different price from a restore taking a day.

Availability matters most when the business is actually using the system, and that is worth capturing. The clinics are open on set days and hours, so a failure at three in the morning on a Sunday costs far less than one at nine on a Monday. A requirement that states the hours the system must be available, and how important each period is, lets the technical team put its effort and money where it counts. It also lets the sponsor see that "always on" is not one requirement but several, with different prices, and that agreeing the difference up front prevents an expensive promise being made for hours nobody needs.

## Backups, resilience and the cost of each

Two different protections get confused. A backup is a copy of data kept so it can be restored after something goes wrong, whether a failure, a mistake or an attack. Resilience, sometimes called high availability, is a design in which the system keeps running when a part fails, usually because there are duplicates of the important components in separate locations. Backups protect the data. Resilience protects the service. A clinic that has excellent backups and no resilience will lose no data in a failure but may still be offline for a day while it restores, and one with resilience and poor backups can stay up while quietly copying a corrupted record across everything.

One more habit separates a plan from a hope: test it. A backup that has never been restored is an assumption, and a failover that has never been triggered may not work. Ask for a recovery test at least once before go-live and a regular test afterwards, with the result reported to the business. The first test usually finds something, such as a missing step, an out-of-date contact number or a restore that takes three times longer than the plan assumed. Finding that out on a quiet afternoon is a good use of a day. Finding it out in the middle of a real outage, with twelve clinics waiting, is not.

Cloud providers usually offer both, in several grades, and each grade has a price. That is why the numbers should come from the business and not from the vendor's brochure. A requirement written as "restore within one hour with no more than twenty minutes of data lost, during clinic opening hours" lets a technical team design to a target and lets the sponsor see what each choice costs. It also quietly raises a question that deserves a conversation: is that level of protection worth what it costs for every part of the system, or only for bookings? Tomorrow turns to where the data lives, who may see it, and what happens when the relationship with the vendor ends.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Where the Data Lives and Who Can See It - Data location, regulations in outline, and how to get your data back when the contract ends.</em>
