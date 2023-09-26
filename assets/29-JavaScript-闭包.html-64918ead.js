import{_ as n,o as s,c as a,b as p}from"./app-9b844847.js";const e={},t=p(`<p>概念：一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域</p><p>闭包是一种比较特殊的函数，它的核心作用是：</p><ol><li>使用闭包能够访问函数作用域中的变量</li><li>使变量可以驻留在内存，不被回收</li></ol><p>首先我们先看一下函数的作用：</p><ol><li>避免变量全局污染</li><li>使数据私有化，外部无法修改内部数据</li><li>可以让外部可以使用内部的私有数据</li></ol><p>我们来看个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，输出结果为：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>11
12
13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时如果a不小心被修改了，输出结果将改变：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时结果会变成：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为了避免a被污染，我们可以把a放到函数里面：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
    a<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//结果为11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是普通函数就拥有的作用</p><p>但是如果我们将上面的代码中的fn再执行两遍，结果就不是我们想要的了：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
    a<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//结果为11</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//结果为11</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//结果为11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为每次fn执行完，里面的a都会被释放掉，再执行时a又会被赋值为10</p><p>我们可以使用闭包来解决这个问题：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a<span class="token operator">++</span>
    	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// 形成闭包</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 执行这个函数即可创建一个闭包</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 13</span>
f <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 为了防止内存泄漏，我们可以手动清除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li><p>怎么理解闭包？</p><ul><li><p>闭包 = 内层函数 + 引用的外层函数的变量</p></li><li><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
    fucntion <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token function">fucntion</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>闭包不一定要有return</p><ul><li>当我们想让外部变量使用我们闭包里面的变量时，可以用return</li></ul></li><li><p>闭包可能引起的问题？</p><ul><li>内存泄漏</li></ul></li></ul>`,23),c=[t];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","29-JavaScript-闭包.html.vue"]]);export{d as default};
