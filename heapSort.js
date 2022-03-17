// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function removeRoot(heap) {
  // TODO: 여기에 코드를 작성합니다.
  if (heap.length === 0) return null;
  swap(0, heap.length - 1, heap);
  const pop = heap.pop();
  const arrangeFromRoot = (heap, idx) => {
    if (idx > heap.length - 1) return;
    let leftChild = 2 * idx + 1;
    let rightChild = 2 * idx + 2;
    let minIdx = idx;

    if (leftChild < heap.length && heap[minIdx] > heap[leftChild]) {
      minIdx = leftChild;
    }
    if (rightChild < heap.length && heap[minIdx] > heap[rightChild]) {
      minIdx = rightChild;
    }

    if (minIdx === idx) return;
    swap(idx, minIdx, heap);
    arrangeFromRoot(heap, minIdx);
  };

  arrangeFromRoot(heap, 0);

  return pop;
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
  if (heap[idx] < heap[parentIdx]) {
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

const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  // TODO: 여기에 코드를 작성합니다.
  let root;
  let result = [];
  while ((root = removeRoot(minHeap)) !== null) {
    result.push(root);
  }

  return result;
};

let output = heapSort([5, 4, 3, 2, 1]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = heapSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]

output = heapSort([4, 10, 3, 5, 1]);
console.log(output); // --> [1, 3, 4, 5, 10]
