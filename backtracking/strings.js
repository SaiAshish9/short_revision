function permuteBacktrack(str, answer) {
  if (str.length == 0) {
    console.log(answer);
    return;
  }
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let left = str.substring(0, i);
    let right = str.substring(i + 1);
    let rest = left + right;
    permuteBacktrack(rest, answer + ch);
  }
}

permuteBacktrack("abc", "");
