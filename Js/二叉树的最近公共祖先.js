
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {
        /**
         * p，q位于异侧，返回当前的节点
         */
        return root;
    }
    if (left === null && right !== null) {
        return right;
    }
    if (left !== null && right === null){
        return left;
    }
    if (left === null && right === null){
        return null;
    }
}
