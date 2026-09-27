# Goal Puzzle (replicates Football Puzzle Goal)

Build the game "Goal Puzzle" at /home/claude/site/goal-puzzle.html. Follow the pixijs-games skill workflow exactly (spec → copy shell → pure Logic → TESTS → GameScene → verify until PASS → review screenshots → play it). Portrait, design size 720x1280. Physics with matter.js from https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.20.0/matter.min.js (script tag before the module script; window.Matter), fixed 1000/60 ms step with an accumulator.

It must replicate the browser game "Football Puzzle Goal" as closely as possible in gameplay, with original art and name.

RULES SPEC
- Top-down pitch. The ball starts at a set position; a goal (net rectangle with two posts) is somewhere on the level.
- Aim: press on the ball and drag backwards (slingshot). A dotted aim line shows direction and power (first 2 bounces predicted using a simulation copy of the level). Release to shoot. Power is capped. Dragging must start on or near the ball (within 90 px).
- The ball rolls with friction (frictionAir ~0.012), bounces off walls and obstacles (restitution 0.7). Shot ends when the ball's speed drops below a threshold.
- Goal scored when the ball's center fully enters the goal area. Hitting a defender or leaving the pitch just stops the shot (not a loss).
- Each level has a shot limit (1–3 shots). Stars: goal on shot 1 = 3 stars, shot 2 = 2, shot 3 = 1. Out of shots = level failed ("Try again").
- Obstacles: static walls, rotated walls, cones, bouncy pads (restitution 1.3), moving defenders (kinematic bodies moving back and forth along a path at set speed), later a rotating bar.
- 15 levels as data, new mechanic introduced every 3 levels, difficulty rising. Every level must be beatable: for each level store one known solution shot (angle, power) and add a TESTS case that runs a headless matter.js simulation of that shot and asserts a goal. (Keep Logic's simulation code independent from Pixi so tests can run it.)
- Coins: +10 per star earned the first time. A Shop scene lets you buy ball skins (6 skins drawn with Graphics: classic black-white, gold, fire, ice, rainbow, beach ball) with coins; selected skin saved with the shell's Store.
- Level Select scene with stars per level, locked until the previous is cleared. Score for high scores = total stars × 100 + coins earned this session.

CLASSIC BUGS TO TEST
- Shooting while the ball is still moving. Goal counted twice. Ball stuck in a corner forever (end the shot after 6 s). Aim line not matching the real shot. Moving defenders running while paused. Every level's stored solution scores.

LOOK
- Stadium pitch: striped green grass (alternating shades), white field lines, a white goal with a net pattern, red and blue defenders drawn as round top-down players with a shadow, orange cones. Ball spins (rotation from velocity). Goal celebration: net shake + confetti + Sfx 'win'.

