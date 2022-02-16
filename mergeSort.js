const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 1) return arr;

  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, end));

  let leftIdx = 0;
  let rightIdx = 0;
  let result = [];
  while (leftIdx <= left.length && rightIdx <= right.length) {
    if (leftIdx === left.length) {
      result = [...result, ...right.slice(rightIdx)];
      leftIdx++;
    } else if (rightIdx === right.length) {
      result = [...result, ...left.slice(leftIdx)];
      rightIdx++;
    } else {
      if (left[leftIdx] < right[rightIdx]) {
        result.push(left[leftIdx]);
        leftIdx++;
      } else {
        result.push(right[rightIdx]);
        rightIdx++;
      }
    }
  }

  return result;
};

// 탈출 조건 arr.length가 1일 때.

console.log(mergeSort([4, 7, 4, 3, 9, 1, 2]));
