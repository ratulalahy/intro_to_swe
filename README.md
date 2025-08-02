# Introduction to Software Engineering Course

A comprehensive course website built with [MyST Markdown](https://mystmd.org) covering fundamental software engineering principles, practices, and methodologies.

## 🎓 Course Information

- **Course Code:** CS 2450
- **Semester:** Spring 2025
- **Instructor:** Ratul Alahy
- **Institution:** Utah Valley University

## 🌐 Website

Visit the course website: [https://ratulalahy.github.io/intro_to_swe](https://ratulalahy.github.io/intro_to_swe)

##  Course Topics

- Introduction to Software Engineering
- Version Control with Git and GitHub
- Software Development Life Cycle (SDLC)
- Agile Scrum
- Requirements Engineering/Analysis
- User Interface Design
- Software Architecture
- Design Principles
- Design Patterns
- Testing
- Refactoring
- Kanban

## 🏗️ Repository Structure

```
├── lectures/              # Interactive lecture materials
├── assignments/           # Individual coding and analysis tasks
├── projects/             # Team-based development projects
├── in-class-activities/  # Hands-on exercises and group work
├── resources/            # Setup guides, tools, and references
├── slides/               # Presentation materials
├── assets/               # Images, videos, and multimedia content
├── myst.yml             # MyST configuration
├── _toc.yml             # Table of contents
└── index.md             # Homepage
```

## 🛠️ Technology Stack

- **Content:** MyST Markdown
- **Hosting:** GitHub Pages
- **Deployment:** GitHub Actions
- **Development:** VS Code, Git, Node.js
- **Design:** Responsive web design with modern UI

##  Local Development

### Prerequisites

- Node.js (latest LTS)
- npm or yarn
- Git

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ratulalahy/intro_to_swe.git
   cd intro_to_swe
   ```

2. Install MyST CLI:
   ```bash
   npm install -g mystmd
   ```

3. Build and serve locally:
   ```bash
   myst start
   ```

4. Open browser to `http://localhost:3000`

### Building for Production

```bash
myst build --html
```

The built site will be in `_build/html/`.

## 📝 Content Development

### Adding New Content

1. Create markdown files in appropriate directories
2. Update `_toc.yml` to include new pages in navigation
3. Use MyST directives for interactive content:
   - `{note}`, `{tip}`, `{warning}` for callouts
   - `{grid}` for responsive layouts
   - `{list-table}` for structured data
   - `{code-block}` for syntax-highlighted code

### MyST Features Used

- **Interactive Elements:** Grids, cards, tabs, dropdowns
- **Rich Content:** Code blocks, math equations, diagrams
- **Cross-references:** Internal links and citations
- **Responsive Design:** Mobile-friendly layouts
- **Accessibility:** Semantic markup and alt text

## 🎨 Design Philosophy

The course website emphasizes:

- **Visual Appeal:** Modern, clean design with vibrant colors
- **Engagement:** Interactive elements and multimedia content
- **Accessibility:** Clear navigation and readable typography
- **Responsiveness:** Optimized for all device sizes
- **Usability:** Intuitive structure and easy navigation

##  Course Organization

- **Lectures:** 12 comprehensive topics with interactive content
- **Assignments:** 5 individual projects (700 points total)
- **Projects:** 3 team-based developments (1000 points total)
- **Participation:** In-class activities and engagement (300 points total)

## 🤝 Contributing

This repository serves as course material. Students and faculty can:

- Report issues or typos via GitHub Issues
- Suggest improvements via Pull Requests
- Share additional resources in Discussions

## 📄 License

Course content is licensed under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/).
Code examples and projects may have different licenses as specified.

##  Links

- **Course Website:** [https://ratulalahy.github.io/intro_to_swe](https://ratulalahy.github.io/intro_to_swe)
- **MyST Documentation:** [https://mystmd.org](https://mystmd.org)
- **Institution:** [Utah Valley University](https://www.uvu.edu)

---

Built with ❤️ using [MyST Markdown](https://mystmd.org) and hosted on [GitHub Pages](https://pages.github.com).
