
var rob = function(nums) {
    // dp[i]的定义：从0 - i-1不出动警报的情况下能偷窃到的最大金额
    const len = nums.length;
    const dp = new Array(len + 1).fill(0);
    dp[1] = nums[0];
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1] + 0);
    }
    return dp[len];
}
