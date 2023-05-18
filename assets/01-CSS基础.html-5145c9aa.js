import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,b as e}from"./app-9d21922c.js";const t={},l=e(`<h2 id="css-简介" tabindex="-1"><a class="header-anchor" href="#css-简介" aria-hidden="true">#</a> CSS 简介</h2><p>CSS 是层叠样式表 ( Cascading Style Sheets ) 的简称，有时我们也会称之为 <code>CSS样式表</code> 或 <code>级联样式表</code></p><p>CSS 也是一种标记语言</p><p>CSS 主要用于设置 HTML 页面中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、边距等）以及版面的布局和外观显示样式</p><p>CSS 让我们的网页更加丰富多彩，布局更加灵活自如，简单理解：CSS 可以美化 HTML , 让 HTML 更漂亮，让页面布局更简单</p><p>CSS 最大价值: 由 HTML 专注去做结构呈现，样式交给 CSS，即结构 ( HTML ) 与样式 ( CSS ) 相分离</p><h2 id="css-的引入方式" tabindex="-1"><a class="header-anchor" href="#css-的引入方式" aria-hidden="true">#</a> CSS 的引入方式</h2><p>按照 CSS 样式书写的位置（或者引入的方式），CSS 样式表可以分为三大类</p><h3 id="行内样式表-行内式" tabindex="-1"><a class="header-anchor" href="#行内样式表-行内式" aria-hidden="true">#</a> 行内样式表（行内式）</h3><p>行内样式表（内联样式表）是在元素标签内部的 style 属性中设定 CSS 样式。适合于修改简单样式</p><p>语法：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>青春不常在，抓紧谈恋爱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>style 其实就是标签的属性，在双引号中间，写法要符合 CSS 规范，是 <code>名：值</code> 的形式</li><li>可以控制当前的标签设置样式</li><li>由于书写繁琐，并且没有体现出结构与样式相分离的思想，所以不推荐大量使用，只有对当前元素添加简单样式的时候，可以考虑使用</li><li>使用行内样式表设定 CSS，通常也被称为行内式引入</li></ol><h3 id="内部样式表-嵌入式" tabindex="-1"><a class="header-anchor" href="#内部样式表-嵌入式" aria-hidden="true">#</a> 内部样式表（嵌入式）</h3><p>内部样式表（内嵌样式表）是写到 html 页面内部，是将所有的 CSS 代码抽取出来，单独放到一个 <code>&lt;style&gt;</code> 标签中</p><p>语法：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">div</span> <span class="token punctuation">{</span>
	    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>&lt;style&gt;</code> 标签理论上可以放在 HTML 文档的任何地方，但一般会放在文档的 <code>&lt;head&gt;</code> 标签中</li><li>通过此种方式，可以方便控制当前整个页面中的元素样式设置</li><li>代码结构清晰，但是并没有实现结构与样式完全分离</li><li>使用内部样式表设定 CSS，通常也被称为嵌入式引入，这种方式是我们练习时常用的方式</li></ol><h3 id="外部样式表-链接式" tabindex="-1"><a class="header-anchor" href="#外部样式表-链接式" aria-hidden="true">#</a> 外部样式表（链接式）</h3><p>实际开发都是外部样式表，适合于样式比较多的情况，核心是: 样式单独写到 <code>.css</code> 文件中，之后把 <code>.css</code> 文件引入到 HTML 页面中使用</p><p>引入外部样式表分为两步：</p><ol><li>新建一个后缀名为 <code>.css</code> 的样式文件，把所有 CSS 代码都放入此文件中</li><li>在 HTML 页面中，使用 <code>&lt;link&gt;</code> 标签引入这个文件</li></ol><p>语法：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>css文件路径<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p><ol><li><code>&lt;link&gt;</code> 标签要写在 <code>&lt;head&gt;</code> 标签中</li><li>标签属性说明： <ol><li>href ：引入的文档来自于哪里</li><li>rel ：( relation，关系）说明引入的文档与当前文档之间的关系</li></ol></li><li>外部样式的优势：样式可以复用、结构清晰、可触发浏览器的缓存机制，提高访问速度，实现了结构与样式的完全分离</li><li>实际开发中，几乎都使用外部样式，这是最推荐的使用方式</li></ol><h3 id="css-引入方式总结" tabindex="-1"><a class="header-anchor" href="#css-引入方式总结" aria-hidden="true">#</a> CSS 引入方式总结</h3><table><thead><tr><th>样式表</th><th>优点</th><th>缺点</th><th>使用情况</th><th>控制范围</th></tr></thead><tbody><tr><td>行内样式表</td><td>书写方便，权重高</td><td>结构样式混写</td><td>较少</td><td>控制一个标签</td></tr><tr><td>内部样式表</td><td>部分结构和样式相分离</td><td>没有彻底分离</td><td>较多</td><td>控制一个页面</td></tr><tr><td>外部样式表</td><td>完全实现结构和样式相分离</td><td>需要引入</td><td>最多</td><td>控制多个页面</td></tr></tbody></table><h2 id="样式表的优先级" tabindex="-1"><a class="header-anchor" href="#样式表的优先级" aria-hidden="true">#</a> 样式表的优先级</h2><p>优先级规则：行内样式 &gt; 内部样式 = 外部样式</p><ol><li>内部样式、外部样式，这二者的优先级相同，且：后面的会覆盖前面的（简记：“后来者居上”）</li><li>同一个样式表中，优先级也和编写顺序有关，且：后面的会覆盖前面的（简记：“后来者居上”）</li></ol><h2 id="css-语法规范" tabindex="-1"><a class="header-anchor" href="#css-语法规范" aria-hidden="true">#</a> CSS 语法规范</h2><p>CSS 规则由两个主要的部分构成：</p><ul><li>选择器：找到要添加样式的元素</li><li>声明块：设置具体的样式（声明块是由一个或多个声明组成的），声明的格式为： <code>属性名: 属性值;</code></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span>25px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*h1是选择器*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>选择器是用于指定 CSS 样式的 HTML 标签，花括号内是对该对象设置的具体样式</li><li>属性和属性值以“键值对”的形式出现</li><li>属性是对指定的对象设置的样式属性，例如字体大小、文本颜色等</li><li>属性和属性值之间用英文<code>:</code>分开</li><li>多个“键值对”之间用英文<code>;</code>进行区分</li></ol><p>例如：所有的样式，都包含在 <code>&lt;style&gt;</code> 标签内，表示是样式表。<code>&lt;style&gt;</code> 一般写到 <code>&lt;/head&gt;</code> 上方</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
       <span class="token selector">h4</span> <span class="token punctuation">{</span>
           <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
           <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注释的写法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 给h1元素添加样式 */</span>
<span class="token selector">h1</span><span class="token punctuation">{</span>
	<span class="token comment">/* 设置文字颜色为红色 */</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
	<span class="token comment">/* 设置文字大小为40px */</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-代码风格" tabindex="-1"><a class="header-anchor" href="#css-代码风格" aria-hidden="true">#</a> CSS 代码风格</h2><ol><li>样式格式书写</li></ol><ul><li>紧凑格式（项目上线时推荐，可减小文件体积）</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> deeppink<span class="token punctuation">;</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>展开格式（开发时推荐，便于维护和调试）</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>样式大小写风格</li></ol><ul><li>小写格式：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>大写格式：</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">H3</span> <span class="token punctuation">{</span>
    <span class="token property">COLOR</span><span class="token punctuation">:</span> PINK<span class="token punctuation">;</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强烈推荐样式选择器，属性名，属性值关键字全部使用小写字母，特殊情况除外</p><ol start="3"><li>样式空格风格</li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性值前面，冒号后面，保留一个空格，选择器（标签）和大括号中间保留空格</p>`,55),p=[l];function c(i,o){return n(),a("div",null,p)}const r=s(t,[["render",c],["__file","01-CSS基础.html.vue"]]);export{r as default};
