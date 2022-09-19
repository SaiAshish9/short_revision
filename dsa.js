// // // graphs
// // // bfs dfs allPathsDfs tsp tspHelper primeFactors graphColoring

// // class Graph {
// //   constructor(n, c) {
// //     this.g = {};
// //     this.n = n;
// //     this.c = c;
// //   }
// //   addVertex(v) {
// //     this.g[v] = [];
// //   }
// //   addEdge(u, v) {
// //     this.g[u].push(v);
// //     this.g[v].push(u);
// //   }
// //   bfs(v = 0) {
// //     let q = [];
// //     q.push(v);
// //     let visited = {};
// //     visited[v] = true;
// //     console.log("BFS");
// //     while (q.length) {
// //       const ele = q.shift();
// //       console.log(ele);
// //       const list = this.g[ele];
// //       for (let l of list) {
// //         if (!visited[l]) {
// //           visited[l] = true;
// //           q.push(l);
// //         }
// //       }
// //     }
// //     console.log("###");
// //   }
// //   dfs(v = 0, visited = {}) {
// //     visited[v] = true;
// //     console.log(v);
// //     const list = this.g[v];
// //     for (let l of list) {
// //       if (!visited[l]) this.dfs(l, visited);
// //     }
// //   }
// //   allPathsDfs(s = 0, d = this.n - 1) {
// //     const result = [];
// //     const curr = [];
// //     curr.push(s);
// //     this.allPathsDfsHelper(s, d, result, curr);
// //     console.log(result);
// //   }
// //   allPathsDfsHelper(s, d, result, curr, visited = {}) {
// //     if (s == d) {
// //       result.push(curr.slice());
// //       return;
// //     }
// //     visited[s] = true;
// //     const list = this.g[s];
// //     for (let i of list) {
// //       if (!visited[i]) {
// //         curr.push(i);
// //         this.allPathsDfsHelper(i, d, result, curr, visited);
// //         curr.splice(curr.indexOf(i), 1);
// //       }
// //     }
// //     visited[s] = false;
// //   }
// // }
// // const g1 = new Graph(3);
// // let v = [1, 2, 3];
// // for (let i in v) {
// //   g1.addVertex(i);
// // }
// // g1.addEdge(0, 1);
// // g1.addEdge(1, 2);
// // g1.addEdge(2, 0);
// // g1.bfs();
// // g1.dfs();
// // g1.allPathsDfs();
// // // Graph Coloring
// // class Graph1 {
// //   constructor(n, c) {
// //     this.g = {};
// //     this.n = n;
// //     this.c = c;
// //   }
// //   addVertex(v) {
// //     this.g[v] = {
// //       v: [],
// //       c: null,
// //     };
// //   }
// //   addEdge(u, v) {
// //     this.g[u].v.push(v);
// //     this.g[v].v.push(u);
// //   }
// //   bfs(v = 0) {
// //     let q = [];
// //     q.push(v);
// //     let visited = {};
// //     visited[v] = true;
// //     this.g[0].c = this.c[0];
// //     while (q.length) {
// //       let ele = q.shift();
// //       let c = 0;
// //       console.log(ele);
// //       let list = this.g[ele].v.sort((a, b) => a - b);
// //       for (let l of list) {
// //         if (!visited[l]) {
// //           visited[l] = true;
// //           q.push(l);
// //         }
// //         if (this.g[l].c === c) c++;
// //       }
// //       this.g[ele].c = c;
// //     }
// //     console.log(this.g);
// //   }
// // }
// // let c = ["R", "G", "B"];
// // const g2 = new Graph1(3, c);
// // let v1 = [1, 2, 3];
// // for (let i in v) {
// //   g2.addVertex(i);
// // }
// // g2.addEdge(0, 1);
// // g2.addEdge(1, 2);
// // g2.addEdge(2, 0);
// // console.log("GC");
// // g2.bfs();
// // // TSP
// // class Graph2 {
// //   constructor(n) {
// //     this.g = Array.from(Array(n), () => Array(n).fill(0));
// //     this.n = n;
// //   }
// //   addEdge(u, v, w) {
// //     this.g[u][v] = w;
// //     this.g[v][u] = w;
// //   }
// //   tsp() {
// //     const result = [];
// //     this.tspH(0, 1, 0, result);
// //     console.log(Math.min(...result));
// //   }
// //   tspH(curr, count, cost, result, visited = {}) {
// //     if (count === this.n && this.g[curr][0]) {
// //       result.push(cost + this.g[curr][0]);
// //       return;
// //     }
// //     for (let i = 0; i < this.n; i++) {
// //       let curr_cost = this.g[curr][i];
// //       if (!visited[i] && curr_cost) {
// //         visited[i] = true;
// //         this.tspH(i, count + 1, cost + curr_cost, result, visited);
// //         visited[i] = false;
// //       }
// //     }
// //   }
// // }
// // const g3 = new Graph2(3);
// // g3.addEdge(0, 1, 10);
// // g3.addEdge(1, 2, 20);
// // g3.addEdge(2, 0, 30);
// // g3.tsp();
// // trees
// let TreeNode = function (data, left, right) {
//   this.data = data;
//   this.left = typeof left === "undefined" ? null : left;
//   this.right = typeof left === "undefined" ? null : right;
// };

// // // inorder preorder postorder check bst bfs mirror left right sum

// // function inorder(root) {
// //   if (root) {
// //     inorder(root.left);
// //     console.log(root.data);
// //     inorder(root.right);
// //   }
// // }
// // function preorder(root) {
// //   if (root) {
// //     console.log(root.data);
// //     preorder(root.left);
// //     preorder(root.right);
// //   }
// // }
// // function postorder(root) {
// //   if (root) {
// //     postorder(root.left);
// //     postorder(root.right);
// //     console.log(root.data);
// //   }
// // }

// // sum of all tree nodes

// // function dfs(root, result, sum = 0) {
// //   if (root) {
// //     sum += root.data;
// //     if (!root.left && !root.right) {
// //       result.push(sum);
// //       return;
// //     }
// //     dfs(root.left, result, sum);
// //     dfs(root.right, result, sum);
// //   }
// // }
// // function sum(t) {
// //   const result = [];
// //   dfs(t, result);
// //   console.log(result);
// // }
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // sum(t)
// // [ 6, 7, 12 ]

// // // delete node when sum <=k

// // function dfsH(root, k, sum = 0) {
// //   if (root) {
// //     let lsum = sum + root.data;
// //     let rsum = lsum;
// //     root.left = dfsH(root.left, k, lsum);
// //     root.right = dfsH(root.right, k, rsum);
// //     sum = Math.max(lsum, rsum);
// //     if (sum < k) root = null;
// //     return root;
// //   }
// // }
// // function sumLK(t) {
// //   const k = 4;
// //   dfsH(t, k);
// //   console.log(t);
// // }
// // const t = new TreeNode(2);
// // t.left = new TreeNode(1);
// // t.right = new TreeNode(3);
// // sumLK(t);
// // TreeNode {
// //   data: 2,
// //   left: null,
// //   right: TreeNode { data: 3, left: undefined, right: undefined }
// // }

// // print all paths
// // function dfs(root, result, curr = [], pathLen = 0) {
// //   if (root) {
// //     curr[pathLen] = root.data;
// //     pathLen++;
// //     if (!root.left && !root.right) {
// //       result.push(curr.slice());
// //       return;
// //     }
// //     dfs(root.left, result, curr, pathLen);
// //     dfs(root.right, result, curr, pathLen);
// //   }
// // }
// // function paths(t) {
// //   const result = [];
// //   dfs(t, result);
// //   console.log(result);
// // }
// // const t = new TreeNode(2);
// // t.left = new TreeNode(1);
// // t.right = new TreeNode(3);
// // paths(t);

// // console.log("inorder");
// // inorder(t);
// // console.log("preorder");
// // preorder(t);
// // console.log("postorder");
// // postorder(t);

// // function bfs(root) {
// //   let q = [];
// //   q.push(root);
// //   while (q.length) {
// //     let curr = q.shift();
// //     console.log(curr.data);
// //     if (curr.left) q.push(curr.left);
// //     if (curr.right) q.push(curr.right);
// //   }
// // }
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // bfs(t)
// // 1
// // 2
// // 5
// // 3
// // 4
// // 6

// // function mirror(root) {
// //   let q = [];
// //   q.push(root);
// //   while (q.length) {
// //     let curr = q.shift();
// //     [curr.left, curr.right] = [curr.right, curr.left];
// //     if (curr.left) q.push(curr.left);
// //     if (curr.right) q.push(curr.right);
// //   }
// // }
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // mirror(t)
// // console.log(t)
// // TreeNode {
// //   data: 1,
// //   left: TreeNode {
// //     data: 5,
// //     left: TreeNode { data: 6, left: null, right: null },
// //     right: null
// //   },
// //   right: TreeNode {
// //     data: 2,
// //     left: TreeNode { data: 4, left: null, right: null },
// //     right: TreeNode { data: 3, left: null, right: null }
// //   }
// // }

// // function leftView(root) {
// //   let q = [];
// //   q.push(root);
// //   while (q.length) {
// //     const n = q.length;
// //     for (let i = 0; i < n; i++) {
// //       let curr = q.shift();
// //       if (i === 0) console.log(curr.data);
// //       if (curr.left) q.push(curr.left);
// //       if (curr.right) q.push(curr.right);
// //     }
// //   }
// // }
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // leftView(t)
// // 1
// // 2
// // 3

// // function rightView(root) {
// //   let q = [];
// //   q.push(root);
// //   while (q.length) {
// //     const n = q.length;
// //     for (let i = 0; i < n; i++) {
// //       let curr = q.shift();
// //       if (i === n - 1) console.log(curr.data);
// //       if (curr.left) q.push(curr.left);
// //       if (curr.right) q.push(curr.right);
// //     }
// //   }
// // }
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // rightView(t)
// // 1
// // 5
// // 6

// // console.log("bfs");
// // bfs(t);
// // mirror(t);
// // console.log("mirror");
// // console.log(t);
// // mirror(t);
// // console.log("mirror");
// // console.log(t);
// // console.log("leftView");
// // leftView(t);
// // console.log("rightView");
// // rightView(t);
// // // check BST

// // function BST(root) {
// //   let prev;
// //   if (root) {
// //     if (!BST(root.left)) return false;
// //     if (prev && root.data <= prev.data) return false;
// //     prev = root;
// //     return BST(root.right);
// //   }
// //   return true;
// // }
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // console.log(BST(t));
// // true

// // // immediateChildrenAreItsPrimeFactors

// // function primeFactors(n, k) {
// //   let c = 2;
// //   let res = [];
// //   while (n > 1) {
// //     if (n % c == 0) {
// //       n /= c;
// //       res.push(c);
// //     } else c++;
// //   }
// //   return res.includes(k);
// // }
// // function immediateChildrenAreItsPrimeFactors(root) {
// //   let q = [];
// //   q.push(root);
// //   let count = 0;
// //   while (q.length) {
// //     let curr = q.shift();
// //     if (curr.left && !curr.right && primeFactors(curr.data, curr.left)) count++;
// //     if (!curr.left && curr.right && primeFactors(curr.data, curr.right))
// //       count++;
// //     if (
// //       !curr.left &&
// //       !curr.right &&
// //       primeFactors(curr.data, curr.left) &&
// //       primeFactors(curr.data, curr.right)
// //     )
// //       count++;
// //     if (curr.left) q.push(curr.left);
// //     if (curr.right) q.push(curr.right);
// //   }
// //   console.log(count);
// // }
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // immediateChildrenAreItsPrimeFactors(t); // 0

// // function maxDepth(root) {
// //   const q = [];
// //   let height = -1;
// //   q.push(root);
// //   while (true) {
// //     let nodeCount = q.length;
// //     if (nodeCount == 0) return height;
// //     height++;
// //     while (nodeCount > 0) {
// //       let node = q.shift();
// //       if (node.left) q.push(node.left);
// //       if (node.right) q.push(node.right);
// //       nodeCount--;
// //     }
// //   }
// // }
// // 2

// // function dfs(root, count) {
// //   if (!root) return 0;
// //   let sum = root.data + dfs(root.left, count) + dfs(root.right, count);
// //   count[sum] = (count[sum] || 0) + 1;
// //   return sum;
// // }

// // let findFrequentTreeSum = function (root) {
// //   if (!root) return [];
// //   const count = {};
// //   dfs(root, count);
// //   let maxFreq = Math.max(...Object.values(count));
// //   const res = [];
// //   for (let s in count) {
// //     if (count[s] === maxFreq) res.push(+s);
// //   }
// //   return res;
// // };
// // const t = new TreeNode(1);
// // t.left = new TreeNode(2);
// // t.left.left = new TreeNode(3);
// // t.left.right = new TreeNode(4);
// // t.right = new TreeNode(5);
// // t.right.right = new TreeNode(6);
// // console.log(findFrequentTreeSum(t));
// // [ 3, 4, 6, 9, 11, 21 ]

// // // linked list
// // let ListNode = function (data, next = null) {
// //   this.data = data;
// //   this.next = typeof next === "undefined" ? null : next;
// // };
// // let l = new ListNode(1);
// // l.next = new ListNode(2);
// // l.next.next = new ListNode(3);
// // // l.next.next = l;
// // function cycle(head) {
// //   let temp = head;
// //   const s = new Set();
// //   while (temp) {
// //     if (s.has(temp)) return true;
// //     s.add(temp);
// //     temp = temp.next;
// //   }
// //   return false;
// // }
// // console.log("cycle");
// // console.log(cycle(l));
// // function reverse(l) {
// //   let curr = l;
// //   let prev = null;
// //   while (curr) {
// //     let next = curr.next;
// //     curr.next = prev;
// //     prev = curr;
// //     curr = next;
// //   }
// //   l = prev;
// //   return l;
// // }
// // function reverseTP(l) {
// //   let curr = l;
// //   while (curr.next) {
// //     let next = curr.next;
// //     curr.next = next.next;
// //     next.next = l;
// //     l = next;
// //   }
// //   return l;
// // }
// // console.log("reverse");
// // l = reverse(l);
// // console.log(l);
// // console.log("reverseTP");
// // l = reverseTP(l);
// // console.log(l);
// // function countCommon(a, b) {
// //   let count = 0;
// //   while (a && b) {
// //     if (a.data == b.data) count += 1;
// //     else break;
// //     a = a.next;
// //     b = b.next;
// //   }
// //   return count;
// // }
// // function lps(l) {
// //   let curr = l;
// //   let prev = null;
// //   let result = 0;
// //   while (curr) {
// //     let next = curr.next;
// //     curr.next = prev;
// //     result = Math.max(result, 2 * countCommon(prev, next) + 1);
// //     result = Math.max(result, 2 * countCommon(curr, next));
// //     prev = curr;
// //     curr = next;
// //   }
// //   l = prev;
// //   console.log(result);
// //   return l;
// // }
// // console.log("lps");
// // l = lps(l);
// // console.log("reverse");
// // l = reverse(l);
// // console.log(l);

// // // backtracking
// // // sudoku nqueens nqueens2 knighttour rateinamaze subsets wordbreak array + string permutations combinations

// // // sudoku

// // function isSafe(grid, row, col, num) {
// //   for (let j = 0; j < n; j++) if (grid[row][j] == num) return false;
// //   for (let i = 0; i < n; i++) if (grid[i][col] == num) return false;
// //   let startRow = row - (row % 3),
// //     startCol = col - (col % 3);
// //   for (let i = 0; i < 3; i++)
// //     for (let j = 0; j < 3; j++)
// //       if (grid[i + startRow][j + startCol] == num) return false;
// //   return true;
// // }
// // function solve(grid, row, col, n) {
// //   if (row == n - 1 && col == n) return true;
// //   if (col == n) {
// //     row++;
// //     col = 0;
// //   }
// //   if (grid[row][col] != 0) return solve(grid, row, col + 1, n);
// //   for (let num = 1; num < n + 1; num++) {
// //     if (isSafe(grid, row, col, num)) {
// //       grid[row][col] = num;
// //       if (solve(grid, row, col + 1, n)) return true;
// //     }
// //     grid[row][col] = 0;
// //   }
// //   return false;
// // }
// // let n = 9;
// // const sudoku = Array.from(Array(n), () => Array(n).fill(0));
// // sudoku.forEach((x) => console.log(x.join(" ")));
// // const start = new Date().getTime();
// // console.log("#################");
// // solve(sudoku, 0, 0, n);
// // const end = new Date().getTime();
// // sudoku.forEach((x) => console.log(x.join(" ")));
// // console.log("#################");
// // console.log("Time required to solve sudoku: ");
// // console.log((end - start) / 1000 + " s");

// // // nqueens
// // function isSafe(board, row, col, n) {
// //   let i, j;
// //   for (let i = 0; i < col; i++) if (board[row][i] == 1) return false;
// //   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
// //     if (board[i][j] == 1) return false;
// //   for (i = row, j = col; j >= 0 && i < n; i++, j--)
// //     if (board[i][j] == 1) return false;
// //   return true;
// // }
// // function solve(board, n) {
// //   return placeQueens(board, 0, n);
// // }
// // function placeQueens(board, col, n) {
// //   if (col >= n) return true;
// //   for (let i = 0; i < n; i++) {
// //     if (isSafe(board, i, col)) {
// //       board[i][col] = 1;
// //       if (placeQueens(board, col + 1, n)) return true;
// //       board[i][col] = 0;
// //     }
// //   }
// //   return false;
// // }
// // const n2 = 4;
// // console.log("Initial Board ( 4 Queen's )");
// // const board2 = Array.from(Array(n), () => Array(n).fill(0));
// // print(board2);
// // const start2 = new Date().getTime();
// // solve(board2, n);
// // const end2 = new Date().getTime();
// // console.log("Solved Board ( 4 Queen's )");
// // print(board2);
// // console.log("Time Required For Execution: " + (end2 - start2) / 1000 + "s");

// // // n queens2
// // function placeQueens(board, col, n, result) {
// //   if (col == n) {
// //     result.push(board.map((cell, i) => cell.indexOf(1)));
// //     return true;
// //   }
// //   let res = false;
// //   for (let i = 0; i < n; i++) {
// //     if (isSafe(board, i, col, n)) {
// //       board[i][col] = 1;
// //       res = placeQueens(board, col + 1, n, result) || res;
// //       board[i][col] = 0;
// //     }
// //   }
// //   return res;
// // }

// // // knight tour
// // function isSafe(x, y, board) {
// //   return x >= 0 && x < n && y >= 0 && y < n && board[x][y] == -1;
// // }
// // function knightTour(board, xMove, yMove, n) {
// //   board[0][0] = 0;
// //   if (!knightTourGuide(0, 0, 1, board, xMove, yMove, n)) {
// //     return false;
// //   }
// //   return true;
// // }
// // function knightTourGuide(x, y, move, board, xMove, yMove, n) {
// //   let next_x, next_y;
// //   if (move == n * n) return true;
// //   for (let k = 0; k < n; k++) {
// //     next_x = x + xMove[k];
// //     next_y = y + yMove[k];
// //     if (isSafe(next_x, next_y, board)) {
// //       board[next_x][next_y] = move;
// //       if (knightTourGuide(next_x, next_y, move + 1, board, xMove, yMove, n))
// //         return true;
// //       else board[next_x][next_y] = -1;
// //     }
// //   }
// //   return false;
// // }
// // const n1 = 8;
// // console.log("Initial Board");
// // const board = Array.from(Array(n1), () => Array(n1).fill(-1));
// // const xMove = [2, 1, -1, -2, -2, -1, 1, 2];
// // const yMove = [1, 2, 2, 1, -1, -2, -2, -1];
// // print(board);
// // console.log("Total No. Of Cells : " + n * n);
// // const start1 = new Date().getTime();
// // knightTour(board, xMove, yMove, n);
// // const end1 = new Date().getTime();
// // console.log("Solved Board");
// // print(board);
// // console.log("Time Required For Execution: " + (end1 - start1) / 1000 + "s");

// // // rate in a maze
// // function isSafe(maze, x, y, n) {
// //   return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] == 1;
// // }
// // function solve(maze, n, result) {
// //   return traverseMaze(maze, 0, 0, result, n);
// // }
// // function traverseMaze(maze, x, y, result, n) {
// //   if (x == n - 1 && y == n - 1 && maze[x][y] == 1) {
// //     result[x][y] = 1;
// //     return true;
// //   }
// //   if (isSafe(maze, x, y, n)) {
// //     if (result[x][y] == 1) return false;
// //     result[x][y] = 1;
// //     if (traverseMaze(maze, x + 1, y, result, n)) return true;
// //     if (traverseMaze(maze, x, y + 1, result, n)) return true;
// //     if (traverseMaze(maze, x - 1, y, result, n)) return true;
// //     if (traverseMaze(maze, x, y - 1, result, n)) return true;
// //     result[x][y] = 0;
// //     return false;
// //   }
// //   return false;
// // }
// // console.log("Maze: ");
// // const maze = [
// //   [1, 0, 0, 0],
// //   [1, 1, 0, 1],
// //   [0, 1, 0, 0],
// //   [1, 1, 1, 1],
// // ];
// // print(maze);
// // const n4 = maze.length;
// // const result = Array.from(Array(n), () => Array(n).fill(0));
// // const start4 = new Date().getTime();
// // solve(maze, n, result);
// // const end4 = new Date().getTime();
// // console.log("Result: ");
// // print(result);
// // console.log("Execution Time: " + (end4 - start4) / 1000 + "s");

// // // string permutations
// // function permuteBacktrack(str, answer) {
// //   if (str.length === 0) {
// //     console.log(answer);
// //     return;
// //   }
// //   for (let i = 0; i < str.length; i++) {
// //     let ch = str[i];
// //     let left = str.substring(0, i);
// //     let right = str.substring(i + 1);
// //     let rest = left + right;
// //     permuteBacktrack(rest, answer + ch);
// //   }
// // }

// // // array permutations
// // let permute = function (nums) {
// //   let res = [];
// //   let visited = Array(nums.length).fill(false);
// //   dfs(nums, res, [], visited);
// //   return res;
// // };

// // let dfs = function (nums, res = [], curr = [], visited = []) {
// //   if (curr.length == nums.length) {
// //     res.push(curr.slice());
// //     return;
// //   }
// //   for (let i in nums) {
// //     if (visited[i] === false) {
// //       visited[i] = true;
// //       curr.push(nums[i]);
// //       dfs(nums, res, curr, visited);
// //       curr.pop();
// //       visited[i] = false;
// //     }
// //   }
// // };

// // // combinations
// // let dfs = function (n, k, s, res, curr = []) {
// //   if (k == 0) {
// //     res.push(curr.slice());
// //     return;
// //   }
// //   for (let i = s; i <= n; i++) {
// //     curr.push(i);
// //     dfs(n, k - 1, i + 1, res, curr);
// //     curr.pop();
// //   }
// // };
// // // dfs(n, k, 1, res)

// // // break words
// // function breakWords(n, str, words, res = "") {
// //   for (let i = 1; i <= n; i++) {
// //     const prefix = str.substring(0, i);
// //     if (words.includes(prefix)) {
// //       if (i == n) {
// //         res += prefix;
// //         console.log(res);
// //         return;
// //       }
// //       breakWords(n - i, str.substring(i), words, res + prefix);
// //     }
// //   }
// // }

// // // subsets of a set
// // function subsets(i_set, result, subset = [], index = 0) {
// //   result.push(subset.slice());
// //   for (let i = index; i < i_set.length; i++) {
// //     subset.push(i_set[i]);
// //     subsets(i_set, result, subset, i + 1);
// //     subset.pop();
// //   }
// //   return;
// // }

// // // greedy
// // // activity_selection job_sequencing_with_deadlines fractional_knapsack
// // // activity_selection

// // class Selection {
// //   constructor(s, f) {
// //     this.s = s;
// //     this.f = f;
// //   }
// // }

// // function AS(selection) {
// //   const s = selection.map((x) => x.s);
// //   const f = selection.map((x) => x.f);
// //   let i = (j = 0);
// //   for (j = 1; j < f.length; j++) {
// //     if (s[j] >= f[i]) {
// //       i = j;
// //       console.log(j);
// //     }
// //   }
// // }

// // const s = [
// //   new Selection(1, 9),
// //   new Selection(3, 4),
// //   new Selection(0, 1),
// //   new Selection(5, 7),
// //   new Selection(8, 9),
// //   new Selection(5, 9),
// // ];
// // console.log("activity_selection");
// // s.sort((a, b) => a.f - b.f);
// // console.log(s);
// // AS(s);

// // // job_sequencing_with_deadlines desc
// // class Job {
// //   constructor(j, d, p) {
// //     this.job = j;
// //     this.profit = p;
// //     this.deadline = d;
// //   }
// // }
// // function print(jobs, t) {
// //   let result = Array(t).fill(false);
// //   let answer = Array(t).fill(null);
// //   jobs.sort((a, b) => b.deadline - a.deadline);
// //   for (let i in jobs)
// //     for (let j = Math.min(t - 1, jobs[i].deadline - 1); j >= 0; j--) {
// //       if (!result[j]) {
// //         result[j] = true;
// //         answer[j] = jobs[i].job;
// //         break;
// //       }
// //     }
// //   console.log(answer);
// // }
// // const jobs = [
// //   new Job("A", 2, 100),
// //   new Job("B", 1, 19),
// //   new Job("C", 2, 27),
// //   new Job("D", 1, 25),
// //   new Job("E", 3, 15),
// // ];
// // console.log("job_sequencing_with_deadlines");
// // print(jobs, 3);

// // // fractional_knapsack

// // class Item {
// //   constructor(v, w) {
// //     this.v = v;
// //     this.w = w;
// //   }
// // }

// // function fractionalKnapsack(W, arr, n) {
// //   arr.sort((a, b) => (a.value, a.weight) - b.value / b.weight);
// //   let currW = 0;
// //   let finalV = 0.0;
// //   for (let i = 0; i < n; i++) {
// //     if (currW + arr[i].w <= W) {
// //       currW += arr[i].w;
// //       finalV += arr[i].v;
// //     } else {
// //       let remain = W - currW;
// //       finalV += arr[i].v * (remain / arr[i].w);
// //       break;
// //     }
// //   }
// //   return finalV;
// // }
// // let W = 50;
// // let arr = [];
// // arr.push(new Item(60, 10), new Item(100, 20), new Item(120, 30));
// // console.log("fractional_knapsack");
// // console.log(fractionalKnapsack(W, arr, arr.length));

// // // dp
// // // weightedKnapsack bc lcs lcsb lps lis lds lcis mcl naive

// // function knapSack(val, wt, W) {
// //   const n = val.length;
// //   const dp = Array.from(Array(n + 1), () => Array(W + 1).fill(0));
// //   for (let i = 0; i <= n; i++) {
// //     for (let w = 0; w <= W; w++) {
// //       if (i == 0 || w == 0) dp[i][w] = 0;
// //       else if (w >= wt[i - 1]) {
// //         dp[i][w] = Math.max(
// //           dp[i - 1][w],
// //           val[i - 1] + dp[i - 1][w - wt[i - 1]]
// //         );
// //       } else {
// //         dp[i][w] = dp[i - 1][w];
// //       }
// //     }
// //   }
// //   return dp[n][W];
// // }

// // const val = [10, 15, 40];
// // const wt = [1, 2, 3];
// // const W1 = 6;
// // console.log(knapSack(val, wt, W1));

// // function bc(n, k) {
// //   const dp = Array.from(Array(n + 1), () => Array(k + 1).fill(-1));
// //   for (let i = 0; i <= n; i++) {
// //     for (let j = 0; j <= Math.min(i, k); j++) {
// //       if (j == 0 || j == i) dp[i][j] = 1;
// //       else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
// //     }
// //   }
// //   console.log(dp[n][k]);
// // }

// // bc(4, 2);

// // function lcs(s1, s2) {
// //   const m = s1.length;
// //   const n = s2.length;
// //   const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
// //   for (let i = 0; i <= m; i++) {
// //     for (let j = 0; j <= n; j++) {
// //       if (i == 0 || j == 0) dp[i][j] = 0;
// //       else if (s1[i - 1] == s2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
// //       else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
// //     }
// //   }
// //   let len = dp[m][n];
// //   let subsequence = Array(len).fill(null);
// //   let i = m,
// //     j = n;
// //   while (i > 0 && j > 0) {
// //     if (s1[i - 1] == s2[j - 1]) {
// //       subsequence[len - 1] = s1[i - 1];
// //       i -= 1;
// //       j -= 1;
// //       len -= 1;
// //     } else if (dp[i - 1][j] > dp[i][j - 1]) {
// //       i -= 1;
// //     } else {
// //       j -= 1;
// //     }
// //   }
// //   console.log(typeof s1 === "string" ? subsequence.join("") : subsequence);
// //   console.log([...new Set(printAllLcs(s1, s2, m, n, dp))]);
// // }

// // function lcsubstring(s1, s2) {
// //   const m = s1.length;
// //   const n = s2.length;
// //   let row = 0;
// //   let col = 0;
// //   let len = 0;
// //   const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
// //   let result = 0;
// //   for (let i = 0; i <= m; i++) {
// //     for (let j = 0; j <= n; j++) {
// //       if (i == 0 || j == 0) dp[i][j] = 0;
// //       else if (s1[i - 1] == s2[j - 1]) {
// //         dp[i][j] = 1 + dp[i - 1][j - 1];
// //         result = Math.max(result, dp[i][j]);
// //         if (len < dp[i][j]) {
// //           len = dp[i][j];
// //           row = i;
// //           col = j;
// //         }
// //       } else dp[i][j] = 0;
// //     }
// //   }
// //   if (len == 0) {
// //     console.log("no substring present");
// //     return 0;
// //   }
// //   let resultStr = "";
// //   while (dp[row][col] != 0) {
// //     resultStr = s1[row - 1] + resultStr; // or Y[col-1]
// //     --len;
// //     --row;
// //     --col;
// //   }
// //   console.log(resultStr);
// //   return result;
// // }

// // console.log(lcsubstring("sai", "sai9"));

// // function printAllLcs(s1, s2, m, n, dp) {
// //   if (m == 0 || n == 0) return [""];
// //   if (s1[m - 1] === s2[n - 1]) {
// //     let lcs = printAllLcs(s1, s2, m - 1, n - 1, dp);
// //     for (let i in lcs) {
// //       lcs[i] += s1[m - 1];
// //     }
// //     return lcs;
// //   }
// //   if (dp[m - 1][n] > dp[m][n - 1]) return printAllLcs(s1, s2, m - 1, n, dp);
// //   else if (dp[m - 1][n] < dp[m][n - 1])
// //     return printAllLcs(s1, s2, m, n - 1, dp);
// //   else {
// //     let top = printAllLcs(s1, s2, m - 1, n, dp);
// //     let left = printAllLcs(s1, s2, m, n - 1, dp);
// //     top = [...top, ...left];
// //     return top;
// //   }
// // }

// // // lcs([1, 2, 0], [9, 8, 1, 6, 2])
// // lcs("abcdefg", "abxdfg");

// // function LIS(arr) {
// //   const n = arr.length;
// //   let dp = Array(n).fill(1);
// //   for (i = 1; i < n; i++)
// //     for (j = 0; j < i; j++)
// //       if (arr[i] > arr[j] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
// //   const max = Math.max(...dp);
// //   let index = [];
// //   let tmp = max;
// //   for (let i = n - 1; i >= 0; i--) {
// //     if (dp[i] == tmp) {
// //       index.push(i);
// //       tmp--;
// //     }
// //   }
// //   index.reverse();
// //   index = index.map((x) => arr[x]);
// //   console.log(index, max);
// // }
// // LIS([10, 22, 9, 33, 21, 50, 41, 60]);

// // class Pair {
// //   constructor(a, b) {
// //     this.a = a;
// //     this.b = b;
// //   }
// // }

// // function MCL(arr) {
// //   const n = arr.length;
// //   let dp = Array(n).fill(1);
// //   for (i = 1; i < n; i++)
// //     for (j = 0; j < i; j++)
// //       if (arr[i].a > arr[j].b && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
// //   const max = Math.max(...dp);
// //   let index = [];
// //   let tmp = max;
// //   for (let i = n - 1; i >= 0; i--) {
// //     if (dp[i] == tmp) {
// //       index.push(i);
// //       tmp--;
// //     }
// //   }
// //   index.reverse();
// //   index = index.map((x) => arr[x]);
// //   console.log(index, max);
// // }

// // MCL([new Pair(5, 24), new Pair(39, 60), new Pair(27, 40), new Pair(50, 90)]);

// // function print(list, n, arr, rev) {
// //   const tempList = rev ? list.slice().reverse() : list.slice();
// //   const max = Math.max(...tempList);
// //   let index = [];
// //   let tmp = max;
// //   for (let i = n - 1; i >= 0; i--) {
// //     if (tempList[i] == tmp) {
// //       index.push(i);
// //       tmp--;
// //     }
// //   }
// //   index.reverse();
// //   index = index.map((x) => arr[x]);
// //   console.log("lookup");
// //   console.log(list);
// //   // console.log("subsequence")
// //   // console.log(index)
// //   // console.log(index.length)
// //   console.log("######################");
// // }

// // function LBS(arr) {
// //   const n = arr.length;
// //   let lis = Array(n).fill(1);
// //   for (i = 1; i < n; i++)
// //     for (j = 0; j < i; j++)
// //       if (arr[i] > arr[j] && lis[i] < lis[j] + 1) lis[i] = lis[j] + 1;
// //   let lds = Array(n).fill(1);
// //   for (i = n - 1; i >= 0; i--)
// //     for (j = n - 1; j > i; j--)
// //       if (arr[i] > arr[j] && lds[i] < lds[j] + 1) lds[i] = lds[j] + 1;
// //   console.log("lis");
// //   print(lis, n, arr);
// //   console.log("lds");
// //   print(lds, n, arr, true);
// //   let maxVal = arr[0],
// //     inx = 0;
// //   for (let i = 0; i < n; i++) {
// //     if (maxVal < lis[i] + lds[i] - 1) {
// //       maxVal = lis[i] + lds[i] - 1;
// //       inx = i;
// //     }
// //   }
// //   let ct1 = lis[inx];
// //   let res = [];
// //   for (let i = inx; i >= 0 && ct1 > 0; i--) {
// //     if (lis[i] == ct1) {
// //       res.push(arr[i]);
// //       ct1--;
// //     }
// //   }
// //   res.reverse();
// //   let ct2 = lds[inx] - 1;
// //   for (let i = inx; i < n && ct2 > 0; i++) {
// //     if (lds[i] == ct2) {
// //       res.push(arr[i]);
// //       ct2--;
// //     }
// //   }
// //   console.log(res);
// //   console.log(res.length);
// // }
// // // LBS([80, 60, 30, 40, 20, 10])
// // LBS([1, 11, 2, 10, 4, 5, 2, 1]);

// // function lcis(arr1, arr2) {
// //   let m = arr1.length;
// //   let n = arr2.length;
// //   let dp = Array(n).fill(0);
// //   let parent = Array(n).fill(0);

// //   for (let i = 0; i < m; i++) {
// //     let current = 0,
// //       last = -1;
// //     for (let j = 0; j < n; j++) {
// //       if (arr1[i] == arr2[j] && current + 1 > dp[j]) {
// //         dp[j] = current + 1;
// //         parent[j] = last;
// //       }

// //       if (arr1[i] > arr2[j] && dp[j] > current) {
// //         current = dp[j];
// //         last = j;
// //       }
// //     }
// //   }

// //   const max = Math.max(...dp);
// //   let index = dp.indexOf(max);
// //   let result = Array(max).fill(null),
// //     i = 0;
// //   while (index != -1) {
// //     result[i] = arr2[index];
// //     index = parent[index];
// //     i += 1;
// //   }
// //   console.log("lookup table");
// //   console.log(dp);
// //   result = result.reverse();
// //   console.log(typeof arr1 !== "string" ? result : result.join(""));
// //   return max;
// // }

// // const arr1 = [3, 4, 9, 1];
// // const arr2 = [5, 3, 8, 9, 10, 2, 1];
// // // 3, 9
// // const arr3 = "b3sak";
// // const arr4 = "baejkl";
// // // bk
// // console.log(lcis(arr1, arr2));
// // console.log("##############");
// // console.log(lcis(arr3, arr4));

// // let longestPalindrome = function (s) {
// //   let n = s.length;
// //   let dp = Array.from(Array(n), () => Array(n).fill(false));
// //   let maxLength = 1;
// //   for (let i = 0; i < n; ++i) dp[i][i] = true;
// //   let start = 0;
// //   for (let i = 0; i < n - 1; ++i) {
// //     if (s[i] == s[i + 1]) {
// //       dp[i][i + 1] = true;
// //       start = i;
// //       maxLength = 2;
// //     }
// //   }
// //   for (let k = 3; k <= n; ++k) {
// //     for (let i = 0; i < n - k + 1; ++i) {
// //       let j = i + k - 1;
// //       if (dp[i + 1][j - 1] && s[i] == s[j]) {
// //         dp[i][j] = true;
// //         if (k > maxLength) {
// //           start = i;
// //           maxLength = k;
// //         }
// //       }
// //     }
// //   }
// //   return s.substring(start, start + maxLength);
// // };

// // console.log(longestPalindrome("babad"));

// // function naive(txt, pat) {
// //   const m = pat.length;
// //   const n = txt.length;
// //   // console.log(pat,txt,m,n)
// //   for (let i = 0; i <= n - m; i++) {
// //     let j;
// //     for (j = 0; j < m; j++) {
// //       if (txt[i + j] != pat[j]) break;
// //     }
// //     if (j == m) console.log("pattern found at:" + i);
// //   }
// // }

// // const txt = "AABAACAADAABAAABAA";
// // const pat = "AABA";
// // naive(txt, pat);

// // // arrays
// // // two pointers

// // function twoPointers(arr, sum) {
// //   let l = 0;
// //   let r = arr.length - 1;
// //   while (l <= r) {
// //     if (arr[l] + arr[r] === sum) {
// //       return [l, r];
// //     }
// //     if (arr[l] + arr[r] > sum) r++;
// //     else l--;
// //   }
// // }
// // console.log("twoPointers");
// // console.log(twoPointers([1, 2, 3, 4], 5));

// // // twoSum
// // function twoSum(arr, k) {
// //   let m = {};
// //   for (let i in arr) {
// //     let diff = k - arr[i];
// //     if (m[diff]) {
// //       return [+i, arr[i]];
// //     } else m[arr[i]] = i;
// //   }
// // }
// // console.log(twoSum([1, 2, 3, 4], 5));

// // // slidingWindow
// // function slidingWindow(arr, k) {
// //   const n = arr.length;
// //   let sum = (max = arr.slice(0, k).reduce((a, b) => a + b, 0));
// //   for (let i = k; i < n; i++) {
// //     sum += arr[i] - arr[i - k];
// //     max = Math.max(max, sum);
// //   }
// //   return max;
// // }
// // console.log("slidingWindow");
// // console.log(slidingWindow([100, 200, 300, 400], 2));

// // valid parenthesis , next greater element , next smaller element

// // // validParentheses
// // function validParentheses(s) {
// //   let match = {
// //     ")": "(",
// //     "}": "{",
// //     "]": "[",
// //   };
// //   let stack = [];
// //   for (let i in s) {
// //     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
// //       stack.push(s[i]);
// //       continue;
// //     }
// //     if (stack.length === 0 || match[s[i]] != stack.pop()) {
// //       return false;
// //     }
// //   }
// //   return stack.length === 0;
// // }

// // console.log("validParentheses");
// // console.log(validParentheses("(())"));
// // // nextGreaterElement
// // function nextGreaterElement(nums) {
// //   const n = nums.length;
// //   const res = Array(n).fill(-1);
// //   const stack = [];
// //   for (let i = 0; i < n * 2; ++i) {
// //     const num = nums[i % n];
// //     while (stack.length && nums[stack.slice(-1)[0]] < num)
// //       res[stack.pop()] = num;
// //     if (i < n) stack.push(i);
// //   }
// //   return res;
// // }
// // console.log(nextGreaterElement([1, 2, 3]));
// // Asteroid Collision
// // function peek(stack) {
// //   return stack.slice(-1)[0];
// // }
// // function asteroidCollision(asteroids) {
// //   const stack = [];
// //   for (let a of asteroids)
// //     if (a > 0) {
// //       stack.push(a);
// //     } else {
// //       while (stack.length && peek(stack) > 0 && peek(stack) < -a) stack.pop();
// //       if (!stack.length || peek(stack) < 0) stack.push(a);
// //       else if (peek(stack) == -a) stack.pop();
// //       else;
// //     }
// //   const res = Array(stack.length).fill(0);
// //   for (let i = res.length - 1; i >= 0; --i) res[i] = stack.pop();
// //   return res;
// // }
// // console.log(asteroidCollision([5, 10, -5]));

// // Stock Span Problem
// // Input: N = 7, price[] = [100 80 60 70 60 75 85]
// // Output: 1 1 1 2 1 4 6
// // function peek(stack) {
// //   return stack.slice(-1)[0];
// // }
// // function stockSpanProblem(price) {
// //   const stack = [];
// //   const n = price.length;
// //   const span = Array(n + 1).fill(0);
// //   stack.push(0);
// //   span[0] = 1;
// //   for (let i = 1; i < n; i++) {
// //     while (stack.length !== 0 && price[peek(stack)] <= price[i]) stack.pop();
// //     span[i] = stack.length === 0 ? i + 1 : i - peek(stack);
// //     stack.push(i);
// //   }
// //   return span;
// // }
// // const price = [10, 4, 5, 90, 120, 80];
// // console.log(stockSpanProblem(price));
// // celebrity problem
// const MATRIX = [
//   [0, 0, 1, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 0],
//   [0, 0, 1, 0],
// ];
// function knows(a, b) {
//   let res = MATRIX[a][b] == 1 ? true : false;
//   return res;
// }
// function findCelebrity(n) {
//   let st = new Array();
//   let c;
//   for (let i = 0; i < n; i++) {
//     st.push(i);
//   }
//   while (st.length > 1) {
//     let a = st.pop();
//     let b = st.pop();
//     if (knows(a, b)) {
//       st.push(b);
//     } else st.push(a);
//   }
//   if (st.length == 0) return -1;
//   c = st.pop();
//   for (i = 0; i < n; i++) {
//     if (i != c && (knows(c, i) || !knows(i, c))) return -1;
//   }
//   return c;
// }
// let n = 4;
// let result = findCelebrity(n);
// if (result == -1) {
//   console.log("No Celebrity");
// } else console.log("Celebrity ID " + result);
// // heights = [2,1,5,6,2,3]
// // Output: 10
//  var largestRectangleArea = function(heights) {
//   let ans = 0
//   const stack = []
//   for (let i = 0; i <= heights.length; i++) {
//       while (stack.length && (i == heights.length || heights[stack[stack.length - 1]] > heights[i])) {
//           let h = heights[stack.pop()]
//           let w;
//           if (stack.length)
//               w = i - stack[stack.length - 1] - 1
//           else
//               w = i
//           ans = Math.max(ans, h * w)
//       }
//       stack.push(i)
//   }
//   return ans
// };
// largestRectangleArea([2, 1, 5, 6, 2, 3])

// // let arr5 = [3, 2, 0, 1];
// // arr5 = arr5.map((val, index) => {
// //   let obj = {
// //     key: index,
// //     value: val,
// //     newValue: null,
// //   };
// //   return obj;
// // });
// // for (let i of arr5) {
// //   let ele = arr5.filter((x) => x.key === arr5[i.value].value)[0];
// //   arr5[i.value].newValue = ele.value;
// // }
// // console.log({ arr5 });
// // // [1, 0, 3, 2]

// // function lis(arr) {
// //   let n = arr.length;
// //   let dp = Array(n).fill(1);
// //   for (let i = 1; i < n; ++i) {
// //     for (let j = 0; j < i; ++j) {
// //       if (arr[i] > arr[j] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
// //     }
// //   }
// //   console.log(dp);
// //   return Math.max(...arr);
// // }
// // let arr = [1, 2, 3, 0, 1, 2];
// // console.log(lis(arr));
// // function maxEnvelopes(envelopes){
// //   let n = envelopes.length;
// //   if (n == 0)
// //       return n;
// //   envelopes.sort();
// //   let dp = Array(n).fill(1);
// //   for (let i = 1; i < n; ++i) {
// //       for (let j = 0; j < i; ++j) {
// //           if (envelopes[i][0] > envelopes[j][0]
// //               && envelopes[i][1] > envelopes[j][1]
// //               && dp[i] < dp[j] + 1)
// //               dp[i] = dp[j] + 1;
// //       }
// //   }
// //   // lookup dp table => [1, 2, 2, 3]
// //   return Math.max(...dp);
// // }
// // let envelopes
// //   = [ [ 4, 3 ], [ 5, 3 ], [ 5, 6 ], [ 1, 2 ] ];
// // console.log(maxEnvelopes(envelopes))

// var isMatch = function (s, p) {
//   const rows = s.length;
//   const columns = p.length;
//   if (rows == 0 && columns == 0) {
//     return true;
//   }
//   if (columns == 0) {
//     return false;
//   }
//   const dp = Array.from(Array(rows + 1), () => Array(columns + 1).fill(false));
//   console.log(dp)
//   dp[0][0] = true;
//   for (let i = 1; i < columns + 1; i++) {
//     if (p[i - 1] === "*") {
//       dp[0][i] = dp[0][i - 2];
//     } else {
//       dp[0][i] = false;
//     }
//   }
//   for (let i = 1; i < rows + 1; i++) {
//     for (let j = 1; j < columns + 1; j++) {
//       if (p[j - 1] === "*") {
//         if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
//           dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
//         } else {
//           dp[i][j] = dp[i][j - 2];
//         }
//       } else if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else {
//         dp[i][j] = false;
//       }
//     }
//   }
//   return dp[rows][columns];
// };
// console.log(isMatch("aab", "c*a*b"));

var permutations = function (nums, result, visited = {}, curr = []) {
  if (nums.length == curr.length) {
    result.push(curr.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!visited[i]) {
      curr.push(nums[i]);
      visited[i] = true;
      permutations(nums, result, visited, curr);
      visited[i] = false;
      curr.pop();
    }
  }
};

const result = [];
permutations([1, 2, 2], result);
console.log(result);

// in order to eliminate duplicate permutations , sort the initial array and use continue
// keyword when nums[i] == nums[i-1] && i>0 && !visited[i-1]
