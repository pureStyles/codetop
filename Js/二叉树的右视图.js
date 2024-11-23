/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const ans = [];
    dfs(root, ans);
    return ans;
};

function dfs(root, ans) {
    if (root === null) {
        return ans;
    }
    ans.push(root.val);
    if (root.right === null) {
        dfs(root.left, ans);
    }
    dfs(root.right, ans);
}


// 层序遍历

var rightSightView = function(root) {
    if (root === null) {
        return;
    }
    const ans = levelOrder(root);
    return ans;
}

function levelOrder(root) {
    const ans = [];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        // 把一行的最后一个加入ans中
        ans.push(queue[queue.length - 1].val);
        const temp = [];
        while(queue.length) {
            const node = queue.shift();
            node.left && temp.push(node.left);
            node.right && temp.push(node.right);
        }
        queue = queue.concat(temp);
    }
    return ans;
}
