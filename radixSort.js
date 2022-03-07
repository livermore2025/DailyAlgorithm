function getMax(arr) {
  return arr.reduce((max, item) => {
    if (item > max) return item;
    return max;
  }, 0);
}
function countingSort(arr, base) {
  const N = arr.length;
  const output = Array(N).fill(0);
  const count = Array(10).fill(0);
  arr.forEach((item) => {
    const idx = Math.floor(item / base) % 10;
    count[idx]++;
  });
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / base) % 10;
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }
  return output;
}
function radixSort(arr) {
  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item >= 0) right.push(item);
    else left.push(item * -1);
  });
  let max = getMax(left);
  let base = 1;
  while (parseInt(max / base) > 0) {
    left = countingSort(left, base);
    base *= 10;
  }
  max = getMax(right);
  base = 1;
  while (parseInt(max / base) > 0) {
    right = countingSort(right, base);
    base *= 10;
  }
  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
}
