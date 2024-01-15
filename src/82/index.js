const { withTimeLog } = require("../../common/utils/withTimeLog");
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
// 定义一个函数，用于删除链表中的重复节点
var deleteDuplicates = function(head) {
    // 创建一个虚拟节点，指向head
    let dummy = new ListNode(-1, head);
    // 定义一个变量，用于记录前一个节点
    let prev = dummy;
    // 定义一个变量，用于记录当前节点
    let cur = head;
    // 遍历链表
    while (cur) {
        // 定义一个变量，用于记录下一个节点
        let next = cur.next;
        // 如果下一个节点存在，且下一个节点的值和当前节点的值相等
        if (next && next.val === cur.val) {
            // 找到最后一个重复的节点，并记录
            while (next && next.val === cur.val) {
                next = next.next;
            }
            // 将前一个节点的指针指向最后一个重复的节点
            prev.next = next;
            // 将当前节点指向最后一个重复的节点
            cur = next;
        } else {
            // 如果下一个节点和当前节点值不相等，则将前一个节点指向当前节点，当前节点指向下一个节点
            prev = cur;
            cur = cur.next;
        }
    }
    // 返回虚拟节点的下一个节点
    return dummy.next;
};

/**
 * Test case
 */
withTimeLog(() => deleteDuplicates(head = [1,2,3,3,4,4,5]),[1,2,5]);
withTimeLog(() => deleteDuplicates(head = [1,1,1,2,3]),[2,3]);

console.log("点击跳转到题目提交:https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/")

