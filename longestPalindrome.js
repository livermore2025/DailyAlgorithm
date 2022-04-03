let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let len = str.length;
  if (len < 2) return len;

  let maxLength = 1;
  let start = 0;
  let low, high;

  for (let i = 0; i < len; i++) {
    low = i - 1;
    high = i + 1;

    // 첫 2개의 while loop은 palindrome의 길이가 짝수일경우 동작한다.
    while (high < len && str[high] === str[i]) {
      high++;
    }

    while (low >= 0 && str[low] === str[i]) {
      low--;
    }

    while (low >= 0 && high < len && str[low] === str[high]) {
      low--;
      high++;
    }

    let length = high - low - 1;
    if (maxLength < length) {
      maxLength = length;
      start = low + 1;
    }
  }

  return maxLength;
};

let str = "My dad is a racecar athlete";
let result = longestPalindrome(str);
console.log(result); // --> 11 ('a racecar a')

str = " dad ";
result = longestPalindrome(str);
console.log(result); // --> 5 (' dad ')
