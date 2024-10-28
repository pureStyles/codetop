var permute = function(nums) {
    const result = [];
    // 用来存储向下探的时候，这个元素是否已经使用过;
    const used =[];
    const path = [];
    dfs(nums, path,  used, 0, result);
    return result;
}


// 递归需要迭代的参数有哪些？
function dfs(nums, path, used, index, res) {
    // 递归终止条件：探到最后一层
    if (index === nums.length) {
        // 将形成的路径添加到结果中，作为结果的其中一项
        // 需要深拷贝一份添加进去，排除回溯使path.pop的影响
        res.push([...path]);
        // push的返回值是数组改变后的长度
        return;
    }
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!used[i]) {
            // 这个元素还没有使用过
            path.push(nums[i]);
            used[i] = true;

            dfs(nums, path, used, index + 1, res);

            // 回溯阶段，需要对变量进行状态重置
            used[i] = false;
            /**
             * 注意：这里的代码会有严重的问题
             * 在Javascript中，函数调用参数传递的是值，对象对应的值是地址
             * 所以这里pop之后，会把res里刚才添加进去的这一项也pop了，这是不对的
             */
            path.pop();
        }
    }
}

const nums = [1, 2, 3];
const result = permute(nums);
console.log(result)
