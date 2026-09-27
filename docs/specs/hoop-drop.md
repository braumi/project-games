# Hoop Drop (replicates Dunk Balls)

Build the game "Hoop Drop" at /home/claude/site/hoop-drop.html. Follow the pixijs-games skill workflow exactly (spec → copy shell → pure Logic → TESTS → GameScene → verify until PASS → review screenshots → play it).

It must replicate the browser game Dunk Balls as closely as possible in gameplay and feel, with original art and name.

RULES SPEC
- Portrait, design size 720x1280. Physics with matter.js loaded from https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.20.0/matter.min.js (script tag before the module script; use window.Matter). Pixi only draws; matter.js simulates. Step the engine in tick() with a fixed 1000/60 ms step using an accumulator, never variable dt.
- Each level: a dispenser at the top releases N balls (level 1: 5 balls) one after another, 700 ms apart, once the player taps "Drop".
- The player controls one or more paddles (flat bars, 180x24). Drag a paddle to move it; drag the round handle at its end to rotate it. Paddles are static bodies that can be moved at any time, before or during a drop; balls react live.
- A basket (open-topped cup, static walls) sits somewhere on the level. A ball counts as dunked when its center is inside the basket's inner area and its speed is below a small threshold for 300 ms.
- Walls, pegs and bumpers make later levels harder. Balls leaving the screen are lost.
- Level goal: dunk at least K of N balls (shown as "3 / 5" on the HUD). When all balls are dunked or lost: success → stars (all balls = 3 stars, K+1 = 2, K = 1), else "Try again".
- Score = 100 per dunked ball + 50 bonus per star. Total score across levels goes to high scores when the player finishes the last level or quits via Game Over.
- 12 levels defined as data (positions of basket, paddles, walls, pegs, N, K), introducing one new element every few levels. Levels must be solvable: add a TESTS case per level checking basket is reachable (not enclosed) and paddles fit on screen.
- Add a Level Select scene (grid of level buttons with stars, locked until the previous level is done; progress saved with the shell's Store). Menu "Play" continues from the highest unlocked level.

CLASSIC BUGS TO TEST
- Ball counted twice as dunked. Ball counted as dunked while bouncing out. Balls tunnelling through thin paddles (use body thickness ≥ 24 and matter's positionIterations 10). Physics running while paused. Dragging a paddle through a ball launching it at extreme speed (cap ball speed).

LOOK
- Warm arcade-gym look: wooden-floor gradient background, orange basketballs drawn with Graphics (circle + seam lines), a red hoop-style basket with a white net pattern, blue paddles with a white grip handle. Small confetti burst on every dunk, Sfx 'score' on dunk, 'hit' on paddle bounce (throttled).

