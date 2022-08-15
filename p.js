var Node = function (data, left = null, right = null) {
  this.data = data;
  this.left = typeof left === "undefined" ? null : left;
  this.right = typeof right === "undefined" ? null : right;
};

function inorder(t) {
  if (t) {
    inorder(t.left);
    console.log(t.data);
    inorder(t.right);
  }
}

function dfs(root, count) {
  if (!root) return 0;
  let sum = root.data + dfs(root.left, count) + dfs(root.right, count);
  count[sum] = (count[sum] || 0) + 1;
  return sum;
}

var findFrequentTreeSum = function (root) {
  if (!root) return [];
  const count = {};
  dfs(root, count);
  let maxFreq = Math.max(...Object.values(count));
  const res = [];
  for (let s in count) {
    if (count[s] === maxFreq) res.push(+s);
  }
  return res;
};

const t = new Node(1);
t.left = new Node(2);
t.right = new Node(3);
t.left.left = new Node(4);
t.left.right = new Node(5);

// inorder(t);

console.log(findFrequentTreeSum(t));
