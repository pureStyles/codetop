var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    // 将sort先按照升序排序
    nums.sort((a, b) => {
        return a - b;
    });
    let result = [];
    let len = nums.length;
    let k = 0;
    for (k; k < len; k++) {
        if (nums[k] > 0) {
            break;
        }
        if (nums[k] === nums[k-1]) {
            continue;
        }
        let i = k + 1, j = nums.length - 1;
        while(i < j) {
            if (nums[k] + nums[i] + nums[j] < 0) {
                // i需要往大的方向走
                while(i < j && nums[i] === nums[++i]);
            } else if (nums[k] + nums[i] + nums[j] > 0) {
                // j 需要往小的地方走
                while(i < j && nums[j] === nums[--j]);
            } else {
                result.push([nums[k], nums[i], nums[j]]);
                while(i < j && nums[i] === nums[++i]);
                while(i < j && nums[j] === nums[--j]);
            }
        }
    }
    return result;
}
