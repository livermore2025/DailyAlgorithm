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

function shadowOfPapers(papers) {
  // TODO: 여기에 코드를 작성합니다.
  let maxHeight = 0;
  for (let i = 0; i < papers.length; i++) {
    let [x, y, width, height] = papers[i];
    maxHeight = Math.max(maxHeight, y + height);
  }

  let maxHeightBar = new Array(maxHeight);
  let paperQue = new Queue();
  for (let i = 0; i < papers.length; i++) {
    paperQue.enqueue(papers[i]);
  }

  let sum = 0;
  let rowPtr = 0;
  while (paperQue.size() !== 0) {
    maxHeightBar.fill(0);
    let len = paperQue.size();
    for (let i = 0; i < len; i++) {
      let [x, y, width, height] = paperQue.dequeue();
      if (x === rowPtr) {
        for (let j = y; j < y + height; j++) {
          maxHeightBar[j] = 1;
        }

        if (width === 1) continue;
        else {
          paperQue.enqueue([x + 1, y, width - 1, height]);
        }
      } else {
        paperQue.enqueue([x, y, width, height]);
      }
    }
    for (let i = 0; i < maxHeightBar.length; i++) {
      if (maxHeightBar[i] === 1) sum++;
    }
    rowPtr++;
  }
  return sum;
}

let result = shadowOfPapers([[0, 1, 4, 4]]);
console.log(result); // --> 16

/*
4 | x x x x
3 | x x x x 
2 | x x x x 
1 | x x x x 
0 |   
--------------
    0 1 2 3 4 
*/

result = shadowOfPapers([
  [0, 0, 4, 4],
  [2, 1, 2, 6],
  [1, 5, 5, 3],
  [2, 2, 3, 3],
]);
console.log(result); // --> 36
/*
7 |   x x x x x
6 |   x x x x x
5 |   x x x x x
4 |     x x x
3 | x x x x x
2 | x x x x x
1 | x x x x
0 | x x x x
------------------
    0 1 2 3 4 5 6 7
*/
