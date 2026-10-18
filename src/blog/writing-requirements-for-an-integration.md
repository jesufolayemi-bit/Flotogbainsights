---
title: "Writing Requirements for an Integration"
slug: writing-requirements-for-an-integration
series: "API Literacy for Business Analysts: What You Need to Know to Specify, Read and Test an Integration, With No Code"
day: 3
dek: "From a one-line request to a trigger, a mapping table and a definition of done"
description: "'Sync payments to finance' is seven words and nine open questions. Integration requirements for BAs: trigger, mapping table, definition of done."
date: 2026-10-21T06:00:00.000Z
cover: "/images/blog/api-literacy-day-3-requirements.jpg"
readingTime: 5
linkedinPost: |
  The requirement read: "Sync tenant payments to the finance system."

  Seven words, and at least nine questions still open. What triggers the sync? Which direction does the data flow? Which system is the source of truth? What happens when a record is missing?

  An integration requirement that stops at the first sentence is a direction, not a specification. The good ones are built from three pieces: a trigger, a mapping, and a definition of done, and each can be written without a line of code.

  Today's article walks through all three, including the mapping table that settles most of the arguments before the build starts.

  Read the full article in this week's newsletter. Link in the comments.

  Which integration question did your team only ask after go-live?

  #BusinessAnalysis #Requirements #SystemsIntegration #DataMapping #FlotogBAInsights
tableImages:
  - "/images/blog/tables/writing-requirements-for-an-integration-table-1.png"
---
<img src="/images/blog/api-literacy-day-3-requirements.jpg" alt="Two grids of navy and teal index cards connected by gold string, like a field mapping" width="1600" height="893" loading="lazy">

The requirement reads: "Sync tenant payments to the finance system." It has seven words, and by the end of the first conversation about it the analyst has written down nine questions. When does the sync happen? Which direction does the data move? What counts as a payment worth syncing? What if the tenant does not exist in the finance system? Who is told when a record is rejected? The sentence is a direction of travel. The specification is everything that gets written after it. Integration requirements fail in a particular way. They are usually thorough about the happy path, where a payment arrives and appears in the ledger, and silent about everything else. The reason is understandable. The happy path is easy to describe, and the rest feels like technical detail. It is not technical detail. Each of those gaps is a business rule, and a developer who is not given the rule will make one up. Three pieces make an integration requirement complete enough to build: the trigger, the mapping and the definition of done.

## Start with the trigger and the direction

Before any field is discussed, settle what causes data to move and which way it goes. The trigger might be an event, such as a payment being confirmed at the provider. It might be a schedule, such as a batch every night at one in the morning. It might be a person's action, such as a finance officer pressing a button. These feel similar in conversation and behave very differently in practice. An event-driven integration is quick but must cope with failures one record at a time. A nightly batch is easier to monitor but means the finance team sees yesterday's payments today. The right answer depends on what the business needs to know, and how soon.

Direction matters just as much. A one-way flow from the portal to finance is a very different build from a two-way sync in which finance can also change a record that the portal then has to reflect. Two-way flows raise the question of which system wins when both change the same record at the same time. Name the source of truth for each type of data: the tenant record, the invoice, the payment, the balance. When two systems each believe they own the balance, the numbers will drift, and the person who notices will be a tenant.

Two more questions belong at this stage. How are the systems told that something happened? Either the receiving system keeps asking, which is called polling, or the sending system calls out when something changes, which is called a webhook. Polling is simpler and wastes calls. A webhook is faster and must be designed for the moments when the listener is down. And how much data is expected? A property team with a few hundred payments a month and one with a hundred thousand are specifying different systems.

## The mapping table is the main deliverable

If the integration requirement has one artefact that earns its place, it is the mapping table. It lists, for each piece of data that moves, where it comes from, where it goes, and what happens to it on the way. It is the document that developers, testers, finance and the vendor can all read, and it settles most arguments before they begin. The table below is a short version for the running example.

<p class="table-title"><strong>MAPPING THE TENANT PORTAL TO THE FINANCE SYSTEM</strong></p>

<table>
<thead><tr><th>Portal field</th><th>Finance field</th><th>Rule</th></tr></thead>
<tbody><tr><td><strong>tenant_id</strong></td><td>customer_code</td><td>Look up through the tenant master list. If no match, reject and alert.</td></tr><tr><td><strong>invoice_ref</strong></td><td>invoice_number</td><td>Copy exactly. Must already exist in finance.</td></tr><tr><td><strong>amount</strong></td><td>amount_paid</td><td>Convert from the smallest currency unit to AED with two decimals.</td></tr><tr><td><strong>paid_at (UTC)</strong></td><td>posting_date</td><td>Convert to Gulf Standard Time, then take the date.</td></tr><tr><td><strong>status</strong></td><td>payment_status</td><td>succeeded becomes Posted. failed and pending are not synced.</td></tr></tbody>
</table>

*Illustrative. A real table would also record field lengths, required or optional, and an owner for each rule.*

The rules column does the real work. It is where you record the lookups, the conversions and the decisions about records that do not fit: what to do with a payment against an invoice that finance has already closed, what to do with a refund, what to do when the same tenant has two accounts. Each rule is a question someone has to answer, and the table forces the answer to be written next to the field it affects. It also exposes where the data is not good enough. Mapping a field that one system captures and the other does not is the cheapest moment to find that out.

Test the mapping on paper before anyone builds it. Take a sample of real records from the portal, walk each one through the table by hand, and see what finance would receive. You will find the tenant whose name is spelt two ways, the invoice that was reissued under a new number, the payment recorded just after midnight. Each is a rule the table did not yet have. Finding them with a spreadsheet and an hour of finance's time is far cheaper than finding them in a failed overnight run, and it gives finance an early look at what they are about to receive, which makes sign-off much quicker.

## Everything people forget until go-live

A mapping table covers the data. A complete integration requirement also covers the conditions around it. Some of the questions are worth keeping as a checklist beside every integration you specify.

- Volume and timing: how many records, how often, and how fast the receiving system must have them.
- Failure: what happens to a record that is rejected, who is told, and how it gets fixed and resubmitted.
- Security and privacy: which personal and financial data crosses the line, how it is protected in transit, and who may see it on each side.
- Ownership: who supports each system, who owns the connection itself, and who answers when it stops.
- Visibility: how anyone will know the integration is working, such as a daily count of records sent and records received.

The last item on the list is the definition of done, and it is worth writing in plain sentences. An integration is not done when the first payment appears in finance. It is done when the agreed volume flows at the agreed speed, a rejected record is visible within an hour and fixed within a day, and the numbers on both sides match at month end. Written that way, it gives the team something to test against, and it gives Thursday's topic a place to start: the business cases where the connection does not behave.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>When the Integration Breaks - Error codes in plain English, timeouts, duplicate payments and the changes nobody announces.</em>
