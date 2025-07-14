---
title: "Version Control with Git and GitHub"
subtitle: "Mastering Modern Development Workflows"
description: "Interactive introduction to Git version control and GitHub collaboration"
date: 2025-01-21
duration: "75 minutes"
objectives:
  - Understand version control fundamentals
  - Master basic Git commands and workflows
  - Learn GitHub collaboration features
  - Practice branching and merging strategies
keywords:
  - git
  - github
  - version control
  - collaboration
  - workflows
---

:::{admonition} 🎯 Learning Objectives
:class: tip

By the end of this lecture, you will be able to:
- Explain the importance of version control in software development
- Set up and configure Git on your development machine
- Create repositories and track changes using Git commands
- Collaborate effectively using GitHub features
- Implement branching strategies for team development
:::

# Version Control with Git and GitHub 🚀

Welcome to the world of modern software collaboration! Today we'll explore how Git and GitHub revolutionize the way developers work together.

## 🤔 Why Version Control?

::::{tab-set}

:::{tab-item} The Problem
:sync: problem

```{figure} https://imgs.xkcd.com/comics/git.png
:name: git-xkcd
:width: 400px

"If that doesn't fix it, git.txt contains the phone number of a friend of mine who understands git. Just wait through a few minutes of 'It's really pretty simple, just think of branches as...' and eventually you'll learn the commands that will fix everything." - XKCD
```

**Before Version Control:**
- `project_final.zip`
- `project_final_v2.zip`  
- `project_final_REALLY_final.zip`
- `project_final_use_this_one.zip`

:::

:::{tab-item} The Solution
:sync: solution

**With Git:**
- Complete history of all changes
- Multiple developers working simultaneously
- Ability to experiment safely with branches
- Easy rollback to any previous version
- Detailed tracking of who changed what and when

:::

::::

```{admonition} Real-World Impact
:class: note

**Did you know?** The Linux kernel, one of the world's largest software projects, has over 25,000 contributors and millions of lines of code - all managed through Git!
```

## 🎭 Git vs GitHub: Understanding the Difference

::::{grid} 2

:::{grid-item-card} Git 🔧
:class-header: bg-primary text-white

**Local Version Control System**

- Runs on your computer
- Tracks file changes
- Manages project history
- Works offline
- Command-line tool

:::

:::{grid-item-card} GitHub 🌐
:class-header: bg-success text-white

**Cloud-Based Git Hosting**

- Remote repository storage
- Web-based interface
- Collaboration features
- Issue tracking
- Project management tools

:::

::::

```{mermaid}
:caption: Git and GitHub Relationship

graph LR
    A[Your Computer] --> B[Local Git Repository]
    B --> C[GitHub Remote Repository]
    D[Teammate's Computer] --> E[Local Git Repository]
    E --> C
    C --> B
    C --> E
    
    style A fill:#e1f5fe
    style D fill:#e8f5e8
    style C fill:#fff3e0
```

## 🛠️ Git Fundamentals

### The Three Trees of Git

Git organizes your work into three main areas, each serving a specific purpose in the version control workflow.

::::{grid} 3

:::{grid-item-card} Working Directory 📁
:class-header: bg-info text-white

Your current project files

**What it contains:**
- Modified files
- New files
- Deleted files

:::

:::{grid-item-card} Staging Area 📦
:class-header: bg-warning text-white

Prepared changes for commit

**What it contains:**
- Files ready to be committed
- Snapshot of selected changes

:::

:::{grid-item-card} Repository 🏛️
:class-header: bg-success text-white

Permanent project history

**What it contains:**
- All committed changes
- Complete project timeline
- Branch information

:::

::::

### Essential Git Commands

```{list-table} Git Command Reference
:header-rows: 1
:name: git-commands

* - Command
  - Purpose
  - Example
  - When to Use
* - `git init`
  - Initialize repository
  - `git init my-project`
  - Starting a new project
* - `git clone`
  - Copy remote repository
  - `git clone https://github.com/user/repo.git`
  - Working on existing project
* - `git add`
  - Stage changes
  - `git add filename.txt`
  - Before committing changes
* - `git commit`
  - Save changes permanently
  - `git commit -m "Add new feature"`
  - After staging changes
* - `git push`
  - Upload to remote
  - `git push origin main`
  - Sharing your work
* - `git pull`
  - Download from remote
  - `git pull origin main`
  - Getting latest changes
```

## 🏃‍♂️ Hands-On Exercise: Your First Repository

```{admonition} 💻 Let's Code Together!
:class: important

Follow along as we create your first Git repository. Open your terminal and let's go!
```

### Step 1: Initial Setup

```{code-block} bash
:caption: Configure Git (do this once per computer)
:linenos:

# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check your configuration
git config --list
```

```{admonition} 🔍 Pro Tip
:class: tip

Use the same email address you'll use for GitHub to link your commits to your GitHub profile!
```

### Step 2: Create Your First Repository

```{code-block} bash
:caption: Initialize a new repository
:linenos:
:emphasize-lines: 3,6

# Create a new directory
mkdir my-first-repo
cd my-first-repo

# Initialize Git repository
git init

# Check status
git status
```

````{dropdown} 📋 Expected Output
:color: success

```bash
$ git init
Initialized empty Git repository in /path/to/my-first-repo/.git/

$ git status
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
````

### Step 3: Add and Commit Files

```{code-block} bash
:caption: Create and track your first file
:linenos:

# Create a README file
echo "# My First Repository" > README.md
echo "This is my introduction to Git!" >> README.md

# Check what changed
git status

# Stage the file
git add README.md

# Check status again
git status

# Commit the changes
git commit -m "Initial commit: Add README"
```

## 🌿 Understanding Branches

```{admonition} 🌳 Think of Branches Like Tree Branches
:class: tip

Just like tree branches grow from the main trunk, Git branches allow you to develop features separately from the main codebase!
```

### Branching Workflow Visualization

```{mermaid}
:caption: Git Branching Strategy

gitgraph
    commit id: "Initial commit"
    commit id: "Add README"
    branch feature/login
    checkout feature/login
    commit id: "Add login form"
    commit id: "Add validation"
    checkout main
    commit id: "Fix typo in README"
    merge feature/login
    commit id: "Merge login feature"
```

### Common Branching Commands

::::{tab-set}

:::{tab-item} Creating Branches

```{code-block} bash
:caption: Branch creation and switching

# Create a new branch
git branch feature/new-feature

# Switch to the branch
git checkout feature/new-feature

# Create and switch in one command
git checkout -b feature/another-feature

# List all branches
git branch
```

:::

:::{tab-item} Working with Branches

```{code-block} bash
:caption: Making changes on branches

# Make changes to files
echo "New feature code" > feature.txt

# Stage and commit
git add feature.txt
git commit -m "Add new feature"

# Switch back to main
git checkout main

# Merge the feature branch
git merge feature/new-feature
```

:::

:::{tab-item} Cleaning Up

```{code-block} bash
:caption: Branch maintenance

# Delete a merged branch (local)
git branch -d feature/new-feature

# Force delete a branch (be careful!)
git branch -D feature/unwanted-feature

# Delete remote branch
git push origin --delete feature/old-feature
```

:::

::::

## 🐙 GitHub: Collaboration Supercharged

### Repository Features

::::{grid} 2

:::{grid-item-card} 📊 Issues & Project Management
:class-header: bg-primary text-white

- Bug tracking
- Feature requests  
- Project boards
- Milestone planning

```{code-block} markdown
:caption: Sample Issue Template

## Bug Report

**Description:** Brief description of the bug

**Steps to Reproduce:**
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior:** What should happen
**Actual behavior:** What actually happens
```

:::

:::{grid-item-card} 🔍 Pull Requests
:class-header: bg-success text-white

- Code review process
- Discussion threads
- Automated testing
- Merge management

```{code-block} markdown
:caption: Sample PR Template

## Changes Made
- [ ] Added login functionality
- [ ] Updated documentation  
- [ ] Added unit tests

## Testing
- All tests pass ✅
- Manual testing completed ✅
```

:::

::::

### GitHub Workflow Exercise

```{exercise} Create Your GitHub Repository
:label: github-setup

1. **Create a GitHub account** (if you don't have one)
2. **Create a new repository** called "git-practice"
3. **Clone it locally:**
   ```bash
   git clone https://github.com/yourusername/git-practice.git
   ```
4. **Add a README file** with your name and course information
5. **Push your changes:**
   ```bash
   git add README.md
   git commit -m "Add personal README"
   git push origin main
   ```
```

## 🤝 Collaboration Workflows

### The GitHub Flow

```{mermaid}
:caption: GitHub Flow Process

graph TD
    A[Create Branch] --> B[Make Changes]
    B --> C[Create Pull Request]
    C --> D[Code Review]
    D --> E{Approved?}
    E -->|Yes| F[Merge to Main]
    E -->|No| B
    F --> G[Deploy]
    
    style A fill:#e1f5fe
    style F fill:#c8e6c9
    style G fill:#fff3e0
```

### Best Practices for Collaboration

::::{dropdown} 💡 Commit Message Best Practices
:color: primary

**Good commit messages are:**

```{code-block} text
:caption: Commit Message Format

type(scope): short description

Longer description explaining the change
and why it was necessary.

- Bullet points for multiple changes
- Reference issues: Fixes #123
```

**Examples:**

```{code-block} text
:caption: Good Commit Messages

feat(auth): add user login functionality

fix(api): resolve null pointer exception in user service

docs(readme): update installation instructions

test(auth): add unit tests for login validation
```
::::

::::{dropdown} 🔄 Pull Request Workflow
:color: success

**Step-by-Step PR Process:**

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/user-authentication
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "feat(auth): implement user login system"
   ```

3. **Push to GitHub:**
   ```bash
   git push origin feature/user-authentication
   ```

4. **Create Pull Request on GitHub**
5. **Request reviewers**
6. **Address feedback**
7. **Merge when approved**
::::

## 🚨 Common Git Scenarios & Solutions

::::{tab-set}

:::{tab-item} Merge Conflicts

```{admonition} ⚠️ When Merge Conflicts Happen
:class: warning

Merge conflicts occur when Git can't automatically combine changes from different branches.
```

**Example conflict:**
```{code-block} text
:caption: Merge conflict in code

<<<<<<< HEAD
function greet() {
    return "Hello World!";
}
=======
function greet() {
    return "Hi there!";
}
>>>>>>> feature-branch
```

**Resolution steps:**
1. Open the conflicted file
2. Choose which version to keep (or combine them)
3. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Add and commit the resolved file

:::

:::{tab-item} Undoing Changes

```{code-block} bash
:caption: Common undo operations

# Undo changes in working directory
git checkout -- filename.txt

# Unstage a file
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Create a new commit that undoes changes
git revert HEAD
```

:::

:::{tab-item} Viewing History

```{code-block} bash
:caption: Exploring project history

# View commit history
git log

# View compact history
git log --oneline

# View graphical history
git log --graph --all --oneline

# View changes in a commit
git show <commit-hash>

# View file history
git log --follow filename.txt
```

:::

::::

## 🎯 Interactive Quiz

```{exercise} Git Knowledge Check
:label: git-quiz

Test your understanding with these scenarios:

**Scenario 1:** You made changes to a file but haven't committed yet. You want to discard all changes and go back to the last committed version. What command do you use?

A) `git reset --hard HEAD`
B) `git checkout -- filename`
C) `git revert HEAD`
D) `git stash`

**Scenario 2:** You want to see what files are currently staged for the next commit. What command shows this?

A) `git status`
B) `git diff`
C) `git log`
D) `git show`

**Scenario 3:** You're working on a feature branch and want to get the latest changes from the main branch. What's the best approach?

A) `git merge main`
B) `git rebase main`
C) `git pull origin main`
D) All of the above (depending on workflow)
```

````{dropdown} 🔍 Quiz Answers
:color: success

**Answer 1:** B) `git checkout -- filename` - This discards uncommitted changes in the working directory.

**Answer 2:** A) `git status` - Shows the status of files in working directory and staging area.

**Answer 3:** D) All approaches can work, but the choice depends on your team's workflow preferences:
- `git merge main` creates a merge commit
- `git rebase main` replays your commits on top of main
- `git pull origin main` gets latest changes first
````

## 🎨 Advanced GitHub Features

### GitHub Actions (CI/CD Preview)

```{code-block} yaml
:caption: Simple GitHub Actions workflow
:linenos:

name: Test and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install
    - run: npm test
```

### Project Management with GitHub

```{list-table} GitHub Project Features
:header-rows: 1

* - Feature
  - Purpose
  - Best For
* - Issues
  - Track bugs and features
  - Task management
* - Projects
  - Kanban-style boards
  - Sprint planning
* - Milestones
  - Group related issues
  - Release planning
* - Discussions
  - Community conversations
  - Q&A and brainstorming
```

## 🏆 Practice Challenges

```{exercise} Challenge 1: Repository Setup
:label: challenge-1

**Goal:** Create a complete repository setup

1. Create a new repository on GitHub called "swe-practice"
2. Clone it locally
3. Add the following files:
   - `README.md` with project description
   - `.gitignore` for your programming language
   - `CONTRIBUTING.md` with contribution guidelines
4. Create at least 3 meaningful commits
5. Push everything to GitHub
```

```{exercise} Challenge 2: Branching Workflow
:label: challenge-2

**Goal:** Practice the GitHub Flow

1. Create a feature branch for adding a "About" page
2. Add an `about.html` file with your information
3. Commit your changes with a good commit message
4. Push the branch to GitHub
5. Create a Pull Request
6. Merge the PR and delete the branch
```

```{exercise} Challenge 3: Collaboration Simulation
:label: challenge-3

**Goal:** Experience merge conflicts (safely!)

1. Create two branches: `feature-a` and `feature-b`
2. In both branches, modify the same line in `README.md`
3. Merge `feature-a` into main
4. Try to merge `feature-b` into main
5. Resolve the merge conflict
6. Complete the merge
```

## 📚 Resources & Next Steps

### Essential Resources

::::{grid} 2

:::{grid-item-card} 📖 Documentation
:class-header: bg-info text-white

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

:::

:::{grid-item-card} 🎮 Interactive Learning
:class-header: bg-success text-white

- [Learn Git Branching](https://learngitbranching.js.org/)
- [GitHub Learning Lab](https://lab.github.com/)
- [Git Immersion](http://gitimmersion.com/)

:::

::::

### Cheat Sheets

```{dropdown} 📄 Git Command Cheat Sheet
:color: primary

**Repository Setup:**
```bash
git init                    # Initialize repository
git clone <url>            # Clone remote repository
```

**Basic Workflow:**
```bash
git status                 # Check status
git add <file>            # Stage file
git add .                 # Stage all files
git commit -m "message"   # Commit changes
git push origin main      # Push to remote
git pull origin main      # Pull from remote
```

**Branching:**
```bash
git branch                # List branches
git branch <name>         # Create branch
git checkout <name>       # Switch branch
git checkout -b <name>    # Create and switch
git merge <branch>        # Merge branch
git branch -d <name>      # Delete branch
```
```

## 🎯 Key Takeaways

```{admonition} 🏁 What You've Learned Today
:class: success

✅ **Version Control Fundamentals**
- Why version control is essential for software development
- The difference between Git and GitHub

✅ **Git Basics**
- Essential Git commands and workflows
- The three trees: Working Directory, Staging Area, Repository

✅ **Branching Strategies**
- How to create, switch, and merge branches
- Best practices for branch naming and management

✅ **GitHub Collaboration**
- Pull Request workflow
- Code review process
- Project management features

✅ **Real-World Skills**
- Handling merge conflicts
- Writing good commit messages
- Using GitHub for team collaboration
```

## 🔜 Coming Up Next

In our next lecture, we'll explore the **Software Development Life Cycle (SDLC)** and see how version control fits into the bigger picture of software engineering processes.

```{admonition} 📝 Homework Preview
:class: note

**Assignment 1: Git Mastery** will be released this week! You'll create a personal portfolio repository and practice all the skills we covered today.
```

---

*"Git is not just a tool, it's a way of thinking about collaboration and code evolution."* 🚀
