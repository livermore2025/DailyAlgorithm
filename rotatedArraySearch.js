const rotateMatrix = function (matrix, k = 1) {
  // ES6 문법, k의 초기값을 1로 설정
  if (matrix.length === 0) return matrix || []; // 빈 배열을 받았을 때

  while (k > 4) {
    // 360도는 90도의 4의 배수
    k -= 4;
  }

  const m = matrix.length; // 열
  const n = matrix[0].length; // 행  행렬과 반대

  const res = [];
  for (let row = 0; row < n; row++) {
    // 2차원 배열 새로 만듬
    res.push(Array(m));
  }

  for (let row = 0; row < m; row++) {
    // row < 3
    for (let col = 0; col < n; col++) {
      // col < 4
      res[col][m - 1 - row] = matrix[row][col];
      // res[0][2] = matrix[0][0]
      // res[1][2] = matrix[0][1]
      // res[2][2] = matrix[0][2]
      // res[3][2] = matrix[0][3]
      // res[0][1] = matrix[1][0]
      // res[1][1] = matrix[1][1]
      // res[2][1] = matrix[1][2]
      // res[3][1] = matrix[1][3]
      // 귀납법
    }
  }

  if (k === 1) return res;
  else return rotateMatrix(res, k - 1); // 간단 재귀
  // 확실시 하기위해 else 추가
};

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// [
// [9,5,1],
// [10,6,2],
// [11,7,3],
// [12,8,4]
// ]
