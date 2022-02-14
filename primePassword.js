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

let isDiff1 = (num1, num2) => {
  let num1Arr = num1.toString().split("");
  let num2Arr = num2.toString().split("");
  let cnt = 0;
  for (let i = 0; i < num1Arr.length; i++) {
    if (num1Arr[i] !== num2Arr[i]) cnt++;
  }
  if (cnt === 1) return true;
  return false;
};

const primePassword = (curPwd, newPwd, cnt, cntarr, visited) => {
  // TODO: 여기에 코드를 작성합니다.
  let tmpPwd = curPwd;
  for (let prime of primeArr) {
    if (isDiff1(tmpPwd, prime)) {
      if (prime === newPwd) {
        cntarr.push(cnt);
        return;
      }
      if (visited.includes(prime)) continue;
      visited.push(prime);
      primePassword(prime, newPwd, cnt + 1, cntarr, visited);
    }
  }
};

let cntarr = [];
primePassword(3733, 8779, 0, cntarr, []);
console.log(cntarr);

// 일의자리부터 1000의 자리까지 바꿔본다. currpassword로
// 안되면 0~9 에서 되는거부터.

// console.log(primeArr);

// for (let prime of primeArr) {
//   if (isDiff1(3733, prime)) console.log(prime);
// }
// console.log("------------");
// for (let prime of primeArr) {
//   if (isDiff1(3739, prime)) console.log(prime);
// }
// console.log("------------");
// for (let prime of primeArr) {
//   if (isDiff1(3779, prime)) console.log(prime);
// }
