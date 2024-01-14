const {withTimeLog} = require("../../common/utils/withTimeLog");
/**
 * 构造有效字符串的最少插入数
 *
 * <p>给你一个字符串 <code>word</code> ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 <code>word</code> <strong>有效</strong> 需要插入的最少字母数。</p>

 <p>如果字符串可以由 "abc" 串联多次得到，则认为该字符串 <strong>有效</strong> 。</p>

 <p>&nbsp;</p>

 <p><strong>示例 1：</strong></p>

 <pre><strong>输入：</strong>word = "b"
 <strong>输出：</strong>2
 <strong>解释：</strong>在 "b" 之前插入 "a" ，在 "b" 之后插入 "c" 可以得到有效字符串 "<strong>a</strong>b<strong>c</strong>" 。
 </pre>

 <p><strong>示例 2：</strong></p>

 <pre><strong>输入：</strong>word = "aaa"
 <strong>输出：</strong>6
 <strong>解释：</strong>在每个 "a" 之后依次插入 "b" 和 "c" 可以得到有效字符串 "a<strong>bc</strong>a<strong>bc</strong>a<strong>bc</strong>" 。
 </pre>

 <p><strong>示例 3：</strong></p>

 <pre><strong>输入：</strong>word = "abc"
 <strong>输出：</strong>0
 <strong>解释：</strong>word 已经是有效字符串，不需要进行修改。
 </pre>

 <p>&nbsp;</p>

 <p><strong>提示：</strong></p>

 <ul>
 <li><code>1 &lt;= word.length &lt;= 50</code></li>
 <li><code>word</code> 仅由字母 "a"、"b" 和 "c" 组成。</li>
 </ul>
 :
 *
 */
const test = (word) => {
    const stuck = [];
    let count = 0;
    const getNext = (letter) => {
        if (!letter || letter === 'c') return 'a';
        return letter === 'a' ? 'b' : 'c';
    }
    while (word?.length > 0 || (stuck.at(-1) !== 'c' && word?.length === 0)) {
        const letter = word[0];
        const next = getNext(stuck.at(-1));
        if (next === letter) {
            stuck.push(letter);
            word = word.slice(1);
        } else {
            stuck.push(next);
            ++count;
        }
    }
    return count;
}
/**
 * 迪佬写法 强啊
 * @param word
 * @returns {number}
 */
const test1 = (word) => {
    const len = word.length;
    let count = 1;
    for (let i = 1; i < len; i++) {
        if (word[i] <= word[i - 1]) count++;
    }
    return count * 3 - len;
}

/**
 * Test case
 */
withTimeLog(() => test('b'),2);
withTimeLog(() => test('aaa'),6);
withTimeLog(() => test('abc'),0);

withTimeLog(() => test1('b'),2);
withTimeLog(() => test1('aaa'),6);
withTimeLog(() => test1('abc'),0);

