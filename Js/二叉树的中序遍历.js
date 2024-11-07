var inorderTraversal = function(root) {
    const ans = [];
    inOrder(root, ans);
    return ans;
}

function inOrder(root, res) {
    if (root === null) {
        return;
    }
    inOrder(root.left, ans);
    res.push(root.val);
    inOrder(root.right, ans);
}
