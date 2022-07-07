function isSafe(grid, row, col, num) {
  for (let i = 0; i < n; i++) {
    if (grid[row][i] == num) return false;
  }
  for (let j = 0; j < n; j++) {
    if (grid[j][col] == num) return false;
  }

  let startRow = row - (row % 3),
    startCol = col - (col % 3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (grid[i + startRow][j + startCol] == num) return false;

  return true;
}

function solve(grid, row, col, n) {
  if (row == n - 1 && col == n) return true;
  if (col == n) {
    row++;
    col = 0;
  }
  if (grid[row][col] != 0) return solve(grid, row, col + 1, n);
  for (let num = 1; num < n + 1; num++) {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;
      if (solve(grid, row, col + 1, n)) return true;
      grid[row][col] = 0;
    }
  }
  return false;
}

const n = 9;
const sudoku = Array.from(Array(n), () => Array(n).fill(0));
sudoku.forEach((x) => console.log(x.join(" ")));
solve(sudoku, 0, 0, n);
sudoku.forEach((x) => console.log(x.join(" ")));
