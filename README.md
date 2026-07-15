# Zera — Design Portfolio

A React + Vite portfolio originally created with Figma Make.

## Run locally

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution is blocked:

```powershell
npm.cmd install
npm.cmd run dev
```

Create a production build with:

```bash
npm run build
```

## Source structure

```text
src/
├── app/                         # Application composition and global state
├── components/
│   ├── layout/                  # Shared site layout, such as the header
│   ├── portfolio/               # Homepage sections and visual components
│   └── projects/                # Project cards, modal shell, and modal host
├── config/                      # Shared layout and animation constants
├── data/                        # Translation and other static content
├── features/
│   ├── portfolio/               # Portfolio-specific animation logic
│   └── projects/overlays/       # Individual project detail presentations
├── hooks/                       # Reusable React hooks
├── imports/                     # Figma-generated assets and components
├── pages/                       # Top-level homepage and archive page
├── styles/                      # Global styles and fonts
├── types/                       # Shared TypeScript types
└── utils/                       # Small framework-independent helpers
```

The generated files under `src/imports` are intentionally kept separate from the hand-maintained application code. This makes future cleanup and asset renaming safer.
