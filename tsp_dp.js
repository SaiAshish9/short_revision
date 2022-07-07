class Graph {
  constructor(n) {
    this.g = Array.from(Array(n), () => Array(n).fill(0));
    this.n = n;
  }

  addEdge(u, v, wt) {
    this.g[u][v] = wt;
    this.g[v][u] = wt;
  }

  tsp(dp, mask = 1, pos = 0) {
    if (mask == (1 << n) - 1) return this.g[pos][0];
    if (dp[mask][pos] != -1) return dp[mask][pos];
    let ans = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < this.n; i++) {
        if ((mask & (1 << i)) == 0) {
            let newAns = this.g[pos][i] + this.tsp(dp, (mask | (1 << i)), i)
            ans = Math.min(ans, newAns)
        }
    }
    return dp[mask][pos] = ans
  }
}

const n = 4;
const g = new Graph(n);
const v = ["A", "B", "C", "D"];
const dp = Array.from(Array(1 << n), () => Array(n).fill(-1));
g.addEdge(0, 1, 20);
g.addEdge(0, 2, 42);
g.addEdge(0, 3, 25);
g.addEdge(1, 2, 30);
g.addEdge(1, 3, 34);
g.addEdge(3, 2, 10);
g.print();
g.tsp(dp);
