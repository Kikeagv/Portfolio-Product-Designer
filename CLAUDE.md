# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a modern portfolio website built with Next.js 15, featuring an animated terminal background effect, interactive link previews, and a bento card layout. The site showcases a product designer's work experience with smooth animations and cutting-edge web technologies.

## Development Commands
- `bun run dev` - Start development server with Turbo
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run preview` - Build and start production preview
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Run ESLint with auto-fix
- `bun run typecheck` - Run TypeScript checks
- `bun run check` - Run both lint and typecheck
- `bun run format:check` - Check code formatting with Prettier
- `bun run format:write` - Format code with Prettier

## Architecture Overview

### Core Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom animations
- **TypeScript**: Full type safety throughout
- **tRPC**: End-to-end typesafe APIs (configured but minimal usage)
- **Motion**: Framer Motion for animations
- **WebGL**: OGL for advanced terminal background effects

### Project Structure
```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with TRPC provider and font config
│   ├── page.tsx           # Home page with hero section and bento cards
│   └── api/trpc/          # tRPC API endpoints
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (link-preview)
│   ├── AnimatedContent.tsx    # Scroll animation wrapper
│   ├── FaultyTerminal.tsx     # WebGL animated terminal background
│   ├── SpotlightCard.tsx      # Card with spotlight hover effect
│   └── Folder.tsx             # Interactive 3D folder component
├── server/api/           # tRPC server-side setup
├── trpc/                # tRPC client configuration
├── lib/                 # Utility functions
└── styles/              # Global CSS and Tailwind imports
```

### Key Architectural Patterns

**Component Architecture:**
- Components use TypeScript interfaces for props
- Heavy use of Framer Motion for micro-interactions
- WebGL (OGL) for performant background animations
- Radix UI primitives for accessible interactions

**State Management:**
- tRPC configured for API calls but minimal current usage
- React Query client for data fetching
- Local component state for UI interactions

**Styling Approach:**
- TailwindCSS with custom CSS animations
- Albert Sans font throughout
- Black background with purple accent colors
- Responsive design with container queries

### Key Components
- **FaultyTerminal**: WebGL shader-based terminal animation with mouse interaction
- **LinkPreview**: Radix UI hover cards with Microlink API for website screenshots
- **SpotlightCard**: Cards with animated spotlight effects on hover
- **AnimatedContent**: Scroll-triggered animations using Framer Motion
- **Folder**: 3D animated folder component for work showcase

### Development Notes
- Uses `~` path alias configured for `src` directory
- Environment variables managed through `@t3-oss/env-nextjs`
- Prettier configured with Tailwind CSS plugin
- ESLint with Next.js and TypeScript configurations
- The project has a dark theme aesthetic with black backgrounds and purple accents
- All animations are GPU-optimized for smooth performance