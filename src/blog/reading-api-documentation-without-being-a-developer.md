---
title: "Reading API Documentation Without Being a Developer"
slug: reading-api-documentation-without-being-a-developer
series: "API Literacy for Business Analysts: What You Need to Know to Specify, Read and Test an Integration, With No Code"
day: 2
dek: "The five things to find in ten minutes, and what a single call is made of"
description: "API documentation looks like a developer's job. How a BA finds the five things that matter in ten minutes, and reads a single call without code."
date: 2026-10-20T06:00:00.000Z
cover: "/images/blog/api-literacy-day-2-reading-docs.jpg"
readingTime: 6
linkedinPost: |
  The payment provider's API documentation runs to 140 pages.

  You do not need to read 140 pages. You need ten minutes and five questions, and by the end of them you will know whether the integration is feasible, what it will cost in effort, and what to ask the vendor before anyone writes a line of code.

  Most analysts skip the documentation because it looks like a developer's job. The ones who read it spot the missing field, the authentication surprise or the usage limit weeks before the project does.

  Today I'm walking through the anatomy of a single API call and the five things to find on any vendor's documentation site.

  Read the full article in this week's newsletter. Link in the comments.

  When did you last read a vendor's API documentation before the kick-off meeting?

  #BusinessAnalysis #API #Integration #TechnicalSkills #FlotogBAInsights
---
<img src="/images/blog/api-literacy-day-2-reading-docs.jpg" alt="An analyst reading a long documentation page on a laptop, with sections marked by teal tabs and one block boxed in gold" width="1600" height="893" loading="lazy">

The payment provider's API documentation runs to 140 pages, and the analyst on the project has opened it twice. Both times the first screen of endpoints and parameter tables sent her back to her own work. Three weeks later, a developer discovers that the provider only accepts payment amounts as whole numbers of the smallest currency unit, so AED 450.00 must be sent as 45000. Nothing in the requirements had said so. It was on page nine. Documentation like that is written for developers, and its first impression is intimidating. But the structure is much more regular than it looks, and a business analyst can extract what matters in ten minutes if they know what to look for. The aim is not to understand every parameter. It is to read enough to ask good questions and to catch the kinds of surprises that otherwise arrive in the middle of a build.

## The anatomy of one call

Every API call, however complicated the system behind it, is made of the same few parts. Once you can find them, any documentation page becomes readable. The table below takes one call from the running example, creating a payment for an invoice, and labels each part.

<p class="table-title"><strong>ONE CALL, TAKEN APART: CREATING A PAYMENT</strong></p>

<table>
<thead><tr><th>Part</th><th>Example</th><th>What it tells you</th></tr></thead>
<tbody><tr><td><strong>Method</strong></td><td>POST</td><td>The action. GET reads, POST creates, PUT or PATCH changes, DELETE removes.</td></tr><tr><td><strong>Endpoint</strong></td><td>/v2/payments</td><td>The address of the thing being acted on. The v2 is the version.</td></tr><tr><td><strong>Authentication</strong></td><td>Bearer token in a header</td><td>Proof of who is calling. Without it, the call is refused.</td></tr><tr><td><strong>Request body</strong></td><td>invoice_ref, amount, currency</td><td>The information you send. Some fields are required, some optional.</td></tr><tr><td><strong>Response</strong></td><td>201 Created, with payment_id and status</td><td>What comes back, including a code that says whether it worked.</td></tr></tbody>
</table>

*Illustrative example based on the running payment-provider scenario.*

Read the table left to right and you have the shape of every call you will meet. The method is the verb, the endpoint is the noun, the authentication is the badge, the request body is the order slip, and the response is what the kitchen sends back. Documentation pages typically present exactly this, one block per endpoint, with an example request and an example response beside the description. The examples are worth more than the prose. Read them first, because a real sample of what is sent and received answers questions that a paragraph of explanation leaves open.

The request body deserves a second look, because it is where business meaning lives. Each field has a name, a type and a rule: required or optional, a format, sometimes a length or a list of allowed values. Currency must be a three-letter code. Dates must follow a stated format. An amount may be in whole currency units or in the smallest unit. A required field the business does not currently capture is a gap you have just found for free.

## Five things to find in ten minutes

Start with authentication, because it decides how the connection is set up and who has to be involved. Common patterns are a secret key in a header, or a token obtained through a login-style exchange known as OAuth. Ask who will hold the credentials, how they are stored, and what happens when they expire. A credential that quietly lapses after twelve months has caused more than one weekend outage.

Next, find the endpoints that cover your use case and ignore the rest. A provider may offer dozens of endpoints for refunds, subscriptions, disputes and reports, and your project may need three of them. List those three, and note which are missing. If the business expects to refund a deposit through the same system and no refund endpoint exists, you have learned something important before the contract is signed.

Third, read the fields and formats for those endpoints, as above. Fourth, read the error section, which most analysts skip and most projects regret skipping. It lists what the provider sends back when a request goes wrong, and each error is a scenario the business has to decide how to handle. Thursday covers this in detail.

Fifth, look for limits and environments. Limits include how many calls the provider allows in a given period, how large a request can be, and sometimes a charge per call. Environments are the separate sandbox and production versions of the service, where the sandbox lets the team test with fake money and fake cards. Confirm that a sandbox exists, that it behaves like production, and who owns the access. If you have a tool such as Postman and a sandbox key, send one read-only request to see a real response. It takes five minutes and removes a lot of abstraction.

Two small extras are worth the time. Check the changelog or release notes, which show how often the provider changes things and whether past changes have broken customers. And check how list requests behave. When a request returns many records, most interfaces hand them back a page at a time, so a report of every payment in a month may take many calls and not one. That affects both the effort estimate and the usage limits, and it is an easy detail to miss in a requirement that says "show the tenant their payment history."

## Reading the response as a business analyst

The response is where the analyst has the most to add. A response comes back as a list of named fields, and each one maps to a business concept. The status field is the most important. If the provider can return pending, succeeded, failed and refunded, then the integration has four payment states, and your own process has to know what to do in each. Draw them. A status the business has never heard of, such as requires_action or disputed, is a requirement gap with a name on it.

Look also at the fields that can be empty. Where the documentation says a field may be null, ask what the receiving system should do when it is. Look at identifiers, because the provider's payment ID and your system's invoice reference are two different keys, and linking them reliably is the heart of reconciliation. And look at timestamps, which are often in UTC while the finance team works in Gulf Standard Time, a difference that has moved month-end payments into the wrong month.

Keep a short glossary as you read, because vocabulary differs between systems. The provider's "customer" may be your "tenant", its "charge" may be your "payment", and its "settled" may mean something quite different from your finance team's "posted". Two systems using the same word for different things is one of the commonest reasons an integration passes its tests and still produces numbers nobody trusts. Finish by writing down the open questions, not the answers. A page of precise questions for the vendor and the developer, each tied to a line in the documentation, is a more useful deliverable than a summary. Tomorrow we turn the answers into requirements.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Writing Requirements for an Integration - Why "sync the payments to finance" is seven words and nine open questions, and the mapping table that answers them.</em>
