let tiling = function (n) {
  let memorization = [0, 1, 2];
  if (n === 1) {
    return memorization[1];
  }
  if (n === 2) {
    return memorization[2];
  }
  for (let i = 3; i <= n; i++) {
    memorization[i] = memorization[i - 1] + memorization[i - 2];
  }
  return memorization[n];
};
