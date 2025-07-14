# In-Class Activity: Git Scavenger Hunt

**Course:** Introduction to Software Engineering  
**Lecture:** 02 - Version Control with Git & GitHub  
**Duration:** 30 minutes  
**Format:** Pairs/Small Groups

## **Overview**

This hands-on activity reinforces Git concepts through a fun, interactive scavenger hunt. Students will work in pairs to complete a series of Git challenges while exploring a sample repository.

## **Learning Objectives**

Students will practice:

- Basic Git commands and navigation
- Reading Git history and understanding commits
- Working with branches and remotes
- Interpreting Git status and logs

## **Setup (5 minutes)**

### Pre-Activity Preparation

1. **Clone the Activity Repository**

   ```bash
   git clone https://github.com/ratulalahy/git-scavenger-hunt.git
   cd git-scavenger-hunt
   ```

2. **Form Pairs**
   - Work with a partner sitting nearby
   - One person will be the "Driver" (types commands)
   - The other will be the "Navigator" (reads clues and guides)

3. **Materials Needed**
   - Computer with Git installed
   - Access to terminal/command line
   - This activity worksheet

## **Activity Instructions**

### Round 1: Repository Exploration (10 minutes)

**Challenge 1: First Commit Detective**

Find the very first commit in this repository.

- **Command to use:** `git log --reverse`
- **Question:** What was the commit message of the first commit?
- **Answer:** ________________________________

**Challenge 2: Author Investigation**

- **Command to use:** `git log --format="%an" | sort | uniq`
- **Question:** How many different authors have contributed to this repository?
- **Answer:** ________________________________

**Challenge 3: File History**

Find out which commit last modified the `README.md` file.

- **Command to use:** `git log -1 --format="%H %s" -- README.md`
- **Question:** What is the commit hash (first 7 characters) and message?
- **Answer:** ________________________________

### Round 2: Branch Adventure (10 minutes)

**Challenge 4: Branch Explorer**

- **Command to use:** `git branch -a`
- **Question:** List all local and remote branches you can see:
- **Answer:** 
  ```
  Local branches:
  ________________________________
  
  Remote branches:
  ________________________________
  ```

**Challenge 5: Secret Branch**

There's a branch with a hidden message. Find it!

- **Command to use:** `git checkout [branch-name]` and `cat secret.txt`
- **Hint:** Look for a branch name related to treasures or secrets
- **Question:** What is the secret message?
- **Answer:** ________________________________

**Challenge 6: Merge History**

Find a merge commit in the repository.

- **Command to use:** `git log --merges --oneline`
- **Question:** What two branches were merged? (Look at the commit message)
- **Answer:** ________________________________

### Round 3: Status and Changes (5 minutes)

**Challenge 7: Current Status**

Check the current status of your repository.

- **Command to use:** `git status`
- **Question:** Are there any uncommitted changes? What is the current branch?
- **Answer:** ________________________________

**Challenge 8: Diff Detective**

Create a small change and examine it.

- **Action:** Add your names to the bottom of `CONTRIBUTORS.md`
- **Command to use:** `git diff`
- **Question:** How many lines did you add/modify?
- **Answer:** ________________________________

## **Bonus Challenges** (If time permits)

**Bonus 1: Tag Hunter**

- **Command:** `git tag`
- **Question:** Are there any tags in this repository? If so, what are they?
- **Answer:** ________________________________

**Bonus 2: Remote Inspector**

- **Command:** `git remote -v`
- **Question:** What is the URL of the origin remote?
- **Answer:** ________________________________

**Bonus 3: Statistics**

- **Command:** `git log --oneline | wc -l`
- **Question:** How many total commits are in this repository?
- **Answer:** ________________________________

## **Wrap-Up Discussion (5 minutes)**

### Reflection Questions

1. **Which Git command did you find most useful for exploring the repository?**

2. **What was the most challenging part of this activity?**

3. **How might these investigation skills help you in real software development?**

4. **What questions do you still have about Git?**

## **Answer Key** (For Instructor)

### Round 1 Answers

**Challenge 1:** "Initial commit with project structure"  
**Challenge 2:** 3 authors (John Doe, Jane Smith, Alex Johnson)  
**Challenge 3:** a1b2c3d "Update README with installation instructions"

### Round 2 Answers

**Challenge 4:**
- Local: main, feature/new-ui
- Remote: origin/main, origin/feature/new-ui, origin/secret-treasure

**Challenge 5:** "Congratulations! You found the hidden branch. Git skills +1!"  
**Challenge 6:** Merged feature/new-ui into main

### Round 3 Answers

**Challenge 7:** Clean working directory, on branch main  
**Challenge 8:** +2 lines added (student names)

### Bonus Answers

**Bonus 1:** v1.0, v1.1, v2.0  
**Bonus 2:** https://github.com/ratulalahy/git-scavenger-hunt.git  
**Bonus 3:** 15 commits

## **Learning Extensions**

### For Fast Finishers

If pairs complete the activity early, challenge them with:

1. **Create a new branch** with their team name
2. **Add a file** with their findings and commit it
3. **Push the branch** to the remote repository
4. **Create a pull request** (if using GitHub classroom)

### For Struggling Students

Provide additional support:

1. **Pair stronger students** with those who need help
2. **Demonstrate commands** on the projector
3. **Provide command reference sheet**
4. **Walk around and assist** individual pairs

## **Assessment**

This activity is **formative assessment** - focus on learning, not grading.

### Participation Points (Optional)

- **Participation:** 5 points for active engagement
- **Completion:** 5 points for attempting all challenges
- **Collaboration:** 5 points for effective pair work

### Observable Learning Indicators

Students demonstrate understanding when they:

- ✅ Navigate Git history confidently
- ✅ Interpret Git command output correctly
- ✅ Collaborate effectively on technical tasks
- ✅ Ask thoughtful questions about Git workflows

## **Follow-Up Activities**

### Homework Connection

This activity prepares students for:

- **Assignment 1:** Git & GitHub Fundamentals
- **Future labs:** Collaborative coding projects
- **Course project:** Team-based development

### Next Class Preview

"In our next class, we'll use these Git skills to start our first team project. You'll be working in groups of 3-4 to build a web application, and you'll need everything you learned today!"

## **Instructor Notes**

### Preparation Checklist

- [ ] Create the git-scavenger-hunt repository with required structure
- [ ] Test all commands and verify answers
- [ ] Prepare backup activity if technology fails
- [ ] Set up classroom with pair seating
- [ ] Have command reference sheets ready

### Common Student Challenges

1. **Git not installed** - Have backup computers or partner sharing
2. **Command line unfamiliarity** - Provide basic navigation help
3. **Git terminology confusion** - Use visual diagrams on board
4. **Pair work difficulties** - Monitor and reassign pairs if needed

### Adaptation Notes

- **Remote learning:** Use breakout rooms and shared screens
- **Large classes:** Consider small group rotation
- **Mixed skill levels:** Create advanced bonus challenges
- **Time constraints:** Focus on Rounds 1-2, skip bonuses

---

**Remember:** The goal is exploration and discovery, not perfect execution. Encourage curiosity and questions!
