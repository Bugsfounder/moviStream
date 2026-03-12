# Cine-Stream (Movie Explorer)

[live Link](https://movi-stream-56rj.vercel.app/)

Welcome to Cine-Stream, a modern and elegant movie discovery application built with React, Vite, and the TMDB API. It features a simple, clean, humanoid light-themed design.

## Features (Levels 1, 2, 3)

### Core (Level 1)

- **Popular Movies**: Fetches and displays popular movies from the TMDB API in a responsive css grid.
- **Search Functionality**: A search bar allows users to find specific movies.

### Performance (Level 2)

- **Infinite Scroll**: Utilizes the native `IntersectionObserver` API to seamlessly load the next pages of movies as you scroll down, eliminating the need for pagination buttons.
- **Debouncing**: The search input implements a custom `useDebounce` hook (500ms) to ensure API calls are only made after the user pauses typing, saving network requests and improving performance.
- **Favorites List**: Users can save movies to their favorites list by clicking the heart icon. Favorites are persisted across sessions using `LocalStorage` and viewable on a dedicated `/favorites` route.

### Advanced (Level 3)

- **Image Lazy Loading**: All movie poster images implement native `loading="lazy"`, ensuring images outside the viewport are not downloaded until needed.

## Getting Started

### Prerequisites

- Node.js (v18+)
- TMDB API Key

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add your API keys:

   ```env
   VITE_TMDB_KEY=your_tmdb_api_key_here
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Bundles the application for production.
- `npm run preview`: Locally previews the production build.
