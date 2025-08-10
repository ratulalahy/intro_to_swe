---
title: "Milestone 5 (Mini Milestone): Testing and Refactoring"
description: Testing, robustness, and code smell removal
---

## Overview
Your {span .text-gradient-todo}`**To-Do List**` app is now feature-rich, visually polished, and architecturally sound—this milestone is about **proving its reliability and fine-tuning it for excellence**. In just one focused week, you’ll put your code under the microscope: building a targeted test suite, aiming for a reasonable coverage percentage (~80%), and refactoring problem areas to ensure the system is clean, maintainable, and ready for real-world use.

This is not a feature-building sprint—it’s a **quality sprint**. You’ll combine unit tests for individual components with integration tests for key flows. Alongside testing, you’ll identify and fix code smells, and add robust error handling with {span .term}`try/except` blocks, simplify complex logic, and eliminate redundancy, keeping changes isolated and well-documented. Updated project artifacts—like adding test summaries to your SRS and refining diagrams if necessary—will ensure your technical documentation matches your final codebase.

By the end of the week, your app will be faster, cleaner, and more dependable, backed by evidence of rigorous testing and thoughtful refactoring. This is your final engineering pit stop before presentation and submission—every adjustment you make now will directly impact how strong and professional your final deliverable feels.


---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Develop and execute tests** (unit/integration, TDD) with coverage analysis.

- **Identify and refactor code smells** for improved quality.

- Add **exception handling** with `try/except` for robustness.

- **Update project documents** (SRS with test details, Zenhub backlog) for consistency.

- **Reflect on quality enhancements** from testing/refactoring.

---

## Tasks and Instructions

### 1. Test Suite Development

- Create 20+ tests for features/patterns in `/task_manager_app/tests` (unit/integration, TDD approach).

- Generate coverage report (80%+, using pytest-cov); include in `/task_manager_app/docs/coverage.md`.

### 2. Refactoring

- Identify 5+ smells (e.g., duplication); refactor in `/task_manager_app/src`.

- Document before/after in `/task_manager_app/docs/refactoring.md`; update SRS with test/refactor notes if relevant.

### 3. Tool Updates

- Update Zenhub backlog with test/refactor tasks; link to commits.

- Enhance GitHub README with test instructions/coverage summary.

### 4. Team Meeting Execution

- Hold meeting to review tests/refactors; assign actions.

- Document in `/task_manager_app/docs/meeting_minutes/milestone_5/week_1.md`.

### 5. Individual Reflections

- Submit a `.md` file via Canvas with release/Zenhub links and reflection answers (_see [Submission Checklist](#a-md-file-containing)_).

### 6. GitHub Releases

- **Submission:** Create a major release (`v5.0`, tagged `milestone5`) with all linked in notes and changelog (e.g., "Achieved <percent>% coverage; refined class diagram in SRS"). Submit URL via Canvas.

---

## Submission Checklist

### Submit via Canvas:

- A `.md` file containing:

  - GitHub release link (e.g., `https://github.com/user_name/project_name/releases/tag/v5.0`)

  - Zenhub board link (e.g., `https://app.zenhub.com/workspaces/...`)

  - **Reflection answers:**

    - **Contribution to the project (50–100 words):** Describe your specific contributions (e.g., tests, refactoring).

    - **How did testing improve your code quality? (50–100 words):** Discuss specific gains.

    - **How did refactoring improve your code quality? (50–100 words):** Discuss specific gains.

    - **How did you improve the robustness of your code? (50–100 words):** Discuss specific changes made for error handling.

    - **Feedback/comment about this milestone (50 words):** Suggest improvement.

### Repository Documents

All documents must be checked into the GitHub repository under `/task_manager_app/docs` and linked in release notes. Use checkboxes to confirm completion:

- [ ] **Coverage Report** (`/task_manager_app/docs/coverage.md`)

  - Metrics, analysis.

- [ ] **Refactoring Log** (`/task_manager_app/docs/refactoring.md`)

  - Smells fixed, before/after.

- [ ] **Robustness Improvements** (`/task_manager_app/docs/robustness.md`)

  - Error handling changes.

- [ ] **Updated SRS** (`/task_manager_app/docs/srs.md`)

  - Test/refactor notes if applicable.

- [ ] **Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/milestone_5/`)

  - Attendance, agenda, decisions, action items.

---

## Evaluation Rubric (60 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **Test Suite & Coverage**  | 20     | Comprehensive tests, 80%+ coverage            |
| **Refactoring and Robustness**            | 20     | Smells fixed, documented improvements         |
| **Document Updates**       | 5     | SRS/test details added, class diagram if needed |
| **Tool Setup & Releases**  | 5     | Updated backlog/README, proper releases       |
| **Meeting Minutes**        | 5      | Detailed notes                                |
| **Individual Reflections** | 5      | Insightful responses                          |

{span .text-red-500}`**Penalties:** 20% for missing progress check.`

---

## Resources
### Textbook
- Chapter 8: Testing (Unit, Coverage, TDD)
- Chapter 9: Refactoring (Smells, Techniques)

### Tutorials
- [Pytest Coverage Guide](https://pytest-cov.readthedocs.io/en/latest/)
- [Refactoring in Python](https://refactoring.com/catalog/)
- [Robustness with Try/Except](https://docs.python.org/3/tutorial/errors.html#handling-exceptions)

### Best Practices
- Update Zenhub with test tasks for traceability.
- Use commit messages like "Refactor duplication in task class".
- Ensure releases have detailed changelogs.

> **Refine your project to peak quality—rigorous testing, robust error handling, and code smell removal fortify your engineering prowess.**

## Navigation

- **Previous:** [Milestone 4](milestone-4)
- **Next:** [Presentation](milestone-5-2)

### All Project Milestones
1. [Milestone 1](milestone-1)
2. [Milestone 2](milestone-2)
3. [Milestone 3](milestone-3)
4. [Milestone 4](milestone-4)
5. 📌 **[Milestone 5](milestone-5-1)**
6. [Presentation](milestone-5-2)
7. [Final Submission](milestone-final-submission)
