---
title: "Milestone 2: Requirements Engineering and MVP Development"
description: Requirements engineering, use case modeling, and CLI-based MVP implementation
---

## Overview

With your project foundation set, it's time to define what your {span .text-gradient-todo}`**To-Do List**` app truly needs—like turning vague ideas into precise specs, just as engineering teams do before building. In this milestone, you'll refine your feature list into structured user stories, create a `Software Requirements Specification (SRS)`, model key elements with `UML diagrams`, select a `Minimum Viable Product (MVP)`, and implement a simple `Command-Line Interface (CLI)` version in Python (e.g., basic task addition, listing, and completion). This draws on requirements engineering and modeling concepts, focusing on clarity and feasibility without advanced design or automated testing—validate manually to ensure it works as intended.

By the end of this milestone, you'll have documented requirements, visual models, and a functional CLI MVP, ready for expansion in later phases. Continue using GitHub releases for versioning.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Elicit and document requirements** using user stories, use cases, and a structured SRS.
- **Model software systems** with UML use case, class diagrams and sequence diagrams to visualize interactions and structure.
- **Define an MVP** by selecting core features and outlining validation approaches.
- **Implement a basic CLI application** in Python, applying requirements and models.
- **Prioritize requirements** using techniques like planning poker for consensus.
- **Manually validate** the MVP to confirm it meets initial requirements.

---

## Tasks and Instructions

### 1. Team Meeting Execution
Align your team on requirements and MVP through focused discussions.

- Hold team meetings with agendas covering backlog refinement, SRS drafting, UML creation, and MVP implementation.
- Assign action items with owners and deadlines.
- Document in:
  - `/task_manager_app/docs/meeting_minutes/milestone_2/week_1.md`
  - `/task_manager_app/docs/meeting_minutes/milestone_2/week_2.md`

### 2. Refine Product Backlog
Transform your initial feature list into actionable, user-focused items.

- Convert features to 15+ user stories in the format: 
    ```plaintext
    As a [user], I want [feature] so that [benefit].
    ```
- Include functional and non-functional requirements; prioritize using planning poker for estimation and consensus.
- Update `/task_manager_app/docs/backlog.md` and **import/refine issues in Zenhub with priorities and assignees.**

### 3. Create SRS

Develop a formal **Software Requirements Specification (SRS)** to document your system's intended functionality and constraints.

- Use the [SRS template](https://github.com/jam01/SRS-Template/blob/master/template.md) as your structural guide. Modify or omit sections only if clearly justified.
- Complete the SRS based on what you have developed so far in **Milestone 1 (vision, backlog, roles)** and **Milestone 2 (user stories, UML diagrams, MVP design)**.
- Your initial SRS should include:

  - **Introduction & Purpose**
  - **Overall Description** (system context, user characteristics, assumptions)
  - **Functional Requirements** (mapped from user stories and backlog)
  - **Non-Functional Requirements** (e.g., usability, performance, platform constraints)
  - **Use Cases or User Interactions** (linked to UML diagrams)
  - **Assumptions and Constraints**
- Reference related artifacts in your documentation (e.g., link specific user stories, diagram files, or backlog items).
- As your project evolves, you are expected to **continuously update this SRS** in future milestones to reflect changes in features, scope, and design decisions.
- Save the document as:

  - `/task_manager_app/docs/srs.md`

> **Tips**: Treat the SRS as a dynamic contract between your team and your users. Keep it aligned with implementation decisions, feedback, and design iterations throughout the course.

### 4. UML Modeling
Visualize your system's interactions and structure.

- Create UML use case diagrams (showing actors like "User" and cases like "Add Task").
- Develop class diagrams for the CLI MVP (attributes, methods, relationships, e.g., Task class with title, due_date).
- Create sequence diagrams for key interactions (e.g., adding a task, listing tasks).
- Use tools like draw.io; export diagrams as images or embeddable files.
- Save to `/task_manager_app/docs/uml_use_case.md` and `/task_manager_app/docs/uml_class.md` (include diagrams and explanations).

### 5. Define and Implement MVP
Focus on core functionality for a testable prototype.

- Select MVP features (e.g., add task, list tasks, mark as complete) based on priorities; outline validation (manual testing scenarios).
- Implement in Python CLI:
  - Create `/task_manager_app/src/task_manager.py` with basic functions (use lists or simple data structures; no database yet).
  - Example: Command-line menu for operations; persist data in a text file if needed.
- Manually validate: Run the app, document sample inputs/outputs in `/task_manager_app/docs/mvp_validation.md`.

### 6. Individual Reflections
- Submit a `.md` file via Canvas with links and reflection answers (see Submission Checklist).

### 7. GitHub Releases
- **Progress Check (End of Week 6):**
  - Create a minor release: `v1.1`
  - Tag example: `milestone2-progress-v1.1`
  - Include drafts of SRS, backlog, UML, and initial code.
  - Submit the release URL via Canvas

> **Warning** Missing this release = 20% deduction from total milestone score

- **Final Submission (End of Week 7):**
  - Create a major release: `v2.0`
  - Tag example: `milestone2`
  - Include final documents, code, and changelog summarizing additions/edits since `v1.1`.
  - Submit the final release URL via Canvas

---

## Submission Checklist

### Submit via Canvas:

#### A `.md` file containing:
- [ ] **GitHub release link** (e.g., `https://github.com/user_name/project_name/releases/tag/v2.0`)
- [ ] **Zenhub board link** (e.g., `https://app.zenhub.com/workspaces/...`)
- [ ] **Reflection answers:**
  - **Your Contribution to the project (50–100 words):** Describe your role (e.g., UML modeling).
  - **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate and explain collaboration.
  - **How does the project vision align with your software engineering goals? (50–100 words):** Connect to personal aspirations.
  - **Feedback on this milestone (50 words):** Suggest improvements.

### Repository Documents
- [ ] **Refined Product Backlog** (`/task_manager_app/docs/backlog.md`)
- [ ] **SRS** (`/task_manager_app/docs/srs.md`)
- [ ] **UML Diagrams** (`/task_manager_app/docs/uml_use_case.md`, `/task_manager_app/docs/uml_class.md`)
- [ ] **MVP Validation** (`/task_manager_app/docs/mvp_validation.md`)
- [ ] **Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/milestone_2/`)

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **Team Meetings**          | 5     | Detailed, actionable minutes                  |
| **Refined Backlog**        | 20     | 15+ user stories, prioritized effectively     |
| **SRS**                    | 15     | Comprehensive and well-structured             |
| **UML Modeling**           | 20     | Accurate use case, class, and sequence diagrams          |
| **MVP Implementation & Validation** | 35    | Functional CLI with manual proof              |
| **Individual Reflections** | 5     | Insightful responses                          |

*Penalties: 20% for missing progress check after first week.*

---

## Resources

### Textbook

- [Chapter 3: Requirements](https://softengbook.org/chapter3)
- [Chapter 4: Models](https://softengbook.org/chapter4)

### Beginner Friendly Resources
- [User Stories Explained](https://www.youtube.com/watch?v=6E0T9uin2dk)
- [UML Basics](https://www.youtube.com/watch?v=UI6lqHOVHic)
- [Building a CLI in Python](https://realpython.com/python-cli-intro/)
- [Working with JSON in Python](https://realpython.com/python-json/)

### Tutorials

- [Writing Effective User Stories](https://www.atlassian.com/agile/agile-at-scale/user-stories)
- [draw.io for UML](https://www.drawio.com/doc/faq/uml-diagrams)
- [Planning Poker Guide](https://www.mountaingoatsoftware.com/agile/planning-poker)
- [SRS Template](https://www.softwaretestinghelp.com/requirements-specification-srs/)
- [Reading and Writing Files in Python](https://realpython.com/read-write-files-python/)

### CLI Enhancement Libraries (Python)

#### [`Rich`](https://rich.readthedocs.io/en/stable/)
A modern Python library for creating visually appealing command-line interfaces, supporting features such as tables, panels, markdown rendering, and syntax highlighting.
- Documentation: [rich.readthedocs.io](https://rich.readthedocs.io/en/stable/)
- Tutorial: [Real Python – Using the Rich Package](https://realpython.com/python-rich-package/)
**Suggested Use**: Enhance the CLI experience with colored output, formatted tables for task lists, and readable sections for prompts or validation results.

#### [`Typer`](https://typer.tiangolo.com/)

A lightweight library for building intuitive command-line interfaces using Python type hints. Built on top of Click, Typer simplifies CLI app development with automatic help generation and command parsing.

- Documentation: [typer.tiangolo.com](https://typer.tiangolo.com/)
- Tutorial: [Quickstart Guide](https://typer.tiangolo.com/tutorial/)
**Suggested Use**: Create structured CLI commands like `add`, `list`, or `complete` for task operations with clear argument handling and auto-generated help menus.

#### [`cmd2`](https://cmd2.readthedocs.io/en/latest/)
An enhanced wrapper around Python's built-in `cmd` module that adds advanced features like tab completion, command history, and argument parsing.
- Documentation: [cmd2.readthedocs.io](https://cmd2.readthedocs.io/en/latest/)
- Tutorial: [Getting Started](https://cmd2.readthedocs.io/en/latest/tutorials/basic_cli.html)
**Suggested Use**: Develop a shell-like interface with interactive commands and command chaining for task management.


---

### All Project Milestones
1. [Milestone 1: Project Initiation](milestone-1)
2. **[Milestone 2: Requirements Engineering](milestone-2)** ← Current
3. [Milestone 3: System Modeling](milestone-3)
4. [Milestone 4: Advanced Features](milestone-4)
5. [Milestone 5.1: Final Presentation](milestone-5-1)
6. [Milestone 5.2: Final Submission](milestone-5-2)
7. [Final Project Submission](final-submission)
