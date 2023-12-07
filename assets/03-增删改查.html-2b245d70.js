import{_ as n,o as s,c as a,e as t}from"./app-8478f89d.js";const p={},e=t(`<p>我们创建一个文章的增删改查案例</p><h2 id="_1-在数据库中增加新模型" tabindex="-1"><a class="header-anchor" href="#_1-在数据库中增加新模型" aria-hidden="true">#</a> 1. 在数据库中增加新模型</h2><p>我们增加文章和栏目的模型：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// schema.prisma</span>

generator client <span class="token punctuation">{</span>
  provider <span class="token operator">=</span> <span class="token string">&quot;prisma-client-js&quot;</span>
<span class="token punctuation">}</span>

datasource db <span class="token punctuation">{</span>
  provider <span class="token operator">=</span> <span class="token string">&quot;mysql&quot;</span>
  url      <span class="token operator">=</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string">&quot;DATABASE_URL&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

model user <span class="token punctuation">{</span>
  id       Int    <span class="token decorator"><span class="token at operator">@</span><span class="token function">id</span></span> @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">db</span></span><span class="token punctuation">.</span>UnsignedInt
  name     String <span class="token decorator"><span class="token at operator">@</span><span class="token function">unique</span></span>
  password String
<span class="token punctuation">}</span>

model article <span class="token punctuation">{</span>
  id         Int      <span class="token decorator"><span class="token at operator">@</span><span class="token function">id</span></span> @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">db</span></span><span class="token punctuation">.</span>UnsignedInt
  title      String
  content    String   <span class="token decorator"><span class="token at operator">@</span><span class="token function">db</span></span><span class="token punctuation">.</span>Text
  category   category <span class="token decorator"><span class="token at operator">@</span><span class="token function">relation</span></span><span class="token punctuation">(</span>fields<span class="token operator">:</span> <span class="token punctuation">[</span>categoryId<span class="token punctuation">]</span><span class="token punctuation">,</span> references<span class="token operator">:</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span> onDelete<span class="token operator">:</span> Cascade<span class="token punctuation">)</span>
  categoryId Int      <span class="token decorator"><span class="token at operator">@</span><span class="token function">db</span></span><span class="token punctuation">.</span>UnsignedInt
<span class="token punctuation">}</span>

model category <span class="token punctuation">{</span>
  id       Int       <span class="token decorator"><span class="token at operator">@</span><span class="token function">id</span></span> @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">db</span></span><span class="token punctuation">.</span>UnsignedInt
  title    String
  articles article<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建Prisma模型后，生成SQL迁移文件并在数据库运行它们：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx prisma migrate dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-创建文章模块" tabindex="-1"><a class="header-anchor" href="#_2-创建文章模块" aria-hidden="true">#</a> 2. 创建文章模块</h2><p>我们可以使用命令直接生成资源：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nest g res article
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选择REST API，然后选择使用CRUD即可</p><h2 id="_3-完善数据传输对象-dto" tabindex="-1"><a class="header-anchor" href="#_3-完善数据传输对象-dto" aria-hidden="true">#</a> 3. 完善数据传输对象（DTO）</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// create-article.dto.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> IsNotEmpty <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;class-validator&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CreateArticleDto</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;标题不能为空&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;内容不能为空&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">IsNotEmpty</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;请选择栏目&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  categoryId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-完成增删改查的服务" tabindex="-1"><a class="header-anchor" href="#_4-完成增删改查的服务" aria-hidden="true">#</a> 4. 完成增删改查的服务</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// article.service.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CreateArticleDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/create-article.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UpdateArticleDto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./dto/update-article.dto&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PrismaService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;src/prisma/prisma.service&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ArticleService</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> prisma<span class="token operator">:</span> PrismaService<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">create</span><span class="token punctuation">(</span>createArticleDto<span class="token operator">:</span> CreateArticleDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prisma<span class="token punctuation">.</span>article<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> createArticleDto<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
        content<span class="token operator">:</span> createArticleDto<span class="token punctuation">.</span>content<span class="token punctuation">,</span>
        categoryId<span class="token operator">:</span> <span class="token operator">+</span>createArticleDto<span class="token punctuation">.</span>categoryId<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">findAll</span><span class="token punctuation">(</span>page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> skip <span class="token operator">=</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize<span class="token punctuation">;</span>
    <span class="token keyword">const</span> articles <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prisma<span class="token punctuation">.</span>article<span class="token punctuation">.</span><span class="token function">findMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      skip<span class="token punctuation">,</span>
      take<span class="token operator">:</span> pageSize<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> articles<span class="token punctuation">,</span>
      page<span class="token operator">:</span> page<span class="token punctuation">,</span>
      pageSize<span class="token operator">:</span> pageSize<span class="token punctuation">,</span>
      total<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prisma<span class="token punctuation">.</span>article<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prisma<span class="token punctuation">.</span>article<span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      where<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">update</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> updateArticleDto<span class="token operator">:</span> UpdateArticleDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prisma<span class="token punctuation">.</span>article<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      where<span class="token operator">:</span> <span class="token punctuation">{</span>
        id<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> updateArticleDto<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
        content<span class="token operator">:</span> updateArticleDto<span class="token punctuation">.</span>content<span class="token punctuation">,</span>
        categoryId<span class="token operator">:</span> <span class="token operator">+</span>updateArticleDto<span class="token punctuation">.</span>categoryId<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">remove</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prisma<span class="token punctuation">.</span>article<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      where<span class="token operator">:</span> <span class="token punctuation">{</span>
        id<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","03-增删改查.html.vue"]]);export{r as default};
