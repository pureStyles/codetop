
var coinChange = function(coins, amount) {
    if (coins.length === 1) {
        // 只有一枚硬币
        const coin = coins[0];
        if (amount % coin !== 0) {
            return -1;
        }
    }
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0, len = coins.length; j < len; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
            // 如果dp[index]中的index为负数，则dp[index]应该设置为无穷大，所以else分支可以不用看了；
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}
