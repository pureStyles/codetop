
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    // 这里需要注意的是公用前缀，也就是必须从开头算起
    const count = strs.length;
    const pivot = strs[0];
    for(let i = 0, len = strs[0].length; i < len; i++) {
        for (let j = 1; j < count; j++) {
            if (i === strs[j].length || pivot[i] !== strs[j][i]) {
                return pivot.substring(0, i);
            }
        }
    }
    return pivot;
}
