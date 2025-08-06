---
title: "Milestone 3: System Modeling and Architecture Implementation"
description: UML modeling, MVC architecture implementation, and wireframe design
---

# Milestone 3: Modeling and Architecture Implementation

---

## Overview

Imagine designing a dream home: You have the basic layout, but now it's time to add the framework that makes it sturdy and beautiful—welcome to Milestone 3, where your {span .text-gradient-todo}`**To-Do List**` app gets its architectural backbone. Motivated by how architects in construction or engineers at firms like Apple ensure buildings (or apps) stand the test of time, this phase lets you relate to practical scenarios like upgrading a simple notebook to a digital powerhouse that handles growing task lists without crashing. You'll expand UML diagrams (putting special spotlight on class diagrams to map out task objects and relationships, alongside activity and sequence for user flows), propose wireframes that sketch intuitive interfaces (think drag-and-drop tasks, relatable to popular apps like Todoist), and implement MVC architecture in Python to organize code logically—Model for data storage, View for user display, Controller for handling actions. Applying SOLID principles will feel like decluttering a messy room, making your app more flexible for future additions, just as industry teams refactor to keep products evolve without breaking. By the end, your project will feel robust and professional, like turning a rough sketch into a blueprint ready for construction, giving you that satisfying "aha" moment of seeing chaos become order.

By the end of this milestone, your team will have enhanced models, MVC code, wireframes, and tests, with reflections on SOLID improvements.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Develop UML diagrams** (class emphasized, activity, sequence) to model system structure and behavior.

- **Design wireframes** and prototypes mapping to requirements.

- **Implement MVC architecture**, separating concerns for scalability.

- **Apply SOLID principles** to refactor and improve code quality.

- **Update project artifacts** (SRS with new diagrams, Zenhub backlog) for traceability.

- **Reflect on design improvements** from principles.

---

## Tasks and Instructions

### 1. UML Modeling

- Extend prior UML: Create class diagram (attributes/methods/relationships, emphasized for structure), activity (workflows), sequence (interactions).

- Use tools like draw.io; export images to `/task_manager_app/docs/uml`.

- Update SRS (using https://github.com/jam01/SRS-Template/blob/master/template.md) by adding diagrams in appropriate sections.

- Commit descriptions in `/task_manager_app/docs/uml_notes.md`.

### 2. Wireframe and Prototype Design

- Design wireframes for key screens (e.g., task list, add task) using Figma/Balsamiq.

- Create basic prototypes (mock GUI layout in Python comments or Tkinter stubs).

- Commit to `/task_manager_app/docs/wireframes` with annotations linking to use cases.

### 3. MVC Architecture Implementation

- Restructure MVP code into MVC: Model (data logic, e.g., Task class), View (console/UI stubs), Controller (input handling).

- Apply SOLID principles (e.g., Single Responsibility for classes); document before/after in code comments.

### 4. Basic Testing

- Add 5+ unit/integration tests for MVC components (e.g., test_model_task_add) in `/task_manager_app/tests`.

### 5. Tool Updates

- Update Zenhub backlog with modeling/architecture tasks; link to new issues/commits.

- Enhance GitHub README with architecture overview and diagram links.

### 6. Team Meeting Execution

- Hold meeting to review diagrams/MVC; assign actions.

- Document in `/task_manager_app/docs/meeting_minutes/milestone_3/week_1.md`.

### 7. Individual Reflections

- Submit a `.md` file via Canvas with release/Zenhub links and reflection answers (see Submission Checklist).

### 8. GitHub Releases

- **Progress Check (One Week):** Create a minor release (`v2.1`, tagged `milestone3-progress-v2.1`) with drafts (UML/wireframes/MVC). Submit URL via Canvas. **Note**: Missing this incurs a 20% penalty.

- **Final Submission (Two Week):** Create a major release (`v3.0`, tagged `milestone3`) with all deliverables linked in release notes and a changelog (e.g., "Updated SRS with class diagram"). Submit URL via Canvas.

---

## Submission Checklist

### Submit via Canvas:

- A `.md` file containing:

  - GitHub release link (e.g., `https://github.com/user_name/project_name/releases/tag/v3.0`)

  - Zenhub board link (e.g., `https://app.zenhub.com/workspaces/...`)

  - **Reflection answers:**

    - **Contribution to the project (50–100 words):** Describe your specific contributions (e.g., class diagram, MVC coding).

    - **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate collaboration and communication; explain your rating.

    - **How did SOLID principles improve your code structure? (50–100 words):** Discuss specific before/after examples.

    - **Feedback/comment about this milestone (50 words):** Suggest one improvement for modeling process.

### Repository Documents

All documents must be checked into the GitHub repository under `/task_manager_app/docs` and linked in release notes. Use checkboxes to confirm completion:

- [ ] **Updated SRS** (`/task_manager_app/docs/srs.md`)

  - Added UML diagrams, refined reqs.

- [ ] **UML Notes and Images** (`/task_manager_app/docs/uml_notes.md`, images in `/task_manager_app/docs/uml`)

  - Class diagram emphasized, activity/sequence included.

- [ ] **Wireframes** (`/task_manager_app/docs/wireframes`)

  - Screens with annotations.

- [ ] **Meeting Minutes** (`/task_manager_app/docs/meeting_minutes/milestone_3/week_1.md`)

  - Attendance, agenda, decisions, action items.

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **UML Diagrams**           | 30     | Accurate class emphasis, activity/sequence     |
| **Wireframes/Prototypes**  | 20     | Detailed, reqs-aligned designs                |
| **MVC Code & SOLID**       | 25     | Modular implementation, principle application |
| **Tests & Tool Updates**   | 15     | Basic tests, Zenhub/README refinements        |
| **Meeting Minutes**        | 5      | Detailed notes                                |
| **Individual Reflections** | 5      | Insightful responses                          |

{span .text-red-500}`**Penalties:** 20% for missing progress check.`

---

## Resources

### Textbook

- Chapter 4: Models (UML Diagrams)

- Chapter 5: Design Principles (SOLID)

- Chapter 7: Architecture (MVC)

### Tutorials

- [SRS Template](https://github.com/jam01/SRS-Template/blob/master/template.md)

- [draw.io UML Guide](https://www.draw.io/)

- [MVC in Python](https://realpython.com/the-model-view-controller-mvc-paradigm-summarized-with-legos/)

### Best Practices

- Update SRS with new diagrams for traceability.

- Use meaningful commit messages (e.g., "Add class diagram to SRS").

- Ensure Zenhub reflects milestone tasks.

---

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
