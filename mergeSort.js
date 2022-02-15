const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let newArray = [];
  if (arr.length === 1) return arr;

  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  // 1. arr.length가 1일 때 까지 나눈다.
  // 2. arr.length가 1이면, left right를 비교한다.
  // 3. 비교해서 작은 순으로 newArray에 넣는다
  //   console.log("arr : ", arr);
  //   console.log("left : ", left);
  //   console.log("right : ", right);
  while (left.length > 0 && right.length > 0) {
    if (left.length === 0) {
      newArray = newArray.concat(right);
    } else if (right.length === 0) {
      newArray = newArray.concat(left);
    } else {
      left[0] <= right[0]
        ? newArray.push(left.shift())
        : newArray.push(right.shift());
    }
  }
  return newArray;
};

console.log(mergeSort([4, 7, 4, 3, 9, 1, 2]));
