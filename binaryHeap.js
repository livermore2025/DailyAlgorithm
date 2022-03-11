/**
 * binary heap은 노드의 값이 특정한 수서를 가지고 있는 Complete Binary Tree이다.
 * Complete Binary Tree는 bt의 모든 레벨이 노드로 가득 채워져있어야하고 마지막 레벨은 왼쪽부터 차례로 채워진다.
 * 부모 노드의 값이 자식 노드의 값보다 큰 경우를 최대 힙, 반대의 경우를 최소 힙이라고 한다.
 */

// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

const getParentIdx = (idx) => {
  return Math.floor((idx - 1) / 2);
};

const insert = (heap, item) => {
  let len = heap.push(item);
  arrange(heap, len - 1);
  return heap;
};

const arrange = (heap, idx) => {
  if (idx === 0) return;
  const parentIdx = getParentIdx(idx);
  if (heap[idx] > heap[parentIdx]) {
    swap(idx, parentIdx, heap);
    arrange(heap, parentIdx);
  }
};

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

let output = binaryHeap([5, 4, 3, 2, 1]);
console.log(output); // --> [5, 4, 3, 2, 1]

output = binaryHeap([3, 1, 21]);
console.log(output); // --> [21, 1, 3]

output = binaryHeap([4, 10, 3, 5, 1]);
console.log(output); // --> [10, 5, 3, 4, 1]
