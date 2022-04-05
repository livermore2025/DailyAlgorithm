// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.floor(dist * 100);
}

const TSP = function (places) {
  // TODO: 여기에 코드를 작성합니다.
  const permutation = (places, len, temp, results) => {
    if (len === 0) {
      results.push(temp);
      return;
    }
    for (let i = 0; i < len; i++) {
      let arr = [...temp, places[i]];
      permutation(
        places.filter((v, idx) => idx !== i),
        len - 1,
        arr,
        results
      );
    }
  };
  const results = [];
  permutation(places, places.length, [], results);

  const sumAggregate = [];
  for (let i = 0; i < results.length; i++) {
    let sum = 0;
    for (let j = 1; j < results[i].length; j++) {
      sum += calculateDistance(results[i][j - 1], results[i][j]);
    }
    sumAggregate.push(sum);
  }

  return Math.min(...sumAggregate);
};

let placesToVisit = [
  [0, 0],
  [1, 1],
  [1, 3],
  [2, 2],
];
let output = TSP(placesToVisit);
console.log(output); // --> 423
//방문 순서: [0, 0], [1, 1], [2, 2], [1, 3]

placesToVisit = [
  [0, 0],
  [3, 3],
  [-3, 3],
  [2, 3],
  [1, 3],
];
output = TSP(placesToVisit);
console.log(output); // --> 940
// 방문 순서: [-3, 3], [1, 3], [2, 3], [3, 3], [0, 0]
