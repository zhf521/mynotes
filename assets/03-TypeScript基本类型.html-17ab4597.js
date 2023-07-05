import{_ as a,o as e,c as t,b as s,d as n}from"./app-889e2ba8.js";const p={},l=s(`<h2 id="_1-类型声明" tabindex="-1"><a class="header-anchor" href="#_1-类型声明" aria-hidden="true">#</a> 1. 类型声明</h2><ul><li>类型声明是TS非常重要的一个特点</li><li>通过类型声明可以指定TS中变量（参数、形参）的类型</li><li>指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错</li><li>简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值</li></ul><h2 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2. 语法</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> 变量<span class="token operator">:</span> 类型

<span class="token keyword">let</span> 变量<span class="token operator">:</span> 类型 <span class="token operator">=</span> 值

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>参数<span class="token operator">:</span> 类型<span class="token punctuation">,</span> 参数<span class="token operator">:</span> 类型<span class="token punctuation">)</span><span class="token operator">:</span> 类型<span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-自动类型判断" tabindex="-1"><a class="header-anchor" href="#_3-自动类型判断" aria-hidden="true">#</a> 3. 自动类型判断</h2><ul><li>TS拥有自动的类型判断机制</li><li>当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型</li><li>所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明</li></ul><h2 id="_4-类型" tabindex="-1"><a class="header-anchor" href="#_4-类型" aria-hidden="true">#</a> 4. 类型</h2>`,7),i=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"center"}},"例子"),n("th",{style:{"text-align":"center"}},"描述")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}},"number"),n("td",{style:{"text-align":"center"}},"1, -33, 2.5"),n("td",{style:{"text-align":"center"}},"任意数字")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"string"),n("td",{style:{"text-align":"center"}},"'hi', \"hi\", `hi`"),n("td",{style:{"text-align":"center"}},"任意字符串")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"boolean"),n("td",{style:{"text-align":"center"}},"true、false"),n("td",{style:{"text-align":"center"}},"布尔值true或false")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"字面量"),n("td",{style:{"text-align":"center"}},"其本身"),n("td",{style:{"text-align":"center"}},"限制变量的值就是该字面量的值")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"any"),n("td",{style:{"text-align":"center"}},"*"),n("td",{style:{"text-align":"center"}},"任意类型")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"unknown"),n("td",{style:{"text-align":"center"}},"*"),n("td",{style:{"text-align":"center"}},"类型安全的any")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"void"),n("td",{style:{"text-align":"center"}},"空值（undefined）"),n("td",{style:{"text-align":"center"}},"没有值（或undefined）")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"never"),n("td",{style:{"text-align":"center"}},"没有值"),n("td",{style:{"text-align":"center"}},"不能是任何值")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"object"),n("td",{style:{"text-align":"center"},"name:孙悟空":""}),n("td",{style:{"text-align":"center"}},"任意的JS对象")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"array"),n("td",{style:{"text-align":"center"}},"[1,2,3]"),n("td",{style:{"text-align":"center"}},"任意JS数组")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"tuple"),n("td",{style:{"text-align":"center"}},"[4,5]"),n("td",{style:{"text-align":"center"}},"元素，TS新增类型，固定长度数组")]),n("tr",null,[n("td",{style:{"text-align":"center"}},"enum"),n("td",{style:{"text-align":"center"},"A,":"",B:""},"enum"),n("td",{style:{"text-align":"center"}},"枚举，TS中新增类型")])])],-1),o=s(`<p>演示：</p><ul><li><p>number</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> decimal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span>
<span class="token keyword">let</span> hex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span>
<span class="token keyword">let</span> binary<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span>
<span class="token keyword">let</span> octal<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span>
<span class="token keyword">let</span> big<span class="token operator">:</span> bigint <span class="token operator">=</span> <span class="token number">100n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 声明一个变量a，同时指定它的类型为number</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token comment">// a的类型设置为了number,在以后的使用过程中a的值只能是数字</span>
a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token comment">// a = &#39;hello&#39; //代码会报错，因为变量a的类型是number，不能赋值字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>boolean</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>string</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token builtin">string</span>
b <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token comment">// b = 123 //报错</span>

<span class="token comment">//声明完变量直接进行赋值</span>
<span class="token comment">// let c:boolean = true</span>
<span class="token comment">// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>字面量</p><ul><li><p>也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;blue&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;black&#39;</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">5</span>
<span class="token comment">// 可以使用 | 来连接多个类型(联合类型)</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> <span class="token string">&#39;male&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;female&#39;</span>
c <span class="token operator">=</span> <span class="token string">&#39;male&#39;</span>
c <span class="token operator">=</span> <span class="token string">&#39;female&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>any</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// any表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测</span>
<span class="token comment">// 使用TS时，不建议使用any类型</span>
<span class="token comment">// let e: any</span>
<span class="token comment">//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）</span>
<span class="token keyword">let</span> e
e <span class="token operator">=</span> <span class="token number">10</span>
e <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>unknown</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//unknown 表示未知类型的值</span>
<span class="token keyword">let</span> f<span class="token operator">:</span> <span class="token builtin">unknown</span>
f <span class="token operator">=</span> <span class="token number">10</span>
f <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
f <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">//unknown 实际上就是一个类型安全的any</span>
<span class="token comment">//unknown 类型的变量，不能直接赋值给其它变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>void</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token comment">// void用来表示空，以函数为例，就表示没有返回值的函数</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">{</span>
  <span class="token comment">// return true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>never</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// never表示永远不会返回结果</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span><span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;报错了&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>object</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// object表示一个js对象</span>
<span class="token keyword">let</span> a<span class="token operator">:</span> object

<span class="token comment">/*
{}用来指定对象中可以包含哪些属性
语法：{属性:属性值,属性名:属性值}
在属性名后边加上?，表示属性是可选的
*/</span>
<span class="token keyword">let</span> b<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
b <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;孙悟空&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// [propName:string]:any 表示任意类型的属性</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span><span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">any</span> <span class="token punctuation">}</span>
c<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;猪八戒&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>gender<span class="token operator">:</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">}</span>

<span class="token comment">/*
设置函数结构的类型声明
语法：(形参:类型,形参:类型)=&gt;返回值
*/</span>
<span class="token keyword">let</span> <span class="token function-variable function">d</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token builtin">number</span>

<span class="token comment">// &amp;表示同时</span>
<span class="token keyword">let</span> j<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
j <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;孙悟空&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>array</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
数组的类型声明
类型[]
Array&lt;类型&gt;
*/</span>
<span class="token comment">// string[] 表示字符串数组</span>
<span class="token keyword">let</span> e<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
e <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// number[] 表示数值数组</span>
<span class="token keyword">let</span> f<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> g<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
g <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tuple</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
元组，元组就是固定长度的数组
语法：[类型,类型,类型]
*/</span>
<span class="token keyword">let</span> h<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span>
h <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>enum</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
enum枚举
*/</span>
<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red<span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green

<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Green<span class="token punctuation">,</span>
  Blue<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green

<span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
  Red <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  Green <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  Blue <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> c<span class="token operator">:</span> Color <span class="token operator">=</span> Color<span class="token punctuation">.</span>Green
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_5-类型断言" tabindex="-1"><a class="header-anchor" href="#_5-类型断言" aria-hidden="true">#</a> 5. 类型断言</h2><p>有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：</p><ul><li><p>第一种</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 变量 as 类型</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token keyword">let</span> f<span class="token operator">:</span> <span class="token builtin">unknown</span>
s <span class="token operator">=</span> f <span class="token keyword">as</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>第二种</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// &lt;类型&gt;变量</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token keyword">let</span> f<span class="token operator">:</span> <span class="token builtin">unknown</span>
s <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_6-类型的别名" tabindex="-1"><a class="header-anchor" href="#_6-类型的别名" aria-hidden="true">#</a> 6. 类型的别名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">5</span>
<span class="token keyword">let</span> k<span class="token operator">:</span> myType
<span class="token keyword">let</span> l<span class="token operator">:</span> myType
<span class="token keyword">let</span> m<span class="token operator">:</span> myType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[l,i,o];function r(d,u){return e(),t("div",null,c)}const v=a(p,[["render",r],["__file","03-TypeScript基本类型.html.vue"]]);export{v as default};
