var Node = function (data, next = null) {
  this.data = typeof data === "undefined" ? null : data;
  this.next = typeof next === "undefined" ? null : next;
};

function reverse(head) {
  let temp = head;
  let curr = temp;
  let prev = (next = null);
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  temp = prev;
  console.log(temp);
}

function reverseTP(head) {
  let temp = head;
  let curr = temp;
  while (curr.next) {
    let next = curr.next;
    curr.next = next.next;
    next.next = temp;
    temp = next;
  }
  console.log(temp);
}

const l = new Node(1);
l.next = new Node(2);
l.next.next = new Node(3);

reverse(l);
reverseTP(l);
