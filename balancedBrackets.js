const balancedBrackets = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let strArr = str.split("");
  let stack = [];

  console.log(strArr);

  for (let ch of strArr) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      if (stack.length === 0) return false;
      if (
        (ch === ")" && stack[stack.length - 1] === "(") ||
        (ch === "]" && stack[stack.length - 1] === "[") ||
        (ch === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else {
        break;
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
};

console.log(balancedBrackets("()"));
