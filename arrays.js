function isPairSum(arr, n, x) {
  let l = 0;
  let r = n - 1;
  while (l < r) {
    if (arr[l] + arr[r] === x) return [l, r];
    if (arr[l] + arr[r] < x) l++;
    else if (arr[l] + arr[r] > x) r--;
  }
}

function maxSum(arr, n, k) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSum([100, 200, 300, 400], 4, 2));
// 700

var arr = [3, 5, 9, 2, 8, 10, 11];
var val = 17;
var arrSize = 7;

console.log(isPairSum(arr, arrSize, val));
