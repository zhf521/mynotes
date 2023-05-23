import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e}from"./app-993e0dbe.js";const t={},r=e('<h2 id="物理层的基本概念" tabindex="-1"><a class="header-anchor" href="#物理层的基本概念" aria-hidden="true">#</a> 物理层的基本概念</h2><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层01.png" alt="计算机网络-物理层01.png" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层01.png</figcaption></figure><h2 id="物理层下面的传输媒体" tabindex="-1"><a class="header-anchor" href="#物理层下面的传输媒体" aria-hidden="true">#</a> 物理层下面的传输媒体</h2><p>传输媒体也称为传输介质或传输媒介，它就是数据传输系统中在发送器和接收器之间的物理通路</p><p>传输媒体可分为两大类，即<strong>导引型传输媒体</strong>和<strong>非导引型传输媒体</strong></p><p>传输媒体不属于计算机网络体系结构的任何一层。如果非要将它添加到体系结构中，那只能将其放置到物理层之下</p><h3 id="导引型传输媒体" tabindex="-1"><a class="header-anchor" href="#导引型传输媒体" aria-hidden="true">#</a> 导引型传输媒体</h3><p>在导引型传输媒体中，电磁波被导引沿着固体媒体传播</p><h4 id="同轴电缆" tabindex="-1"><a class="header-anchor" href="#同轴电缆" aria-hidden="true">#</a> 同轴电缆</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层02.png" alt="计算机网络-物理层02.png" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层02.png</figcaption></figure><h4 id="双绞线" tabindex="-1"><a class="header-anchor" href="#双绞线" aria-hidden="true">#</a> 双绞线</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层03.png" alt="计算机网络-物理层03.png" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层03.png</figcaption></figure><h4 id="光纤" tabindex="-1"><a class="header-anchor" href="#光纤" aria-hidden="true">#</a> 光纤</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层04.png" alt="计算机网络-物理层04" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层04</figcaption></figure><h5 id="多模光纤" tabindex="-1"><a class="header-anchor" href="#多模光纤" aria-hidden="true">#</a> 多模光纤</h5><p>可以存在多条不同角度入射的光线在一条光纤中传输。这种光纤就称为<strong>多模光纤</strong></p><h5 id="单模光纤" tabindex="-1"><a class="header-anchor" href="#单模光纤" aria-hidden="true">#</a> 单模光纤</h5><p>若光纤的直径减小到只有一个光的波长，则光纤就像一根波导那样，它可使光线一直向前传播，而不会产生多次反射。这样的光纤称为<strong>单模光纤</strong></p><h4 id="电力线" tabindex="-1"><a class="header-anchor" href="#电力线" aria-hidden="true">#</a> 电力线</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层05.png" alt="计算机网络-物理层05" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层05</figcaption></figure><h3 id="非导引型传输媒体" tabindex="-1"><a class="header-anchor" href="#非导引型传输媒体" aria-hidden="true">#</a> 非导引型传输媒体</h3><p>非导引型传输媒体是指自由空间</p><p>常见的非导引型传播媒体：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层06.png" alt="计算机网络-物理层06" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层06</figcaption></figure><h4 id="无线电波" tabindex="-1"><a class="header-anchor" href="#无线电波" aria-hidden="true">#</a> 无线电波</h4><p>无线电波用于<strong>国际广播、海事和航空通讯</strong>等</p><p>无线电波中的低频和中频端主要以地面波形式传播。高频和甚高频主要用电离层的反射传播</p><h4 id="微波" tabindex="-1"><a class="header-anchor" href="#微波" aria-hidden="true">#</a> 微波</h4><p>微波用于<strong>无线电话、无线网络</strong>、雷达、人造卫星接受等。在数据通信中占有重要地位</p><p>微波在空间中主要以直线传播</p><p>传统的微波通信主要有<strong>地面微波接力通信和卫星通信</strong></p><p>其传播距离一般只有50公里左右</p><h4 id="红外线" tabindex="-1"><a class="header-anchor" href="#红外线" aria-hidden="true">#</a> 红外线</h4><p>利用红外线传输数据，例如电视遥控等</p><p>红外通信属于<strong>点对点无线传输</strong></p><p>不能越障，传输距离短，传输速率低</p><h4 id="可见光" tabindex="-1"><a class="header-anchor" href="#可见光" aria-hidden="true">#</a> 可见光</h4><p>LIFI，可以实现使用<strong>可见光通信</strong>，但是目前还在实验室阶段</p><h2 id="传输方式" tabindex="-1"><a class="header-anchor" href="#传输方式" aria-hidden="true">#</a> 传输方式</h2><h3 id="串行传输和并行传输" tabindex="-1"><a class="header-anchor" href="#串行传输和并行传输" aria-hidden="true">#</a> 串行传输和并行传输</h3><ul><li><p>串行传输：</p><ul><li>数据是一个比特一个比特依次发送的，因此在发送端与接收端之间，只需要一条数据传输线路即可</li></ul></li><li><p>并行传输：</p><ul><li>一次发送n个比特，因此，在发送端和接收端之间需要有n条传输线路</li><li>并行传输的优点是比串行传输的速度n倍，但成本高</li></ul></li><li><p>数据在传输线路上的传输采用是<strong>串行传输</strong>，计算机内部的数据传输常用<strong>并行传输</strong></p></li></ul><h3 id="同步传输和异步传输" tabindex="-1"><a class="header-anchor" href="#同步传输和异步传输" aria-hidden="true">#</a> 同步传输和异步传输</h3><p>同步传输：</p><ul><li><p>数据块以稳定的比特流的形式传输。字节之间没有间隔</p></li><li><p>接收端在每个比特信号的中间时刻进行检测，以判别接收到的是比特0还是比特1</p></li><li><p>由于不同设备的时钟频率存在一定差异，不可能做到完全相同，在传输大量数据的过程中，所产生的判别时刻的累计误差，会导致接收端对比特信号的判别错位，所以要使收发双发时钟保持同步</p><blockquote><p>有两种同步方法：</p><ol><li>外同步：在收发双方之间添加一条单独的时钟信号线</li><li>内同步：发送端将时钟同步信号编码到发送数据中一起传输（如曼彻斯特编码）</li></ol></blockquote></li></ul><p>异步传输：</p><ul><li>以字节为独立的传输单位，字节之间的时间间隔不是固定</li><li>接收端仅在每个字节的起始处对字节内的比特实现同步</li><li>通常在每个字节前后分别加上起始位和结束位</li></ul><h3 id="单工、半双工、全双工" tabindex="-1"><a class="header-anchor" href="#单工、半双工、全双工" aria-hidden="true">#</a> 单工、半双工、全双工</h3><p>在许多情况下，我们要使用“信道（channel）”这一名词。信道和电路并不等同，信道一般都是用来表示向某一个方向传送信息的媒体。因此，一条通信电路往往包含一条发送信道和一条接收信道</p><p>从通信的双方信息交互的方式来看，可以有以下三种基本方式：</p><p>单向通信：</p><p>又称为单工通信，即只能有一个方向的通信而没有反方向的交互。无线电广播或有线电以及电视广播就属于这种类型</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层07.png" alt="计算机网络-物理层07" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层07</figcaption></figure><p>双向交替通信：</p><p>又称为半双工通信，即通信的双方可以发送信息，但不能双方同时发送（当然也就不能同时接收）。这种通信方式使一方发送另一方接收，过一段时间后可以再反过来</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层08.png" alt="计算机网络-物理层08" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层08</figcaption></figure><p>双向同时通信：</p><p>又称为全双工通信，即通信的双发可以同时发送和接收信息</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层09.png" alt="计算机网络-物理层09" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层09</figcaption></figure><blockquote><p>注意：</p><ol><li><p><strong>单向通信</strong>只需要一条信道，而<strong>双向交替通信</strong>或<strong>双向同时通信</strong>则需要两条信道（每个方向各一条）</p></li><li><p><strong>双向同时通信</strong>的传输效率最高</p></li></ol></blockquote><h2 id="编码与调制" tabindex="-1"><a class="header-anchor" href="#编码与调制" aria-hidden="true">#</a> 编码与调制</h2><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层10.png" alt="计算机网络-物理层10" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层10</figcaption></figure><blockquote><p>常用术语：</p><ul><li><p>数据 (data) —— 运送消息的实体</p></li><li><p>信号 (signal) —— 数据的电气的或电磁的表现。</p></li><li><p>模拟信号 (analogous signal) —— 代表消息的参数的取值是连续的</p></li><li><p>数字信号 (digital signal) —— 代表消息的参数的取值是离散的。</p></li><li><p>码元 (code) —— 在使用时间域（或简称为时域）的波形表示数字信号时，代表不同离散数值的基本波形</p></li><li><p>基带信号（即基本频带信号）—— 来自信源的信号。像计算机输出的代表各种文字或图像文件的数据信号都属于基带信号</p></li><li><p>基带信号往往包含有较多的低频成分，甚至有直流成分，而许多信道并不能传输这种低频分量或直流分量。因此必须对基带信号进行调制(modulation)</p></li><li><p>信道 —— 一般用来表示向某一个方向传送信息的媒体</p></li><li><p>单向通信（单工通信）——只能有一个方向的通信而没有反方向的交互</p></li><li><p>双向交替通信（半双工通信）——通信的双方都可以发送信息，但不能双方同时发送(当然也就不能同时接收)</p></li><li><p>双向同时通信（全双工通信）——通信的双方可以同时发送和接收信息</p></li></ul></blockquote><h3 id="常用编码" tabindex="-1"><a class="header-anchor" href="#常用编码" aria-hidden="true">#</a> 常用编码</h3><h4 id="不归零编码" tabindex="-1"><a class="header-anchor" href="#不归零编码" aria-hidden="true">#</a> 不归零编码</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层11.png" alt="计算机网络-物理层11" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层11</figcaption></figure><blockquote><ul><li><p>正电平表示比特1/0</p></li><li><p>负电平表示比特0/1</p></li></ul><p>中间的虚线是零电平，所谓不归零编码，就是指在整个码元时间内，电平不会出现零电平</p><p><strong>实际比特1和比特0的表示要看现实怎么规定</strong></p></blockquote><p>在整个码元时间内，不会出现零电平：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层12.png" alt="计算机网络-物理层12" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层12</figcaption></figure><p>为了辨别码元个数，在发送信号时需要发送方和接收方做到严格的同步：需要<strong>额外一根传输线来传输时钟信号</strong>，使发送方和接收方同步，接收方按时钟信号的节拍来逐个接收码元，<strong>但是</strong>对于计算机网络，<strong>宁愿利用这根传输线传输数据信号</strong>，而不是传输时钟信号，由于<strong>不归零编码</strong>存在<strong>同步问题</strong>，因此计算机网络中的数据传输不采用这类编码！</p><h4 id="归零编码" tabindex="-1"><a class="header-anchor" href="#归零编码" aria-hidden="true">#</a> 归零编码</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层13.png" alt="计算机网络-物理层13" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层13</figcaption></figure><p><strong>归零编码</strong>虽然<strong>自同步</strong>，但<strong>编码效率低</strong></p><p>在传输过程中，<strong>每个码元传输结束后都要”归零“</strong>，因此接收方只要在信号归零后进行采样，而不需要单独的时钟信号</p><p>归零编码相当于把时钟信号用”归零“的方式放在了数据之内，看作一种<strong>自同步</strong>的信号，但是在传输过程中，大部分的数据带宽都用来传输零电平数据，造成资源浪费，编码效率低</p><h4 id="曼彻斯特编码" tabindex="-1"><a class="header-anchor" href="#曼彻斯特编码" aria-hidden="true">#</a> 曼彻斯特编码</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层14.png" alt="计算机网络-物理层14" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层14</figcaption></figure><p>在每个码元时间的中间时刻，信号都会发生跳变：</p><ul><li>负跳变表示比特1/0</li><li>正跳变表示比特0/1</li><li>码元中间时刻的跳变即表示时钟，又表示数据</li></ul><p><strong>实际比特1和比特0的表示要看现实怎么规定</strong></p><p>传统以太网使用的就是曼切斯特编码</p><h4 id="差分曼彻斯特编码" tabindex="-1"><a class="header-anchor" href="#差分曼彻斯特编码" aria-hidden="true">#</a> 差分曼彻斯特编码</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层15.png" alt="计算机网络-物理层15" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层15</figcaption></figure><p>在每个码元时间的中间时刻，信号都会发送跳变，但与<strong>曼彻斯特不同</strong>：</p><ul><li>跳变仅表示时钟</li><li>码元开始处电平是否变换表示数据 <ul><li>变化表示比特1/0</li><li>不变化表示比特0/1</li></ul></li></ul><p><strong>实际比特1和比特0的表示要看现实怎么规定</strong></p><p>比曼彻斯特编码变化少，更适合较高的传输速率</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层16.png" alt="计算机网络-物理层16" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层16</figcaption></figure><h3 id="调制" tabindex="-1"><a class="header-anchor" href="#调制" aria-hidden="true">#</a> 调制</h3><p>把数据基带信号的频率范围，搬移到较高的频段，并转换为模拟信号，称为调制。调制后产生模拟信号，在模拟信道种传输</p><p>有两种情况：</p><ol><li>数字信号转换为模拟信号，在模拟信道中传输 <ul><li>例如WiFi，采用补码键控CCK/直接序列扩频DSSS/正交频分复用OFDM等调制方式</li></ul></li><li>模拟信号转换为另一种模拟信号，在模拟信道中传输 <ul><li>例如，语音数据加载到模拟的载波信号中传输</li></ul></li></ol><h4 id="基本调制方法" tabindex="-1"><a class="header-anchor" href="#基本调制方法" aria-hidden="true">#</a> 基本调制方法</h4><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层17.png" alt="计算机网络-物理层17" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层17</figcaption></figure><ul><li>调幅AM：所调制的信号由两种不同振幅的基本波形构成。每个基本波形只能表示1比特信息量</li><li>调频FM：所调制的信号由两种不同频率的基本波形构成。每个基本波形只能表示1比特信息量</li><li>调相PM：所调制的信号由两种不同初相位的基本波形构成。每个基本波形只能表示1比特信息量</li></ul><p>但是使用基本调制方法，1个码元只能包含1个比特信息</p><h4 id="混合调制" tabindex="-1"><a class="header-anchor" href="#混合调制" aria-hidden="true">#</a> 混合调制</h4><p>因为频率和相位是相关的，即频率是相位随时间的变化率，所以一次只能调制频率和相位两个中的一个，通常情况下，相位和振幅可以结合起来一起调制，称为正交振幅调制QAM</p><p>在QAM-16中有12种相位，每种相位有1或2种振幅可选择</p><p>由于此调制方法可以调制出16种码元，要完整的表示这16种情况，码元内是二进制数据，因此至少需要4个二进制数，也就是4个比特数据，因此在QAM-16调制方法中，每个码元可以表示4个比特数据</p><p>为了防止传输出错导致错误，相邻码元之间的对应关系使用格雷码（相邻二进制数只有一位不同）</p><h2 id="信道的极限容量" tabindex="-1"><a class="header-anchor" href="#信道的极限容量" aria-hidden="true">#</a> 信道的极限容量</h2><ul><li>任何实际的信道都不是理想的，在传输信号时会产生各种失真以及带来多种干扰</li><li>码元传输的速率越高，或信号传输的距离越远，或传输媒体质量越差，在信道的输出端的波形的失真就越严重</li></ul><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层18.png" alt="计算机网络-物理层18" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层18</figcaption></figure><p>失真的原因：</p><ul><li>码元传输的速率越高</li><li>信号传输的距离越远</li><li>噪声干扰越大</li><li>传输媒体质量越差</li></ul><p>因为以上情况，防止信道数据过大导致码间串扰，因此做出了信号极限容量的预测</p><p>其中最著名的就是奈氏准则：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层19.png" alt="计算机网络-物理层19" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层19</figcaption></figure><p>由于奈氏准则是一种理想环境下的情况，在实际中极限容量要明显小于该值，就有了香农公式：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层20.png" alt="计算机网络-物理层20" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层20</figcaption></figure><p>奈氏准则和香农公式对比：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层21.png" alt="计算机网络-物理层21" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层21</figcaption></figure><h2 id="信道复用技术" tabindex="-1"><a class="header-anchor" href="#信道复用技术" aria-hidden="true">#</a> 信道复用技术</h2><p>复用 (multiplexing) 是通信技术中的基本概念</p><p>它允许用户使用一个共享信道进行通信，降低成本，提高利用率</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层22.png" alt="计算机网络-物理层22" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层22</figcaption></figure><h3 id="频分复用" tabindex="-1"><a class="header-anchor" href="#频分复用" aria-hidden="true">#</a> 频分复用</h3><p>频分复用 FDM (Frequency Division Multiplexing)</p><ul><li><p>将整个带宽分为多份，用户在分配到一定的频带后，在通信过程中自始至终都占用这个频带</p></li><li><p>频分复用的所有用户在同样的时间占用不同的带宽资源（请注意，这里的“带宽”是频率带宽而不是数据的发送速率）</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层23.png" alt="计算机网络-物理层23" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层23</figcaption></figure></li></ul><h3 id="时分复用" tabindex="-1"><a class="header-anchor" href="#时分复用" aria-hidden="true">#</a> 时分复用</h3><p>时分复用TDM (Time Division Multiplexing)</p><ul><li><p>时分复用则是将时间划分为一段段等长的时分复用帧（TDM帧）。每一个时分复用的用户在每一个 TDM 帧中占用固定序号的时隙</p></li><li><p>每一个用户所占用的时隙是周期性地出现（其周期就是TDM帧的长度）的</p></li><li><p>TDM 信号也称为等时 (isochronous) 信号</p></li><li><p>时分复用的所有用户在不同的时间占用同样的频带宽度</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层24.png" alt="计算机网络-物理层24" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层24</figcaption></figure></li><li><p>时分复用可能会造成线路资源的浪费</p><ul><li><p>使用时分复用系统传送计算机数据时，由于计算机数据的突发性质，用户对分配到的子信道的利用率一般是不高的</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层25.png" alt="计算机网络-物理层25" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层25</figcaption></figure></li></ul></li></ul><h3 id="统计时分复用" tabindex="-1"><a class="header-anchor" href="#统计时分复用" aria-hidden="true">#</a> 统计时分复用</h3><p>统计时分复用 STDM (Statistic TDM)</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层26.png" alt="计算机网络-物理层26" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层26</figcaption></figure><h3 id="波分复用" tabindex="-1"><a class="header-anchor" href="#波分复用" aria-hidden="true">#</a> 波分复用</h3><p>波分复用 WDM(Wavelength Division Multiplexing)</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-物理层27.png" alt="计算机网络-物理层27" tabindex="0" loading="lazy"><figcaption>计算机网络-物理层27</figcaption></figure><h3 id="码分复用" tabindex="-1"><a class="header-anchor" href="#码分复用" aria-hidden="true">#</a> 码分复用</h3><p>码分复用 CDM (Code Division Multiplexing)</p><ul><li>常用的名词是码分多址 CDMA (Code Division Multiple Access)</li><li>各用户使用经过特殊挑选的不同码型，因此彼此不会造成干扰</li><li>这种系统发送的信号有很强的抗干扰能力，其频谱类似于白噪声，不易被敌人发现</li></ul>',132),l=[r];function p(g,o){return a(),n("div",null,l)}const h=i(t,[["render",p],["__file","02-计算机网络-物理层.html.vue"]]);export{h as default};
