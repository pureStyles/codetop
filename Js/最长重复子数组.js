/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    // 定义dp[i][j]: nums1以nums1[i]结尾，nums2以nums2[j]结尾的的公共子串长度
    const dp =  new Array(len1);
    for (let i = 0; i < len1; i++) {
        dp[i] = new Array(len2).fill(0);
    }
    let res = 0;
    for(let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (nums1[i] === nums2[j]) {
                let temp;
                if (i === 0 || j === 0) {
                    temp = 0;
                } else {
                    temp = dp[i-1][j-1];
                }
                dp[i][j] = 1 + temp;
            }

            if (dp[i][j] > res) {
                res = dp[i][j];
            }
        }
    }
    return res;
};
