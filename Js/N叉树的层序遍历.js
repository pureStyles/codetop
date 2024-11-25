
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const queue = new Array();
    queue.push(root);
    const ans = [];
    while(queue.length) {
        const len = queue.length;
        const res = [];
        for(let i = 1; i <= len; i++) {
            const node = queue.shift();
            res.push(node.val);
            if (Array.isArray(node.children) && node.children.length) {
                queue.push(...node.children);
            }
        }
        ans.push(res);
    }
    return ans;
};
