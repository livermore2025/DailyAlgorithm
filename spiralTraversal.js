// 2차원 배열을 나선형으로 순회한다.
const spiralTraversal = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.
  let start = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let resultString = "";

  while (m > 0 && n > 0) {
    // edge case
    if (m === 1 && n === 1) {
      resultString += matrix[start][start];
      break;
    }
    if (m === 1) {
      for (let i = start; i <= n + start - 1; i++) {
        resultString += matrix[start][i];
      }
      break;
    }
    if (n === 1) {
      for (let i = start; i <= m + start - 1; i++) {
        resultString += matrix[i][start];
      }
      break;
    }

    // loop
    for (let i = start; i < n + start - 1; i++) {
      resultString += matrix[start][i];
    }
    for (let i = start; i < m + start - 1; i++) {
      resultString += matrix[i][n + start - 1];
    }
    for (let i = n + start - 1; i > start; i--) {
      resultString += matrix[m + start - 1][i];
    }
    for (let i = m + start - 1; i > start; i--) {
      resultString += matrix[i][start];
    }

    start = start + 1;
    m = m - 2;
    n = n - 2;
  }

  return resultString;
};

let matrix = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'

// edge case
matrix = [
  ["a", "b", "c", "d", "e", "f", "g", "h"],
  ["i", "j", "k", "l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u", "v", "w", "x"],
  ["y", "z", "a", "b", "c", "d", "e", "f"],
  ["g", "h", "i", "j", "k", "l", "m", "n"],
];
output = spiralTraversal(matrix);
console.log(output);

matrix = [
  ["T", "y", "r", "i"],
  ["i", "s", "t", "o"],
  ["n", "r", "e", "n"],
  ["n", "a", "L", " "],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'

// (0,0)에서 시작한다. matrix의 길이를 구한다(row, column).
// (1,1)에서 시작하고 길이는 l' = l - 2, l'이 0보다 같거나 작으면 루프를 멈춰야 한다.

// const spiralTraversal = function (matrix) {
//   // 각 방향마다 row와 col의 변화를 저장
//   const RIGHT = [0, 1];
//   const DOWN = [1, 0];
//   const LEFT = [0, -1];
//   const UP = [-1, 0];
//   // 각 방향을 위한 lookup table
//   const MOVES = [RIGHT, DOWN, LEFT, UP];
//   const M = matrix.length;
//   const N = matrix[0].length;
//   const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

//   let cnt = 0;
//   let row = 0,
//     col = -1;
//   let direction = 0;
//   let result = '';
//   while (cnt < M * N) {
//     const move = MOVES[direction];
//     const [rd, cd] = move;

//     row = row + rd;
//     col = col + cd;
//     while (isValid(row, col) && matrix[row][col] !== false) {
//       result = result + matrix[row][col];
//       // 한 요소를 두 번 접근하지 않게 하기 위해서, 접근된 요소를 false로 변경한다.
//       matrix[row][col] = false;
//       row = row + rd;
//       col = col + cd;
//       cnt++;
//     }
//     // row, col 이 행렬의 범위를 벗어났기 때문에,
//     // 진행된 방향의 반대로 한 칸 이동한다.
//     row = row - rd;
//     col = col - cd;

//     // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
//     direction = (direction + 1) % 4;
//   }
//   return result;
// };
