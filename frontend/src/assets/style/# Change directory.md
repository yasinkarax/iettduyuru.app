# Change directory

cd folder-name

# Example: cd src

cd .. # Go up one level

# Example: cd .. (from src/ to project root)

cd ~ # Go to home directory

# Example: cd ~ (goes to /c/Users/yasin)

cd - # Go to previous directory

# Example: cd - (switches back to last directory you were in)

# List files

ls # List files and folders

# Example: ls (shows App.vue, main.js, router/ etc.)

ls -la # List with details (hidden files too)

# Example: ls -la (shows .gitignore, file sizes, permissions)

ls -l # List with details

# Example: ls -l (shows file details without hidden files)

# Show current location

pwd

# Example: pwd (outputs: /c/Users/yasin/OneDrive - Karadeniz Teknik Üniversitesi/software/iettduyuru.app)

# Create files/folders

mkdir folder-name # Create folder

# Example: mkdir components

mkdir -p path/to/folder # Create nested folders

# Example: mkdir -p src/assets/styles

touch filename.txt # Create empty file

# Example: touch variables.scss

# Copy, move, delete

cp file1.txt file2.txt # Copy file

# Example: cp App.vue App-backup.vue

mv old-name new-name # Rename/move file

# Example: mv oldfile.js newfile.js

mv filename.txt folder-name/

# Example: mv temp.vue src/components/

rm filename.txt # Delete file

# Example: rm temp.log

rm -rf folder-name # Delete folder and contents

# Example: rm -rf node_modules

cp file1.txt folder-name/ # Copy file to folder

# Example: cp package.json backup/

mv filename.txt folder-name/ # Move file to folder

# Example: mv temp.vue components/

rm \*.log # Delete all .log files

# Example: rm \*.log (deletes error.log, debug.log, etc.)

rm -rf old-folder/ # Delete old folder and contents

# Example: rm -rf dist/

git init # Initialize new repo

# Example: git init (creates .git folder in current directory)

git clone <url> # Clone repository

# Example: git clone https://github.com/username/iettduyuru.app.git

# Status and changes

git status # Check status

# Example: git status (shows "modified: src/App.vue")

git diff # See changes

# Example: git diff (shows line-by-line changes in files)

git log --oneline # View commit history

# Example: git log --oneline (shows: a1b2c3d Add navigation menu)

# Staging and committing

git add . # Stage all changes

# Example: git add . (stages App.vue, main.js, and all modified files)

git add filename.txt # Stage specific file

# Example: git add src/App.vue

git commit -m "message" # Commit with message

# Example: git commit -m "Fix navigation HTML structure"

# Branching

git branch # List branches

# Example: git branch (shows: \* main, feature/styling)

git branch new-branch # Create branch

# Example: git branch feature/navigation

git checkout main # Switch to branch

# Example: git checkout main (switches to main branch)

git checkout -b new-branch # Create and switch

# Example: git checkout -b feature/sass-setup

# Remote operations

git push origin main # Push to remote

# Example: git push origin main (pushes commits to GitHub)

git pull origin main # Pull from remote

# Example: git pull origin main (gets latest changes from GitHub)

git remote -v # Show remotes

# Example: git remote -v (shows:
