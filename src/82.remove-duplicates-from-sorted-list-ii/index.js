const { showLogs } = require("../../common/utils/withTimeLog");
/**
 * 82.删除排序链表中的重复元素 II [2024-01-15]
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 *  
 * 示例 1：
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 示例 2：
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 *  
 * 提示：
 * 	链表中节点数目在范围 [0, 300] 内
 * 	-100 <= Node.val <= 100
 * 	题目数据保证链表已经按升序 排列
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
var deleteDuplicates = function(head) {

};

/**
 * Test case
 */
showLogs(
    deleteDuplicates,
    [head = [1,2,3,3,4,4,5],head = [1,1,1,2,3]],
    [[1,2,5],[2,3]]
)
console.log("点击跳转到题目提交:https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/")

