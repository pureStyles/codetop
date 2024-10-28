var maxSubArray = function(nums) {
    const dp = [];
    dp[0] = nums[0];
    let ans = nums[0];
    for(let i = 1, len = nums.length; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        ans = Math.max(dp[i], ans);
    }
    return ans;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
const result = maxSubArray(nums);
console.log(result);
