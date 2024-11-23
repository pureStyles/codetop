
/**
 * @param {number} num
 * @return {number}
 */
var trainWays = function(num) {
    const dp = new Array(num + 1).fill(1);
    for (let i = 2; i <= num; i++) {
        dp[i] = dp[i - 1] % 1000000007 + dp[i - 2] % 1000000007;
    }
    return dp[num] % 1000000007;
};
