/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const lookupValue = target - nums[i];

    if (myMap.has(lookupValue)) {
      return [myMap.get(lookupValue), i];
    }

    myMap.set(nums[i], i);
  }
};
