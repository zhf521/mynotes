import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a as s,w as t,b as l,d as n,e as a}from"./app-96ebe5f0.js";const r={},u=l(`<h2 id="_1-伸缩盒模型" tabindex="-1"><a class="header-anchor" href="#_1-伸缩盒模型" aria-hidden="true">#</a> 1. 伸缩盒模型</h2><p>2009 年， W3C 提出了一种新的盒子模型 —— Flexible Box （伸缩盒模型，又称：弹性盒子）</p><p>它可以轻松的控制：元素分布方式、元素对齐方式、元素视觉顺序 .......</p><p>截止目前，除了在部分 IE 浏览器不支持，其他浏览器均已全部支持</p><p>伸缩盒模型的出现，逐渐演变出了一套新的布局方案 —— flex 布局</p><p>小贴士：</p><ol><li>传统布局是指：基于传统盒状模型，主要靠： display 属性 + position 属性 + float 属性</li><li>flex 布局目前在移动端应用比较广泛，因为传统布局不能很好的呈现在移动设备上</li></ol><h2 id="_2-伸缩容器、伸缩项目" tabindex="-1"><a class="header-anchor" href="#_2-伸缩容器、伸缩项目" aria-hidden="true">#</a> 2. 伸缩容器、伸缩项目</h2><ul><li>伸缩容器：开启了 flex 的元素，就是伸缩容器 <ul><li>给元素设置： <code>display: flex</code> 或 <code>display: inline-flex</code> ，该元素就变为了伸缩容器</li><li><code>display: inline-flex</code> 很少使用，因为可以给多个伸缩容器的父容器，也设置为伸缩容器</li><li>一个元素可以同时是：伸缩容器、伸缩项目</li></ul></li><li>伸缩项目：伸缩容器所有子元素自动成为了伸缩项目 <ul><li>仅伸缩容器的子元素成为了伸缩项目，孙子元素、重孙子元素等后代，不是伸缩项目</li><li>无论原来是哪种元素（块、行内块、行内），一旦成为了伸缩项目，全都会“块状化”</li></ul></li></ul><h2 id="_3-主轴与侧轴" tabindex="-1"><a class="header-anchor" href="#_3-主轴与侧轴" aria-hidden="true">#</a> 3. 主轴与侧轴</h2><ul><li>主轴： 伸缩项目沿着主轴排列，主轴默认是水平的，默认方向是：从左到右（左边是起点，右边是终点）</li><li>侧轴： 与主轴垂直的就是侧轴，侧轴默认是垂直的，默认方向是：从上到下（上边是起点，下边是终点）</li></ul><h2 id="_4-主轴方向" tabindex="-1"><a class="header-anchor" href="#_4-主轴方向" aria-hidden="true">#</a> 4. 主轴方向</h2><p>属性名：<code>flex-direction</code></p><p>常用值如下：</p><ol><li>row ：主轴方向水平从左到右 —— 默认值</li><li>row-reverse ：主轴方向水平从右到左</li><li>column ：主轴方向垂直从上到下</li><li>column-reverse ：主轴方向垂直从下到上</li></ol><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3伸缩盒模型01.png" alt="CSS3伸缩盒模型01.png" tabindex="0" loading="lazy"><figcaption>CSS3伸缩盒模型01.png</figcaption></figure><p>注意：改变了主轴的方向，侧轴方向也随之改变</p><h2 id="_5-主轴换行方式" tabindex="-1"><a class="header-anchor" href="#_5-主轴换行方式" aria-hidden="true">#</a> 5. 主轴换行方式</h2><p>属性名：<code>flex-wrap</code></p><p>常用值如下：</p><ol><li>nowrap ：默认值，不换行</li></ol><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3伸缩盒模型02.png" alt="CSS3伸缩盒模型02.png" tabindex="0" loading="lazy"><figcaption>CSS3伸缩盒模型02.png</figcaption></figure><ol start="2"><li>wrap ：自动换行，伸缩容器不够自动换行</li></ol><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3伸缩盒模型03.png" alt="CSS3伸缩盒模型03.png" tabindex="0" loading="lazy"><figcaption>CSS3伸缩盒模型03.png</figcaption></figure><ol start="3"><li>wrap-reverse ：反向换行</li></ol><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3伸缩盒模型04.png" alt="CSS3伸缩盒模型04.png" tabindex="0" loading="lazy"><figcaption>CSS3伸缩盒模型04.png</figcaption></figure><h2 id="_6-flex-flow" tabindex="-1"><a class="header-anchor" href="#_6-flex-flow" aria-hidden="true">#</a> 6. flex-flow</h2><p>flex-flow 是一个复合属性，复合了 flex-direction 和 flex-wrap 两个属性。值没有顺序要求</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-主轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_7-主轴对齐方式" aria-hidden="true">#</a> 7. 主轴对齐方式</h2><p>属性名：<code>justify-content</code></p><p>常用值如下：</p><ol><li>flex-start ：主轴起点对齐。—— 默认值</li><li>flex-end ：主轴终点对齐</li><li>center ：居中对齐</li><li>space-between ：均匀分布，两端对齐（最常用）</li><li>space-around ：均匀分布，两端距离是中间距离的一半</li><li>space-evenly ：均匀分布，两端距离与中间距离一致</li></ol><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3伸缩盒模型05.png" alt="CSS3伸缩盒模型05.png" tabindex="0" loading="lazy"><figcaption>CSS3伸缩盒模型05.png</figcaption></figure><h2 id="_8-侧轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_8-侧轴对齐方式" aria-hidden="true">#</a> 8. 侧轴对齐方式</h2><h3 id="_8-1-一行的情况" tabindex="-1"><a class="header-anchor" href="#_8-1-一行的情况" aria-hidden="true">#</a> 8.1 一行的情况</h3><p>所需属性： <code>align-items</code></p><p>常用值如下：</p><ol><li>flex-start ：侧轴的起点对齐</li><li>flex-end ：侧轴的终点对齐</li><li>center ：侧轴的中点对齐</li><li>baseline : 伸缩项目的第一行文字的基线对齐</li><li>stretch ：如果伸缩项目未设置高度，将占满整个容器的高度。—— （默认值）</li></ol><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3伸缩盒模型06.png" alt="CSS3伸缩盒模型06.png" tabindex="0" loading="lazy"><figcaption>CSS3伸缩盒模型06.png</figcaption></figure><h3 id="_8-2-多行的情况" tabindex="-1"><a class="header-anchor" href="#_8-2-多行的情况" aria-hidden="true">#</a> 8.2 多行的情况</h3><p>所需属性： <code>align-content</code></p><p>常用值如下：</p><ol><li>flex-start ：与侧轴的起点对齐</li><li>flex-end ：与侧轴的终点对齐</li><li>center ：与侧轴的中点对齐</li><li>space-between ：与侧轴两端对齐，中间平均分布</li><li>space-around ：伸缩项目间的距离相等，比距边缘大一倍</li><li>space-evenly : 在侧轴上完全平分</li><li>stretch ：占满整个侧轴。—— 默认值</li></ol><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3伸缩盒模型07.png" alt="CSS3伸缩盒模型07.png" tabindex="0" loading="lazy"><figcaption>CSS3伸缩盒模型07.png</figcaption></figure><h2 id="_9-flex实现水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_9-flex实现水平垂直居中" aria-hidden="true">#</a> 9. flex实现水平垂直居中</h2><p>方法一：父容器开启 flex 布局，随后使用 justify-content 和 align-items 实现水平垂直居中</p>`,47),d=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("outer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inner"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(` 
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".outer"),a(),n("span",{class:"token punctuation"},"{"),a(` 
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px"),n("span",{class:"token punctuation"},";"),a(` 
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 400px"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #888"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(` 
`),n("span",{class:"token punctuation"},"}"),a(` 
`),n("span",{class:"token selector"},".inner"),a(),n("span",{class:"token punctuation"},"{"),a(` 
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100px"),n("span",{class:"token punctuation"},";"),a(` 
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 100px"),n("span",{class:"token punctuation"},";"),a(` 
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" orange"),n("span",{class:"token punctuation"},";"),a(` 
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,"方法二：父容器开启 flex 布局，随后子元素 margin: auto",-1),f=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[a(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("outer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inner"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(` 
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(` 
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".outer"),a(),n("span",{class:"token punctuation"},"{"),a(` 
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 400px"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #888"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(` 
`),n("span",{class:"token punctuation"},"}"),a(` 
`),n("span",{class:"token selector"},".inner"),a(),n("span",{class:"token punctuation"},"{"),a(` 
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100px"),n("span",{class:"token punctuation"},";"),a(` 
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 100px"),n("span",{class:"token punctuation"},";"),a(` 
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" orange"),n("span",{class:"token punctuation"},";"),a(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" auto"),n("span",{class:"token punctuation"},";"),a(` 
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=l('<h2 id="_10-伸缩性" tabindex="-1"><a class="header-anchor" href="#_10-伸缩性" aria-hidden="true">#</a> 10. 伸缩性</h2><h3 id="_10-1-flex-basis" tabindex="-1"><a class="header-anchor" href="#_10-1-flex-basis" aria-hidden="true">#</a> 10.1 flex-basis</h3><p>概念： flex-basis 设置的是主轴方向的基准长度，会让宽度或高度失效</p><p>备注：主轴横向：宽度失效；主轴纵向：高度失效</p><p>作用：浏览器根据这个属性设置的值，计算主轴上是否有多余空间，默认值 auto ，即：伸缩项目的宽或高</p><h3 id="_10-2-flex-grow-伸" tabindex="-1"><a class="header-anchor" href="#_10-2-flex-grow-伸" aria-hidden="true">#</a> 10.2 flex-grow（伸）</h3><p>概念： flex-grow 定义伸缩项目的放大比例，默认为 0 ，即：纵使主轴存在剩余空间，也不拉伸 （放大）</p><p>规则：</p><ol><li>若所有伸缩项目的 flex-grow 值都为 1 ，则：它们将等分剩余空间（如果有空间的话）</li><li>若三个伸缩项目的 flex-grow 值分别为： 1 、 2 、 3 ，则：分别瓜分到： 1/6 、 2/6 、 3/6 的空间</li></ol><h3 id="_10-3-flex-shrink-缩" tabindex="-1"><a class="header-anchor" href="#_10-3-flex-shrink-缩" aria-hidden="true">#</a> 10.3 flex-shrink（缩）</h3><p>概念： flex-shrink 定义了项目的压缩比例，默认为 1 ，即：如果空间不足，该项目将会缩小</p><p>收缩项目的计算，略微复杂一点，我们拿一个场景举例：</p><p>例如： 三个收缩项目，宽度分别为： 200px 、 300px 、 200px ，它们的 flex-shrink 值分别为： 1 、 2 、 3</p><p>若想刚好容纳下三个项目，需要总宽度为 700px ，但目前容器只有 400px ，还差 300px 所以每个人都要收缩一下才可以放下，具体收缩的值，这样计算：</p><ol><li>计算分母： <code>(200×1) + (300×2) + (200×3) = 1400</code></li><li>计算比例： <ol><li>项目一： <code>(200×1) / 1400 = 比例值1</code></li><li>项目二： <code>(300×2) / 1400 = 比例值2</code></li><li>项目三： <code>(200×3) / 1400 = 比例值3</code></li></ol></li><li>计算最终收缩大小： <ol><li>项目一需要收缩： <code>比例值1 × 300</code></li><li>项目二需要收缩： <code>比例值2 × 300</code></li><li>项目三需要收缩： <code>比例值3 × 300</code></li></ol></li></ol><h2 id="_11-flex复合属性" tabindex="-1"><a class="header-anchor" href="#_11-flex复合属性" aria-hidden="true">#</a> 11. flex复合属性</h2><p>flex 是复合属性，复合了： flex-grow 、 flex-shrink 、 flex-basis 三个属性，默认值为 <code>0 1 auto</code></p><ul><li>如果写 <code>flex:1 1 auto</code> ，则可简写为： <code>flex:auto</code></li><li>如果写 <code>flex: 1 1 0</code> ，则可简写为： <code>flex: 1</code></li><li>如果写 <code>flex: 0 0 auto</code> ，则可简写为： <code>flex: none</code></li><li>如果写 <code>flex: 0 1 auto</code> ，则可简写为： <code>flex: 0 auto</code> —— 即 flex 初始值</li></ul><h2 id="_12-项目排序" tabindex="-1"><a class="header-anchor" href="#_12-项目排序" aria-hidden="true">#</a> 12. 项目排序</h2><p>order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0</p><h2 id="_13-单独对齐" tabindex="-1"><a class="header-anchor" href="#_13-单独对齐" aria-hidden="true">#</a> 13. 单独对齐</h2><p>通过 align-self 属性，可以单独调整某个伸缩项目的对齐方式</p><p>默认值为 auto ，表示继承父元素的 align-items 属性</p>',23);function x(b,_){const e=o("CodeDemo");return c(),p("div",null,[u,s(e,{id:"code-demo-313",type:"normal",title:"Demo%20%E6%BC%94%E7%A4%BA",code:"eJxlj90OgjAMhV9lmbf+YOIFQeRJdjPHgOnoyFZUQnh364xEwsWW5jvt6enIG2wtz3hemgdTVoZwEdz1qL3ghQCBC8EARCE/EC2YgLngW65CIKN9HGYjMYFPU2KTsVOSdK9zJI02dYM/9CFXqe61dz2UO+Ws8xnbpGkapdKEzsohY5XV3+ZbH9BUA3UCaiAfRb/2UZPW1LAzqNswc9o50dvH4MtQx3WoP7RO5byEWkdHOnd6A4YCbag="},{default:t(()=>[d,h]),_:1}),g,s(e,{id:"code-demo-320",type:"normal",title:"Demo%20%E6%BC%94%E7%A4%BA",code:"eJxlj0EOwiAQRa8ywa3WmrhoaO1J2GBBIFJogGpN07uLk2jauCAh72f+m5mJTr0llEAjzAM6y2O8MOLHJAMjLXMsbQLjHAbNMdMWmPt9yJ50MeamAodhzoylpxFJUziX5TDVH6ClUTqtyZV3dxX86MSh89YHCruqqjASJg6WvyjcrJzqXLjkV+AO2/4TtiH5Clbo3+ADd0qio+dBGUeBj8mjIp+yvAGuQmAe"},{default:t(()=>[f,k]),_:1}),m])}const S=i(r,[["render",x],["__file","28-CSS3伸缩盒模型.html.vue"]]);export{S as default};
