const uglyNumbers = function (n) {
  const uglyNum = [1];
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    const nextMultipleOf2 = uglyNum[idx2] * 2;
    const nextMultipleOf3 = uglyNum[idx3] * 3;
    const nextMultipleOf5 = uglyNum[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    uglyNum.push(nextUglyNum);

    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return uglyNum[n - 1];
};

let result = uglyNumbers(4);
console.log(result); // --> 3
