/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 通过找规律
    // matrix[i][j] -> matrix[j][n - 1 - i]
    // 深拷贝matrix
    const temp = deepClone(matrix);
    // 变化
    for(let i = 0, rows = temp.length; i < rows; i++) {
        for (let j = 0, cols = temp[0].length; j < cols; j++) {
            matrix[j][rows - 1 - i] = temp[i][j];
        }
    }
};

// 对象深拷贝
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return obj
    }
    // 其他的内置对象: RegExp、Map等
    const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    Reflect.ownKeys(obj).forEach(key => {
        result[key] = deepClone(obj[key]);
    })
    return result;
}


// 需要掌握O(1)的实现方式



var rotate = function(matrix) {
    let n = matrix.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 -i][n - 1 - j];
            matrix[n- 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = temp;
        }
    }
}
