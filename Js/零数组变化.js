
var isZeroArray = function(nums, queries) {
    for (let i = 0, queryLen = queries.length; i < queryLen; i++) {
       const query = queries[i];
       const [start, end] = query || [];
       for(let j = start; j <= end; j++) {
           if (nums[j] < 0) {
               return false;
           }
           if (nums[j] >= 1) {
               nums[j] = nums[j] - 1;
           }
       }
    }
    return nums.every(val => val === 0);
}

const nums = [4,3,2,1], queries = [[1,3],[0,2]]
const result = isZeroArray(nums, queries);
console.log(result);


// 优化时间
var isZeroArray = function(nums, queries) {
    const len = nums.length;
    const iteratorArray = new Array(len).fill(0);
    for(const [start, end] of queries) {
        iteratorArray[start] --;
        if (end + 1 < len) {
            iteratorArray[end + 1] ++;
        }
    }
    let current = 0;
    for (let i = 0; i < len; i++) {
        current += iteratorArray[i];const len = nums.length;
        const iteratorArray = new Array(len).fill(0);
        for(const [start, end] of queries) {
            iteratorArray[start] --;
            if (end + 1 < len) {
                iteratorArray[end + 1] ++;
            }
        }
        let current = 0;
        for (let i = 0; i < len; i++) {
            current += iteratorArray[i];
            if (nums[i] >= 1) {
                nums[i] += current;
            }
            if (nums[i] < 0) {
                return false;
            }
        }
        return nums.every(val => val === 0);
        nums[i] += current;
        if (nums[i] < 0) {
            return false;
        }
    }
    return nums.every(val => val === 0);
}
