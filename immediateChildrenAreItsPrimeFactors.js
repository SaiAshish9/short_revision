function primeFactors(n, i) {
  let c = 2;
  const res = [];
  while (n > 1) {
    if (n % c == 0) {
      res.push(c);
      n /= c;
    } else c++;
  }
  return res.includes(i);
}

var TreeNode = function (data) {
  this.data = data ?? null;
  this.left = null;
  this.right = null;
};

function bfs(t) {
  const q = [];
  q.push(t);
  let count = 0;
  while (q.length) {
    const curr = q.shift();
    if (curr.left && !curr.right && primeFactors(curr.data, curr.left.data))
      count++;
    else if (
      !curr.left &&
      curr.right &&
      primeFactors(curr.data, curr.right.data)
    )
      count++;
    else if (
      curr.left &&
      curr.right &&
      primeFactors(curr.data, curr.left.data) &&
      primeFactors(curr.data, curr.right.data)
    )
      count++;
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
  console.log(count);
}

const t = new TreeNode(10);
t.left = new TreeNode(2);
t.right = new TreeNode(5);
bfs(t);
