---
title: "Where the Data Lives and Who Can See It"
slug: where-the-data-lives-and-who-can-see-it
series: "Cloud and Infrastructure Basics: What a Business Analyst Needs to Know About Where Systems Run, and What to Ask About It"
day: 4
dek: "Data location, rules that depend on country and sector, and how to leave"
description: "Where does your cloud data physically sit, who can see it, and can you get it back? The data location, access and exit questions a BA should ask early."
date: 2026-11-12T06:00:00.000Z
cover: "/images/blog/cloud-day-4-where-data-lives.jpg"
readingTime: 6
linkedinPost: |
  The vendor's data centre was in another country. Nobody had asked, because nobody had thought it was a business question.

  It is. Where a cloud system keeps its data, and its backups, can be set by law, by regulators or by your own contracts, and the rules differ by country and by sector. Health information, financial records and personal data often carry their own restrictions.

  Equally overlooked is the exit. If the contract ends, can you get your data out, in a usable format, and is the vendor's copy deleted?

  This is day 4 of 5 on cloud basics for BAs. So far: where systems run, the three service models, and availability and recovery.

  Read the full article below. Link to my website/blog is in the comments.

  Does your team know which country its data physically sits in?

  #BusinessAnalysis #CloudComputing #DataProtection #Requirements #FlotogBAInsights
tableImages:
  - "/images/blog/tables/where-the-data-lives-and-who-can-see-it-table-1.png"
---
<img src="/images/blog/cloud-day-4-where-data-lives.jpg" alt="A world map with a gold pin and teal thread running to an open filing cabinet, with a hand lifting out a document" width="1600" height="873" loading="lazy">

Late in the project, someone asks where the booking system's data will physically be stored. The vendor replies that it is held in a data centre in another country, with backups in a third. Nobody on the project had asked earlier, because nobody had thought it was a business question. It turns out to be exactly that, and the answer will decide whether the contract can be signed at all. If you are joining us on day four, here is where we are. This week is five days of cloud and infrastructure basics for business analysts, following one analyst at a regional chain of 12 private clinics who is writing requirements for moving the appointment booking and patient records system from a server at head office to the cloud. Day one covered what the cloud actually is and why a move is a requirements question. Day two covered the three ways of renting technology and who is responsible for what in each. Day three covered availability in hours, and the two plain questions of how long the clinics can be down and how much recent data they can lose. Today we look at where the data lives, who can see it, and how to get it back.

## Where the data physically sits

Cloud providers run data centres in many countries, grouped into regions, and a customer usually chooses the region where its data will be stored. The choice matters for several reasons. Some laws require certain kinds of data to stay inside a country, or allow it to leave only under conditions. Regulators in some sectors set rules for where records may be held, and customers and partners sometimes write location requirements into their own contracts. Speed matters too, because a system hosted far away responds more slowly to the people using it.

For a clinic chain, the data is patient information, which is typically among the most tightly regulated. Rules differ by country and by sector. In the United Arab Emirates, for example, health information has its own rules about where it may be stored, and general data protection law applies as well, but the details change and depend on the exact facts, so the analyst's job is to flag the question and send it to the people who own the answer, namely legal and compliance, before the design is fixed. The same goes for any organisation: do not guess the rule, and do not assume the vendor has already checked it for your case.

Ask about backups and copies as well as the main system. A provider may keep the live system in one region and store backups or support copies in another. Ask where each copy is, who can reach it, and whether it can be moved without your agreement. A requirement such as "all patient data, including backups, must be stored within the country" is short, testable and removes a surprise.

It helps to recognise that not all the clinic's data is equal. Appointment times and clinic locations are very different from diagnoses, test results and identity documents. A sensible requirement set classifies the data into a few groups, says how sensitive each group is, and attaches the rules to the group. That way the strictest handling is applied where it is needed, and the clinics do not pay for the same level of protection on information that does not warrant it. Classification is also something a business analyst is well placed to lead, because it relies on understanding what each piece of data is used for and who depends on it.

## Who can see the data

A second set of questions concerns access. Three groups are involved: the clinic's own staff, the vendor's staff and anyone the vendor uses to deliver the service. A clear requirement states which roles at the clinic may see which records, how that is controlled and how it is recorded, so that the clinic can answer who looked at a particular record and when. It also asks the vendor the equivalent: can its staff see the clinic's data, under what circumstances, and with what record of the access?

This is a literacy-level view. The technical detail of how data is protected, including encryption, identity controls and monitoring, belongs to a later week on cybersecurity in this series, and a specialist should review any design that holds sensitive records. What an analyst can usefully do now is make sure the business requirements are on the table: who must be able to see what, who must not, and what evidence the clinic needs to show to a regulator or a patient. The table below turns those into a short list of questions.

<p class="table-title"><strong>DATA QUESTIONS TO ASK ON A CLOUD PROJECT</strong></p>

<table>
<thead><tr><th>Question</th><th>Why it matters for the clinics</th></tr></thead>
<tbody><tr><td><strong>In which country and region will the live data sit?</strong></td><td>Rules on health information may limit where it can be stored.</td></tr><tr><td><strong>Where are the backups and copies kept?</strong></td><td>Backups are data too, and sit under the same rules.</td></tr><tr><td><strong>Who at the vendor can see our data, and when?</strong></td><td>Patient records are sensitive, and access must be justified.</td></tr><tr><td><strong>How do we show who accessed a record?</strong></td><td>Regulators and patients may ask.</td></tr><tr><td><strong>How do we get all our data out, and in what format?</strong></td><td>Without an exit, the clinic is locked in.</td></tr></tbody>
</table>

*Illustrative checklist. Confirm the rules that apply to your country and sector with legal and compliance.*

Ask about the vendor's own suppliers as well. Cloud services are often built on top of other companies' infrastructure, and some use outside firms for support or storage. Each of those may be able to touch the clinic's data in some way. A requirement that the vendor lists the third parties involved, says where they operate and commits to telling the clinic before the list changes keeps the picture from going out of date. It is a simple ask, and vendors that run careful operations tend to answer it quickly. Hesitation on this point is itself useful information.

## The exit: getting your data back

The last question in the table is the one projects most often leave until it is too late. At some point the relationship with the vendor will end, whether through a better offer, a price rise, a merger or a failure. On that day the clinic needs its data back, complete, in a format another system can read, within a period it can plan around, and it needs evidence that the vendor's copies have been deleted.

Treat the exit as something to rehearse. Before go-live, ask the vendor to produce a complete export of a small, realistic data set, and have the clinic check it: are the appointments all there, are the attachments included, can the file be opened in something other than the vendor's own tool? A rehearsal of an hour reveals whether the promise in the contract matches the reality. Plenty of organisations have discovered, years into a contract, that the export contains only the current records and not the history, or that it arrives in a format nobody else can read.

Writing this down at the start costs almost nothing and changes the vendor's behaviour. Ask for the export formats the vendor supports, whether exports include attachments and history, how long it takes and whether it costs extra, and how deletion is confirmed afterwards. Ask what notice the vendor gives before changing the service or ending it. A system that is easy to enter and impossible to leave carries a hidden cost that no monthly price shows, and it belongs in the requirements as clearly as any feature. Tomorrow closes the week with the money and the move itself: how cloud pricing behaves, how systems are actually migrated, and the questions every analyst should bring.

<strong><em>Go out and be successful.</em></strong>

<strong>Oluwatosin Ogunkoya</strong> <strong>·  Flotog BA Insights  ·  1:1 mentoring and coaching for BAs at every career stage  ·</strong>  [<strong>www.flotogbainsights.com</strong>](/)

<em>TOMORROW</em>

<em>Cost, Migration and the Questions to Ask - How cloud pricing surprises people, the four main ways to move a system, and a checklist for your next project.</em>
