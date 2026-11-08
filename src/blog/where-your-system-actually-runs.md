---
title: "Where Your System Actually Runs"
slug: where-your-system-actually-runs
series: "Cloud and Infrastructure Basics: What a Business Analyst Needs to Know About Where Systems Run, and What to Ask About It"
day: 1
dek: "What the cloud really is, what changes when a system moves, and why a BA should care"
description: "A clinic booking system ran on one server in a cupboard until it overheated. What the cloud is, what changes when a system moves, and why BAs should care."
date: 2026-11-09T06:00:00.000Z
cover: "/images/blog/cloud-day-1-where-it-runs.jpg"
readingTime: 6
linkedinPost: |
  The booking system for 12 clinics ran on a server under a desk at head office. The day it overheated, nobody could book an appointment until Wednesday.

  Nobody had ever asked how long the clinics could manage without it. Nobody had written down what "back up and running" meant. The system had been installed years before any requirement mentioned availability.

  "Moving to the cloud" sounds like a technical decision. For a business analyst it is a requirements decision, because where a system runs shapes how reliable it is, who looks after it, what it costs and where the data sits.

  This week is five days of cloud and infrastructure basics for BAs, with no engineering degree required.

  Read the full article below. Link to my website/blog is in the comments.

  Do you know where your most important system actually runs?

  #BusinessAnalysis #CloudComputing #Infrastructure #Requirements #FlotogBAInsights
tableImages:
  - "/images/blog/tables/where-your-system-actually-runs-table-1.png"
---
<img src="/images/blog/cloud-day-1-where-it-runs.jpg" alt="Split image: a lone server tower in a cramped back office beside folders and a fan, and a long aisle of server racks in a bright data hall" width="1600" height="873" loading="lazy">

The appointment system for a chain of 12 clinics runs on a single server in a cupboard at head office. One hot afternoon the cupboard door has been propped shut, the server overheats and switches itself off, and no clinic can book or look up an appointment until the part arrives on Wednesday. Nobody has done anything wrong. The server had run for years, and in all that time no requirement had ever asked how long the business could manage without it. That gap is where infrastructure becomes a business analyst's concern. Infrastructure sounds like the territory of engineers: servers, networks, data centres. But every decision about where a system runs is also a decision about reliability, cost, security, speed and who looks after it, and those are things the business cares about and often forgets to specify. This week follows one analyst at a regional chain of private clinics who has been asked to write the requirements for moving the appointment booking and patient records system to the cloud. The scenario and its figures are illustrative, built to teach, but the questions in it come up on almost every migration.

## What "the cloud" actually means

The cloud is not a place in the sky, and it is not a single product. It is computing power, storage and software rented from a provider that runs very large data centres, and paid for as it is used, instead of being bought and kept on your own premises. When the clinic's system moves to the cloud, it does not stop being a collection of programs on computers. The computers are simply someone else's, in a building the clinic never visits, run by people it never meets, and shared, in a carefully separated way, with many other customers.

Before the move, the clinic owns the server, keeps it in its own office, pays for it up front and depends on its own staff to maintain it. After the move, it rents capacity, pays monthly according to what it uses, and depends partly on the provider's staff and partly on its own. That sounds like a tidy swap, but the shift moves responsibilities around in ways that are easy to miss. The table below sets the main differences side by side for the clinic.

<p class="table-title"><strong>THE CLINIC'S BOOKING SYSTEM, AT HEAD OFFICE AND IN THE CLOUD</strong></p>

<table>
<thead><tr><th></th><th>Server at head office</th><th>In the cloud</th></tr></thead>
<tbody><tr><td><strong>Who owns the hardware</strong></td><td>The clinic.</td><td>The provider.</td></tr><tr><td><strong>Adding capacity</strong></td><td>Buy and install a server. Takes weeks.</td><td>Change a setting. Takes minutes.</td></tr><tr><td><strong>How it is paid for</strong></td><td>Large payment up front, then maintenance.</td><td>Monthly, according to use.</td></tr><tr><td><strong>Who looks after it</strong></td><td>The clinic's own small IT team.</td><td>Shared between the provider and the clinic.</td></tr><tr><td><strong>Where the data sits</strong></td><td>In the cupboard at head office.</td><td>In a data centre the clinic chooses, or is assigned.</td></tr></tbody>
</table>

*Illustrative. Real arrangements vary by provider and by the type of service bought.*

## What changes, and what does not

Several things genuinely improve. Capacity can grow or shrink with demand, so a busy month does not mean a hardware purchase. The provider's data centres usually have better power, cooling, physical protection and redundancy than a cupboard can offer. Spreading cost over time can ease a budget. And some tasks, such as keeping the underlying machines patched, move off the clinic's small team.

But several things do not change, and some become more important. The business is still responsible for what its system does, how it is configured, who may use it and what happens to its data. A provider can run an excellent data centre and the clinic can still be exposed by a badly chosen setting or a missing requirement. New dependencies appear as well: the internet connection at each clinic becomes part of the system's reliability, and so does the provider's own availability. A system that used to fail in one cupboard can now fail in ways that nobody at the clinic can see or fix.

A handful of words come up in almost every cloud conversation, and it helps to be comfortable with them. A data centre is a building full of servers, with its own power, cooling and security. A region is a group of data centres in one geographic area, and a provider offers several. A virtual server is a slice of a physical machine, set up to behave like a computer of its own, and it can be created or removed in minutes. The provider is the company that runs all of this. None of these terms is difficult, and using them correctly in a meeting signals that you can be trusted with the questions that follow.

These are the matters an analyst can bring clarity to. A decision to move to the cloud is often taken by technical or financial leaders before any requirements exist, with the reasoning that it is cheaper, modern or expected. Your contribution is to turn that decision into questions the business can answer: how long can we be down, how much data can we lose, where may the data live, who must be able to see it, and what will it cost when we use more of it? Each of those is the subject of a day this week.

It also helps to know who to talk to. The clinic's IT lead knows how the current system is looked after and what has gone wrong before. Reception and clinic managers know what a bad day looks like and how they cope. Finance knows what the current arrangement costs, including the hidden items such as staff time. The vendor's technical contact knows what the new arrangement can actually deliver. An analyst who brings these four people into the same conversation early usually finds that the requirements nearly write themselves, because each group holds one half of an answer that the others need.

## Why this belongs on the analyst's desk

Requirements that describe what a system should do are called functional. Requirements that describe how well it must do it, such as how fast, how available, how secure and how recoverable, are called non-functional, and they are where infrastructure decisions live. They are also the requirements most often left unwritten, because stakeholders rarely volunteer them. People ask for a booking screen. They do not ask for the booking screen to still work on a Monday morning after a provider outage, until the first Monday it does not.

Writing them down early is cheaper than almost anything else in a migration project. A single sentence such as "the booking system must be available during clinic opening hours, and if it fails, bookings must be restored within one hour without losing any appointment made in the last five minutes" shapes the design, the price and the choice of provider. Tomorrow starts with the first thing every cloud conversation turns on: the three service models, and which parts of the job the clinic keeps and which it hands over.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>IaaS, PaaS and SaaS Without the Jargon - The three ways to rent technology, and who is responsible for what in each.</em>
