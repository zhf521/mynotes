import{_ as n,o as s,c as a,b as e}from"./app-9abf2eef.js";const i={},t=e(`<h2 id="_1-滑动窗口算法" tabindex="-1"><a class="header-anchor" href="#_1-滑动窗口算法" aria-hidden="true">#</a> 1. 滑动窗口算法</h2><h3 id="_1-应用场景" tabindex="-1"><a class="header-anchor" href="#_1-应用场景" aria-hidden="true">#</a> 1. 应用场景</h3><p>关键词：满足xxx条件（计算结果、出现次数、同时包含）、最长/最短、子串/子数组/子序列</p><h3 id="_2-使用思路" tabindex="-1"><a class="header-anchor" href="#_2-使用思路" aria-hidden="true">#</a> 2. 使用思路</h3><h4 id="_1-寻找最长" tabindex="-1"><a class="header-anchor" href="#_1-寻找最长" aria-hidden="true">#</a> 1. 寻找最长</h4><ul><li><p>核心：左右双指针（L，R）在起始点，R向右逐位滑动循环</p></li><li><p>每次滑动过程中</p><ul><li><p>如果：窗内元素满足条件，R向右扩大窗口，并更新最优结果</p></li><li><p>如果：窗内元素不满足条件，L向右缩小窗口</p></li></ul></li><li><p>R到达结尾</p></li></ul><h4 id="_2-寻找最短" tabindex="-1"><a class="header-anchor" href="#_2-寻找最短" aria-hidden="true">#</a> 2. 寻找最短</h4><ul><li>核心：左右双指针（L，R）在起始点，R向右逐位滑动循环</li><li>每次滑动过程中 <ul><li>如果：窗内元素满足条件，L向右缩小窗口，并更新最优结果</li><li>如果：窗内元素不满足条件，R向右扩大窗口</li></ul></li><li>R到达结尾</li></ul><h3 id="_3-模板代码" tabindex="-1"><a class="header-anchor" href="#_3-模板代码" aria-hidden="true">#</a> 3. 模板代码</h3><ul><li><p>寻找最长的模板</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>初始化1eft<span class="token punctuation">,</span>right<span class="token punctuation">,</span>result<span class="token punctuation">,</span>bestResult
<span class="token keyword">while</span><span class="token punctuation">(</span>右指针没有到结尾<span class="token punctuation">)</span><span class="token punctuation">{</span>
    窗口扩大，加入right对应元素，更新当前result
    <span class="token keyword">while</span><span class="token punctuation">(</span>result不满足要求<span class="token punctuation">)</span><span class="token punctuation">{</span>
        窗口缩小，移除1eft对应元素，1eft右移
    <span class="token punctuation">}</span>
    更新最优结果bestResult
    right<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
返回bestResult<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>寻找最短的模板</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>初始化left<span class="token punctuation">,</span>right<span class="token punctuation">,</span>result<span class="token punctuation">,</span>bestResult
<span class="token keyword">while</span><span class="token punctuation">(</span>右指针没有到结尾<span class="token punctuation">)</span><span class="token punctuation">{</span>
    窗口扩大，加入right对应元素，更新当前result
    <span class="token keyword">while</span><span class="token punctuation">(</span>result满足要求<span class="token punctuation">)</span><span class="token punctuation">{</span>
        更新最优结果bestResult
        窗口缩小，移除1eft对应元素，1eft右移
    <span class="token punctuation">}</span>
    right<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
返回bestResult<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,10),l=[t];function c(p,u){return s(),a("div",null,l)}const r=n(i,[["render",c],["__file","11-JS数据结构与算法-经典算法模板.html.vue"]]);export{r as default};
