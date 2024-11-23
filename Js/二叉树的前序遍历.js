/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const ans = [];
    dfs(root, ans);
    return ans;
};

function dfs(root, ans) {
    if (root === null) {
        return ans;
    }
    ans.push(root.val);
    dfs(root.left, ans);
    dfs(root.right, ans);
}
