# PayTo.onl Web

Modern React + Tailwind CSS website for the PayTo Alliance.

## Overview

- Public website for PayTo standards, solutions, and alliance information
- Built with React 19, React Router, Tailwind CSS 4, and Webpack 5
- TypeScript and ESM (type: module)

## Tech Stack

- React 19, React Router 7
- Tailwind CSS 4, PostCSS, Autoprefixer
- Webpack 5, Babel, TypeScript 5
- Lucide React icons

## Getting Started

Prerequisites:

- Node.js 20+ and npm

Install dependencies:

```bash
npm install
```

### Development

Start a local dev server with HMR:

```bash
npm run dev
```

This opens the site at `http://localhost:8080`.

### Production Build

Create an optimized build in `dist/`:

```bash
npm run build
```

## Project Structure

- `src/` – application source
  - `Components/` – UI components
  - `Pages/` – route pages
  - `data/` – JSON data files (imported with `with { type: "json" }`)
  - `styles/` – global styles
  - `index.tsx` – app bootstrap
- `public/` – static assets (served as-is)
- `webpack.config.js` – build config
- `tailwind.config.js` – Tailwind config

## Conventions

- Use modern ESM imports, including JSON import attributes
- Keep UI consistent with Tailwind classes (no inline styles unless necessary)
- Prefer Lucide icons for UI indicators

## Environment

No secrets are required for local development. All content is static.

## Contributing

Issues and PRs are welcome. Please follow the existing code style and keep edits focused.

## License

This project is licensed under the CORE License. See the `license` field in `package.json`. See `LICENSE` for more details.
