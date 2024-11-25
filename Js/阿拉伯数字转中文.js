var num2cn = function(n) {
    // 先取绝对值
    const isNegative = n < 0;
    const numStr = Math.abs(n).toString();
    const res = [], len = numStr.length;

    for (let i = len; i > 0 ; i -= 4) {
        res.push(numToCn(numStr.slice(Math.max(0, i - 4), i)));
    }

    const unit = ['', '万', '亿'];
    for(let i = 0; i < res.length; i++) {
        if (res[i] === '') {
            continue;
        }
        res[i] += unit[i];
    }
    isNegative && res.push('负');
    return res.reverse().join('');
}

function numToCn(str) {
    if (str === '0') {
        return '零';
    }
    const unit = ['', '十', '百', '千'];
    const number = ['零','一','二','三','四','五','六','七','八','九'];

    const len = str.length;
    let res = '';
    for(let i = 0; i < len; i++) {
        const num = Number(str[i]);
        if (num !== 0) {
            if (str[i - 1] === '0') {
                res += '零';
            }
            res += number[num] + unit[len - 1 - i];
        }
    }
    if (len === 2 && str[0] === '1') {
        res = res.slice(1);
    }
    return res;
}
