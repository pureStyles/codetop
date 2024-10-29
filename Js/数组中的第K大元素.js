var findKthLargest = function(nums, k) {
    const randomIndex = Math.floor(Math.random() * (nums.length - 1));
    const temp = nums[0];
    nums[0] = nums[randomIndex];
    nums[randomIndex] = temp;
    const result = quickFind(nums, 0, nums.length - 1, k);
    return result;
}

function quickFind(nums, low, high, k) {
    const position = partion(nums, low, high);
    if (position === nums.length - k) {
        // 刚好是第k大的数
        return nums[position];
    }
    if (nums.length - k < position) {
        // 需要往小的找
        return quickFind(nums, low, position - 1, k);
    } else if (nums.length - k > position) {
        // 往大的找
        return quickFind(nums, position + 1, high);
    }
}

/**
 * 这个函数其实做了2件事情：
 * 1: 固定一个位置
 * 2：返回固定的位置是啥
 * @param nums 原数组
 * @param low 起始位置
 * @param high 结束位置
 * @returns {*} 固定的位置
 */
function partion(nums, low, high) {
    // 随机交换过程解决
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    [nums[low], nums[randomIndex]] = [nums[randomIndex], nums[low]];
    // 选取第一个数据作为基准值来划分，从high开始判断
    let pivot = nums[low];
    let i = low, j = high;
    while(i < j) {
        while(i < j && nums[j] >= pivot) {
            j --;
        }
        // 走到这里说明nums[high] < pivot， 需要交换位置
        nums[i] = nums[j];
        while(i < j && nums[i] <= pivot) {
            i ++;
        }
        // 走到这里说明i已经大于pivot了，需要交换位置
        nums[j] = nums[i];
    }
    // i与j相等
    nums[i] = pivot;
    return i;
}
