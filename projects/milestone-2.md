---
title: "Milestone 2: Requirements Engineering and MVP Development"
description: Requirements engineering, use case modeling, and console-based MVP implementation
---

# Milestone 2: Requirements Engineering and MVP Development

---

## Overview

> Building on the solid foundation established in Milestone 1, **Milestone 2** advances your To-Do List application project by delving into requirements engineering. This phase focuses on formalizing user needs through a comprehensive Software Requirements Specification (SRS), visualizing interactions via use case diagrams, and implementing a Minimum Viable Product (MVP) as a console-based prototype in Python. Emphasizing precision in documentation and early validation, you will refine your product backlog, integrate feedback from prior planning, and ensure traceability across tools. This milestone aligns with professional practices in requirements elicitation and MVP development, as seen in agile teams at leading tech firms and academic programs.

By completing this milestone, your team will have a detailed SRS, actionable use cases, and a functional console MVP with basic testing, enabling iterative enhancements while mitigating scope risks.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Elicit, analyze, and document** functional and non-functional requirements for your To-Do List application, ensuring completeness and stakeholder alignment.
- **Create use case diagrams** and descriptions to model system interactions, applying UML standards for clear communication.
- **Develop and test** a console-based MVP in Python, demonstrating core functionalities and basic quality assurance.
- **Update and maintain** project artifacts in `Zenhub` and `GitHub`, linking requirements to tasks for enhanced traceability.
- **Incorporate Agile feedback loops** through progress checks and releases, promoting continuous improvement and team synchronization.

---

## Deliverables

> Submit links to your `GitHub` releases (for progress check and final milestone) via the course platform. Host all documents and code in the repository, referencing them in release notes. Use professional formatting, citing textbook examples where relevant (e.g., SRS templates from Chapter 3).

### 1. **Updated Software Requirements Specification (SRS)**
**Format:** *PDF or Markdown* in repo, 3-5 pages  

- Refined from Milestone 1 draft: Include introduction, scope, functional requirements (e.g., task CRUD operations), non-functional requirements (e.g., usability, performance), and assumptions/constraints.
- Incorporate 15+ user stories (expanded from prior), prioritized with acceptance criteria.

### 2. **Use Case Documentation**
**Format:** *PDF or Markdown* in repo, 2-3 pages  

- 5+ detailed use cases, each with actors, preconditions, postconditions, main flow, and alternatives/extensions.
- Accompanying UML use case diagram (created with tools like `draw.io` or `Lucidchart`), exported as an image in the repo.

### 3. **Console-Based MVP Implementation**
**Format:** Python code in repo/`src` folder  

- Basic console interface implementing core features (e.g., add/view/edit/delete tasks, simple prioritization).
- Include at least 3-5 unit tests (using `unittest` or `pytest`) for key functions.

### 4. **Tool Updates**

- **Zenhub board:** Updated backlog with linked issues for new requirements; evidence of sprint progress (e.g., moved tasks).
- **GitHub:** Commits for code and docs; updated `README` with MVP overview and setup instructions.

### 5. **Team Meeting Minutes**
**Format:** *PDF or Markdown* in repo, 1 page  

- Log from at least one meeting: Attendance, agenda (e.g., SRS review), decisions, and action items.

### 6. **Individual Reflections**
**Format:** Submitted separately via online form  

- Responses to: (1) How did requirements analysis shape your understanding of the To-Do List's user needs? (2) What improvement in your Python coding or testing skills do you target next?

### 7. **GitHub Releases**

#### Progress Check (Mid-Week)
Minor version release (e.g., `v1.1`) tagged as `"milestone2-progress"`. Include drafts (e.g., partial SRS, initial use case diagram, early code commits). Release notes: Summarize advancements (e.g., "Draft SRS and preliminary console code implemented"). Submit the release URL.

#### Final Milestone Submission (End of Week)
Major version release (e.g., `v2.0`) tagged as `"milestone2"`. Link all deliverables in notes, with a changelog detailing refinements from the progress check (e.g., "Added use case diagrams and basic tests"). Submit the release URL.

**Example GitHub Release Creation:**  
```markdown
- In repo > Releases > New release.
- Tag: "milestone2" (final) or "milestone2-progress-v1.1" (check).
- Title: "Milestone 2 Final" or "Milestone 2 Progress".
- Description: "- SRS Document: [repo link] \n - MVP Code: [src folder link] \n - Changelog: Refined user stories based on feedback."
```

---

## Tasks and Instructions

Build directly on Milestone 1 artifacts. Commit all work to `GitHub`, using branches for features (e.g., `"feature/srs-draft"`).

### 1. **Requirements Refinement**
- Review Milestone 1 backlog; elicit additional details via team discussions or mock user interviews.
- Structure SRS per textbook Chapter 3: Use templates for sections, ensuring traceability to user stories.

### 2. **Use Case Development**
- Model key interactions (e.g., "Add Task" use case).
- Draw UML diagram; validate against requirements for completeness.

### 3. **MVP Implementation**
- Code a console prototype in Python (e.g., command-line menu for task operations).
- Add basic tests (e.g., `test_task_addition()` asserting expected output).

### 4. **Tool Synchronization**
- **Zenhub:** Link new issues to Git commits; move completed tasks.
- **GitHub:** Merge branches after reviews; ensure code runs without errors.

### 5. **Sprint and Meeting Management**
- Plan tasks for Milestone 3; hold meetings to review progress.
- Document sessions professionally.

### 6. **Progress Check and Release Management**

#### By Mid-Week (Progress Check)
Achieve 50% completion (e.g., SRS draft, partial code/tests). Create minor release with notes on status. Expect: Visible commits, draft docs in repo, `Zenhub` updates for feedback.

#### By End of Week (Final Submission)
Polish all items, commit finals, create major release. Expect: Executable MVP code, complete SRS/diagrams, integrated tools. Submit release URL; instructor reviews via repo.

---

## Evaluation Rubric

Assessed for rigor, clarity, and integration (total: **100 points**). Prioritize textbook alignment and code quality.

| **Criteria**              | **Points** | **Description**                                                                 |
|---------------------------|------------|---------------------------------------------------------------------------------|
| **SRS Documentation**     | 25         | Thorough, structured SRS with refined stories and requirements; professional format. |
| **Use Case Artifacts**    | 20         | Detailed use cases and accurate UML diagram; models system interactions effectively. |
| **MVP Implementation**    | 25         | Functional console code with basic tests; demonstrates core features reliably.   |
| **Tool Updates & Releases**| 15         | Seamless `Zenhub`/`GitHub` updates; proper versioning with informative releases. |
| **Meeting Minutes**       | 10         | Concise, actionable documentation; reflects collaborative refinement.            |
| **Individual Reflections**| 5          | Perceptive insights; connects to requirements engineering concepts.              |

> **Note:** Penalties for late work (10% daily). Non-functional code or missing links require fixes.

---

## Resources and Best Practices

### Textbook Integration
- Chapter 3 (*Requirements: User Stories, Use Cases, MVP*) for SRS/use cases; Chapter 8 (*Testing basics*) for early tests.

### Tool Guides
- UML tools like `PlantUML`; `pytest` docs for testing. Textbook Chapter 4 (*Models*) for UML.

### Tips for Excellence
- **User-Centric Focus:** Base stories on real scenarios; validate with peers.
- **Code Quality:** Follow PEP 8; include docstrings/comments.
- **Innovation:** Plan To-Do List extensions (e.g., due dates) while keeping MVP minimal.
- **Avoid Pitfalls:** Ensure tests pass; link everything in releases for easy review.

### Support
- TA sessions for UML/coding; forums for backlog ideas.

---

**Leverage this milestone to validate your vision—rigorous requirements now prevent rework later.**

## Navigation

- **Previous:** [Milestone 1: Project Initiation](milestone-1)
- **Next:** [Milestone 3: System Modeling](milestone-3)

### All Project Milestones
1. [Milestone 1: Project Initiation](milestone-1)
2. **[Milestone 2: Requirements Engineering](milestone-2)** ← Current
3. [Milestone 3: System Modeling](milestone-3)
4. [Milestone 4: Advanced Features](milestone-4)
5. [Milestone 5.1: Final Presentation](milestone-5-1)
6. [Milestone 5.2: Final Submission](milestone-5-2)
7. [Final Project Submission](final-submission)
