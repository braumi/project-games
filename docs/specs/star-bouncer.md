# Star Bouncer (replicates Bounce Ball)

Build the game "Star Bouncer" at /home/claude/site/star-bouncer.html. Follow the pixijs-games skill workflow exactly (spec → copy shell → pure Logic → TESTS → GameScene → verify until PASS → review screenshots → play it). Landscape, design size 1280x720 (the original is 800x480 landscape). Custom fixed-step physics (no library).

It must replicate the browser game "Bounce Ball" (htmlgames.com) as closely as possible in feel, with original art and name.
Source of truth: the original's js/game.js (cdn.htmlgames.com/BounceBall/js/game.js), decoded — GamePlay tick, Ball/Floor/Mountain/Star, GameConfig.
Logic runs in the original units (800x480 playfield, "u") with fixed 20 ms ticks; the renderer scales u -> design px (S = 550/480) below the HUD.

RULES SPEC (from the original source)
- Tick: every 20 ms (50 Hz). Everything scrolls left 4 u per tick (200 u/s), constant — no speed ramp.
- Ball: 31x31, fixed at x = 111 (~14% of the width), starts at y = 266 moving UP. No gravity: it moves up at a constant 4 u/tick (bspUp -4) and, after a tap, down at 8 u/tick (bspDown +8).
- Tap / click (on touch-down) / Space / ArrowDown: the ball switches to moving down and keeps falling until it touches a floor tile; the floor switches it back to moving up (bounce sound). Tapping while it already falls does nothing.
- If the ball's top leaves the playfield (y < 0) the game is lost — you must keep tapping to stay on screen.
- Floor: contiguous tiles 400 u (70%) or 150 u (30%) wide, 10 u thick, at y 373 / 383 / 393 (steps of ±10). Next height: from 383 → 373 40% / 383 30% / 393 30%; from 373 → 383 80% / 373 20%; from 393 → 383 80% / 393 20%. A new tile is added when the last one ends within 10 u of the right screen edge. A higher tile reaching the ball just bounces it up (floor test: tile.y < ball bottom and x-overlap).
- Spikes ("mountains"): each new tile gets one with 90%; a 400-wide tile gets a second with 90%. Type 50/50: tall 42x48 or short 42x29, standing on the tile at a random x inside it.
- Stars: each spike spawns one with 80%, 50 u beyond the right screen edge, at y 170..300 (upper-middle band). Star 28x27. Touching one = +50 (Sfx 'score', sparkle, "+50").
- Tick order: scroll; floor test (bounce); spike test (death ends the tick); star test; ball moves; ceiling test.
- Spike hit box (original, inset): ball.bottom > spike.y + 10 and spike.x < ball.x + 21 and spike.x + spike.w − 10 > ball.x → game over.
- Star box: ball.y > star.y − 31 and ball.y < star.y + 27 and full x-overlap.
- Score = 50 per star only. No time points, no lives, no levels (the original's level-complete code is never called). One hit or leaving the top = game over ("Play again").
- Opening layout as the original: stars at (272,257) and (570,347), spikes tall at (279,343) and short at (455,355), tiles ending at 504 (y 383) and 904 (y 393).
- Passability: keep the original distribution; a constructive guard (no search) skips a spike only if it would chain spikes into a danger run longer than 300 u with < 64 u of landing room (fires on ~0.03% of spikes). TESTS verify generated courses with an independent exact tick-by-tick reachability search (human limit: ≥ 6 ticks between a bounce and the next dive), plus a planning bot that survives the real simulation.

DEVIATIONS (deliberate)
- Wider view than the original (1280x720 at S = 550/480 ≈ 960 u visible ahead vs 690 u): spawning is relative to our right edge so nothing pops in.
- Taps during pause or after game over are dropped (the original would buffer a key press made during pause).
- The ball is drawn snapped onto the floor during the ≤ 8 u dip the original tick allows; positions are interpolated between 20 ms ticks.
- Game Over screen ignores keys for 800 ms (shell grace period).

CLASSIC BUGS TO TEST
- Frame-rate dependence (fixed 20 ms ticks with an accumulator). Star collected twice. Dive tap buffered during pause/game over. Ball drawn inside the floor. Points from the fatal frame lost (sync score before handling death). Space on Game Over restarting instantly. Impossible spike runs. Objects not removed off-screen.

LOOK
- Clean, bright look: sky-blue gradient background with drifting clouds (parallax, slower than the world), grass-topped dirt floor tiles with visible 10 u steps, a glossy red ball with a white highlight, a squash-and-stretch on bounce (scale.y 0.8 for 80 ms), gold 5-point stars that slowly rotate, grey spike/mountain triangles, a dashed danger line at the top of the playfield. Distance and star counters in the HUD row.
