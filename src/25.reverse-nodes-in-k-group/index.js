const { showLogs } = require("../../common/utils/withTimeLog");
const ListNode = require("../../common/structures/ListNode");
/**
 * 25.K 个一组翻转链表
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 *
 * 示例 1：
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 示例 2：
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 *
 * 提示：
 * 	链表中的节点数目为 n
 * 	1 <= k <= n <= 5000
 * 	0 <= Node.val <= 1000
 *
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
<<<<<<< HEAD
const myReverse = (head, tail) => {
    let prev = tail.next;
    let p = head;
    while (prev !== tail) {
        const nex = p.next;
        p.next = prev;
        prev = p;
        p = nex;
    }
    return [tail, head];
}
var reverseKGroup = function(head, k) {
    const hair = new ListNode(0);
    hair.next = head;
    let pre = hair;

    while (head) {
        let tail = pre;
        // 查看剩余部分长度是否大于等于 k
        for (let i = 0; i < k; ++i) {
            tail = tail.next;
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;
        [head, tail] = myReverse(head, tail);
        // 把子链表重新接回原链表
        pre.next = head;
        tail.next = nex;
        pre = tail;
        head = tail.next;
    }
    return hair.next;
=======
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  const stack = [];
  const dummy = { next: head };
  let pre = dummy;
  while (true) {
    let count = 0;
    let tmp = head;
    while (tmp && count < k) {
      stack.push(tmp);
      tmp = tmp.next;
      count++;
    }
    if (count != k) {
      pre.next = head;
      break;
    }
    while (stack.length > 0) {
      pre.next = stack.pop();
      pre = pre.next;
    }
    pre.next = tmp;
    head = tmp;
  }
  return dummy.next;
>>>>>>> 1eb6e3c5ba35b22d7d3ef6893b6ace2d80050d6e
};

/**
 * Test case
 */
showLogs(
  reverseKGroup,
  {
    data: [[head = [1, 2, 3, 4, 5], k = 2], [head = [1, 2, 3, 4, 5], k = 3]],
    structure: ['ListNode', 'number'],
  },
  {
    data: [[2, 1, 4, 3, 5], [3, 2, 1, 4, 5]],
    structrue: ['ListNode'],
  },
);
console.log('点击跳转到题目提交:https://leetcode.cn/problems/reverse-nodes-in-k-group/');
