// Q1
function maxEnvelopes(envelopes) {
  var n = envelopes.length;
  if (n == 0) return n;
  envelopes.sort();
  var dp = Array(n).fill(1);
  var result = 1;
  for (var i = 1; i < n; ++i) {
    for (var j = 0; j < i; ++j) {
      if (
        envelopes[i][0] > envelopes[j][0] &&
        envelopes[i][1] > envelopes[j][1] &&
        dp[i] < dp[j] + 1
      )
        dp[i] = dp[j] + 1;
    }
    // I had to include this result variable
    result = Math.max(result, dp[i]);
  }
  return result;
}
var envelopes = [
  [4, 3],
  [5, 3],
  [5, 6],
  [1, 2],
];
maxEnvelopes(envelopes);

// Q2
function rearrange(arr, n) {
  for (let i = 0; i < n; i++) arr[i] += (arr[arr[i]] % n) * n;
  for (let i = 0; i < n; i++) arr[i] /= n;
}

// I tried to solve using array of objects with keys ( key , element , newKey ) , or list of hashmaps

// Q3
class INT {
  constructor(a) {
    this.v = a;
  }
}

function newNode(data) {
  let node = new Node(data);
  return node;
}

function preorderUtil(root, k, sum) {
  if (root == null) return null;
  let lsum = new INT(sum.v + root.data);
  let rsum = new INT(lsum.v);
  root.left = preorderUtil(root.left, k, lsum);
  root.right = preorderUtil(root.right, k, rsum);
  sum.v = max(lsum.v, rsum.v);
  if (sum.v < k) {
    root = null;
  }
  return root;
}

function preorder(root, k) {
  let sum = new INT(0);
  return preorderUtil(root, k, sum);
}

/* Java 
static class Node
{
    int data;
    Node left, right;
};
static Node newNode(int data)
{
    Node node = new Node();
    node.data = data;
    node.left = node.right = null;
    return node;
}
static Node preorderUtil(Node root, int k,
                      INT sum)
{
    if (root == null) return null;
    INT lsum = new INT(sum.v + (root.data));
    INT rsum = new INT(lsum.v);
    root.left = preorderUtil(root.left, k, lsum);
    root.right = preorderUtil(root.right, k, rsum);
    sum.v = max(lsum.v, rsum.v);
    if (sum.v < k)
    {
 
        root = null;
    }
    return root;
}
static Node preorder(Node root, int k)
{
    INT sum = new INT(0);
    return preorderUtil(root, k, sum);
}
*/
