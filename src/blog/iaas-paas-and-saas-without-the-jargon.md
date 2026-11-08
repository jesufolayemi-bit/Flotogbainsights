---
title: "IaaS, PaaS and SaaS Without the Jargon"
slug: iaas-paas-and-saas-without-the-jargon
series: "Cloud and Infrastructure Basics: What a Business Analyst Needs to Know About Where Systems Run, and What to Ask About It"
day: 2
dek: "The three ways to rent technology, and who is responsible for what in each"
description: "IaaS, PaaS and SaaS as owning a house, renting a flat or staying in a hotel, and the responsibility questions a BA should put to every cloud vendor."
date: 2026-11-10T06:00:00.000Z
cover: "/images/blog/cloud-day-2-service-models.jpg"
readingTime: 6
linkedinPost: |
  Three vendors quoted for the same move to the cloud. The prices could not be compared, and nobody had said why.

  One was renting the clinic a server and leaving everything on it to the clinic. One was renting a platform and looking after the technical plumbing. One was selling a finished booking product that the clinic would simply use. They were three different jobs under one label.

  The labels are IaaS, PaaS and SaaS. The useful way to remember them: owning a house, renting an unfurnished flat, or staying in a hotel. The real question for an analyst is not the acronym. It is who patches it, who backs it up and who fixes it at 2am.

  This is day 2 of 5 on cloud basics for BAs. Day 1 covered what the cloud actually is and why a BA should care.

  Read the full article below. Link to my website/blog is in the comments.

  Which of the three does your organisation use most?

  #BusinessAnalysis #CloudComputing #SaaS #Requirements #FlotogBAInsights
tableImages:
  - "/images/blog/tables/iaas-paas-and-saas-without-the-jargon-table-1.png"
---
<img src="/images/blog/cloud-day-2-service-models.jpg" alt="Three buildings on a street at dusk: an empty shell with a key in the door, a furnished apartment with lights on, and a hotel with a lit reception desk" width="1600" height="893" loading="lazy">

Three vendors send quotes for the same project: moving the clinics' booking and records system to the cloud. The quotes differ by a wide margin, and the project sponsor asks the analyst which is the best value. She reads all three twice before realising the question cannot be answered. The vendors are not offering the same thing. One is renting the clinic a server. One is renting a platform to build on. One is selling a finished product. If you are joining us on day two, here is where we are. This week is five days of cloud and infrastructure basics for business analysts, following one analyst at a regional chain of 12 private clinics who has been asked to write requirements for moving the appointment booking and patient records system from a server at head office to the cloud. On day one we saw that the cloud means renting computing power, storage and software from a provider, and that moving a system shifts who is responsible for what, which is why the move is a requirements question and not only a technical one. Today we look at the three standard ways of renting technology, and how much of the job each leaves with the clinic.

## Three ways to rent technology

The easiest way to hold the three service models in your head is to think about housing. Owning a house means you are responsible for everything: the structure, the plumbing, the furniture and the locks. Renting an unfurnished flat means the landlord provides the building, and you bring everything inside it. Staying in a hotel means everything is provided and looked after, and you simply use the room. The more you hand over, the less control you have and the less you have to do.

Infrastructure as a Service, or IaaS, is the unfurnished flat. The provider supplies the basic building blocks: virtual servers, storage and networking. The clinic installs its own software on them, configures them, keeps them patched and looks after the data. Platform as a Service, or PaaS, is the furnished apartment. The provider also supplies the operating system, the database engine and the tools to run applications, so the clinic's team writes or deploys its own application and leaves the plumbing to the provider. Software as a Service, or SaaS, is the hotel. The provider delivers a complete application over the internet, and the clinic configures it and uses it. Email and office tools delivered over the web are familiar examples, and so is a ready-made appointment booking product.

<p class="table-title"><strong>THREE SERVICE MODELS FOR THE CLINIC'S BOOKING SYSTEM</strong></p>

<table>
<thead><tr><th>Model</th><th>The clinic manages</th><th>The provider manages</th><th>In the clinic's case</th></tr></thead>
<tbody><tr><td><strong>IaaS</strong></td><td>Operating system, software, data, access, patching and backups.</td><td>Physical hardware, data centre, network, virtualisation.</td><td>The clinic installs its existing booking software on rented servers.</td></tr><tr><td><strong>PaaS</strong></td><td>The application, its data and who may use it.</td><td>Operating system, database engine, runtime and scaling.</td><td>A custom booking application runs on a managed platform.</td></tr><tr><td><strong>SaaS</strong></td><td>Configuration, users, data entry and business rules.</td><td>Everything else, including the application itself.</td><td>The clinic subscribes to a finished booking and records product.</td></tr></tbody>
</table>

*Illustrative. Real services blur the lines, so always ask each vendor to state who does what.*

## Who patches it, who backs it up, who answers at 2am

The table is useful, but the questions behind it are the ones that matter in practice. Four are worth asking of every offer, in plain words. Who keeps the software up to date and fixes security flaws in it? Who takes backups of the data, how often, and who tests that they can be restored? Who watches the system and raises the alarm when something is wrong? And who picks up the phone when it fails outside office hours? In an IaaS arrangement, the answer to most of these is the clinic. In a SaaS arrangement, the answer is mostly the provider. In between, it depends on the detail, which is why the detail needs to be written down.

This is sometimes called the shared responsibility model, and the central idea is simple. The provider is responsible for the things it controls, such as the data centre and the underlying systems, and the customer is responsible for the things it controls, such as who has access and how the service is set up. Problems happen when each side assumes the other has a particular job. A clinic that assumes the provider takes care of backups, when the contract says the clinic does, will find out at the worst possible time. The analyst's role is to turn each assumption into a line in a responsibility table that both sides have signed.

A simple version of that table has three columns: the task, who does it, and how the clinic will know it has been done. Tasks might include applying security updates, taking and testing backups, monitoring the service, responding to an outage at night, adding users, and reporting on performance. The third column is the one that changes behaviour. "The provider patches the system" is an assumption. "The provider patches the system within a week of a critical fix and sends a monthly report listing what was applied" is something that can be checked, challenged and, if it fails, enforced.

## Why the quotes could not be compared

Back to the three quotes. The IaaS offer looks cheapest, because it covers only the rented servers. But the clinic would still need people and time to install, patch, back up and watch everything on top of them, and the quote leaves all of that out. The PaaS offer costs more because it includes more of the work, but it assumes the clinic has or buys an application that runs on the platform. The SaaS offer costs the most per month and removes the most work, but it gives the least control: the clinic gets the product as designed, with whatever configuration the vendor allows.

Real offers are rarely this tidy. Many organisations end up with a mixture, using finished products for email and office tools, a platform for one or two custom applications, and rented servers for an older system that cannot easily be changed. That is normal, and it means the analyst should expect to ask the responsibility questions more than once, for each part. It also means that the word "cloud" in a proposal tells you very little by itself. Always ask for the model in use, and ask the vendor to point to the line in the contract where each responsibility is written down.

So the sponsor's question has a better version: how much of the work does the clinic want to keep, how much does it want to hand over, and what is each quote really covering? Rewriting all three quotes into the same table of responsibilities, and adding what the clinic would have to provide itself, makes them comparable at last. A detailed vendor evaluation is a topic for later in this series, but the habit of asking who does what is worth building now. Tomorrow turns to a question the business always cares about and rarely defines: how available the system must be, and what happens when it is not.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>What "Always On" Really Means - Uptime percentages in hours, recovery time, and how much data you can afford to lose.</em>
