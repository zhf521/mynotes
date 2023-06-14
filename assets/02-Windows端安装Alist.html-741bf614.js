import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as d,c as r,d as e,e as a,a as c,b as i}from"./app-1a000526.js";const n={},l=e("h2",{id:"_1-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-安装","aria-hidden":"true"},"#"),a(" 1. 安装")],-1),p={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>去 releases 里下载最新版 Windows 安装包</p><p>下载完成后解压即可</p><p>然后在文件资源管理器中找到 <code>alist.exe</code> 文件，在地址栏输入 <code>cmd</code> 后回车</p><p>进入命令提示符后输入 <code>alist server</code> 即可</p><p>进入浏览器进入 <code>localhost:5244</code> 即可访问</p><p>使用 <code>alist admin</code> 命令可以查看管理员密码</p><h2 id="_2-开机自启" tabindex="-1"><a class="header-anchor" href="#_2-开机自启" aria-hidden="true">#</a> 2. 开机自启</h2><p>在 <code>alist.exe</code> 文件的目录里新建一个文件名为 <code>alist.vbs</code></p><p>文件内容为：</p><div class="language-vbscript line-numbers-mode" data-ext="vbscript"><pre class="language-vbscript"><code>Set ws = CreateObject(&quot;Wscript.Shell&quot;)
ws.run &quot;alist.exe server&quot;,vbhide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后右键该文件创建快捷方式，将快捷方式剪切，在地址栏输入 <code>shell:startup</code></p><p>将快捷方式粘贴进来即可</p><h2 id="_3-更新" tabindex="-1"><a class="header-anchor" href="#_3-更新" aria-hidden="true">#</a> 3. 更新</h2><p>去官网下载最新安装包，将 <code>alist.exe</code> 文件替换为最新的即可</p>`,14);function _(u,m){const t=o("ExternalLinkIcon");return d(),r("div",null,[l,e("p",null,[a("Github地址："),e("a",p,[a("Alist"),c(t)])]),h])}const x=s(n,[["render",_],["__file","02-Windows端安装Alist.html.vue"]]);export{x as default};
