import{_ as n,o as s,c as a,b as t}from"./app-e8509845.js";const p={},e=t(`<h2 id="_1-认识栈结构" tabindex="-1"><a class="header-anchor" href="#_1-认识栈结构" aria-hidden="true">#</a> 1. 认识栈结构</h2><p>栈（stack）又名堆栈，它是一种运算受限的线性表。限定仅在表尾进行插入和删除操作的线性表。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素</p><p>特点：后进先出即Last in First Out（LIFO）</p><h2 id="_2-用数组表示" tabindex="-1"><a class="header-anchor" href="#_2-用数组表示" aria-hidden="true">#</a> 2. 用数组表示</h2><p>JavaScript中没有栈，但可以使用Array实现栈的所有功能</p><p>常用操作：</p><p>入栈：<code>push</code></p><p>出栈：<code>pop</code></p><p>栈顶元素：<code>stack[stack.length - 1]</code></p><h2 id="_3-封装栈结构" tabindex="-1"><a class="header-anchor" href="#_3-封装栈结构" aria-hidden="true">#</a> 3. 封装栈结构</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//push 添加一个元素到栈顶</span>
<span class="token comment">//pop 出栈</span>
<span class="token comment">//peek 返回栈顶</span>

<span class="token comment">//isEmpty()</span>
<span class="token comment">//clear()</span>
<span class="token comment">//size()</span>
<span class="token comment">//toString()</span>

<span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
    #items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>#items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//return this.#items[this.#items.length - 1]</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#items<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#items<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
    <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>#items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#items<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//使用</span>
<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-应用" tabindex="-1"><a class="header-anchor" href="#_4-应用" aria-hidden="true">#</a> 4. 应用</h2><p>进制转换：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">convert</span><span class="token punctuation">(</span><span class="token parameter">decNumber<span class="token punctuation">,</span> base</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> remStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> number <span class="token operator">=</span> decNumber
    <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">let</span> baseString <span class="token operator">=</span> <span class="token string">&#39;0123456789ABCDEF&#39;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>number <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        remStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>number <span class="token operator">%</span> base<span class="token punctuation">)</span>
        number <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>number <span class="token operator">/</span> base<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>remStack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        string <span class="token operator">+=</span> baseString<span class="token punctuation">[</span>remStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> string
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","02-JS数据结构与算法-栈.html.vue"]]);export{r as default};
