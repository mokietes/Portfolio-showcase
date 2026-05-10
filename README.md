# Personal Portfolio — Mekonnen Tesfazien

A responsive, production-grade personal portfolio built with React and Vite. Features
animated section transitions via Framer Motion, a Three.js powered technology showcase,
a vertical experience timeline, and a working contact form backed by EmailJS.

Live site: https://mokie-portfolio.netlify.app/

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [License](#license)

---

## Overview

This portfolio serves as a central hub for showcasing work experience, technical
projects, and contact information. The design prioritizes performance and clarity,
with all content driven from a single constants file to make updates straightforward.

Sections:

- Hero — name, tagline, and personal photo
- About — professional summary and service offerings
- Technologies — interactive 3D ball canvas for each skill
- Projects — expandable project cards with live demo and source links
- Experience — vertical timeline of work history with resume download
- Contact — EmailJS-powered form with real-time submission feedback

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 4 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 10 |
| 3D Rendering | Three.js, @react-three/fiber, @react-three/drei |
| Routing | React Router DOM 6 |
| Contact Form | EmailJS |
| Timeline | React Vertical Timeline Component |
| Deployment | Netlify |

---

## Project Structure

```
src/
├── assets/
│   ├── backgrounds/       # Section background images
│   ├── company/           # Work experience company logos
│   ├── icons/             # UI icons (menu, send, download, etc.)
│   ├── logo/              # Site logo and logo text
│   ├── personal/          # Profile photo
│   ├── projects/          # Project screenshot images
│   ├── tech/              # Technology stack icons
│   └── index.js           # Single barrel export for all assets
│
├── components/
│   ├── canvas/
│   │   └── Ball.jsx       # Three.js floating ball with tech icon decal
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Tech.jsx
│   └── index.js
│
├── constants/
│   └── index.js           # All site content: nav, services, tech, experience, projects
│
├── hoc/
│   └── SectionWrapper.jsx # HOC that applies scroll animations and padding to sections
│
├── utils/
│   └── motion.js          # Reusable Framer Motion animation variants
│
├── App.jsx                # Root layout
├── main.jsx               # ReactDOM entry point
├── styles.js              # Shared Tailwind class strings
└── index.css              # Global styles, custom fonts, canvas loader animation

public/
├── resume.pdf             # Resume file served directly from the domain
└── _redirects             # Netlify SPA redirect rule
```

---
## Icon Credits

Technology icons sourced from [CIB SVG Icons](https://svgicons.com/icon-set/cib-svg-icons)
and [Devicons](https://devicons.github.io/devicon).

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

Clone the repository:

```bash
git clone https://github.com/mokietes/Portfolio-showcase.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.
## Deployment

This project is configured for deployment on Netlify.

### Steps

1. Push the repository to GitHub
2. Log in to Netlify and select "Import an existing project"
3. Connect your GitHub repository
4. Set the following build configuration:

```
Build command:   npm run build
Publish directory: dist
```

5. Add environment variables for EmailJS under Site Settings
6. Deploy

### Netlify Redirect Rule

The `public/_redirects` file is required for React Router to work correctly on
Netlify. It must contain:

```
/*    /index.html   200
```

This prevents 404 errors when navigating directly to a route or refreshing the page.

---

## Customization Guide

All site content is managed from a single file:

```
src/constants/index.js
```

Update the following arrays to reflect your own information:

- `navLinks` — navigation items
- `services` — about section service cards
- `technologies` — tech stack icons shown in the 3D ball grid
- `experiences` — work history entries for the timeline
- `projects` — project cards with descriptions, images, and links

### Replacing Assets

| Asset | Location |
|---|---|
| Profile photo | src/assets/personal/ |
| Company logos | src/assets/company/ |
| Project screenshots | src/assets/projects/ |
| Site logo | src/assets/logo/ |
| Resume PDF | public/resume.pdf |

After replacing an asset file, update the corresponding import in
`src/assets/index.js` if the filename has changed.

---

## License

This project is based on the open-source Portfolio Template by Shaquille Ndunda,
released under the MIT License. Modifications and content are by Mekonnen Tesfazien.
See LICENSE for details.