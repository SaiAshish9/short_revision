var TreeNode = function (data, left = null, right = null) {
  this.data = data;
  this.left = typeof left !== "undefined" ? left : null;
  this.right = typeof right !== "undefined" ? right : null;
};

// function getVerticalOrder(root, hd, m) {
//   if (root) {
//     if (m[hd]) {
//       m[hd].push(root.data);
//     } else {
//       m[hd] = [root.data];
//     }
//     getVerticalOrder(root.left, hd - 1, m);
//     getVerticalOrder(root.right, hd + 1, m);
//   }
// }

// function printVerticalOrder(root) {
//   const m = {};
//   let hd = 0;
//   getVerticalOrder(root, hd, m);
//   for (let [_, v] of Object.entries(m)) console.log(v);
// }

// class Pair {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }
// function fillMap(root, d, l, m) {
//   if (root) {
//     if (!m[d]) m[d] = new Pair(root.data, l);
//     else if (m[d].b > l) m[d] = new Pair(root.data, l);
//     fillMap(root.left, d - 1, l + 1, m);
//     fillMap(root.right, d + 1, l + 1, m);
//   }
// }
// function topView(root) {
//   const m = {};
//   fillMap(root, 0, 0, m);
//   const arr = Object.keys(m);
//   arr.sort((a, b) => a - b);
//   for (let k of arr) console.log(m[k].a + " ");
// }
// function printBottomViewUtil(root, m, hd, level) {
//   if (root) {
//     if (hd in m) {
//       if (level >= m[hd][1]) m[hd] = [root.data, level];
//     } else m[hd] = [root.data, level];
//     printBottomViewUtil(root.left, m, +hd - 1, level + 1);
//     printBottomViewUtil(root.right, m, +hd + 1, level + 1);
//   }
// }
// function bottomView(root) {
//   const m = {};
//   printBottomViewUtil(root, m, 0, 0);
//   const e = Object.entries(m).map((x) => [+x[0], x[1]]);
//   e.sort((a, b) => a[0] - b[0]);
//   console.log(e.map((x) => x[1][0]));
// }

// function insertLevelOrder(arr, i) {
//   let root = null;
//   if (i < arr.length) {
//     root = new TreeNode(arr[i]);
//     root.left = insertLevelOrder(arr, 2 * i + 1);
//     root.right = insertLevelOrder(arr, 2 * i + 2);
//   }
//   return root;
// }
// function inorder(root) {
//   if (root) {
//     inorder(root.left);
//     console.log(root.data);
//     inorder(root.right);
//   }
// }
// let arr = [2, 1, 3];
// root = insertLevelOrder(arr, 0);
// inorder(root);
// 1
// 2
// 3

// const binaryTree = new TreeNode(1);
// binaryTree.left = new TreeNode(2);
// binaryTree.left.left = new TreeNode(3);
// binaryTree.left.right = new TreeNode(4);
// binaryTree.right = new TreeNode(5);
// binaryTree.right.right = new TreeNode(6);
// bottomView(binaryTree);
// 3
// 2
// 4
// 5
// 6

// printVerticalOrder(binaryTree);
// [ 1, 4 ]
// [ 5 ]
// [ 6 ]
// [ 2 ]
// [ 3 ]

// function dfsH(head, result, curr = [], currLength = 0) {
//   if (head) {
//     curr[currLength] = head.data;
//     currLength++;
//     if (!head.left && !head.right) {
//       currLength = 0;
//       result.push(curr.slice());
//       return;
//     }
//     dfsH(head.left, result, curr, currLength);
//     dfsH(head.right, result, curr, currLength);
//   }
// }
// function dfs() {
//   const result = [];
//   dfsH(binaryTree, result);
//   console.log(result);
// }
// dfs(binaryTree);
// [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 5, 6 ] ]

// #include <stdio.h>
// #include <stdlib.h>
// struct TreeNode {
//   int data;
//   struct TreeNode *left;
//   struct TreeNode *right;
// };
// struct TreeNode* newNode(int data)
// {
//     struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
//     node->data = data;
//     node->left = NULL;
//     node->right = NULL;
//     return node;
// }
// int main()
// {
//   struct TreeNode* binaryTree = newNode(1);
//   binaryTree->left = newNode(2);
//   binaryTree->left->left = newNode(3);
//   binaryTree->left->right = newNode(4);
//   binaryTree->right = newNode(5);
//   binaryTree->right->right = newNode(6);
//   printf("%p", binaryTree);
//   return 0;
// }

// package main
// import "fmt"
// type TreeNode struct {
// 	left  *TreeNode
// 	right *TreeNode
// 	data  int
// }
// func main() {
// 	binaryTree := &TreeNode{data: 1}
// 	binaryTree.left = &TreeNode{data: 2}
// 	binaryTree.left.left = &TreeNode{data: 3}
// 	binaryTree.left.right = &TreeNode{data: 4}
// 	binaryTree.right = &TreeNode{data: 5}
// 	binaryTree.right.right = &TreeNode{data: 6}
// 	fmt.Println(binaryTree)
// }

// package main
// import "fmt"
// type TreeNode struct {
// 	left  *TreeNode
// 	right *TreeNode
// 	data  int
// }
// func dfsH(head *TreeNode, result [][]int, curr []int, currLength int) {
// 	if head != nil {
// 		curr[currLength] = head.data
// 		currLength++
// 		if head.left == nil && head.right == nil {
// 			currLength = 0
// 			result[currLength] = head.data
// 			return
// 		}
// 		dfsH(head.left, result, curr, currLength)
// 		dfsH(head.right, result, curr, currLength)
// 	}
// }
// func dfs(head *TreeNode) {
// 	var result [][]int
// 	var curr []int
// 	currLength := 0
// 	dfsH(head, result, curr, currLength)
// 	fmt.Println(result)
// }
// func main() {
// 	binaryTree := &TreeNode{data: 1}
// 	binaryTree.left = &TreeNode{data: 2}
// 	binaryTree.left.left = &TreeNode{data: 3}
// 	binaryTree.left.right = &TreeNode{data: 4}
// 	binaryTree.right = &TreeNode{data: 5}
// 	binaryTree.right.right = &TreeNode{data: 6}
// 	dfs(binaryTree)
// }

// function printLeaves(node) {
//   if (node) {
//     printLeaves(node.left);
//     if (!node.left && !node.right) console.log(node.data);
//     printLeaves(node.right);
//   }
// }
// function printBoundaryLeft(node) {
//   if (node) {
//     if (node.left) {
//       console.log(node.data + " ");
//       printBoundaryLeft(node.left);
//     } else if (node.right) {
//       console.log(node.data);
//       printBoundaryLeft(node.right);
//     }
//   }
// }

// function printBoundaryRight(node) {
//   if (node) {
//     if (node.right) {
//       printBoundaryRight(node.right);
//       console.log(node.data);
//     } else if (node.left) {
//       printBoundaryRight(node.left);
//       console.log(node.data);
//     }
//   }
// }

// function printBoundary(node) {
//   if (node) {
//     console.log(node.data);
//     printBoundaryLeft(node.left);
//     printLeaves(node.left);
//     printLeaves(node.right);
//     printBoundaryRight(node.right);
//   }
// }

function height(node) {
  if (node == null) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}

function diameter(root) {
  if (root) {
    let lheight = height(root.left);
    let rheight = height(root.right);
    let ldiameter = diameter(root.left);
    let rdiameter = diameter(root.right);
    return Math.max(lheight + rheight + 1, Math.max(ldiameter, rdiameter));
  }
  return 0;
}

const binaryTree = new TreeNode(1);
binaryTree.left = new TreeNode(2);
binaryTree.left.left = new TreeNode(3);
binaryTree.left.right = new TreeNode(4);
binaryTree.right = new TreeNode(5);
binaryTree.right.right = new TreeNode(6);
console.log(diameter(binaryTree))
// 5

// printBoundary(binaryTree);
// 1
// 2
// 3
// 4
// 6
// 5
