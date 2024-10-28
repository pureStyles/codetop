/**
 * 层序遍历，需要注意的是，在输出的结果中需要体现出层级
 * @param root 二叉树的根节点
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    // 在js中，使用array模拟队列
    const queue = [];
    const result = [];
    queue.push(root);
    while(queue.length) {
        const n = queue.length;
        const curLevel = [];
        for(let i = 0; i < n; i++) {
            // 0 -> n-1循环n次
            const node = queue.pop();
            curLevel.push(node.val);
            if (node.left) {
                queue.unshift(node.left);
            }
            if (node.right) {
                // 这里不能使用push，需要使用unshift
                queue.unshift(node.right);
            }
        }
        result.push(curLevel);
    }
    return result;
}
