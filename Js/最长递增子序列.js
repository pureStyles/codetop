
var lengthOfLIS = function(nums) {
    if (nums.length === 1) {
        return 1;
    }
    const len = nums.length;
    let res = 1;
    let dp = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
}
