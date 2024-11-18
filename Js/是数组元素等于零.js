

const DIRECT = {
    LEFT: 'left',
    RIGHT: 'right',
};

var countValidSelections = function(nums) {
    let ans = 0;
    const tempNums = nums.map(v => v);
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] === 0) {
            // 先尝试向左移动
            const leftResult = move(tempNums.map(v => v), i, DIRECT.LEFT);
            const rightResult = move(tempNums.map(v => v), i, DIRECT.RIGHT);
            ans += (leftResult ? 1 : 0) + (rightResult ? 1 : 0);
        }
    }
    return ans;
}

/**
 *
 * @param nums
 * @param cur
 * @param left : 为true时向左移动，false表示向右移动
 */
function move(nums, cur, direct) {
    let curDirect = direct;
    // 确定方向之后的初始化位置
    let curPos = curDirect === DIRECT.LEFT ? cur - 1 : cur + 1;
    const len = nums.length;
    // 条件限定范围
    while(curPos >= 0 && curPos <= len - 1) {
        const curValue = nums[curPos];
        if (curValue > 0) {
            nums[curPos] = curValue - 1;
            // 翻转移动方向
            curDirect = curDirect === DIRECT.LEFT ? DIRECT.RIGHT : DIRECT.LEFT;
            curPos = curDirect === DIRECT.LEFT ? curPos - 1 : curPos + 1;
        }
        if (curValue === 0) {
            // 延此方向继续移动
            curPos = curDirect === DIRECT.LEFT ? curPos - 1 : curPos + 1;
        }
    }
    return nums.every(val => val === 0);
}

const nums = [16,13,10,0,0,0,10,6,7,8,7];
const ans = countValidSelections(nums);
console.log(ans);

