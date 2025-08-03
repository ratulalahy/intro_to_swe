---
title: Introduction to Software Engineering
subtitle: CS 2450 - Utah Valley University
description: A comprehensive course covering fundamental software engineering principles, practices, and methodologies
authors:
  - name: Dr. Qratul Alahy
    email: qratul@uvu.edu
    affiliation: Utah Valley University
keywords:
  - software engineering
  - programming
  - development
  - agile
  - testing
  - design patterns
---

```{note}
**Course Information**
- **Course Code:** CS 2450
- **Semester:** Spring 2025
- **Instructor:** Dr. Qratul Alahy
- **Email:** qratul@uvu.edu
```

## Course Overview

This course provides a comprehensive introduction to software engineering principles, methodologies, and best practices. Students will learn essential skills for developing high-quality software systems in team environments using Agile/Scrum methodologies.

##  Learning Outcomes

By the end of this course, students will be able to:

- Apply software engineering principles to develop robust applications
- Use version control systems effectively in team environments
- Implement Agile/Scrum methodologies in real project development
- Design user-friendly interfaces and scalable architectures
- Write comprehensive tests and maintain code quality
- Work effectively in collaborative development teams

##  14-Week Course Journey

Our course follows a structured learning path with hands-on project development using 2-week Scrum sprints:

```{mermaid}
gantt
    title Software Engineering Course Timeline
    dateFormat  X
    axisFormat Week %s

    section Foundations
    Introduction to SWE           :intro, 0, 1
    Version Control (Git/GitHub)  :git, 1, 2

    section Agile & Process
    SDLC & Agile Scrum           :agile, 2, 4
    Scrum with Zenhub            :scrum, 3, 4
    
    section Requirements
    Requirements Engineering      :req, 4, 6
    Analysis & UML               :uml, 5, 6

    section Design
    UI Design & Architecture     :ui, 6, 7
    Design Principles            :principles, 7, 8
    Design Patterns              :patterns, 8, 10

    section Quality
    Testing & TDD                :testing, 10, 11
    Refactoring & DevOps         :devops, 11, 12

    section Wrap-up
    Presentations & Kanban       :present, 12, 13
    Review & Agile Practice      :review, 13, 14
```

###  Project Timeline with Scrum Sprints

```{mermaid}
timeline
    title Project Development with 2-Week Scrum Sprints
    
    Week 2 : Project Kickoff
           : Team Formation
           : GitHub Repository Setup
           : Initial Brainstorming
           
    Week 3 : Sprint 1 - Planning
           : Milestone 1 📋
           : Product Backlog Creation
           : User Stories & SRS Draft
           
    Week 5 : Sprint 2 - Requirements
           : Milestone 2 📝
           : Finalized SRS & MVP
           : UML Diagrams Start
           
    Week 7 : Sprint 3 - Design
           : Milestone 3 🎨
           : Wireframes & Mockups
           : Class/Use Case Diagrams
           
    Week 9 : Sprint 4 - Implementation
           : Milestone 4 ⚙️
           : Core Features & Patterns
           : Design Pattern Integration
           
    Week 11 : Sprint 5 - Final Release
            : Milestone 5 🏁
            : Complete Application
            : Testing & Refactoring
            : CI/CD Pipeline
            
    Week 13 : Project Presentations
            : Sprint Review
            : Team Retrospectives
```

##  Weekly Course Breakdown

::::{tab-set}

:::{tab-item} **Weeks 1-2: Foundations**
:sync: foundations

**Week 1: Introduction to Software Engineering**
- Course overview & importance of software engineering
- Historical context & software engineering vs programming
- **Project:** Team formation, brainstorm ideas

**Week 2: Version Control with Git & GitHub** 
- Git basics: repositories, commits, branches
- GitHub collaboration: remote repos, pull requests
- **Project:** GitHub repo setup, initial commit
- 🎭 **[Interactive Presentation](slides/02-version-control/README.md)** - Premium Slidev presentation
:::

:::{tab-item} **Weeks 3-6: Agile & Requirements**
:sync: agile

**Weeks 3-4: SDLC & Agile Scrum** 
- SDLC models: Waterfall vs Agile
- Scrum framework: roles, ceremonies, artifacts
- Zenhub project management setup
- **Milestone 1 (Week 3):** Product Backlog & SRS Draft

**Weeks 5-6: Requirements Engineering** 
- Stakeholder analysis & user stories
- Functional/non-functional requirements
- UML diagrams: class, use case, sequence
- **Milestone 2 (Week 5):** Finalized SRS & MVP
:::

:::{tab-item} **Weeks 7-10: Design**
:sync: design

**Week 7: UI Design & Architecture**
- GUI concepts, wireframes, mockups
- Software architectures: Layered, MVC
- **Milestone 3 (Week 7):** Wireframes & UML Diagrams

**Week 8: Design Principles** 
- Conceptual integrity, information hiding
- Cohesion, coupling, SOLID principles

**Weeks 9-10: Design Patterns** 
- Essential patterns: Factory, Singleton, Observer
- Strategy, Adapter patterns
- **Milestone 4 (Week 9):** Implementation with Patterns
:::

:::{tab-item} **Weeks 11-14: Quality & Wrap-up**
:sync: quality

**Week 11: Testing** 
- Unit testing & integration testing
- Test-Driven Development (TDD)
- **Milestone 5 (Week 11):** Final Project with Tests 🏁

**Week 12: Refactoring & DevOps**
- Code refactoring & identifying smells
- CI/CD pipelines & DevOps basics

**Week 13: Presentations & Kanban**
- Project presentations (Sprint Review)
- Introduction to Kanban methodology

**Week 14: Review & Agile Practice**
- UML diagram review & reinforcement
- Real-world Agile practices & team dynamics
:::

::::

##  Project Milestones & Deliverables

::::{grid} 1 1 2 3

:::{grid-item-card} 📋 **Milestone 1**
**Week 3**
- Product Backlog
- SRS Draft
- User Stories
:::

:::{grid-item-card} 📝 **Milestone 2** 
**Week 5**
- Final SRS
- MVP Definition
- Initial UML
:::

:::{grid-item-card} 🎨 **Milestone 3**
**Week 7** 
- Wireframes
- Mockups
- Complete UML
:::

:::{grid-item-card} ⚙️ **Milestone 4**
**Week 9**
- Core Implementation
- Design Patterns
- Code Review
:::

:::{grid-item-card} 🏁 **Final Milestone**
**Week 11**
- Complete Application
- Testing Suite
- CI/CD Pipeline
- Documentation
:::

::::

##  Scrum Framework Integration

Our project follows authentic Scrum practices:

::::{grid} 3

:::{grid-item-card} 👥 **Scrum Roles**
- **Students:** Development Team members
- **Rotating Scrum Master:** Different student each sprint
- **Product Owner:** Instructor
:::

:::{grid-item-card} 🔄 **Scrum Ceremonies**
- **Sprint Planning:** Start of each 2-week sprint
- **Daily Standups:** Weekly progress checks
- **Sprint Review:** Milestone presentations
- **Retrospectives:** Post-milestone reflection
:::

:::{grid-item-card}  **Scrum Artifacts**
- **Product Backlog:** Maintained throughout course
- **Sprint Backlog:** Updated each milestone
- **Increment:** Working software each sprint
:::

::::

##  Course Navigation

::::{grid} 2

:::{grid-item-card} 📖 **Lectures**
:link: lectures
Interactive lessons with real-world examples and demonstrations
:::

:::{grid-item-card} 📝 **Assignments**
:link: assignments
Individual coding tasks and analysis exercises
:::

:::{grid-item-card} 🏗️ **Projects** 
:link: projects
Team-based Scrum project development
:::

:::{grid-item-card}  **Resources**
:link: resources
Setup guides, tools, and additional materials
:::

::::

##  Key Course Highlights

```{admonition} What Makes This Course Special 
:class: tip

✅ **Real Scrum Experience:** Authentic 2-week sprints with proper ceremonies and artifacts

✅ **Early Project Start:** Hands-on coding begins Week 2, not just theory

✅ **Industry Tools:** Git/GitHub, Zenhub, CI/CD pipelines, modern development practices

✅ **Collaborative Learning:** Team-based project with peer code reviews

✅ **Practical Focus:** Every concept applied immediately in the ongoing project
```

---

*Ready to become a software engineering professional? Let's build something amazing together!* 

**Start Here:** [Introduction to Software Engineering →](lectures/01-introduction/index.md)
