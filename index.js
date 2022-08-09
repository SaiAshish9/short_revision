var ListNode = function (data) {
  this.data = typeof data != "undefined" ? data : null;
  this.next = null;
};

function isLoop(l) {
  const s = new Set();
  let temp = l;
  while (temp) {
    if (s.has(temp.data)) return true;
    s.add(temp.data);
    temp = temp.next;
  }
  return false;
}
 
const l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);

var TreeNode = function (data) {
  this.data = typeof data != "undefined" ? data : null;
  this.left = null;
  this.right = null;
};

function inorder(temp) {
  if (temp) {
    inorder(temp.left);
    console.log(temp.data);
    inorder(temp.right);
  }
}

function l_bfs(root) {
  let q = [];
  let t = root;
  q.push(t);
  while (q.length) {
    let curr = q.shift();
    console.log(curr.data);
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
}

function leftView(root) {
  let queue = []
  queue.push(root)
  while (queue.length) {
      const n = queue.length
      for (let i = 0; i < n; i++) {
          let curr = queue.shift();
          if (i == 0)
              console.log(curr.data)
          if (curr.left)
              queue.push(curr.left);
          if (curr.right)
              queue.push(curr.right);
      }
  }
}

function rightView() {
  let queue = []
  queue.push(this.root)
  while (queue.length > 0) {
      const n = queue.length
      for (let i = 0; i < n; i++) {
          let curr = queue.shift();
          if (i == n - 1)
              console.log(curr.data)
          if (curr.left)
              queue.push(curr.left);
          if (curr.right)
              queue.push(curr.right);
      }
  }
}

function mirror(root) {
  let q = [];
  let t = root;
  q.push(t);
  while (q.length) {
    let curr = q.shift();
    [curr.left, curr.right] = [curr.right, curr.left];
    console.log(curr.data);
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }
}

function reverse(l) {
  let curr = l;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  l = prev;
}

function twoPointers(head) {
  var curr = head;
  while (curr.next) {
    let next = curr.next;
    curr.next = next.next;
    next.next = head;
    head = next;
  }
}

const t = new TreeNode(1);
t.left = new TreeNode(2);
t.right = new TreeNode(3);

// inorder(t)
// console.log(t);
// l_bfs(t);
// mirror(t);

// console.log(l);
// console.log(isLoop(l));
// reverse(l)
// console.log(l);
