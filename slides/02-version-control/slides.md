---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Version Control with Git and GitHub
  Mastering Modern Development Workflows
  
  Learn Git fundamentals, GitHub collaboration, and professional development practices.
drawings:
  persist: false
transition: slide-left
title: Version Control with Git and GitHub
mdc: true
layout: cover
background: https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=1920&h=1080&fit=crop
css: unocss
---

# Version Control with Git & GitHub
## Mastering Modern Development Workflows

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/ratulalahy/intro_to_swe" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: quote
---

# "Our civilization runs on software"
## - Bjarne Stroustrup

<style>
h1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 700;
}
</style>

---
layout: center
class: text-center
---

# Learning Objectives 🎯

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
<h3>Understand</h3>
<p>Version control fundamentals and why they matter</p>
</div>

<div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white">
<h3>Master</h3>
<p>Essential Git commands and workflows</p>
</div>

<div class="bg-gradient-to-r from-pink-600 to-red-600 rounded-lg p-6 text-white">
<h3>Learn</h3>
<p>GitHub collaboration and team practices</p>
</div>

<div class="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-6 text-white">
<h3>Practice</h3>
<p>Professional branching and merging strategies</p>
</div>

</div>

---
layout: center
background: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop
---

# The Version Control Problem 🤯

<div class="bg-white bg-opacity-90 rounded-lg p-8 mx-auto max-w-4xl">

<div class="grid grid-cols-2 gap-8">

<div>
<h3 class="text-red-600 font-bold mb-4">Before Version Control:</h3>
<ul class="text-lg space-y-2">
<li>📁 <code>project_final.zip</code></li>
<li>📁 <code>project_final_v2.zip</code></li>
<li>📁 <code>project_final_REALLY_final.zip</code></li>
<li>📁 <code>project_final_use_this_one.zip</code></li>
<li>📁 <code>project_final_FINAL_FINAL.zip</code></li>
</ul>
</div>

<div>
<h3 class="text-green-600 font-bold mb-4">With Git:</h3>
<ul class="text-lg space-y-2">
<li>📚 Complete history of all changes</li>
<li>👥 Multiple developers working simultaneously</li>
<li>🌿 Safe experimentation with branches</li>
<li>⏪ Easy rollback to any version</li>
<li>🔍 Detailed tracking of who changed what</li>
</ul>
</div>

</div>

</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop
---

# Git vs GitHub 🆚

<div class="space-y-6">

<div class="bg-blue-100 rounded-lg p-4">
<h3 class="text-blue-800 font-bold">🖥️ Git - Local Version Control</h3>
<ul class="text-blue-700 mt-2">
<li>Runs on your computer</li>
<li>Tracks file changes</li>
<li>Works offline</li>
<li>Command-line tool</li>
</ul>
</div>

<div class="bg-purple-100 rounded-lg p-4">
<h3 class="text-purple-800 font-bold">☁️ GitHub - Cloud Platform</h3>
<ul class="text-purple-700 mt-2">
<li>Remote repository hosting</li>
<li>Web-based interface</li>
<li>Collaboration features</li>
<li>Project management tools</li>
</ul>
</div>

</div>

---
layout: center
---

# Real-World Impact 🌍

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="text-center">
<div class="text-6xl mb-4">🐧</div>
<h3 class="font-bold text-xl mb-2">Linux Kernel</h3>
<p class="text-sm">30+ million lines of code<br>65,000+ contributors</p>
</div>

<div class="text-center">
<div class="text-6xl mb-4">📱</div>
<h3 class="font-bold text-xl mb-2">WhatsApp</h3>
<p class="text-sm">100+ billion messages daily<br>2+ billion users<br>~1,000 employees</p>
</div>

<div class="text-center">
<div class="text-6xl mb-4">🚀</div>
<h3 class="font-bold text-xl mb-2">Netflix</h3>
<p class="text-sm">Deploys 1000+ times per day<br>Thanks to Git workflows</p>
</div>

</div>

<div class="mt-12 text-center">
<p class="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
All powered by Git & GitHub! 🔥
</p>
</div>

---
layout: center
---

# The Three Trees of Git 🌳

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg p-6 text-white text-center">
<div class="text-4xl mb-4">📝</div>
<h3 class="font-bold text-xl mb-2">Working Directory</h3>
<p class="text-sm">Your current project files</p>
<ul class="text-xs mt-2 space-y-1">
<li>Modified files</li>
<li>New files</li>
<li>Deleted files</li>
</ul>
</div>

<div class="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg p-6 text-white text-center">
<div class="text-4xl mb-4">📦</div>
<h3 class="font-bold text-xl mb-2">Staging Area</h3>
<p class="text-sm">Prepared changes for commit</p>
<ul class="text-xs mt-2 space-y-1">
<li>Files ready to commit</li>
<li>Snapshot of changes</li>
<li>Quality control</li>
</ul>
</div>

<div class="bg-gradient-to-b from-green-400 to-green-600 rounded-lg p-6 text-white text-center">
<div class="text-4xl mb-4">🏛️</div>
<h3 class="font-bold text-xl mb-2">Repository</h3>
<p class="text-sm">Permanent project history</p>
<ul class="text-xs mt-2 space-y-1">
<li>All committed changes</li>
<li>Complete timeline</li>
<li>Branch information</li>
</ul>
</div>

</div>

---
layout: center
---

# Essential Git Commands 🔧

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
<h3 class="text-xl font-bold mb-4 text-blue-600">🏗️ Repository Setup</h3>
<div class="bg-gray-100 rounded p-4 font-mono text-sm">
<div class="text-green-600"># Initialize repository</div>
<div>git init</div>
<div class="text-green-600 mt-2"># Clone existing repo</div>
<div>git clone &lt;url&gt;</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold mb-4 text-purple-600">📋 Basic Workflow</h3>
<div class="bg-gray-100 rounded p-4 font-mono text-sm">
<div class="text-green-600"># Check status</div>
<div>git status</div>
<div class="text-green-600 mt-2"># Stage changes</div>
<div>git add .</div>
<div class="text-green-600 mt-2"># Commit changes</div>
<div>git commit -m "message"</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold mb-4 text-red-600">🌿 Branching</h3>
<div class="bg-gray-100 rounded p-4 font-mono text-sm">
<div class="text-green-600"># Create branch</div>
<div>git checkout -b feature</div>
<div class="text-green-600 mt-2"># Switch branch</div>
<div>git checkout main</div>
<div class="text-green-600 mt-2"># Merge branch</div>
<div>git merge feature</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold mb-4 text-orange-600">☁️ Remote Operations</h3>
<div class="bg-gray-100 rounded p-4 font-mono text-sm">
<div class="text-green-600"># Push to remote</div>
<div>git push origin main</div>
<div class="text-green-600 mt-2"># Pull from remote</div>
<div>git pull origin main</div>
<div class="text-green-600 mt-2"># Fetch updates</div>
<div>git fetch</div>
</div>
</div>

</div>

---
layout: center
class: text-center
---

# Let's Code Together! 👨‍💻

<div class="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 mx-auto max-w-3xl text-white">
<h2 class="text-3xl font-bold mb-4">Hands-On Exercise</h2>
<p class="text-xl mb-6">Create your first Git repository step by step!</p>
<div class="text-lg space-y-2">
<p>✅ Configure Git identity</p>
<p>✅ Initialize a repository</p>
<p>✅ Create and commit files</p>
<p>✅ Connect to GitHub</p>
</div>
</div>

<div class="mt-8">
<p class="text-xl">Open your terminal and follow along! 🚀</p>
</div>

---
layout: two-cols
---

# Step 1: Git Configuration ⚙️

<div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono">
<div class="text-gray-500"># Set your identity (do once per computer)</div>
<div class="mt-2">git config --global user.name "Your Name"</div>
<div class="mt-1">git config --global user.email "you@example.com"</div>
<div class="text-gray-500 mt-4"># Verify configuration</div>
<div class="mt-2">git config --list</div>
</div>

<div class="mt-6 p-4 bg-blue-100 rounded">
<h4 class="font-bold text-blue-800">💡 Pro Tip</h4>
<p class="text-blue-700 text-sm">Use the same email you'll use for GitHub to link your commits to your profile!</p>
</div>

::right::

# Step 2: Create Repository 📁

<div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono">
<div class="text-gray-500"># Create project directory</div>
<div class="mt-2">mkdir my-first-repo</div>
<div class="mt-1">cd my-first-repo</div>
<div class="text-gray-500 mt-4"># Initialize Git</div>
<div class="mt-2">git init</div>
<div class="text-gray-500 mt-4"># Check status</div>
<div class="mt-2">git status</div>
</div>

<div class="mt-6 p-4 bg-green-100 rounded">
<h4 class="font-bold text-green-800">✅ Expected Output</h4>
<p class="text-green-700 text-sm font-mono">Initialized empty Git repository in /path/to/my-first-repo/.git/</p>
</div>

---
layout: center
---

# Step 3: Your First Commit 🎉

<div class="bg-gray-900 rounded-lg p-6 text-green-400 font-mono max-w-4xl mx-auto">
<div class="text-gray-500"># Create a README file</div>
<div class="mt-2">echo "# My First Repository" > README.md</div>
<div class="mt-1">echo "This is my introduction to Git!" >> README.md</div>

<div class="text-gray-500 mt-4"># Check what changed</div>
<div class="mt-2">git status</div>

<div class="text-gray-500 mt-4"># Stage the file</div>
<div class="mt-2">git add README.md</div>

<div class="text-gray-500 mt-4"># Commit the changes</div>
<div class="mt-2">git commit -m "Initial commit: Add README"</div>
</div>

<div class="mt-8 grid grid-cols-3 gap-4">
<div class="text-center">
<div class="text-3xl mb-2">📝</div>
<p class="text-sm font-semibold">1. Create/Edit</p>
</div>
<div class="text-center">
<div class="text-3xl mb-2">📦</div>
<p class="text-sm font-semibold">2. Stage</p>
</div>
<div class="text-center">
<div class="text-3xl mb-2">✅</div>
<p class="text-sm font-semibold">3. Commit</p>
</div>
</div>

---
layout: center
---

# Understanding Branches 🌿

<div class="flex justify-center mt-8">
<div class="bg-white rounded-lg p-8 shadow-lg max-w-4xl">

```mermaid {scale: 1.2}
graph LR
    A[Initial commit] --> B[Add README]
    B --> C[Feature branch]
    C --> D[Add login form]
    D --> E[Add validation]
    E --> F[Merge to main]
    B --> G[Fix typo]
    G --> F
    
    style A fill:#e1f5fe
    style F fill:#c8e6c9
    style C fill:#fff3e0
```

</div>
</div>

<div class="mt-8 text-center">
<p class="text-xl font-semibold">Think of branches like tree branches 🌳</p>
<p class="text-lg text-gray-600">Separate development paths that can merge back together</p>
</div>

---
layout: two-cols
---

# Creating Branches 🆕

<div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono">
<div class="text-gray-500"># Create new branch</div>
<div class="mt-2">git branch feature/awesome-feature</div>

<div class="text-gray-500 mt-4"># Switch to branch</div>
<div class="mt-2">git checkout feature/awesome-feature</div>

<div class="text-gray-500 mt-4"># Create and switch (shortcut)</div>
<div class="mt-2">git checkout -b feature/another-feature</div>

<div class="text-gray-500 mt-4"># List all branches</div>
<div class="mt-2">git branch</div>
</div>

::right::

# Working with Branches ⚙️

<div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono">
<div class="text-gray-500"># Make changes</div>
<div class="mt-2">echo "New feature!" > feature.txt</div>

<div class="text-gray-500 mt-4"># Stage and commit</div>
<div class="mt-2">git add feature.txt</div>
<div class="mt-1">git commit -m "Add awesome feature"</div>

<div class="text-gray-500 mt-4"># Switch back to main</div>
<div class="mt-2">git checkout main</div>

<div class="text-gray-500 mt-4"># Merge feature branch</div>
<div class="mt-2">git merge feature/awesome-feature</div>
</div>

---
layout: center
background: https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1920&h=1080&fit=crop
---

# GitHub: Collaboration Supercharged 🚀

<div class="bg-black bg-opacity-70 rounded-lg p-8 mx-auto max-w-4xl text-white">

<div class="grid grid-cols-2 gap-8">

<div>
<h3 class="text-2xl font-bold mb-4 text-blue-300">🐙 GitHub Features</h3>
<ul class="space-y-2 text-lg">
<li>☁️ Remote repository hosting</li>
<li>👥 Team collaboration tools</li>
<li>📋 Issue tracking</li>
<li>📊 Project management</li>
<li>🔄 Pull requests & code review</li>
<li>🤖 GitHub Actions (CI/CD)</li>
</ul>
</div>

<div>
<h3 class="text-2xl font-bold mb-4 text-green-300">🌟 Why GitHub?</h3>
<ul class="space-y-2 text-lg">
<li>🌍 65+ million developers</li>
<li>📚 200+ million repositories</li>
<li>🏢 Used by every major company</li>
<li>🚀 Powers open source</li>
<li>💼 Industry standard</li>
<li>🎓 Great for portfolios</li>
</ul>
</div>

</div>

</div>

---
layout: center
---

# The GitHub Flow 🔄

<div class="bg-white rounded-lg p-8 shadow-lg max-w-5xl mx-auto">

```mermaid {scale: 1.1}
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
    style D fill:#fff9c4
```

</div>

<div class="mt-8 grid grid-cols-4 gap-4 text-center">
<div>
<div class="text-3xl mb-2">🌿</div>
<p class="font-semibold">Branch</p>
</div>
<div>
<div class="text-3xl mb-2">💻</div>
<p class="font-semibold">Code</p>
</div>
<div>
<div class="text-3xl mb-2">👀</div>
<p class="font-semibold">Review</p>
</div>
<div>
<div class="text-3xl mb-2">🚀</div>
<p class="font-semibold">Deploy</p>
</div>
</div>

---
layout: center
---

# Exercise: GitHub Repository 🏗️

<div class="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-8 mx-auto max-w-4xl text-white">

<h2 class="text-2xl font-bold mb-6 text-center">Let's Create Your GitHub Repo!</h2>

<div class="grid grid-cols-2 gap-8">

<div>
<h3 class="text-xl font-bold mb-4">📋 Task Checklist</h3>
<ul class="space-y-3">
<li class="flex items-center"><span class="mr-2">1️⃣</span> Create GitHub account</li>
<li class="flex items-center"><span class="mr-2">2️⃣</span> Create new repository "git-practice"</li>
<li class="flex items-center"><span class="mr-2">3️⃣</span> Clone it locally</li>
<li class="flex items-center"><span class="mr-2">4️⃣</span> Add README with your info</li>
<li class="flex items-center"><span class="mr-2">5️⃣</span> Push changes to GitHub</li>
</ul>
</div>

<div>
<h3 class="text-xl font-bold mb-4">🔧 Commands</h3>
<div class="bg-black rounded p-4 font-mono text-sm">
<div class="text-green-400">git clone https://github.com/username/git-practice.git</div>
<div class="text-gray-400 mt-2">cd git-practice</div>
<div class="text-gray-400">echo "# My Git Practice" > README.md</div>
<div class="text-gray-400">git add README.md</div>
<div class="text-gray-400">git commit -m "Add README"</div>
<div class="text-green-400">git push origin main</div>
</div>
</div>

</div>

</div>

---
layout: center
---

# Merge Conflicts: Don't Panic! 😱➡️😎

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
<h3 class="text-xl font-bold mb-4 text-red-600">🚨 When Conflicts Happen</h3>
<div class="bg-gray-100 rounded p-4 font-mono text-sm">
<div class="text-red-600"><<<<<<< HEAD</div>
<div>function greet() {</div>
<div>    return "Hello World!";</div>
<div>}</div>
<div class="text-blue-600">=======</div>
<div>function greet() {</div>
<div>    return "Hi there!";</div>
<div>}</div>
<div class="text-green-600">>>>>>>> feature-branch</div>
</div>
</div>

<div>
<h3 class="text-xl font-bold mb-4 text-green-600">✅ Resolution Steps</h3>
<ol class="space-y-2 text-lg">
<li>1️⃣ Open the conflicted file</li>
<li>2️⃣ Choose which version to keep</li>
<li>3️⃣ Remove conflict markers</li>
<li>4️⃣ Add and commit resolved file</li>
</ol>

<div class="mt-4 p-3 bg-blue-100 rounded">
<p class="text-blue-800 text-sm font-semibold">💡 Pro Tip: Communicate with your team to avoid conflicts!</p>
</div>
</div>

</div>

---
layout: center
---

# Git Best Practices 🏆

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-green-100 rounded-lg p-6">
<h3 class="text-green-800 font-bold text-xl mb-4">✅ Do This</h3>
<ul class="text-green-700 space-y-2">
<li>📝 Write clear commit messages</li>
<li>🔄 Commit often, in small chunks</li>
<li>🌿 Use feature branches</li>
<li>👀 Review code before merging</li>
<li>🧹 Keep history clean</li>
<li>📋 Use .gitignore files</li>
</ul>
</div>

<div class="bg-red-100 rounded-lg p-6">
<h3 class="text-red-800 font-bold text-xl mb-4">❌ Avoid This</h3>
<ul class="text-red-700 space-y-2">
<li>💾 Committing passwords/secrets</li>
<li>📦 Committing binary files</li>
<li>🤷 Vague commit messages ("fix stuff")</li>
<li>🔧 Working directly on main branch</li>
<li>🏃 Force pushing to shared branches</li>
<li>👻 Large, infrequent commits</li>
</ul>
</div>

</div>

---
layout: center
---

# Commit Message Magic ✨

<div class="max-w-4xl mx-auto">

<div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-8">
<h3 class="text-xl font-bold mb-4">🎯 Perfect Commit Message Format</h3>
<div class="bg-black rounded p-4 font-mono">
<div class="text-yellow-400">type(scope): short description</div>
<div class="text-gray-400 mt-2">
<div>Longer description explaining the change</div>
<div>and why it was necessary.</div>
<div class="mt-2">- Bullet points for details</div>
<div>- Reference issues: Fixes #123</div>
</div>
</div>
</div>

<div class="grid grid-cols-2 gap-6">
<div class="bg-green-100 rounded p-4">
<h4 class="text-green-800 font-bold mb-2">✅ Good Examples</h4>
<div class="text-sm font-mono space-y-1">
<div class="text-green-700">feat(auth): add user login functionality</div>
<div class="text-green-700">fix(api): resolve null pointer exception</div>
<div class="text-green-700">docs(readme): update installation guide</div>
</div>
</div>

<div class="bg-red-100 rounded p-4">
<h4 class="text-red-800 font-bold mb-2">❌ Bad Examples</h4>
<div class="text-sm font-mono space-y-1">
<div class="text-red-700">fix stuff</div>
<div class="text-red-700">updated files</div>
<div class="text-red-700">asdfkjasldkf</div>
</div>
</div>
</div>

</div>

---
layout: center
---

# Advanced Git Tools 🛠️

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="bg-blue-100 rounded-lg p-6 text-center">
<div class="text-4xl mb-3">🔍</div>
<h3 class="font-bold text-blue-800 mb-2">Git Log</h3>
<p class="text-blue-700 text-sm">Explore project history with powerful search and filtering</p>
<div class="mt-3 font-mono text-xs bg-white p-2 rounded">
git log --oneline --graph
</div>
</div>

<div class="bg-purple-100 rounded-lg p-6 text-center">
<div class="text-4xl mb-3">🔄</div>
<h3 class="font-bold text-purple-800 mb-2">Git Rebase</h3>
<p class="text-purple-700 text-sm">Clean up commit history and maintain linear progression</p>
<div class="mt-3 font-mono text-xs bg-white p-2 rounded">
git rebase -i HEAD~3
</div>
</div>

<div class="bg-green-100 rounded-lg p-6 text-center">
<div class="text-4xl mb-3">💾</div>
<h3 class="font-bold text-green-800 mb-2">Git Stash</h3>
<p class="text-green-700 text-sm">Temporarily save work without committing</p>
<div class="mt-3 font-mono text-xs bg-white p-2 rounded">
git stash push -m "WIP"
</div>
</div>

</div>

<div class="mt-8 text-center">
<p class="text-lg font-semibold">Master these for next-level Git proficiency! 🚀</p>
</div>

---
layout: center
---

# Quiz Time! 🧠

<div class="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-8 mx-auto max-w-4xl text-white">

<h2 class="text-2xl font-bold mb-6 text-center">Test Your Knowledge!</h2>

<div class="space-y-6">

<div class="bg-white bg-opacity-20 rounded p-4">
<p class="font-semibold mb-2">1️⃣ You want to discard changes in your working directory. Which command?</p>
<div class="grid grid-cols-2 gap-2 text-sm">
<div class="bg-white bg-opacity-20 p-2 rounded">A) git reset --hard HEAD</div>
<div class="bg-white bg-opacity-20 p-2 rounded">B) git checkout -- filename</div>
<div class="bg-white bg-opacity-20 p-2 rounded">C) git revert HEAD</div>
<div class="bg-white bg-opacity-20 p-2 rounded">D) git stash</div>
</div>
</div>

<div class="bg-white bg-opacity-20 rounded p-4">
<p class="font-semibold mb-2">2️⃣ Which command shows files staged for the next commit?</p>
<div class="grid grid-cols-2 gap-2 text-sm">
<div class="bg-white bg-opacity-20 p-2 rounded">A) git status</div>
<div class="bg-white bg-opacity-20 p-2 rounded">B) git diff</div>
<div class="bg-white bg-opacity-20 p-2 rounded">C) git log</div>
<div class="bg-white bg-opacity-20 p-2 rounded">D) git show</div>
</div>
</div>

</div>

</div>

---
layout: center
---

# Quiz Answers! ✅

<div class="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 mx-auto max-w-4xl text-white">

<h2 class="text-2xl font-bold mb-6 text-center">How Did You Do?</h2>

<div class="space-y-6 text-lg">

<div class="bg-white bg-opacity-20 rounded p-4">
<p class="font-semibold mb-2">1️⃣ Answer: B) <code>git checkout -- filename</code></p>
<p class="text-sm">This discards uncommitted changes in the working directory for specific files.</p>
</div>

<div class="bg-white bg-opacity-20 rounded p-4">
<p class="font-semibold mb-2">2️⃣ Answer: A) <code>git status</code></p>
<p class="text-sm">Shows the status of files in working directory and staging area.</p>
</div>

</div>

<div class="mt-8 text-center">
<p class="text-xl font-bold">🎉 Great job! You're becoming a Git expert!</p>
</div>

</div>

---
layout: center
---

# Hands-On Challenges 🏆

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="bg-blue-100 rounded-lg p-6">
<div class="text-center text-4xl mb-3">🏗️</div>
<h3 class="font-bold text-blue-800 mb-3 text-center">Challenge 1</h3>
<h4 class="font-semibold text-blue-700 mb-2">Repository Setup</h4>
<ul class="text-blue-600 text-sm space-y-1">
<li>✅ Create GitHub repo "swe-practice"</li>
<li>✅ Clone locally</li>
<li>✅ Add README, .gitignore, CONTRIBUTING.md</li>
<li>✅ Make 3 meaningful commits</li>
<li>✅ Push to GitHub</li>
</ul>
</div>

<div class="bg-purple-100 rounded-lg p-6">
<div class="text-center text-4xl mb-3">🌿</div>
<h3 class="font-bold text-purple-800 mb-3 text-center">Challenge 2</h3>
<h4 class="font-semibold text-purple-700 mb-2">Branching Workflow</h4>
<ul class="text-purple-600 text-sm space-y-1">
<li>✅ Create feature branch</li>
<li>✅ Add about.html file</li>
<li>✅ Commit with good message</li>
<li>✅ Push branch to GitHub</li>
<li>✅ Create & merge Pull Request</li>
</ul>
</div>

<div class="bg-green-100 rounded-lg p-6">
<div class="text-center text-4xl mb-3">⚔️</div>
<h3 class="font-bold text-green-800 mb-3 text-center">Challenge 3</h3>
<h4 class="font-semibold text-green-700 mb-2">Merge Conflicts</h4>
<ul class="text-green-600 text-sm space-y-1">
<li>✅ Create two conflicting branches</li>
<li>✅ Modify same line in README</li>
<li>✅ Merge first branch</li>
<li>✅ Try merging second branch</li>
<li>✅ Resolve conflict manually</li>
</ul>
</div>

</div>

---
layout: center
---

# Essential Resources 📚

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-blue-100 rounded-lg p-6">
<h3 class="text-blue-800 font-bold text-xl mb-4">📖 Documentation</h3>
<ul class="text-blue-700 space-y-2">
<li><a href="https://git-scm.com/doc" class="hover:underline">🔗 Git Official Documentation</a></li>
<li><a href="https://guides.github.com/" class="hover:underline">🔗 GitHub Guides</a></li>
<li><a href="https://www.atlassian.com/git/tutorials" class="hover:underline">🔗 Atlassian Git Tutorials</a></li>
</ul>
</div>

<div class="bg-purple-100 rounded-lg p-6">
<h3 class="text-purple-800 font-bold text-xl mb-4">🎮 Interactive Learning</h3>
<ul class="text-purple-700 space-y-2">
<li><a href="https://learngitbranching.js.org/" class="hover:underline">🔗 Learn Git Branching</a></li>
<li><a href="https://lab.github.com/" class="hover:underline">🔗 GitHub Learning Lab</a></li>
<li><a href="http://gitimmersion.com/" class="hover:underline">🔗 Git Immersion</a></li>
</ul>
</div>

</div>

<div class="mt-8 text-center">
<div class="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 mx-auto max-w-2xl text-white">
<h3 class="font-bold text-xl mb-2">🎯 Your Mission</h3>
<p class="text-lg">Practice these concepts daily. Git mastery comes through consistent use!</p>
</div>
</div>

---
layout: center
---

# Key Takeaways 🏁

<div class="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-lg p-8 mx-auto max-w-4xl text-white">

<div class="grid grid-cols-2 gap-8">

<div>
<h3 class="text-xl font-bold mb-4">✅ What You've Mastered</h3>
<ul class="space-y-2">
<li>🔄 Version control fundamentals</li>
<li>⚙️ Essential Git commands</li>
<li>🌿 Branching strategies</li>
<li>🐙 GitHub collaboration</li>
<li>👥 Team workflows</li>
<li>🔧 Problem-solving skills</li>
</ul>
</div>

<div>
<h3 class="text-xl font-bold mb-4">🚀 What's Next</h3>
<ul class="space-y-2">
<li>📋 Software Development Life Cycle</li>
<li>🏃 Agile & Scrum methodologies</li>
<li>📝 Requirements engineering</li>
<li>🎨 UI/UX design principles</li>
<li>🏗️ Software architecture</li>
<li>🧪 Testing strategies</li>
</ul>
</div>

</div>

<div class="mt-8 text-center">
<p class="text-2xl font-bold">🎉 You're now ready for professional development!</p>
</div>

</div>

---
layout: center
class: text-center
---

# Thank You! 🙏

<div class="text-6xl mb-8">🚀</div>

<h2 class="text-3xl font-bold mb-4">Ready to change the world with Git?</h2>

<p class="text-xl mb-8">Every great software project starts with a single commit!</p>

<div class="space-y-4">
<p class="text-lg">📧 <strong>Questions?</strong> qratul@uvu.edu</p>
<p class="text-lg">🐙 <strong>Course Repo:</strong> github.com/ratulalahy/intro_to_swe</p>
<p class="text-lg">📚 <strong>Next:</strong> SDLC & Agile Methodologies</p>
</div>

<div class="mt-12">
<p class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
Happy Coding! 💻✨
</p>
</div>

<style>
h1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
