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

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
  const n = nums.length;
  const res = Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n * 2; ++i) {
      const num = nums[i % n];
      while (stack.length && nums[stack.slice(-1)[0]] < num)
          res[stack.pop()] = num;
      if (i < n)
          stack.push(i);
  }
  return res;
};

console.log(nextGreaterElements([1, 2, 1]))