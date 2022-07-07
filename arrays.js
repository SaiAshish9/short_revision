function isPairSum(arr, n, x) {
  let l = 0;
  let r = n - 1;
  while (l < r) {
    if (arr[l] + arr[r] === x) return [l, r];
    if (arr[l] + arr[r] < x) l++;
    else if (arr[l] + arr[r] > x) r--;
  }
}

var arr = [3, 5, 9, 2, 8, 10, 11];
var val = 17;
var arrSize = 7;

console.log(isPairSum(arr, arrSize, val));
