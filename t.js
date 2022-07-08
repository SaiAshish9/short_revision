const arr = [9, 30, 64, 47, 14, 40, 57, 26];
const n = arr.length;
const result = Array(n).fill(-1);

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (arr[j] > arr[i]) {
      result[i] = j + 1;
      break;
    }
  }
}

console.log(result);

//  n^2
