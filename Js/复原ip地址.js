/**
 * 复原ip地址
 * @param s 没有使用.划分的Ip字符串
 */
var restoreIpAddress = function(s) {
    const ans = [];
    const curRes = [];
    dfs(ans, curRes, s, 0);
    return ans;
}

function dfs(res, curRes, s, start) {
    // 向下走到底的终止条件
    if (curRes.length === 4 && start === s.length) {
        /**
         * 刚好在第x个中找到一个答案
         */
        res.push(curRes.join('.'));
        return;
    }
    /**
     * 已经找到4个部分，但是字符还没有耗尽，需要回溯
     */
    if (curRes.length === 4 && start < s.length) {
        return;
    }

    for (let i = 1; i <= 3; i++) {
        if (start + i > s.length) {
            // 退出for循环
            return;
        }
        if (i !== 1 && s[start] === '0') {
            // 不能有前导0
            return;
        }
        const str = s.substring(start, start + i);
        if (i === 3 && Number(str) > 255) {
            /**
             * 不能超过255
             */
            return;
        }
        curRes.push(str);
        dfs(res, curRes, s, i + start);
        curRes.pop();
    }
}

const s = "25525511135";
const result = restoreIpAddress(s);

console.log('result', result);
