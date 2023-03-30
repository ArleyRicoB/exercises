const reverse = {
  "(": ")",
  "{": "}",
  "[": "]",
};

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const parentesis = s.charAt(i);
    if (parentesis === "(" || parentesis === "{" || parentesis === "[") {
      stack.push(parentesis);
    } else {
      if (parentesis === reverse[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;
  return true;
};
