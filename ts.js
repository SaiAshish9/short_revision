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
