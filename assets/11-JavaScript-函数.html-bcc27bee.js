import{_ as n,o as s,c as a,e}from"./app-3b86f382.js";const p={},t=e(`<p>对于 <code>JS</code> 来说，函数就是把任意一段代码放在一个 <strong>盒子</strong> 里面</p><p>在我想要让这段代码执行的时候，直接执行这个 <strong>盒子</strong> 里面的代码就行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这个是我们以前写的一段代码</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数，这个 {} 就是那个 “盒子”</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这个函数我们以前写的代码</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-函数定义阶段" tabindex="-1"><a class="header-anchor" href="#_1-函数定义阶段" aria-hidden="true">#</a> 1. 函数定义阶段</h2><p>定义阶段就是我们把代码 <strong>放在盒子里面</strong></p><p>我们就要学习怎么 <strong>放进去</strong>，也就是书写一个函数</p><p>我们有两种定义方式 <strong>声明式</strong> 和 <strong>赋值式</strong></p><h3 id="_1-1-声明式" tabindex="-1"><a class="header-anchor" href="#_1-1-声明式" aria-hidden="true">#</a> 1.1 声明式</h3><p>使用 <code>function</code> 这个关键字来声明一个函数</p><p>语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一段代码,即函数体</span>
<span class="token punctuation">}</span>
<span class="token comment">// function: 声明函数的关键字，表示接下来是一个函数了</span>
<span class="token comment">// fn: 函数的名字，我们自己定义的（遵循变量名的命名规则和命名规范）</span>
<span class="token comment">// (): 必须写，是用来放参数的位置（一会我们再聊）</span>
<span class="token comment">// {}: 就是我们用来放一段代码的位置（也就是我们刚才说的 “盒子”）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-赋值式" tabindex="-1"><a class="header-anchor" href="#_1-2-赋值式" aria-hidden="true">#</a> 1.2 赋值式</h3><p>其实就是和我们使用 <code>var</code> 关键字是一个道理了</p><p>首先使用 <code>var</code> 定义一个变量，把一个函数当作值直接赋值给这个变量就可以了</p><p>语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一段代码，即函数体</span>
<span class="token punctuation">}</span>
<span class="token comment">// 不需要在 function 后面书写函数的名字了，因为在前面已经有了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-函数调用阶段" tabindex="-1"><a class="header-anchor" href="#_2-函数调用阶段" aria-hidden="true">#</a> 2. 函数调用阶段</h2><h3 id="_2-1-函数的调用方式" tabindex="-1"><a class="header-anchor" href="#_2-1-函数的调用方式" aria-hidden="true">#</a> 2.1 函数的调用方式</h3><p>就是让 <strong>盒子里面</strong> 的代码执行一下</p><p>两种定义函数的方式不同，但是调用函数的方式都以一样的</p><p>函数调用就是直接写 <code>函数名()</code> 就可以了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明式函数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 fn 函数&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用函数</span>

<span class="token comment">// 赋值式函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 fn2 函数&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 调用函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：定义完一个函数以后，如果没有函数调用，那么写在 {} 里面的代码没有意义，只有调用以后才会执行</p><h3 id="_2-2-调用上的区别" tabindex="-1"><a class="header-anchor" href="#_2-2-调用上的区别" aria-hidden="true">#</a> 2.2 调用上的区别</h3><p>虽然两种定义方式的调用都是一样的，但是还是有一些区别的</p><p>声明式函数： 调用可以在定义之前或者定义之后</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 可以调用</span>

<span class="token comment">// 声明式函数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 fn 函数&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 可以调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值式函数： 调用只能在定义之后</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 会报错</span>

<span class="token comment">// 赋值式函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 fn 函数&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 可以调用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-函数的参数" tabindex="-1"><a class="header-anchor" href="#_3-函数的参数" aria-hidden="true">#</a> 3. 函数的参数</h2><p>我们在定义函数和调用函数的时候都出现过 <code>()</code>，现在我们就来说一下这个 <code>()</code> 的作用，就是用来放参数的</p><p>参数分为两种 <strong>形参</strong> 和 <strong>实参</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明式</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">形参写在这里</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一段代码</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span>实参写在这里<span class="token punctuation">)</span>

<span class="token comment">// 赋值式函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">形参写在这里</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一段代码</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span>实参写在这里<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-形参和实参的作用" tabindex="-1"><a class="header-anchor" href="#_3-1-形参和实参的作用" aria-hidden="true">#</a> 3.1 形参和实参的作用</h3><h4 id="_3-1-1-形参" tabindex="-1"><a class="header-anchor" href="#_3-1-1-形参" aria-hidden="true">#</a> 3.1.1 形参</h4><p>形参就是在函数内部可以使用的变量，在函数外部不能使用，每写一个单词，就相当于在函数内部定义了一个可以使用的变量（遵循变量名的命名规则和命名规范），多个单词之间以 <code>,</code> 分隔，如果只有形参的话，那么在函数内部使用的这个变量是没有值的，也就是 <code>undefined</code></p><p>注意：形参的值是在函数调用的时候由实参决定的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 书写一个参数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在函数内部就可以使用 num 这个变量</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">fn1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 在函数内部就可以使用 num 这个变量</span>
<span class="token punctuation">}</span>

<span class="token comment">// 书写两个参数</span>
<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在函数内部就可以使用 num1 和 num2 这两个变量</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">fun1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在函数内部就可以使用 num1 和 num2 这两个变量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-2-实参" tabindex="-1"><a class="header-anchor" href="#_3-1-2-实参" aria-hidden="true">#</a> 3.1.2 实参</h4><p>在函数调用的时候给形参赋值的，也就是说，在调用的时候是给一个实际的内容的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数内部可以使用 num </span>
<span class="token punctuation">}</span>

<span class="token comment">// 这个函数的本次调用，书写的实参是 100</span>
<span class="token comment">// 那么本次调用的时候函数内部的 num 就是 100</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> 

<span class="token comment">// 这个函数的本次调用，书写的实参是 200</span>
<span class="token comment">// 那么本次调用的时候函数内部的 num 就是 200</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数内部的形参的值，由函数调用的时候传递的实参决定，多个参数的时候，是按照顺序一一对应的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数内部可以使用 num1 和 num2</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数本次调用的时候，书写的参数是 100 和 200</span>
<span class="token comment">// 那么本次调用的时候，函数内部的 num1 就是 100，num2 就是 200</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-参数个数的关系" tabindex="-1"><a class="header-anchor" href="#_3-2-参数个数的关系" aria-hidden="true">#</a> 3.2 参数个数的关系</h3><ol><li><p>形参比实参少</p><ul><li><p>因为是按照顺序一一对应的</p></li><li><p>形参少就会拿不到实参给的值，所以在函数内部就没有办法用到这个值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数内部可以使用 num1 和 num2</span>
<span class="token punctuation">}</span>

<span class="token comment">// 本次调用的时候，传递了两个实参，100 200 和 300</span>
<span class="token comment">// 100 对应了 num1，200 对应了 num2，300 没有对应的变量</span>
<span class="token comment">// 所以在函数内部就没有办法依靠变量来使用 300 这个值</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>形参比实参多</p><ul><li><p>因为是按照顺序一一对应的</p></li><li><p>所以多出来的形参就是没有值的，就是 <code>undefined</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数内部可以使用 num1 num2 和 num3</span>
<span class="token punctuation">}</span>

<span class="token comment">// 本次调用的时候，传递了两个实参，100 和 200</span>
<span class="token comment">// 就分别对应了 num1 和 num2</span>
<span class="token comment">// 而 num3 没有实参和其对应，那么 num3 的值就是 undefined</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h3 id="_3-3-arguments对象" tabindex="-1"><a class="header-anchor" href="#_3-3-arguments对象" aria-hidden="true">#</a> 3.3 arguments对象</h3><p>函数内 <code>arguments</code> 表示它接收到的实参列表，它是一个类数组对象</p><p>类数组对象：所有属性均为从 <code>0</code> 开始的自然数序列，并且有 <code>length</code> 属性，和数组类似可以用方括号书写下标访问对象的某个属性值，但是<strong>不能调用数组的方法</strong></p><blockquote><p>数组的方法详见数组篇</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>	    <span class="token comment">// 11 22 33 44</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">// 11</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">// 22</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span>	<span class="token comment">// undefined</span>
<span class="token punctuation">}</span>

<span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-函数的return" tabindex="-1"><a class="header-anchor" href="#_4-函数的return" aria-hidden="true">#</a> 4. 函数的return</h2><p><code>return</code> 返回的意思，其实就是给函数一个 <strong>返回值</strong> 和 <strong>终断函数</strong></p><h3 id="_4-1-返回值" tabindex="-1"><a class="header-anchor" href="#_4-1-返回值" aria-hidden="true">#</a> 4.1 返回值</h3><p>函数调用本身也是一个表达式，表达式就应该有一个值出现，现在的函数执行完毕之后，是不会有结果出现的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 比如 1 + 2 是一个表达式，那么 这个表达式的结果就是 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行代码</span>
<span class="token punctuation">}</span>

<span class="token comment">// fn() 也是一个表达式，这个表达式就没有结果出现</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>return</code> 关键字就是可以给函数执行完毕一个结果，我们可以在函数内部使用 <code>return</code> 把任何内容当作这个函数运行后的结果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行代码</span>
  <span class="token keyword">return</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token comment">// 此时，fn() 这个表达式执行完毕之后就有结果出现了</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-终断函数" tabindex="-1"><a class="header-anchor" href="#_4-2-终断函数" aria-hidden="true">#</a> 4.2 终断函数</h3><p>当我开始执行函数以后，函数内部的代码就会从上到下的依次执行，必须要等到函数内的代码执行完毕，而 <code>return</code> 关键字就是可以在函数中间的位置停掉，让后面的代码不在继续执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
  
  <span class="token comment">// 写了 return 以后，后面的 4 和 5 就不会继续执行了</span>
  <span class="token keyword">return</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数调用</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-作用域" tabindex="-1"><a class="header-anchor" href="#_5-作用域" aria-hidden="true">#</a> 5. 作用域</h2><p>变量不是在所有地方都可以使用的，而这个变量的使用范围就是作用域</p><h3 id="_5-1-全局作用域" tabindex="-1"><a class="header-anchor" href="#_5-1-全局作用域" aria-hidden="true">#</a> 5.1 全局作用域</h3><ul><li><p>全局作用域是最大的作用域</p></li><li><p>在全局作用域中定义的变量可以在任何地方使用</p></li><li><p>页面打开的时候，浏览器会自动给我们生成一个全局作用域 <code>window</code></p></li><li><p>这个作用域会一直存在，直到页面关闭就销毁了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 下面两个变量都是存在在全局作用域下面的，都是可以在任意地方使用的</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_5-2-局部作用域" tabindex="-1"><a class="header-anchor" href="#_5-2-局部作用域" aria-hidden="true">#</a> 5.2 局部作用域</h3><ul><li><p>局部作用域就是在全局作用域下面有开辟出来的一个相对小一些的作用域</p></li><li><p>在局部作用域中定义的变量只能在这个局部作用域内部使用</p></li><li><p><strong>在 <code>JS</code> 中只有函数能生成一个局部作用域，别的都不行</strong></p></li><li><p>每一个函数，都是一个局部作用域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这个 num 是一个全局作用域下的变量 在任何地方都可以使用</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 下面这个变量就是一个 fn 局部作用域内部的变量</span>
  <span class="token comment">// 只能在 fn 函数内部使用</span>
  <span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">200</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_6-变量使用规则" tabindex="-1"><a class="header-anchor" href="#_6-变量使用规则" aria-hidden="true">#</a> 6. 变量使用规则</h2><p>有了作用域以后，变量就有了使用范围，也就有了使用规则，变量使用规则分为两种，<strong>访问规则</strong> 和 <strong>赋值规则</strong></p><h3 id="_6-1-访问规则" tabindex="-1"><a class="header-anchor" href="#_6-1-访问规则" aria-hidden="true">#</a> 6.1 访问规则</h3><p>当我想获取一个变量的值的时候，我们管这个行为叫做<strong>访问</strong></p><p>获取变量的规则：</p><ul><li>首先，在自己的作用域内部查找，如果有，就直接拿来使用</li><li>如果没有，就去上一级作用域查找，如果有，就拿来使用</li><li>如果没有，就继续去上一级作用域查找，依次类推</li><li>如果一直到全局作用域都没有这个变量，那么就会直接报错（该变量 is not defined）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">200</span>
  
  <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> num3 <span class="token operator">=</span> <span class="token number">300</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num3<span class="token punctuation">)</span> <span class="token comment">// 自己作用域内有，拿过来用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span> <span class="token comment">// 自己作用域内没有，就去上一级，就是 fn 的作用域里面找，发现有，拿过来用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">// 自己这没有，去上一级 fn 那里也没有，再上一级到全局作用域，发现有，直接用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 自己没有，一级一级找上去到全局都没有，就会报错</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量的访问规则 也叫做作用域的查找机制，作用域的查找机制只能是向上找，不能向下找</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">// 发现自己作用域没有，自己就是全局作用域，没有再上一级了，直接报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-赋值规则" tabindex="-1"><a class="header-anchor" href="#_6-2-赋值规则" aria-hidden="true">#</a> 6.2 赋值规则</h3><p>当你想给一个变量赋值的时候，那么就先要找到这个变量，再给它赋值</p><p>变量赋值规则：</p><ul><li>先在自己作用域内部查找，有就直接赋值</li><li>没有就去上一级作用域内部查找，有就直接赋值</li><li>还没有再去上一级作用域查找，有就直接赋值</li><li>如果一直找到全局作用域都没有，那么就把这个变量定义为全局变量，再给他赋值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// fn 调用以后，要给 num 赋值</span>
<span class="token comment">// 查看自己的作用域内部没有 num 变量</span>
<span class="token comment">// 就会向上一级查找</span>
<span class="token comment">// 上一级就是全局作用域，发现依旧没有</span>
<span class="token comment">// 那么就会把 num 定义为全局的变量，并为其赋值</span>
<span class="token comment">// 所以 fn() 以后，全局就有了一个变量叫做 num 并且值是 100</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-函数提升" tabindex="-1"><a class="header-anchor" href="#_7-函数提升" aria-hidden="true">#</a> 7. 函数提升</h2><p>声明式函数：会把所有函数声明提升到当前作用域的最前面，只提升函数声明，不提升函数调用</p><p>例：</p><p>以下代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 fn 函数&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过预解析之后可以变形为</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我是 fn 函数&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> num

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
num <span class="token operator">=</span> <span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋值式函数会按照 <code>var</code> 关键字的规则进行预解析</p><h2 id="_8-立即执行函数" tabindex="-1"><a class="header-anchor" href="#_8-立即执行函数" aria-hidden="true">#</a> 8. 立即执行函数</h2><p>避免全局变量之间的污染</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> xxx  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> xxx  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
！<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> xxx  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>xxxx<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>无需调用，立即执行，其实本质已经调用了</p><p>多个立即执行函数之间用分号隔开</p></blockquote><h2 id="_9-this" tabindex="-1"><a class="header-anchor" href="#_9-this" aria-hidden="true">#</a> 9.this</h2><p>每一个函数内部都有一个关键字是 <code>this</code> ，可以让我们直接使用的</p><blockquote><p>后面会详述</p></blockquote>`,95),c=[t];function i(o,l){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","11-JavaScript-函数.html.vue"]]);export{d as default};
