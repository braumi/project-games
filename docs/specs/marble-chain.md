# Marble Chain (replicates Zuma Ball)

Build the game "Marble Chain" at /home/claude/site/marble-chain.html. Follow the pixijs-games skill workflow exactly (spec → copy shell → pure Logic → TESTS → GameScene → verify until PASS → review screenshots → play it). Landscape, design size 1280x720. Custom logic (no physics library).

It must replicate the browser game "Zuma Ball" (a Zuma-style marble shooter) as closely as possible in gameplay, with original art and name.

RULES SPEC
- A path (polyline sampled from a smooth curve, e.g. a spiral or S-curve, defined per level as control points) runs from a start point to an end hole. Precompute the path as an arc-length table so a marble's position is a single number s (distance along the path).
- A chain of colored marbles (radius 22, spacing = diameter) enters at the start and is pushed along the path at a slow speed; it enters fast for the first 2 seconds, then slows down.
- The shooter sits in the middle and rotates toward the pointer. Pressing the pointer (fires on pointer-down) shoots the current marble in that direction (speed 1400 px/s). Pressing on the shooter itself (or pressing Space) swaps the current and next marble. Swipe gestures do nothing. The next marble's color is shown on the shooter.
- Shooter colors are only chosen from colors still present in the chain.
- A shot marble that touches the chain is inserted at the nearest gap position (before or after the hit marble, whichever side is closer), pushing the marbles behind it forward.
- If the inserted marble makes a group of 3+ same-colored touching marbles, the group is removed, leaving a gap. If the colors on both sides of the gap match, the FRONT part rolls BACKWARD (away from the hole, fast) to meet the back part (classic Zuma); otherwise the front part stops and the gap closes when the pushed back part arrives at normal speed. If the two marbles meeting at the closed gap have the same color and form 3+, that is a combo (removed too, score multiplier +1 per combo in the chain reaction).
- Score: 10 per marble removed × combo multiplier. Bonus spots on the playfield: a shot marble that passes through one gets +100; each spot is a one-time bonus per level (it disappears and does not return). Bumpers on the playfield bounce shots off and cost −20 points (never below 0).
- Marbles still hidden in the start tunnel (s < 0) can't be hit or matched; a shot hitting a marble less than one diameter from the start is inserted ahead of it.
- On the "Level N Clear!" screen, Enter/Space presses Next Level.
- Level cleared when the chain is fully spawned and all marbles are removed. Lose when the front marble reaches the end hole (all remaining marbles roll into it quickly, then game over).
- 6 levels with different paths, colors (4 on level 1, up to 6), chain length and speed. Score accumulates across levels for high scores.

CLASSIC BUGS TO TEST
- Insert position wrong side. Matching across a gap that hasn't closed yet (only touching marbles match). Combo detection after gap close. Chain speed frame-rate dependent. Shooter offering a color no longer in the chain. Shot marbles never removed after leaving the screen. Two shots inserted in the same frame corrupting the chain order (process shots one at a time, keep the chain as an ordered array of { color, s }).

LOOK
- Stone-temple look: sand-colored stone background with a darker carved groove for the path, a round carved end hole, glossy marbles (each color with a radial highlight: red, blue, green, yellow, purple, white), a round carved stone idol as the shooter, with a glowing core showing the next color. Removed marbles pop with a small burst; combos show floating "Combo x2" text.

