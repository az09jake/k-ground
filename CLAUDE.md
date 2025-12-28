# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

K-GROUND is a React + TypeScript web application built with Vite. It's a K-Culture platform connecting IP, Influencers, and O4O (Offline-to-Online) experiences across Food, Fashion, Beauty, and Contents categories.

## Build & Development Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run preview  # Preview production build
```

## Tech Stack

- **React 19** with TypeScript
- **Vite 6** as build tool
- **Tailwind CSS** (loaded via CDN, configured in index.html)
- **Google Gemini AI** (@google/genai) for image generation
- **Lucide React** for icons

## Architecture

### Component Structure
Single-page landing site with section-based components:
- `App.tsx` - Main layout container
- `components/Hero.tsx` - Hero section with background image
- `components/ThemeGrid.tsx` - 4 core themes (Food/Fashion/Beauty/Contents)
- `components/O4OFlow.tsx` - Business model flow visualization
- `components/WonderMon.tsx` - AI Personal Color Analysis feature
- `components/GlobalNetwork.tsx` - Global expansion section
- `components/GeminiImage.tsx` - Reusable AI-generated image component
- `components/Footer.tsx` - Footer with contact info

### Service Layer
- `services/geminiService.ts` - Google Gemini API integration for image generation
  - Exports `generateImage(prompt, aspectRatio)` function
  - Returns base64-encoded PNG images
  - Graceful fallback to picsum.photos when API unavailable

### AI Image Generation
The `GeminiImage` component handles:
- Async image generation with loading states
- Fallback images when generation fails
- Aspect ratios: `16:9`, `1:1`, `3:4`, `4:3`, `9:16`

## Configuration

### Path Aliases
`@/*` maps to project root (configured in tsconfig.json and vite.config.ts)

### Environment Variables
Set in `.env.local`:
- `GEMINI_API_KEY` - Required for AI image generation

### Tailwind Theme Colors
Defined in `index.html` Tailwind config:
- Primary: `#FF6B35` (Orange)
- Secondary: `#FF8B8B` (Coral Pink)
- Accent: `#7FDBDA` (Mint)
- Dark: `#2D2D2D` (Charcoal)
- Light: `#FAFAFA` (Off-White)

### Typography
- Body: Pretendard
- Headings: Poppins

## Navigation Anchors
Page sections have IDs for scroll navigation:
- `#themes` - Core themes section
- `#model` - O4O business flow
- `#wondermon` - AI color analysis feature
- `#partners` - Global network

## Important Notes

- API key is currently client-exposed for prototyping; production should use backend proxy
- Tailwind is loaded via CDN, not installed as npm package
- Process polyfill is added in index.html for browser compatibility
