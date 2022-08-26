// class Graph {
//   constructor(n) {
//     this.g = {};
//     this.n = n;
//   }
//   addVertex(u) {
//     this.g[u] = [];
//   }
//   addEdge(u, v, w) {
//     this.g[u].push({
//       v,
//       w,
//     });
//   }
//   removeVertex(u) {
//     delete this.g[u];
//   }
//   bfs(v = 0) {
//     let q = [];
//     let visited = {};
//     q.push(v);
//     visited[v] = true;
//     while (q.length) {
//       const ele = q.shift();
//       console.log(ele);
//       const list = this.g[ele].map((x) => x.v);
//       for (let l of list) {
//         if (!visited[l]) {
//           visited[l] = true;
//           q.push(l);
//         }
//       }
//     }
//   }
//   dfs(v = 0, visited = {}) {
//     visited[v] = true;
//     console.log(v);
//     const list = this.g[v].map((x) => x.v);
//     for (let i of list) {
//       if (!visited[i]) this.dfs(i, visited);
//     }
//   }
//   paths(s = 0, d = this.n - 1) {
//     const result = [];
//     const curr = [];
//     curr.push(s);
//     this.allPathsDfs(s, d, result, curr);
//     console.log({ result });
//   }
//   allPathsDfs(s, d, result, curr, visited = {}) {
//     if (s == d) {
//       result.push(curr.slice());
//       return;
//     }
//     visited[s] = true;
//     const list = this.g[s].map((x) => x.v);
//     for (let i of list) {
//       if (!visited[i]) {
//         curr.push(i);
//         this.allPathsDfs(i, d, result, curr, visited);
//         curr.splice(curr.indexOf(i), 1);
//       }
//     }
//     visited[s] = false;
//   }
//   permutations(nums, result, curr = [], visited = {}) {
//     if (nums.length == curr.length) {
//       result.push(curr.slice());
//       return;
//     }
//     for (let i of nums) {
//       if (!visited[i]) {
//         visited[i] = true;
//         curr.push(i);
//         dfs(nums, result, curr, visited);
//         visited[i] = false;
//         curr.pop();
//       }
//     }
//   }
//   //   tsp() {
//   //     let result = [];
//   //     this.tspH(0, 1, 0, result);
//   //     console.log(Math.min(...result));
//   //   }
//   //   tspH(curr, count, cost, result, visited = {}) {
//   //     if (count == this.n && this.g[curr][0]) {
//   //       result.push(cost + this.g[curr][0]);
//   //       return;
//   //     }
//   //     for (let i = 0; i < this.n; i++) {
//   //       let curr_cost = this.g[curr][i];
//   //       if (!visited[i] && curr_cost) {
//   //         visited[i] = true;
//   //         this.tspH(i, count + 1, cost + curr_cost, result, visited);
//   //         visited[i] = false;
//   //       }
//   //     }
//   //   }
// }
// const g = new Graph(4);
// const v = ["A", "B", "C", "D"];
// for (let i in v) {
//   g.addVertex(i);
// }
// g.addEdge(0, 1, 20);
// g.addEdge(0, 2, 42);
// g.addEdge(0, 3, 25);
// g.addEdge(1, 2, 30);
// g.addEdge(1, 3, 34);
// g.addEdge(3, 2, 10);
// g.bfs();
// g.dfs();
// g.paths();
// g.tsp();
// // bfs dfs allPathsDfs tsp permutations graphColoring

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
  isCyclicUtil(v, visited, parent) {
    visited[v] = true;
    for (let i of this.g[v]) {
      if (!visited[i]) {
        if (this.isCyclicUtil(i, visited, v)) return true;
      } else if (i != parent) return true;
    }
    return false;
  }
  isTree() {
    const V = this.n;
    var visited = Array(V).fill(false);
    if (this.isCyclicUtil(0, visited, -1)) return false;
    for (var u = 0; u < V; u++) if (!visited[u]) return false;
    return true;
  }
}
const g = new Graph(4);
const v = ["A", "B", "C", "D"];
for (let i in v) g.addVertex(i);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(3, 2);
console.log(g.isTree())
