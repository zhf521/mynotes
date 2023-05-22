import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c,d as n,e as s,a as l,b as a}from"./app-61b56faa.js";const i={},u=a(`<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p>可以通过 <code>@font-face</code> 指定字体的具体地址，浏览器会自动下载该字体，这样就不依赖用户电脑上的字体了</p><p>语法（简写方式）：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span> 
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;情书字体&quot;</span><span class="token punctuation">;</span>
	 <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./方正手迹.ttf&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法（高兼容性写法）：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span> 
	<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">;</span> 
	<span class="token property">font-display</span><span class="token punctuation">:</span> swap<span class="token punctuation">;</span>
	<span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;webfont.eot&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* IE9 */</span> 
	<span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;webfont.eot?#iefix&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;embedded-opentype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* IE6-IE8 */</span> 
		<span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;webfont.woff2&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;webfont.woff&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;woff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox */</span> 
		<span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;webfont.ttf&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;truetype&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox、opera、Safari, Android*/</span>
		<span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;webfont.svg#webfont&#39;</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* iOS 4.1- */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定制字体" tabindex="-1"><a class="header-anchor" href="#定制字体" aria-hidden="true">#</a> 定制字体</h2>`,7),r=n("li",null,"中文的字体文件很大，使用完整的字体文件不现实，通常针对某几个文字进行单独定制",-1),k={href:"https://www.iconfont.cn/webfont#!/webfont/index",target:"_blank",rel:"noopener noreferrer"},d=a('<h2 id="字体图标" tabindex="-1"><a class="header-anchor" href="#字体图标" aria-hidden="true">#</a> 字体图标</h2><p>字体图标可以为前端工程师提供一种方便高效的图标使用方式，展示的是图标，本质属于字体</p><p>字体图标使用场景：主要用于显示网页中通用的、常用的一些小图标</p><p>字体图标的优点：</p><ul><li>轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求</li></ul><ul><li>灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等</li><li>兼容性：几乎支持所有的浏览器，请放心使用</li><li>注意： 字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化</li></ul>',6);function f(m,v){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[r,n("li",null,[s("可使用阿里 Web 字体定制工具："),n("a",k,[s("iconfont-webfont平台"),l(t)])])]),d])}const g=p(i,[["render",f],["__file","20-CSS3字体.html.vue"]]);export{g as default};
