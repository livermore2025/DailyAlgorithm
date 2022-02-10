const swap = (arr, front, back) => {
  const tmp = arr[front];
  arr[front] = arr[back];
  arr[back] = tmp;
};

const partition = (arr, start, end, cb) => {
  const pivot = arr[Math.floor((start + end) / 2)];
  while (start <= end) {
    while (cb(arr[start]) < cb(pivot)) start = start + 1;
    while (cb(arr[end]) > cb(pivot)) end = end - 1;

    if (start <= end) {
      swap(arr, start, end);
      start = start + 1;
      end = end - 1;
    }
  }

  return start;
};

const quickSortResult = (arr, start, end, cb) => {
  if (start >= end) return;
  let borderIdx = partition(arr, start, end, cb);
  quickSortResult(arr, start, borderIdx - 1, cb);
  quickSortResult(arr, borderIdx, end, cb);

  return arr;
};

const quickSort = function (arr, cb = (a) => a) {
  // TODO: 여기에 코드를 작성합니다.
  return quickSortResult(arr, 0, arr.length - 1, cb);
};
