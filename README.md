# From Zero to WoW - Collaborative Development

> A beginner-friendly wiki for the **Data & AI Strategy** team at Accenture — covering Git, GitHub, and VS Code from first principles.

Made for team members with no prior experience. No build step, no dependencies, runs directly in a browser.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

---

## Pages

| Page | Path | What it covers |
|------|------|----------------|
| **Home** | `index.html` | Overview and navigation |
| **Git & GitHub** | `pages/git-github.html` | Full workflow: repo setup → branching → PRs → conflicts → publishing |
| **VS Code** | `pages/vscode.html` | Installation, first-time setup, and recommended extensions |
| **Resources** | `pages/docs.html` | Official docs, free courses, video tutorials, and cheat sheets |
| **Team** | `pages/team.html` | Who's on the team |

---

## Git & GitHub guide — steps covered

| # | Topic |
|---|-------|
| 01 | Set up a private repository and configure your Git identity |
| 02 | Create branches and make commits |
| 03 | Undo changes — before and after committing |
| 04 | Keep private data off GitHub with `.gitignore` |
| 05 | Push your work to GitHub |
| 06 | Open a pull request to merge into `main` |
| 07 | Resolve merge conflicts |
| 08 | Publish your project with GitHub Pages |

Every step offers two paths: **Claude Code** (AI-assisted, plain English) or **PowerShell + Git** (manual commands).

---

## Running locally

No installation required. Open `index.html` in any modern browser:

```
# Option A — double-click
Open index.html in File Explorer

# Option B — VS Code Live Server (required for pages that load local data files)
Right-click index.html in VS Code → Open with Live Server
```

---

## Project structure

```
fztw/
├── index.html          # Home page
├── styles.css          # Shared styles
├── script.js           # Shared scripts (header scroll, animations)
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
    ├── docs.js
    ├── team.html       # Team page
    └── team.css
```

---

## Contributing

This repo is the hands-on exercise environment. Each contributor works on their own branch and opens a pull request to merge into `main`.

1. Accept the repository invitation from the repo owner
2. Clone the repo: `git clone <repo-url>`
3. Create your branch: `git checkout -b your-branch-name`
4. Make changes, commit, and push
5. Open a pull request on GitHub targeting `main`

See the **Git & GitHub** page for full step-by-step instructions.

---

## Tech stack

| Layer | Details |
|-------|---------|
| Markup | HTML5 — semantic, no frameworks |
| Styles | CSS3 — custom properties, `@keyframes`, scroll-driven animations |
| Scripts | Vanilla JavaScript — accordion, filter tabs, `IntersectionObserver` |
| Fonts | Google Fonts — Space Grotesk |

---

*Data & AI Strategy · Accenture · 2026*
