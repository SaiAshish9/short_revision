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

function dfsH() {}

function dfs() {}

dfs(binaryTree);
