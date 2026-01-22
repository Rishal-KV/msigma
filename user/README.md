# MSigma User Dashboard

The modern, responsive frontend for the MSigma project.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks & Context API
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Features

- **Dark Mode**: Complete dark/light mode support with system preference detection.
- **Interactive Sidebar**: Collapsible navigation with active state tracking.
- **User Management UI**: 
  - Data table with sorting and filtering.
  - Search functionality.
  - Status-based filtering.
  - User creation forms with validation.
- **Premium Aesthetics**: Smooth transitions, gradients, and a clean modern design.

## Installation

```bash
npm install
```

## Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to find and fix code issues.
- `npm run preview`: Previews the local production build.

## Configuration

The project uses `components.json` for Shadcn UI configuration and `vite.config.ts` for build settings. Dark mode is handled via the `ThemeProvider` in `src/components/theme-provider.tsx`.
