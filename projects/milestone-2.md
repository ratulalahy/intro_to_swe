---
title: "Milestone 2: Requirements Engineering and MVP Development"
description: Requirements engineering, use case modeling, and console-based MVP implementation
---

# Milestone 2: Requirements Engineering and MVP Development

---

## Overview

Ever tried organizing a road trip with friends, only to realize halfway through that no one thought about the destination or must-have stops? That's the trap Milestone 2 helps you avoid in your {span .text-gradient-todo}`**To-Do List**` app project, turning vague ideas into a clear path forward. Drawing from everyday frustrations like forgetting deadlines or losing track of chores, this phase motivates you to dive into requirements engineering—think interviewing "users" (your team or peers) to capture what makes an app truly useful, such as quick task addition or smart reminders that mimic real-life productivity hacks used by busy executives or students cramming for exams. You'll create a detailed SRS to outline functional features (like editing tasks) and non-functional ones (like fast loading to fit hectic schedules), sketch UML diagrams to visualize flows (with class diagrams as the star for structuring data like task lists), and build a simple console MVP in Python to test the basics with early tests. It's like prototyping a new gadget in a garage workshop—relatable to how companies like Airbnb iterated their early ideas to match user needs. By the end, you'll have a working prototype that feels tangible and exciting, boosting your confidence as you see how solid planning prevents future rework and makes your app a go-to tool for real people. This milestone highlights elicitation and early validation.

By the end of this milestone, your team will have a detailed SRS, models, and MVP, with updates for traceability.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:
- **Elicit and document** functional/non-functional requirements, stories, and use cases.
- **Create UML diagrams** (class emphasized, use case) for system visualization.
- **Develop a console-based MVP** in Python with basic tests.
- **Update project artifacts** (SRS with diagrams, Zenhub backlog) for consistency.
- **Reflect on requirements process** to improve planning.

---

## Tasks and Instructions

### 1. Requirements Documentation

- Build SRS using https://github.com/jam01/SRS-Template/blob/master/template.md: Include scope, reqs, 15+ stories with criteria.

- Prioritize with planning poker; format stories properly.

- Commit to `/task_manager_app/docs/srs.md`.

### 2. Use Case and UML Modeling

- Develop 5+ use cases (actors, flows).

- Create UML use case and class diagrams (class emphasized for structure).

- Export to `/task_manager_app/docs/uml`; describe in `/task_manager_app/docs/use_cases.md`.

- Update prior SRS/vision with new diagrams.

### 3. Console MVP Implementation

- Code core features (add/view/edit/delete/prioritize) in `/task_manager_app/src`.

- Add 3-5 unit tests in `/task_manager_app/tests`.

### 4. Tool Updates

- Refine Zenhub backlog with stories/use cases; link to commits.

- Update GitHub README with MVP overview.

### 5. Team Meeting Execution

- Review SRS/MVP; assign actions.

- Document in `/task_manager_app/docs/meeting_minutes/milestone_2/week_1.md`.

### 6. Individual Reflections

- Submit a `.md` file via Canvas with release/Zenhub links and reflection answers (see Submission Checklist).

### 7. GitHub Releases

- **Progress Check (One Week):** Create a minor release (`v1.1`, tagged `milestone2-progress-v1.1`) with drafts. Submit URL via Canvas. **Note**: Missing this incurs a 20% penalty.

- **Final Submission (Two Week):** Create a major release (`v2.0`, tagged `milestone2`) with all linked in notes and changelog (e.g., "Added class diagram to SRS"). Submit URL via Canvas.

---

## Submission Checklist

### Submit via Canvas:

- A `.md` file containing:

  - GitHub release link (e.g., `https://github.com/user_name/project_name/releases/tag/v2.0`)

  - Zenhub board link (e.g., `https://app.zenhub.com/workspaces/...`)

  - **Reflection answers:**

    - **Contribution to the project (50–100 words):** Describe your specific contributions (e.g., class diagram, MVP coding).

    - **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate collaboration; explain.

    - **How did requirements analysis shape user needs understanding? (50–100 words):** Discuss insights.

    - **Feedback/comment about this milestone (50 words):** Suggest improvement.

### Repository Documents

All documents must be checked into the GitHub repository under `/task_manager_app/docs` and linked in release notes. Use checkboxes to confirm completion:

- [ ] **SRS** (`/task_manager_app/docs/srs.md`)

  - Functional/non-functional, stories; updated with diagrams.

- [ ] **Use Cases and UML** (`/task_manager_app/docs/use_cases.md`)

  - Descriptions, images in `/task_manager_app/docs/uml` (class emphasized).

- [ ] **Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/milestone_2/week_1.md`)

  - Attendance, agenda, decisions, action items.

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **SRS Documentation**      | 30     | Comprehensive, using template, updated        |
| **Use Cases and UML**      | 25     | Detailed, class diagram emphasized            |
| **MVP Code and Tests**     | 25     | Functional prototype, basic tests             |
| **Tool Setup & Releases**  | 10     | Updated backlog/README, proper releases       |
| **Meeting Minutes**        | 5      | Detailed notes                                |
| **Individual Reflections** | 5      | Insightful responses                          |

{span .text-red-500}`**Penalties:** 20% for missing progress check.`

---

## Resources

### Textbook

- Chapter 3: Requirements (Stories, Use Cases, MVP)

### Tutorials

- [SRS Template](https://github.com/jam01/SRS-Template/blob/master/template.md)

- [UML Class Diagram Guide](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-class-diagram/)

- [Python Testing with Pytest](https://realpython.com/pytest-python-testing/)

### Best Practices

- Update Zenhub with new tasks for traceability.

- Commit with messages like "Update SRS with class diagram".

- Ensure class diagram reflects MVP structure.

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
