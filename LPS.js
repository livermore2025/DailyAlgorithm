const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let pivot = Math.floor(str.length / 2);
  let left = 0,
    right,
    strLength;

  if (str.length % 2 === 1) {
    right = pivot + 1;
  } else {
    right = pivot;
  }
  while (left < pivot) {
    if (str[left] === str[right]) {
      left++;
      right++;
    } else {
      left = 0;
      right++;
    }
  }
  return left;
};
let output = LPS("abcab");
console.log(output); // --> 2
