
var minSubArrayLen = function(target, nums) {
    let ans = Number.MAX_VALUE;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let j = i;
        let sum = 0;
        while (j < len) {
            sum += nums[j];
            if (sum >= target && (j - i + 1) < ans) {
                ans = j - i + 1;
                break;
            }
            if (sum > target) {
                break;
            }
            j ++;
        }
    }
    ans = ans === Number.MAX_VALUE ? 0 : ans;
    return ans;
}


const nums = [1, 2, 3, 4, 5];
const target = 11;
const ans = minSubArrayLen(target, nums);
console.log(ans);


