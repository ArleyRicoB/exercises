/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 0) return 0;
  let begin = 0;
  let finish = nums.length;

  do {
    let middlePoint = Math.floor(begin + (finish - begin) / 2);
    const value = nums[middlePoint];

    if (value === target) return middlePoint;
    if (value > target) {
      finish = middlePoint;
    } else {
      begin = middlePoint + 1;
    }
  } while (begin < finish);

  if (target > begin) return begin;
  return finish;
};
