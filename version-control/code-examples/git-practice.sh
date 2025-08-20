#!/bin/bash

# Git Practice Script
# This script demonstrates basic Git commands

echo " Git Practice Session"
echo "======================"

# Initialize repository
echo "1. Initializing repository..."
git init practice-repo
cd practice-repo

# Create initial file
echo "2. Creating initial file..."
echo "# Practice Repository" > README.md
echo "This is a practice repository for learning Git." >> README.md

# Add and commit
echo "3. Adding and committing..."
git add README.md
git commit -m "Initial commit: Add README"

# Create a new branch
echo "4. Creating feature branch..."
git checkout -b feature/add-content

# Add more content
echo "5. Adding new content..."
echo "" >> README.md
echo "## Features" >> README.md
echo "- Version control practice" >> README.md
echo "- Git workflow demonstration" >> README.md

# Commit changes
git add README.md
git commit -m "feat: add features section to README"

# Switch back to main and merge
echo "6. Merging feature branch..."
git checkout main
git merge feature/add-content

# Show final result
echo "7. Final repository state:"
git log --oneline
echo ""
cat README.md

echo ""
echo "✅ Git practice complete!"
