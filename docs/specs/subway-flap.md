# Subway Flap (replicates Flappy Subway Bird)

Build the game "Subway Flap" at /home/claude/site/subway-flap.html. Portrait, design size 720x1280. Custom physics (no library).

It must replicate the browser game "Flappy Subway Bird" (a one-touch Flappy Bird-style game set in an underground tunnel) as closely as possible in feel, with original art and name.

RULES SPEC
- Before the first flap the bird hovers in place (gentle bob) with a "Tap to fly" hint; nothing scrolls and no pillars move. The first tap/click/Space/Up both starts the run and counts as a flap.
- Physics in seconds: gravity 2200 px/s², flap sets vy = -680 px/s (not additive), terminal fall speed 1100 px/s. Bird x fixed at 30% of the width. Bird rotation follows vy (clamped -25° up to 90° down) — visual only, hitbox never rotates.
- Tunnel: a ceiling band (y 150–190, under the HUD) and a floor band (bottom 140 px). Touching the floor = death. Touching the ceiling = death.
- Pillars come in pairs (top pillar from the ceiling, bottom pillar from the floor) with a gap between them. Pillar width 120. Gap height 300 at the start, shrinking by 4 px per point scored down to a minimum of 230. Gap center is random within a safe band, and it may move at most 320 px from the previous gap's center (so every pair is reachable). Horizontal spacing between pairs 420 px. Scroll speed 240 px/s constant.
- Score +1 exactly once per pair, when the bird's x passes the pair's right edge.
- Hitbox: circle radius 26 for a 64 px bird. Collision against pillar rectangles uses circle-vs-rect.
- Death: the bird stops moving forward, falls to the floor (no more input accepted), then endGame() after 600 ms.
- Medals on the Game Over screen as the subtitle line: bronze ≥10, silver ≥20, gold ≥30, platinum ≥40 (use the shell's GameOver data; add a "medal" line).
- Deterministic: all random values come from an rng passed into Logic; the simulation step is fixed 1/120 s with an accumulator.

LOGIC SHAPE
- Logic.newWorld(rng) → state {bird:{y,vy}, pillars:[{x,gapY,gapH,scored}], score, started, dead, nextSpawnX}.
- Logic.step(state, dt, flap, rng) → mutates a copy and returns it (pure w.r.t. input). Logic.collides(state).
- A bot for tests: Logic.autopilot(state) → true when it should flap (flap when bird y is below the next gap center + 40 and vy > -100).

CLASSIC BUGS TO TEST
- Pair scored twice. Gap unreachable (distance between consecutive gap centers ≤ 320 for 2000 generated pairs). Frame-rate dependence (same inputs at 30 fps and 144 fps give the same final score/position within 1 px, because of the fixed step). Input after death still flapping. Pillars never removed off-screen (array length stays bounded over a 5-minute simulated run). Autopilot survives 200 pillars on 3 seeds (proves the level is always passable). Ceiling collision detected.

LOOK (keep it simple)
- Dark tunnel: dark grey-blue background, brick-pattern ceiling/floor bands (simple rectangles), rust-orange pillars with a darker cap, a yellow bird (circle + wing + eye). Score shown large in the middle top of the play area.
