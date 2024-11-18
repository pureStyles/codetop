
var reverseKGroup = function(head, k) {
    const dummy = new ListNode(-100);
    let cur = dummy;
    const stack = new Array();
    while(true) {
        let count = 1;
        let nextStart = head;
        while(nextStart !== null && count <= k) {
            stack.push(nextStart);
            nextStart = nextStart.next;
            count ++;
        }
        if (count <= k) {
            cur.next = nextStart;
            break;
        }
        while(stack.length) {
            const node = stack.pop();
            cur.next = node;
            cur = cur.next;
        }
        cur.next = nextStart;
        head = nextStart;
    }
    return dummy.next;
}
