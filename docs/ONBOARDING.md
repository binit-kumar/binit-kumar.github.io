# Onboarding Guide

## Project Overview

- **Name:** Binit Kumar Portfolio
- **Description:** Personal portfolio website built as a static HTML/CSS/JavaScript site showcasing education, skills, certifications, and contact links.
- **Languages:** `html`, `css`, `javascript`, `svg`, `pdf`, `markdown`
- **Frameworks:** none
- **Graph source:** `.understand-anything/knowledge-graph.json`

---

## Architecture Layers

### Presentation Layer
This is the main website surface: page structure, styling, interactive behavior, and static assets.

- **Primary page:** `index.html`
- **Styling:** `assets/css/styles.css`, `assets/css/styles-min.css`
- **Behavior:** `assets/js/navigation.js`, `assets/js/navigation-min.js`, `assets/js/theme-toggle.js`, `assets/js/theme-toggle-min.js`
- **Images and icons:** many SVG assets under:
  - `assets/images/common/`
  - `assets/images/main/`
  - `assets/images/skills/`
- **Purpose:** render the portfolio landing page, support dark/light mode, navigation interactions, and display certification/skill visuals.

### Documentation and Credentials
This layer holds the proof documents and high-level project overview.

- **Documentation root:** `README.md`
- **Credentials and transcripts:** PDF files under `assets/docs/`
  - `aws-certificate.pdf`
  - `bachelors-transcript.pdf`
  - `csm-certificate.pdf`
  - `generative-ai-certificate.pdf`
  - `github-certificate.pdf`
  - `google-ai-essentials-certificate.pdf`
  - `masters-transcript.pdf`
  - `sharepoint-certificate.pdf`
- **Purpose:** support the portfolio with verifiable certifications and transcripts.

---

## Key Concepts

- **Static portfolio architecture:** single-page HTML with linked CSS and JS assets.
- **Theme toggling:** separate JS module controls dark/light mode using `theme-toggle.js`.
- **Navigation interaction:** site navigation behavior is handled in `navigation.js`.
- **Asset-driven presentation:** most visual content uses SVGs for certifications, contact links, education, and skill badges.
- **Documentation support:** portfolio is backed by authentic documentation PDFs rather than dynamic server-side content.

---

## Guided Tour

1. **Site Overview**
   - Start with `index.html`
   - Review `README.md`
   - Understand the overall page structure and project intent
2. **Frontend Styling and Interaction**
   - Explore `assets/css/styles.css`
   - Review `assets/js/navigation.js`
   - Review `assets/js/theme-toggle.js`
   - Understand layout, responsiveness, navigation behavior, and theme switching
3. **Certifications and Documents**
   - Open the certification and transcript PDFs under `assets/docs/`
   - Verify how credentials are presented in the portfolio

---

## File Map

### Core files
- `index.html` - Main portfolio landing page. Contains the content sections, anchors, and references to CSS/JS assets.
- `README.md` - High-level project documentation and overview.

### Styling
- `assets/css/styles.css` - Primary stylesheet for layout, typography, and responsive behavior.
- `assets/css/styles-min.css` - Minified production CSS.

### JavaScript
- `assets/js/navigation.js` - Navigation behavior logic.
- `assets/js/theme-toggle.js` - Dark/light theme toggle behavior.
- `assets/js/navigation-min.js` - Minified navigation script.
- `assets/js/theme-toggle-min.js` - Minified theme toggle script.

### Visual assets
- `assets/images/common/logo.svg`
- `assets/images/common/dark-mode.svg`
- `assets/images/common/light-mode.svg`
- Certification icons under `assets/images/main/certifications/`
- Contact icons under `assets/images/main/contact/`
- Education and skills icons under `assets/images/main/education/` and `assets/images/skills/`

### Documentation assets
- `assets/docs/*.pdf` - Certification and transcript documents backing the portfolio content.

---

## Complexity Hotspots

- The graph did not include explicit `complexity` values for nodes.
- The biggest areas to review carefully are:
  - `index.html` — the central page structure and content layout
  - `assets/css/styles.css` — the main styling rules
  - `assets/js/navigation.js` and `assets/js/theme-toggle.js` — interactive behavior

---

## Notes

- This project is a static, frontend-focused portfolio site.
- For any updates, ensure assets and document links stay consistent with the page layout.
- Consider adding a `CONTRIBUTING.md` or `ARCHITECTURE.md` if future onboarding needs grow.
