
var trainingPlan = function(head, cnt) {
    if (head.next === null) {
        return head.val;
    }
    let cur = head, index = 0;
    const map =  new Map();
    while(cur) {
        map.set(index, cur);
        cur = cur.next;
        index ++;
    }
    return map.get(index - cnt);
}


// 快慢指针
var trainingPlan = function(head, cnt) {
    let latter = head, former = head;
    // former先移动
    for(let i = 1; i <= cnt; i++) {
        former = former.next;
    }
    // latter,former再一起移动
    while(former) {
        latter = latter.next;
        former = former.next;
    }
    return latter;
}
