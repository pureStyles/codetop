
var addTwoNumbers = function(l1, l2) {
    let p = l1, q = l2;
    let carry = 0;
    const head = new ListNode(-1);
    let cur = head;
    while(p || q) {
        const x = p ? p.val : 0;
        const y = q ? q.val : 0;
        const val = (x + y + carry) % 10;
        const node = new ListNode(val);
        cur.next = node;
        cur = cur.next;
        carry = (x + y + carry - val) / 10;
        if (p) {
            p = p.next;
        }
        if (q) {
            q = q.next;
        }
    }
    if (carry) {
        const node = new ListNode(carry);
        cur.next = node;
    }
    return head.next;
}
