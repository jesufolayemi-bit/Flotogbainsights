---
title: "When the Integration Breaks"
slug: when-the-integration-breaks
series: "API Literacy for Business Analysts: What You Need to Know to Specify, Read and Test an Integration, With No Code"
day: 4
dek: "Error codes, timeouts, duplicate payments and the changes nobody announces"
description: "A tenant paid the same invoice twice, 11 seconds apart. Error codes in plain English, timeouts, duplicates and the four failure questions to ask."
date: 2026-10-22T06:00:00.000Z
cover: "/images/blog/api-literacy-day-4-when-it-breaks.jpg"
readingTime: 6
linkedinPost: |
  A tenant paid the same invoice twice, 11 seconds apart.

  The code did exactly what it was written to do. The provider was slow to answer, the portal assumed the first attempt had failed, and it tried again. Nobody had specified what should happen when the answer is late.

  Failure is where integrations are really defined. The success path fits in one paragraph. Timeouts, repeated requests, expired credentials and unannounced changes each need a business decision, and each one is cheaper to make on a whiteboard than in a support queue.

  Today's article covers error codes in plain English and the four failure questions to ask of every integration.

  Read the full article in this week's newsletter. Link in the comments.

  What is the most expensive failure an integration has ever caused on your project?

  #BusinessAnalysis #API #RiskManagement #Integration #FlotogBAInsights
tableImages:
  - "/images/blog/tables/when-the-integration-breaks-table-1.png"
---
<img src="/images/blog/api-literacy-day-4-when-it-breaks.jpg" alt="A line of identical tickets on a rail with two duplicates flagged in gold and a stopwatch beside it" width="1600" height="893" loading="lazy">

A tenant pays a service charge invoice through the portal. The portal sends the payment to the provider and waits. The provider is slow that afternoon, and the portal gives up after ten seconds and sends the request again. Eleven seconds after the first attempt, the second one succeeds. The first one also succeeds, a moment later. The tenant is charged twice, finance has two payments against one invoice, and a support agent spends the rest of the day on a refund. The code was correct. What was missing was a decision about what the business wants when an answer arrives late. The success path of an integration fits in a paragraph, and it is rarely where the trouble is. Systems that talk to each other across a network will, sooner or later, not hear back, hear something unexpected, or be told no. How the integration behaves in those moments is part of the product, and it is a set of business choices that the analyst is better placed to make than the developer. This article covers the vocabulary of failure and four questions that turn it into requirements.

## Status codes are a vocabulary for failure

Every response from an API starts with a three-digit code that says, in outline, what happened. The first digit tells you most of what you need. Codes starting with 2 mean it worked. Codes starting with 4 mean the request was wrong in some way, and sending it again unchanged will not help. Codes starting with 5 mean the provider failed, and trying again later might. You do not need to memorise the full list. You need to know the handful that appear in almost every project, and what each one means for the business.

<p class="table-title"><strong>THE CODES ANALYSTS MEET MOST OFTEN</strong></p>

<table>
<thead><tr><th>Code</th><th>Plain meaning</th><th>Business question to answer</th></tr></thead>
<tbody><tr><td><strong>200 or 201</strong></td><td>It worked.</td><td>What does the user see, and what is recorded?</td></tr><tr><td><strong>400 or 422</strong></td><td>We sent something wrong, such as a missing or badly formatted field.</td><td>Who is told, and how does the record get fixed?</td></tr><tr><td><strong>401 or 403</strong></td><td>We are not allowed, often an expired or wrong credential.</td><td>Who owns the credentials, and who is alerted when they lapse?</td></tr><tr><td><strong>409</strong></td><td>Conflict, often a duplicate.</td><td>Is a duplicate ignored, merged or reported?</td></tr><tr><td><strong>429</strong></td><td>Too many requests in a short time.</td><td>What slows down, and does the user wait or retry?</td></tr><tr><td><strong>500 or 503</strong></td><td>The provider failed or is unavailable.</td><td>How long do we try again, and what does the user see meanwhile?</td></tr></tbody>
</table>

*A simplified guide. Each provider documents its own codes, so always check the error section of the real documentation.*

The right-hand column is the useful one. A code is a technical fact, and the question beside it is the requirement. Writing one line per code against your own process gives the developer something to build and the tester something to check, and it turns a section of the documentation that most people skip into a short list of agreed behaviours. A missing answer in that column is a risk you can now name and put in front of a decision-maker.

Most providers also return a short message and a machine-readable reason alongside the code, such as a card declined for insufficient funds or an expired card. Those details matter, because a tenant should be told different things in each case, and the tenant should never be shown a raw technical message. Decide which reasons the business wants to explain in its own words, which should be logged quietly, and which should alert a person.

## Timeouts, retries and the double payment

The double payment in the opening is the classic integration failure, and it comes from a particular situation: the request went through, but the caller did not hear back in time, so it assumed the request had failed. A timeout does not mean the request failed. It means the caller stopped waiting. Whether the money moved is a separate fact that the caller cannot see until it asks again in the right way.

Two ideas fix most of it, and both can be requested in plain language. The first is an idempotency key, a unique reference sent with each request so that the provider can recognise a repeat. If the same key arrives twice, the provider performs the action once and returns the original result the second time. Many payment providers support this, and the requirement is simply that every payment request carries one and that retries reuse it. The second is a sensible retry policy: how many times to try again, how long to wait between attempts, and when to stop and hand the problem to a person. Retrying instantly, again and again, can make a struggling provider worse and can trigger its limits on request volume.

Then comes the decision only the business can make: what the tenant sees while all this happens. A clear pending message that says the payment is being confirmed and will appear shortly is a better answer than a spinning wheel or a red error. Specify the wording, specify when the tenant is told to check back, and specify the reconciliation job that compares the two systems at the end of each day and flags any mismatch. That job is the safety net for every failure you did not think of.

## The changes nobody announces

Some of the most disruptive problems arrive without any bug. Credentials expire. Providers retire an old version of an API and give a notice period that nobody on your team read. A usage limit tightens when your tenant base grows. The provider has an outage, and your portal has to behave sensibly for the length of it. None of these are defects in your code, and all of them can stop the business.

The analyst's answer is to ask four questions of every integration, early. What happens when the provider is slow? What happens when it is down for an hour, and for a day? What happens when something we sent is rejected? And who finds out, and how quickly, when the connection stops working? The fourth is the one most often left unspecified. An integration that fails silently is worse than one that fails loudly, because the first can run wrong for weeks before anyone looks. Ask for monitoring in plain terms: a daily count of records sent and received, an alert when the error rate rises, a named person who gets the alert, and a short written procedure for what they do next.

A runbook does not need to be long. One page is enough: how to tell the integration is down, who to contact at the vendor, how to switch the portal to a manual fallback such as taking payments by bank transfer for a day, and how to reconcile afterwards. Agree it before go-live, because nobody writes a good one in the middle of an incident. Add the calendar items too. Ask the vendor how much notice it gives before changing or retiring a version, and put the credential expiry date and the version retirement date on someone's calendar. They are small entries, and they are the difference between a planned change and a weekend outage. Tomorrow we turn all of this into tests and acceptance criteria.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Testing an Integration and Working With Developers and Vendors - How to prove an integration works before go-live, and the questions to put to a vendor.</em>
