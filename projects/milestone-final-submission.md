---
title: "Final Project Submission: Polish and Issue Resolution"
description: Final refinement and organization of project repository based on feedback
---

# Final Project Submission: Polish and Issue Resolution

## Overview

As the culminating step in your Introduction to Software Engineering course project, this final submission focuses on refining your {span .text-gradient-todo}`**To-Do List**` application based on feedback from Milestone 5.2 (presentation and retrospective). This phase is dedicated to addressing identified issues, reorganizing project artifacts for clarity and accessibility, and ensuring all components are properly placed and documented. Emphasizing professional polish and maintainability, you will apply insights from the semester to produce a cohesive, production-ready repository. This mirrors post-review revisions in industry workflows, where teams iterate to resolve defects and optimize structure before archiving or handover.

By completing this submission, your team will deliver a fully resolved, well-organized project repository, demonstrating attention to detail and commitment to quality engineering standards.

## Learning Objectives

Upon successful completion of this final submission, you will be able to:

- Systematically identify and resolve technical, documentation, and structural issues from prior feedback, enhancing project integrity.
- Reorganize repository contents, including the README file, to improve navigability and usability for external reviewers or future maintainers.
- Strategically add or relocate content and documents (e.g., diagrams, reports) to appropriate locations, ensuring comprehensive and logical organization.
- Update tools and releases to reflect final changes, maintaining a complete version history.
- Apply best practices in project closure, such as clear changelogs and verification of resolutions.

## Deliverables

Submit the GitHub release link for the final submission via the course platform. Commit all updates to the repository, linking resolved items in release notes. Focus on fixes and organization—no new features or reflections; reference textbook Chapters 9 (Refactoring for code fixes) and 10 (DevOps for tool updates) as needed.

### 1. Issue Resolution Log
**Format:** Markdown or PDF in repo/docs/final-resolution.md, 1-2 pages

- List of issues from Milestone 5.2 feedback (e.g., "Bug in task search function," "Incomplete UML diagram labels," "Disorganized docs folder").
- For each: Description, resolution steps taken (e.g., "Fixed via commit XYZ: Adjusted search algorithm"), and verification (e.g., "Tested with new unit test; coverage increased to 85%").

### 2. Reorganized README File
**Format:** README.md in repo root

- Updated structure: Sections for project overview, installation/setup, usage guide (with examples), architecture overview (linking to diagrams), testing instructions, and contribution guidelines.
- Ensure brevity and clarity; include badges (e.g., for CI status) if applicable.

### 3. Content and Document Additions/Relocations
**Format:** Throughout repo

- Place artifacts in logical folders (e.g., /docs for SRS, UML, reports; /src for code; /tests for test files).
- Add missing content if necessary (e.g., a consolidated architecture diagram PDF in /docs, or a setup script in /scripts).
- Examples: Move stray UML images to /docs/uml/; add a LICENSE file if absent.

### 4. Updated Codebase and Tests
**Format:** In repo/src and /tests

- Fixes for any code-related issues (e.g., refactor duplicated logic, patch bugs).
- Updated tests to validate resolutions.

### 5. Tool Finalization

- **Zenhub:** Close all open issues; archive boards if complete.
- **GitHub:** Final commits; ensure CI/CD runs successfully on updates.

### 6. GitHub Release

Major version (e.g., v6.0) tagged "final-submission". Include resolution log and key updates in notes; changelog summarizing fixes (e.g., "Resolved 5 issues from presentation feedback; reorganized repo structure"). Submit the release URL—no separate ZIP; instructor reviews via repo.

**Example GitHub Release Creation:**
- Repo > Releases > New release.
- Tag: "final-submission-v6.0".
- Title: "Final Project Submission".
- Description: "- Issue Resolution Log: [docs/final-resolution.md] \n - Updated README: [README.md] \n - Changelog: Fixed bugs in search; relocated docs to /docs folder."

## Tasks and Instructions

Base work on Milestone 5.2 feedback; use a dedicated branch like "final-fixes" for changes.

### 1. Issue Identification and Prioritization
- Compile feedback from presentation/retrospective/instructor comments.
- Categorize (e.g., code bugs, doc gaps, structure issues); prioritize critical fixes.

### 2. Code and Test Fixes
- Address bugs/refactors; rerun tests and CI pipeline to confirm.
- Commit with messages like "Fix: Resolved search bug per feedback."

### 3. Repository Reorganization
- Audit folder structure: Standardize (e.g., /src/main.py for entry point).
- Relocate files (e.g., move old reports to /docs/archive if redundant).

### 4. README Enhancement
- Rewrite for completeness: Include quick-start, dependencies, and links to key files.
- Add sections like "Known Issues" (if any remain) or "Future Work."

### 5. Content Additions
- If gaps exist (e.g., missing test coverage doc), create and place them appropriately.
- Ensure all semester deliverables are accessible (e.g., link milestones in README).

### 6. Verification and Release
- Test full app; confirm no regressions.
- Create the final release with detailed notes.

## Evaluation Rubric

Total: **20 points**. Focus on resolution thoroughness and organization.

| Criteria | Points | Description |
|----------|--------|-------------|
| **Issue Resolution** | 10 | All feedback addressed; detailed log with verifications. |
| **README Reorganization** | 5 | Clear, comprehensive README; user-friendly and professional. |
| **Content/Doc Placement** | 5 | Logical structure; additions fill gaps effectively. |
| **Code/Test Updates** | 5 | Fixes implemented; tests pass without issues. |
| **Tool & Release** | 5 | Final updates; informative release notes. |


## Resources and Best Practices


### Tool Guides
- [Basic writing and formatting syntax by GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [The Ultimate Guide to Writing a Great README.md for Your Project](https://medium.com/@kc_clintone/the-ultimate-guide-to-writing-a-great-readme-md-for-your-project-3d49c2023357)
- [Make a README](https://www.makeareadme.com/)
- [Awesome README](https://github.com/matiassingers/awesome-readme)

### Tips for Excellence
- **Thoroughness:** Cross-check against feedback; test on fresh clone.
- **Professionalism:** Use consistent naming; add a project logo if desired.
- **Avoid Pitfalls:** Backup before reorganizing; verify links.

### Support
- Final office hours for clarification.

---

**This submission perfects your project—meticulous fixes ensure a standout portfolio piece.**

## Navigation

- **Previous:** [Milestone 5.2: Final Submission](milestone-5-2)
- **Next:** [Project Milestones Overview](index)

### All Project Milestones
1. [Milestone 1: Project Initiation](milestone-1)
2. [Milestone 2: Requirements Engineering](milestone-2)
3. [Milestone 3: System Modeling](milestone-3)
4. [Milestone 4: Advanced Features](milestone-4)
5. [Milestone 5.1: Final Presentation](milestone-5-1)
6. [Milestone 5.2: Final Submission](milestone-5-2)
7. 📌 **[Final Project Submission](final-submission)**
