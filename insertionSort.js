const insertionSort = function (arr, cb = (a) => a) {
  // 삽입정렬
  let tmp = 0;
  for (let i = 0; i < arr.length; i++) {
    // i가 0일 때 j가 1
    for (let j = i - 1; j >= 0; j--) {
      if (cb(arr[j]) > cb(arr[j + 1])) {
        // 콜백 적용한채 비교
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp; // 버블소트와 동일
      }
    }
  }
  return arr;
};
