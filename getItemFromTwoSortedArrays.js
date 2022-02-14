const binarySearch = (arr, k) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > k) {
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const getItemFromTwoSortedArrays = (arr1, arr2, k) => {
  // TODO: 여기에 코드를 작성합니다.
};

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(arr, 5));
