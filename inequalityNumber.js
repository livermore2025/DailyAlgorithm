const getMax = (arr) => {
  let idx;
  let prevIdx = 0;
  let curMax = 9;
  let result = [];
  while ((idx = arr.slice(prevIdx).findIndex((elem) => elem === ">")) !== -1) {
    idx = prevIdx + idx;
    for (let i = prevIdx; i <= idx; i++) {
      result.push(curMax - (idx - prevIdx) + (i - prevIdx)); // curMax-idx+i
    }
    curMax = curMax - (idx - prevIdx) - 1;
    prevIdx = idx + 1;
  }
  for (let i = prevIdx; i <= arr.length; i++) {
    result.push(curMax - (arr.length - prevIdx) + (i - prevIdx));
  }
  return result;
};

const getMin = (arr) => {
  let idx;
  let prevIdx = 0;
  let curMin = 0;
  let result = [];
  while ((idx = arr.slice(prevIdx).findIndex((elem) => elem === "<")) !== -1) {
    idx = prevIdx + idx;
    for (let i = prevIdx; i <= idx; i++) {
      result.push(curMin + (idx - prevIdx) - (i - prevIdx));
    }
    curMin = curMin + (idx - prevIdx) + 1;
    prevIdx = idx + 1;
  }
  for (let i = prevIdx; i <= arr.length; i++) {
    result.push(curMin + (arr.length - prevIdx) - (i - prevIdx));
  }
  return result;
};

const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  const signArr = signs.split(" ");
  const max = parseInt(getMax(signArr).join(""));
  const min = parseInt(getMin(signArr).join(""));
  return max - min;
};
// 큰 수
// 1.첫 >의 왼쪽이나, 없다면 마지막이 9이다.
// 2. 첫 >의 왼쪽은 모두 < 일것이므로 순서대로 큰걸 넣어준다.
// 3. 그다음 >을 골라서 9다음으로 큰수를 넣고 2번을 해준다.

// 작은 수
// 첫 <의 왼쪽, 없다면 마지막이 0이다.
// 첫 <의 왼쪽은 모두 >일 것이므로 작은 거 순서대로 넣어준다.
// 그 다음 <를 골라서 0다음 작은 수를 넣고 2번을 해준다.

let output = inequalityNumber("<");
console.log(output); // --> 88 (89 - 01)

output = inequalityNumber("< >");
console.log(output); // --> 876 (897 - 021)

output = inequalityNumber("> < >");
console.log(output); // --> 8,754 (9,786 - 1,032)

output = inequalityNumber("< < > <");
console.log(output);
