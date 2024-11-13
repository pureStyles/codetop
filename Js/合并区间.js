var merge = function(intervals) {
    // 策略： 先排序再两两合并
    // intervals[i].length = 2;
    // 升序排序
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });
    const ans = [[]];
    // 初始化结果数组
    ans[0] = intervals[0];
    let lastIndex = 0; // ans的最后的索引
    for (let i = 1, len = intervals.length; i < len; i++) {
        const [cur_left, cur_right] = intervals[i];
        if (cur_right <= ans[lastIndex][1]) {
            /**
             * 包含关系，使用ans的最后一个就可以覆盖当前的这个;
             */
            continue;
        } else if (cur_left > ans[lastIndex][1]) {
            // 没有交点，需要加入到ans中
            ans.push(intervals[i]);
            lastIndex ++;
        } else if (cur_left <= ans[lastIndex][1]) {
            // 有交点，需要合并
            ans[lastIndex][1] = cur_right;
        }
    }
    return ans;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]];
const ans = merge(intervals);
console.log(ans);
