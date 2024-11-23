
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
