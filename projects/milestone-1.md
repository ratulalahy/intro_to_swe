---
title: "Milestone 1: Project Initiation and Setup"
description: Team formation, vision planning, and tool configuration for the {span .text-gradient-todo}`**To-Do List**` application project

---

## Overview

In the real world, the first days of a software project can feel like setting sail on a long voyage. You would not simply jump into a boat and start rowing. You would choose your crew, decide where you are headed, gather supplies, and make sure your navigation tools actually work. Software development is no different. The smartest teams spend time aligning their vision, clarifying responsibilities, and setting up their tools before writing a single line of code. This is what keeps projects from drifting off course.

In this milestone, you will take those same professional first steps. Your team of three to five members will begin work on a {span .text-gradient-todo}`**To-Do List**` app designed to help busy students or professionals manage their tasks efficiently. Following practices used at companies like Amazon or Meta, you will establish your team structure, craft a clear project vision, build an initial feature backlog, and configure tools such as GitHub and Zenhub. These activities connect directly to what you have learned about version control, Agile methods, and team collaboration, giving you a smooth and confident start before diving into detailed requirements.

By the time this milestone is complete, your team will have a fully organized setup, a prioritized feature list, a draft project plan, and a working toolkit ready for future development cycles. Every submission will be documented through GitHub releases, giving you hands-on experience with the professional versioning practices used by real-world software teams. This is your launchpad for the rest of the semester — get it right now, and every step that follows will be easier and more effective.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Form and organize** a team with roles, rotation, and communication plans, emphasizing collaboration and accountability.
- **Craft a project vision** and initial feature backlog aligned with Agile principles like Scrum.
- **Create a preliminary plan** including timelines and risks to guide development.
- **Set up and use tools** like Git/GitHub for version control and Zenhub for basic task tracking.
- **Apply basic Agile concepts** (e.g., Scrum roles, artifacts like backlogs) to start planning.
- **Use GitHub releases** to version and document progress, mimicking industry workflows.

---

## Tasks and Instructions

### 1. Tool Configuration
Before coding begins, a well-organized digital workspace must be in place. This section focuses on setting up your version control and task-tracking environment.

- Initialize a [GitHub](https://github.com/) Repository:
  - Create a new public or private repository under one team member’s account.
  - Add all team members as collaborators. Add your instructor (email id: qratul@uvu.edu) too.
  - Establish these branches:
    - `main` – production-ready commits
    - `dev` – staging area for features and fixes
  - Add folders:
    - `/task_manager_app/src/`: source code
    - `/task_manager_app/docs/`: documentation and planning assets

- Connect and Configure [Zenhub](https://www.zenhub.com/):
  - Add your team members to the Zenhub workspace.
  - Add instructor (email id: qratul@uvu.edu) to the Zenhub workspace.
  - Enable Zenhub on the GitHub repository.
  - Create:
    - 1–2 Epics (e.g., “Core Task Features”)
    - A few Issues or user stories (3–6 minimum)
    - Workflow pipeline: `Backlog`, `In Progress`, `Review`, `Done`

> _Assign issues during your first meeting. Track progress weekly._

### 3. Team Formation (with rotation schedule)
Clear team structure and responsibilities are essential to avoid confusion during development.

- Assign roles (with rotation schedule):
  - `Scrum Master`,
  - `Developers`, `Tester`,
  - `Meeting Recorder`.
- Define your communication plan
  - Weekly synchronous meetings (at least once per week)
  - Use Microsoft Teams for updates and ongoing collaboration
  - _e.g:_ 
    - _Monday 3:00 PM - 4:00 PM in-person_
    - _Tuesday and Friday 2:00 PM - 3:00 PM standup meetings via Microsoft Teams._
    - _Posting progress updates using MS Teams._
- Document in `/task_manager_app/docs/team_formation.md`.

### 2. Team Meeting Execution
Team meetings are crucial for aligning on goals and tasks. 
- Hold your team meeting with clear agenda, covering roles, vision, and initial features.
- Assign action items with owners and deadlines.
- Document in (_by meeting recorder_):
  - `/task_manager_app/docs/meeting_minutes/milestone_1/week_1.md`.
  - `/task_manager_app/docs/meeting_minutes/milestone_1/week_2.md`.

### 4. Project Vision and Planning

A shared vision ensures alignment and motivates progress. Your plan should sketch the product's mission, core features, early risks and other [essential elements](https://www.chatprd.ai/templates/prd-product-requirement-document-template).

- **Vision Statement**:
  - Describe the “why” of the project.
  - Mention target users, pain points, and core value.
  
- **Timeline**:
  - List major milestones with tentative deadlines.
  - Example: “Feature freeze by Week 5, testing phase by Week 7.”

- **Risks**:
  - Identify at least 3 risks (e.g., missed deadlines, scope creep) and their mitigation strategies.

- **Other Elements**(if any):
  - Include any other relevant information that will guide your project.
  - Example: Market Opportunities, competitive analysis, etc.

- Save this to:
  - `/task_manager_app/docs/vision_plan.md`

### 5. Initial Product Backlog Creation

Before you write any code, your team should brainstorm and capture a well-prioritized list of user-centered features.

- Each team member proposes **5+** feature ideas using clear, plain text, save it to: 
  - `/task_manager_app/docs/backlog/backlog_<member_1>.md`
  - `/task_manager_app/docs/backlog/backlog_<member_2>.md`
  - Example: “Enable users to add tasks with deadlines”

- Scrum Master consolidates the list:
  - Combine all the ideas by discussing with the team.
  - Remove duplicates, clarify descriptions.
  - Assign a basic priority (`High`, `Medium`, `Low`)
  - Format the final list in:
    - `/task_manager_app/docs/backlog/backlog.md`

- Import all features as Zenhub issues:
  - Link issues to the relevant Epic
  - Tag them with priorities and assignees

### 6. Individual Reflections

- Submit a `.md` file via Canvas with links and reflection answers (_see [Submission Checklist](#a-md-file-containing)_).

### 7. GitHub Releases

Use GitHub Releases to version and document project checkpoints, just as professional teams do.

- **Progress Check (After 1 week):**
  - Create a minor release: `v0.1`
  - Tag example: `milestone1-progress-v0.1`
  - Include drafts of all documents completed so far
  - Submit the release URL via Canvas

> **Warning** Missing this release -> 20% deduction from total milestone score</span>

- **Final Submission (After 2 weeks):**
  - Create a major release: `v1.0`
  - Tag example: `milestone1`
  - Include:
    - Final versions of team documents
    - Clean markdown formatting
    - Changelog summarizing what was added/edited since `v0.1`
  - Submit (re-submit) the final release URL via Canvas

---

## Submission Checklist

### Submit via Canvas:

#### A `.md` file containing:
- [ ] **GitHub release link** (e.g., `https://github.com/user_name/project_name/releases/tag/v1.0`)
- [ ] **Zenhub board link** (e.g., `https://app.zenhub.com/workspaces/...`)
- [ ] **Reflection answers:**
  - **Your Contribution to the project (50–100 words):** Describe your role (e.g., tool setup).
  - **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate and explain collaboration.
  - **How does the project vision align with your software engineering goals? (50–100 words):** Connect to personal aspirations.
  - **Feedback on this milestone (50 words):** Suggest improvements.

### Repository Documents
- [ ] **Team Formation** (_suggested: `/task_manager_app/docs/team_formation.md`_)
- [ ] **Project Vision and Plan** (_suggested: `/task_manager_app/docs/vision_plan.md`_)
- [ ] **Initial Product Backlog** (_suggested: `/task_manager_app/docs/backlog/`_)
- [ ] **First Meeting Minutes** (_suggested: `/task_manager_app/docs/meeting_minutes/milestone_1/`_)

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **Team Formation**         | 10     | Clear roles, rotation, communication plan     |
| **Vision and Planning**    | 20     | Concise, user-focused vision and plan         |
| **Product Backlog**        | 35     | Prioritized list of 10+ feature items         |
| **Tool Setup & Releases**  | 20     | Functional GitHub/Zenhub, proper releases     |
| **Meeting Minutes**        | 10     | Detailed, actionable notes                    |
| **Individual Reflections** | 5      | Insightful responses                          |

*Penalties: 20% for missing progress check after first week.*

---

## Resources

### Textbook

- [Chapter 1: Introduction](https://softengbook.org/chapter1)
- [Chapter 2: Processes](https://softengbook.org/chapter2)
- [Version Control](https://softengbook.org/chapter10#version-control)
- [Appendix: Git](https://softengbook.org/chapterAp)

### Beginner Friendly Resources
- [Getting Started with Git](https://www.youtube.com/watch?v=8JJ101D3knE)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)
- [Setting Up Zenhub](https://www.youtube.com/watch?v=gcVIYp2LKT4&list=PLFIGvQyXSp3DKqdBtwvedFIGeEn9XwDsT)
- [Zenhub Tutorial](https://www.youtube.com/watch?v=tJ375ju3xTc&list=PLFIGvQyXSp3CGS8X300Aj-hUZ-VLIhHbk)

### Tutorials
- [Git basics by GitHub](https://docs.github.com/en/get-started/git-basics)
- [Git usage guide by GitHub](https://docs.github.com/en/get-started/using-git)
- [Zenhub Quick-Start](https://www.zenhub.com/getting-started)
- [Agile and Scrum](https://www.visual-paradigm.com/tutorials/agile-tutorial/)

### Best Practices

- Use semantic versioning.
- Commit with descriptive messages.
- Test links before submission.
- [Team's Conflict Resolution](https://daily.dev/blog/5-conflict-resolution-tips-for-agile-teams)
---

### All Project Milestones
1. 📌 **[Milestone 1](milestone-1)**
2. [Milestone 2](milestone-2)
3. [Milestone 3](milestone-3)
4. [Milestone 4](milestone-4)
5. [Milestone 5.1](milestone-5-1)
6. [Milestone 5.2](milestone-5-2)
7. [Final Submission](milestone-final-submission)