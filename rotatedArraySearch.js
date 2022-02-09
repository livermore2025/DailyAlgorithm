const rotatedArraySearch = (rotated, target) => {
  let left = 0;
  let right = rotated.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (rotated[mid] < target && rotated[right] < target) {
      right = mid - 1;
    } else if (rotated[mid] < target && rotated[right] >= target) {
      left = mid + 1;
    } else if (rotated[mid] > target && rotated[left] > target) {
      left = mid + 1;
    } else if (rotated[mid] > target && rotated[left] <= target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

let output = rotatedArraySearch([4, 5, 6, 7, 8, "9", 10, 0, 1, 2, 3], 2);
console.log(output); // --> 5

// 1. target이 mid보다 크고, 맨 오른쪽 값 보다 크다. 이러면 왼쪽에 있음
// 2. target이 mid보다 크고, 맨 오른쪽 값 보다 같거나 작다. 이러면 오른쪽에 있음

// 3. target이 mid보다 작고, 맨 왼쪽 값 보다 작다. 이러면 오른쪽에 있음
// 4. target이 mid보다 작고, 맨 왼쪽 값 보다 같거나 크다. 이러면 왼쪽에 있음
