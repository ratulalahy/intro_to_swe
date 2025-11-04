---
title: "Milestone 5: Testing and Coverage"
description: Unit testing, integration testing, and coverage analysis
---

## Overview
Your {span .text-gradient-todo}`**To-Do List**` app is now feature-rich, visually appealing, and architecturally sound—this milestone focuses on **proving that your system works reliably** through comprehensive testing.  

Over the next week, your goal is to design, implement, and execute a **well-structured test suite**. This milestone emphasizes **unit testing** for individual components, **integration testing** for key workflows, and a **coverage report** that demonstrates how much of your codebase is verified through automated tests.

This is not a feature-building or refactoring sprint—it’s a **validation sprint**. You will measure how robust your system is through automated testing and ensure that your application performs as intended under normal and edge conditions. The result will be a project that’s not only functional, but confidently tested and ready for the final refinement phase.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Develop and execute automated tests** using unit and integration testing.
- **Measure and report code coverage** using tools like `pytest-cov` or `coverage.py`.
- **Analyze test results** to assess the completeness and reliability of your codebase.

---

## Tasks and Instructions

### 1. Test Suite Development

- Create **20+ meaningful test cases** under `/task_manager_app/tests`, covering both:
  - **Unit Tests:** For individual functions, classes, and modules.
  - **Integration Tests:** For workflows involving multiple components (e.g., adding, updating, deleting tasks).

- Ensure your tests cover typical, edge, and invalid scenarios.

- Run all tests successfully using `pytest` or `unittest` or other testing frameworks.

### 2. Test Coverage Report

- Use **pytest-cov** or **coverage.py** to generate a coverage report.

- Save the report(s) in `/task_manager_app/docs/tests/`, including:
  - Coverage percentage (aim for ~70% or higher).
  - Explanation of which areas are well-tested and which need improvement.
  - .html(s)/.md(s)/screenshot(s) of the coverage summary.

- Include at least one short discussion about key findings from your testing process.

### 3. Documentation Updates

- Update the project’s **README** to include:
  - Instructions for running tests.
  - Tools used (pytest, pytest-cov, coverage.py).
  - Coverage summary or badge (optional).

### 4. Team Meeting Execution

- Hold a meeting to discuss testing results, identify weak spots, and plan for the final milestone.
- Document minutes in `/task_manager_app/docs/meeting_minutes/milestone_5/week_1.md`:
  - Attendance, agenda, decisions, and follow-up actions.

### 5. GitHub Project Board

- Add new testing-related tasks (unit, integration, coverage).
- Link tasks to relevant commits and pull requests.
- Keep the board updated for traceability.

### 6. Individual Reflections

- Submit a `.md` file via Canvas with release and project board links, along with reflection answers (_see [Submission Checklist](#submission-checklist)_).

### 7. GitHub Release

- **Submission:** Create a release (`v5.0`, tagged `milestone5`), summarizing:
  - Testing coverage achieved.
  - Highlights from your testing approach.
  - Any major bugs discovered and fixed.
- Include links to documentation and coverage reports in the release notes.

---

## Submission Checklist

### Submit via Canvas:

- A `.md` file containing:

  - GitHub release link (e.g., `https://github.com/user_name/project_name/releases/tag/v5.0`)
  - GitHub Project board link (e.g., `https://github.com/user_name/project_name/projects/1`)

  **Reflection answers:**
  - **Contribution to the project (50–100 words):** Describe your specific testing-related contributions.
  - **How did testing improve your code quality? (50–100 words):** Explain how tests helped identify issues or ensure correctness.
  - **What was your testing strategy? (50–100 words):** Describe your mix of unit and integration tests.
  - **Reflection about this milestone (50 words):** Share your experience and learning about testing and reliability.

---

### Repository Documents

All documents must be checked into the GitHub repository under `/task_manager_app/docs` and linked in the release notes.

Use checkboxes to confirm completion:

- [ ] **Coverage Report(s)** (`/task_manager_app/docs/tests/`)  
  - Metrics, screenshots, or summary table.
  - (Possible .html/.md files)

- [ ] **Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/milestone_5/`)  
  - Attendance, discussion notes, and follow-up actions.

---

### GitHub Releases
  - [ ] Progress Check  
  - [ ] Final Submission  

### GitHub Project Board
  - [ ] Updated with all testing-related tasks.

---

## Evaluation Rubric (60 Points)

| Criteria                      | Points | Description                                   |
| :----------------------------- | :------: | :-------------------------------------------- |
| **Test Suite (Unit & Integration)** | 25 | Quality, variety, and reliability of tests     |
| **Coverage Report**            | 15 | Clear report with analysis and interpretation |
| **Documentation Updates**      | 5  | README, and report properly updated       |
| **Tool Setup & Releases**      | 5  | Coverage tool used, clean release notes       |
| **Meeting Minutes**            | 5  | Team collaboration documented                 |
| **Individual Reflections**     | 5  | Clear insights on testing process             |

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
- Update GitHub Project board with test tasks for traceability.
- Use commit messages like "Refactor duplication in task class".
- Ensure releases have detailed changelogs.

> **Refine your project to peak quality—rigorous testing, robust error handling, and code smell removal fortify your engineering prowess.**


### All Project Milestones
1. [Milestone 1](milestone-1)
2. [Milestone 2](milestone-2)
3. [Milestone 3](milestone-3)
4. [Milestone 4](milestone-4)
5. 📌 **[Milestone 5](milestone-5-1)**
6. [Presentation](milestone-5-2)
7. [Final Submission](milestone-final-submission)