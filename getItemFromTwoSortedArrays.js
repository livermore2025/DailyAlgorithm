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

const arr = [1, 2, 5, 8, 9, 10, 21, 23];
console.log(binarySearch(arr, 7));

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

// 서로 길이가 다른 자연수 배열의 전체 요소 중 k번째 요소를 리턴.
