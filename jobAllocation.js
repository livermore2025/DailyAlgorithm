const jobAllocation = function (jobs, workersNum) {
  // TODO: 여기에 코드를 작성합니다.
};

let jobs = [1, 2, 3, 4, 5, 6, 7];
let workersNum = 3;
let output = jobAllocation(jobs, workersNum);
console.log(output); // --> 11 (1, 2, 3, 4 / 5, 6 / 7)

jobs = [10, 2, 3, 4, 16, 10, 10];
workersNum = 4;
output = jobAllocation(jobs, workersNum);
console.log(output); // --> 19 (10, 2, 3, 4 / 16 / 10 / 10
