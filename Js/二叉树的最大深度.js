
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    const ans = computeMaxDepth(root, 0);
    return ans;
}

function computeMaxDepth(root, depth) {
    if (root === null) {
        return depth;
    }
    const leftDepth = computeMaxDepth(root.left, depth + 1);
    const rightDepth = computeMaxDepth(root.right, depth + 1);
    return Math.max(leftDepth, rightDepth);
}
