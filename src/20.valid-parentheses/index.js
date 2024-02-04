const { showLogs } = require('../../common/utils/withTimeLog');
/**
 * 20.有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 	左括号必须用相同类型的右括号闭合。
 * 	左括号必须以正确的顺序闭合。
 * 	每个右括号都有一个对应的相同类型的左括号。
 *
 * 示例 1：
 * 输入：s = "()"
 * 输出：true
 * 示例 2：
 * 输入：s = "()[]{}"
 * 输出：true
 * 示例 3：
 * 输入：s = "(]"
 * 输出：false
 *
 * 提示：
 * 	1 <= s.length <= 104
 * 	s 仅由括号 '()[]{}' 组成
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {

};

/**
 * Test case
 */
showLogs(
  isValid,
  [[s = '()'], [s = '()[]{}'], [s = '(]']],
  [true, true, false],
);
console.log('点击跳转到题目提交:https://leetcode.cn/problems/valid-parentheses/');
