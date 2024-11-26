/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p = head, q = head;
    const dummy = new ListNode(-1);
    dummy.next = head;
    for(let i = 1; i <= n; i++) {
        q = q.next;
    }
    while(q && q.next !== null) {
        p = p.next;
        q = q.next;
    }
    const nextNode = p.next.next;
    p.next = nextNode;
    return dummy.next;
};



var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let p = dummy, q = dummy;
    for(let i = 1; i <= n; i++) {
        q = q.next;
    }
    // 这个时候就可以同步更新了
    while(q.next) {
        p = p.next;
        q = q.next;
    }
    if (p.next) {
        p.next = p.next.next;
    } else {
        p.next = null;
    }
    return dummy.next;
}

