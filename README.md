# Aliff Muhaimin - Developer Portfolio

A modern, high-performance static portfolio website built with **Astro v5**, **Tailwind CSS**, and designed with a bold **Neo-Brutalism** aesthetic.

## 🎨 Design Identity: Neo-Brutalism
- **Bold Typography**: Powered by Google Fonts (*Space Grotesk* and *Space Mono*).
- **High Contrast**: Solid 2px/3px black borders (`border-black`) on flat canvases.
- **Hard Offsets & Box Shadows**: Distinct unblurred black box shadows (`shadow-hard`).
- **Saturated Accents**: Electric purple accent accents (`#7C3AED`) and flat fill tags.
- **No Blurs / No Gradients**: 100% flat, clean aesthetic.

## 🛠️ Tech Stack
- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** GitHub Actions + GitHub Pages (`.github/workflows/deploy.yml`)

## 📁 Project Structure
```text
Portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.astro        # Intro, headline, skill badges, CTAs
│   │   ├── Projects.astro    # Featured case studies & tech tags
│   │   └── Contact.astro     # Contact section with action buttons
│   ├── layouts/
│   │   └── Layout.astro      # Global shell, navigation & footer
│   ├── pages/
│   │   └── index.astro       # Main page entry
│   └── styles/
│       └── global.css        # Tailwind directives & Neo-Brutalism classes
├── public/                   # Static assets (favicon)
├── .github/workflows/        # Automated deployment workflow
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Getting Started

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production Build
```bash
npm run build
```
Generates production-ready static assets in `dist/`.
