const print = (b) => b.forEach((x) => console.log(x.join(" ")));

function isSafe(board, row, col, n) {
  let i, j;
  for (let i = 0; i < col; i++) if (board[row][i] == 1) return false;
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j] == 1) return false;
  for (i = row, j = col; j >= 0 && i < n; i++, j--)
    if (board[i][j] == 1) return false;
  return true;
}

function solve(board, n) {
  return placeQueens(board, 0, n);
}

function placeQueens(board, col, n) {
  if (col >= n) return true;
  for (let i = 0; i < n; i++) {
    if (isSafe(board, i, col)) {
      board[i][col] = 1;
      if (placeQueens(board, col + 1, n)) return true;
      board[i][col] = 0;
    }
  }
  return false;
}

const n = 4;

console.log("Initial Board ( 4 Queen's )");
const board = Array.from(Array(n), () => Array(n).fill(0));
print(board);
const start = new Date().getTime();
solve(board, n);
const end = new Date().getTime();
console.log("Solved Board ( 4 Queen's )");
print(board);
console.log("Time Required For Execution: " + (end - start) / 1000 + "s");
