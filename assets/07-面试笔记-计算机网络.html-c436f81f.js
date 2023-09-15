import{_ as a,o as e,c as h,b as r}from"./app-68913a36.js";const d={},t=r('<h2 id="_1-从输入url到网页显示的完整过程" tabindex="-1"><a class="header-anchor" href="#_1-从输入url到网页显示的完整过程" aria-hidden="true">#</a> 1. 从输入URL到网页显示的完整过程</h2><h3 id="_1-1-解析url" tabindex="-1"><a class="header-anchor" href="#_1-1-解析url" aria-hidden="true">#</a> 1.1 解析URL</h3><p>首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程</p><h3 id="_1-2-缓存判断" tabindex="-1"><a class="header-anchor" href="#_1-2-缓存判断" aria-hidden="true">#</a> 1.2 缓存判断</h3><p>浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求</p><h3 id="_1-3-dns解析" tabindex="-1"><a class="header-anchor" href="#_1-3-dns解析" aria-hidden="true">#</a> 1.3 DNS解析</h3><p>首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断本地是否有该域名的 IP 地址的缓存，如果有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向根域名服务器发起请求，获得负责的顶级域名服务器的地址后，再向顶级域名服务器请求，然后获得负责的权威域名服务器的地址后，再向权威域名服务器发起请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求</p><h3 id="_1-4-获取mac地址" tabindex="-1"><a class="header-anchor" href="#_1-4-获取mac地址" aria-hidden="true">#</a> 1.4 获取MAC地址</h3><p>当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址，因为应用层下发数据给传输层，TCP 协议会指定源端口号和目的端口号，然后下发给网络层。网络层会将本机地址作为源地址，获取的 IP 地址作为目的地址。然后将下发给数据链路层，数据链路层的发送需要加入通信双方的 MAC 地址，本机的 MAC 地址作为源 MAC 地址，目的 MAC 地址需要分情况处理。通过将 IP 地址与本机的子网掩码相与，可以判断是否与请求主机在同一个子网里，如果在同一个子网里，可以使用 ARP 协议获取到目的主机的 MAC 地址，如果不在一个子网里，那么请求应该转发给网关，由它代为转发，此时同样可以通过 ARP 协议来获取网关的 MAC 地址，此时目的主机的 MAC 地址应该为网关的地址</p><h3 id="_1-5-tcp三次握手" tabindex="-1"><a class="header-anchor" href="#_1-5-tcp三次握手" aria-hidden="true">#</a> 1.5 TCP三次握手</h3><p>首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接收到请求后向客户端发送一个 SYN ACK报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个ACK确认报文段，服务器端接收到确认后，也进入连接建立状态，此时双方的连接就建立起来了</p><h3 id="_1-6-https握手" tabindex="-1"><a class="header-anchor" href="#_1-6-https握手" aria-hidden="true">#</a> 1.6 HTTPS握手</h3><p>如果使用的是 HTTPS 协议，在通信前还存在 TLS 的一个四次握手的过程。首先由客户端向服务器端发送使用的协议的版本号、一个随机数和可以使用的加密方法。服务器端收到后，确认加密的方法，也向客户端发送一个随机数和自己的数字证书。客户端收到后，首先检查数字证书是否有效，如果有效，则再生成一个随机数，并使用证书中的公钥对随机数加密，然后发送给服务器端，并且还会提供一个前面所有内容的 hash 值供服务器端检验。服务器端接收后，使用自己的私钥对数据解密，同时向客户端发送一个前面所有内容的 hash 值供客户端检验。这个时候双方都有了三个随机数，按照之前所约定的加密方法，使用这三个随机数生成一把秘钥，以后双方通信前，就使用这个秘钥对数据进行加密后再传输</p><h3 id="_1-7-返回数据" tabindex="-1"><a class="header-anchor" href="#_1-7-返回数据" aria-hidden="true">#</a> 1.7 返回数据</h3><p>当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程</p><h3 id="_1-8-页面渲染" tabindex="-1"><a class="header-anchor" href="#_1-8-页面渲染" aria-hidden="true">#</a> 1.8 页面渲染</h3><p>浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判断是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了</p><h3 id="_1-9-tcp四次挥手" tabindex="-1"><a class="header-anchor" href="#_1-9-tcp四次挥手" aria-hidden="true">#</a> 1.9 TCP四次挥手</h3><p>TCP 断开连接的四次挥手过程。若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。服务端收到连接释放请求后，会告诉应用层要释放 TCP 连接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明客户端到服务端的连接已经释放，不再接收客户端发的数据了。但是因为 TCP 连接是双向的，所以服务端仍旧可以发送数据给客户端。服务端如果此时还有没发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端便进入 LAST-ACK 状态。客户端收到释放请求后，向服务端发送确认应答，此时客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，就进入 CLOSED 状态。当服务端收到确认应答后，也便进入 CLOSED 状态</p>',19),i=[t];function _(c,n){return e(),h("div",null,i)}const p=a(d,[["render",_],["__file","07-面试笔记-计算机网络.html.vue"]]);export{p as default};
