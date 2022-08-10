class Graph {
  constructor(n) {
    this.g = {};
    this.n = n;
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
    let visited = {};
    q.push(v);
    visited[v] = true;
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
  }

  dfs(v = 0, visited = {}) {
    visited[v] = true;
    console.log(v);
    const list = this.g[v];
    for (let l of list) {
      if (!visited[l]) this.dfs(l, visited);
    }
  }

  paths(s = 0, d = this.n - 1) {
    const result = [];
    const curr = [];
    curr.push(s);
    this.allPathsDfs(s, d, result, curr);
    console.log({ result });
  }

  allPathsDfs(s, d, result, curr, visited = {}) {
    if (s == d) {
      result.push(curr.slice());
      return;
    }
    visited[s] = true;
    const list = this.g[s];
    for (let i of list) {
      if (!visited[i]) {
        curr.push(i);
        this.allPathsDfs(i, d, result, curr, visited);
        curr.splice(curr.indexOf(i), 1);
      }
    }
    visited[s] = false;
  }

  tsp() {
    let result = [];
    this.tspH(0, 1, 0, result);
    console.log(Math.min(...result));
  }

  tspH(curr, count, cost, result, visited = {}) {
    if (count == this.n && this.g[curr][0]) {
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

// array permutations
// var dfs = function(nums, res = [], curr = [], visited = []) {
//     if (curr.length == nums.length) {
//         res.push(curr.slice());
//         return;
//     }
//     for (let i in nums) {
//         if (visited[i] === false) {
//             visited[i] = true;
//             curr.push(nums[i]);
//             dfs(nums, res, curr, visited);
//             curr.pop();
//             visited[i] = false;
//         }
//     }
// };

const g = new Graph(6);
const v = ["A", "B", "C", "D", "E", "F"];

for (let i in v) {
  g.addVertex(i);
}

g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(4, 2);
g.addEdge(2, 5);

// g.bfs();
g.dfs();
g.paths();
