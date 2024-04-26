function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
    nums = nums.filter(num => num > 0);
    for (let i = 0; i < nums.length; i++) {
        let pos = Math.abs(nums[i])-1;
        if (pos < nums.length && nums[pos] > 0) {
            nums[pos] = -nums[pos];
        }
        
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i +1
        }
        
    }
    return nums.length+1;

}

module.exports = smallestMissingPositiveInteger;

