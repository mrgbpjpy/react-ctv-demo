# React CTV Demo

A Connected TV (CTV) style application built with React, TypeScript, Zustand, and Vite.

This project demonstrates large-screen user experience patterns commonly found in streaming, media, and television applications.

## Live Demo

https://fox-local-ctv.vercel.app/

## Features

- React + TypeScript
- Zustand State Management
- Keyboard Remote Navigation
- CTV Focus Management
- Dynamic Content Rows
- Video Playback
- Hero Banner Updates
- Responsive Card Layout
- Smart TV Style User Experience
- Vite Build System
- Vercel Deployment

## Navigation

Use your keyboard like a TV remote:

| Key   | Action       |
| ----- | ------------ |
| ←     | Move Left    |
| →     | Move Right   |
| ↑     | Move Up      |
| ↓     | Move Down    |
| Enter | Play Video   |
| Esc   | Close Player |

## Tech Stack

### Frontend

- React
- TypeScript
- Zustand
- Vite

### Deployment

- Vercel

## Project Structure

```txt
src/
├── components/
│   ├── NavBar
│   ├── Hero
│   ├── ContentRow
│   └── VideoCard
│
├── store/
│   └── useAppStore
│
├── services/
│   └── contentService
│
├── data/
│   └── content
│
├── types/
│   └── types
│
└── App.tsx
```

## State Management

The application uses Zustand for:

- Focus Management
- Row Navigation
- Item Navigation
- Video Selection
- Content Loading

## CTV Concepts Demonstrated

This project demonstrates common Connected TV development patterns:

- Focus-based navigation
- Remote control interactions
- Content rails
- Hero banner updates
- Media playback
- Large screen UI design
- State-driven navigation

## Future Enhancements

- Continue Watching
- Favorites
- User Profiles
- Search
- HLS Streaming
- Authentication
- Live Channel Guide
- Video Progress Tracking

## Running Locally

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Author

Erick Esquilin

Software Developer | Power Platform Developer | React Developer

## Contact

For questions, collaboration opportunities, or technical discussions:

- Email: <mrgbpjpy@gmail.com>
- GitHub: https://github.com/mrgbpjpy
- Demo: https://fox-local-ctv.vercel.app/
