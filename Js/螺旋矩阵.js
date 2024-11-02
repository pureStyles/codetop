/**
 * 螺旋矩阵顺时针遍历
 * @param matrix
 */

var spiralOrder = function(matrix) {
    // 题目中的提示matrix[i].length >= 1
    let left = 0, right = matrix[0].length - 1;
    let top = 0, bottom = matrix.length - 1;
    let x = 0;
    let result = new Array();
    while(true) {
        for (let i = left; i <= right; i++) {
            // 1. from left to right
            result[x++] = matrix[top][i];
        }
        if (++top > bottom) {
            break;
        }
        for (let i = top; i <= bottom; i++) {
            // 2. from top to bottom
            result[x++] = matrix[i][right];
        }
        if (--right < left) {
            break;
        }
        for(let i = right; i >= left; i--) {
            // 3. from right to left
            result[x++] = matrix[bottom][i];
        }
        if (--bottom < top) {
            break;
        }
        for (let i = bottom; i >= top; i--) {
            result[x++] = matrix[i][left];
        }
        if (++left > right) {
            break;
        }
    }
    return result;
}
