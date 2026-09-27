# Playbox

A React site for nine PixiJS browser games. The hall lists every title; each card opens a dedicated play page.

## Run

```bash
npm install
npm run vendor
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Layout

```
public/
  games/                 playable PixiJS titles
  thumbs/                gameplay screenshots for the catalogue
  vendor/                local pixi.min.mjs + matter.min.js
src/
  components/
    games/               catalogue cards + play frame
    layout/              header, footer, page wrap
    ui/                  logo, chips, buttons
  data/                  game catalogue
  hooks/
  lib/                   high-score + filter storage
  pages/                 home list, play page, 404
  styles/                Playbox design tokens
```

Routes:

- `/` — filterable game list
- `/play/:gameId` — full-screen player
- `/#game-id` — redirects to the play page

The site is React. Cards show real gameplay shots. Each title stays a complete PixiJS game and loads `/vendor/pixi.min.mjs`.
