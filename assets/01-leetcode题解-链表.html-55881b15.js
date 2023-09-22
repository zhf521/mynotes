import{_ as p,r as o,o as l,c,d as n,e as s,a as e,b as t}from"./app-f0a1caf1.js";const i={},r=n("h2",{id:"_1-【2】两数相加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-【2】两数相加","aria-hidden":"true"},"#"),s(" 1. 【2】两数相加")],-1),d=n("h3",{id:"_1-题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-题目描述","aria-hidden":"true"},"#"),s(" 1. 题目描述")],-1),u={href:"https://leetcode.cn/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>给你两个 <strong>非空</strong> 的链表，表示两个非负的整数。它们每位数字都是按照 <strong>逆序</strong> 的方式存储的，并且每个节点只能存储 <strong>一位</strong> 数字</p><p>请你将两个数相加，并以相同形式返回一个表示和的链表</p><p>你可以假设除了数字 0 之外，这两个数都不会以 0 开头</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [2,4,3], l2 = [5,6,4]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示：</strong></p><ul><li>链表中结点的数目为 <code>sz</code></li><li><code>1 &lt;= sz &lt;= 30</code></li><li><code>0 &lt;= Node.val &lt;= 100</code></li><li><code>1 &lt;= n &lt;= sz</code></li></ul><p>**进阶：**你能尝试使用一趟扫描实现吗？</p><h3 id="_2-解题思路-1" tabindex="-1"><a class="header-anchor" href="#_2-解题思路-1" aria-hidden="true">#</a> 2. 解题思路</h3><p>双指针，使用快慢指针，先让一个快指针走 n 步，然后另一个慢指针一起走，当第快指针走到尾的时候，此时慢指针就指向了我们要删除的节点，进行删除即可</p><h3 id="_3-题解-1" tabindex="-1"><a class="header-anchor" href="#_3-题解-1" aria-hidden="true">#</a> 3. 题解</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function b(h,x){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,d,n("p",null,[s("来源："),n("a",u,[s("https://leetcode.cn/problems/add-two-numbers/"),e(a)])]),k,n("p",null,[s("来源："),n("a",v,[s("https://leetcode.cn/problems/remove-nth-node-from-end-of-list/"),e(a)])]),m])}const w=p(i,[["render",b],["__file","01-leetcode题解-链表.html.vue"]]);export{w as default};
