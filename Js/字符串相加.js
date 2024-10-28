var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1;
    let carry = 0;
    let result = '';
    while(i >=0 || j >=0) {
        const curSum = (carry + Number(num1[i] || 0) + Number(num2[j] || 0));
        carry = (curSum - curSum % 10) / 10;
        result = result + (curSum % 10);
        i--;
        j--;
    }
    if (carry) {
        return (result + carry).split('').reverse().join('');
    }
    return result.split('').reverse().join('');
}


// 那如果直接使用数组存储呢？
// 选择这一种更适合
var addStrings2 = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1;
    let carry = 0;
    const resultArr = [];
    while(i >= 0 || j>= 0) {
        const curSum = (carry + Number(num1[i] || 0) + Number(num2[j] || 0));
        carry = (curSum - curSum % 10) / 10;
        // 往开头加
        resultArr.unshift(curSum % 10);
        i--;
        j--;
    }
    if (carry > 0) {
        resultArr.unshift(carry);
    }
    return resultArr.join('');

}

const num1 = "1", num2 = "9";
console.log(addStrings2(num1, num2));
