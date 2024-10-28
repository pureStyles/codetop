var merge = function(nums1, m, nums2, n) {
    // p、q分别指向nums1、nums2的末尾元素
    let p = m - 1, q = n - 1;
    let index = m + n - 1;
    while(p >= 0 && q >= 0) {
        if (nums1[p] <= nums2[q]) {
            // nums2大，把大的往nums1先放
            nums1[index --] = nums2[q];
            q --;
        } else {
            // nums1的大，把nums1的先放
            nums1[index --] = nums1[p];
            p --;
        }
    }
}

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

merge(nums1, m, nums2, n);
console.log('nums1', nums1);
