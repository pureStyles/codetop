var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    let curNode = head;

    const set = new Set();
    while(curNode) {
        if (set.has(curNode.next)) {
            return true;
        }
        set.add(curNode);
        curNode = curNode.next;
    }
    return false;
}
