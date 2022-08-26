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

function topView(root) {
  if (root) return;
  const q = [];
  const m = {};
  let hd = 0;
  root.hd = hd;
  q.push(root);
  while (q.length) {
    let curr = q[0];
    hd = curr.hd;
    if (!m[hd]) m[hd] = curr.data;
    if (curr.left) {
      curr.left.hd = hd - 1;
      q.push(curr.left);
    }
    if (curr.right) {
      curr.right.hd = hd + 1;
      q.push(curr.right);
    }
    q.shift();
  }
  const values = Object.values(m);
  for (let [_, value] of values) {
    console.log(value);
  }
}

const binaryTree = new TreeNode(1);
binaryTree.left = new TreeNode(2);
binaryTree.left.left = new TreeNode(3);
binaryTree.left.right = new TreeNode(4);
binaryTree.right = new TreeNode(5);
binaryTree.right.right = new TreeNode(6);
topView(binaryTree);

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
