---
title: "What an API Actually Is, and Why You Get Pulled Into Them"
slug: what-an-api-actually-is-and-why-you-get-pulled-into-them
series: "API Literacy for Business Analysts: What You Need to Know to Specify, Read and Test an Integration, With No Code"
day: 1
dek: "The contract between two systems, and why the questions that matter most are business questions"
description: "An API is the agreement between two systems about what one may ask and what the other says back. Why its hardest questions land on the BA's desk."
date: 2026-10-19T06:00:00.000Z
cover: "/images/blog/api-literacy-day-1-what-an-api-is.jpg"
readingTime: 5
linkedinPost: |
  In a stand-up, a developer asked one question: "What should happen if the payment provider doesn't answer?"

  The room went quiet. The requirement on the board read: "Connect the tenant portal to the payment provider." Eight words, and not one of them answered him.

  That quiet is where most integration problems begin. An API is simply the agreement between two systems about what one may ask and what the other will say back. The code is the easy part. The agreement is full of business decisions, and those belong to the analyst.

  This week is five days on APIs for BAs, with no code: what they are, how to read the documentation, how to write the requirements, what breaks, and how to test.

  Read the full article in this week's newsletter. Link in the comments.

  What is the last integration you were handed with a one-line requirement?

  #BusinessAnalysis #API #SystemsIntegration #Requirements #FlotogBAInsights
---
<img src="/images/blog/api-literacy-day-1-what-an-api-is.jpg" alt="A restaurant pass between a dining room and a kitchen, with an order slip on the rail and a plated dish under a heat lamp" width="1600" height="893" loading="lazy">

A developer asks one question in a stand-up meeting: what should happen if the payment provider does not answer? The room goes quiet. The product owner looks at the analyst. The analyst looks at the requirement on the board, which reads "Connect the tenant portal to the payment provider." It has eight words, and none of them answers the question. That moment is common enough that it deserves a name, and the name is an integration gap. The work looked finished at the requirements stage because the sentence sounded complete. It was only a direction. Everything that makes an integration succeed or fail sits in the detail underneath it, and a great deal of that detail is business detail: what happens to the tenant, to the money and to the ledger when two systems disagree. This week covers how to see that detail, ask about it and write it down, using one running example: a property management team connecting its tenant portal to a payment provider so tenants can pay service charges and fit-out deposits online. The scenario is illustrative, but the situations in it are ones analysts meet repeatedly.

## An agreement between two systems

API stands for application programming interface, and the useful way to think about it is as a contract. Picture a restaurant. The diners sit on one side of the pass and the kitchen works on the other. The diner never walks into the kitchen to ask how the sauce is made. They hand over an order in a standard format, and they get back a dish, or a polite message that the kitchen has run out. The menu defines what can be ordered, the order slip defines how to ask, and the kitchen's internal workings stay private. An API is the menu, the slip and the pass between two software systems.

Technically, one system sends a request and the other sends a response. The request says what is wanted: show me this tenant's balance, create a payment for this invoice, cancel that booking. The response says what happened: here is the data, the payment was created, or the request was refused and here is the reason. Either side can be written in any language and run on any platform, because both only need to follow the agreed format. That is why an API lets a tenant portal built last year talk to a payment provider built a decade ago by a company in another country.

Once you look for them, they are everywhere. A map embedded in a property listing page, a card payment taking a few seconds, a text message confirming an appointment, a login that says "sign in with your work account", a dashboard that refreshes from three different systems: each is one system calling another through an API. Most modern ones are built in a style called REST and exchange data in a readable text format called JSON, and a business analyst can learn to read both in an afternoon. A few older ones use a different standard called SOAP, which you will meet in banks and government systems, but the thinking is the same.

## Why the questions land on the analyst's desk

A developer can read an API specification and build exactly what it describes. What the developer cannot do is decide what the business wants when the specification runs out, and it runs out quickly. Consider the questions the stand-up question opened up. If the provider does not answer within a few seconds, does the tenant see an error, a pending message, or a second attempt that might charge them twice? If a payment succeeds at the provider but the finance system is unavailable, who reconciles it and by when? Which system is the source of truth for the balance? What does the tenant see if their card is declined, and does the building manager see it too?

Every one of those is a requirement, and none of them is technical in nature. They concern money, customer experience, accountability and risk, which is the ground business analysis was invented to cover. When the analyst does not ask them, they do not disappear. The developer answers them alone, in code, at the moment the problem appears, using their best guess about what the business would want. Sometimes the guess is fine. Sometimes it ends up in a support ticket, an angry tenant and a finance reconciliation that takes an afternoon.

There is a second reason the analyst gets pulled in, and it is less about requirements and more about translation. Integration projects usually involve at least three groups who do not share a vocabulary: the business users who need the outcome, the developers who build it, and the vendor whose system is on the other side. The vendor's documentation is written for developers. The business needs it explained in terms of consequences. The analyst who can read both and explain each to the other becomes the person every integration conversation runs through, which is a good place to stand.

## What you need to learn, and what you can leave alone

None of this requires you to write code. The working knowledge a business analyst needs fits in a short list: what a request and a response contain, how to read an endpoint and a method, how authentication works in outline, what the common error responses mean, and what questions to ask about volume, timing, failure and ownership. That is a few hours of reading, followed by a few more hours of practice in a testing tool such as Postman, where you can send a harmless read-only request and watch the answer come back. The rest of this week takes those pieces in order.

You also do not need to know how the provider builds its system, how its servers are arranged, or what database sits behind it. That privacy is the whole point of an API, and respecting it keeps your questions at the right level. Ask what the interface promises, what it does when something goes wrong, and what you can rely on. Questions about internals are for the vendor's engineers, and they rarely change what you need to specify.

Here is the plan for the rest of the week. Tomorrow covers reading API documentation in ten minutes without being a developer. Wednesday turns to writing requirements for an integration, built around a mapping table. Thursday looks at what breaks: error codes, timeouts, duplicate payments and unannounced changes. Friday closes with testing, acceptance criteria and working with developers and vendors. By the end, the stand-up question should have a written answer long before anyone has to ask it.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Reading API Documentation Without Being a Developer - The five things to find in ten minutes, and the one table that shows what a single call looks like.</em>
