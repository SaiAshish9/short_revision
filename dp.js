// function knapSack(val, wt, W) {
//   const n = val.length;
//   const dp = Array.from(Array(n + 1), () => Array(W + 1).fill(0));
//   for (let i = 0; i <= n; i++) {
//     for (let w = 0; w <= W; w++) {
//       if (i == 0 || w == 0) dp[i][w] = 0;
//       else if (w >= wt[i - 1]) {
//         dp[i][w] = Math.max(
//           dp[i - 1][w],
//           val[i - 1] + dp[i - 1][w - wt[i - 1]]
//         );
//       } else {
//         dp[i][w] = dp[i - 1][w];
//       }
//     }
//   }
//   return dp[n][W];
// }

// const val = [10, 15, 40];
// const wt = [1, 2, 3];
// const W = 6;
// console.log(knapSack(val, wt, W));

// function bc(n, k) {
//   const dp = Array.from(Array(n + 1), () => Array(k + 1).fill(-1));
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= Math.min(i, k); j++) {
//       if (j == 0 || j == i) dp[i][j] = 1;
//       else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
//     }
//   }
//   console.log(dp[n][k]);
// }

// bc(4, 2);

// function lcs(s1, s2) {
//   const m = s1.length;
//   const n = s2.length;
//   const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++) {
//       if (i == 0 || j == 0) dp[i][j] = 0;
//       else if (s1[i - 1] == s2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
//       else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//     }
//   }

//   let len = dp[m][n];
//   let subsequence = Array(len).fill(null);
//   let i = m,
//     j = n;
//   while (i > 0 && j > 0) {
//     if (s1[i - 1] == s2[j - 1]) {
//       subsequence[len - 1] = s1[i - 1];
//       i -= 1;
//       j -= 1;
//       len -= 1;
//     } else if (dp[i - 1][j] > dp[i][j - 1]) {
//       i -= 1;
//     } else {
//       j -= 1;
//     }
//   }
//   console.log(typeof s1 === "string" ? subsequence.join("") : subsequence);
//   console.log([...new Set(printAllLcs(s1, s2, m, n, dp))]);
// }

// function printAllLcs(s1, s2, m, n, dp) {
//   if (m == 0 || n == 0) return [""];
//   if (s1[m - 1] === s2[n - 1]) {
//     let lcs = printAllLcs(s1, s2, m - 1, n - 1, dp);
//     for (let i in lcs) {
//       lcs[i] += s1[m - 1];
//     }
//     return lcs;
//   }
//   if (dp[m - 1][n] > dp[m][n - 1]) return printAllLcs(s1, s2, m - 1, n, dp);
//   else if (dp[m - 1][n] < dp[m][n - 1])
//     return printAllLcs(s1, s2, m, n - 1, dp);
//   else {
//     let top = printAllLcs(s1, s2, m - 1, n, dp);
//     let left = printAllLcs(s1, s2, m, n - 1, dp);
//     top = [...top, ...left];
//     return top;
//   }
// }

// // lcs([1, 2, 0], [9, 8, 1, 6, 2])
// lcs("abcdefg", "abxdfg");

// function LIS(arr) {
//   const n = arr.length;
//   let dp = Array(n).fill(1);
//   for (i = 1; i < n; i++)
//     for (j = 0; j < i; j++)
//       if (arr[i] > arr[j] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
//   const max = Math.max(...dp);
//   let index = [];
//   let tmp = max;
//   for (let i = n - 1; i >= 0; i--) {
//     if (dp[i] == tmp) {
//       index.push(i);
//       tmp--;
//     }
//   }
//   index.reverse();
//   index = index.map((x) => arr[x]);
//   console.log(index, max);
// }
// LIS([10, 22, 9, 33, 21, 50, 41, 60]);

// class Pair {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }

// function MCL(arr) {
//   const n = arr.length;
//   let dp = Array(n).fill(1);
//   for (i = 1; i < n; i++)
//     for (j = 0; j < i; j++)
//       if (arr[i].a > arr[j].b && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
//   const max = Math.max(...dp);
//   let index = [];
//   let tmp = max;
//   for (let i = n - 1; i >= 0; i--) {
//     if (dp[i] == tmp) {
//       index.push(i);
//       tmp--;
//     }
//   }
//   index.reverse();
//   index = index.map((x) => arr[x]);
//   console.log(index, max);
// }

// MCL([new Pair(5, 24), new Pair(39, 60), new Pair(27, 40), new Pair(50, 90)]);

// function print(list, n, arr, rev) {
//   const tempList = rev ? list.slice().reverse() : list.slice();
//   const max = Math.max(...tempList);
//   let index = [];
//   let tmp = max;
//   for (let i = n - 1; i >= 0; i--) {
//     if (tempList[i] == tmp) {
//       index.push(i);
//       tmp--;
//     }
//   }
//   index.reverse();
//   index = index.map((x) => arr[x]);
//   console.log("lookup");
//   console.log(list);
//   // console.log("subsequence")
//   // console.log(index)
//   // console.log(index.length)
//   console.log("######################");
// }

// function LBS(arr) {
//   const n = arr.length
//   let lis = Array(n).fill(1)
//   for (i = 1; i < n; i++)
//       for (j = 0; j < i; j++)
//           if (arr[i] > arr[j] && lis[i] < lis[j] + 1)
//               lis[i] = lis[j] + 1
//   let lds = Array(n).fill(1)
//   for (i = n - 1; i >= 0; i--)
//       for (j = n - 1; j > i; j--)
//           if (arr[i] > arr[j] && lds[i] < lds[j] + 1)
//               lds[i] = lds[j] + 1
//   console.log("lis")
//   print(lis, n, arr)
//   console.log("lds")
//   print(lds, n, arr, true)
//   let maxVal = arr[0],
//       inx = 0;
//   for (let i = 0; i < n; i++) {
//       if (maxVal < lis[i] + lds[i] - 1) {
//           maxVal = lis[i] + lds[i] - 1;
//           inx = i;
//       }
//   }
//   let ct1 = lis[inx];
//   let res = [];
//   for (let i = inx; i >= 0 && ct1 > 0; i--) {
//       if (lis[i] == ct1) {
//           res.push(arr[i]);
//           ct1--;
//       }
//   }
//   res.reverse();
//   let ct2 = lds[inx] - 1;
//   for (let i = inx; i < n && ct2 > 0; i++) {
//       if (lds[i] == ct2) {
//           res.push(arr[i]);
//           ct2--;
//       }
//   }
//   console.log(res)
//   console.log(res.length)
// }
// // LBS([80, 60, 30, 40, 20, 10])
// LBS([1, 11, 2, 10, 4, 5, 2, 1])

// function lcis(arr1, arr2) {
//   let m = arr1.length;
//   let n = arr2.length;
//   let dp = Array(n).fill(0);
//   let parent = Array(n).fill(0);

//   for (let i = 0; i < m; i++) {
//     let current = 0,
//       last = -1;
//     for (let j = 0; j < n; j++) {
//       if (arr1[i] == arr2[j] && current + 1 > dp[j]) {
//         dp[j] = current + 1;
//         parent[j] = last;
//       }

//       if (arr1[i] > arr2[j] && dp[j] > current) {
//         current = dp[j];
//         last = j;
//       }
//     }
//   }

//   const max = Math.max(...dp);
//   let index = dp.indexOf(max);
//   let result = Array(max).fill(null),
//     i = 0;
//   while (index != -1) {
//     result[i] = arr2[index];
//     index = parent[index];
//     i += 1;
//   }
//   console.log("lookup table");
//   console.log(dp);
//   result = result.reverse();
//   console.log(typeof arr1 !== "string" ? result : result.join(""));
//   return max;
// }

// const arr1 = [3, 4, 9, 1];
// const arr2 = [5, 3, 8, 9, 10, 2, 1];
// // 3, 9
// const arr3 = "b3sak";
// const arr4 = "baejkl";
// // bk
// console.log(lcis(arr1, arr2));
// console.log("##############");
// console.log(lcis(arr3, arr4));

// var longestPalindrome = function (s) {
//   let n = s.length;
//   let dp = Array.from(Array(n), () => Array(n).fill(false));
//   let maxLength = 1;
//   for (let i = 0; i < n; ++i) dp[i][i] = true;
//   let start = 0;
//   for (let i = 0; i < n - 1; ++i) {
//     if (s[i] == s[i + 1]) {
//       dp[i][i + 1] = true;
//       start = i;
//       maxLength = 2;
//     }
//   }
//   for (let k = 3; k <= n; ++k) {
//     for (let i = 0; i < n - k + 1; ++i) {
//       let j = i + k - 1;
//       if (dp[i + 1][j - 1] && s[i] == s[j]) {
//         dp[i][j] = true;
//         if (k > maxLength) {
//           start = i;
//           maxLength = k;
//         }
//       }
//     }
//   }
//   return s.substring(start, start + maxLength);
// };

// console.log(longestPalindrome("babad"));

// function lcsubstring(s1, s2) {
//   const m = s1.length;
//   const n = s2.length;
//   let row = 0;
//   let col = 0;
//   let len = 0;
//   const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
//   let result = 0;
//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++) {
//       if (i == 0 || j == 0) dp[i][j] = 0;
//       else if (s1[i - 1] == s2[j - 1]) {
//         dp[i][j] = 1 + dp[i - 1][j - 1];
//         result = Math.max(result, dp[i][j]);
//         if (len < dp[i][j]) {
//           len = dp[i][j];
//           row = i;
//           col = j;
//         }
//       } else dp[i][j] = 0;
//     }
//   }
//   if (len == 0) {
//     console.log("no substring present");
//     return 0;
//   }
//   let resultStr = "";
//   while (dp[row][col] != 0) {
//     resultStr = s1[row - 1] + resultStr; // or Y[col-1]
//     --len;
//     --row;
//     --col;
//   }
//   console.log(resultStr);
//   return result;
// }
// console.log(lcsubstring("sai", "sai9"));

function lengthOfLongestSubstring(s) {
  const n = s.length;
  let maxL = 0;
  for (let i = 0; i < n; i++) {
    const visited = Array(256);
    for (let j = i; j < n; j++) {
      if (visited[s.charCodeAt(j)]) break;
      maxL = Math.max(maxL, j - i + 1);
      visited[s.charCodeAt(j)] = true;
    }
  }
  return maxL;
}

console.log(lengthOfLongestSubstring("abcbbcab"));
