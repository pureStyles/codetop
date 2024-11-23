
var getIntersectionNode = function(headA, headB) {
    let curA = headA;
    const map = new Map();
    while(curA !== null) {
        map.set(curA, curA);
        curA = curA.next;
    }
    let curB = headB;
    while(curB !== null) {
        const existNode = map.get(curB);
        if (existNode) {
            return existNode;
        }
        curB = curB.next;
    }
    return null;
}

// 优化内存空间算法
var getIntersectionNode = function(headA, headB) {
    // 判断走过的路径一样不一样
    // 如果一样的话就结束了，不一样的话还要判断是否为Null;
    let A = headA, B = headB;
    while(A !== B) {
        A = A !== null ? A.next : headB;
        B = B !== null ? B.next : headA;
    }
    return A;
}
