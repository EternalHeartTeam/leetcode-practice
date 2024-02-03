const { showLogs } = require("../../common/utils/withTimeLog");
/**
 * LCR 084.全排列 II  
 * 给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。
 *  
 * 示例 1：
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 *  [1,2,1],
 *  [2,1,1]]
 * 示例 2：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *  
 * 提示：
 * 	1 <= nums.length <= 8
 * 	-10 <= nums[i] <= 10
 *  
 * 注意：本题与主站 47 题相同： https://leetcode-cn.com/problems/permutations-ii/
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

};

/**
 * Test case
 */
showLogs(
    permuteUnique,
    {
        data: [[nums = [1,1,2]],[nums = [1,2,3]]],
        structure: ["number[]"],
    },
    {
        data: [,[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]],
        structrue: ["number[][]"]
    }
)
console.log("点击跳转到题目提交:https://leetcode.cn/problems/7p8L0Z/")

