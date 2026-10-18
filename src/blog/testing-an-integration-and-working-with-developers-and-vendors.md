---
title: "Testing an Integration and Working With Developers and Vendors"
slug: testing-an-integration-and-working-with-developers-and-vendors
series: "API Literacy for Business Analysts: What You Need to Know to Specify, Read and Test an Integration, With No Code"
day: 5
dek: "Acceptance criteria that cover failure, sandbox testing, and the questions to put to a vendor"
description: "Integrations pass or fail on their failure scenarios. Acceptance criteria a BA can write, sandbox testing without code, and what to ask a vendor."
date: 2026-10-23T06:00:00.000Z
cover: "/images/blog/api-literacy-day-5-testing.jpg"
readingTime: 5
linkedinPost: |
  The vendor said the integration would take two weeks. Nobody asked what "done" meant.

  At the end of week two, payments flowed in the sandbox. By week six, the team had discovered what the sandbox did not test: a declined card, a late answer, a duplicate request, an expired credential.

  Integrations pass or fail on their failure scenarios, and those are exactly the scenarios people skip when testing. A business analyst can write them in plain language, run the first set in a sandbox, and give the developers a clear definition of done.

  Today I'm closing the week with acceptance criteria for an integration, how to test without being a developer, and the questions worth asking a vendor.

  Read the full article in this week's newsletter. Link in the comments.

  What is the first failure scenario you would test in your current integration?

  #BusinessAnalysis #API #AcceptanceCriteria #Testing #FlotogBAInsights
---
<img src="/images/blog/api-literacy-day-5-testing.jpg" alt="A wooden block bridge carrying a gold weight between two platforms, with a ticked checklist card beside it" width="1600" height="893" loading="lazy">

The vendor says the integration will take two weeks. The project manager writes it into the plan, and nobody asks what "done" means. At the end of week two, payments flow in the sandbox and everyone is pleased. By week six the team has found out what the sandbox did not test: a card that is declined, an answer that arrives late, a request sent twice, a credential that expires on a Sunday. Each of those was a requirement, none had a test, and the plan has quietly doubled. Most of this week has been about turning an integration into a set of decisions that can be written down. This last day is about proving them. An integration passes or fails on its failure scenarios, and those are exactly the cases that get skipped when a team is in a hurry. The business analyst does not need to run the build or write the code. The analyst needs to write down what done looks like, test the first scenarios personally, and keep the conversation with developers and vendors specific.

## Acceptance criteria that cover failure

Acceptance criteria for an integration read best as scenarios: a situation, an event, and an expected result that anyone on the project could check. The table below shows the short version for the payment example. The first row is the one every team writes. The rest are the ones that decide whether the integration survives contact with real tenants.

<p class="table-title"><strong>ACCEPTANCE SCENARIOS FOR THE PAYMENT INTEGRATION</strong></p>

<table>
<thead><tr><th>Scenario</th><th>Expected result</th><th>Done when</th></tr></thead>
<tbody><tr><td><strong>Payment succeeds</strong></td><td>Tenant sees confirmation. Payment posts to finance the same day.</td><td>Amounts and references match on both sides.</td></tr><tr><td><strong>Card is declined</strong></td><td>Tenant sees a clear message and can try another card. Nothing posts to finance.</td><td>No record in finance. Reason logged.</td></tr><tr><td><strong>Provider is slow</strong></td><td>Tenant sees a pending message. Final status is shown once confirmed.</td><td>No second charge. Status updates within the agreed time.</td></tr><tr><td><strong>Same payment sent twice</strong></td><td>Only one payment is taken.</td><td>Provider and finance both show one record.</td></tr><tr><td><strong>Credential expires</strong></td><td>Alert reaches the named owner. Tenants see a friendly message.</td><td>Alert received. Procedure followed. Service restored.</td></tr></tbody>
</table>

*Illustrative. Agreed times, wording and owners would be filled in with the business before testing starts.*

Notice that each row is written in outcomes the business cares about, not technical states. That makes it testable by someone who does not read the code, and it makes sign-off a conversation about customers, money and accountability. It is also how you keep a two-week estimate honest: ask the vendor and the developers to estimate against this table and not against the sentence "connect the portal to the provider." The numbers usually change.

Trace each scenario back to a requirement and forward to a test case, so that nothing is built without a reason and nothing is signed off without evidence. This does not need special tooling. A column in your requirements list that names the scenario covering it is enough. It also tells you quickly where coverage is thin: if three requirements point at the happy path and none at the declined card, you know where the next hour of work belongs.

## Testing in a sandbox without being a developer

Almost every serious provider offers a sandbox, a safe copy of the service where fake money and test cards cause no harm. Ask for access early, and use it yourself. A tool such as Postman lets you send a request and read the response without writing code, and the provider's documentation usually lists the special test card numbers or test values that trigger each outcome, including declines, timeouts and errors. Sending a few of those by hand teaches you more about the interface than a week of reading.

Test in three layers. First, test the provider's side on its own, to confirm that the interface behaves as the documentation says. Second, test your system against the sandbox, which is where the developers' work meets your acceptance scenarios. Third, test end to end with the finance system on the other side, using realistic data, including the awkward records that real life produces: a tenant with two accounts, an invoice already closed, an amount with odd rounding. Keep a short log of what was sent, what came back and what you expected, so that a failure is reproducible and not argued over.

Be clear about the limits of a sandbox. It is a close copy and never an exact one. Timing is usually faster, volumes are tiny, and some real-world failures cannot be triggered on demand. Plan a controlled first run in production with a small number of real transactions, a named person watching the monitoring, and a clear rollback. Go-live should be a measured step, with a result you can check against the table.

Agree who signs off, and on what. The business owner signs off the scenarios that touch tenants and money, finance signs off the reconciliation, and the technical lead signs off monitoring and the runbook. When sign-off is a single approval from one person on the strength of a demo, the failure scenarios are the part that tends to be skipped.

## Working with developers and vendors, and why this skill travels

With developers, the best habit is to bring specifics. Bring the mapping table, the failure scenarios and the open questions from the documentation, and ask them to challenge each one. Developers tend to respond well to an analyst who has read the interface and written down what the business needs, because it reduces guessing. Ask what they would be worried about, and write down what they say. It is often the best source of non-functional requirements you will get.

With vendors, a short list of questions goes a long way. How much notice do you give before changing or retiring a version? What is the support route and response time when something breaks? What are the limits on request volume, and what happens when we reach them? Where is our data stored, and who can see it? Is there a sandbox, and does it behave like production? What does an outage look like, and how will we hear about it? Ask for the answers in writing. A full vendor evaluation has its own week in this series, but these questions will already improve any integration conversation.

The wider benefit is career-shaped. Analysts who can read an interface, specify an integration and test it are scarce, and the skill carries into every direction a BA career can go. Technical analyst roles, product roles that live on partner connections and project roles that depend on delivery all reward it. You can start small this week. Pick one public API, read its documentation for ten minutes, send one read-only request, and write down three questions you would ask the vendor. That is enough to start thinking like the person every integration conversation needs.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>NEXT WEEK</em>

<em>Prompting for Business Analysts - How to write clearer instructions and get more useful answers, with worked examples from everyday BA tasks.</em>
