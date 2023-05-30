import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-4947fc1e.js";const e={},c=t(`<p>概念：一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域</p><p>闭包是一种比较特殊的函数，使用闭包能够访问函数作用域中的变量</p><p>从代码形式上看闭包是一个做为返回值的函数，如下代码所示：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 1. 闭包 : 内层函数 + 外层函数变量</span>
    <span class="token comment">// function outer() {</span>
    <span class="token comment">//   const a = 1</span>
    <span class="token comment">//   function f() {</span>
    <span class="token comment">//     console.log(a)</span>
    <span class="token comment">//   }</span>
    <span class="token comment">//   f()</span>
    <span class="token comment">// }</span>
    <span class="token comment">// outer()</span>

    <span class="token comment">// 2. 闭包的应用： 实现数据的私有。统计函数的调用次数</span>
    <span class="token comment">// let count = 1</span>
    <span class="token comment">// function fn() {</span>
    <span class="token comment">//   count++</span>
    <span class="token comment">//   console.log(\`函数被调用\${count}次\`)</span>
    <span class="token comment">// }</span>

    <span class="token comment">// 3. 闭包的写法  统计函数的调用次数</span>
    <span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">函数被调用</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">次</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> fn
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// const re = function fn() {</span>
    <span class="token comment">//   count++</span>
    <span class="token comment">//   console.log(\`函数被调用\${count}次\`)</span>
    <span class="token comment">// }</span>
    <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">re</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// const fn = function() { }  函数表达式</span>
    <span class="token comment">// 4. 闭包存在的问题： 可能会造成内存泄漏</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ul><li>怎么理解闭包？ <ul><li>闭包 = 内层函数 + 外层函数的变量</li></ul></li><li>闭包的作用？ <ul><li>封闭数据，实现数据私有，外部也可以访问函数内部的变量</li><li>闭包允许将函数与其所操作的某些数据（环境）关联起来</li></ul></li><li>闭包可能引起的问题？ <ul><li>内存泄漏</li></ul></li></ul>`,6),p=[c];function l(o,i){return s(),a("div",null,p)}const m=n(e,[["render",l],["__file","28-JavaScript-闭包.html.vue"]]);export{m as default};
