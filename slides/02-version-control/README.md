# Git & Version Control - Interactive Presentation

An engaging, premium-quality [Slidev](https://sli.dev/) presentation covering Git fundamentals and GitHub collaboration for Software Engineering students.

##  Features

- **Interactive Learning**: Hands-on exercises and live coding demonstrations
- **Premium Design**: Beautiful gradients, animations, and visual effects
- **Code Highlighting**: Syntax highlighting for all Git commands and code examples
- **Visual Diagrams**: Mermaid charts for Git workflows and branching strategies
- **Responsive Layout**: Works perfectly on all screen sizes
- **Dark/Light Mode**: Automatic theme switching
- **Export Ready**: PDF export capability for offline viewing

## 📋 Content Overview

### Lecture Topics Covered
- Version Control Fundamentals
- Git vs GitHub Understanding
- Essential Git Commands
- The Three Trees of Git
- Branching and Merging Strategies
- GitHub Collaboration Workflows
- Pull Requests and Code Review
- Merge Conflict Resolution
- Best Practices and Professional Workflows

### Interactive Elements
- ✅ Live coding demonstrations
- ✅ Hands-on exercises
- ✅ Interactive quizzes
- ✅ Real-world scenarios
- ✅ Challenge problems
- ✅ Visual workflow diagrams

## 🛠 Setup Instructions

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- Modern web browser

### Installation

1. **Navigate to the presentation directory:**
   ```bash
   cd slides/02-version-control
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Development: `http://localhost:3030`
   - Remote access: `http://localhost:3030/presenter`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run export` | Export to PDF |
| `npm run preview` | Start server with remote access |

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Beautiful color transitions throughout
- **Interactive Cards**: Hover effects and animations
- **Terminal Styling**: Authentic terminal appearance for code examples
- **Progress Indicators**: Visual feedback for learning progress
- **Icon Integration**: Carbon Design System icons

### Typography
- **Inter**: Primary font for headings and body text
- **JetBrains Mono**: Monospace font for code and terminal examples
- **Responsive Sizing**: Scales perfectly across devices

### Color Scheme
- **Primary**: Purple to blue gradients (#667eea → #764ba2)
- **Accent Colors**: Complementary colors for different concepts
- **High Contrast**: Ensures accessibility and readability
- **Dark Mode**: Full dark theme support

##  Presentation Structure

### Introduction (Slides 1-5)
- Course objectives and motivation
- Real-world impact of version control
- Problem statement and solution

### Git Fundamentals (Slides 6-15)
- Git vs GitHub comparison
- The Three Trees concept
- Essential commands and workflows
- Hands-on setup exercise

### Branching & Collaboration (Slides 16-25)
- Branching strategies and visualization
- GitHub workflow and features
- Pull requests and code review
- Team collaboration best practices

### Advanced Topics (Slides 26-35)
- Merge conflict resolution
- Git best practices
- Advanced Git tools
- Professional workflows

### Practice & Assessment (Slides 36-40)
- Interactive challenges
- Knowledge assessment quiz
- Resource recommendations
- Next steps

##  Learning Objectives

Students will be able to:

1. **Understand** version control fundamentals and importance
2. **Configure** Git on their development machine
3. **Create** repositories and track changes
4. **Collaborate** effectively using GitHub features
5. **Implement** branching strategies for team development
6. **Resolve** merge conflicts professionally
7. **Apply** best practices in real-world projects

## 🔧 Customization

### Modifying Content
- Edit `slides.md` to update content
- Use Slidev's markdown extensions for enhanced formatting
- Add new slides by creating new slide sections

### Styling Changes
- Modify `style.css` for custom styling
- Update color variables in CSS for theme changes
- Add new animations and transitions

### Configuration
- Edit `package.json` for Slidev settings
- Configure export options and theme preferences
- Add new dependencies as needed

## 📤 Export Options

### PDF Export
```bash
npm run export
```
Generates: `slides-export.pdf`

### Custom Export Settings
Configure in `package.json` under `slidev.export`:
- Format options (PDF, PNG, PPTX)
- Dark/light mode selection
- Click animations inclusion
- Table of contents generation

## 🌐 Deployment

### GitHub Pages
1. Build the presentation:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to GitHub Pages

### Netlify/Vercel
- Connect repository to hosting platform
- Set build command: `npm run build`
- Set publish directory: `dist`

## 🤝 Contributing

Improvements and suggestions are welcome! Areas for contribution:

- Additional interactive exercises
- Enhanced visual examples
- Updated real-world case studies
- Accessibility improvements
- Mobile optimization

##  Resources

### Documentation
- [Slidev Documentation](https://sli.dev/)
- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

### Learning Materials
- [Learn Git Branching](https://learngitbranching.js.org/)
- [GitHub Learning Lab](https://lab.github.com/)
- [Git Immersion](http://gitimmersion.com/)

## 📞 Support

For questions or issues:
- **Course Instructor**: qratul@uvu.edu
- **GitHub Issues**: Submit issues for bugs or feature requests
- **Course Repository**: [intro_to_swe](https://github.com/ratulalahy/intro_to_swe)

## 📄 License

This presentation is part of the Introduction to Software Engineering course materials and is licensed under MIT License.

---

**Happy Learning! **

*Transform your understanding of version control with this interactive, engaging presentation designed for the next generation of software engineers.*
