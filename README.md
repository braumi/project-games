# Playbox

A React arcade for ten browser games. The home page lists every title with category filters and local high scores. Each card opens a dedicated play page.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![PixiJS](https://img.shields.io/badge/PixiJS-8-E72264?logo=pixijs&logoColor=white)](https://pixijs.com)

The current working copy also lives at `Documents/GitHub/playbox` — use that folder name for interviews.

## Features

- Catalogue of ten games with a featured new-game hero and category filters
- Full-screen player with letterboxed aspect ratio and fullscreen support
- Gameplay screenshots on every card
- High scores stored in `localStorage` on this device
- Light and dark themes that follow the system preference
- Keyboard, mouse, and touch controls in every title

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19, React Router 7, CSS Modules |
| Language | TypeScript |
| Bundler | Vite 7 |
| Games | PixiJS 8 ES modules, Matter.js for Hoop Drop, Three.js and Rapier for Cannonfall |
| Persistence | `localStorage` |

The hall is a React SPA. Each game is a self-contained module under `public/games/<id>/`. Pixi titles load the engine from `/vendor/pixi.min.mjs`. Cannonfall is a Three.js + Rapier 3D game.

## Getting started

```bash
npm install
npm run vendor
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Project structure

```
public/
  games/                 one folder per PixiJS title
  images/games/          catalogue screenshots
  vendor/                local pixi.min.mjs and matter.min.js
src/
  app/                   routes
  pages/
    home/                catalogue
    play/                player
    not-found/
  components/
    games/               cards, grid, player frame
    layout/              shell, header, footer
    ui/                  logo, chips, buttons
  data/                  game catalogue
  hooks/
  lib/                   localStorage helpers
  styles/                design tokens
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Filterable game list |
| `/play/:gameId` | Player |
| `/#gameId` | Redirects to the play page |

## Games

Arcade: Cannonfall, Subway Flap, Star Bouncer. Puzzle: 2048, Marble Chain. Cards: Key Peaks Solitaire. Board: Halma. Sports: Hoop Drop, Goal Puzzle, Star Kick.
