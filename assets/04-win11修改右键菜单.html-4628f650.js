import{_ as a,o as e,c as n,b as s}from"./app-0431b91a.js";const t={},c=s(`<h2 id="还原为win10右键菜单" tabindex="-1"><a class="header-anchor" href="#还原为win10右键菜单" aria-hidden="true">#</a> 还原为Win10右键菜单</h2><p><code>win+R</code>输入cmd，打开命令提示符</p><p>输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>reg <span class="token function">add</span> HKCU<span class="token punctuation">\\</span>Software<span class="token punctuation">\\</span>Classes<span class="token punctuation">\\</span>CLSID<span class="token punctuation">\\</span><span class="token punctuation">{</span>86ca1aa0-34aa-4e8b-a509-50c905bae2a2<span class="token punctuation">}</span><span class="token punctuation">\\</span>InprocServer32 /f /ve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>随后重启电脑即可</p><h2 id="恢复为win11右键菜单" tabindex="-1"><a class="header-anchor" href="#恢复为win11右键菜单" aria-hidden="true">#</a> 恢复为Win11右键菜单</h2><p>在命令提示符中输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>reg.exe delete <span class="token string">&quot;HKCU\\Software\\Classes\\CLSID\\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\\InprocServer32&quot;</span> /va /f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>随后重启电脑即可</p>`,9),i=[c];function o(d,r){return e(),n("div",null,i)}const l=a(t,[["render",o],["__file","04-win11修改右键菜单.html.vue"]]);export{l as default};
