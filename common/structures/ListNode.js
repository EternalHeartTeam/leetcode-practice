/**
 * ListNode 链表数据结构
 * @param val
 * @param next
 * @constructor
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
function parse(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let head = new ListNode(arr.shift(), null);
    let current = head;
    while (arr.length > 0) {
        current.next = new ListNode(arr.shift(), null);
        current = current.next;
    }
    return head;
}

function toArray(listNodes) {
    const arr = [];
    while (listNodes) {
        arr.push(listNodes.val);
        listNodes = listNodes.next;
    }
    return arr;
}

module.exports = {ListNode,parse,toArray}
