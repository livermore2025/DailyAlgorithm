// DP
// Longest Increasing Subsequence
// O(N^2)

/**
 * @var len index까지의 LIS값을 기록
 */
const LIS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  const len = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    len[i] = 1;
    for (let j = 0; j < i; j++) {
      // 기준점 i에서의 값보다 j가 작을 때
      // 1. j가 오름차순으로 오고 있을 경우 2. 이전의 값보다는 작아서 오름차순이 성립하지 않는경우가 있을 것이다.
      // 1의 경우에는 j에서의 LIS에 1을 단순히 더하면 될 것이고 2의 경우에는 값을 유지한다
      if (arr[j] < arr[i]) {
        len[i] = Math.max(len[i], len[j] + 1);
      }
    }
  }
  return Math.max(...len);
};

let output = LIS([3, 2]);
console.log(output); // --> 1 (3 or 2)

output = LIS([3, 10, 2, 1, 20]);
console.log(output); // --> 3 (3, 10, 20)

// [3, 10, 2, 1, 10]
// len [1, 1, 0, 0, 0]
// i 1 , j 0 ~ i-1
// len[1, 2, 1, 0, 0]
// i 2 j 0 ~ i - 1
// i 2 j 0
// len [1, 2, 1, 1, 1]
// i 4 j 0 ~ i - 1
