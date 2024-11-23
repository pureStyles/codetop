
var MinStack = function() {
    // 挂载在实例上
    this.stack = new Array();
    this.minStack = new Array();
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const len = this.stack.length;
    let curMin;
    if (len === 0) {
        curMin = Math.min(val, Number.MAX_VALUE);
    } else {
        curMin = Math.min(val, this.minStack[len - 1]);
    }
    this.stack.push(val);
    this.minStack.push(curMin);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length) {
        this.minStack.pop();
        const val = this.stack.pop();
        return val;
    }
    return null
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
