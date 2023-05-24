import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as t}from"./app-2d13d9c3.js";const g={},o=t('<h2 id="数据链路层概述" tabindex="-1"><a class="header-anchor" href="#数据链路层概述" aria-hidden="true">#</a> 数据链路层概述</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><p><strong>链路</strong>是从一个结点到相邻结点的一段物理线路，<strong>数据链路</strong>则是在链路的基础上增加了一些必要的硬件（如网络适配器）和软件（如协议的实现）</p><p><strong>网络中的主机、路由器等都必须实现数据链路层</strong></p><p><strong>局域网中的主机、交换机等都必须实现数据链路层</strong></p><p>从层次上来看数据的流动：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层01.png" alt="计算机网络-数据链路层01" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层01</figcaption></figure><p>仅从数据链路层观察帧的流动：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层02.png" alt="计算机网络-数据链路层02" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层02</figcaption></figure><p>相关概念：</p><ol><li>链路：从一个节点到相邻节点的一段物理线路，而中间没有任何其他的交换节点</li><li>数据链路：由实现通信协议的硬件和软件加到链路上构成的</li><li>数据链路以帧为单位传输和处理数据</li></ol><h3 id="三个重要问题" tabindex="-1"><a class="header-anchor" href="#三个重要问题" aria-hidden="true">#</a> 三个重要问题</h3><ol><li><p>封装成帧</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层03.png" alt="计算机网络-数据链路层03" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层03</figcaption></figure></li><li><p>差错检测</p><p>在传输过程中可能会产生<strong>比特差错</strong>：1 可能会变成 0， 而 0 也可能变成 1</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层04.png" alt="计算机网络-数据链路层04" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层04</figcaption></figure></li><li><p>可靠传输</p><p>尽管误码是不能完全避免的，但若能实现发送方发送什么，接收方就能收到什么，就称为可靠传输，<strong>可靠传输是数据链路层中最基本、最重要的问题</strong>，不可靠传输是指在丢弃有误码的帧后，不进行任何其他处理，<strong>接收方不一定能够收到发送方发送的东西</strong></p><blockquote><p>以上三个问题都是使用<strong>点对点信道的数据链路层</strong>来举例的</p></blockquote></li></ol><p><strong>如果使用广播信道的数据链路层除了包含上面三个问题外，还有一些问题要解决</strong></p><p>如图所示，主机A，B，C，D，E通过一根总线进行互连，主机A要给主机C发送数据，代表帧的信号会通过总线传输到总线上的其他各主机，那么主机B，D，E如何知道所收到的帧不是发送给她们的，主机C如何知道发送的帧是发送给自己的呢</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层05.png" alt="计算机网络-数据链路层05" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层05</figcaption></figure><p>可以用编址（地址）的来解决，将帧的目的地址添加在帧中一起传输</p><p>还有数据碰撞问题：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层06.png" alt="计算机网络-数据链路层06" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层06</figcaption></figure><blockquote><p>随着技术的发展，交换技术的成熟，在有线（局域网）领域使用<strong>点对点链路</strong>和<strong>链路层交换机</strong>的<strong>交换式局域网</strong>取代了共享式局域网，在无线局域网中仍然使用的是共享信道技术</p></blockquote><h2 id="封装成帧" tabindex="-1"><a class="header-anchor" href="#封装成帧" aria-hidden="true">#</a> 封装成帧</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>封装成帧是指数据链路层给上层交付的协议数据单元添加帧头和帧尾使之成为帧</p><p><strong>帧头和帧尾中包含有重要的控制信息</strong></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层07.png" alt="计算机网络-数据链路层07" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层07</figcaption></figure><p>问：发送方的数据链路层将上层交付下来的协议数据单元封装成帧后，还要通过物理层，将构成帧的各比特，转换成电信号交给传输媒体，那么接收方的数据链路层如何从物理层交付的比特流中提取出一个个的帧？</p><p>答：需要帧头和帧尾来做<strong>帧定界</strong></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层08.png" alt="计算机网络-数据链路层08" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层08</figcaption></figure><p>但并不是每一种数据链路层协议的帧都包含有帧定界标志，例如：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层09.png" alt="计算机网络-数据链路层09" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层09</figcaption></figure><blockquote><p>前导码:</p><ul><li>前同步码：作用是使接收方的时钟同步</li><li>帧开始定界符：表明其后面紧跟着的就是MAC帧</li></ul></blockquote><p>其帧的提取由物理层添加的前导码来识别开始，并且按照稳定的时钟周期，在每一帧的结束会由96比特发送时间的间隔，以此来识别一个帧的结束，因此，MAC帧不需要帧结束定界符</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层10.png" alt="计算机网络-数据链路层10" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层10</figcaption></figure><h3 id="透明传输" tabindex="-1"><a class="header-anchor" href="#透明传输" aria-hidden="true">#</a> 透明传输</h3><p>透明传输是指<strong>数据链路层对上层交付的传输数据没有任何限制</strong>，好像数据链路层不存在一样</p><p>帧界定标志也就是个特定数据值，如果在上层交付的协议数据单元中， 恰好也包含这个特定数值，接收方就不能正确接收，所以数据链路层应该对上层交付的数据有限制，其内容不能包含帧定界符的值</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层11.png" alt="计算机网络-数据链路层11" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层11</figcaption></figure><p>透明传输的实现：</p><ul><li>面向字节的物理链路使用字节填充（byte stuffing）或字符填充（character stuffing）的方法实现透明传输 <ul><li>发送端的数据链路层在数据中出现控制字符“SOH”或“EOT”的前面插入一个转义字符“ESC”(其十六进制编码是1B)</li><li>接收端的数据链路层在将数据送往网络层之前删除插入的转义字符</li><li>如果转义字符也出现在数据当中，那么应在转义字符前面插入一个转义字符 ESC。当接收端收到连续的两个转义字符时，就删除其中前面的一个</li></ul></li><li>面向比特的物理链路使用比特填充的方法实现透明传输 <ul><li>在数据链路层中发送帧前扫描帧的数据部分，若出现连续的5个1，将在后续增加1个0(因为帧定界标志符为01111110)</li><li>在接收方数据链路层接收帧时，帧的数据部分，若出现连续的5个1，将后续的一个0换成1</li></ul></li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层12.png" alt="计算机网络-数据链路层12" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层12</figcaption></figure><h2 id="差错检测" tabindex="-1"><a class="header-anchor" href="#差错检测" aria-hidden="true">#</a> 差错检测</h2><h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层13.png" alt="计算机网络-数据链路层13" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层13</figcaption></figure><h3 id="奇偶校验" tabindex="-1"><a class="header-anchor" href="#奇偶校验" aria-hidden="true">#</a> 奇偶校验</h3><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层14.png" alt="计算机网络-数据链路层14" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层14</figcaption></figure><h3 id="循环冗余校验crc-cyclic-redundancy-check" tabindex="-1"><a class="header-anchor" href="#循环冗余校验crc-cyclic-redundancy-check" aria-hidden="true">#</a> 循环冗余校验CRC(Cyclic Redundancy Check)</h3><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层15.png" alt="计算机网络-数据链路层15" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层15</figcaption></figure><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层16.png" alt="计算机网络-数据链路层16" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层16</figcaption></figure><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层17.png" alt="计算机网络-数据链路层17" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层17</figcaption></figure><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层18.png" alt="计算机网络-数据链路层18" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层18</figcaption></figure><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层19.png" alt="计算机网络-数据链路层19" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层19</figcaption></figure><h2 id="可靠传输" tabindex="-1"><a class="header-anchor" href="#可靠传输" aria-hidden="true">#</a> 可靠传输</h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><h4 id="比特差错" tabindex="-1"><a class="header-anchor" href="#比特差错" aria-hidden="true">#</a> 比特差错</h4><p>根据<strong>差错检测技术</strong>，接收方的数据链路层可以检测出帧在传输过程中是否出现了误码（比特错误）</p><p>数据链路层向上提供的服务类型有两种情况：</p><ul><li>可靠传输：丢弃有误码的帧后，会进行其他措施来确保接收方主机还可以重新收到被丢弃的这个帧的正确副本，来<strong>实现发送方发送什么，接收方就能接收到什么</strong></li><li>不可靠传输：在丢弃有误码的帧后，不进行任何其他处理，<strong>接收方不一定能够收到发送方发送的东西</strong></li></ul><p>一般情况下，<strong>有线链路的误码率比较低</strong>，为了减小开销，不要求数据链路层向上提供可靠传输服务。即使出现了误差，<strong>可靠传输的问题由其上层解决。<strong>对于</strong>无线链路，误码率较高，因此要求数据链路层必须向上层提供可靠传输服务</strong></p><h4 id="分组丢失" tabindex="-1"><a class="header-anchor" href="#分组丢失" aria-hidden="true">#</a> 分组丢失</h4><p>路由器输入队列快满了，主动丢弃收到的分组，造成分组丢失</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层20.png" alt="计算机网络-数据链路层20" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层20</figcaption></figure><h4 id="分组失序" tabindex="-1"><a class="header-anchor" href="#分组失序" aria-hidden="true">#</a> 分组失序</h4><p>由于传输过程中选择失序的问题，接收方实际收到的数据与发送方发送的分组顺序不同造成分组失序</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层21.png" alt="计算机网络-数据链路层21" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层21</figcaption></figure><h4 id="分组重复" tabindex="-1"><a class="header-anchor" href="#分组重复" aria-hidden="true">#</a> 分组重复</h4><p>由于某些原因，有些分组在网络中滞留了，没有及时到达接收端，这可能会造成发送端对该分组的重发，重发的分组到达接收端，但一段时间后，滞留在网络的分组也到达了接收端，这就造成分组重复的传输差错</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层22.png" alt="计算机网络-数据链路层22" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层22</figcaption></figure><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层23.png" alt="计算机网络-数据链路层23" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层23</figcaption></figure><h3 id="三种可靠传输协议" tabindex="-1"><a class="header-anchor" href="#三种可靠传输协议" aria-hidden="true">#</a> 三种可靠传输协议</h3><ul><li>停止-等待协议SW</li><li>回退N帧协议GBN</li><li>选择重传协议SR</li></ul><blockquote><p>这三种可靠传输实现机制的基本原理并不仅限于数据链路层，可以应用到计算机网络体系结构的各层协议中</p></blockquote><h4 id="停止-等待协议sw" tabindex="-1"><a class="header-anchor" href="#停止-等待协议sw" aria-hidden="true">#</a> 停止-等待协议SW</h4><p>四个基本原则：</p><ol><li><p>确认与否认</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层24.png" alt="计算机网络-数据链路层24" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层24</figcaption></figure><p>在停止等待协议中：</p><ul><li>在每个数据发送后，接收方接到后会发送ACK（确认）信号确认无误收到，发送收到ACK信号后便开始发送下一个数据</li><li>接收方检测收到数据出现误码后，会发送NAK（否认）信号，发送方接收到NAK信号后会<strong>重新发送缓存区中的数据</strong></li><li>因此，在此过程中，发送方与接收方一直处于一种停止等待对方的过程，在此过程中要进行确认与否认，这也是停止-等待协议的最基本原则</li></ul></li><li><p>超时重传</p><p>此原则可以避免当数据传输过程中出现丢失，<strong>导致接收方一直等待不到数据传送到达，而发送方又在等待接受方发送确认信号</strong>，<strong>系统处于互等的请况</strong></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层25.png" alt="计算机网络-数据链路层25" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层25</figcaption></figure></li><li><p>确认丢失</p><p>此原则可以避免：<strong>接收方发送ACK信号后，由于传输问题出现ACK信号丢失</strong>，导致发送方没收到确认信号，重传分组，此时接收方重新接收到一样的分组，造成<strong>分组重复错误</strong></p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层26.png" alt="计算机网络-数据链路层26" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层26</figcaption></figure><p>一个比特就是0或者1，只要接收的分组信号与上一次不同便可以。这样子就可以避免重复的问题</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层27.png" alt="计算机网络-数据链路层27" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层27</figcaption></figure></li><li><p>确认迟到</p><p>此原则可以避免：<strong>接收方发送ACK信号后，由于传输问题出现ACK信号迟到</strong>，导致发送方没收到确认信号，重传分组，同时开始传输下一个分组，此时ACK到达，但是此时超时重传的分组已经发送出去，接收方接收到后会发送一个一样的ACK信号</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层28.png" alt="计算机网络-数据链路层28" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层28</figcaption></figure><blockquote><p>注意，图中最下面那个数据分组与之前序号为0的那个数据分组不是同一个数据分组</p></blockquote><p>在点对点通信中，传输的时钟周期比较固定，很少出现确认迟到的情况，可以不用给确认分组编号</p></li></ol><p>注意事项：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层29.png" alt="计算机网络-数据链路层29" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层29</figcaption></figure><p>停止-等待协议的信道利用率：</p><p>假设收发双方之间是一条直通的信道</p><ul><li><strong>TD</strong>：是发送方发送数据分组所耗费的发送时延</li><li><strong>RTT</strong>：是收发双方之间的往返时间</li><li><strong>TA</strong>：是接收方发送确认分组所耗费的发送时延</li></ul><p>TA一般都远小于TD，可以忽略，当RTT远大于TD时，信道利用率会非常低</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层30.png" alt="计算机网络-数据链路层30" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层30</figcaption></figure><ul><li>当往返时延RTT远大于数据帧发送时延TD时（卫星电路），信道利用率非常低</li><li>若出现重传，信道利用率还要减低</li><li>因此就出现了另外两种协议：回退N帧协议GBN、选择重传协议SR</li></ul><p>总结：</p><figure><img src="https://zhf-picture.oss-cn-qingdao.aliyuncs.com/my-img/计算机网络-数据链路层31.png" alt="计算机网络-数据链路层31" tabindex="0" loading="lazy"><figcaption>计算机网络-数据链路层31</figcaption></figure><h4 id="回退n帧协议gbn" tabindex="-1"><a class="header-anchor" href="#回退n帧协议gbn" aria-hidden="true">#</a> 回退N帧协议GBN</h4>',86),c=[o];function r(e,s){return a(),n("div",null,c)}const d=i(g,[["render",r],["__file","03-计算机网络-数据链路层.html.vue"]]);export{d as default};
