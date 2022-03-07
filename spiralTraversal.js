const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  let m, n;
  m = matrix.length;
  n = matrix[0].length;
  let start = 0;
  let result = "";
  while (m > 0 && n > 0) {
    if (m === 1 && n === 1) {
      result += matrix[start][start];
      break;
    }
    if (m === 1) {
      for (let i = start; i <= n + start - 1; i++) {
        result += matrix[start][i];
      }
      break;
    }
    if (n === 1) {
      for (let i = start; i <= m + start - 1; i++) {
        result += matrix[i][start];
      }
      break;
    }
    for (let i = start; i < n - 1 + start; i++) {
      // start:0; i < 4-1 -> i가2
      result += matrix[start][i]; // start:1; i < 2-1+start
    }
    for (let i = start; i < m - 1 + start; i++) {
      result += matrix[i][n - 1 + start];
    }
    for (let i = n - 1 + start; i > 0 + start; i--) {
      result += matrix[m - 1 + start][i];
    }
    for (let i = m - 1 + start; i > 0 + start; i--) {
      result += matrix[i][start];
    }
    m -= 2;
    n -= 2;
    start += 1;
  }
  return result;
};
let matrix = [
  ["T", "y", "r", "i"],
  ["i", "s", "t", "o"],
  ["n", "r", "e", "n"],
  ["n", "a", "L", " "],
];
let output = spiralTraversal(matrix);
console.log(output); // -->
