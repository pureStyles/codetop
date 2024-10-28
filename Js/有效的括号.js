
// 思考，用什么模拟Stack呢？
// 考虑到需要使用到的方法：pop等，使用数组数据结构模拟栈更合适；
var isValid = function(s) {
    const matchMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const left_part = Object.values(matchMap);
    const right_part = Object.keys(matchMap);
    const stack = [];
    for(let i = 0, len = s.length; i < len; i++) {
        if (left_part.includes(s[i])) {
            // 需要入栈;
            stack.push(s[i]);
        } else if (right_part.includes(s[i])) {
            /**
             * 需要判断：看是否和栈顶的元素匹配，如果可以匹配，则栈顶元素出栈，再依次比较下一个
             */
            if (matchMap[s[i]] !== stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
}
