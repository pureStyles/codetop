
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 双指针方法
    const str = s.trim();
    const res = [];
    const len = str.length;
    let i = len - 1, j = len - 1;
    while(i >= 0) {
        while(i >= 0 && str[i] !== ' ') {
            i --;
        }
        // i 刚好是单词前面的空格, slice参数是左闭右开区间
        res.push(str.slice(i + 1, j + 1));
        while(i >= 0 && str[i] === ' ') {
            i --;
        }
        j = i;
    }
    return res.join(' ');
};
