class Graph {
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

  tspH(curr, count, cost, result, visited = []) {
    if (count === this.n && this.g[curr][0]) {
      result.push(cost + this.g[curr][0]);
      return;
    }

    for (let i = 0; i < this.n; i++) {
      if (!visited[i] && this.g[curr][i]) {
        visited[i] = true;
        this.tspH(i, count + 1, cost + this.g[curr][i], result, visited);
        visited[i] = false;
      }
    }
  }
}

const g = new Graph(4);
g.addEdge(0, 1, 20);
g.addEdge(0, 2, 42);
g.addEdge(0, 3, 25);
g.addEdge(1, 2, 30);
g.addEdge(1, 3, 34);
g.addEdge(3, 2, 10);
g.tsp();
