function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var mergeTwoLists = function(list1, list2) {
    let p = list1, q = list2;
    const head = new ListNode(200);
    let currentNode = head;
    while(p || q) {
        if (!p) {
            // 这个时候只剩下q了
            while(q) {
                const newNode = new ListNode(q.val);
                currentNode.next = newNode;
                q = q.next;
                currentNode = currentNode.next;
            }
            return head.next;
        }
        if (!q) {
            // 只剩下p了
            while(p) {
                const newNode = new ListNode(p.val);
                currentNode.next = newNode;
                p = p.next;
                currentNode = currentNode.next;
            }
            return head.next;
        }
        if (p.val >= q.val) {
            const newNode = new ListNode(q.val);
            currentNode.next = newNode;
            q = q.next;
        } else {
            const newNode = new ListNode(p.val);
            currentNode.next = newNode;
            p = p.next;
        }
        currentNode = currentNode.next;
    }
    return head.next;
};
