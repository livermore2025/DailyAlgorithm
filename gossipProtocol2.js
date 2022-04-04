class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  // 큐에 데이터를 추가 할 수 있어야 합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }

  // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.size() === 0) {
      return;
    }

    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}

const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol2 = function (village, num) {
  // TODO: 여기에 코드를 작성합니다.
  const matrix = createMatrix(village);
  let m = matrix.length;
  let n = matrix[0].length;
  let emergency_candid = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "2") {
        matrix[i][j] = "X";
        emergency_candid.push([i, j]);
      }
    }
  }

  const pick_emergency_agent = (candid, len, num, result, final) => {
    if (len < num) return;
    if (num === 0) {
      final.push(result);
      return;
    }
    pick_emergency_agent(candid.slice(1), len - 1, num, [...result], final);
    result.push(candid[0]);
    pick_emergency_agent(candid.slice(1), len - 1, num - 1, [...result], final);
  };

  const emergency = [];
  pick_emergency_agent(
    emergency_candid,
    emergency_candid.length,
    num,
    [],
    emergency
  );

  const results = [];
  let x, y, cnt;
  for (let i = 0; i < emergency.length; i++) {
    let matrix_copied = Array.from(Array(m), () => new Array(n));

    for (let l = 0; l < m; l++) {
      for (let v = 0; v < n; v++) {
        matrix_copied[l][v] = matrix[l][v];
      }
    }

    let candid = emergency[i];
    let q = new Queue();
    for (let j = 0; j < candid.length; j++) {
      q.enqueue([...candid[j], 0]);
    }

    while (q.size() !== 0) {
      [x, y, cnt] = q.dequeue();
      if (
        x + 1 < m &&
        matrix_copied[x + 1][y] !== "X" &&
        matrix_copied[x + 1][y] !== "0"
      ) {
        matrix_copied[x + 1][y] = "X";
        q.enqueue([x + 1, y, cnt + 1]);
      }
      if (
        x - 1 >= 0 &&
        matrix_copied[x - 1][y] !== "X" &&
        matrix_copied[x - 1][y] !== "0"
      ) {
        matrix_copied[x - 1][y] = "X";
        q.enqueue([x - 1, y, cnt + 1]);
      }
      if (
        y + 1 < n &&
        matrix_copied[x][y + 1] !== "X" &&
        matrix_copied[x][y + 1] !== "0"
      ) {
        matrix_copied[x][y + 1] = "X";
        q.enqueue([x, y + 1, cnt + 1]);
      }
      if (
        y - 1 >= 0 &&
        matrix_copied[x][y - 1] !== "X" &&
        matrix_copied[x][y - 1] !== "0"
      ) {
        matrix_copied[x][y - 1] = "X";
        q.enqueue([x, y - 1, cnt + 1]);
      }
    }

    let isComplete = true;
    for (let l = 0; l < m; l++) {
      for (let v = 0; v < n; v++) {
        if (matrix_copied[l][v] !== "0" && matrix_copied[l][v] !== "X")
          isComplete = false;
      }
    }
    if (isComplete) results.push(cnt);
  }
  return Math.min(...results);
};

let village = [
  "0022", // 첫 번째 줄
  "0020",
  "0020",
  "0220",
];
let num = 1;
let output = gossipProtocol2(village, num);
console.log(output); // --> 0 (이미 모든 주민이 정보를 알고 있는 상태)

village = [
  "1001212",
  "1201011",
  "1102001",
  "2111102",
  "0012111",
  "1111101",
  "2121102",
];
num = 5;
output = gossipProtocol2(village, num);
console.log(output); // --> 3
