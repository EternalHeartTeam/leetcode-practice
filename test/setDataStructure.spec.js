import { expect, it } from 'vitest';
import { getDataStructure } from '#common/utils/question-handler/parseStructure.js';

const jsDoc = `/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
var mergeKLists = function(lists) {
 // lists = convertListNode(lists);
 console.log(lists, '111')
// 当是空数组的情况下
if (!lists.length) {
 return null;
}
// 合并两个排序链表
const merge = (head1, head2) => {
 let dummy = new ListNode(0);
 let cur = dummy;
 // 新链表，新的值小就先接谁
 while (head1 && head2) {
   if (head1.val < head2.val) {
     cur.next = head1;
     head1 = head1.next;
   } else {
     cur.next = head2;
     head2 = head2.next;
   }
   cur = cur.next;
 }
 // 如果后面还有剩余的就把剩余的接上
 cur.next = head1 == null ? head2 : head1;
 return dummy.next;
};
const mergeLists = (lists, start, end) => {
 if (start + 1 == end) {
   return lists[start];
 }
 // 输入的k个排序链表，可以分成两部分，前k/2个链表和后k/2个链表
 // 如果将这前k/2个链表和后k/2个链表分别合并成两个排序的链表，再将两个排序的链表合并，那么所有链表都合并了
 let mid = (start + end) >> 1;
 let head1 = mergeLists(lists, start, mid);
 let head2 = mergeLists(lists, mid, end);
 return merge(head1, head2);
};
return mergeLists(lists, 0, lists.length);
};`;

it('测试', () => {
    const param = getDataStructure(jsDoc);
    const returnArray = getDataStructure(jsDoc, 'return');
    expect(param).toEqual(['ListNode[]']);
    expect(returnArray).toEqual(['ListNode']);
});
