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

const robotPath = function (room, src, dst) {
  // TODO: 여기에 코드를 작성합니다.
  const queue = new Queue();
  const visited = [];
  for (let i = 0; i < room.length; i++) {
    visited.push(new Array(room[0].length).fill(false));
  }
  visited[src[0]][src[1]] = true;
  queue.enqueue([src, 0]);
  while (queue.size() !== 0) {
    let [deque, dist] = queue.dequeue();
    if (deque[0] === dst[0] && deque[1] === dst[1]) {
      return dist;
    }

    if (deque[1] - 1 >= 0) {
      let left = [deque[0], deque[1] - 1];
      if (
        !(room[left[0]][left[1]] === 1 || visited[left[0]][left[1]] === true)
      ) {
        visited[left[0]][left[1]] = true;
        queue.enqueue([left, dist + 1]);
      }
    }
    if (deque[1] + 1 < room[0].length) {
      let right = [deque[0], deque[1] + 1];
      if (
        !(
          room[right[0]][right[1]] === 1 || visited[right[0]][right[1]] === true
        )
      ) {
        visited[right[0]][right[1]] = true;
        queue.enqueue([right, dist + 1]);
      }
    }
    if (deque[0] - 1 >= 0) {
      let up = [deque[0] - 1, deque[1]];
      if (!(room[up[0]][up[1]] === 1 || visited[up[0]][up[1]] === true)) {
        visited[up[0]][up[1]] = true;
        queue.enqueue([up, dist + 1]);
      }
    }

    if (deque[0] + 1 < room.length) {
      let down = [deque[0] + 1, deque[1]];
      if (
        !(room[down[0]][down[1]] === 1 || visited[down[0]][down[1]] === true)
      ) {
        visited[down[0]][down[1]] = true;
        queue.enqueue([down, dist + 1]);
      }
    }
  }
};

let room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
let src = [4, 2];
let dst = [2, 2];
let output = robotPath(room, src, dst);
console.log(output); // --> 8

// https://en.wikipedia.org/wiki/Breadth-first_search
