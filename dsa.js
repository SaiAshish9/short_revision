// graphs
// bfs dfs allPathsDfs tsp tspHelper primeFactors graphColoring

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

// trees

function primeFactors(n, k) {
  let c = 2;
  let res = [];
  while (n > 1) {
    if (n % c == 0) {
      n /= c;
      res.push(c);
    } else c++;
  }
  return n.includes(k);
}

// greedy
