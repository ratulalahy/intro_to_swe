---
title: "Milestone 3: System Modeling and Architecture Implementation"
description: UML modeling, MVC architecture implementation, and wireframe design
---

# Milestone 3: System Modeling and Architecture Implementation

## Overview

Advancing from the requirements and MVP established in Milestone 2, Milestone 3 shifts focus to system modeling and architectural design for your To-Do List application. This phase involves creating detailed UML diagrams to visualize structure and behavior, implementing an MVC (Model-View-Controller) architecture in Python, and integrating wireframe designs for the user interface. By emphasizing modular design and early architectural decisions, you will enhance code maintainability and scalability, reflecting best practices in software engineering curricula at premier universities. This milestone builds on your console MVP, transitioning toward a more structured implementation with basic testing.

Upon completion, your team will have robust models, an MVC-based codebase, refined wireframes, and validated components, positioning the project for advanced feature integration while adhering to design principles.

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- Develop UML diagrams (class, activity, sequence) to model system components, flows, and interactions, ensuring clear documentation and team alignment.
- Apply MVC architecture to organize your To-Do List code, separating concerns for better modularity and testability.
- Design and propose wireframes for the GUI, bridging requirements to visual prototypes.
- Extend the MVP with architectural enhancements and basic tests, demonstrating incremental development.
- Maintain project traceability through updated tools and GitHub releases, incorporating feedback for continuous refinement.

## Deliverables

Submit GitHub release links for progress check and final submission via the course platform. Place all artifacts in the repository (e.g., diagrams in /docs, code in /src), linking them in release notes. Format professionally, referencing textbook Chapter 4 (Models) and Chapter 7 (Architecture) for standards.

### 1. UML Diagrams
**Format:** Exported images/PDF in repo/docs, with source files if applicable

- Class diagram: Depicting entities (e.g., Task, User), attributes, methods, and relationships.
- Activity diagram: Modeling workflows (e.g., task creation process).
- Sequence diagram: Illustrating interactions (e.g., user adding a task via MVC components).
- Brief explanatory notes for each diagram, highlighting key design decisions.

### 2. MVC Architecture Implementation
**Format:** Python code in repo/src

- Refactored codebase from Milestone 2 MVP, structured as Model (data logic, e.g., Task class), View (console/GUI stubs), Controller (handling inputs/outputs).
- Initial integration of wireframe concepts (e.g., mock GUI layout in comments or basic Tkinter setup).

### 3. Wireframe Proposals
**Format:** PDF or image files in repo/docs, 2-3 pages

- Detailed wireframes for key screens (e.g., task list view, add task form), created with tools like Figma or Balsamiq.
- Annotations explaining UX decisions and mapping to requirements.

### 4. Basic Test Cases
**Format:** In repo/tests folder

- Expanded from prior: 5+ unit/integration tests covering MVC components (e.g., test_model_add_task(), using pytest).

### 5. Tool and Documentation Updates

- **Zenhub:** Updated backlog with architecture-related tasks; linked to new issues/commits.
- **GitHub:** Commits for diagrams/code; updated README with architecture overview and run instructions.

### 6. Team Meeting Minutes
**Format:** PDF or Markdown in repo, 1 page

- From at least one meeting: Attendance, agenda (e.g., diagram review), decisions, action items.

### 7. Individual Reflections
**Format:** Submitted separately via form

- Responses to: (1) How has modeling with UML clarified your To-Do List's design? (2) What aspect of MVC implementation challenged you, and how did you overcome it?

### 8. GitHub Releases

#### Progress Check (Mid-Week)
Minor version (e.g., v2.1) tagged "milestone3-progress". Include drafts (e.g., preliminary UML, initial MVC code). Notes: Highlight status (e.g., "Class diagram drafted; MVC skeleton committed"). Submit URL.

#### Final Milestone Submission (End of Week)
Major version (e.g., v3.0) tagged "milestone3". Link all deliverables; changelog from progress check (e.g., "Finalized sequence diagram and added tests"). Submit URL.

**Example GitHub Release Creation:**
- Repo > Releases > New release.
- Tag: "milestone3" (final) or "milestone3-progress-v2.1" (check).
- Title: "Milestone 3 Final" or "Milestone 3 Progress".
- Description: "- UML Diagrams: [docs/uml.pdf] \n - MVC Code: [src/controller.py] \n - Changelog: Incorporated feedback on activity diagram."

## Tasks and Instructions

Leverage prior artifacts; use feature branches (e.g., "feature/uml-modeling") for development.

### 1. UML Modeling
- Analyze SRS/use cases from Milestone 2; create diagrams per textbook Chapter 4 (Class, Activity, Sequence Diagrams).
- Validate for consistency (e.g., classes match requirements).

### 2. MVC Setup
- Restructure code: Model for data, View for presentation, Controller for logic.
- Extend console MVP; prepare for GUI by mocking views.

### 3. Wireframe Design
- Sketch interfaces based on user stories; iterate with team input.

### 4. Testing Integration
- Write tests for new components; aim for 70%+ coverage on core functions.

### 5. Tool Maintenance
- Sync Zenhub issues with diagrams/code; use labels for priorities.

### 6. Meetings and Planning
- Review progress; plan Milestone 4 tasks.

### 7. Progress Check and Release Management

#### Mid-Week
50% done (e.g., draft diagrams, MVC outline). Minor release for feedback. Expect: Committed drafts, partial tests.

#### End of Week
Complete, tested artifacts. Major release. Expect: Runnable code, full diagrams, integrated repo.

## Evaluation Rubric

Total: 100 points. Focus on accuracy, modularity, and documentation.

| Criteria | Points | Description |
|----------|--------|-------------|
| **UML Diagrams** | 25 | Accurate, comprehensive models; well-annotated and UML-compliant. |
| **MVC Implementation** | 25 | Modular code structure; functional enhancements with clean separation. |
| **Wireframes** | 15 | Intuitive designs; annotated and requirements-aligned. |
| **Tests & Quality** | 15 | Effective tests; coverage and error-free execution. |
| **Tool Updates & Releases** | 10 | Updated artifacts; professional releases with changelogs. |
| **Meeting Minutes** | 5 | Action-oriented documentation. |
| **Individual Reflections** | 5 | Reflective and tied to modeling/architecture concepts. |

**Note:** Daily late penalty: 10%. Non-runnable code requires revision.

## Resources and Best Practices

### Textbook Integration
- Chapter 4 (Models: Diagrams) for UML; Chapter 7 (Architecture: MVC) for patterns.

### Tool Guides
- draw.io for UML; Tkinter docs for future GUI.

### Tips for Excellence
- **Consistency:** Ensure diagrams match code.
- **Innovation:** Add unique UML elements (e.g., state diagrams for task lifecycle).
- **Avoid Issues:** Version diagrams; test MVC isolation.

### Support
- Instructor feedback on drafts; online UML examples.

---

**This milestone solidifies your design—precise modeling now enables seamless feature expansion.**

## Navigation

- **Previous:** [Milestone 2: Requirements Engineering](milestone-2)
- **Next:** [Milestone 4: Advanced Features](milestone-4)

### All Project Milestones
1. [Milestone 1: Project Initiation](milestone-1)
2. [Milestone 2: Requirements Engineering](milestone-2)
3. **[Milestone 3: System Modeling](milestone-3)** ← Current
4. [Milestone 4: Advanced Features](milestone-4)
5. [Milestone 5.1: Final Presentation](milestone-5-1)
6. [Milestone 5.2: Final Submission](milestone-5-2)
7. [Final Project Submission](final-submission)
