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

const canGo = (matrix, row, col) => {
  const m = matrix.length;
  const n = matrix[0].length;
  if (row < 0 || col < 0 || row > m - 1 || col > n - 1) {
    return false;
  }
  if (matrix[row][col] === "x" || matrix[row][col] === "0") {
    return false;
  }
  return true;
};

const traverse = (matrix, row, col) => {
  let r, c, cnt;

  const queue = new Queue();
  matrix[row][col] = "x";
  queue.enqueue([row, col, 0]);
  while (queue.size() !== 0) {
    [r, c, cnt] = queue.dequeue();
    if (canGo(matrix, r + 1, c)) {
      matrix[r + 1][c] = "x";
      queue.enqueue([r + 1, c, cnt + 1]);
    }
    if (canGo(matrix, r - 1, c)) {
      matrix[r - 1][c] = "x";
      queue.enqueue([r - 1, c, cnt + 1]);
    }
    if (canGo(matrix, r, c + 1)) {
      matrix[r][c + 1] = "x";
      queue.enqueue([r, c + 1, cnt + 1]);
    }
    if (canGo(matrix, r, c - 1)) {
      matrix[r][c - 1] = "x";
      queue.enqueue([r, c - 1, cnt + 1]);
    }
  }

  return cnt;
};

const gossipProtocol = (village, row, col) => {
  // TODO: 여기에 코드를 작성합니다.
  const villageMatrix = createMatrix(village);

  return traverse(villageMatrix, row, col);
};

let village = [
  "0101", // 첫 번째 줄
  "0111",
  "0110",
  "0100",
];

let row = 1;
let col = 2;
let output = gossipProtocol(village, row, col);
console.log(output); // --> 3

/*
   1. 시작: (1, 2)에서 시작, 소문이 퍼진 곳을 x로 표기
   [
   '0101',
   '01x1',
   '0110',
   '0100',
   ]
    
   2. 1일 뒤
   [
   '0101',
   '0xxx',
   '01x0',
   '0100',
   ]
    
   3. 2일 뒤
   [
   '0x0x',
   '0xxx',
   '0xx0',
   '0100',
   ]
    
   4. 3일 뒤: 소문이 전부 퍼짐 (끝)
   [
   '0x0x',
   '0xxx',
   '0xx0',
   '0x00',
   ]
   */
