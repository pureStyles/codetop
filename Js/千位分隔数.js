
var thousandSeparator = function(n) {
    // 转化为字符串的格式
    const str = n + '';
    let index = 1;
    let ans = '';
    let res = ''
    for (let i = str.length - 1; i >= 0; i--) {
        ans += str[i];
        if (index % 3 === 0 && i !== 0) {
            ans += '.';
        }
        index ++;
    }
    for(let i = ans.length - 1; i >= 0; i--){
        res += ans[i];
    }
    return res;
}

const s = 123456789;
const ans = thousandSeparator(s);
console.log(ans);
