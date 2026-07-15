# Refactor notes

This refactor reorganizes the Figma Make export without intentionally redesigning the portfolio.

## Main changes

- Reduced `src/app/App.tsx` from a large all-in-one component to a small application coordinator.
- Split the homepage and archive into `src/pages`.
- Extracted the header, project cards, archive cards, filters, CV section, hero section, path, and star into focused components.
- Moved project detail presentations into `src/features/projects/overlays`.
- Moved scroll and star-animation logic into reusable hooks/features.
- Centralized layout constants, navigation types, translations, archive content, and math helpers.
- Moved generated UI helpers out of the `app` folder and into `src/components`.
- Replaced four separate project-open booleans with one typed `activeProject` state.
- Added Escape-key closing and body-scroll locking to project overlays.
- Made the archive call-to-action open the archive page.
- Added clearer semantic HTML and accessible button states where practical.

## Intentionally left for later

- Responsive/mobile redesign of the fixed 1280px Figma canvas.
- URL routing for `/archive` and individual projects.
- Renaming and optimizing generated image assets.
- Removing unused generated UI components and npm dependencies.
- Completing the inactive “Visit cards” navigation action.

## Verification

The refactored project was installed with `npm ci` and passed `npm run build` with Vite 6.3.5.
