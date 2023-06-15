import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as r,d as a,e as n,a as s,b as i}from"./app-565102bf.js";const o={},t=a("h2",{id:"_1-购买服务器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-购买服务器","aria-hidden":"true"},"#"),n(" 1. 购买服务器")],-1),p={href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"},u=a("figure",null,[a("img",{src:"https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建01.png",alt:"Halo博客搭建01.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Halo博客搭建01.png")],-1),m=a("p",null,"防火墙开放 8090 端口",-1),h=a("figure",null,[a("img",{src:"https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建02.png",alt:"Halo博客搭建02.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"Halo博客搭建02.png")],-1),v=a("h2",{id:"_2-安装docker",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-安装docker","aria-hidden":"true"},"#"),n(" 2. 安装Docker")],-1),b={href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="_2-1-登录自己的服务器" tabindex="-1"><a class="header-anchor" href="#_2-1-登录自己的服务器" aria-hidden="true">#</a> 2.1 登录自己的服务器</h3><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建03.png" alt="Halo博客搭建03.png" tabindex="0" loading="lazy"><figcaption>Halo博客搭建03.png</figcaption></figure><h3 id="_2-2-卸载旧版本" tabindex="-1"><a class="header-anchor" href="#_2-2-卸载旧版本" aria-hidden="true">#</a> 2.2 卸载旧版本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-engine

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-更新、安装必备软件" tabindex="-1"><a class="header-anchor" href="#_2-3-更新、安装必备软件" aria-hidden="true">#</a> 2.3 更新、安装必备软件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-获取安装包" tabindex="-1"><a class="header-anchor" href="#_2-4-获取安装包" aria-hidden="true">#</a> 2.4 获取安装包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-设置镜像仓库" tabindex="-1"><a class="header-anchor" href="#_2-5-设置镜像仓库" aria-hidden="true">#</a> 2.5 设置镜像仓库</h3><p>官方镜像：（比较慢，不推荐）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阿里镜像仓库 ：（推荐）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-安装docker" tabindex="-1"><a class="header-anchor" href="#_2-6-安装docker" aria-hidden="true">#</a> 2.6 安装docker</h3><p>安装前先更新 yum 软件包索引</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 docker-ce（社区版-免费的）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-启动docker" tabindex="-1"><a class="header-anchor" href="#_2-7-启动docker" aria-hidden="true">#</a> 2.7 启动docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-8-判断是否成功安装docker" tabindex="-1"><a class="header-anchor" href="#_2-8-判断是否成功安装docker" aria-hidden="true">#</a> 2.8 判断是否成功安装docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-9-设置docker开机自启动" tabindex="-1"><a class="header-anchor" href="#_2-9-设置docker开机自启动" aria-hidden="true">#</a> 2.9 设置docker开机自启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-使用docker部署-halo" tabindex="-1"><a class="header-anchor" href="#_3-使用docker部署-halo" aria-hidden="true">#</a> 3. 使用Docker部署 Halo</h2><p>建议查看官方教程</p>`,26),k={href:"https://docs.halo.run/getting-started/install/docker",target:"_blank",rel:"noopener noreferrer"},_=a("h2",{id:"_4-进入后台安装",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-进入后台安装","aria-hidden":"true"},"#"),n(" 4. 进入后台安装")],-1),f=a("p",null,"通过访问 IP：端口号即可访问安装引导界面",-1),x=a("p",null,"安装完即可",-1),y=a("h2",{id:"_5-购买域名-可选",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_5-购买域名-可选","aria-hidden":"true"},"#"),n(" 5. 购买域名 (可选)")],-1),H={href:"https://cloud.tencent.com/",target:"_blank",rel:"noopener noreferrer"},S=i(`<p><mark>注意：服务器与域名最好选用同一厂商，不然可能会莫名报错，配置失败</mark></p><p>添加域名解析，如图</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建04.png" alt="Halo博客搭建04.png" tabindex="0" loading="lazy"><figcaption>Halo博客搭建04.png</figcaption></figure><h2 id="_6-反向代理-可选" tabindex="-1"><a class="header-anchor" href="#_6-反向代理-可选" aria-hidden="true">#</a> 6. 反向代理 (可选)</h2><h3 id="_6-1-安装docker-compose" tabindex="-1"><a class="header-anchor" href="#_6-1-安装docker-compose" aria-hidden="true">#</a> 6.1 安装Docker Compose</h3><h4 id="_6-1-1-下载安装" tabindex="-1"><a class="header-anchor" href="#_6-1-1-下载安装" aria-hidden="true">#</a> 6.1.1 下载安装</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.16.1/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐使用下面这个，国内访问较快</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">\`</span></span>-<span class="token variable"><span class="token variable">\`</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">\`</span></span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-1-2-给执行权限" tabindex="-1"><a class="header-anchor" href="#_6-1-2-给执行权限" aria-hidden="true">#</a> 6.1.2 给执行权限</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-1-3-查看docker-compose版本" tabindex="-1"><a class="header-anchor" href="#_6-1-3-查看docker-compose版本" aria-hidden="true">#</a> 6.1.3 查看docker-compose版本</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-2-部署nginx-proxy-manager服务" tabindex="-1"><a class="header-anchor" href="#_6-2-部署nginx-proxy-manager服务" aria-hidden="true">#</a> 6.2 部署Nginx Proxy Manager服务</h3><h4 id="_6-2-1-创建一个与此类似的-docker-compose-yml文件" tabindex="-1"><a class="header-anchor" href="#_6-2-1-创建一个与此类似的-docker-compose-yml文件" aria-hidden="true">#</a> 6.2.1 创建一个与此类似的 docker-compose.yml文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/npm <span class="token comment">#创建一个目录用来安装此服务</span>

<span class="token builtin class-name">cd</span> ~/npm <span class="token comment">#进入目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> docker-compose.yml  <span class="token comment">#将以下代码粘贴到里面然后保存退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>
services:
  app:
    image: <span class="token string">&#39;jc21/nginx-proxy-manager:latest&#39;</span>
    restart: unless-stopped
    ports:
      <span class="token comment"># These ports are in format &lt;host-port&gt;:&lt;container-port&gt;</span>
      - <span class="token string">&#39;80:80&#39;</span> <span class="token comment"># Public HTTP Port</span>
      - <span class="token string">&#39;443:443&#39;</span> <span class="token comment"># Public HTTPS Port</span>
      - <span class="token string">&#39;81:81&#39;</span> <span class="token comment"># Admin Web Port</span>
      <span class="token comment"># Add any other Stream port you want to expose</span>
      <span class="token comment"># - &#39;21:21&#39; # FTP</span>
    environment:
      DB_MYSQL_HOST: <span class="token string">&quot;db&quot;</span>
      DB_MYSQL_PORT: <span class="token number">3306</span>
      DB_MYSQL_USER: <span class="token string">&quot;npm&quot;</span>
      DB_MYSQL_PASSWORD: <span class="token string">&quot;npm&quot;</span>
      DB_MYSQL_NAME: <span class="token string">&quot;npm&quot;</span>
      <span class="token comment"># Uncomment this if IPv6 is not enabled on your host</span>
      <span class="token comment"># DISABLE_IPV6: &#39;true&#39;</span>
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    depends_on:
      - db

  db:
    image: <span class="token string">&#39;jc21/mariadb-aria:latest&#39;</span>
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: <span class="token string">&#39;npm&#39;</span>
      MYSQL_DATABASE: <span class="token string">&#39;npm&#39;</span>
      MYSQL_USER: <span class="token string">&#39;npm&#39;</span>
      MYSQL_PASSWORD: <span class="token string">&#39;npm&#39;</span>
    volumes:
      - ./data/mysql:/var/lib/mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-2-在当前目录运行以下命令安装此服务" tabindex="-1"><a class="header-anchor" href="#_6-2-2-在当前目录运行以下命令安装此服务" aria-hidden="true">#</a> 6.2.2 在当前目录运行以下命令安装此服务</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>   <span class="token comment">#部署服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-2-3-安装完以后进入81端口登录" tabindex="-1"><a class="header-anchor" href="#_6-2-3-安装完以后进入81端口登录" aria-hidden="true">#</a> 6.2.3 安装完以后进入81端口登录</h4><p>默认登陆名和密码：</p><p>Email: admin@example. com</p><p>Password: changeme</p><p>按如下图设置即可</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/Halo博客搭建05.gif" alt="Halo博客搭建05.gif" tabindex="0" loading="lazy"><figcaption>Halo博客搭建05.gif</figcaption></figure><p>最后就可以通过域名进行访问了</p><h2 id="_7-开始写博客" tabindex="-1"><a class="header-anchor" href="#_7-开始写博客" aria-hidden="true">#</a> 7. 开始写博客</h2><p>配置好图床使用 GitHub 图床或阿里云对象存储搭建图床，使用 MarkDown 语法就可以愉快的发布文章啦!</p>`,29);function q(P,D){const e=c("ExternalLinkIcon");return l(),r("div",null,[t,a("p",null,[n("需要购买服务器，内存至少 1G，这里以腾讯云为例，进入官网"),a("a",p,[n("腾讯云"),s(e)]),n("选购自己的服务器即可，推荐轻量应用服务器。购买以后装入 centos 系统")]),u,m,h,v,a("p",null,[n("以下为 centos 系统安装教程，其他系统请参照官网教程"),a("a",b,[n("官网"),s(e)])]),g,a("p",null,[a("a",k,[n("使用 Docker 部署 Halo"),s(e)])]),_,f,x,y,a("p",null,[n("进入腾讯云官网"),a("a",H,[n("腾讯云"),s(e)]),n("选购")]),S])}const T=d(o,[["render",q],["__file","01-Halo博客搭建.html.vue"]]);export{T as default};
