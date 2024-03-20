/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    const length = nums.length;

    for(let i=1; i < length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
};