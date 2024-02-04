const { showLogs } = require('../../common/utils/withTimeLog');
/**
 * 24.两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 * 示例 1：
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 示例 2：
 * 输入：head = []
 * 输出：[]
 * 示例 3：
 * 输入：head = [1]
 * 输出：[1]
 *
 * 提示：
 * 	链表中节点的数目在范围 [0, 100] 内
 * 	0 <= Node.val <= 100
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
 * @return {ListNode}
 */
const swapPairs = function (head) {

};

/**
 * Test case
 */
showLogs(
  swapPairs,
  {
    data: [[head = [1, 2, 3, 4]], [head = []], [head = [1]]],
    structure: ['ListNode'],
  },
  {
    data: [[2, 1, 4, 3], [], [1]],
    structrue: ['ListNode'],
  },
);
console.log('点击跳转到题目提交:https://leetcode.cn/problems/swap-nodes-in-pairs/');
