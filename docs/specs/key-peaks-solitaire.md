# Key Peaks Solitaire (replicates 3 Keys Solitaire)

Build the game "Key Peaks Solitaire" at /home/claude/site/key-peaks-solitaire.html. Follow the pixijs-games skill workflow exactly (spec → copy shell → pure Logic → TESTS → GameScene → verify until PASS → review screenshots → play it). Landscape, design size 1280x720.

It must replicate the browser card game "3 Keys Solitaire" as closely as possible in rules and flow, with original card art and name.

RULES SPEC
- Two standard 52-card decks plus Jokers.
- Tableau: 7 columns of face-up, overlapping cards. Level 1 column sizes: 10, 8, 6, 11, 14, 5, 13 (67 cards). Only the bottom (front) card of each column is playable.
- Reserve: 36 cards face down. Tapping the reserve deals its top card face up onto a waste pile (onto every open waste pile, one card each, if more than one is open).
- Play: a tableau card can be moved onto a waste pile if it is exactly one rank higher or lower than that pile's top card. Ace and King connect (K–A–2 wrap). Suits don't matter.
- Waste piles: 1 open at the start. Two KEY cards are hidden inside two columns (placed as special cards within the stacks). When a column is cleared down to its key and the key is played (tapping it), one more waste pile unlocks, up to 3 piles total. Show locked piles with a padlock.
- Jokers: a Joker button with a counter (level 1: 4 jokers, one less every 2 levels, minimum 1). Using a joker puts a wild card on a chosen waste pile; any card can be played on a joker, and the joker counts as that card's neighbour for the next play (i.e. after card X is played on a joker, the pile top is X).
- Timer: level 1 has 7:00, each next level 30 s less (level 10 = 2:30). Time out = Game Over.
- Level won when the tableau is empty. Score: +50 per tableau card played, +200 per reserve card left, +200 per unused joker, +2 per second left. 10 levels with different column-size layouts (all 67 cards on level 1; design the others as data). Total score across levels goes to high scores.
- Stuck detection: if no tableau card is playable on any pile, the reserve is empty and no jokers are left, the level is lost → Game Over.
- Deal generation: use a seeded rng per level attempt; the deal must never place a key under a card that makes it impossible to reach (keys are always in columns, never in the reserve).

CLASSIC BUGS TO TEST
- Wrap rule both directions (K on A, A on K). Playing a non-bottom card. Joker chaining. Key unlocking more than 3 piles. Reserve dealing when empty. Score bonuses counted twice at level end. Timer running while paused or during the level-complete screen. Deck composition (exactly 104 standard cards + jokers across tableau and reserve, no duplicates beyond two per card).

LOOK
- Card-table look: deep green felt with a subtle vignette, cards drawn with Graphics + Text (white rounded rectangles, red/black suit symbols ♠ ♥ ♦ ♣, large rank in corner), a custom card back pattern (diagonal lattice in navy and gold), gold key cards with a key icon, padlock icon on locked piles. Cards animate: 180 ms move from column to pile, flip when dealt from reserve. Sfx 'move' on play, 'score' on key, 'win' on level clear.

