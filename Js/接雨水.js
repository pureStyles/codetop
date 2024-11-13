
var trap = function(height) {
    // 按照
    let curHeight = 1;
    let sum = 0;
    while(true) {
        let isStart = false;
        let temp = 0;
        for (let i = 0, len = height.length; i < len; i++) {
            if (isStart && height[i] < curHeight) {
                temp ++;
            }
            if (height[i] >= curHeight) {
                // 第一个高于当前行的柱子，这时候可以开始计算了
                isStart = true;
                sum += temp;
                temp = 0;
            }
        }
        curHeight ++;
        if (isStart === false) {
            break;
        }
    }
    return sum;
}

// 超出时间限制
var trap  = function(height) {
    let ans = 0;
    /**
     * 从1开始的原因是i = 0 时表示第一列，肯定没有水
     */
    for (let i = 1, len = height.length; i <= len - 2; i++) {
        // 找到i列左边最小的值
        let max_left = getMax(height, 0, i - 1);
        let max_right = getMax(height, i + 1, len - 1);
        const relative_low = Math.min(max_left, max_right);
        if (height[i] < relative_low) {
            ans += (relative_low - height[i]);
        }
    }
    return ans;
}

function getMax(arr, start, end) {
    // 找到arr数组中从start到end中最小的数
    let min = arr[start];
    for (let i = start; i <= end; i++) {
        if (arr[i] > min) {
            min = arr[i];
        }
    }
    return min;
}

var trap = function(height) {
    const len = height.length;
    let ans = 0;
    const max_left = new Array(len).fill(0);
    const max_right = new Array(len).fill(0);
    for (let i = 1; i < len - 1; i++) {
        max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
    }
    for (let j = len - 2; j >= 0; j--) {
        max_right[j] = Math.max(max_right[j + 1], height[j + 1]);
    }
    for (let k = 1; k < len -1; k ++) {
        const relative_low = Math.min(max_left[k], max_right[k]);
        if (height[k] < relative_low) {
            ans += (relative_low - height[k]);
        }
    }
    return ans;
}

// 双指针方式
var trap = function(height) {

}
