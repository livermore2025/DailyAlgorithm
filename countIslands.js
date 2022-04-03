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
const countIslands = function (grid) {
  // TODO: 여기에 코드를 작성합니다.
  let cnt = 0;
  let m = grid.length;
  if (m === 0) return 0;
  let n = grid[0].length;
  let copy = new Array(m);

  for (let i = 0; i < m; i++) {
    copy[i] = new Array(n);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      copy[i][j] = grid[i][j];
    }
  }

  const markIsland = (arr, i, j) => {
    let q = new Queue();
    arr[i][j] = "X";
    q.enqueue([i, j]);
    while (q.size() !== 0) {
      let [x, y] = q.dequeue();

      if (x + 1 < m && arr[x + 1][y] === "1") {
        copy[x + 1][y] = "X";
        q.enqueue([x + 1, y]);
      }
      if (x - 1 >= 0 && arr[x - 1][y] === "1") {
        copy[x - 1][y] = "X";
        q.enqueue([x - 1, y]);
      }

      if (y + 1 < n && arr[x][y + 1] === "1") {
        copy[x][y + 1] = "X";
        q.enqueue([x, y + 1]);
      }

      if (y - 1 >= 0 && arr[x][y - 1] === "1") {
        copy[x][y - 1] = "X";
        q.enqueue([x, y - 1]);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (copy[i][j] === "1") {
        markIsland(copy, i, j);
        cnt++;
      }
    }
  }

  return cnt;
};

let grid = [
  ["0", "1", "1", "1"],
  ["0", "1", "1", "1"],
  ["1", "1", "0", "0"],
];
let result = countIslands(grid);
console.log(result); // --> 1

grid = [
  ["0", "1", "1", "1", "0"],
  ["0", "1", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "1", "0"],
];
result = countIslands(grid);
console.log(result); // --> 3
