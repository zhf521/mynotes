import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as o,d as n,a as c,w as p,b as s,e as a}from"./app-84972e2d.js";const r={},d=s('<h2 id="_1-2d变换" tabindex="-1"><a class="header-anchor" href="#_1-2d变换" aria-hidden="true">#</a> 1. 2D变换</h2><p>二维坐标系如图：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3图形变换01.png" alt="CSS3图形变换01.png" tabindex="0" loading="lazy"><figcaption>CSS3图形变换01.png</figcaption></figure><h3 id="_1-1-2d位移" tabindex="-1"><a class="header-anchor" href="#_1-1-2d位移" aria-hidden="true">#</a> 1.1 2D位移</h3><p>2D 位移可以改变元素的位置，具体使用方式如下：</p>',5),u=n("li",null,[n("p",null,"先给元素添加转换属性 transform")],-1),h=n("li",null,[n("p",null,"编写 transform 的具体值，相关可选值如下："),n("ul",null,[n("li",null,"translateX：设置水平方向位移，需指定长度值；若指定的是百分比，是参考自身宽度的百分比"),n("li",null,"translateY：设置垂直方向位移，需指定长度值；若指定的是百分比，是参考自身高度的百分比"),n("li",null,"translate：一个值代表水平方向，两个值代表水平和垂直方向")])],-1),m=n("p",null,"注意点：",-1),k=n("li",null,[n("p",null,"位移与相对定位很相似，都不脱离文档流，不会影响到其它元素")],-1),_=n("li",null,[n("p",null,"与相对定位的区别：相对定位的百分比值，参考的是其父元素；定位的百分比值，参考的是其自身")],-1),f=n("li",null,[n("p",null,"浏览器针对位移有优化，与定位相比，浏览器处理位移的效率更高")],-1),v=n("li",null,[n("p",null,[a("transform 可以链式编写，例如："),n("code",null,"transform: translateX(30px) translateY(40px);")])],-1),b=n("li",null,[n("p",null,"位移对行内元素无效")],-1),g=n("p",null,"位移配合定位，可实现元素水平垂直居中",-1),x=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("box"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".box"),a(),n("span",{class:"token punctuation"},"{"),a(` 
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a("50px"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a("50px"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a("pink"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" absolute"),n("span",{class:"token punctuation"},";"),a(` 
    `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),a(" 50%"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),a(" 50%"),n("span",{class:"token punctuation"},";"),a(` 
    `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),a("-50%"),n("span",{class:"token punctuation"},","),a(" -50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(` 
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=s(`<h3 id="_1-2-2d缩放" tabindex="-1"><a class="header-anchor" href="#_1-2-2d缩放" aria-hidden="true">#</a> 1.2 2D缩放</h3><p>2D 缩放是指：让元素放大或缩小，具体使用方式如下：</p><ol><li>先给元素添加转换属性 transform</li><li>编写 transform 的具体值，相关可选值如下： <ul><li>scaleX：设置水平方向的缩放比例，值为一个数字， 1 表示不缩放，大于 1 放大，小于 1 缩小</li><li>scaleY：设置垂直方向的缩放比例，值为一个数字， 1 表示不缩放，大于 1 放大，小于 1 缩小</li><li>scale：同时设置水平方向、垂直方向的缩放比例，一个值代表同时设置水平和垂直缩放；两个值分别代表：水平缩放、垂直缩放</li></ul></li><li>注意点： <ol><li>scale 的值，是支持写负数的，但几乎不用，因为容易让人产生误解</li><li>借助缩放，可实现小于 12px 的文字</li></ol></li></ol><h3 id="_1-3-2d旋转" tabindex="-1"><a class="header-anchor" href="#_1-3-2d旋转" aria-hidden="true">#</a> 1.3 2D旋转</h3><p>2D 旋转是指：让元素在二维平面内，顺时针旋转或逆时针旋转，具体使用方式如下：</p><ol><li>先给元素添加转换属性 transform</li><li>编写 transform 的具体值，相关可选值如下： <ul><li>rotate：设置旋转角度，需指定一个角度值 ( deg )，正值顺时针，负值逆时针</li></ul></li><li>注意： <code>rotateZ(20deg)</code> 相当于 <code>rotate(20deg)</code> ，当然到了 3D 变换的时候，还能写： <code>rotate(x,x,x)</code></li></ol><h3 id="_1-4-2d扭曲" tabindex="-1"><a class="header-anchor" href="#_1-4-2d扭曲" aria-hidden="true">#</a> 1.4 2D扭曲</h3><p>2D 扭曲是指：让元素在二维平面内被“拉扯”，进而“走形”，实际开发几乎不用，了解即可，具体使用方式如下：</p><ol><li>先给元素添加转换属性 transform</li><li>编写 transform 的具体值，相关可选值如下： <ul><li>skewX：设置元素在水平方向扭曲，值为角度值，会将元素的左上角、右下角拉扯</li><li>skewY：设置元素在垂直方向扭曲，值为角度值，会将元素的左上角、右下角拉扯</li><li>skew：一个值代表 skewX ，两个值分别代表： skewX 、 skewY</li></ul></li></ol><h3 id="_1-5-多重变换" tabindex="-1"><a class="header-anchor" href="#_1-5-多重变换" aria-hidden="true">#</a> 1.5 多重变换</h3><p>多个变换，可以同时使用一个 transform 来编写</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-6-变换原点" tabindex="-1"><a class="header-anchor" href="#_1-6-变换原点" aria-hidden="true">#</a> 1.6 变换原点</h3><p>元素变换时，默认的原点是元素的中心，使用 transform-origin 可以设置变换的原点</p><p>修改变换原点对位移没有影响，对旋转和缩放会产生影响</p><p>如果提供两个值，第一个用于横坐标，第二个用于纵坐标</p><p>如果只提供一个，若是像素值，表示横坐标，纵坐标取 50% ；若是关键词，则另一个坐标取 50%</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 变换原点在元素的中心位置，百分比是相对于自身。—— 默认值 */</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>
<span class="token comment">/* 变换原点在元素的左上角 */</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>
<span class="token comment">/* 变换原点距离元素左上角 50px 50px 的位置 */</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> 50px 50px<span class="token punctuation">;</span>
<span class="token comment">/* 只写一个值的时候，第二个值默认为 50% */</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3d变换" tabindex="-1"><a class="header-anchor" href="#_2-3d变换" aria-hidden="true">#</a> 2. 3D变换</h2><h3 id="_2-1-开启3d空间" tabindex="-1"><a class="header-anchor" href="#_2-1-开启3d空间" aria-hidden="true">#</a> 2.1 开启3D空间</h3><p>重要原则：元素进行 3D 变换的首要操作：父元素必须开启 3D 空间！</p><p>使用 <code>transform-style</code> 开启 3D 空间，可选值如下：</p><ul><li>flat ： 让子元素位于此元素的二维平面内（ 2D 空间）—— 默认值</li><li>preserve-3d ： 让子元素位于此元素的三维空间内（ 3D 空间）</li></ul><h3 id="_2-2-设置景深" tabindex="-1"><a class="header-anchor" href="#_2-2-设置景深" aria-hidden="true">#</a> 2.2 设置景深</h3><p>何为景深？—— 指定观察者与 <code>z=0</code> 平面的距离，能让发生 3D 变换的元素，产生透视效果，看来更加立体</p><p>使用 perspective 设置景深，可选值如下：</p><ul><li>none ： 不指定透视 ——（默认值）</li><li>长度值 ： 指定观察者距离 z=0 平面的距离，不允许负值</li></ul><p>注意： perspective 设置给发生 3D 变换元素的父元素！</p><h3 id="_2-3-透视点位置" tabindex="-1"><a class="header-anchor" href="#_2-3-透视点位置" aria-hidden="true">#</a> 2.3 透视点位置</h3><p>所谓透视点位置，就是观察者位置；默认的透视点在元素的中心</p><p>使用 perspective-origin 设置观察者位置（透视点的位置）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 相对坐标轴往右偏移400px，往下偏移300px（相当于人蹲下300像素，然后向右移动400像素看元素） */</span>
<span class="token property">perspective-origin</span><span class="token punctuation">:</span> 400px 300px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：通常情况下，我们不需要调整透视点位置</p><h3 id="_2-4-3d位移" tabindex="-1"><a class="header-anchor" href="#_2-4-3d位移" aria-hidden="true">#</a> 2.4 3D位移</h3><p>3D 位移是在 2D 位移的基础上，可以让元素沿 z 轴位移，具体使用方式如下：</p><ol><li>先给元素添加转换属性 transform</li><li>编写 transform 的具体值， 3D 相关可选值如下： <ul><li>translateZ：设置 z 轴位移，需指定长度值，正值向屏幕外，负值向屏幕里，且不能写百分比</li><li>translate3d：第1个参数对应 x 轴，第2个参数对应 y 轴，第3个参数对应 z 轴，且均不能省略</li></ul></li></ol><h3 id="_2-5-3d旋转" tabindex="-1"><a class="header-anchor" href="#_2-5-3d旋转" aria-hidden="true">#</a> 2.5 3D旋转</h3><p>3D 旋转是在 2D 旋转的基础上，可以让元素沿 x 轴和 y 轴旋转，具体使用方式如下：</p><ol><li>先给元素添加转换属性 transform</li><li>编写 transform 的具体值， 3D 相关可选值如下： <ul><li>rotateX：设置 x 轴旋转角度，需指定一个角度值 ( deg )，面对 x 轴正方向：正值顺时针，负值逆时针</li><li>rotateY：设置 y 轴旋转角度，需指定一个角度值 ( deg )，面对 y 轴正方向：正值顺时针，负值逆时针</li><li>rotate3d：前 3 个参数分别表示坐标轴： x , y , z ，第 4 个参数表示旋转的角度，参数不允许省略。例如：<code>transform: rotate3d (1,1,1,30deg)</code> ，意思是： x 、 y 、 z 分别旋转 30 度</li></ul></li></ol><h3 id="_2-6-3d缩放" tabindex="-1"><a class="header-anchor" href="#_2-6-3d缩放" aria-hidden="true">#</a> 2.6 3D缩放</h3><p>3D 缩放是在 2D 缩放的基础上，可以让元素沿 z 轴缩放，具体使用方式如下：</p><ol><li>先给元素添加转换属性 transform</li><li>编写 transform 的具体值， 3D 相关可选值如下： <ul><li>scaleZ：设置 z 轴方向的缩放比例，值为一个数字， 1 表示不缩放，大于 1 放大，小于 1 缩小</li><li>scale3d：第1个参数对应 x 轴，第2个参数对应 y 轴，第3个参数对应 z 轴，参数不允许省略</li></ul></li></ol><h3 id="_2-7-多重变换" tabindex="-1"><a class="header-anchor" href="#_2-7-多重变换" aria-hidden="true">#</a> 2.7 多重变换</h3><p>多个变换，可以同时使用一个 transform 来编写</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span> <span class="token function">scaleZ</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>40deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意点：多重变换时，建议最后旋转</p><h3 id="_2-8-背部可见性" tabindex="-1"><a class="header-anchor" href="#_2-8-背部可见性" aria-hidden="true">#</a> 2.8 背部可见性</h3><p>使用 backface-visibility 指定元素背面，在面向用户时是否可见，常用值如下：</p><ul><li>visible：指定元素背面可见，允许显示正面的镜像。—— 默认值</li><li>hidden：指定元素背面不可见</li></ul><p>注意： backface-visibility 需要加在发生 3D 变换元素的自身上</p>`,50);function z(C,w){const e=l("CodeDemo");return i(),o("div",null,[d,n("ol",null,[u,h,n("li",null,[m,n("ol",null,[k,_,f,v,b,n("li",null,[g,c(e,{id:"code-demo-77",type:"normal",title:"Demo%20%E6%BC%94%E7%A4%BA",code:"eJxNjsEOgyAMhl+FkCzZEt28eEHnk3BBRCEiJVA3E+O7DyOH9dC03/+l6U41LpYy2g7mQ6QVMb457WHjtGtfiXXc0YLKGJPzTJzshDuS6msG1Kyu/NZcQCszafwnvZDzFGB1QynBQmDeuDlnHqJBA44R0UewK6omH7ZqREbq6pZNBH+tOccgXBwhLOwarUB1L5NQkLM/Tu9IXx8/739EGg=="},{default:p(()=>[x,D]),_:1})])])])]),y])}const X=t(r,[["render",z],["__file","26-CSS3图形变换.html.vue"]]);export{X as default};
