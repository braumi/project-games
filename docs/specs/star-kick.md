# Star Kick (replicates GoalShot)

Build the game "Star Kick" at /home/claude/site/star-kick.html. Landscape, design size 1280x720. Physics with matter.js from https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.20.0/matter.min.js (script tag before the module script; use window.Matter). Fixed 1000/60 ms step with an accumulator.

It must replicate the browser game "GoalShot" as closely as possible in gameplay, with original art and name.

RULES SPEC
- Side view with gravity (matter gravity y = 1, scale default). A player figure stands on the left; the ball rests at the player's foot at a set position per level. A goal (frame with posts, open on the side facing the play area) is placed per level.
- Aim: press and hold anywhere, drag to set direction and power (drag vector from the ball; power proportional to length, capped). A dotted trajectory preview shows the first 1.2 s of flight simulated with a copy of the level (walls, boxes, portals — not moving obstacles' future positions). Release to shoot.
- The ball bounces (restitution 0.55) off walls, the ground and boxes. Boxes are dynamic bodies that can be knocked over. Moving obstacles (kinematic platforms moving along a path, back and forth) block the ball.
- Portals come in linked pairs (A/B). When the ball's center enters a portal, it exits the linked portal with the same speed, rotated by the difference between the portals' exit angles; a portal cannot re-trigger for 250 ms after the ball exits it.
- Stars: each level has 1–3 stars floating in the air. The ball collects a star by touching it mid-flight. A shot only counts as a goal if the ball has collected at least one star during that same shot before entering the goal ("hit at least one star mid-flight, then land the ball in the goal"). A goal without a star counts as a miss.
- Balls per level: 3 (some later levels 2). Each shot uses a ball. A shot ends when the ball scores, leaves the screen, or rests (speed < 0.2 for 800 ms), or after 8 s. Stars collected in a shot that didn't score reset for the next ball.
- Level result: stars rating = number of stars collected on the scoring shot (1–3). Out of balls without a valid goal → "Try again".
- 15 handcrafted levels as data, one new element every ~3 levels: plain shots → walls → boxes → moving platforms → portals. Each level stores a known solution (angle, power) that is verified by a TESTS case running a headless matter.js simulation and asserting a valid goal with ≥1 star.
- Level Select with stars per level, locked until the previous is cleared, progress saved with the shell's Store. Score for high scores = 100 × total level-stars + 50 × balls left on each cleared level (accumulated for the session), recorded on Game Over (quit) or after the final level.
- Unlockables: skip them (cosmetics only); keep the ball plain.

LOGIC SHAPE
- Logic.buildWorld(levelData) → { engine, bodies... } using Matter only. Logic.simulateShot(levelData, angle, power, maxMs) → { goal, starsHit, endReason } running headless with fixed steps. The GameScene uses the same buildWorld so preview, tests and the real game share physics.

CLASSIC BUGS TO TEST
- Goal without a star counted. Star counted twice. Portal infinite ping-pong. Stars not reset between balls. Shooting while a ball is in flight. Ball resting forever (shot never ends). Trajectory preview diverging from the real shot (simulate the same angle/power in two worlds; positions after 1.2 s match within 2 px). Every level's stored solution scores.

LOOK (keep it simple)
- Sky-blue background, green ground strip, grey walls, brown boxes, purple/orange portal rings, gold stars, a white goal frame with a net pattern, a simple stick-figure kicker. Keep it clean.
