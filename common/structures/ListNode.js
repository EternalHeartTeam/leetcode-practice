/**
 * ListNode 链表数据结构
 * @param val
 * @param next
 * @constructor
 */

export class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  static parse(arr) {
    if (arr.length === 0)
      return null // Return null for an empty array

    const head = new ListNode(arr.shift(), null)
    let current = head
    while (arr.length > 0) {
      current.next = new ListNode(arr.shift(), null)
      current = current.next
    }
    return head
  }

  static toArray(listNodes, arr = []) {
    if (listNodes === undefined || listNodes === null)
      return arr

    arr.push(listNodes.val)
    return ListNode.toArray(listNodes.next, arr)
  }
}
