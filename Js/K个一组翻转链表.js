
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

// 使用尾插发

var reverseKGroup = function(head, k) {
    const dummy = new ListNode(-100);
    dummy.next = head;
    let cur = head;
    // 前驱节点
    let pre = dummy;
    while(true) {
        let tail = pre;
        for(let i = 0; i < k; i++) {
            tail = tail.next;
            if (tail === null) {
                return dummy.next;
            }
        }
        const nextGroup = tail.next;
        let suc = nextGroup;
        // 反转当前组
        while(cur !== nextGroup) {
            const temp = cur.next;
            cur.next = suc;
            suc = cur;
            cur = temp;
        }
        // 需要保存当前组的头结点（只会就会变成下一组的头结点啦）
        const temp = pre.next;
        pre.next = tail;
        pre = temp;
        cur = nextGroup
    }
    return dummy.next;
}
