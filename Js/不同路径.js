
var uniquePaths = function(m, n) {
    const dp = new Array(m + 1).fill(new Array(n + 1).fill(0));
    /**
     * 当一行/一列时，只有1中方法
     */
    for(let i = 1; i <= m; i++) {
        dp[i][1] = 1;
    }
    for(let i = 1; i <= n;i++) {
        dp[1][i] = 1;
    }
    for (let i = 2; i <= m; i++) {
        for(let j = 2; j <= n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m][n];
}
