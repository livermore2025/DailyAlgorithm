const decompression = function (image) {
  // TODO: 여기에 코드를 작성합니다.
  let len = image.length;
  let std = image[0][0];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (image[i][j] !== std) {
        let part1 = new Array(len / 2);
        let part2 = new Array(len / 2);
        let part3 = new Array(len / 2);
        let part4 = new Array(len / 2);
        for (let k = 0; k < len / 2; k++) {
          part1[k] = new Array(len / 2);
          part2[k] = new Array(len / 2);
          part3[k] = new Array(len / 2);
          part4[k] = new Array(len / 2);
        }
        for (let l = 0; l < len / 2; l++) {
          for (let m = 0; m < len / 2; m++) {
            part1[l][m] = image[l][m];
            part2[l][m] = image[l][m + len / 2];
            part3[l][m] = image[l + len / 2][m];
            part4[l][m] = image[l + len / 2][m + len / 2];
          }
        }
        return (
          "X" +
          decompression(part1) +
          decompression(part2) +
          decompression(part3) +
          decompression(part4)
        );
      }
    }
  }

  if (std === 1) {
    return "1";
  } else {
    return "0";
  }
};

let image = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0],
];
let result = decompression(image);
console.log(result); // --> 'XX100110X1100​'

// image = [
//   [0, 0, 0, 0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0],
//   [0, 0, 0, 0, 1, 1, 1, 0],
//   [1, 1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0, 1, 1],
//   [1, 1, 1, 1, 0, 1, 1, 1],
// ];
// result = decompression(image);
// console.log(result); // --> 'X0X101X10101X00X10011'
