class Item {
  constructor(v, w) {
    this.v = v;
    this.w = w;
  }
}

function fractionalKnapsack(W, arr, n) {
  arr.sort((a, b) => a.v / a.w - b.v / b.w);
  let currW = 0;
  let currP = 0;
  for (let i = 0; i < n; i++) {
    if (currW + arr[i].w <= W) {
      currW += arr[i].w;
      currP += arr[i].v;
    } else {
      let remain = W - currW;
      currP += arr[i].v * (remain / arr[i].w);
      break;
    }
  }
  return currP;
}

console.log(
  fractionalKnapsack(
    50,
    [new Item(60, 10), new Item(100, 20), new Item(120, 30)],
    3
  )
);

class Activity {
  constructor(s, f) {
    this.start = s;
    this.finish = f;
  }
}

function printMaxActivities(arr) {
  let i = (j = 0);
  console.log(i);
  for (j = 1; j < arr.length; j++) {
    if (arr[j].start >= arr[i].finish) {
      console.log(j);
      i = j;
    }
  }
}

const arr = [
  new Activity(1, 9),
  new Activity(3, 4),
  new Activity(0, 1),
  new Activity(5, 7),
  new Activity(8, 9),
  new Activity(5, 9),
];

arr.sort((a, b) => a.finish - b.finish);
printMaxActivities(arr);

class Job {
  constructor(j, d, p) {
    this.job = j;
    this.deadline = d;
    this.profit = p;
  }
}

function print(jobs, t) {
  let result = Array(t).fill(false);
  let answer = Array(t).fill(null);
  jobs.sort((a, b) => b.deadline - a.deadline);
  for (let i in jobs) {
    for (let j = Math.min(t - 1, jobs[i].deadline); j >= 0; j--) {
      if (!result[j]) {
        result[j] = true;
        answer[j] = jobs[i].job;
        break;
      }
    }
  }
  console.log(answer);
}

const jobs = [
  new Job("A", 2, 100),
  new Job("B", 1, 19),
  new Job("C", 2, 27),
  new Job("D", 1, 25),
  new Job("E", 3, 15),
];

print(jobs, 3);
