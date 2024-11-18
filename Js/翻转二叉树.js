
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    const leftNode = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(leftNode);
    return root;
}

var invertTree = function(root) {
    if (root === null) {
        return root;
    }
    const stack = new Array();
    stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    }
    return root;
}
