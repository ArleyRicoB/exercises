/**
 * @param {number[]} digits
 * @return {number[]}
 */

//solution 1
var plusOne = function (digits) {
  let acc = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let num = digits[i] + acc;
    if (i === digits.length - 1) num++;

    const newAcc = Math.floor(num / 10);

    if (newAcc !== 0) {
      digits[i] = num % 10;
      acc = newAcc;
    } else {
      digits[i] = num;
      acc = 0;
    }
  }
  if (acc > 0) digits.unshift(acc);

  return digits;
};

//solution 2
var plusOne = function (digits) {
  const num = BigInt(digits.join("")) + 1n;
  return num
    .toString()
    .split("")
    .map((val) => Number(val));
};
