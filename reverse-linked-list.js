const reverseList = (head) => {
    let pre = null;
    while(head){
        const next = head.next
        head.next = pre
        pre = head 
        head = next
    }
    return pre
};