# Gemini Project Context: Self Wiki

## Project Overview

**Self Wiki** is a personal wiki application built with the latest modern web technologies. It leverages the Next.js App Router for its architectural foundation and is designed for high performance and developer productivity.

## Context Files

Read the files to get the full context of the app:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

- **Main Technologies:**
  - **Framework:** Next.js 16 (App Router)
  - **Library:** React 19
  - **Styling:** Tailwind CSS 4 (CSS-first configuration)
  - **Language:** TypeScript
  - **Fonts:** Geist & Geist Mono (via `next/font`)

## Building and Running

The project uses standard npm scripts for development and deployment:

- **Development Server:** `npm run dev`
- **Production Build:** `npm run build`
- **Start Production Server:** `npm run start`
- **Linting:** `npm run lint`

## Development Conventions

- **App Router:** All pages and layouts should be placed within the `src/app` directory.
- **Styling:** Use Tailwind CSS 4 utility classes. Configuration is handled via CSS variables and the `@theme` block in `src/app/globals.css`.
- **TypeScript:** Strict type checking is enabled. Ensure all new components and functions are properly typed.
- **Breaking Changes Warning:** This project uses Next.js 16, which may contain breaking changes compared to previous versions. Refer to `AGENTS.md` and internal documentation in `node_modules/next/dist/docs/` for specific API guidance.
- **Layout:** The `RootLayout` in `src/app/layout.tsx` defines the base HTML structure and applies the Geist font variables and global styles.
