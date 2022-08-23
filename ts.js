var TreeNode = function (data, left = null, right = null) {
  this.data = data;
  this.left = typeof left !== "undefined" ? left : null;
  this.right = typeof right !== "undefined" ? right : null;
};

const binaryTree = new TreeNode(1);
binaryTree.left = new TreeNode(2);
binaryTree.left.left = new TreeNode(3);
binaryTree.left.right = new TreeNode(4);
binaryTree.right = new TreeNode(5);
binaryTree.right.right = new TreeNode(6);

function dfsH(head, result, curr = [], currLength = 0) {
  if (head) {
    curr[currLength] = head.data;
    currLength++;
    if (!head.left && !head.right) {
      currLength = 0;
      result.push(curr.slice());
      return;
    }
    dfsH(head.left, result, curr, currLength);
    dfsH(head.right, result, curr, currLength);
  }
}

function dfs() {
  const result = [];
  dfsH(binaryTree, result);
  console.log(result);
}

dfs(binaryTree);
// [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 5, 6 ] ]