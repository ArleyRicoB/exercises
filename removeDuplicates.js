/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  const newNums = new Set(nums);
  const arr = Array.from(newNums);

  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }

  nums.length = arr.length;
  return nums.length;
};
