/**
 * @dev uglyNumber란 소인수 분해를 했을 때 2, 3, 5로만 이루어진 숫자를 말한다 1부터 시작.
 * @dev uglyNumber에 2, 3, 5를 곱한 값도 uglyNumber이므로 이전 uglyNumber들에서 2, 3, 5를 곱한 값중에 가장 작은 게 그 다음 uglyNumber
 */
// Iteration
// (0, 0, 0)[1];
// (1, 0, 0)[(1, 2)];
// (1, 1, 0)[(1, 2, 3)];
// (2, 1, 0)[(1, 2, 3, 4)];
// (2, 1, 1)[(1, 2, 3, 4, 5)];
// (3, 2, 1)[(1, 2, 3, 4, 5, 6)];
// (4, 2, 1)[(1, 2, 3, 4, 5, 6, 8)];

const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let uglyArray = Array(n).fill(0);
  uglyArray[0] = 1;
  let [i2, i3, i5] = [0, 0, 0];
  let next_multiple_of_2 = uglyArray[i2] * 2;
  let next_multiple_of_3 = uglyArray[i3] * 3;
  let next_multiple_of_5 = uglyArray[i5] * 5;
  let next_ugly_no = uglyArray[0];

  for (let i = 1; i < n; i++) {
    next_ugly_no = Math.min(
      next_multiple_of_2,
      next_multiple_of_3,
      next_multiple_of_5
    );

    uglyArray[i] = next_ugly_no;

    if (next_ugly_no === next_multiple_of_2) {
      i2++;
      next_multiple_of_2 = uglyArray[i2] * 2;
    }
    if (next_ugly_no === next_multiple_of_3) {
      i3++;
      next_multiple_of_3 = uglyArray[i3] * 3;
    }
    if (next_ugly_no === next_multiple_of_5) {
      i5++;
      next_multiple_of_5 = uglyArray[i5] * 5;
    }
  }

  return next_ugly_no;
};

let result = uglyNumbers(1);
console.log(result); // --> 1

result = uglyNumbers(3);
console.log(result); // --> 3

result = uglyNumbers(150);
console.log(result);
