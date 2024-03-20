/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let runner = 0;
  let index = 0;
  let map = {};

  while(runner<nums.length) {
    if(nums[runner] in map) {
        runner++
    } else {
        map[nums[runner]] = true;
        nums[index] = nums[runner]
        index++;
    }
  }

  return index
};