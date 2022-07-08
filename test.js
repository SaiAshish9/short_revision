const a = [1, 2, 3];

const W = 9;

const v = [9, 2, 3];

const n = a.length;
const dp = Array.from(Array(n), () => Array(n).fill(0));

for (let i in a) {
  for (let j = 0; j <= i; j++) {
    dp[i][j] = a[i] * a[i];
  }
}

let sum = [];

for (let i in a) {
  sum.push(dp[i].reduce((a, b) => a + b, 0));
}

sum = sum.filter((x) => x <= W);

const sumL = sum.length;

console.log(sum);
