const { withTimeLog } = require("../../common/utils/withTimeLog");
const {convertListNode, parseListNode} = require("../../common/structures/ListNode");
/**
 * 83.删除排序链表中的重复元素 [2024-01-14]
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 *  
 * 示例 1：
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * 示例 2：
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
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
    let dummy = head;
    while(dummy&&dummy.next){
        if(dummy.val===dummy.next.val){
            dummy.next=dummy.next.next;
        }else{
            dummy=dummy.next
        }
    }
    return head;
};

/**
 * Test case
 */
withTimeLog(() => parseListNode(deleteDuplicates(convertListNode(head = [1,1,2]))),[1,2]);
withTimeLog(() => parseListNode(deleteDuplicates(convertListNode(head = [1,1,2,3,3]))),[1,2,3]);

console.log("点击跳转到题目提交:https://leetcode.cn/problems/remove-duplicates-from-sorted-list/")

