var Node = function (data, next = null) {
  this.data = typeof data === "undefined" ? null : data;
  this.next = typeof next === "undefined" ? null : next;
};

function reverse(head) {
  var temp = head;
  var curr = temp;
  var prev = (next = null);
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
  var temp = head;
  var curr = temp;
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

reverseTP(l);
reverse(l);
