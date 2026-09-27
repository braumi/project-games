# Halma (classic board game vs computer)

Build the game "Halma" at /home/claude/site/halma.html. Portrait, design size 720x1280. Halma is a public-domain classic, so the name can stay.

It must replicate the browser game "Halma" (HTMLGames: "Move your pieces to the other side before your opponent does", played against a computer) as closely as possible in rules.

RULES SPEC
- Board 8×8. Two players: you (bottom-left camp) and the computer (top-right camp). Each has 10 pieces in a triangular corner camp of rows 4+3+2+1 (for you: row 7 cols 0–3, row 6 cols 0–2, row 5 cols 0–1, row 4 col 0; the computer's camp is the 180° rotation). Your goal camp is the computer's starting camp and vice versa.
- You move first. A turn is either:
  - a STEP to any of the 8 adjacent empty squares (orthogonal or diagonal), which ends the turn; or
  - one or more JUMPS: jump over an adjacent piece of either color (in any of the 8 directions) to the empty square directly beyond it. Jumped pieces stay. After a jump the same piece may keep jumping; a chain may not revisit a square already visited in this turn.
- A piece that has entered its goal camp may not leave the goal camp (steps and jumps that would end outside it are illegal; intermediate landing squares of a chain also must stay inside once the piece started the turn inside).
- Win: all 10 goal-camp squares are occupied by your own pieces. (Anti-spoiling rule: if the goal camp is completely full but some of its squares hold enemy pieces that never left, the player still wins if every goal square is occupied and all of their own pieces are inside the goal camp.)
- Anti-stalling: if a player still has a piece in their own starting camp after their 40th move, they lose.
- If a player has no legal move, they pass.
- Controls: tap one of your pieces to select it; all legal destinations (steps and every reachable jump endpoint) are highlighted; tap a destination to move. For chain jumps, the move animates along the jump path. Tap the selected piece again or an empty non-highlighted square to deselect.
- Computer: legal-move generation shared with the player. Evaluation = sum over its pieces of distance to the far goal corner (Chebyshev plus a small tiebreak), lower is better, plus a bonus for pieces already in goal. Difficulty select on the menu screen is NOT needed; use a 2-ply search (its move, your best reply) with alpha-beta and move ordering; must answer within 300 ms. The computer moves after a 400 ms pause so the player can follow.
- Score for high scores: 1000 − 10 × (your moves used), minimum 100, only when you win. Losing gives 0 (the shell does not record 0).
- Show whose turn it is and the move counter under the HUD.

LOGIC SHAPE
- Board as a 64-length array: 0 empty, 1 player, 2 computer.
- Logic.legalMoves(board, player) → [{from, to, path:[...squares]}] (dedupe same from→to keeping the shortest path).
- Logic.applyMove(board, move) → new board. Logic.winner(board, moveCounts) → 0/1/2. Logic.aiMove(board, moveCounts).

CLASSIC BUGS TO TEST
- Chain jump that loops back forever (visited set). Jumps over empty squares allowed (must be over a piece). Jumping off the board. Piece leaving the goal camp after entering it. Win detection with a full goal camp partly held by the opponent. Moves while it's the computer's turn. Computer making an illegal move (property test: 200 random positions, every AI move is in legalMoves). Computer takes > 300 ms. A full simulated game AI-vs-AI ends with a winner within 300 moves on 3 seeds (proves no infinite loop; use the anti-stalling rule).

LOOK (keep it simple)
- Warm wooden board with alternating light/dark squares, both camps tinted, round pieces (you: blue, computer: red) with a light rim, the selected piece raised (scale 1.1), legal destinations as small green dots, the last computer move outlined.
