const { withTimeLog } = require("../../common/utils/withTimeLog");
/**
 * 2182.构造限制重复的字符串 [2024-01-13]
 * 给你一个字符串 s 和一个整数 repeatLimit ，用 s 中的字符构造一个新字符串 repeatLimitedString ，使任何字母 连续 出现的次数都不超过 repeatLimit 次。你不必使用 s 中的全部字符。
 * 返回 字典序最大的 repeatLimitedString 。
 * 如果在字符串 a 和 b 不同的第一个位置，字符串 a 中的字母在字母表中出现时间比字符串 b 对应的字母晚，则认为字符串 a 比字符串 b 字典序更大 。如果字符串中前 min(a.length, b.length) 个字符都相同，那么较长的字符串字典序更大。
 *  
 * 示例 1：
 * 输入：s = "cczazcc", repeatLimit = 3
 * 输出："zzcccac"
 * 解释：使用 s 中的所有字符来构造 repeatLimitedString "zzcccac"。
 * 字母 'a' 连续出现至多 1 次。
 * 字母 'c' 连续出现至多 3 次。
 * 字母 'z' 连续出现至多 2 次。
 * 因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。
 * 该字符串是字典序最大的 repeatLimitedString ，所以返回 "zzcccac" 。
 * 注意，尽管 "zzcccca" 字典序更大，但字母 'c' 连续出现超过 3 次，所以它不是一个有效的 repeatLimitedString 。
 * 示例 2：
 * 输入：s = "aababab", repeatLimit = 2
 * 输出："bbabaa"
 * 解释：
 * 使用 s 中的一些字符来构造 repeatLimitedString "bbabaa"。 
 * 字母 'a' 连续出现至多 2 次。 
 * 字母 'b' 连续出现至多 2 次。 
 * 因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。 
 * 该字符串是字典序最大的 repeatLimitedString ，所以返回 "bbabaa" 。 
 * 注意，尽管 "bbabaaa" 字典序更大，但字母 'a' 连续出现超过 2 次，所以它不是一个有效的 repeatLimitedString 。
 *  
 * 提示：
 * 	1 <= repeatLimit <= s.length <= 105
 * 	s 由小写英文字母组成
 * 
 */
/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const chars = s.split("").sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0));
    let counter = new Map();
    for (const char of chars) {
        counter.set(char,(counter.get(char)??0)+1);
    }
    const keys = counter.keys()
    let res="";
    let remain =[];
    for (const key of keys) {
        const count = counter.get(key);
        const rep = Math.min(count,repeatLimit);
        const rem = count - rep;
        res+=key.repeat(rep);
        counter.set(key,rem);
        if (remain.length) {
            const count = counter.get(key);
            const rep = Math.min(count,repeatLimit);
            const rem = count - rep;
            res+=key.repeat(rep);
            counter.set(key,rem);
            if(rem>0)remain.push(key);
        }
        if(rem>0)remain.push(key);

    }
    return res;
};

/**
 * Test case
 */
withTimeLog(() => repeatLimitedString(s = "cczazcc", repeatLimit = 3),"zzcccac");
withTimeLog(() => repeatLimitedString(s = "aababab", repeatLimit = 2),"bbabaa");//bbabaa

console.log("点击跳转到题目提交:https://leetcode.cn/problems/construct-string-with-repeat-limit/")

