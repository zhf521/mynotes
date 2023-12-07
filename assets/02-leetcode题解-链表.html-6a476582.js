import{_ as p,r as o,o as c,c as l,b as n,d as s,a as e,e as t}from"./app-941e7c4d.js";const i={},d=n("h2",{id:"_1-【2】两数相加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-【2】两数相加","aria-hidden":"true"},"#"),s(" 1. 【2】两数相加")],-1),u=n("h3",{id:"_1-题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-题目描述","aria-hidden":"true"},"#"),s(" 1. 题目描述")],-1),r={href:"https://leetcode.cn/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>给你两个 <strong>非空</strong> 的链表，表示两个非负的整数。它们每位数字都是按照 <strong>逆序</strong> 的方式存储的，并且每个节点只能存储 <strong>一位</strong> 数字</p><p>请你将两个数相加，并以相同形式返回一个表示和的链表</p><p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [0], l2 = [0]
输出：[0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>每个链表中的节点数在范围 <code>[1, 100]</code> 内</li><li><code>0 &lt;= Node.val &lt;= 9</code></li><li>题目数据保证列表表示的数字不含前导零</li></ul><h3 id="_2-解题思路" tabindex="-1"><a class="header-anchor" href="#_2-解题思路" aria-hidden="true">#</a> 2. 解题思路</h3><p>遍历被相加的两个链表，模拟相加操作，将每个节点依次相加。注意进位问题</p><h3 id="_3-题解" tabindex="-1"><a class="header-anchor" href="#_3-题解" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> resList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> l1<span class="token punctuation">;</span> <span class="token comment">//定义指针，来遍历链表l1</span>
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> l2<span class="token punctuation">;</span> <span class="token comment">//定义指针，来遍历链表l2</span>
    <span class="token keyword">let</span> p3 <span class="token operator">=</span> resList<span class="token punctuation">;</span> <span class="token comment">//定义指针，指向结果链表</span>
    <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//记录每次相加之后的进位的值</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">||</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> val1 <span class="token operator">=</span> p1 <span class="token operator">?</span> p1<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> val2 <span class="token operator">=</span> p2 <span class="token operator">?</span> p2<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> sum <span class="token operator">=</span> val1 <span class="token operator">+</span> val2 <span class="token operator">+</span> carry<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sum <span class="token operator">=</span> sum <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">;</span>
            carry <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        p3<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将结果放到链表中</span>
        p3 <span class="token operator">=</span> p3<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        p1 <span class="token operator">=</span> p1 <span class="token operator">?</span> p1<span class="token punctuation">.</span>next <span class="token operator">:</span> p1<span class="token punctuation">;</span>
        p2 <span class="token operator">=</span> p2 <span class="token operator">?</span> p2<span class="token punctuation">.</span>next <span class="token operator">:</span> p2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果最后还有进位，直接放在结果链表</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>carry <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p3<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resList<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-【19】删除链表的倒数第n个结点" tabindex="-1"><a class="header-anchor" href="#_2-【19】删除链表的倒数第n个结点" aria-hidden="true">#</a> 2. 【19】删除链表的倒数第N个结点</h2><h3 id="_1-题目描述-1" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-1" aria-hidden="true">#</a> 1. 题目描述</h3>`,17),v={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], n = 1
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], n = 1
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><p>链表中结点的数目为 <code>sz</code></p></li><li><p><code>1 &lt;= sz &lt;= 30</code></p></li><li><p><code>0 &lt;= Node.val &lt;= 100</code></p></li><li><p><code>1 &lt;= n &lt;= sz</code></p></li></ul><p>进阶：你能尝试使用一趟扫描实现吗？</p><h3 id="_2-解题思路-1" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-1" aria-hidden="true">#</a> 2. 解题思路</h3><p>双指针，使用快慢指针，先让一个快指针走 n 步，然后另一个慢指针一起走，当快指针走到尾的时候，此时慢指针就指向了我们要删除的节点的前一个节点，然后删除要删除的节点即可</p><h3 id="_3-题解-1" tabindex="-1"><a class="header-anchor" href="#_3-题解-1" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置虚拟头节点</span>
    <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 设置快慢指针</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token comment">// 快指针先走n步</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 快慢指针一起走，直到快指针走到最后一个节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 删除慢指针指向的节点（即要删除的节点）</span>
    slow<span class="token punctuation">.</span>next <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-【24】两两交换链表中的节点" tabindex="-1"><a class="header-anchor" href="#_3-【24】两两交换链表中的节点" aria-hidden="true">#</a> 3. 【24】两两交换链表中的节点</h2><h3 id="_1-题目描述-2" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-2" aria-hidden="true">#</a> 1. 题目描述</h3>`,16),b={href:"https://leetcode.cn/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4]
输出：[2,1,4,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1]
输出：[1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目在范围 <code>[0, 100]</code> 内</li><li><code>0 &lt;= Node.val &lt;= 100</code></li></ul><h3 id="_2-解题思路-2" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-2" aria-hidden="true">#</a> 2. 解题思路</h3><p>使用虚拟头节点，开始时，我们创建一个虚拟头节点，让cur指向虚拟头节点，然后进行交换操作即可</p><h3 id="_3-题解-2" tabindex="-1"><a class="header-anchor" href="#_3-题解-2" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//虚拟头节点</span>
    dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">//虚拟头节点指向head</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp1 <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//记录临时节点</span>
        <span class="token keyword">let</span> temp2 <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//记录临时节点</span>
        <span class="token comment">// 交换操作</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> temp1<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">=</span> temp2<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//cur移动两位，准备下一轮交换</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-【92】反转链表-ii" tabindex="-1"><a class="header-anchor" href="#_4-【92】反转链表-ii" aria-hidden="true">#</a> 4. 【92】反转链表 II</h2><h3 id="_1-题目描述-3" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-3" aria-hidden="true">#</a> 1. 题目描述</h3>`,15),x={href:"https://leetcode.cn/problems/reverse-linked-list-ii/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>给你单链表的头指针 <code>head</code> 和两个整数 <code>left</code> 和 <code>right</code> ，其中 <code>left &lt;= right</code> 。请你反转从位置 <code>left</code> 到位置 <code>right</code> 的链表节点，返回 <strong>反转后的链表</strong></p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [5], left = 1, right = 1
输出：[5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点数目为 <code>n</code></li><li><code>1 &lt;= n &lt;= 500</code></li><li><code>-500 &lt;= Node.val &lt;= 500</code></li><li><code>1 &lt;= left &lt;= right &lt;= n</code></li></ul><p><strong>进阶：</strong> 你可以使用一趟扫描完成反转吗？</p><h3 id="_2-解题思路-3" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-3" aria-hidden="true">#</a> 2. 解题思路</h3><p>使用双指针遍历，一个pre指针指向虚拟头节点，一个cur指针指向头节点，当pre指针指向左边界的前一个节点开始依次执行交换操作即可</p><h3 id="_3-题解-3" tabindex="-1"><a class="header-anchor" href="#_3-题解-3" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">left</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">right</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseBetween</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义虚拟头节点</span>
    dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> right <span class="token operator">-</span> left<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        temp<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-【142】环形链表-ii" tabindex="-1"><a class="header-anchor" href="#_5-【142】环形链表-ii" aria-hidden="true">#</a> 5. 【142】环形链表 II</h2><h3 id="_1-题目描述-4" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-4" aria-hidden="true">#</a> 1. 题目描述</h3>`,14),y={href:"https://leetcode.cn/problems/linked-list-cycle-ii/",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>给定一个链表的头节点 <code>head</code> ，返回链表开始入环的第一个节点。 <em>如果链表无环，则返回 <code>null</code>。</em></p><p>如果链表中有某个节点，可以通过连续跟踪 <code>next</code> 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 <code>pos</code> 来表示链表尾连接到链表中的位置（<strong>索引从 0 开始</strong>）。如果 <code>pos</code> 是 <code>-1</code>，则在该链表中没有环。<strong>注意：<code>pos</code> 不作为参数进行传递</strong>，仅仅是为了标识链表的实际情况。</p><p><strong>不允许修改</strong> 链表。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围在范围 <code>[0, 104]</code> 内</li><li><code>-105 &lt;= Node.val &lt;= 105</code></li><li><code>pos</code> 的值为 <code>-1</code> 或者链表中的一个有效索引</li></ul><h3 id="_2-解题思路-4" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-4" aria-hidden="true">#</a> 2. 解题思路</h3><p>使用快慢指针，快慢指针用于判断链表是否成环，然后推导公式求得入口</p>`,13),f={href:"https://programmercarl.com/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II.html#_142-%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8ii",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="_3-题解-4" tabindex="-1"><a class="header-anchor" href="#_3-题解-4" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义快慢指针</span>
    <span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//慢指针走一步</span>
        fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//快指针走两步</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>slow <span class="token operator">==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 初次相遇</span>
            slow <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">//慢指针回到头节点</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>slow <span class="token operator">!==</span> fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//快慢指针一起走</span>
                fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//快慢指针一起走</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> slow<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-【203】移除链表元素" tabindex="-1"><a class="header-anchor" href="#_6-【203】移除链表元素" aria-hidden="true">#</a> 6. 【203】移除链表元素</h2><h3 id="_1-题目描述-5" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-5" aria-hidden="true">#</a> 1. 题目描述</h3>`,4),L={href:"https://leetcode.cn/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>给你一个链表的头节点 <code>head</code> 和一个整数 <code>val</code> ，请你删除链表中所有满足 <code>Node.val == val</code> 的节点，并返回 <strong>新的头节点</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [], val = 1
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [7,7,7,7], val = 7
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>列表中的节点数目在范围 <code>[0, 104]</code> 内</li><li><code>1 &lt;= Node.val &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 50</code></li></ul><h3 id="_2-解题思路-5" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-5" aria-hidden="true">#</a> 2. 解题思路</h3><p>使用虚拟头节点来方便我们操作，定义一个指针来遍历，遍历到符合条件的元素就删除</p><h3 id="_3-题解-5" tabindex="-1"><a class="header-anchor" href="#_3-题解-5" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//定义一个虚拟头节点</span>
    dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span> <span class="token comment">//定义一个指针来指向虚拟头节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-【206】反转链表" tabindex="-1"><a class="header-anchor" href="#_7-【206】反转链表" aria-hidden="true">#</a> 7. 【206】反转链表</h2><h3 id="_1-题目描述-6" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-6" aria-hidden="true">#</a> 1. 题目描述</h3>`,15),N={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},B=t(`<p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2]
输出：[2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = []
输出：[]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中节点的数目范围是 <code>[0, 5000]</code></li><li><code>-5000 &lt;= Node.val &lt;= 5000</code></li></ul><p>进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？</p><h3 id="_2-解题思路-6" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-6" aria-hidden="true">#</a> 2. 解题思路</h3><p>反转两个节点：将n + 1的next指向n；反转多个节点：双指针遍历链表，重复上述操作</p><p>使用双指针一前一后遍历链表,然后反转双指针</p><h3 id="_3-题解-6" tabindex="-1"><a class="header-anchor" href="#_3-题解-6" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">// 用temp指针保存一下cur的下一个节点，因为接下来要改变cur.next</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span> <span class="token comment">// 反转操作</span>
        <span class="token comment">// 更新pre和cur</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-【707】设计链表" tabindex="-1"><a class="header-anchor" href="#_8-【707】设计链表" aria-hidden="true">#</a> 8. 【707】设计链表</h2><h3 id="_1-题目描述-7" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-7" aria-hidden="true">#</a> 1. 题目描述</h3>`,17),j={href:"https://leetcode.cn/problems/design-linked-list/",target:"_blank",rel:"noopener noreferrer"},H=t(`<p>你可以选择使用单链表或者双链表，设计并实现自己的链表。</p><p>单链表中的节点应该具备两个属性：<code>val</code> 和 <code>next</code> 。<code>val</code> 是当前节点的值，<code>next</code> 是指向下一个节点的指针/引用。</p><p>如果是双向链表，则还需要属性 <code>prev</code> 以指示链表中的上一个节点。假设链表中的所有节点下标从 <strong>0</strong> 开始。</p><p>实现 <code>MyLinkedList</code> 类：</p><ul><li><code>MyLinkedList()</code> 初始化 <code>MyLinkedList</code> 对象。</li><li><code>int get(int index)</code> 获取链表中下标为 <code>index</code> 的节点的值。如果下标无效，则返回 <code>-1</code> 。</li><li><code>void addAtHead(int val)</code> 将一个值为 <code>val</code> 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。</li><li><code>void addAtTail(int val)</code> 将一个值为 <code>val</code> 的节点追加到链表中作为链表的最后一个元素。</li><li><code>void addAtIndex(int index, int val)</code> 将一个值为 <code>val</code> 的节点插入到链表中下标为 <code>index</code> 的节点之前。如果 <code>index</code> 等于链表的长度，那么该节点会被追加到链表的末尾。如果 <code>index</code> 比长度更大，该节点将 <strong>不会插入</strong> 到链表中。</li><li><code>void deleteAtIndex(int index)</code> 如果下标有效，则删除链表中下标为 <code>index</code> 的节点。</li></ul><p><strong>示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入
[&quot;MyLinkedList&quot;, &quot;addAtHead&quot;, &quot;addAtTail&quot;, &quot;addAtIndex&quot;, &quot;get&quot;, &quot;deleteAtIndex&quot;, &quot;get&quot;]
[[], [1], [3], [1, 2], [1], [1], [1]]
输出
[null, null, null, null, 2, null, 3]

解释
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1-&gt;2-&gt;3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1-&gt;3
myLinkedList.get(1);              // 返回 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= index, val &lt;= 1000</code></li><li>请不要使用内置的 LinkedList 库。</li><li>调用 <code>get</code>、<code>addAtHead</code>、<code>addAtTail</code>、<code>addAtIndex</code> 和 <code>deleteAtIndex</code> 的次数不超过 <code>2000</code> 。</li></ul><h3 id="_2-解题思路-7" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-7" aria-hidden="true">#</a> 2. 解题思路</h3><p>使用虚拟头节点解决</p><h3 id="_3-题解-7" tabindex="-1"><a class="header-anchor" href="#_3-题解-7" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 先定义节点</span>
<span class="token keyword">let</span> <span class="token function-variable function">ListNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">MyLinkedList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建一个虚拟头节点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        index<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtHead</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生成一个节点，存放的值是val</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将node.next指向第一个节点</span>
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token comment">// dummyHead.next指向新节点，使之变成第一个节点</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token comment">// 链表长度+1</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtTail</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 生成一个节点，存放的值是val</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">addAtIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        index<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    node<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyLinkedList</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteAtIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dummyHead<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        index<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-【160】相交链表" tabindex="-1"><a class="header-anchor" href="#_9-【160】相交链表" aria-hidden="true">#</a> 9. 【160】相交链表</h2><h3 id="_1-题目描述-8" tabindex="-1"><a class="header-anchor" href="#_1-题目描述-8" aria-hidden="true">#</a> 1. 题目描述</h3>`,15),I={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists/",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>给你两个单链表的头节点 <code>headA</code> 和 <code>headB</code> ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 <code>null</code> 。</p><p>图示两个链表在节点 <code>c1</code> 开始相交：</p><p>题目数据 <strong>保证</strong> 整个链式结构中不存在环。</p><p><strong>注意</strong>，函数返回结果后，链表必须 <strong>保持其原始结构</strong> 。</p><p><strong>自定义评测：</strong></p><p><strong>评测系统</strong> 的输入如下（你设计的程序 <strong>不适用</strong> 此输入）：</p><ul><li><code>intersectVal</code> - 相交的起始节点的值。如果不存在相交节点，这一值为 <code>0</code></li><li><code>listA</code> - 第一个链表</li><li><code>listB</code> - 第二个链表</li><li><code>skipA</code> - 在 <code>listA</code> 中（从头节点开始）跳到交叉节点的节点数</li><li><code>skipB</code> - 在 <code>listB</code> 中（从头节点开始）跳到交叉节点的节点数</li></ul><p>评测系统将根据这些输入创建链式数据结构，并将两个头节点 <code>headA</code> 和 <code>headB</code> 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 <strong>视作正确答案</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at &#39;8&#39;
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at &#39;2&#39;
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li><code>listA</code> 中节点数目为 <code>m</code></li><li><code>listB</code> 中节点数目为 <code>n</code></li><li><code>1 &lt;= m, n &lt;= 3 * 104</code></li><li><code>1 &lt;= Node.val &lt;= 105</code></li><li><code>0 &lt;= skipA &lt;= m</code></li><li><code>0 &lt;= skipB &lt;= n</code></li><li>如果 <code>listA</code> 和 <code>listB</code> 没有交点，<code>intersectVal</code> 为 <code>0</code></li><li>如果 <code>listA</code> 和 <code>listB</code> 有交点，<code>intersectVal == listA[skipA] == listB[skipB]</code></li></ul><p>进阶：你能否设计一个时间复杂度 <code>O(m + n)</code> 、仅用 <code>O(1)</code> 内存的解决方案？</p><h3 id="_2-解题思路-8" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-8" aria-hidden="true">#</a> 2. 解题思路</h3><p>定义两个指针分别指向A、B，两个指针同时遍历，遍历到尾部就去遍历另一个，直到两个指针相遇</p><h3 id="_3-题解-8" tabindex="-1"><a class="header-anchor" href="#_3-题解-8" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val) <span class="token punctuation">{</span>
 *     this.val = val;
 *     this.next = null;
 * <span class="token punctuation">}</span>
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headA</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headB</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> p1 <span class="token operator">=</span> headA<span class="token punctuation">;</span>
    <span class="token keyword">let</span> p2 <span class="token operator">=</span> headB<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">!==</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            p1 <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            p1 <span class="token operator">=</span> p1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            p2 <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            p2 <span class="token operator">=</span> p2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> p1<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function q(M,z){const a=o("ExternalLinkIcon");return c(),l("div",null,[d,u,n("p",null,[s("来源："),n("a",r,[s("https://leetcode.cn/problems/add-two-numbers/"),e(a)])]),k,n("p",null,[s("来源："),n("a",v,[s("https://leetcode.cn/problems/remove-nth-node-from-end-of-list/"),e(a)])]),m,n("p",null,[s("来源："),n("a",b,[s("https://leetcode.cn/problems/swap-nodes-in-pairs/"),e(a)])]),h,n("p",null,[s("来源："),n("a",x,[s("https://leetcode.cn/problems/reverse-linked-list-ii/"),e(a)])]),g,n("p",null,[s("来源："),n("a",y,[s("https://leetcode.cn/problems/linked-list-cycle-ii/"),e(a)])]),w,n("p",null,[s("详见："),n("a",f,[s("代码随想录"),e(a)])]),_,n("p",null,[s("来源："),n("a",L,[s("https://leetcode.cn/problems/remove-linked-list-elements/"),e(a)])]),A,n("p",null,[s("来源："),n("a",N,[s("https://leetcode.cn/problems/reverse-linked-list/"),e(a)])]),B,n("p",null,[s("来源："),n("a",j,[s("https://leetcode.cn/problems/design-linked-list/"),e(a)])]),H,n("p",null,[s("来源："),n("a",I,[s("https://leetcode.cn/problems/intersection-of-two-linked-lists/"),e(a)])]),E])}const D=p(i,[["render",q],["__file","02-leetcode题解-链表.html.vue"]]);export{D as default};
