import{_ as e,r as t,o,c as p,b as n,d as s,a as c,e as l}from"./app-3b86f382.js";const i={},r={href:"https://docs.nestjs.com/security/authorization",target:"_blank",rel:"noopener noreferrer"},d=l(`<p>权限是指确定一个用户可以做什么的过程。例如，管理员用户可以创建、编辑和删除文章，非管理员用户只能授权阅读文章</p><p>这里我们基于角色的访问控制（RBAC）实现，首先我们在auth文件夹中创建一个enums文件夹，然后创建一个枚举来表示系统中的角色：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// role.enum.ts</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> Role <span class="token punctuation">{</span>
  User <span class="token operator">=</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
  Admin <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在auth文件夹下创建一个<code>decorator</code>文件夹，在文件夹中创建一个<code>@Roles()</code>的装饰器，该装饰器允许某些角色拥有获取特定资源访问权</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// roles.decorator.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SetMetadata <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Role <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../enums/role.enum&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ROLES_KEY</span> <span class="token operator">=</span> <span class="token string">&#39;roles&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Roles</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>roles<span class="token operator">:</span> Role<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">SetMetadata</span><span class="token punctuation">(</span><span class="token constant">ROLES_KEY</span><span class="token punctuation">,</span> roles<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以将<code>@Roles()</code>装饰器应用于任何控制器</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function u(k,m){const a=t("ExternalLinkIcon");return o(),p("div",null,[n("p",null,[s("详见："),n("a",r,[s("权限"),c(a)])]),d])}const _=e(i,[["render",u],["__file","04-权限管理.html.vue"]]);export{_ as default};
