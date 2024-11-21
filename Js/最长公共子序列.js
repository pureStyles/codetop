
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length, len2 = text2.length;
    const dp = new Array(len1).fill(new Array(len2).fill(0));

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (text1[i] === text2[j]) {
                if (i === 0 || j ===0) {
                    dp[i][j] = 1 + 0;
                } else {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                }
            } else {
                if (i === 0 || j === 0) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j-1]);
                }
            }
        }
    }
    return dp[len1-1][len2-1];
}
