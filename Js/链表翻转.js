function ListNode(val, next) {
    this.val = val;
    this.next = (next === undefined ? null : next);
}

var reverseList = function(head) {
    if (head === null) {
        return null;
    }
    let prev = null;
    let curNode = head;
    while(curNode !== null) {
        // 因为改变了curNode的Next指向，所以需要提前记住
        const next = curNode.next;
        curNode.next = prev;
        prev = curNode;
        curNode = next;
    }
    return curNode;
}
