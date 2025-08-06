---
title: "Milestone 5: Testing and Refactoring"
description: Testing, robustness, and code smell removal
---

# Milestone 5: Testing and Refactoring

---

## Overview
Envision your {span .text-gradient-todo}`**To-Do List**` app as a sleek sports car nearing the finish line—now it's the thrilling test drive and tune-up to ensure it handles curves with grace, inspired by how Formula 1 teams refine engines for peak performance and reliability. Milestone 5 channels that precision, motivated by industry tales where thorough testing saved projects from disaster, like debugging a banking app to prevent user losses or refactoring e-commerce code for seamless shopping experiences. In this satisfying phase, relatable to fixing a glitchy personal device that frustrates your daily routine or optimizing a recipe after trial runs to delight guests, you'll craft 20+ tests (unit for isolated functions, integration for flows, TDD to build confidently) aiming for 80%+ coverage, and refactor code smells (e.g., simplifying complex loops or removing redundancies) to make your app faster and easier to maintain. Updating the SRS with test summaries and refining the class diagram if needed keeps everything polished, like detailing a car before a road trip.

By the end, your project will roar with confidence, delivering the engineer's rush of turning potential flaws into strengths, creating an app that's not just functional but dependable for real-world use, like a trusted tool in a busy professional's arsenal.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Develop and execute tests** (unit/integration, TDD) with coverage analysis.

- **Identify and refactor code smells** for improved quality.

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

- Submit a `.md` file via Canvas with release/Zenhub links and reflection answers (see Submission Checklist).

### 6. GitHub Releases

- **Progress Check (One Week):** Create a minor release (`v4.1`, tagged `milestone5-progress-v4.1`) with test drafts. Submit URL via Canvas. **Note**: Missing this incurs a 20% penalty.

- **Final Submission (Two Week):** Create a major release (`v5.0`, tagged `milestone5`) with all linked in notes and changelog (e.g., "Achieved 85% coverage; refined class diagram in SRS"). Submit URL via Canvas.

---

## Submission Checklist

### Submit via Canvas:

- A `.md` file containing:

  - GitHub release link (e.g., `https://github.com/user_name/project_name/releases/tag/v5.0`)

  - Zenhub board link (e.g., `https://app.zenhub.com/workspaces/...`)

  - **Reflection answers:**

    - **Contribution to the project (50–100 words):** Describe your specific contributions (e.g., tests, refactoring).

    - **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate collaboration; explain.

    - **How did testing/refactoring improve your code quality? (50–100 words):** Discuss specific gains.

    - **Feedback/comment about this milestone (50 words):** Suggest improvement.

### Repository Documents

All documents must be checked into the GitHub repository under `/task_manager_app/docs` and linked in release notes. Use checkboxes to confirm completion:

- [ ] **Coverage Report** (`/task_manager_app/docs/coverage.md`)

  - Metrics, analysis.

- [ ] **Refactoring Log** (`/task_manager_app/docs/refactoring.md`)

  - Smells fixed, before/after.

- [ ] **Updated SRS** (`/task_manager_app/docs/srs.md`)

  - Test/refactor notes if applicable.

- [ ] **Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/milestone_5/week_1.md`)

  - Attendance, agenda, decisions, action items.

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **Test Suite & Coverage**  | 30     | Comprehensive tests, 80%+ coverage            |
| **Refactoring**            | 25     | Smells fixed, documented improvements         |
| **Document Updates**       | 20     | SRS/test details added, class diagram if needed |
| **Tool Setup & Releases**  | 15     | Updated backlog/README, proper releases       |
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

### Best Practices
- Update Zenhub with test tasks for traceability.
- Use commit messages like "Refactor duplication in task class".
- Ensure releases have detailed changelogs.

> **Refine your project to peak quality—rigorous testing, robust error handling, and code smell removal fortify your engineering prowess.**

## Navigation

- **Previous:** [Milestone 4](milestone-4)
- **Next:** [Milestone 5.2](milestone-5-2)

### All Project Milestones
1. [Milestone 1](milestone-1)
2. [Milestone 2](milestone-2)
3. [Milestone 3](milestone-3)
4. [Milestone 4](milestone-4)
5. **[Milestone 5.1](milestone-5-1)** ← Current
6. [Milestone 5.2](milestone-5-2)
7. [Final Submission](milestone-final-submission)
