import{_ as n,o as s,c as a,b as e}from"./app-c33b8229.js";const p={},t=e(`<p>分支结构可以根据条件判断真假，来选择性的执行想要的代码</p><p>分支结构包含：</p><ol><li>if分支结构（重点）</li><li>三元运算符</li><li>switch分支结构</li></ol><h2 id="_1-if条件分支结构" tabindex="-1"><a class="header-anchor" href="#_1-if条件分支结构" aria-hidden="true">#</a> 1. if条件分支结构</h2><h3 id="_1-1-if分支结构" tabindex="-1"><a class="header-anchor" href="#_1-1-if分支结构" aria-hidden="true">#</a> 1.1 if分支结构</h3><p>语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 满足条件要执行的语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小括号内的条件结果是布尔值，为 true 时，进入大括号里执行代码，若为 false ，则不执行大括号里面代码</p><p>小括号内的结果若不是布尔类型时，会发生类型转换为布尔值，类似<code>Boolean()</code></p><p>如果大括号只有一个语句，大括号可以省略，但是，不提倡这样做</p><p>例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 用户输入</span>
<span class="token keyword">var</span> score <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;请输入成绩&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 进行判断输出</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;=</span> <span class="token number">700</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;恭喜考上清华！&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-if双分支结构" tabindex="-1"><a class="header-anchor" href="#_1-2-if双分支结构" aria-hidden="true">#</a> 1.2 if双分支结构</h3><p>如果有两个条件的时候，可以使用 if else 双分支语句</p><p>语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 满足条件要执行的语句</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不满足条件要执行的语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 用户输入</span>
<span class="token keyword">var</span> uname <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;请输入用户名:&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> pwd <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;请输入密码:&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 判断输出</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>uname <span class="token operator">===</span> <span class="token string">&#39;zhf&#39;</span> <span class="token operator">&amp;&amp;</span> pwd <span class="token operator">===</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;恭喜登录成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;用户名或者密码错误&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-if多分支结构" tabindex="-1"><a class="header-anchor" href="#_1-3-if多分支结构" aria-hidden="true">#</a> 1.3 if多分支结构</h3><p>使用场景： 适合于有多个条件的时候</p><p>例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 用户输入</span>
<span class="token keyword">var</span> score <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;请输入成绩：&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 2. 判断输出</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;成绩优秀，宝贝，你是我的骄傲&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;=</span> <span class="token number">70</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;成绩良好，宝贝，你要加油哦~~&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;成绩及格，宝贝，你很危险~&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;成绩不及格，宝贝，我不想和你说话，我只想用鞭子和你说话~&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-switch条件分支结构" tabindex="-1"><a class="header-anchor" href="#_2-switch条件分支结构" aria-hidden="true">#</a> 2. switch条件分支结构</h2><p>使用场景： 适用于有多个条件的时候，也属于分支语句，大部分情况下和 if 多分支语句功能相同</p><p>语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>要判断的变量<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> 情况<span class="token number">1</span><span class="token operator">:</span>
    情况<span class="token number">1</span>要执行的代码
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> 情况<span class="token number">2</span><span class="token operator">:</span>
    情况<span class="token number">2</span>要执行的代码
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> 情况<span class="token number">3</span><span class="token operator">:</span>
    情况<span class="token number">3</span>要执行的代码
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    上述情况都不满足的时候执行的代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：根据变量给出的数字显示是星期几</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> week <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>week<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;星期一&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;星期二&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;星期三&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;星期四&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;星期五&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;星期六&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;星期日&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;请输入一个 1 ～ 7 之间的数字&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li>switch case 语句一般用于等值判断, if 适合于区间判断</li><li>switch case 一般需要配合 break 关键字使用，没有 break 会造成 case 穿透</li><li>if 多分支语句开发要比 switch 更重要，使用也更多</li></ol><h2 id="_3-if和switch的区别" tabindex="-1"><a class="header-anchor" href="#_3-if和switch的区别" aria-hidden="true">#</a> 3. if和switch的区别</h2><ol><li>共同点 <ul><li>都能实现多分支选择，多选一</li><li>大部分情况下可以互换</li></ul></li><li>区别： <ul><li>switch…case 语句通常处理 case 为比较<strong>确定值</strong>的情况，而 if…else…语句更加灵活，通常用于<strong>范围判断</strong>(大于，等于某个范围)</li><li>switch 语句进行判断后直接执行到程序的语句，效率更高，而 if…else 语句有几种判断条件，就得判断多少次</li><li>switch 一定要注意必须是 <code>===</code> 全等，一定注意数据类型，同时注意 break 否则会有穿透效果</li><li>结论： <ul><li>当分支比较少时，if…else 语句执行效率高</li><li>当分支比较多时，switch 语句执行效率高，而且结构更清晰</li></ul></li></ul></li></ol>`,32),i=[t];function c(l,o){return s(),a("div",null,i)}const u=n(p,[["render",c],["__file","09-JavaScript-分支结构.html.vue"]]);export{u as default};
