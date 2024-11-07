

var sumNumbers = function(root) {
   const result = dfs(root, 0, 0);
   return result;
}

function dfs(root, level, remain) {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        // 叶子节点
        return remain * 10 + root.val;
    }
    const leftSum = dfs(root.left, level + 1, remain * 10 + root.val);
    const rightSum = dfs(root.right, level + 1, remain * 10 + root.val);
    return leftSum + rightSum;
}
