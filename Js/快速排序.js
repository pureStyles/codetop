
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

function partion(nums, low, high) {
    const pivot = nums[low];
    let l = low, h = high;
    while(l < h) {
        while(l < h && nums[h] >= pivot){
            h--;
        }
        // 右边的数大于支点
        nums[l] = nums[h];
        while(l < h && nums[l] <= pivot){
            l++;
        }
        nums[h] = nums[l];
    }
    nums[l] = pivot;
    return l;
}

function quickSort(nums, start, end) {
    if (start < end) {
        // 需要随机化基准元素
        const pivotIndex = Math.random() * ( end - start + 1) + start;
        [nums[start], nums[pivotIndex]] = [nums[pivotIndex], nums[start]];
        const pos = partion(nums, start, end);
        quickSort(nums, start, pos - 1);
        quickSort(nums, pos + 1, end);
    }
}


const arr =  [-74,48,-20,2,10,-84,-5,-9,11,-24,-91,2,-71,64,63,80,28,-30,-58,-11,-44,-87,-22,54,-74,-10,-55,-28,-46,29,10,50,-72,34,26,25,8,51,13,30,35,-8,50,65,-6,16,-2,21,-78,35,-13,14,23,-3,26,-90,86,25,-56,91,-13,92,-25,37,57,-20,-69,98,95,45,47,29,86,-28,73,-44,-46,65,-84,-96,-24,-12,72,-68,93,57,92,52,-45,-2,85,-63,56,55,12,-85,77,-39];
const res = sortArray(arr);
console.log(arr);
