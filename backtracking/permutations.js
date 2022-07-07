function dfs(nums, result, curr = [], visited = {}) {
  if (nums.length == curr.length) {
    result.push(curr.slice());
    return;
  }
  for (let i of nums) {
    if (!visited[i]) {
      visited[i] = true;
      curr.push(i);
      dfs(nums, result, curr, visited);
      visited[i] = false;
      curr.pop();
    }
  }
}

const result = [];
const nums = [1, 2, 3];
dfs(nums, result);
console.log(result);
