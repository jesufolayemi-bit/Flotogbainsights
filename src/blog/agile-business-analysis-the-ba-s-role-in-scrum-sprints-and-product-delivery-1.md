---
title: "Writing User Stories That Actually Get Built Right"
series: "Agile Business Analysis: The BA's Role in Scrum, Sprints and Product Delivery"
day: 2
description: "Here is a user story I pulled from a real project backlog. As a customer, I want to be able to manage my account, so that I can keep my information up to…"
date: 2026-05-26T13:15:05.711Z
cover: "/images/blog/f4dc16_2fc84af4807b40b48082133c118c9bca.png"
readingTime: 6
wixId: "8faaf4e4-97f7-43f8-a0f3-3120b2ab7fbd"
---
**DAY 2** | **Writing User Stories That Actually Get Built Right**

<img src="/images/blog/f4dc16_2fc84af4807b40b48082133c118c9bca.png" alt="Writing User Stories That Actually Get Built Right" width="2816" height="1536" loading="lazy">

Here is a user story I pulled from a real project backlog. ***As a customer, I want to be able to manage my account, so that I can keep my information up to date***. The format is correct. The syntax is right. It would pass a cursory review. And it is completely useless as a development requirement.

What does "manage my account" mean? Change a password? Update a billing address? Close the account? View transaction history? Add a secondary user? All of these are different features with different complexity, different security implications, and different testing requirements. A developer picking this story up cannot build it without making assumptions. And as I have previously stated,  assumptions made in development are requirements that nobody agreed to.

User stories are not hard to format. They are hard to think through. The format gives you a three-part sentence. The thinking gives you a requirement that a team can actually build from. Today we look at both.

## What a User Story Actually Is

A user story is a short description of a capability the system must provide, written from the perspective of the person who will use it, in language that captures the value it delivers to them.

The classic format is: **As a \[type of user\], I want \[some action or capability\], so that \[business value or outcome\].**

The "so that" clause is the one most often written badly or left empty. And it is the most important part. It names the reason the capability is needed, which tells the development team what they are building toward. A story without a clear "so that" clause is a story without a business justification. If the team cannot understand why a capability is needed, they cannot make good decisions when they hit design choices during implementation.

But the three-part format is just the beginning. A well-written user story is not defined by its format. It is defined by the quality of the thinking that produced it.

## INVEST: The Six Criteria Every Story Must Meet

INVEST is the most useful framework for evaluating whether a user story is genuinely ready to enter a sprint. Each letter represents a quality the story must have. If a story fails any of these criteria, it should not be sprint-planned until it is fixed.

- **Independent:** A story should be deliverable without depending on another story being completed first. Dependencies between stories create sequencing problems in sprint planning and bottlenecks during development. Where dependencies are unavoidable, they should be explicit and managed, not hidden inside a story that looks standalone.
- When you find stories that are heavily interdependent, it is usually a sign that they have been cut from a larger piece of work at the wrong level of granularity. Revisit the parent epic and re-slice.
- **Negotiable:** A story is not a contract. It is a conversation starter. The details of how a capability is delivered should be negotiable between the BA, the Product Owner, and the development team until the moment the story enters the sprint. Stories that are written as rigid specifications before that conversation has happened often contain design decisions that constrain the team unnecessarily. This does not mean stories should be vague. It means the acceptance criteria are the contract. The story is the context.
- **Valuable:** Every story should deliver identifiable value to a user or to the business. If you cannot articulate why a story matters, that is a signal that it may be a technical task dressed up as a user story, or a fragment of a larger story that has been broken down too granularly to have standalone value. Technical tasks have a place in a backlog. But they should be identified as technical tasks, not formatted as user stories they do not resemble.
- **Estimable:** The development team must be able to estimate the effort involved in completing the story. If they cannot, it is usually because the story is too large, too vague, or contains an unknown that needs to be resolved before estimation is possible. A story the team cannot estimate is a story that should not go into sprint planning. When a story is consistently inestimable, that is useful information. It usually points to a gap in the requirements that the BA needs to fill before the story is refined further.
- **Small:** Stories should be small enough to be completed within a single sprint, with room for testing. The exact size depends on the team's velocity, but as a general rule, if a story takes more than half a sprint to complete, it is a candidate for splitting. Splitting stories is a skill in itself. The goal is not to create fragments. It is to find the natural seams in a piece of work where genuinely independent, independently valuable sub-stories live. Splitting a story by removing acceptance criteria to make it look smaller is not splitting. It is hiding incompleteness.
- **Testable:** A story without testable acceptance criteria cannot be completed. Full stop. If the team cannot tell you when the story is done, the story is not ready for a sprint. Every story must have acceptance criteria that describe observable, verifiable behaviours the system must exhibit. This is the BA's primary quality gate before a story is refined.

## Acceptance Criteria in Given-When-Then Format

Acceptance criteria are the conditions that must be met for a story to be considered complete. They are the contract between the BA, the Product Owner, and the development team. They are also the input from which the test team writes their test cases.

The Given-When-Then format is the most effective way to write acceptance criteria because it forces the writer to specify three things: ***the context in which the behaviour occurs, the action or event that triggers it, and the observable outcome that results.***

***Given \[a specific context or precondition\], When \[a specific action or event occurs\], Then \[a specific, observable outcome results\].***

The key word in that structure is observable. The "Then" clause must describe something a tester can verify against the live system without making a judgement call. If the tester has to decide whether the outcome meets the criterion, the criterion is not specific enough.

Here is a weak acceptance criterion: *The system should display an appropriate error message when the user enters invalid data.*

What is an appropriate error message? Who decides? What counts as invalid data in each field? A tester cannot verify this consistently.

Here is the same criterion written properly: *Given a user is on the registration form, When they enter a date of birth that would make them under 18 years old and click Submit, Then the system displays the message "You must be 18 or over to register" in red text directly below the date of birth field, and the form is not submitted.*

That is testable. The tester knows exactly what action to perform, exactly what to look for, and exactly how to determine whether the criterion has been met.

## Writing for Edge Cases

Most user stories describe the happy path. The normal flow, where everything goes as expected. And most development teams build the happy path competently. Where systems fail is in the edge cases, the exception handling, the scenarios that happen less frequently but that users encounter regularly enough to matter.

Every story should have acceptance criteria that cover at least three categories of behaviour.

1. **The happy path**: what happens when everything goes correctly.
2. **The error states**: what happens when the user does something incorrect, including the specific messages and behaviours the system must exhibit.
3. **And the boundary conditions**: what happens at the edges of the valid range, where the most common assumptions break down.

If you find yourself writing only happy-path acceptance criteria, ask yourself one question for every story: what happens when this goes wrong? The answer almost always reveals requirements that were missing.

## Five Story-Writing Mistakes That Stop Development Teams

1. **The story that is actually an epic:** A story that will take three sprints to complete is not a story. It is an epic that has not been broken down. Stories of this size create sprint planning problems, mid-sprint confusion, and velocity that is impossible to track. If a story cannot be completed and tested within one sprint, split it.
2. **Acceptance criteria written as tasks**: "Update the user table in the database" is an implementation task. It tells the developer what to do but gives the tester nothing to verify. Acceptance criteria must always describe observable system behaviour from a user perspective, not developer actions.
3. **Missing the "so that" clause**: Stories written without a meaningful value statement leave the development team without the context they need to make good decisions. When the implementation hits a design choice, the team who understands why they are building a feature makes better decisions than the team who only knows what to build.
4. **No edge case coverage**: A story with only happy-path acceptance criteria is a story that will generate defects. Edge cases are not optional extras. They are the requirements that distinguish a system that works in a demo from a system that works in production.
5. **Stories written for the sprint rather than the user**: When stories are written to fit sprint capacity rather than to represent genuine user value, the result is a backlog full of fragments that nobody outside the project team can understand. Write stories for the user. Split them for the sprint. Not the other way around.

***Go out and be successful.***

## Oluwatosin Ogunkoya | Flotog BA Insights | www.flotogbainsights.com

*Tomorrow: Backlog Refinement and Sprint Ceremonies. What the BA owns in each ceremony, what a genuinely productive refinement session looks like, and what breaks when the BA is not actively involved.*
