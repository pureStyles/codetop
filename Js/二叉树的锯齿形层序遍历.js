
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const ans = [];
    const queue = [root];
    let index = 1;
    while(queue.length) {
        const temp = [];
        while(queue.length) {
            const headNode = queue.shift();
            temp.push(headNode);
        }
        index ++;
        const t = [];
        for(const node of temp) {
            t.push(node.val);
        }
        ans.push(t);
        while(temp.length) {
            let node;
            if (index % 2 === 0) {
                node = temp.shift();
                node.right && queue.push(node.right);
                node.left && queue.push(node.left);
            } else {
                node = temp.shift();
                node.right && queue.push(node.right);
                node.left && queue.push(node.left);
            }
        }
    }
    return ans;
}

var zigZagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    const queue = [root];
    const ans = [];
    let fromLeftToRight = true;
    while(queue.length) {
        const levelList = [];
        for(let i = 0, len = queue.length; i < len; i++) {
            const node = queue.shift();
            if (fromLeftToRight) {
                levelList.push(node.val);
            } else {
                levelList.unshift(node.val);
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        fromLeftToRight = !fromLeftToRight;
        ans.push(levelList);
    }
    return ans;
}
