/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function(num, target) {
    // 模拟
    const arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(i);
    }
    let pos = 0;
    while(n > 1) {
        pos = (pos + target -1) % num;
        // 删除pos上的元素
        arr.splice(pos, 1);
        num--;
    }
    return arr[0];
};

// 需要优化
var iceBreakingGame = function(num, target) {
    if (num === 1) {
        return 0;
    }
    return (target + iceBreakingGame(num - 1, target)) % num;
}

