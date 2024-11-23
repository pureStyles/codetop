
var multiply = function(num1, num2) {
    if (num1 ===' 0' || num2 === '0') {
        return' 0';
    }
    const len1 = num1.length, len2 = num2.length;
    const res = new Array(len1 + len2).fill(0);
    for(let i = len1 - 1; i >= 0; i--) {
        const n1 = num1[i] - '0';
        for (let j = len2 - 1; j >= 0; j--) {
            const n2 = num2[j] - '0';
            const cur = (n1 *  n2 + res[i + j + 1]) % 10;
            // 当前向前一位的进位
            const carry = (n1 *  n2 + res[i + j + 1] - cur) / 10;
            res[i + j + 1] = cur;
            res[i + j] += carry;
        }
    }
    return res.join('').replace(/^0+/, '');
}
