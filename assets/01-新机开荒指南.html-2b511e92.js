import{_ as i,o as l,c as e,b as r}from"./app-0431b91a.js";const a={},t=r("<p>一个刚装完系统的电脑需要做什么？</p><ul><li>安装显卡驱动</li><li>关掉系统底部任务栏无用的内容</li><li>卸载掉不需要的系统应用</li><li>进入设置隐私, 墨迹书写和键入个性化、诊断与反馈、日历联系人、后台应用，全部关掉</li><li>开始菜单右键，个性化，选择哪些文件夹显示在“开始”菜单上</li><li>进入文件资源管理器，点击上方的查看-&gt;选项，在常规中将“打开文件资源管理器时打开”选项改为“此电脑”，在此处可以设置隐私</li><li>将系统文件夹中的七个文件夹路径改为 C 盘外的盘（注意命名时最好使用英文）</li><li>打开控制面板，打开系统和安全-&gt;更改用户账户控制设置-&gt;拉到最低</li><li>进入设置-&gt;系统-&gt;存储-&gt;更改新内容的保存位置，改成除 C 盘外的其他盘</li><li>进入系统服务，禁用无用的服务 <ul><li><mark>打印假脱机程序 Print Spooler</mark>如果您的计算机不使用打印机，可以禁用打印后台处理服务。未使用的可以先禁用，然后在使用时打开</li><li><mark>下载地图管理器 Downloaded Maps Manager</mark>可以直接禁用下载的地图管理器</li><li><mark>视窗防御防火墙 Windows Defender Firewall</mark>防火墙，视窗杀毒软件，如果你的电脑安装了第三方杀毒工具，你可以关闭它，如果没有，你最好打开它</li><li><mark>远程桌面服务/配置 Remote Desktop Services /Configuration</mark>这三项服务与远程桌面相关。如果您在使用遥控功能时通常使用 QQ 或电视，您可以禁用此服务</li><li><mark>互联用户体验和遥测 Connected User Experiences and Telemetry</mark>该服务是操作系统的微软外围辅助服务。主要用于收集数据，但也有责任收集错误和崩溃信息</li><li><mark>诊断执行服务/策略/服务主机系统主机 Diagnostic Execution Service/Policy/Service Host/System Host</mark>这四种服务是系统诊断服务，用于支持和执行系统诊断。这些服务会有高 CPU 使用率的问题，可以禁用</li><li><mark>传真 Fax</mark>目前很少使用的传真服务通常是默认禁用的</li><li><mark>智能卡 Smart Card</mark>普通用户不使用智能卡服务</li><li><mark>触摸键盘和手写面板服务 Touch Keyboard and Handwriting Panel Service</mark>触摸键盘和手写面板，非触摸屏用户可以直接禁用笔和墨水功能</li><li><mark>净 logo Netlogon</mark>此服务使用域控制器来验证您的用户帐户和其他服务，这些服务通常不被独立于家庭的计算机使用，可以直接禁用</li></ul></li></ul>",2),o=[t];function n(m,c){return l(),e("div",null,o)}const _=i(a,[["render",n],["__file","01-新机开荒指南.html.vue"]]);export{_ as default};
