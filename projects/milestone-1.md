---
title: "Milestone 1: Project Initiation and Setup"
description: Team formation, vision planning, and tool configuration for the To-Do List application project
---

# Milestone 1: Project Initiation and Setup

---

## Overview

Welcome to **Milestone 1** of your *Introduction to Software Engineering* course project. This foundational phase launches your semester-long development of a **To-Do List** application, employing Agile methodologies and industry-standard tools. As emerging software engineers, you will assemble collaborative teams, articulate a project vision, perform initial planning, and configure essential infrastructure for version control and task management. This milestone underscores the principles of structured collaboration, strategic planning, and tool proficiency, mirroring professional software development environments at top-tier institutions and companies.

By the end of this milestone, your team will have established a cohesive structure, a preliminary product backlog, a draft project plan, and operational tools, ensuring a strong foundation for iterative refinement and high-quality outcomes. All progress and final submissions will be tracked via `GitHub` releases, promoting version control best practices.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

* **Form and organize** a high-functioning team with defined roles and communication protocols, promoting equity and accountability.
* **Develop a clear project vision** and initial backlog for your To-Do List application, aligning with user needs and Agile practices.
* **Conduct preliminary planning** to outline core features, timelines, and risks, fostering proactive decision-making.
* **Configure and integrate tools** like `Git`/`GitHub` for version control and `Zenhub` for task management, enabling efficient workflow tracking.
* **Apply foundational Agile concepts** to initiate sprint planning, emphasizing adaptability and continuous improvement.
* **Utilize `GitHub` releases** for versioning deliverables, simulating professional deployment workflows.

---

## Tasks and Instructions

### 1. Tool Configuration

* Initialize `GitHub`: Add collaborators, create `main` and feature branches, set up `/task_manager_app/src` and `/task_manager_app/docs`.
* Configure `Zenhub`: Link to GitHub, create issues from user stories, set up workflows (e.g., Backlog, In Progress, Done).

### 2. First Meeting Execution

* Conduct a meeting with a clear agenda (e.g., role assignments, vision discussion).
* Assign action items with owners and deadlines.
* Document in `/task_manager_app/docs/meeting_minutes/sprint_1/week_1.md`.

### 3. Team Formation (with rotation schedule)

* Assign roles:

  * Scrum Master
  * Developers
  * Tester
  * Meeting Recorder
* Define communication: Weekly meetings, Microsoft Teams for async updates.
* Document in `/task_manager_app/docs/team_formation.md`.

### 4. Project Vision and Planning

* Brainstorm To-Do List scope, users (e.g., students), and unique features (e.g., task categorization) in the first meeting.
* Draft vision statement and project plan (timeline, risks, mitigation).
* Commit to `/task_manager_app/docs/vision_plan.md` after team feedback.

### 5. Product Backlog Creation

* Each member submits 5+ functional and 2+ non-functional requirements in `/task_manager_app/docs/requirements` (e.g., `/task_manager_app/docs/requirements/member_1.md`).

* Scrum Master, by discussing with the team, consolidates into `/task_manager_app/docs/backlog.md` with prioritized user stories, formatted as:

  ```text
  As a [user role], I want [feature] so that [benefit].
  ```

* Same for non-functional requirements.

* Export to Zenhub for prioritization.

### 6. Individual Reflections

* Submit a `.md` file via Canvas (not GitHub) with GitHub release link, Zenhub board link, and reflection answers (see Submission Checklist).

### 7. GitHub Releases

* **Progress Check (one-Week):** Create a minor release (`v0.1`, tagged `milestone1-progress-v0.1`) with draft deliverables. Submit URL via Canvas. **Note**: Missing this incurs a 20% penalty.
* **Final Submission (Two Week):** Create a major release (`v1.0`, tagged `milestone1`) with all deliverables linked in release notes and a changelog. Submit URL via Canvas.

---

## Submission Checklist

Submit via Canvas:

* A `.md` file containing:

  * GitHub release link (e.g., `https://github.com/user_name/project_name/releases/tag/v1.0`)
  * Zenhub board link (e.g., `https://app.zenhub.com/workspaces/...`)
  * **Reflection answers:**

    * **Contribution to the project (50–100 words):** Describe your specific contributions (e.g., user stories, tool setup).
    * **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate collaboration and communication; explain your rating.
    * **How does the project vision align with your software engineering goals? (50–100 words):** Connect the project to your career aspirations.
    * **Feedback/comment about this milestone (50 words):** Suggest one improvement for the process or team dynamics.

### Repository Documents

All documents must be checked into the GitHub repository under `/task_manager_app/docs` and linked in release notes. Use checkboxes to confirm completion:

* [ ] **Team Formation** (`/task_manager_app/docs/team_formation.md`)

  * Roles: Scrum Master, Developers, Tester, Meeting Recorder
  * Communication plan: Weekly meeting, Microsoft Teams for async updates

* [ ] **Project Vision and Plan** (`/task_manager_app/docs/vision_plan.md`)

  * Vision statement: Purpose, target users, unique features
  * Project plan: Timeline, risks, mitigation strategies

* [ ] **Initial Product Backlog** (`/task_manager_app/docs/backlog.md`)

  * User stories, non-functional requirements

* [ ] **First Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/sprint_1/week_1.md`)

  * Attendance, agenda, decisions, action items

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| ---------------------- | ------ | --------------------------------------------- |
| Team Formation         | 20     | Clear roles, rotation, in-person/Teams plan   |
| Vision and Planning    | 20     | Concise vision and plan with user focus       |
| Product Backlog        | 25     | Prioritized, textbook-aligned requirements    |
| Tool Setup & Releases  | 20     | Functional GitHub/Zenhub with proper releases |
| Meeting Minutes        | 10     | Detailed documentation of outcomes            |
| Individual Reflections | 5      | Insightful responses with feedback            |

**Penalties:** 10% per day for late submissions; 20% for missing progress check.

---

## Resources

### Textbook

* Chapter 1: Introduction
* Chapter 2: Processes (Agile setup)
* Chapter 3: Requirements (user stories)

### Tutorials

* [GitHub Releases Guide](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)
* [Zenhub Quick-Start](https://help.zenhub.com/support/solutions/articles/43000010304-getting-started-with-zenhub)
* [Writing User Stories](https://www.youtube.com/watch?v=6E0T9uin2dk)
* [Git Branching Tutorial](https://www.youtube.com/watch?v=aXXCNFzMrec)

### Best Practices

* Use semantic versioning (e.g., `v1.0`)
* Commit with descriptive messages
* Test release links before submission

---

## Support

* Instructor office hours for tool setup
* Peer discussions for planning and backlog refinement


---


## Navigation

- **Previous:** [Project Milestones Overview](index)
- **Next:** [Milestone 2: Requirements Engineering](milestone-2)

### All Project Milestones
1. **[Milestone 1: Project Initiation](milestone-1)** ← Current
2. [Milestone 2: Requirements Engineering](milestone-2)
3. [Milestone 3: System Modeling](milestone-3)
4. [Milestone 4: Advanced Features](milestone-4)
5. [Milestone 5.1: Final Presentation](milestone-5-1)
6. [Milestone 5.2: Final Submission](milestone-5-2)
7. [Final Project Submission](final-submission)
