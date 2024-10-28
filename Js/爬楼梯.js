var climbStairs = function(n) {
    /**
     * 我在最后的时候，我可以选择爬1个台阶
     * 但我也可以选择爬2个台阶
     * 所以总的方法数是：dp[n] = dp[n-1] + dp[n-2];
     * 讨论边界值：dp[0] = 1 dp[1] = 1, dp[2] = 2;
     */
    if (n < 2) {
        // n为1的时候;
        return 1;
    }
    const dp = [];
    dp[2] = 2;
    dp[1] = 1;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

const n = 2;
const result = climbStairs(n);
console.log(result);
