const inequalityNumber = function (signs) {
  // TODO: 여기에 코드를 작성합니다.
  const signArr = signs.split("");
  console.log(signArr);
};
// 큰 수
// 1.첫 >의 왼쪽이나, 없다면 마지막이 9이다.
// 첫 >의 왼쪽은 모두 < 일것이므로 순서대로 큰걸 넣어준다.
// 첫 >의 오른쪽은 >가 나오면 -1, >가 나오면 0을 넣어준다.
// 0은 9부터 차례대로 작은수, -1은 남은 수 부터 차례대로 작은수를 넣는다.

// 작은 수
// 첫 <의 왼쪽, 없다면 마지막이 0이다.
// 첫 <의 왼쪽은 모두 >일 것이므로 작은 거 순서대로 넣어준다.
// //첫 >의 오른쪽은 >가 나오면 -1, >가 나오면 0을 넣어준다.
// //-1은 0부터 차례대로 큰 수, 0은 남은 수 부터 차례대로 큰 수를 넣는다.

let output = inequalityNumber("<");
// console.log(output); // --> 88 (89 - 01)

output = inequalityNumber("< >");
// console.log(output); // --> 876 (897 - 021)

// output = inequalityNumber("> < >");
// console.log(output); // --> 8,754 (9,786 - 1,032)

// output = inequalityNumber("< < > <");
        78956  02314/01324
