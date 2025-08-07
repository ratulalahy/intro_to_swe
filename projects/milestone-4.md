---
title: "Milestone 4: Design Patterns & Feature Integration"
description: Enhancement of core application with advanced features and third-party integrations
---

## Overview

With your {span .text-gradient-todo}`**To-Do List**` app now architected for modularity and enhanced with a GUI, the next step is to infuse it with sophisticated design patterns—like a master craftsman selecting the perfect tools to elevate a creation from functional to elegant and extensible. In this milestone, you'll select 3-5 design patterns from those covered in the course and apply them thoughtfully to implement 3-7 new features from your product backlog. This isn't just about adding functionality; it's an opportunity to refine code quality, ensuring patterns integrate seamlessly with your existing MVC structure, SOLID principles, and UI elements. By weaving these patterns in only where they naturally solve specific design challenges, you'll make your app more maintainable, scalable, and resilient—mirroring how professional teams evolve software to handle growing complexity while keeping the codebase clean and intuitive. Remember, forcing patterns where simpler solutions suffice can lead to unnecessary complexity; focus on genuine improvements.

By the end of this milestone, your app will boast new features powered by design patterns, validated manually for now (with testing on the horizon), setting a strong stage for quality assurance in the next phase. Continue using GitHub releases to version your progress, emphasizing iterative improvements.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Select and apply design patterns** to solve specific problems in your codebase, avoiding forced applications.
- **Implement new features** from the backlog, integrating them with existing architecture (MVC), principles (SOLID), and UI.
- **Improve code quality** by identifying opportunities for patterns to enhance maintainability, flexibility, and reusability without overcomplicating.
- **Ensure natural integration** of patterns, evaluating if they truly add value or if simpler alternatives are better.
- **Manually validate** new features and pattern implementations to confirm functionality and improvements.
- **Reflect on design decisions** to articulate how patterns elevate your software engineering practices, including when not to use them.

---

## Tasks and Instructions

### 1. Team Meetings
Foster collaboration to plan and review pattern adoption and feature implementation.

- Conduct team meetings for selection and drafting (e.g., mapping patterns to backlog features) and integration review (e.g., code walkthroughs, issue resolution).
- Develop detailed agendas covering feature prioritization from backlog, pattern selection criteria (e.g., does it solve a real problem? Is there a simpler way?), integration strategies with MVC/SOLID/UI, and validation planning.
- Assign specific tasks with owners, deadlines, and milestones; encourage role rotation as per your schedule.
- Promote active discussion on avoiding forced pattern use—challenge each choice to ensure it addresses a genuine code smell or need.
- Document in:
  - `/task_manager_app/docs/meeting_minutes/milestone_4/week_1.md`
  - `/task_manager_app/docs/meeting_minutes/milestone_4/week_2.md`

### 2. Implement New Features
Expand your app by adding backlog items, leveraging patterns for better design where appropriate.

- Prioritize and implement 3-7 features from the refined backlog (e.g., advanced sorting, notifications, external integrations).
- Integrate design patterns _only if they naturally fit_: Ensure patterns reduce complexity rather than add it.
- Enhance with prior elements: Update GUI for new interactions, apply SOLID to keep changes isolated, and refine UML diagrams if patterns alter structure.
- Focus on code quality: Refactor as needed to avoid duplication, improve readability, and ensure patterns add value without over-engineering—review for signs of forced fits like unnecessary classes.
- Place new code in appropriate MVC folders.

### 3. Select and Draft Design Patterns
Choose patterns that align with your app's needs and sketch their application.

- Review the patterns from Chapter 6 and identify 3-5 that could address specific issues in your codebase or new features (e.g., handling varying behaviors, managing single instances, adapting interfaces).
- For each, evaluate: What problem does it solve? Is it necessary, or would a basic implementation work? Avoid forcing patterns—document alternatives considered.
- Draft initial implementations or pseudocode, ensuring compatibility with MVC (e.g., patterns in Controller or Model) and SOLID.
- Document selections, rationale, and non-forced justification in `/task_manager_app/docs/design_patterns_selected.md` (include why each was chosen over simpler options).


### 4. Update UML Modeling
Reflect pattern integrations in your diagrams for accurate documentation.

- Update class diagrams to include pattern-specific elements (e.g., interfaces and implementations).
- Revise sequence diagrams for new feature flows involving patterns.
- Ensure consistency with overall architecture; use draw.io for edits.
- Save updates to `/task_manager_app/docs/uml_class.md` and `/task_manager_app/docs/uml_sequence.md`.

### 5. Manual Validation
Verify that new features and patterns work as intended.

- Create 10+ validation scenarios targeting new features, pattern behaviors, and integrations (e.g., demonstrating flexibility from a pattern).
- Execute manually via GUI/CLI; document inputs, expected vs. actual outputs, and any issues resolved.
- Highlight how patterns improve scenarios without forcing (e.g., easier maintenance if applicable, or note if a pattern was avoided).
- Save in `/task_manager_app/docs/validation_scenarios.md` (append or update with Milestone 4 section, including screenshots).

### 6. Individual Reflections
- Submit a `.md` file via Canvas with links and reflection answers (see Submission Checklist).

### 7. GitHub Releases
- **Progress Check (End of Week 10):**
  - Create a minor release: `v3.1`
  - Tag example: `milestone4-progress-v3.1`
  - Include pattern selections, feature drafts, initial code implementations, and updated UML.
  - Submit the release URL via Canvas
> **Warning** Missing this release = 20% deduction from total milestone score

- **Final Submission (End of Week 11):**
  - Create a major release: `v4.0`
  - Tag example: `milestone4`
  - Include final code, documents, validation, and changelog detailing new features, patterns, and improvements since `v3.1`.
  - Submit the final release URL via Canvas

---

## Submission Checklist

### Submit via Canvas:

#### A `.md` file containing:
- [ ] **GitHub release link** (e.g., `https://github.com/user_name/project_name/releases/tag/v4.0`)
- [ ] **Zenhub board link** (e.g., `https://app.zenhub.com/workspaces/...`)
- [ ] **Reflection answers:**
  - **Your Contribution to the project (50–100 words):** Describe your role (e.g., selecting and implementing a pattern).
  - **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate and explain collaboration.
  - **What design patterns have you adopted, why were they chosen over simpler alternatives, and how do they improve code quality without being forced? (50–100 words):** Discuss specific patterns, their fit, benefits, and avoidance of over-engineering.
  - **Feedback on this milestone (50 words):** Suggest improvements.

### Repository Documents
- [ ] **Selected Design Patterns** (`/task_manager_app/docs/design_patterns_selected.md`)
- [ ] **Updated UML** (`/task_manager_app/docs/uml_class.md`, `/task_manager_app/docs/uml_sequence.md`)
- [ ] **Validation Scenarios** (`/task_manager_app/docs/validation_scenarios.md`)
- [ ] **Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/milestone_4/week_1.md`)

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **Team Meetings**          | 10     | Detailed agendas and actionable minutes, emphasizing natural pattern use |
| **Design Pattern Selection & Drafts** | 20    | Thoughtful choice of 3-5 patterns with strong rationale and alternatives considered |
| **Feature Implementation & Integration** | 30   | 3-7 new features integrated naturally with patterns, MVC/SOLID/UI; no forced applications |
| **UML Updates**            | 10     | Accurate reflections of patterns in diagrams  |
| **Manual Validation**      | 20     | 10+ comprehensive scenarios with proof        |
| **Individual Reflections** | 10     | Insightful discussion on patterns, alternatives, and improvements |

*Penalties: 20% for missing progress check after first week. Additional deductions for evidence of forced pattern use.*

---

## Resources

### Textbook

- [Chapter 6: Design Patterns](https://softengbook.org/chapter6)

### Beginner Friendly Resources
- [Design Patterns in Python](https://refactoring.guru/design-patterns/python)
- [Understanding Design Patterns](https://www.youtube.com/watch?v=v9ejT8FO-7I)

### Tutorials

- [Applying Design Patterns](https://realpython.com/python-design-patterns/)
- [Common Pitfalls in Patterns](https://www.geeksforgeeks.org/design-patterns-tutorial/)
- [When Not to Use Design Patterns](https://stackoverflow.com/questions/326134/good-or-bad-examples-of-when-to-use-design-patterns)

### Best Practices

- Apply patterns only to solve identified problems; simpler code is often better.
- Review for over-engineering: If a pattern adds more complexity than value, reconsider.
- Test pattern integrations incrementally to maintain functionality.
- Update Zenhub issues as features are implemented.
---


### All Project Milestones
1. [Milestone 1: Project Initiation](milestone-1)
2. [Milestone 2: Requirements Engineering](milestone-2)
3. [Milestone 3: System Modeling](milestone-3)
4. **[Milestone 4: Advanced Features](milestone-4)** ← Current
5. [Milestone 5.1: Final Presentation](milestone-5-1)
6. [Milestone 5.2: Final Submission](milestone-5-2)
7. [Final Project Submission](final-submission)
