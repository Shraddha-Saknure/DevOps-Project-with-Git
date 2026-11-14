# DevOps Project with Git

A complete DevOps project that demonstrates Git branching, pull request workflows, versioning, CI/CD automation, and Dockerized deployment for a simple Node.js application.

## Objective
This repository follows the Git best practices required for the Elevate Labs DevOps internship task:
- initialize a Git repository and push it to GitHub
- maintain separate main, dev, and feature branches
- use pull requests for safe code merging
- document workflow with a proper README
- use .gitignore and semantic version tags
- automate validation with CI/CD tooling

## Project Overview
This project contains a simple Express-based Node.js application. `GET /` returns service metadata, including the version from `package.json`, and `GET /health` reports the health status. GitHub Actions runs the automated checks and builds the Docker image.

## Branch Workflow
The project is structured around the following Git branches:
- `main`: production-ready code
- `dev`: integration branch for testing and review
- `feature`: branch for new feature development and isolated updates

Typical workflow used in this project:
```bash
git checkout main
git checkout -b dev
git checkout -b feature
git add .
git commit -m "Add feature updates"
git push origin feature
git checkout dev
git merge feature
git checkout main
git merge dev
git tag -a v1.0.1 -m "Release v1.0.1"
```

## Technologies Used
- **Version Control**: Git and GitHub
- **Application Runtime**: Node.js
- **Web Framework**: Express
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

## Repository Structure
```text
DevOps-Project-with-Git/
├── .dockerignore
├── .gitignore
├── .github/
│   └── workflows/
│       └── ci.yml
├── tests/
│   └── app.test.js
├── src/
│   └── app.js
├── TASK 4 DEV.pdf
├── Dockerfile
├── README.md
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites
- Git
- Node.js 16 or newer (CI runs Node.js 18)
- Docker 20.0+ (only needed for container commands)

### Installation
```bash
# Clone the repository
git clone https://github.com/Shraddha-Saknure/DevOps-Project-with-Git.git
cd DevOps-Project-with-Git

# Install the exact dependencies from the lockfile
npm ci
```

### Run the app locally
Whenever you want to use the local app, open a terminal in the project folder and run:
```bash
npm start
```

Keep the terminal open while using the app. It listens on port `3000` by default. In your browser, open:

- [http://localhost:3000/](http://localhost:3000/) — app information
- [http://localhost:3000/health](http://localhost:3000/health) — health status

The local links work only on this computer while the server is running. Stop the server with `Ctrl+C`; run `npm start` again whenever you want to use it later.

### Verify the app
You can also verify the endpoints from a terminal while the app is running:
```bash
curl http://localhost:3000/
curl http://localhost:3000/health
```

The root response reports version `1.0.1`, which is read from `package.json`. The health route returns a healthy status and runtime information.

## Testing
Run the project's automated checks locally:
```bash
npm test
npm run lint
npm run build
```

The Jest tests cover the root metadata response and the health endpoint. The lint script performs a JavaScript syntax check. The current build script is a success-message placeholder and does not produce compiled artifacts.

### Docker
Build and run the container (requires Docker Desktop or another running Docker daemon):
```bash
docker build -t devops-app .
docker run -p 3000:3000 devops-app
```

## CI/CD Workflow
The GitHub Actions pipeline defined in `.github/workflows/ci.yml` runs automatically on push and pull request events for `main` and `dev` branches. It performs the following steps:
- dependency installation with `npm ci` on Node.js 18
- unit tests
- JavaScript syntax check
- build script
- Docker image build (the workflow does not start or smoke-test the container)

## Git Commands Used
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git checkout -b dev
git checkout -b feature
git pull origin dev
git push origin feature
git merge feature
git tag -a v1.0.1 -m "Release v1.0.1"
```

## Interview Questions and Answers
### What is Git?
Git is a distributed version control system used to track changes in code, collaborate across teams, and manage project history efficiently.

### What is the difference between merge and rebase?
A merge keeps both histories and creates a merge commit, while rebase rewrites commit history by moving a branch onto another base branch.

### What is a pull request?
A pull request is a request to review and merge feature branch changes into another branch, usually `dev` or `main`.

### How do you resolve merge conflicts?
Review the conflicting files, manually decide which changes to keep, mark the conflict as resolved, and commit the final merged result.

### What are Git tags?
Tags are markers used to identify release points in a repository, such as `v1.0.1` for a stable production release.

### What is a Git workflow?
A Git workflow defines how branches are created, updated, reviewed, and merged, often including `main`, `dev`, and feature branches.

### Explain git stash.
`git stash` temporarily saves uncommitted work so you can switch branches or fix urgent issues without losing changes.

### What is the use of .gitignore?
`.gitignore` prevents temporary files, editor settings, logs, dependencies, and environment variables from being committed to the repository.

## Summary
This project demonstrates a strong DevOps workflow using Git, GitHub, Node.js, Docker, and CI/CD automation. It is structured to support collaborative development, release management, and continuous validation.

## Release History
- **v1.0.1** — Documentation and release metadata update.
- **v1.0.0** — Initial application feature release.
