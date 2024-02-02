const { showLogs } = require("../../common/utils/withTimeLog");
/**
 * 101.对称二叉树 
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *  
 * 示例 1：
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 示例 2：
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *  
 * 提示：
 * 	树中节点数目在范围 [1, 1000] 内
 * 	-100 <= Node.val <= 100
 *  
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null || (root.left === null && root.right === null)) return true;//为空或只有一个根节点，返回true
    const exam = (lNode, rNode) => {//比较左子树和右子树是否相等
        if(lNode === null && rNode === null) return true;//同时越界，比较完毕，返回true
        if(lNode === null || rNode === null || lNode.val !== rNode.val) return false;//只有左或右节点越界，或左节点右节点值不相等，不对称，返回false
        return exam(lNode.left, rNode.right) && exam(lNode.right, rNode.left);//比较左节点的左子节点和右节点的右子节点，以及左节点的右子节点和右节点的左子节点是否相等
    }
    return exam(root.left, root.right);
};


/**
 * Test case
 */
showLogs(
    isSymmetric,
    {
        data: [[root = [1,2,2,3,4,4,3]],[root = [1,2,2,null,3,null,3]]],
        structure: ["TreeNode"],
    },
    {
        data: [true,false],
        structrue: ["boolean"]
    }
)
console.log("点击跳转到题目提交:https://leetcode.cn/problems/symmetric-tree/")

