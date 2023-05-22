import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,b as e}from"./app-61b56faa.js";const p={},t=e(`<h2 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变" aria-hidden="true">#</a> 线性渐变</h2><p>多个颜色之间的渐变，默认从上到下渐变</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变01.png" alt="CSS3渐变01.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变01.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用关键词设置线性渐变的方向</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变02.png" alt="CSS3渐变02.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变02.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right top<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用角度设置线性渐变的方向</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变03.png" alt="CSS3渐变03.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变03.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>30deg<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调整开始渐变的位置</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变04.png" alt="CSS3渐变04.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变04.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>red 50px<span class="token punctuation">,</span>yellow 100px <span class="token punctuation">,</span>green 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变" aria-hidden="true">#</a> 径向渐变</h2><p>多个颜色之间的渐变，默认从圆心四散。（注意：不一定是正圆，要看容器本身宽高比）</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变05.png" alt="CSS3渐变05.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变05.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用关键词调整渐变圆的圆心位置</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变06.png" alt="CSS3渐变06.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变06.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at right top<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用像素值调整渐变圆的圆心位置</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变07.png" alt="CSS3渐变07.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变07.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at 100px 50px<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调整渐变形状为正圆</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变08.png" alt="CSS3渐变08.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变08.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调整形状的半径</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变09.png" alt="CSS3渐变09.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变09.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变10.png" alt="CSS3渐变10.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变10.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>50px 100px<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调整开始渐变的位置</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/CSS3渐变11.png" alt="CSS3渐变11.png" tabindex="0" loading="lazy"><figcaption>CSS3渐变11.png</figcaption></figure><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red 50px<span class="token punctuation">,</span>yellow 100px<span class="token punctuation">,</span>green 150px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重复渐变" tabindex="-1"><a class="header-anchor" href="#重复渐变" aria-hidden="true">#</a> 重复渐变</h2><p>无论线性渐变，还是径向渐变，在没有发生渐变的位置，继续进行渐变，就为重复渐变</p><ul><li>使用 <code>repeating-linear-gradient</code> 进行重复线性渐变，具体参数同 <code>linear-gradient</code></li><li>使用 <code>repeating-radial-gradient</code> 进行重复径向渐变，具体参数同 <code>radial-gradient</code></li></ul>`,37),i=[t];function c(o,l){return a(),s("div",null,i)}const r=n(p,[["render",c],["__file","19-CSS3渐变.html.vue"]]);export{r as default};
