# Assignment 1: Git & GitHub Fundamentals

**Course:** Introduction to Software Engineering  
**Due Date:** [Insert Date]  
**Points:** 100 points  
**Estimated Time:** 3-4 hours

## **Overview**

This assignment will help you practice the fundamental Git and GitHub concepts covered in Lecture 2. You'll create a repository, practice version control workflows, and demonstrate collaborative development practices.

## **Learning Objectives**

By completing this assignment, you will:

- Set up and configure Git on your local machine
- Create and manage a Git repository
- Practice essential Git commands and workflows
- Work with branches and merge conflicts
- Collaborate using GitHub pull requests
- Document your work using Markdown

## **Prerequisites**

- Git installed on your computer
- GitHub account created
- Basic command line knowledge
- Completed Lecture 2: Version Control with Git & GitHub

## **Part 1: Repository Setup (20 points)**

### 1.1 Create a New Repository

Create a new repository called `swe-portfolio` that will serve as your personal software engineering portfolio.

**Requirements:**
- Initialize with a README.md
- Add a `.gitignore` file for your preferred programming language
- Include an MIT license
- Make the repository public

**Deliverables:**
- Screenshot of your GitHub repository page
- Copy of your initial README.md content

### 1.2 Clone and Configure

Clone your repository locally and configure Git with your information.

**Commands to use:**
```bash
git clone [your-repository-url]
cd swe-portfolio
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

**Deliverables:**
- Screenshot showing successful clone
- Screenshot of `git config --list` output

## **Part 2: Basic Git Workflow (25 points)**

### 2.1 Create Your Portfolio Structure

Create the following directory structure and files:

```
swe-portfolio/
├── README.md
├── about/
│   └── index.md
├── projects/
│   └── README.md
├── skills/
│   └── technical-skills.md
└── contact/
    └── info.md
```

### 2.2 Content Requirements

Fill each file with appropriate content:

**README.md:** Portfolio introduction and navigation
**about/index.md:** Personal background and interests
**projects/README.md:** List of projects (can be placeholder for now)
**skills/technical-skills.md:** Your current technical skills
**contact/info.md:** How to reach you (professional info only)

### 2.3 Commit Practice

Make at least 5 meaningful commits, each focusing on a specific change:

1. Initial directory structure
2. Add README content
3. Create about page
4. Add skills documentation
5. Complete contact information

**Requirements:**
- Use descriptive commit messages following best practices
- Each commit should represent a logical unit of work
- Include both the file changes and commit messages in your deliverables

**Deliverables:**
- Screenshots of `git log --oneline` showing your commits
- Copy of each commit message with explanation of what was changed

## **Part 3: Branching and Merging (25 points)**

### 3.1 Feature Branch Workflow

Create a new branch called `add-project-gallery` and implement the following:

```bash
git checkout -b add-project-gallery
```

### 3.2 Add Project Gallery

In the `projects/` directory, create:
- `project-1.md` - Description of a real or fictional project
- `project-2.md` - Description of another project
- Update `projects/README.md` to link to both projects

### 3.3 Merge Back to Main

After completing the project gallery:

1. Commit your changes on the feature branch
2. Switch back to main branch
3. Merge the feature branch
4. Delete the feature branch

**Requirements:**
- Use proper merge commit message
- Verify merge was successful
- Clean up by deleting the feature branch

**Deliverables:**
- Screenshots of branch creation, commits, and merge process
- Final project file contents
- Screenshot showing branch deletion

## **Part 4: Collaboration Simulation (20 points)**

### 4.1 Create a Merge Conflict

Simulate a collaborative conflict:

1. Create a new branch called `update-readme`
2. Modify the README.md file (change the title and add a line)
3. Switch to main and modify the same lines differently
4. Attempt to merge and resolve the conflict

### 4.2 Conflict Resolution

Document your conflict resolution process:

1. Screenshot of the conflict markers in the file
2. Show your resolution process
3. Screenshot of successful merge commit

**Deliverables:**
- Before and after screenshots of conflicted file
- Explanation of how you resolved the conflict
- Final merged content

## **Part 5: GitHub Features (10 points)**

### 5.1 Create an Issue

Create a GitHub issue titled "Add CSS styling to portfolio" with:
- Clear description of what needs to be done
- Acceptance criteria
- Labels (enhancement, good first issue)

### 5.2 Create a Pull Request

Create a simple CSS file and submit it via pull request:

1. Create branch `add-styling`
2. Add a simple `style.css` file with basic portfolio styling
3. Create a pull request referencing your issue
4. Write a proper PR description
5. Merge the PR and close the issue

**Deliverables:**
- Screenshots of issue creation and PR process
- Copy of PR description
- Screenshot showing closed issue and merged PR

## **Submission Requirements**

Submit the following through Canvas:

1. **Repository URL** - Link to your completed GitHub repository
2. **Documentation PDF** - Compiled document containing:
   - All required screenshots
   - Commit message explanations
   - Conflict resolution explanation
   - Reflection on the process (200-300 words)

### **Submission Checklist**

- [ ] Repository is public and accessible
- [ ] All required files and directories are present
- [ ] Minimum 5 meaningful commits with good messages
- [ ] Feature branch workflow completed
- [ ] Merge conflict created and resolved
- [ ] GitHub issue and PR process completed
- [ ] Documentation PDF includes all required elements
- [ ] Reflection written about learning experience

## **Grading Rubric**

| Criteria | Excellent (A) | Good (B) | Satisfactory (C) | Needs Improvement (D-F) |
|----------|---------------|----------|------------------|-------------------------|
| **Repository Setup** | Perfect setup with all requirements | Minor issues with setup | Basic setup completed | Major setup problems |
| **Git Workflow** | All commits well-structured, excellent messages | Good commits, decent messages | Basic commits present | Poor commit practices |
| **Branching** | Flawless branch workflow | Minor branching issues | Basic branching completed | Major branching problems |
| **Conflict Resolution** | Perfect conflict simulation and resolution | Good conflict handling | Basic conflict resolved | Poor conflict management |
| **GitHub Features** | Excellent use of issues and PRs | Good GitHub workflow | Basic GitHub features used | Poor GitHub usage |
| **Documentation** | Comprehensive, clear documentation | Good documentation | Basic documentation | Poor documentation |

## **Tips for Success**

- **Start Early:** Don't wait until the last minute to begin
- **Read Carefully:** Follow all instructions precisely
- **Ask Questions:** Use office hours if you're stuck
- **Practice First:** Try commands in a test repository before your assignment
- **Document Everything:** Take screenshots as you work, not at the end

## **Common Mistakes to Avoid**

- Forgetting to commit changes before switching branches
- Using vague commit messages like "updated files"
- Not taking screenshots during the process
- Skipping the conflict resolution documentation
- Making the repository private instead of public

## **Additional Resources**

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- Course lecture materials and examples

## **Academic Integrity**

This is an individual assignment. While you may discuss concepts with classmates, all work submitted must be your own. Copying repository content or documentation from other students will result in academic misconduct charges.

---

**Questions?** Contact the instructor during office hours or post in the course discussion forum.

**Need Help?** Remember that learning Git takes practice. Don't hesitate to ask for help if you're struggling with concepts or commands.
