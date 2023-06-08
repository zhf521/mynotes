import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-2f8bd7ca.js";const e={},p=t(`<h2 id="_1-throw" tabindex="-1"><a class="header-anchor" href="#_1-throw" aria-hidden="true">#</a> 1. throw</h2><p>异常处理是指预估代码执行过程中可能发生的错误，然后最大程度的避免错误的发生导致整个程序无法继续运行</p><p>总结：</p><ol><li><code>throw</code> 抛出异常信息，程序也会终止执行</li><li><code>throw</code> 后面跟的是错误提示信息</li><li><code>Error</code> 对象配合 <code>throw</code> 使用，能够设置更详细的错误信息</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>x <span class="token operator">||</span> <span class="token operator">!</span>y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// throw &#39;参数不能为空!&#39;;</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数不能为空!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> x <span class="token operator">+</span> y
  <span class="token punctuation">}</span>

  <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-try-catch" tabindex="-1"><a class="header-anchor" href="#_2-try-catch" aria-hidden="true">#</a> 2. try...catch</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
   <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查找 DOM 节点</span>
        <span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.p&#39;</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// try 代码段中执行有错误时，会执行 catch 代码段</span>
        <span class="token comment">// 查看错误信息</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
        <span class="token comment">// 终止代码继续执行</span>
        <span class="token keyword">return</span>

      <span class="token punctuation">}</span>
      <span class="token keyword">finally</span> <span class="token punctuation">{</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;执行&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;如果出现错误，我的语句不会执行&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li><code>try...catch</code> 用于捕获错误信息</li><li>将预估可能发生错误的代码写在 <code>try</code> 代码段中</li><li>如果 <code>try</code> 代码段中出现错误后，会执行 <code>catch</code> 代码段，并截获到错误信息</li><li><code>finally</code> 不管是否有错误，都会执行</li></ol><h2 id="_3-debugger" tabindex="-1"><a class="header-anchor" href="#_3-debugger" aria-hidden="true">#</a> 3. debugger</h2><p>相当于断点调试</p>`,11),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","23-JavaScript-异常处理.html.vue"]]);export{d as default};
