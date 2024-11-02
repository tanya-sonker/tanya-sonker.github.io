# Portfolio Migration Document

Project:  https://github.com/tanya-sonker/tanya-sonker.github.io

Current Version: `v2.0.0` (React)

Previous Version: `v1.0.0` (Vanilla HTML/CSS/JS)

# Overview

This document describes the process of migrating my portfolio from a vanilla HTML, CSS, and JavaScript setup to a React-based web application. It covers the motivations, steps, and considerations taken during the migration.

## Goals

1. **Modularity**: Improve code maintainability using React components for shared features like Navbar, Footer, etc. and separate data from presentational layer e.g. About page. Break down giant CSS file into common theme and file-specific CSS
2. **Scalability**: To leverage Material UI to add features like dark theme and in the future, animations using Framer Motion 
3. **Single Page Application**: Prevent page refresh when navigating to every section of my multi page website and streamline routes
4. **Enhanced Performance**: Utilize React’s rendering optimizations and in the future, implement lazy loading for images
5. **Version Control**: Establish a branching and release strategy following semantic versioning for this migration and any future ones like to Next.js. Track significant changes via changelog

# Migration Plan

## Step 1: Initial Setup

1. **Release and Branching Strategy**
    - Tag master branch and publish `v1.0.0` to retain vanilla HTML/CSS/JS version of portfolio
    - Backup vanilla version within repository and create a changelog.md
    - Create a release branch for this React migration `release/react-migration-v2.0`
    - Create feature branches and merge them into release branch when ready
    - Merge release branch into master when ready
    - Tag master branch and publish `v2.0.0`
2. **Create React Project**
    - Create a new React 18 project using create-react-app in the portfolio-react folder
    - Structure repository into public for PWA and src for assets, components, context, pages, theme, utils, and routes

## Step 2: Development

1. **Components**
    - Build Navbar. Add light and dark mode toggle button.
    - Build Footer. Add substack to socials list. Split socials list details — store data in utils folder and present data using footer component
2. **Theme**
    - Build theme. Use contrast checker to use accessible color combinations. Use 2 logos — 1 for each theme.
    - Light: #FFFFFF (white background) and #5D445F (dark purple text)
    - Dark: #121212 (black background) and #CDBACE (light purple text)
3. **Pages**
    - Setup routing for Home, About, Experience, and Contact
    - Ensure logos route back to Home
    - Migrate each page with TSX, CSS, and inline styles
    - Add form to Contact page and make Projects section in Experience page Material Cards

## Step 3: Functionality Enhancement

1. **Add Routing**
    - Used `react-router-dom` to manage navigation between components for a smoother SPA experience
2. **Add State Management**
    - Introduced local state for interactive components (e.g., theme toggle, contact form validation)
3. **Type Safety**
    - Use TypeScript instead of JavaScript for this migration

## Future Enhancements

- Integrate animations using libraries like Framer Motion
- Build another page called resources documenting all books, substacks, and articles that have helped me over the years
- Migrate to Next.js

## Additional Documentation

- **Reel Documentation**
    
    Created a short Instagram reel summarizing the migration process, showcasing before-and-after previews of the portfolio - https://www.instagram.com/tanya.tsx/
    
- **Known Issues**
    
    Documented any unresolved issues from the migration (e.g., loading times, certain animations).