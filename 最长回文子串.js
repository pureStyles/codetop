var longestPalindrome = function(s) {
    const len = s.length;
    if (len < 2) {
        return s;
    }
    // 二维数组初始化
    const dp = new Array(len).fill(new Array());
    for(let i = 0; i < len; i++) {
        dp[i][i] = true;
    }
    let maxLen = 1, begin = 0;
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            // 处理到对角线
            if (j - i === 1) {
                dp[i][j] = s[i] === s[j];
            } else {
                dp[i][j] = dp[i-1][j+1] && (s[i] === s[j]);
            }
            if (dp[i][j] && (i - j + 1) > maxLen) {
                // 更新maxLen
                maxLen = i- j + 1;
                begin = j;
            }
        }
    }
    return s.slice(begin, begin + maxLen);

}

const s = "bb";
const result = longestPalindrome(s);
console.log('result', result);
