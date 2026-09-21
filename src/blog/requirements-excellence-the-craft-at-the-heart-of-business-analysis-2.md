---
title: "Writing Requirements That Hold Up: Functional and Non-Functional in Depth"
series: "Requirements Excellence: The Craft at the Heart of Business Analysis"
day: 3
description: "DAY 3 | Writing Requirements That Hold Up: Functional and Non-Functional in Depth"
date: 2026-05-20T14:01:53.461Z
cover: "/images/blog/f4dc16_677c3a635fd648e39669317dd291d97d.png"
readingTime: 7
wixId: "24012d41-33bc-401f-8257-76bdd556e0d6"
---
<img src="/images/blog/f4dc16_677c3a635fd648e39669317dd291d97d.png" alt="Writing Requirements That Hold Up: Functional and Non-Functional in Depth" width="2816" height="1536" loading="lazy">

Requirements writing is a craft. Not a task. Not a deliverable. A craft is something that takes genuine skill to do well, that can always be done better, and that produces noticeably different outcomes depending on the quality with which it is practised. Most Business Analysts learn to write requirements by exposure: reading other BAs' documents, following templates, and gradually developing a style through repetition. The problem with learning by exposure is that you absorb both the good and the bad practice indiscriminately. You learn the structure of a requirements document without necessarily learning what makes the requirements inside it good or poor. Today we are going to examine what good actually looks like, at the level of the individual requirement. Not the document structure. Not the template. The requirement itself.

## Functional Requirements: What They Are and How to Write Them

<strong>A functional requirement describes what the system must do</strong>. It specifies a behaviour, a capability, or a function that the system must exhibit in order to meet a business need. <strong><em>It answers the question: what must the system do?.</em></strong> Functional requirements are typically written in one of two formats. The traditional format uses a structured statement: The system shall \[action\] \[object\] \[condition/constraint\]. The agile format uses a user story: As a \[user type\], I want to \[action\], so that \[business outcome\], combined with specific acceptance criteria in Given-When-Then format.

Both formats can produce excellent requirements or poor ones. The format is not what determines quality. The thinking behind the requirement is what determines quality. A well-written functional requirement has five characteristics.

- It is specific: there is one clear behaviour being described, not a cluster of related behaviours bundled together.
- It is unambiguous: the words used have only one reasonable interpretation in the context of the project.
- It is complete: all necessary conditions, actors, and constraints are included.
- It is testable: a tester can design a test case that will definitively confirm whether the requirement has been met.
- It is traceable: it can be linked to the business objective it serves.

Consider this requirement: "The system must allow users to search for customer records."

It describes a function. But it is not a good requirement. Who are the users? All users or specific user types? What can they search by?, name, account number, postcode, or all of these? What is returned by the search? A single record, a list of matches, or something else? How many results should be returned? What happens when no match is found? What happens when there are multiple matches? What are the performance requirements for the search? How quickly must results be returned?

None of these questions is answered by the requirement as written. A developer building this requirement would have to make assumptions about all of them. And assumptions made during development are requirements that nobody agreed to.

A better version: "The system shall allow Credit Control Agents to search the customer database by customer surname, account number, or postcode. The search must return all matching records within three seconds. Where multiple records are returned, they shall be displayed in alphabetical order by surname. Where no matching record is found, the system shall display the message: 'No records found matching your search criteria.'"

This is still not a complete requirement in isolation as there are further questions to answer about pagination, access controls, and audit logging, but it demonstrates the direction of travel. Specificity. Unambiguity. Completeness.

## Non-Functional Requirements: The Most Consistently Underwritten Category

If functional requirements describe what the system must do, <strong>non-functional requirements describe how well it must do it</strong>. They specify the quality attributes of the solution: its performance, its security, its reliability, its usability, its maintainability, and its compliance with regulatory or technical standards.

Non-functional requirements are the category most consistently underwritten in BA practice. Not because BAs are unaware of them, but because they are harder to elicit, harder to specify precisely, and easier to defer than functional requirements. And the consequences of deferring them are felt at the worst possible time: during performance testing, during security review, or after go-live when the system that works perfectly in development fails under production load.

The FURPS+ model provides a useful framework for ensuring non-functional requirements are comprehensively addressed: <strong><em>Functionality, Usability, Reliability, Performance, Supportability</em></strong>, and <strong><em>the plus covers constraints such as design, implementation, interface, and physical constraints.</em></strong>

## Performance Requirements

<strong>Performance requirements specify how fast, how much, and under what conditions.</strong> They must be quantified. "The system must be fast" is not a performance requirement. "The system shall return search results within three seconds for 95% of queries under a concurrent user load of 500" is a performance requirement. Every performance requirement needs four elements:

- the metric being measured (response time, throughput, resource consumption),
- the threshold (the specific value that must be met),
- the condition (under what circumstances, peak load, average load, specific transaction types), and
- the scope (which functions or scenarios the requirement applies to).

## Security Requirements

<strong>Security requirements specify what the system must do to protect data, control access, and maintain integrity</strong>. They cover authentication (how users prove their identity), authorisation (what authenticated users are permitted to do), data protection (how data is encrypted, stored, and transmitted), and audit (what actions are logged and how those logs are protected). Security requirements are often left to a security architect rather than the BA. This is a mistake. The BA who does not understand the security requirements for their project cannot validate that what is being built meets the organisation's obligations, cannot manage the stakeholder conversation about security trade-offs, and cannot ensure that security requirements are reflected in the testing approach.

## Usability Requirements

<strong>Usability requirements specify the standards the system must meet to enable its users to accomplish their tasks effectively and efficiently</strong>. They are the non-functional category most frequently described in vague, untestable terms: "intuitive," "easy to use," "accessible."

Making usability requirements testable requires anchoring them to observable, measurable standards. "New users must be able to complete the end-to-end customer registration process without assistance within five minutes" is a testable usability requirement. "The system must comply with WCAG 2.1 Level AA accessibility standards" is a testable usability requirement. "The system should be user-friendly" is not.

## Reliability and Availability Requirements

<strong>Reliability requirements specify what level of service the system must maintain and under what conditions. Availability is typically expressed as a percentage of time the system must be operationa</strong>l: 99.9% availability over a twelve-month period equates to approximately eight and a half hours of acceptable downtime. Recovery time objectives and recovery point objectives define how quickly the system must recover from failure and how much data loss is acceptable.

These requirements have direct implications for architecture, infrastructure, and cost. Specifying them clearly early in the project allows the solution design to be built around them. Discovering them late, which happens when they are left off the requirements until a stakeholder raises them in a steering committee, typically means expensive rework of a design that was not built to meet them.

## The Quality Criteria Every Requirement Must Meet

Individual requirements should be evaluated against a consistent set of quality criteria before they are baselined. The following six criteria apply to both functional and non-functional requirements.

- <strong>Necessary</strong>: Does this requirement represent something the solution genuinely needs to do to meet a business need? Requirements that are nice-to-have rather than necessary inflate scope, increase cost, and dilute focus. Every requirement should be traceable to a business objective.
- <strong>Unambiguous</strong>: Does every word in the requirement have a single, clear meaning in the context of the project? Ambiguous requirements are not just imprecise, they are actively dangerous, because different members of the team will interpret them differently and all of them will believe they are right.
- <strong>Complete</strong>: Does the requirement specify all the conditions, actors, constraints, and edge cases that are necessary to implement it without making assumptions? Incompleteness is often invisible in a requirements review because what is missing does not announce itself. Completeness checking requires active effort to identify what is not there.
- <strong>Consistent</strong>: Does the requirement conflict with any other requirement in the baseline? Inconsistency between requirements is one of the most common and most expensive problems in requirements documentation. Requirements need to be reviewed not just individually but in relation to each other.
- <strong>Verifiable</strong>: Is there a test that would definitively confirm whether this requirement has been met? If you cannot describe such a test, the requirement is not a requirement. Go back and specify it more precisely until it is testable.
- <strong>Traceable</strong>: Can this requirement be linked to the business objective it serves, and can it be followed forward through design, development, and testing? Traceability is what makes change management possible and what gives the RTM its value.

## The Documentation Failures That Derail Projects

Requirements documentation fails in predictable ways. The failures below account for the majority of requirements-related project problems I have encountered across projects in different industries and at different scales.

- <strong>The passive voice problem</strong>: "Data must be validated" does not say who validates it, when, against what criteria, or what happens when validation fails. Passive constructions hide the actor and the condition. Active, specific language; "The system shall validate the customer date of birth field against the format DD/MM/YYYY when the user submits the registration form", removes the ambiguity.
- <strong>The bundled requirement</strong>: "The system must allow users to create, read, update and delete customer records" is four requirements presented as one. When requirements are bundled, they cannot be individually traced, individually tested, or individually managed when change occurs. <strong><em>Write one requirement per behaviour.</em></strong>
- <strong>The solution-embedded requirement</strong>: "The system must use a dropdown list to display payment options" specifies the implementation, not the requirement. The requirement is that users must be able to select a payment option. How that is implemented is a design decision. Requirements that embed design decisions constrain the solution unnecessarily and create problems when the design needs to change.
- <strong>The missing non-functional context</strong>: functional requirements written without their corresponding non-functional requirements are incomplete. A requirement that says the system must process payment transactions without specifying the transaction volume, the response time, the security standard, and the availability requirement is a partial requirement. It describes a function without describing the quality standard that function must meet.

<strong><em>Go out and be successful.</em></strong>

## Oluwatosin Ogunkoya | Flotog BA Insights | www.flotogbainsights.com

<em>Tomorrow: Managing Requirements Through the Lifecycle. Validation, traceability, change management, and what happens when sign-off is treated as a finish line rather than a milestone.</em>
