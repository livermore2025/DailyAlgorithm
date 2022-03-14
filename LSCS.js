// curSum이 과 maxSum을 비교한다. maxSum보다크면 바꾼다.
// curSum이 0보다 작았으면 0으로 다시 놓는다.

const LSCS = function (arr) {
  //TODO: 여기에 코드를 작성합니다.
  let curSum = arr[0] < 0 ? 0 : arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curSum = curSum + arr[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
    if (curSum < 0) {
      curSum = 0;
    }
  }
  return maxSum;
};

let output = LSCS([1, 2, 3]);
console.log(output); // --> 6

output = LSCS([1, 2, 3, -4]);
console.log(output); // --> 6 ([1, 2, 3])

output = LSCS([1, 2, 3, -4, 5]);
console.log(output); // --> 7 ([1, 2, 3, -4, 5])

output = LSCS([10, -11, 11]);
console.log(output); // --> 11 ([11])

// 1 curSum = 1, maxSum = 1
// 2 curSum = 3, maxSum = 3
// 3 curSum = 6, maxSum = 6
// -4 curSum = 2 maxSum = 6

// -1, -2, -3, 6

// -1, curSum = -1 -> 0 maxSum = -1
// -2, curSum = -2  -> 0 maxSum = -1
// -3  curSum = -3 -> 0 maxSum = -1
// 6   curSum =  6 maxSum = 6
// -2 curSum = 4 maxSum = 6

// 10 curSum = 10 maxSum = 10
// -11 curSum = -1 ->0 maxSum = 10
// 11 curSum = 1 maxSum = 10;
