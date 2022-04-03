const coinChange = function (total, coins) {
  // TODO: 여기에 코드를 작성합니다.
  let n = coins.length;
  let biggest = coins[n - 1];
  if (total < 0) return 0;
  if (total === 0) return 1;
  if (n === 1) {
    if (total % biggest === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    coinChange(total, coins.slice(0, n - 1)) +
    coinChange(total - biggest, coins)
  );
};

let total = 10;
let coins = [1, 5];
let output = coinChange(total, coins);
console.log(output); // --> 3

total = 4;
coins = [1, 2, 3];
output = coinChange(total, coins);
console.log(output); // --> 4 ([1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3])

total = 10;
coins = [2, 3, 5, 6];
output = coinChange(total, coins);
console.log(output);

total = 256;
coins = [1, 5, 10, 50, 100, 500];
output = coinChange(total, coins);
console.log(output);
