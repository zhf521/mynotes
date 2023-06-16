import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as p}from"./app-1a906948.js";const t={},e=p(`<p>链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域</p><p>使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大</p><p>链表的特点：</p><ol><li>插入、删除数据效率高<code>O(1)</code>级别（只需更改指针指向即可），随机访问效率低<code>O(n)</code>级别（需要从链头至链尾进行遍历）</li><li>和数组相比，内存空间消耗更大，因为每个存储数据的节点都需要额外的空间存储后继指针</li></ol><h2 id="_1-单链表" tabindex="-1"><a class="header-anchor" href="#_1-单链表" aria-hidden="true">#</a> 1. 单链表</h2><p>每个节点只包含一个指针，即后继指针</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/JavaScript数据结构与算法-链表01.png" alt="JavaScript数据结构与算法-链表01.png" tabindex="0" loading="lazy"><figcaption>JavaScript数据结构与算法-链表01.png</figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">//链头</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">//计数</span>
    <span class="token punctuation">}</span>

    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
             <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
             <span class="token keyword">while</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>next<span class="token operator">!==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>

            current<span class="token punctuation">.</span>next <span class="token operator">=</span> node
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//指定位置删除</span>
    <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>index<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
            <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">let</span> previous 
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>index<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    previous <span class="token operator">=</span> current
                    current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
                <span class="token punctuation">}</span>
                previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
            <span class="token keyword">return</span> current<span class="token punctuation">.</span>element
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    <span class="token comment">//获取索引值的节点</span>
    <span class="token function">getNodeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>index<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>index<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                node<span class="token operator">=</span> node<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> node
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    <span class="token comment">//指定位置删除</span>
    <span class="token function">removeAt2</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span>index<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
            <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNodeAt</span><span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
                current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
                previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span>
            <span class="token keyword">return</span> current<span class="token punctuation">.</span>element
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> 
    <span class="token punctuation">}</span>
    <span class="token comment">//判断元素是否相等</span>
    <span class="token function">equalFn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token operator">===</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//获取索引</span>
    <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equalFn</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span>current<span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> i
            <span class="token punctuation">}</span>
            current <span class="token operator">=</span> current<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//根据数据删除</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//插入</span>
    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span> index<span class="token operator">&lt;=</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
                node<span class="token punctuation">.</span>next <span class="token operator">=</span> current
                <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getNodeAt</span><span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token keyword">const</span> current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next
                node<span class="token punctuation">.</span>next <span class="token operator">=</span>  current
                previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">===</span><span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
    <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","04-JS数据结构与算法-链表.html.vue"]]);export{k as default};
