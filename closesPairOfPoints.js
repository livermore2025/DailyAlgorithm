// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiff = p2[0] - p1[0];
  const xDiff = p2[1] - p1[1];
  let result = Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
  result = Math.round(result * 100);
  return result;
}

// divide and conquer
const closestPairOfPoints = function (points) {
  // TODO: 여기에 코드를 작성합니다.
  return closest(points, points.length);
};

const compareX = (p1, p2) => {
  return p1[0] - p2[0];
};

const compareY = (p1, p2) => {
  return p1[1] - p2[1];
};

const bruteForce = (points, n) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (calculateDistance(points[i], points[j]) < min)
        min = calculateDistance(points[i], points[j]);
    }
  }
  return min;
};

const stripClosest = (strip, size, d) => {
  let min = d;
  strip.sort(compareY);
  for (let i = 0; i < size; i++) {
    for (
      let j = i + 1;
      j < size && (strip[j][1] - strip[i][1]) * 100 < min;
      j++
    ) {
      if (calculateDistance(strip[i], strip[j]) < min) {
        min = calculateDistance(strip[i], strip[j]);
      }
    }
  }
  return min;
};

const closestUtil = (points, n) => {
  if (n <= 3) return bruteForce(points, n);

  let mid = Math.floor(n / 2);
  let midPoints = points[mid];

  let dl = closestUtil(points.slice(0, mid), mid);
  let dr = closestUtil(points.slice(mid), n - mid);

  let d = Math.min(dl, dr);

  const strip = new Array(n);
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (Math.abs(points[i][0] - midPoints[0]) * 100 < d) {
      strip[j] = points[i];
      j++;
    }
  }
  return Math.min(d, stripClosest(strip, j, d));
};

const closest = (points, n) => {
  const sortedByXPoints = points.sort(compareX);
  return closestUtil(sortedByXPoints, n);
};

let points = [
  [0, 0],
  [2, 2],
  [1, 3],
];
// console.log(calculateDistance([0, 0], [0, 1]));

let output = closestPairOfPoints(points);
console.log(output); // --> 141 ([1, 3], [2, 2])
/*
  3 |  x
  2 |     x
  1 |       
  0 | x 
  ------------
      0 1 2 3 
  */

points = [
  [0, 0],
  [0, 1],
  [0, 3],
  [0, 5],
];
output = closestPairOfPoints(points);
console.log(output); // --> 100 ([0, 0], [0, 1])
/*
  5 | x
  4 | 
  3 | x
  2 |     
  1 | x     
  0 | x 
  ------------
      0 1 2 3 
  */

points = [
  [1, 0],
  [4, 0],
  [5, 0],
  [7, 0],
];
output = closestPairOfPoints(points);
console.log(output);
