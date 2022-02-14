const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let pivot = Math.floor(str.length / 2);
  let left = 0,
    right;

  if (str.length % 2 === 1) {
    right = pivot + 1;
  } else {
    right = pivot;
  }
  while (right < str.length) {
    if (str[left] === str[right]) {
      console.log(str[left], str[right]);
      left++;
      right++;
    } else {
      if (left === 0) right++;
      left = 0;
    }
  }
  return left;
};
let output = LPS("abbbabbabb");
console.log(output); // --> 2
