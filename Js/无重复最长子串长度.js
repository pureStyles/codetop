/**
 * 求字符串的不重复子串的最大长度
 * @param s：输入字符串
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let max = 0;
    let left = 0;
    for(let i = 0, len = s.length; i < len; i++) {
        if (map.has(s[i])) {
            left = Math.max(left, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        max = Math.max(max, i - left + 1);
    }
    return max;
}
