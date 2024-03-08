<p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>word</code> ，长度为 <code>n</code> ，由从 <code>0</code> 到 <code>9</code> 的数字组成。另给你一个正整数 <code>m</code> 。</p>

<p><code>word</code> 的 <strong>可整除数组</strong> <code>div</code>&nbsp; 是一个长度为 <code>n</code> 的整数数组，并满足：</p>

<ul>
	<li>如果 <code>word[0,...,i]</code> 所表示的 <strong>数值</strong> 能被 <code>m</code> 整除，<code>div[i] = 1</code></li>
	<li>否则，<code>div[i] = 0</code></li>
</ul>

<p>返回<em> </em><code>word</code> 的可整除数组。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>word = "998244353", m = 3
<strong>输出：</strong>[1,1,0,0,0,1,1,0,0]
<strong>解释：</strong>仅有 4 个前缀可以被 3 整除："9"、"99"、"998244" 和 "9982443" 。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>word = "1010", m = 10
<strong>输出：</strong>[0,1,0,1]
<strong>解释：</strong>仅有 2 个前缀可以被 10 整除："10" 和 "1010" 。
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>word.length == n</code></li>
	<li><code>word</code> 由数字 <code>0</code> 到 <code>9</code> 组成</li>
	<li><code>1 &lt;= m &lt;= 10<sup>9</sup></code></li>
</ul>
