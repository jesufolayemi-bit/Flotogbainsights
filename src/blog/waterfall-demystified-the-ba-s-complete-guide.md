---
title: "Waterfall demystified: The BA's Complete Guide"
description: "On Friday, we established the foundation: why methodology literacy matters more than methodology preference, where both frameworks come from, and the five…"
date: 2026-05-04T06:57:17.883Z
cover: "/images/blog/f4dc16_5c37ab9a9f654fe3950a778d1c1be51c.png"
readingTime: 8
wixId: "7d58d490-a691-4b8b-88e2-5ddcbd19a613"
---
<img src="/images/blog/f4dc16_5c37ab9a9f654fe3950a778d1c1be51c.png" alt="Waterfall demystified: The BA's Complete Guide" width="2848" height="1504" loading="lazy">

## Every phase. Every deliverable. Every common mistake.

On Friday, we established the foundation: why methodology literacy matters more than methodology preference, where both frameworks come from, and the five myths that limit how practitioners engage with the debate. Today, we go deep on Waterfall, and I want to do it in a way that most BA resources do not bother with.

Not a surface-level summary of the phases. A genuine examination of what the BA owns in each phase, what can go wrong, and the specific environments where Waterfall is not just adequate, it is the most appropriate choice available.

## Why Waterfall Deserves More Respect Than It Gets

The BA community has a complicated relationship with Waterfall. For practitioners who have spent most of their careers in Agile environments, particularly in digital product development, technology startups, or transformation programmes, Waterfall carries connotations of slowness, rigidity, and missed delivery. These connotations are not entirely without basis. Poorly implemented Waterfall projects, with inadequate elicitation and weak change management, do produce exactly those outcomes.

But the methodology itself is not the problem. The implementation is. And in the right environments, with experienced BAs who understand what the methodology demands of them, Waterfall delivers something that Agile structurally cannot: a complete, traceable, formally governed audit trail of every requirement, every design decision, every test result, and every deployment activity. In regulated industries, government programmes, and high-accountability delivery environments, this is not administrative overhead. It is the product.

## The Six Phases: In-depth and what the BA Role Requires

## Phase 1: Requirements, The BA's Most Critical Contribution

Everything that follows in a Waterfall project is built on what is documented in this phase. The quality of your requirements work determines the quality of the design, the development, the testing, and the deployment. There is no iterative mechanism for course-correction mid-stream without formal change control, which means that gaps in your requirements become defects in your UAT, and defects in your UAT become late deliveries and budget overruns.

The core deliverables the BA owns in this phase are substantial. The ***Business Requirements Document*** captures the what and the why of the solution, written in business language, for a business audience, focused on the outcomes the solution must achieve rather than the technical implementation that will achieve them. The ***Functional Specification*** translates those business requirements into specific system behaviours, which the system does, how it responds to inputs, and how it handles exceptions, written for a technical audience who will design and build from it.

***Non-Functional Requirements*** capture the performance characteristics that are often the most expensive to retrofit later: response time standards, availability requirements, security specifications, scalability parameters, accessibility standards, and regulatory compliance requirements. ***Process Maps*** document both the current state and the agreed future state, giving the development team a clear picture of the business operations the system must support. ***Use Case documentation*** captures the specific interactions between users and the system in a format that both business and technical stakeholders can validate. And the ***Requirements Traceability Matrix (RTM)*** links every requirement to its business objective, its design element, its test case, and its deployment configuration, creating the traceability thread that makes formal governance possible.

What makes this phase demanding is not the volume of documentation. It is the quality of thinking it requires. The BA must elicit not just what stakeholders say they need, but what the system must do to support business operations that stakeholders may not fully understand themselves. They must anticipate *edge cases*, *exception handling scenarios*, and *non-functional requirements* that stakeholders will not spontaneously volunteer. They must surface contradictions between different stakeholders' requirements and broker a resolution before those contradictions become conflicts in the development phase.

## Phase 2: System Design, The BA as Validation Authority

Once requirements are baselined and formally signed off, the solution architecture and system design phase begins. The BA's role here is often underestimated,  but it is critical. Architects and technical leads are translating your requirements into technical design, and the translation process introduces interpretation risk.

The BA must review design documents for alignment with requirements, not for technical correctness, which is the architect's domain. The question you are asking is: Does this design actually do what the business needs it to do? Design-to-requirement queries should be logged formally, responses should be documented, and any design decision that requires a business trade-off should be escalated to the appropriate stakeholder for formal approval.

## Phase 3: Implementation, Active Support and Change Discipline

Development begins, and the BA's role shifts from production to support, but ***'support' in Waterfall is active, not passive***. Developers will raise requirements queries throughout implementation. Some are minor clarifications; others signal genuine gaps or contradictions in the requirements baseline. Your job is to resolve these formally: through a documented **requirements query log** that records the question, the business decision, and the approved resolution.

Any change to baselined requirements during implementation, regardless of how minor it appears, must go through formal change control. This means a written change request describing what is being changed and why, an impact assessment covering the effect on scope, cost, timeline, and risk, and formal approval from the project sponsor or change control board. This discipline is not bureaucracy for its own sake. It is the mechanism that prevents informal scope creep from undermining the project's integrity and keeps the RTM current.

## Phase 4: Testing, The BA Owns UAT

User Acceptance Testing (UAT) is the phase where the BA's requirements work faces its first real-world validation. Your RTM is your UAT management tool: every requirement in the baseline should be covered by at least one test scenario, and every test result should be traceable back to the requirement it validates.

The BA's role in UAT is multifaceted. You are coordinating business users who have existing day jobs and limited time for testing. You are triaging defects to determine whether they represent genuine failures to meet a documented requirement, which are UAT defects or changes to requirements that stakeholders have decided they want after seeing the system, which are change requests. This distinction matters significantly for project accountability. You are also making go/no-go recommendations: assessing whether the defect profile of the system at any point in UAT meets the agreed criteria for deployment.

## Phase 5: Deployment, Business Readiness Is a BA's Accountability

Go-live is a business event, not just a technical one, and the BA owns significant aspects of it. Stakeholder communications about the change, what is going live, when, what will be different, and what users need to do are BA deliverables. Training documentation and delivery coordination are BA responsibilities. Cutover planning, covering the sequencing of activities, data migration, parallel-run arrangements, and contingency procedures, requires BA involvement because it affects business operations.

Business readiness, the organisation's capacity to receive and successfully adopt the solution, is ultimately a BA accountability. A technically successful deployment that the business is not prepared to use is a project failure.

## Phase 6: Maintenance, The Lifecycle Continues

Post-deployment, the system enters its operational life. Enhancement requests, defect reports, and change requests accumulate through a formal intake process. In a Waterfall organisation, significant enhancements typically initiate a new project lifecycle, with the BA beginning a new requirements phase. This is the point where the quality of your RTM from the original project pays dividends; if requirements are traceable, understanding the impact of enhancements on the existing system is significantly more straightforward.

## Three Real-World Scenarios Where Waterfall Is the Right Call

## Scenario 1: Regulatory Compliance in Financial Services

A major bank is required by a financial regulator to implement a new transaction monitoring system by a fixed statutory deadline. The functional requirements are defined in the regulation itself; they are not subject to iterative business interpretation. The output must exactly match the regulatory specification, and the implementation must be documented to a standard that will withstand a regulatory audit, potentially years after delivery.

Waterfall's documentation discipline, phase-gate governance, and formal sign-off culture are not project management preferences in this context. They are what the regulatory environment requires. An Agile approach, with its emphasis on evolving requirements and adaptive scope, would create compliance risk at every sprint boundary that the organisation's legal and risk functions would not accept.

## Scenario 2: Government Infrastructure Programme

A government agency is replacing a legacy benefits processing system. The project has parliamentary-approved funding with a fixed scope and timeline, public visibility, and a formal accountability framework. Any significant scope change requires ministerial approval. Agile's inherent flexibility with scope, one of its core strengths in commercial environments, is an operational risk in a parliamentary accountability context. Waterfall's predictability, its formal change control discipline, and its milestone-based governance reporting align with how the programme must be managed.

## Scenario 3: Multi-Vendor System Integration

An organisation is integrating five enterprise platforms from four different vendors. Each vendor's development team needs complete, agreed interface specifications before they can begin building. A change to one interface specification has cascading effects across all connected systems and all vendor teams. The BA's ability to produce a complete and agreed requirements baseline upfront and to manage any subsequent changes through rigorous formal change control is the difference between a coordinated integration and an expensive chaos event.

## Three Mistakes BAs Consistently Make in Waterfall

## Mistake 1: Disengaging After Requirements Sign-Off

This is the most common and most costly mistake in Waterfall BA practice. The requirements are baselined, the project moves into design and development, and the BA steps back often because they are already committed to the requirements phase of the next project. What they are not doing is monitoring the design phase for requirement misinterpretations, maintaining the query log, or staying close enough to the development team to catch problems before they reach testing.

Requirements sign-off is not an exit point. It is a milestone. The BA who understands Waterfall remains actively engaged through design review, monitors implementation queries, and treats UAT outcome quality as a direct reflection of the quality of their requirements work.

## Mistake 2: Shallow Elicitation

Because Waterfall concentrates requirements gathering in a defined upfront phase, the quality of that elicitation determines the quality of everything that follows. BAs who rely too heavily on existing process documentation, who accept stakeholders' first-pass descriptions of requirements without probing for edge cases and exceptions, or who do not challenge stated requirements with 'what if' and 'what happens when' questions are planting the seeds of UAT defects in their requirements workshops.

Deep, rigorous elicitation is the BA's primary risk management activity in a Waterfall project. There is no sprint review in three weeks where misalignments can be cheaply corrected. The investment in thoroughness during requirements pays compound returns throughout every subsequent phase.

## Mistake 3: Informal Scope Management

Under delivery pressure, it is tempting to accommodate a stakeholder's change request verbally and informally, 'it is just a small thing, we will sort it out.' The problem compounds: informal changes are not documented, not impact-assessed, not approved through governance, and not incorporated into the RTM. They contradict the baseline requirements. They create development assumptions. They surface as defects in UAT that cannot be traced to any documented requirement, which means they cannot be managed as defects, and they cannot be managed as change requests, and they become the source of project disputes that damage stakeholder relationships and erode trust.

Every change goes through change control. Full stop.

***Go out and be successful.***

## Oluwatosin Ogunkoya

*Tomorrow: Agile Demystified, the Manifesto values unpacked for BAs, the Scrum ceremonies in depth, user stories and acceptance criteria done properly, and the places where Agile quietly fails without strong BA involvement.*
