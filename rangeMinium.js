let segmentTree = {};

/**
 * @param {시작 노드의 번호} node
 * @param {전체 배열 시작} index start
 * @param {전체 배열 마지막 index} end
 * @param {구하려는 구간의 시작 index} left
 * @param {구하려는 구간 마지막 index} right
 * @returns
 */
const query = (node, start, end, left, right) => {
  if (end < left || right < start) {
    return Number.MAX_SAFE_INTEGER;
  }
  if (left <= start && end <= right) {
    return segmentTree[node];
  }
  let mid = Math.floor((start + end) / 2);
  return Math.min(
    query(node * 2, start, mid, left, right),
    query(node * 2 + 1, mid + 1, end, left, right)
  );
};

const rangeMinimum = function (arr, ranges) {
  // TODO: 여기에 코드를 작성합니다.
  const segmentTreeInit = (start, end, node) => {
    if (start === end) {
      segmentTree[node] = arr[start];
      return segmentTree[node];
    }
    let mid = Math.floor((start + end) / 2);
    segmentTree[node] = Math.min(
      segmentTreeInit(start, mid, node * 2),
      segmentTreeInit(mid + 1, end, node * 2 + 1)
    );
    return segmentTree[node];
  };
  segmentTreeInit(0, arr.length - 1, 1);
  return ranges.map((range) => {
    return query(1, 0, arr.length - 1, range[0], range[1]);
  });
};

const arr = [1, 3, 2, 7, 9, 11];
const mins = rangeMinimum(arr, [
  [1, 4],
  [0, 3],
]);
console.log(mins); // --> [2, 1]
