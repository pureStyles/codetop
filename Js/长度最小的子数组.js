
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


var minSubArrayLen = function(target, nums) {
    let ans = Number.MAX_VALUE;
    let left = 0, right = 0;
    const len = nums.length;
    let sum = 0;
    while(right < len) {
        sum += nums[right];
        while(sum >= target) {
            ans = Math.min(ans, right - left + 1);
            sum = sum - nums[left];
            left ++;
        }
        right ++;
    }
    return ans === Number.MAX_VALUE ? 0 : ans;
}

