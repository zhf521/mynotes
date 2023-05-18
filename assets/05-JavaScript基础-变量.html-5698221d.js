import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as e}from"./app-3c997379.js";const i={},l=e(`<p>变量指的是在程序中保存数据的一个容器，变量是计算机内存中存储数据的标识符，根据变量名称可以获取到内存中存储的数据，也就是说，我们向内存中存储了一个数据，然后要给这个数据起一个名字，为了是我们以后再次找到它</p><h2 id="定义变量及赋值" tabindex="-1"><a class="header-anchor" href="#定义变量及赋值" aria-hidden="true">#</a> 定义变量及赋值</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义一个变量</span>
<span class="token keyword">var</span> num

<span class="token comment">// 给一个变量赋值</span>
num <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment">// 定义一个变量的同时给其赋值</span>
<span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>一个变量名只能存储一个值</li><li>当再次给一个变量赋值的时候，前面一次的值就没有了</li><li>变量名称区分大小写（<code>JS</code> 严格区分大小写）</li></ul><h2 id="变量的命名规则和命名规范" tabindex="-1"><a class="header-anchor" href="#变量的命名规则和命名规范" aria-hidden="true">#</a> 变量的命名规则和命名规范</h2><ul><li><p>规则： 必须遵守的，不遵守就是错</p><ul><li>一个变量名称可以由数字、字母、英文下划线 <code>_</code>、美元符号 <code>$</code> 组成</li><li>严格区分大小写</li><li>不能由数字开头</li><li>不能是保留字或者关键字</li><li>不要出现空格</li></ul></li><li><p>规范： 建议遵守的（开发者默认），不遵守不会报错</p><ul><li>变量名尽量有意义（语义化）</li><li>遵循驼峰命名规则，由多个单词组成的时候，从第二个单词开始首字母大写</li><li>不要使用中文</li></ul></li></ul><h2 id="变量提示" tabindex="-1"><a class="header-anchor" href="#变量提示" aria-hidden="true">#</a> 变量提示</h2><p>变量声明的提升：可以提前使用一个稍后才声明的变量，而不会引发异常</p><p>在执行所有代码前，JS 有预解析阶段，会预读所有变量的声明（不会提升赋值，只会提升定义）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 变量声明提升的只是定义，不提升赋值！！！</span>
<span class="token comment">// 先使用变量</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>	<span class="token comment">// undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token comment">// 后定义变量</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>	<span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际的情况相当于：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
a <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[l];function t(p,o){return s(),a("div",null,c)}const u=n(i,[["render",t],["__file","05-JavaScript基础-变量.html.vue"]]);export{u as default};
