// DP
// str1 X[0..m-1]
// str2 Y[0..n-1]
// length of the LCS L(X[0..m-1], Y[0..n-1])

/**
 * If last characters of both sequences match (X[m-1] == Y[m-1])m, L(X[0..m-1], Y[0..n-1]) = 1 + L(X[0..m-2], Y[0..n-2])
 * else if do not match, L(X[0..m-1], Y[0..n-1]) = MAX(L(X[0..m-2], Y[0..n-1]), L(X[0..m-1], Y[0..n-2]))
 *
 * using Memoization reduces complexity
 */
const LCS_Memoization = function (str1, str2) {
  //TODO: 여기에 코드를 작성합니다.
  const memo = new Array(str1.length + 1)
    .fill(0)
    .map(() => new Array(str2.length + 1).fill(-1));

  const LCSlength = (str1, str2, memo) => {
    if (str1.length === 0 || str2.length === 0) return 0;
    if (memo[str1.length][str2.length] !== -1) {
      return memo[str1.length][str2.length];
    }
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      return (memo[str1.length][str2.length] =
        1 +
        LCS(str1.slice(0, str1.length - 1), str2.slice(0, str2.length - 1)));
    }
    return (memo[str1.length][str2.length] = Math.max(
      LCS(str1.slice(0, str1.length - 1), str2),
      LCS(str1, str2.slice(0, str2.length - 1))
    ));
  };

  return LCSlength(str1, str2, memo);
};

// Tabulation
const LCS = (str1, str2) => {
  let m = str1.length;
  let n = str2.length;
  const len = new Array(m + 1);
  for (let i = 0; i < len.length; i++) {
    len[i] = new Array(n + 1);
  }

  let i, j;
  for (i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      if (i == 0 || j == 0) len[i][j] = 0;
      else if (str1[i - 1] == str2[j - 1]) len[i][j] = len[i - 1][j - 1] + 1;
      else len[i][j] = Math.max(len[i - 1][j], len[i][j - 1]);
    }
  }

  return len[m][n];
};

let output = LCS("abcd", "aceb");
console.log(output); // --> 2 ('ab' or 'ac')

output = LCS("acaykp", "capcak");
console.log(output); // --> 4 ('acak')

output = LCS("AGGTAB", "GXTXAYB");
console.log(output);

output = LCS("codestates", "c1o1d1e1s1t1a1t1e1s");
console.log(output);

output = LCS_Memoization("codestates", "c1o1d1e1s1t1a1t1e1s");
console.log(output);
