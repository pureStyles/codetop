var hasPathSum = function(root, targetSum) {
    if (root.left === null && root.right === null) {
        return root.val = targetSum;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
