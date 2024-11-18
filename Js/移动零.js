

// 采用两次遍历
var moveZeros = function(nums) {
    let len = nums.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i];
        }
    }

    for(let i = j; i < len; i++) {
        nums[i] = 0;
    }
}
