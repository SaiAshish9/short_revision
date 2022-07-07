const print = (b) => b.forEach((x) => console.log(x.join(" ")));

function isSafe(x, y, board) {
  // coordinate should lie within the board
  return x >= 0 && x < n && y >= 0 && y < n && board[x][y] == -1;
}

function knightTour(board, xMove, yMove, n) {
  board[0][0] = 0;
  if (!knightTourGuide(0, 0, 1, board, xMove, yMove, n)) {
    return false;
  }
  return true;
}

function knightTourGuide(x, y, move, board, xMove, yMove, n) {
  let next_x, next_y;
  if (move == n * n) return true;
  for (let k = 0; k < n; k++) {
    next_x = x + xMove[k];
    next_y = y + yMove[k];
    if (isSafe(next_x, next_y, board)) {
      board[next_x][next_y] = move;
      if (knightTourGuide(next_x, next_y, move + 1, board, xMove, yMove, n))
        return true;
      board[next_x][next_y] = -1;
    }
  }
  return false;
}

const n = 8;

console.log("Initial Board");
const board = Array.from(Array(n), () => Array(n).fill(-1));

const xMove = [2, 1, -1, -2, -2, -1, 1, 2];
const yMove = [1, 2, 2, 1, -1, -2, -2, -1];

print(board);
console.log("Total No. Of Cells : " + n * n);
const start = new Date().getTime();
knightTour(board, xMove, yMove, n);
const end = new Date().getTime();
console.log("Solved Board");
print(board);
console.log("Time Required For Execution: " + (end - start) / 1000 + "s");
