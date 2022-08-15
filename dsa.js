// graphs
// bfs dfs allPathsDfs tsp tspHelper primeFactors graphColoring

class Graph {
  constructor(n, c) {
    this.g = {};
    this.n = n;
    this.c = c;
  }
  addVertex(v) {
    this.g[v] = [];
  }
  addEdge(u, v) {
    this.g[u].push(v);
    this.g[v].push(u);
  }
  bfs(v = 0) {
    let q = [];
    q.push(v);
    let visited = {};
    visited[v] = true;
    console.log("BFS");
    while (q.length) {
      const ele = q.shift();
      console.log(ele);
      const list = this.g[ele];
      for (let l of list) {
        if (!visited[l]) {
          visited[l] = true;
          q.push(l);
        }
      }
    }
    console.log("###");
  }
  dfs(v = 0, visited = {}) {
    visited[v] = true;
    console.log(v);
    const list = this.g[v];
    for (let l of list) {
      if (!visited[l]) this.dfs(l, visited);
    }
  }
  allPathsDfs(s = 0, d = this.n - 1) {
    const result = [];
    const curr = [];
    curr.push(s);
    this.allPathsDfsHelper(s, d, result, curr);
    console.log(result);
  }
  allPathsDfsHelper(s, d, result, curr, visited = {}) {
    if (s == d) {
      result.push(curr.slice());
      return;
    }
    visited[s] = true;
    const list = this.g[s];
    for (let i of list) {
      if (!visited[i]) {
        curr.push(i);
        this.allPathsDfsHelper(i, d, result, curr, visited);
        curr.splice(curr.indexOf(i), 1);
      }
    }
    visited[s] = false;
  }
}
const g1 = new Graph(3);
let v = [1, 2, 3];
for (let i in v) {
  g1.addVertex(i);
}
g1.addEdge(0, 1);
g1.addEdge(1, 2);
g1.addEdge(2, 0);
g1.bfs();
g1.dfs();
g1.allPathsDfs();
// Graph Coloring
class Graph1 {
  constructor(n, c) {
    this.g = {};
    this.n = n;
    this.c = c;
  }
  addVertex(v) {
    this.g[v] = {
      v: [],
      c: null,
    };
  }
  addEdge(u, v) {
    this.g[u].v.push(v);
    this.g[v].v.push(u);
  }
  bfs(v = 0) {
    let q = [];
    q.push(v);
    let visited = {};
    visited[v] = true;
    this.g[0].c = this.c[0];
    while (q.length) {
      let ele = q.shift();
      let c = 0;
      console.log(ele);
      let list = this.g[ele].v.sort((a, b) => a - b);
      for (let l of list) {
        if (!visited[l]) {
          visited[l] = true;
          q.push(l);
        }
        if (this.g[l].c === c) c++;
      }
      this.g[ele].c = c;
    }
    console.log(this.g);
  }
}
let c = ["R", "G", "B"];
const g2 = new Graph1(3, c);
let v1 = [1, 2, 3];
for (let i in v) {
  g2.addVertex(i);
}
g2.addEdge(0, 1);
g2.addEdge(1, 2);
g2.addEdge(2, 0);
console.log("GC");
g2.bfs();
// TSP
class Graph2 {
  constructor(n) {
    this.g = Array.from(Array(n), () => Array(n).fill(0));
    this.n = n;
  }
  addEdge(u, v, w) {
    this.g[u][v] = w;
    this.g[v][u] = w;
  }
  tsp() {
    const result = [];
    this.tspH(0, 1, 0, result);
    console.log(Math.min(...result));
  }
  tspH(curr, count, cost, result, visited = {}) {
    if (count === this.n && this.g[curr][0]) {
      result.push(cost + this.g[curr][0]);
      return;
    }
    for (let i = 0; i < this.n; i++) {
      let curr_cost = this.g[curr][i];
      if (!visited[i] && curr_cost) {
        visited[i] = true;
        this.tspH(i, count + 1, cost + curr_cost, result, visited);
        visited[i] = false;
      }
    }
  }
}
const g3 = new Graph2(3);
g3.addEdge(0, 1, 10);
g3.addEdge(1, 2, 20);
g3.addEdge(2, 0, 30);
g3.tsp();
// trees
var TreeNode = function (data, left, right) {
  this.data = data;
  this.left = typeof left === "undefined" ? null : left;
  this.right = typeof left === "undefined" ? null : right;
};
// inorder preorder postorder check bst bfs mirror left right
function inorder(root) {
  if (root) {
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
  }
}
function preorder(root) {
  if (root) {
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
  }
}
function postorder(root) {
  if (root) {
    postorder(root.left);
    postorder(root.right);
    console.log(root.data);
  }
}
const t = new TreeNode(2);
t.left = new TreeNode(1);
t.right = new TreeNode(3);
console.log("inorder");
inorder(t);
console.log("preorder");
preorder(t);
console.log("postorder");
postorder(t);
function bfs(root) {
  let q = [];
  q.push(root);
  while (q.length) {
    let curr = q.shift();
    console.log(curr.data);
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
}
function mirror(root) {
  let q = [];
  q.push(root);
  while (q.length) {
    let curr = q.shift();
    [curr.left, curr.right] = [curr.right, curr.left];
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
}
function leftView(root) {
  let q = [];
  q.push(root);
  while (q.length) {
    const n = q.length;
    for (let i = 0; i < n; i++) {
      let curr = q.shift();
      if (i === 0) console.log(curr.data);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
  }
}
function rightView(root) {
  let q = [];
  q.push(root);
  while (q.length) {
    const n = q.length;
    for (let i = 0; i < n; i++) {
      let curr = q.shift();
      if (i === n - 1) console.log(curr.data);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
  }
}
console.log("bfs");
bfs(t);
mirror(t);
console.log("mirror");
console.log(t);
mirror(t);
console.log("mirror");
console.log(t);
console.log("leftView");
leftView(t);
console.log("rightView");
rightView(t);
// check BST
function BST(root) {
  let prev;
  if (root) {
    if (!BST(root.left)) return false;
    if (prev && root.data <= prev.data) return false;
    prev = root;
    return BST(root.right);
  }
  return true;
}
console.log("check BST");
console.log(BST(t));
// immediateChildrenAreItsPrimeFactors
function primeFactors(n, k) {
  let c = 2;
  let res = [];
  while (n > 1) {
    if (n % c == 0) {
      n /= c;
      res.push(c);
    } else c++;
  }
  return res.includes(k);
}
function immediateChildrenAreItsPrimeFactors(root) {
  let q = [];
  q.push(root);
  let count = 0;
  while (q.length) {
    let curr = q.shift();
    if (curr.left && !curr.right && primeFactors(curr.data, curr.left)) count++;
    if (!curr.left && curr.right && primeFactors(curr.data, curr.right))
      count++;
    if (
      !curr.left &&
      !curr.right &&
      primeFactors(curr.data, curr.left) &&
      primeFactors(curr.data, curr.right)
    )
      count++;
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
  console.log(count);
}
console.log("immediateChildrenAreItsPrimeFactors");
immediateChildrenAreItsPrimeFactors(t);
// linked list
var ListNode = function (data, next = null) {
  this.data = data;
  this.next = typeof next === "undefined" ? null : next;
};
var l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
// l.next.next = l;
function cycle(head) {
  let temp = head;
  const s = new Set();
  while (temp) {
    if (s.has(temp)) return true;
    s.add(temp);
    temp = temp.next;
  }
  return false;
}
console.log("cycle");
console.log(cycle(l));
function reverse(l) {
  let curr = l;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  l = prev;
  return l;
}
function reverseTP(l) {
  let curr = l;
  while (curr.next) {
    let next = curr.next;
    curr.next = next.next;
    next.next = l;
    l = next;
  }
  return l;
}
console.log("reverse");
l = reverse(l);
console.log(l);
console.log("reverseTP");
l = reverseTP(l);
console.log(l);
function countCommon(a, b) {
  let count = 0;
  while (a && b) {
    if (a.data == b.data) count += 1;
    else break;
    a = a.next;
    b = b.next;
  }
  return count;
}
function lps(l) {
  let curr = l;
  let prev = null;
  let result = 0;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    result = Math.max(result, 2 * countCommon(prev, next) + 1);
    result = Math.max(result, 2 * countCommon(curr, next));
    prev = curr;
    curr = next;
  }
  l = prev;
  console.log(result);
  return l;
}
console.log("lps");
l = lps(l);
console.log("reverse");
l = reverse(l);
console.log(l);

// backtracking
// sudoku nqueens nqueens2 knighttour rateinamaze subsets wordbreak array + string permutations combinations

// greedy
// activity_selectivity job_sequencing_with_deadlines fractional_knapsack

// dp

// arrays

// two pointers

function twoPointers(arr, sum) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] + arr[r] === sum) {
      return [l, r];
    }
    if (arr[l] + arr[r] > sum) r++;
    else l--;
  }
}
console.log("twoPointers");
console.log(twoPointers([1, 2, 3, 4], 5));

// twoSum
function twoSum(arr, k) {
  let m = {};
  for (let i in arr) {
    let diff = k - arr[i];
    if (m[diff]) {
      return [+i, arr[i]];
    } else m[arr[i]] = i;
  }
}
console.log(twoSum([1, 2, 3, 4], 5));

// slidingWindow
function slidingWindow(arr, k) {
  const n = arr.length;
  let sum = (max = arr.slice(0, k).reduce((a, b) => a + b, 0));
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }
  return max;
}
console.log("slidingWindow");
console.log(slidingWindow([100, 200, 300, 400], 2));

// validParentheses
function validParentheses(s) {
  var match = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  var stack = [];
  for (let i in s) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      continue;
    }
    if (stack.length === 0 || match[s[i]] != stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log("validParentheses");
console.log(validParentheses("(())"));

// nextGreaterElement
function nextGreaterElement(nums) {
  const n = nums.length;
  const res = Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n * 2; ++i) {
    const num = nums[i % n];
    while (stack.length && nums[stack.slice(-1)[0]] < num)
      res[stack.pop()] = num;
    if (i < n) stack.push(i);
  }
  return res;
}
console.log(nextGreaterElement([1, 2, 3]));
