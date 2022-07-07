class Graph {

    constructor(n, v, c) {
        this.n = n
        this.g = {}
        this.c = c
        this.v = v
    }

    addVertex(v) {
        this.g[v] = {
            color: null,
            list: []
        }
    }

    addEdge(u, v) {
        this.g[u].list.push(v)
        this.g[v].list.push(u)
    }

    print() {
        console.log(this.g)
    }

    bfs() {
        let q = []
        let visited = {}
        visited[0] = true
        q.push(0)
        this.g[0].color = this.c[0]
        while (q.length) {
            const v = q.shift()
            const list = this.g[v].list
            let c = 0
            for (let i of list) {
                if (!visited[i]) {
                    visited[i] = true
                    q.push(i)
                }
                if (this.g[i].color === c) c++
            }
            this.g[v].color = c
            console.log(this.v[v] + " -> " + this.c[c])
        }
    }

}

const c = ['red', 'green', 'yellow', 'blue', 'black', 'orange']
const v = ['A', 'B', 'C', 'D', 'E', 'F']
const g = new Graph(6, v, c)
for (let x in v) {
    g.addVertex(x)
}
g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(4, 2);
g.addEdge(2, 5);
g.bfs()
g.print()