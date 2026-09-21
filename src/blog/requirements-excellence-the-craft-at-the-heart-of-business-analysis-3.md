---
title: "From Discovery to Sign-Off: Managing Requirements Through the Lifecycle"
series: "Requirements Excellence: The Craft at the Heart of Business Analysis"
day: 4
description: "DAY 4 | From Discovery to Sign-Off: Managing Requirements Through the Lifecycle"
date: 2026-05-21T07:35:33.498Z
cover: "/images/blog/f4dc16_f92988bfd79a44a3ae31bb8ed2a4f9a7.png"
readingTime: 7
wixId: "2b98f41f-67d3-4833-85f9-d8829cd3170a"
---
**DAY 4** | **From Discovery to Sign-Off: Managing Requirements Through the Lifecycle**

<img src="/images/blog/f4dc16_f92988bfd79a44a3ae31bb8ed2a4f9a7.png" alt="From Discovery to Sign-Off: Managing Requirements Through the Lifecycle" width="2816" height="1536" loading="lazy">

There is a version of requirements work that ends at sign-off. The BA completes elicitation. They write the requirements. They run the review sessions. They get the document approved. And then, to all intents and purposes, requirements work is done. The document goes into the project repository. The team goes into development. The BA moves on to the next engagement. This version of requirements work is responsible for a significant proportion of project failures that are attributed to other causes.

When a project delivers the wrong thing, the instinct is to look at the requirements document and ask whether it was correct. Often it was, at the time it was written. The problem was not the document. The problem was that the document was treated as a finished artefact rather than a living baseline, and when the business changed, when new information emerged, when stakeholders updated their understanding, nobody had a process for managing those changes through the requirements. Today we look at requirements management: the practices, tools, and disciplines that keep your requirements baseline current, traceable, and trustworthy from the first elicitation session to the final UAT sign-off.

## The Requirements Lifecycle

Requirements do not have a single moment of creation. They move through a lifecycle; from initial identification to elicitation, analysis, documentation, validation, baseline establishment, and ongoing management through change. Understanding this lifecycle is what allows the BA to manage requirements as a practice rather than a phase.

- Elicitation is where requirements are drawn out from stakeholders using the techniques we covered yesterday.
- Analysis is where requirements are examined, challenged, and refined; where the BA works to ensure they are complete, consistent, and unambiguous before they are documented.
- Documentation is the formal recording of requirements in the agreed format.
- Validation is the process of confirming that the documented requirements accurately reflect what the business needs.
- Baseline establishment is the formal agreement that the current set of requirements represents the scope of the solution.

After baseline, requirements management is the ongoing practice of maintaining the integrity of that baseline as the project progresses. This is the stage most BAs treat inadequately, and it is the stage where most requirements problems originate.

## Validation vs Verification: A Distinction That Matters

Validation and verification are terms that are used interchangeably in much BA practice. They are not the same thing, and understanding the difference changes how you approach quality in your requirements work.

**Validation answers the question: are we building the right thing?** It is the process of confirming that the requirements, if implemented, will actually solve the business problem they are intended to solve. Validation is primarily a business activity. It requires the business stakeholders to confirm that the requirements as documented reflect their actual needs. A requirements review session where business stakeholders go through the documented requirements and confirm their accuracy is a validation activity.

**Verification answers the question: are we building it right?** It is the process of confirming that the requirements meet the quality standards for requirements documentation; that they are precise, complete, consistent, unambiguous, and testable. Verification is primarily a BA and peer review activity. A structured review of a requirements document against a quality checklist is a verification activity.

Both are necessary. A requirements document can pass verification, be technically well-written and internally consistent, and still fail validation because it does not accurately reflect what the business needs. And a requirements document can be validated by stakeholders; confirmed as reflecting their current wishes, and still fail verification because the requirements as written cannot be built or tested without interpretation. In practice, most requirements review sessions try to do both at once. This is less effective than separating them. A peer review focused on technical quality before stakeholder review is much more efficient than putting technically poor requirements in front of stakeholders and asking them to evaluate both accuracy and quality simultaneously.

## The Requirements Traceability Matrix: What It Is and Why Most BAs Underuse It

The Requirements Traceability Matrix, the RTM, is one of the most powerful tools in the BA's toolkit and one of the most consistently underused. In many projects, the RTM is produced because the methodology requires it, maintained perfunctorily, and consulted rarely. This is a significant waste of what the RTM can do. An RTM is a document that links each requirement to its origins, the business objective it serves and the stakeholder who originated it, and to its downstream artefacts: the design elements that implement it, the test cases that verify it, and the deployment configuration that delivers it. A fully maintained RTM creates a traceable thread from business need to delivered solution.

The value of that thread is not just governance compliance. It is practical and operational.

When a requirement changes, a maintained RTM tells you immediately what else is affected: which design elements need to be revised, which test cases need to be updated, which other requirements may be impacted. Without RTM traceability, a requirements change triggers a manual impact assessment that is time-consuming, error-prone, and often incomplete.

When a project approaches UAT, the RTM tells you whether every requirement has a corresponding test case. Requirements without test coverage are requirements that have not been verified. Finding that gap at the start of UAT planning is manageable. Discovering it during UAT is a delay. When a stakeholder asks why the system does something a specific way, which happens in every project, the RTM tells you which requirement drove that design decision and which business objective that requirement was serving. This is not a trivial capability. In complex projects with many stakeholders and long timelines, the ability to trace a delivered feature back to a business need is what makes governance conversations possible and scope disputes resolvable.

Maintaining an RTM is not particularly complex. What it requires is discipline: updating it every time a requirement is added, changed, or removed, and every time a new design element, test case, or deployment component is linked to a requirement. The BA who treats RTM maintenance as an administrative task to be done periodically will have an RTM that is always slightly out of date. The BA who treats it as a living record, updated as the project moves, will have an RTM that earns its place in the project's governance framework.

## Requirements Change Management

Requirements change. This is not a problem to be prevented. It is a reality to be managed.

Business needs evolve. Stakeholders understand the implications of the change more clearly as the project progresses. External factors - regulatory changes, market developments, organisational restructuring - affect what the system needs to do, and stakeholders see working software in review sessions and realise that what they asked for is not quite what they need. The BA's role is not to prevent change. It is to ensure that every change is processed through a rigorous, documented process that makes the cost and consequence of the change visible before it is approved.

A requirements change management process has four components.

1. **A formal change request mechanism**: every proposed change to a baselined requirement is submitted through a documented change request that describes what is being changed, why, who is requesting the change, and what the proposed new requirement is.
2. **An impact assessment**: every change request is assessed for its effect on the project baseline; scope, schedule, budget, risk, and downstream artefacts including design, development, and test. The impact assessment is what makes the cost of change visible. A stakeholder who wants to change a requirement without going through impact assessment is asking for the change without understanding what it costs. The impact assessment creates the conditions for an informed decision.
3. **A** **formal approval process**: changes above an agreed threshold are approved by the change control board or the appropriate governance body. The threshold - what level of change requires what level of approval - should be defined at the start of the project, not decided ad hoc when a change arrives.
4. **Baseline update and communication**: once a change is approved, the requirements baseline is updated, the RTM is updated, and the change is formally communicated to all affected parties: design, development, testing, and any other workstreams that need to respond to the change.

The BA who manages requirements change formally and rigorously is not being bureaucratic. They are protecting the project from the compound effect of informal changes: the small adjustments that seemed harmless individually but collectively moved the scope significantly from what was designed, budgeted, and tested.

## Sign-Off Is a Milestone, Not an Exit

Requirements sign-off is the formal confirmation that the documented requirements accurately reflect the agreed scope of the solution and are sufficient to proceed to design and development. It is a critical milestone. It is not the end of requirements work.

The BA who treats requirements sign-off as an exit point, who disengages from requirements responsibilities after the document is approved, will consistently find that their carefully built baseline has drifted from reality by the time the project reaches testing. After sign-off, requirements work continues in three forms.

1. Active management of the change control process ensures that the baseline stays current.
2. Continued engagement with design and development teams ensures that the requirements are being interpreted correctly and that implementation decisions are consistent with requirements intent.
3. And preparation for validation: building the UAT strategy, working with testers to ensure every requirement has coverage, ensures that the delivered solution can be verified against the baseline that was agreed.

The requirements document is not a handoff artefact. It is a shared commitment between the BA, the business, and the delivery team about what is being built and why. Maintaining that commitment; keeping it current, keeping it visible, and keeping it connected to what is actually being delivered, is what requirements management is for.

***Go out and be successful.***

## Oluwatosin Ogunkoya | Flotog BA Insights | www.flotogbainsights.com

*Tomorrow: Series Finale. Requirements Excellence in your career, what mastery looks like at every BA level, interview preparation with model STAR answers, and the six principles to carry forward.*
