# CineRental - The One Stop Movie Shop

CineRental is a modern movie rental web application built with React, Vite, and Tailwind CSS. It provides a seamless user experience for browsing, viewing details, and renting movies, with a responsive design and a clean, modular codebase.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Core Concepts](#core-concepts)
- [Customization](#customization)
- [Credits](#credits)

## Features
- Browse a catalog of movies with cover images, genres, ratings, and prices
- View detailed information about each movie in a modal
- Add movies to a shopping cart and view cart contents in a modal
- Remove movies from the cart
- Responsive layout with Tailwind CSS
- Dark mode support

## Tech Stack
- **React 19**: UI library for building interactive interfaces
- **Vite**: Fast development server and build tool
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **ESLint**: Linting for code quality

## Project Structure
```
├── public/
│   └── assets/           # Static assets (images, icons)
├── src/
│   ├── assets/           # Project-specific assets
│   ├── components/       # React components (UI, modals, cards, etc.)
│   ├── context/          # React context for global state (cart)
│   ├── data/             # Static data (movie list)
│   ├── utility/          # Utility functions
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind base styles
├── package.json          # Project metadata and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Getting Started
### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kabbo25/cine-rental.git
   cd cine-rental
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm run dev
   ```
   The app will be available at `http://localhost:5173/` by default.


## Core Concepts
### State Management
- Uses React Context (`src/context/MovieContext.jsx`) to manage cart state globally.
- `useMovie` hook provides access to cart data and setter.

### Components
- **Header**: Navigation bar with cart icon and item count badge.
- **Main**: Layout with sidebar and movie list.
- **MovieList**: Fetches and displays all movies.
- **MovieCard**: Shows movie summary and add-to-cart button.
- **MovieDetailsModal**: Modal with detailed movie info and add-to-cart.
- **CartModal**: Modal showing cart items, with remove and checkout options.
- **CartMovieItem**: Displays individual movie in the cart.
- **Footer**: Copyright.

### Styling
- Tailwind CSS for utility-first styling and responsive design.
- Dark mode supported via conditional classes.

### Assets
- Movie covers and icons are stored in `public/assets/`.
- Images are loaded using a utility function for correct path resolution.

## Customization
- **Add Movies**: Update `src/data/data.js` to add or modify movie entries.
- **Styling**: Modify Tailwind classes in component files or extend Tailwind config.
- **Assets**: Place new images in `public/assets/movie-covers/` and reference them in movie data.
- **Context**: Extend `MovieContext.jsx` to manage additional global state as needed.



For any questions or contributions, please open an issue or submit a pull request.
