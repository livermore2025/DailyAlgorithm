const findCorrectNumber = (arr1, arr2, arr1left, arr2left) => {
  if (arr2left < 1) {
    return true;
  }
  if (arr1[arr1left - 1] === arr2[arr2left - 1]) {
    return true;
  }
  if (arr1left === arr1.length) {
    return arr1[arr1left - 1] <= arr2[arr2left];
  }
  if (arr2left === arr2.length) {
    return arr2[arr2left - 1] <= arr1[arr1left];
  }

  return (
    arr1[arr1left - 1] <= arr2[arr2left] && arr2[arr2left - 1] <= arr1[arr1left]
  );
};

// codestates reference
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
    let cnt = Math.ceil(k / 2);
    let leftStep = cnt,
      rightStep = cnt;

    // 엣지 케이스
    // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    // 엣지 케이스
    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

    // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};

// const getItemFromTwoSortedArrays = (arr1, arr2, k) => {
//   if (k === 1) {
//     return Math.min(arr1[0], arr2[0]);
//   }
//   if (arr1.length + arr2.length === k) {
//     return Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);
//   }
//   if (k <= arr2.length && arr2[k - 1] < arr1[0]) {
//     let tmp = [...arr1];
//     arr1 = arr2;
//     arr2 = tmp;
//   }

//   let arr1left = Math.floor(k / 2);
//   let arr2left = k - arr1left;
//   while (!findCorrectNumber(arr1, arr2, arr1left, arr2left)) {
//     if (arr1[arr1left - 1] > arr2[arr2left - 1]) {
//       arr1left--;
//       arr2left++;
//     } else {
//       arr1left++;
//       arr2left--;
//     }
//   }

//   return arr2left === 0
//     ? arr1[arr1left - 1]
//     : Math.max(arr1[arr1left - 1], arr2[arr2left - 1]);
// };

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 5, 9];
let result = getItemFromTwoSortedArrays(arr1, arr2, 6);
console.log(result); // --> 8

arr1 = [1, 1, 2, 10];
arr2 = [3, 3];
result = getItemFromTwoSortedArrays(arr1, arr2, 4);
console.log(result); // --> 3

result = getItemFromTwoSortedArrays(arr1, arr2, 7);
console.log(result); // -->

// https://www.baeldung.com/java-kth-smallest-element-in-sorted-arrays