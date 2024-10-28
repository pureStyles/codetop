/**
 * 限制条件：最多进行1次交易，在卖出股票前必须持有一份股票
 * 在买入一份股票时，手里必须没有持有股票
 * 只有在买入时，交易次数才会发生变化
 * @param prices
 */
var maxProfit = function(prices) {
    const dp = new Array(prices.length).fill(new Array());
    dp[0][0] = 0; // 没有进行交易
    dp[0][1] = -prices[0];
    for(let i = 1, len = prices.length; i < len; i++) {
        // 第i天结束时，手里有0只股票
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        // 第i天结束时，持有1只股票
        dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
    }
    return dp[prices.length - 1][0];
}
