# FZTW — From Zero to Workflow

> An introductory wiki for the **Data & AI Strategy** team at Accenture to get started with Git, GitHub, and VS Code.

---

## Overview

**From Zero to Workflow** is a static, single-site wiki designed for team members who are new to version control and collaborative development. It covers the full workflow — from setting up a repository and configuring Git, to branching, committing, raising pull requests, and resolving merge conflicts — alongside a VS Code setup guide and a curated library of learning resources.

There is no build step, no package manager, and no external dependencies. Everything runs directly in a browser.

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Landing page and overview of the wiki |
| Git & GitHub | `pages/git-github.html` | Step-by-step guide to collaborative Git & GitHub workflows |
| VS Code | `pages/vscode.html` | Installation guide, first-time setup, and recommended extensions |
| Resources | `pages/docs.html` | Curated links to official docs, free courses, videos, and cheat sheets |

---

## Git & GitHub Guide — Topics Covered

1. Set up a private repository and configure Git identity
2. Create branches and make commits
3. Undo changes — uncommitted and committed
4. Keep secrets off GitHub with local data files and `.gitignore`
5. Push your work to GitHub
6. Create a pull request to merge into `main`
7. Merge results and resolve conflicts

Each topic provides two paths: using **Claude Code** (AI-assisted) or **PowerShell + Git** commands directly.

---

## Running Locally

No installation required. Open `index.html` directly in any modern browser:

```
# Option A — double-click
Open index.html in your file explorer

# Option B — VS Code Live Server
Right-click index.html in VS Code → Open with Live Server
```

---

## Project Structure

```
fztw/
├── index.html          # Home page
├── styles.css          # Shared styles
├── script.js           # Shared scripts (header scroll behaviour)
├── assets/
│   └── favicon.svg
└── pages/
    ├── git-github.html # Git & GitHub guide
    ├── git-github.css
    ├── git-github.js
    ├── vscode.html     # VS Code setup guide
    ├── vscode.css
    ├── vscode.js
    ├── docs.html       # Learning resources
    ├── docs.css
    └── docs.js
```

---

## Contributing

This repo is used as a hands-on learning environment. Each contributor works on their own branch and opens a pull request to merge into `main`.

1. Accept the repository invitation (the repo owner sends this)
2. Clone the repo to your local machine
3. Create a branch with your name: `git checkout -b your-name`
4. Make your changes, commit, and push
5. Open a pull request on GitHub targeting `main`

Follow the step-by-step guide in the **Git & GitHub** page for detailed instructions.

---

## Tech Stack

- **HTML5** — semantic markup, no frameworks
- **CSS3** — custom properties, `@keyframes`, `IntersectionObserver`-driven animations
- **Vanilla JavaScript** — accordion toggling, scroll animations, filter tabs
- **Google Fonts** — Space Grotesk

---

*Data & AI Strategy · Accenture · 2026*
