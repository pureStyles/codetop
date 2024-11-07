var search = function(nums, target) {
    const len = nums.length;
    let start = 0, end = len - 1, mid = 0;
    while(start <= end) {
        mid = Math.ceil((start + end) / 2);
        if (nums[mid] === target) {
            return mid;

        }
        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}

const nums =  [-1,0,3,5,9,12], target = 2;
const result = search(nums, target);
console.log(result);
