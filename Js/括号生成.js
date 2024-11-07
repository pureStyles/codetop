var generateParenthesis = function(n) {
    const ans = new Array();
    dfs(0, 0, [], n, ans)
    return ans;
}

/**
 * dfs
 * @param leftCount 当前左括号个数
 * @param rightCount 当前右括号个数
 */
function dfs(leftCount, rightCount, curRes, n, ans) {
    // 递归终止条件：左括号个数 + 右括号个数 是2n
    if (leftCount + rightCount === 2 * n) {
        ans.push(curRes.join(''));
        return;
    }
    if (leftCount < n) {
        // 先进左括号
         curRes.push('(');
         dfs(leftCount + 1, rightCount, curRes, n, ans);
        curRes.pop();
    }
    if (rightCount < n && rightCount < leftCount)  {
        curRes.push(')');
        dfs(leftCount, rightCount + 1, curRes, n, ans);
        curRes.pop();
    }
}

const n  = 3;
const ans = generateParenthesis(n);
console.log(ans);
