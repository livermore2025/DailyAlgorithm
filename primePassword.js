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

const isPrime = (n) => {
  if (n === 1) return false;
  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;
};

let primeArr = (() => {
  const result = [];
  for (let i = 1000; i < 10000; i++) {
    if (isPrime(i)) result.push(i);
  }
  return result;
})();

const isDiff1 = (num1, num2) => {
  let num1Arr = num1.toString().split("");
  let num2Arr = num2.toString().split("");
  let cnt = 0;
  for (let i = 0; i < num1Arr.length; i++) {
    if (num1Arr[i] !== num2Arr[i]) cnt++;
  }
  if (cnt === 1) return true;
  return false;
};

const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  let visitied = [];
  let queue = new Queue();
  visitied.push(curPwd);
  queue.enqueue([curPwd, 0]);

  while (queue.size() !== 0) {
    let currElem = queue.dequeue();
    let curr = currElem[0];
    let dist = currElem[1];
    if (isDiff1(curr, newPwd)) {
      return dist + 1;
    }
    visitied.push(curr);

    let adjacent = (() => {
      let result = [];
      for (let prime of primeArr) {
        if (isDiff1(curr, prime)) {
          result.push(prime);
        }
      }
      return result;
    })();

    for (let prime of adjacent) {
      if (!visitied.includes(prime)) {
        visitied.push(prime);
        queue.enqueue([prime, dist + 1]);
      }
    }
  }
};
console.log(bfs_prime(1009, 1171));

console.log(bfs_prime(3733, 8779));
