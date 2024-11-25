
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 双指针方法
    const str = s.trim();
    const res = [];
    const len = str.length;
    let i = len - 1, j = len - 1;
    while(i >= 0) {
        while(i >= 0 && str[i] !== ' ') {
            i --;
        }
        // i 刚好是单词前面的空格, slice参数是左闭右开区间
        res.push(str.slice(i + 1, j + 1));
        while(i >= 0 && str[i] === ' ') {
            i --;
        }
        j = i;
    }
    return res.join(' ');
};

// 将www.kuaishou.com转换为com.kuaishou.www

var reverseDomain = function(s) {
    // 去除两端的空格
    const str = s.trim();
    const res = [];
    const len = str.length;
    let i = len - 1, j = len - 1;
    while(i >= 0) {
        while(i >= 0 && str[i] !== '.') {
            i --;
        }
        // str[i] === '.'
        res.push(str.slice(i + 1, j + 1));
        while(i >= 0 && str[i] === '.') {
            i --;
        }
        j = i;
    }
    return res.join('.');
}


const s = 'www.kuaishou.com';
const ans = reverseDomain(s);
console.log(ans);

// 手写Bind
Function.prototype._bind = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('typeError');
    }
    let self = this;
    const fn = function(...innerArgs) {
        /**
         * 通过new 调用：const callback = fn.bind(this);
         * const instance = new callback(age, name);
         */
        const isNew = this instanceof fn;
        return self.apply(isNew ? this : Object(context), args.concat(innerArgs));
    }
    // 将返回函数的prototype指定为原始函数的prototype值，这样的话实例可以继承绑定函数的原型中的值
    fn.prototype = this.prototype;
    return fn;
}

/**
 * 上面的写法存在的问题时，如果某一天我在bind返回的函数的prototype上修改东西的时候
 * 原来的函数属性上的prototype上的值也会被修改（因为直接用的是引用）
 * 优化策略：借助中间变量
 */
Function.prototype._bind = function(context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('typeError');
    }
    const self = this;
    const noop = function() {};
    const fBound = function(...innerArgs) {
        const byNew = this instanceof fBound;
        return self.apply(byNew ? this : context, args.concat(innerArgs));
    }

    noop.prototype = this.prototype;
    fBound.prototype = new noop();
    return fBound;
}

// Object.create模拟实现
Object.create = function(o) {
    function f() {};
    f.prototype = o;
    return new f();
}
