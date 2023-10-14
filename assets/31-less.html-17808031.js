import{_ as e,r as p,o as t,c as l,d as n,e as s,a as i,b as c}from"./app-df2e2230.js";const o={},u=n("h2",{id:"_1-简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-简介","aria-hidden":"true"},"#"),s(" 1. 简介")],-1),d=n("p",null,"Less（Leaner Style Sheets 的缩写）是一门 CSS 扩展语言，也称为 CSS 预处理器",-1),r=n("p",null,"做为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为 CSS 加入程序式语言的特性",-1),v=n("p",null,"它在 CSS 的语法基础上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情",-1),k={href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>常见的 CSS 预处理器：Sass、Less、Stylus</p><p>一句话：Less 是一门 CSS 预处理语言，它扩展了 CSS 的动态特性</p><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h2><p>用node运行Less（注意如果使用VSCode无需安装Less）</p><ol><li>安装 node.js</li><li>检查是否安装成功，使用 cmd 命令输入 <code>node -v</code> 查看版本即可</li><li>基于 node.js 在线安装 Less，使用 cmd 命令输入 <code>npm install -g less</code> 即可</li><li>检查是否安装成功，使用 cmd 命令 <code>lessc -v</code> 查看版本即可</li></ol><p>VSCode使用Less</p><p>本质上，Less 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件</p><p>所以，我们需要把我们的 Less 文件，编译生成为 CSS 文件，这样我们的 HTML 页面才能使用</p><p>VSCode中可以使用Easy LESS 插件</p><p>这个插件可以自动将<code>less</code>文件转义成<code>css</code>文件</p><p>只要保存一下 less 文件，会自动生成 CSS 文件</p><h2 id="_3-注释-comments" tabindex="-1"><a class="header-anchor" href="#_3-注释-comments" aria-hidden="true">#</a> 3. 注释(Comments)</h2><ul><li>单行注释 <ul><li>语法：<code>// 注释内容</code></li><li>快捷键：ctrl + /</li><li>不会在CSS中出现</li></ul></li><li>块注释 <ul><li>语法：<code>/* 注释内容 */</code></li><li>快捷键： Shift + Alt + A</li></ul></li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/* 
 * 一个块注释
 * style comment! 
*/</span>

<span class="token comment">// 这一行被注释掉了！</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-变量-variables" tabindex="-1"><a class="header-anchor" href="#_4-变量-variables" aria-hidden="true">#</a> 4. 变量(Variables)</h2><p>变量是指没有固定值，可以改变的</p><p>CSS 中的一些颜色和数值等经常使用</p><p>语法：</p><ul><li>定义变量：<code>@变量名: 值;</code></li><li>使用变量：<code>CSS属性：@变量名;</code></li></ul><h3 id="_4-1-变量命名规范" tabindex="-1"><a class="header-anchor" href="#_4-1-变量命名规范" aria-hidden="true">#</a> 4.1 变量命名规范</h3><ul><li>必须有 <code>@</code> 为前缀</li><li>不能包含特殊字符</li><li>不能以数字开头</li><li>大小写敏感</li></ul><h3 id="_4-2-基本使用" tabindex="-1"><a class="header-anchor" href="#_4-2-基本使用" aria-hidden="true">#</a> 4.2 基本使用</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// 定义变量</span>
<span class="token variable">@myColor<span class="token punctuation">:</span></span> pink<span class="token punctuation">;</span>
<span class="token comment">// 使用变量</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@myColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@myColor</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-变量插值-variable-interpolation" tabindex="-1"><a class="header-anchor" href="#_4-3-变量插值-variable-interpolation" aria-hidden="true">#</a> 4.3 变量插值(Variable Interpolation)</h3><p>变量用于选择器名、属性名、URL、<code>@import</code>语句</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@my-selector<span class="token punctuation">:</span></span> banner<span class="token punctuation">;</span>

<span class="token comment">// 需要添加 {}</span>
<span class="token selector">.@{my-selector}</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@property<span class="token punctuation">:</span></span> color<span class="token punctuation">;</span>

<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">@{property}</span><span class="token punctuation">:</span> #0ee<span class="token punctuation">;</span>
  <span class="token property">background-@{property}</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">&#39;../img&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;@{images}/white-sand.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@themes<span class="token punctuation">:</span></span> <span class="token string">&#39;../../src/themes&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token atrule">@import &#39;@</span><span class="token punctuation">{</span>themes<span class="token punctuation">}</span><span class="token operator">/</span>tidal<span class="token operator">-</span>wave.less&#39;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-延迟加载-lazy-evaluation" tabindex="-1"><a class="header-anchor" href="#_4-4-延迟加载-lazy-evaluation" aria-hidden="true">#</a> 4.4 延迟加载(Lazy Evaluation)</h3><p>当一个变量被声明多次，会取最后一次的值，并从当前作用域往外寻找变量</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@var<span class="token punctuation">:</span></span> 0<span class="token punctuation">;</span>
<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> 1<span class="token punctuation">;</span>
  <span class="token selector">.brass</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 2<span class="token punctuation">;</span>
    <span class="token property">three</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">one</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class .brass</span> <span class="token punctuation">{</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-属性名变量-properties-as-variables" tabindex="-1"><a class="header-anchor" href="#_4-5-属性名变量-properties-as-variables" aria-hidden="true">#</a> 4.5 属性名变量(Properties as Variables)</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-嵌套-nesting" tabindex="-1"><a class="header-anchor" href="#_5-嵌套-nesting" aria-hidden="true">#</a> 5. 嵌套(Nesting)</h2><h3 id="_5-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_5-1-基本使用" aria-hidden="true">#</a> 5.1 基本使用</h3><p>Less 提供了使用嵌套(nesting)代替层叠或与层叠结合使用的能力</p><p>我们经常用到选择器的嵌套：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less 嵌套写法：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
    <span class="token selector">.logo</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>用 Less 书写的代码更加简洁，并且模仿了 HTML 的组织结构</p></blockquote><h3 id="_5-2-父选择器-parent-selectors" tabindex="-1"><a class="header-anchor" href="#_5-2-父选择器-parent-selectors" aria-hidden="true">#</a> 5.2 父选择器 (Parent Selectors)</h3><p>在嵌套规则中， <code>&amp;</code> 表示父选择器，常用于给现有选择器添加伪类</p><p>例：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.header a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.header a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以使用此方法将伪选择器（pseudo-selectors）与混合（mixins）一同使用。下面是一个经典的 clearfix 技巧，重写为一个混合（mixin） (&amp; 表示当前选择器的父级）：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.clearfix</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>

  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-混合-mixins" tabindex="-1"><a class="header-anchor" href="#_6-混合-mixins" aria-hidden="true">#</a> 6. 混合(Mixins)</h2><p>混合(Mixin)是一种将一组属性从一个规则集包含(或混入)到另一个规则集的方式，可理解为复制粘贴</p><h3 id="_6-1-普通混合" tabindex="-1"><a class="header-anchor" href="#_6-1-普通混合" aria-hidden="true">#</a> 6.1 普通混合</h3><p>如定义了一个bordered类，如果希望在其它规则集中使用这些属性，只需像下面这样输入所需属性的类（class）名称即可</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token mixin-usage function">.bordered</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.bordered</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#menu a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.post a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> dotted 1px black<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> solid 2px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用类选择器时可以在选择器后边添加一个括号，这时我们实际上就创建了一个mixins，这种是不会被识别进css</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>
<span class="token selector">.myMixin()</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.p4</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.myMixin</span><span class="token punctuation">;</span> <span class="token comment">//或.myMixin();都可以</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-带参数的混合-parametric-mixins" tabindex="-1"><a class="header-anchor" href="#_6-2-带参数的混合-parametric-mixins" aria-hidden="true">#</a> 6.2 带参数的混合(Parametric Mixins)</h3><ol><li><p>混合带参数，参数需要按顺序传递</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>混合带参数并有默认值</p><p>需注意的是，就算有默认值，也要按顺序传递</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>: #ccc)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 会出错</span>
<span class="token selector">.border(<span class="token variable">@width</span>: 1px, <span class="token variable">@style</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>solid<span class="token punctuation">,</span> #ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_6-3-命名参数" tabindex="-1"><a class="header-anchor" href="#_6-3-命名参数" aria-hidden="true">#</a> 6.3 命名参数</h3><p>可以在向混合传参时指定参数名称，从而不需要按顺序传入</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>: #ccc)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span><span class="token variable">@style<span class="token punctuation">:</span></span> solid<span class="token punctuation">,</span> <span class="token variable">@color<span class="token punctuation">:</span></span> red<span class="token punctuation">,</span> <span class="token variable">@width<span class="token punctuation">:</span></span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-arguments变量" tabindex="-1"><a class="header-anchor" href="#_6-4-arguments变量" aria-hidden="true">#</a> 6.4 @arguments变量</h3><p><code>@arguments</code> 变量包含了传入的所有参数</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.box-shadow(<span class="token variable">@x</span>: 0, <span class="token variable">@y</span>: 0, <span class="token variable">@blur</span>: 1px, <span class="token variable">@color</span>: #000)</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.big-block</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.box-shadow</span><span class="token punctuation">(</span>2px<span class="token punctuation">,</span> 5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.big-block</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 2px 5px 1px #000<span class="token punctuation">;</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 2px 5px 1px #000<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 2px 5px 1px #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-匹配模式-pattern-matching" tabindex="-1"><a class="header-anchor" href="#_6-5-匹配模式-pattern-matching" aria-hidden="true">#</a> 6.5 匹配模式(Pattern-matching)</h3><p>在多个相同的混合中(参数个数必须相同)，匹配特定的混合</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.mixin(dark, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin(light, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// @_ 表示匹配所有</span>
<span class="token selector">.mixin(<span class="token variable">@_</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">@switch<span class="token punctuation">:</span></span> light<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token variable">@switch</span><span class="token punctuation">,</span> #888<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a2a2a2<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-运算-operations" tabindex="-1"><a class="header-anchor" href="#_6-6-运算-operations" aria-hidden="true">#</a> 6.6 运算(Operations)</h3><p>任何数字、颜色或者变量都可以参与运算</p><p>Less 提供了加（+）、减（-）、乘（*）、除（/）算术运算</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">/* Less 里面写 */</span>
<span class="token variable">@width<span class="token punctuation">:</span></span> 10px <span class="token operator">+</span> 5<span class="token punctuation">;</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Less 甚至还可以这样 */</span>
<span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">@width</span> <span class="token operator">+</span> 5<span class="token punctuation">)</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的 css</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 15px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li>乘号（*）和除号（/）的写法要牢记</li><li>运算符中间左右必须有个空格隔开 <code>1px + 5</code></li><li>在新版本的 Less 中，除法有变动，应将 <code>100px / 10</code> 改为 <code>(100px / 10)</code>，否则没有效果</li><li>对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位</li><li>如果两个值之间只有一个值有单位，则运算结果就取该单位</li></ul><p>计算结果以操作数最左侧的单位类型为准：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@conversion-1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// 6cm</span>
<span class="token variable">@conversion-2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// -1.5cm</span>
<span class="token variable">@conversion-3<span class="token punctuation">:</span></span> 3.1 <span class="token operator">*</span> 2cm<span class="token punctuation">;</span> <span class="token comment">// 6.2cm</span>
<span class="token variable">@conversion-4<span class="token punctuation">:</span></span> <span class="token punctuation">(</span>4px <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4px / 2</span>

<span class="token comment">// conversion is impossible</span>
<span class="token variable">@incompatible-units<span class="token punctuation">:</span></span> 1cm <span class="token operator">-</span> 1px<span class="token punctuation">;</span> <span class="token comment">// 0.97354167cm</span>

<span class="token comment">// example with variables</span>
<span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span>
<span class="token variable">@filler<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// 10%</span>
<span class="token variable">@other<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@filler</span><span class="token punctuation">;</span> <span class="token comment">// 15%</span>

<span class="token variable">@color<span class="token punctuation">:</span></span> #224488 <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// #112244</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> #112244 <span class="token operator">+</span> #111<span class="token punctuation">;</span> <span class="token comment">// #223355</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-继承-extend" tabindex="-1"><a class="header-anchor" href="#_7-继承-extend" aria-hidden="true">#</a> 7. 继承(Extend)</h2><p>Extend Syntax</p><ul><li>继承可让多个选择器应用同一组属性，最终编译为并集选择器</li><li>其性能比混合高，但灵活性比混合低</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.inline<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline,
nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-避免编译" tabindex="-1"><a class="header-anchor" href="#_8-避免编译" aria-hidden="true">#</a> 8. 避免编译</h2><p>通过加引号可以避免 Less 编译，直接把内容输出到 CSS 中</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">.banner .inline .header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token string">&#39;100px + 100px&#39;</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px <span class="token operator">+</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.banner .inline .header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token string">&#39;100px + 100px&#39;</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-函数-functions" tabindex="-1"><a class="header-anchor" href="#_9-函数-functions" aria-hidden="true">#</a> 9. 函数(Functions)</h2><p>Less 内置了多种函数用于转换颜色、处理字符串、算术运算等</p><p>这些函数在Less 函数手册中有详细介绍</p><p>函数的用法非常简单</p><p>下面这个例子将介绍如何利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 等用法：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@base<span class="token punctuation">:</span></span> #f04615<span class="token punctuation">;</span>
<span class="token variable">@width<span class="token punctuation">:</span></span> 0.5<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">@width</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns \`50%\`</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span><span class="token variable">@base</span><span class="token punctuation">,</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">spin</span><span class="token punctuation">(</span><span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@base</span><span class="token punctuation">,</span> 25%<span class="token punctuation">)</span><span class="token punctuation">,</span> 8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-导入-importing" tabindex="-1"><a class="header-anchor" href="#_10-导入-importing" aria-hidden="true">#</a> 10. 导入（Importing）</h2><p>你可以导入一个 <code>.less</code> 文件，此文件中的所有变量就可以全部使用了</p><p>如果导入的文件是 <code>.less</code> 扩展名，则可以将扩展名省略掉：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;syntax.less&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span><span class="token comment">//url可以不加但是可能会有问题</span>
<span class="token variable">@import</span> <span class="token string">&quot;library&quot;</span><span class="token punctuation">;</span> <span class="token comment">// library.less</span>
<span class="token variable">@import</span> <span class="token string">&quot;typo.css&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-导出" tabindex="-1"><a class="header-anchor" href="#_11-导出" aria-hidden="true">#</a> 11. 导出</h2><p>手动给每个less文件指定导出</p><p>写法：在 less 文件的第一行添加 <code>// out: 存储URL</code></p><p>导出必须写到第一行</p><p>例：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// out: ./mycss/pink.css</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置导出： 当前目录下，创建一个 mycss 文件夹， 生成 一个 <code>pink.css</code>（做了改名）</p><p>例：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// out: ./mycss/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置导出： 当前目录下，创建一个 mycss 文件夹， 生成 一个跟less一样的文件名（原名）</p><p>less 禁止导出：在 less 文件第一行添加</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// out: false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,116);function m(h,g){const a=p("ExternalLinkIcon");return t(),l("div",null,[u,d,r,v,n("p",null,[s("Less 中文网址："),n("a",k,[s("Less 中文网 (bootcss.com)"),i(a)])]),b])}const y=e(o,[["render",m],["__file","31-less.html.vue"]]);export{y as default};
