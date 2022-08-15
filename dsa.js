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

  addVertex() {}

  addEdge() {}
}

const g3 = new Graph(3);
for (let i in v) {
  g3.addVertex(i);
}
g3.addEdge(0, 1);
g3.addEdge(1, 2);
g3.addEdge(2, 0);
g3.tsp();

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
