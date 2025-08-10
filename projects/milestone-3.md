---
title: "Milestone 3: GUI with Modeling & Architecture"
description: UML modeling, MVC architecture implementation, and wireframe design

---

## Overview
In previous milestones, you transformed your vision into clear requirements, built your first models, and delivered a functional CLI-based MVP. That was like constructing the frame of a house; the structure was sound, but the rooms were bare and the layout simple. Now, it’s time to add architecture, style, and a better living experience.

In this milestone, you will evolve your {span .text-gradient-todo}`**To-Do List**` app from a basic working prototype into a structured, scalable, and more user-friendly system. Just as professional teams refine blueprints before moving to full-scale construction, you will update your {span .term}`UML diagrams` to reflect a well-defined architecture, design {span .term}`wireframes` and {span .term}`mockups` for an intuitive {span .term}`GUI`, and restructure your code using the {span .term}`Model-View-Controller (MVC)` pattern. Along the way, you’ll apply {span .term}`SOLID principles` to improve maintainability and prepare your codebase for future features.

This is also where you will take the first step away from the command line by **integrating a basic GUI**, giving users a visual interface to interact with. Finally, you will **manually {span .term}`validate`** that your refactored design works as intended, capturing proof of improved modularity, separation of concerns, and user experience.

By the end, you'll have updated models, UI prototypes, refactored code following SOLID and MVC with GUI integration, and manual validation, preparing for pattern integration next. Continue using GitHub releases for versioning.

---

## Learning Objectives

Upon successful completion of this milestone, you will be able to:

- **Refine UML modeling** by updating use case, class, and sequence diagrams to reflect architectural changes.
- **Design UI elements** using wireframes, mockups, and prototypes for better usability.
- **Implement architecture** like MVC to separate concerns in your code.
- **Apply design principles** (SOLID) to refactor and improve code quality.
- **Integrate GUI** with MVC to enhance user interaction.
- **Manually validate** enhancements to confirm improvements in structure and functionality.

---

## Tasks and Instructions

### 1. Team Meetings
Coordinate team efforts through structured meetings.

- Hold team meetings for initial planning (e.g., assigning UML refinements, wireframing) and review (e.g., code walkthrough, validation discussion).
- Prepare agendas in advance, covering UML refinements, UI design, MVC setup, SOLID refactoring, GUI integration, and validation scenarios.
- Assign action items with specific owners, deadlines, and dependencies.
- Ensure all members participate; rotate roles if per your rotation schedule.
- Save meeting minutes. 

### 2. Refine UML Modeling
Update diagrams to align with new architecture and principles—focus on incorporating MVC and SOLID impacts.

- Refine UML use case diagrams to include GUI-specific interactions (e.g., button clicks).
- Update class diagrams to show MVC classes (e.g., separate Model, View, Controller) and SOLID-compliant relationships.
- Revise sequence diagrams for flows involving GUI and refactored logic.
- Use tools like [draw.io](https://draw.io) to ensure diagrams are versioned and explained.
- Save updates.

### 3. UI Design Planning
Create visual plans for the GUI to guide implementation.

- Design wireframes for key screens (e.g., main task list, add/edit task forms).
- Apply usability principles like consistency and feedback; gather team input for iterations.
- Tools: [draw.io](https://draw.io), [Figma](https://www.figma.com/), [Balsamiq](https://balsamiq.com/).
- Document in `/task_manager_app/docs/ui_design/` with images and rationale.

### 4. Architecture and Principles Implementation
Restructure code emphasizing modularity and best practices.

- Implement {span .term}`MVC` pattern: Divide code into {span .term}`Model` (data logic), {span .term}`View` (UI rendering, including GUI), {span .term}`Controller` (user input handling).
- Apply {span .term}`SOLID` principles: Identify violations in existing code, refactor for better cohesion/coupling (e.g., single responsibility per class).
- Integrate GUI: Replace or extend CLI with GUI-based interface for core features (e.g., list tasks in a window, buttons for actions).
- Document refactoring steps in code comments or a separate `/task_manager_app/docs/refactor_notes.md`.
- Organize files and folder structure as suggested in resources.

### 5. Manual Validation & Testing
Confirm the refactored app functions correctly.

- Develop 5+ validation scenarios covering GUI interactions, MVC flows, and SOLID benefits (e.g., modifying a class without affecting others).
- Execute scenarios manually; capture outputs, errors, and observations.
- Add basic test cases to check functionalities.
- Document in `/task_manager_app/docs/validation_scenarios.md` with step-by-step results and screenshots.

### 6. Individual Reflections

- Submit a `.md` file via Canvas with links and reflection answers (_see [Submission Checklist](#a-md-file-containing)_).

### 7. GitHub Releases
- **Progress Check (After 1 week):**
  - Create a minor release: `v2.1`
  - Tag example: `milestone3-progress-v2.1`
  - Include wireframes/mockups, refined UML diagrams, and initial MVC code drafts (some coding optional).
  - Submit the release URL via Canvas
> **Warning** Missing this release = 20% deduction from total milestone score

- **Final Submission (After 2 weeks):**
  - Create a major release: `v3.0`
  - Tag example: `milestone3`
  - Include final documents, refactored code with GUI, and changelog summarizing additions/edits since `v2.1`.
  - Submit the final release URL via Canvas

---

## Submission Checklist

### Submit via Canvas:

#### A `.md` file containing:
- [ ] **GitHub release link** (e.g., `https://github.com/user_name/project_name/releases/tag/v3.0`)
- [ ] **Zenhub board link** (e.g., `https://app.zenhub.com/workspaces/...`)
- [ ] **Reflection answers:**
  - **Your Contribution to the project (50–100 words):** Describe your role (e.g., GUI integration).
  - **Rating team dynamics (1–5 scale, with justification, 50 words):** Rate and explain collaboration.
  - **What design principles and architecture have you incorporated, and how are they helping your code? (50–100 words):** Discuss SOLID, MVC, and benefits like modularity.
  - **Feedback on this milestone (50 words):** Suggest improvements.

### Repository Documents
- [ ] **Refined UML** (_suggested: `/task_manager_app/docs/uml/`_)
- [ ] **UI Wireframes/Mockups** (_suggested: `/task_manager_app/docs/ui_wireframes/`_)
- [ ] **Validation and Testing Scenarios** (_suggested: `/task_manager_app/docs/validation_scenarios.md`_)
- [ ] **Meeting Minutes** (_suggested: `/task_manager_app/docs/meeting_minutes/milestone_3/`_)

---

## Evaluation Rubric (100 Points)

| Criteria               | Points | Description                                   |
| :---------------------- | :------: | :----------------: |
| **Team Meetings**          | 5     | Detailed, actionable minutes with clear agendas |
| **Refined UML Modeling**   | 10     | Updated use case, class, and sequence diagrams |
| **UI Design Planning**     | 15     | Well-designed wireframes and mockups          |
| **Architecture & Principles Implementation** | 50   | Effective MVC setup, SOLID refactoring, and GUI integration |
| **Manual Validation**      | 10     | Comprehensive scenarios with proof            |
| **Individual Reflections** | 10     | Insightful responses, including principles discussion |

*Penalties: 20% for missing progress check after first week.*

---

## Resources

### Textbook

- [Chapter 4: Models](https://softengbook.org/chapter4) (for UML refinements)
- [Chapter 5: Design Principles](https://softengbook.org/chapter5)
- [Chapter 7: Architecture](https://softengbook.org/chapter7)

### Beginner Friendly Resources
- [Sequence Diagrams](https://www.youtube.com/watch?v=pCK6prSq8aw)
- [Wireframing Basics](https://www.youtube.com/watch?v=9JNH9Q_qXEQ)
- [MVC in Python](https://realpython.com/the-model-view-controller-mvc-paradigm-summarized-with-legos/)
- [Tkinter GUI Tutorial](https://realpython.com/python-gui-tkinter/)

### Tutorials

- [SOLID Principles Explained](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)
- [Figma for Wireframes](https://www.figma.com/best-practices/wireframing/)
- [UML Tools](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-uml/)
- [Building GUIs with PyQt](https://realpython.com/python-pyqt-gui/)

### GUI Libraries for Python
- **Tkinter**: Built-in, simple for basic GUIs. Tutorial: [Official Docs](https://docs.python.org/3/library/tkinter.html)
- **PyQt**: More advanced, feature-rich. Tutorial: [PyQt6 Tutorial](https://www.pythonguis.com/pyqt6/)
- **Kivy**: For cross-platform, touch-friendly apps. Tutorial: [Kivy Crash Course](https://kivy.org/doc/stable/tutorials/crashcourse.html)
- [Comprehensive Guide to Python GUI Frameworks](https://fullscale.io/blog/python-gui-frameworks/)

### Best Practices

- Ensure diagrams are consistent with code.
- Refactor incrementally to avoid breaking functionality.
- Use version control for code changes.

### Example Folder Structure After MVC Adoption

```
task_manager_app/
├── src/
│   ├── models/
│   │   └── task.py            # Data models (e.g., Task class)
│   │   ├── task_manager.py    # Manages task storage and operations
│   │   └── ...                # Any additional data models
│   ├── views/
│   │   ├── cli_view.py        # CLI output functions
│   │   └── gui_view.py        # GUI components (e.g., Tkinter windows)
│   │   └── templates/         # Templates for rendering UI (optional, for advanced GUIs)
│   ├── controllers/
│   │   └── task_controller.py   # Business logic
│   │   ├── cli_controller.py    # Controller for CLI
│   │   ├── gui_controller.py    # Controller for GUI
│   │   └── ...                  # Additional controllers if needed
│   ├── utils/                 # Shared utilities
│   │   ├── file_handler.py    # JSON/CSV handling logic
│   │   └── helpers.py         # Helper functions used across the project
│   └── main.py                  # Entry point to run the app (select CLI or GUI)
│   └── config.py                # Configuration and constants
│── tests/                  # Test cases
│   ├── test_task.py         # Tests for Task model
│   ├── test_task_manager.py  # Tests for TaskManager logic
│   ├── test_cli_view.py      # Tests for CLI view
│   ├── test_gui_view.py      # Tests for GUI view
│   └── test_controller.py    # Tests for controllers               
└── docs/                # Documentation
    # Existing docs...
    ├── meeting_minutes/
    │   ├── milestone_1/
    │   ├── milestone_2/
    │   └── milestone_3/
    ...
```


---

### All Project Milestones
1. [Milestone 1: Project Initiation](milestone-1)
2. [Milestone 2: Requirements Engineering](milestone-2)
3. 📌 **[Milestone 3: System Modeling](milestone-3)**
4. [Milestone 4: Advanced Features](milestone-4)
5. [Milestone 5.1: Final Presentation](milestone-5-1)
6. [Milestone 5.2: Final Submission](milestone-5-2)
7. [Final Project Submission](final-submission)
