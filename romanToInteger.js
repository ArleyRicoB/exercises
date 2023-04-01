/**
 * @param {string} s
 * @return {number}
 */

const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let stringArray = s.split("");
  let sum = 0;
  let i = stringArray.length - 1;

  do {
    const previous = stringArray[i - 1];
    const current = stringArray[i];

    const previousValue = romanNumbers[previous];
    const currentValue = romanNumbers[current];

    if (currentValue > previousValue) {
      sum += currentValue - previousValue;
      i -= 2;
    } else {
      sum += currentValue;
      i--;
    }
  } while (i >= 0);

  return sum;
};
