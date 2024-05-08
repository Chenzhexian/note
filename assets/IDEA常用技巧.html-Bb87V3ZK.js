import{_ as c,r as l,o as s,c as n,a as e,b as i,d,e as a}from"./app-BoIshBAq.js";const o={},p=a('<div class="custom-container warning"><p class="custom-container-title">注意：不同idea版本菜单、目录可能有细微差别，自己稍加分析都能找到</p></div><h3 id="_1-查看代码历史版本" tabindex="-1"><a class="header-anchor" href="#_1-查看代码历史版本"><span>1.查看代码历史版本</span></a></h3><p>鼠标在需要查看的java类 右键 找到<code>Local History</code> &gt;&gt; <code>Show History</code> 点开即可看到历史版本，常用于自己忘记代码改了哪些内容 或需要恢复至某个版本 (注意 只能看近期修改 太久了也是看不到的)</p><p><img src="https://czxcab.cn/file/docs/idea1.jpg" alt="图片"></p><h3 id="_2-调整idea的虚拟内存" tabindex="-1"><a class="header-anchor" href="#_2-调整idea的虚拟内存"><span>2.调整idea的虚拟内存</span></a></h3><p>尽管本质都是去改变 .vmoptions配置文件，但推荐使用<code>Change Memory Settings</code>去调整，选择<code>Edit Custom VM Options</code> 或者在本地磁盘目录更改，通过某些方法破解的idea 很可能造成idea打不开的情况。</p><p><img src="https://czxcab.cn/file/docs/idea2.jpg" alt="图片"></p><h3 id="_3-设置提示词忽略大小写" tabindex="-1"><a class="header-anchor" href="#_3-设置提示词忽略大小写"><span>3.设置提示词忽略大小写</span></a></h3><p>把这个勾去掉，（有的idea版本是选择选项 选择none即可），例如String 输入string 、String 都可以提示</p><p><img src="https://czxcab.cn/file/docs/idea3.jpg" alt="图片"></p><h3 id="_4-关闭代码检查" tabindex="-1"><a class="header-anchor" href="#_4-关闭代码检查"><span>4.关闭代码检查</span></a></h3><p>与eclipse类似，idea也可以自己关闭代码检查 减少资源使用，但不推荐全部关闭，（是大佬当我没说），把我们项目中不会使用到的关闭就好了</p><p><img src="https://czxcab.cn/file/docs/idea4.jpg" alt="图片"></p><h3 id="_5-设置文档注释模板" tabindex="-1"><a class="header-anchor" href="#_5-设置文档注释模板"><span>5.设置文档注释模板</span></a></h3><p>文档注释快捷键及模板</p>',15),r={href:"https://blog.csdn.net/qq_36268103/article/details/108027486",target:"_blank",rel:"noopener noreferrer"},h=a(`<h3 id="_6-显示方法分隔符" tabindex="-1"><a class="header-anchor" href="#_6-显示方法分隔符"><span>6.显示方法分隔符</span></a></h3><p>方便查看方法与方法之间的间隔，在代码不规范的项目中 很好用！</p><p><img src="https://czxcab.cn/file/docs/idea5.jpg" alt="图片"></p><h3 id="_7-设置多行tab" tabindex="-1"><a class="header-anchor" href="#_7-设置多行tab"><span>7.设置多行tab</span></a></h3><p>idea默认是选择显示单行的，我们把这个去掉，就可以显示多行tab了，在打开tab过多时的场景非常方便！</p><p><img src="https://czxcab.cn/file/docs/idea6.jpg" alt="图片"></p><blockquote><p>tab过多会自动关闭，<code>settings</code> - <code>editor</code> - <code>General</code> - <code>Editor tabs</code> - <code>tab limit</code> 数值设大就好了</p></blockquote><h3 id="_8-快速匹配方法的大括号位置" tabindex="-1"><a class="header-anchor" href="#_8-快速匹配方法的大括号位置"><span>8.快速匹配方法的大括号位置</span></a></h3><p><code>ctrl+[</code> 和 <code>ctrl+]</code> 可以快速跳转到方法大括号的起止位置，配合方法分隔符使用，不怕找不到方法在哪儿分割了。</p><h3 id="_9-代码结尾补全" tabindex="-1"><a class="header-anchor" href="#_9-代码结尾补全"><span>9.代码结尾补全</span></a></h3><p>例如一行代码补全分号，或者是if(xxx) 补全大括号，按<code>ctrl+shift+enter</code> 无需切换鼠标光标，大幅度提升了编码效率。</p><h3 id="_10-模糊搜索方法" tabindex="-1"><a class="header-anchor" href="#_10-模糊搜索方法"><span>10.模糊搜索方法</span></a></h3><p>例如People类里面的test方法，按<code>ctrl+shift+alt+n</code> 输入<code>Peo.te</code> 就可以查到该方法了，如果觉得这个快捷键难记 也可以按<code>ctrl+shift+f</code> （全局搜索文件）</p><h3 id="_11-预览某个类的代码" tabindex="-1"><a class="header-anchor" href="#_11-预览某个类的代码"><span>11.预览某个类的代码</span></a></h3><p>例如People类里面的test方法，按<code>ctrl+shift+a</code></p><p>例如我们在test类中，有句代码：People p = new People(); 我们想稍微查看一下People这个类，但是tab已经够多了，<code>ctrl+alt+b</code>会打开新的标签，标签多了就混乱了，尤其一堆命名类似的tab,这时候我们可以按<code>ctrl+shift+i</code> 实现预览功能，不占tab</p><p><img src="https://czxcab.cn/file/docs/idea7.jpg" alt="图片"></p><h3 id="_12-查看方法在哪里被调用" tabindex="-1"><a class="header-anchor" href="#_12-查看方法在哪里被调用"><span>12.查看方法在哪里被调用</span></a></h3><p><code>ctrl+alt+h</code> 可以清楚看到方法在哪些地方被调用；在知道这个快捷键之前，都是ctrl+h（idea默认 ctrl+shift+f）搜索，肉眼找的…</p><p><img src="https://czxcab.cn/file/docs/idea8.jpg" alt="图片"></p><h3 id="_13-自动导包、自动移除没用的包" tabindex="-1"><a class="header-anchor" href="#_13-自动导包、自动移除没用的包"><span>13.自动导包、自动移除没用的包</span></a></h3><blockquote><p>手动导包: <code>alt+enter</code> 手动移除未使用包: <code>crtl+alt+o</code></p></blockquote><p><img src="https://czxcab.cn/file/docs/idea9.jpg" alt="图片"></p><h3 id="_14-括号颜色区分" tabindex="-1"><a class="header-anchor" href="#_14-括号颜色区分"><span>14.括号颜色区分</span></a></h3><p><code>Rainbow Brackets</code> 插件 成对的括号用相同的颜色表示出来了</p><p><img src="https://czxcab.cn/file/docs/idea10.jpg" alt="图片"></p><h3 id="_15-idea全局设置-打开新窗口设置" tabindex="-1"><a class="header-anchor" href="#_15-idea全局设置-打开新窗口设置"><span>15.idea全局设置（打开新窗口设置）</span></a></h3><p>例如我们打开新窗口时，maven配置会恢复 这时就需要对打开新窗口的设置进行修改 达到一个全局的目的。</p><p><img src="https://czxcab.cn/file/docs/idea11.jpg" alt="图片"></p><h3 id="_16-快捷键切换回上一个点开的tab" tabindex="-1"><a class="header-anchor" href="#_16-快捷键切换回上一个点开的tab"><span>16.快捷键切换回上一个点开的tab</span></a></h3><p>当我们打开了多个tab的时候 ， 想要快速回到上一个点击的tab中 有的时候肉眼很难找</p><p>我们可以用快捷键 <code>alt + ←</code> 键 (eclipse版快捷键 idea默认快捷键需要自测) ，有的时候我们在后面tab编辑了内容 按一次可能不够 需要再多按几次 ,相应的 <code>alt + →</code> 切换到下一个点击的tab</p><blockquote><p>常见应用场景：debug发生类跳转时 、利用快捷键在其它类中创建方法时</p></blockquote><h3 id="_17-idea同个项目不同端口多开" tabindex="-1"><a class="header-anchor" href="#_17-idea同个项目不同端口多开"><span>17.idea同个项目不同端口多开</span></a></h3><p>这是个非常实用的功能，可以模拟集群 测试负载均衡。</p><p>此外 在开发阶段也是非常好用，开发过程中，让别人直接连自己本地测试 是不是非常方便？</p><p>那自己又想打断点调试 会影响别人 怎么办呢 ？这个时候多开的作用就体现出来了！</p><p>网上很多方法提到勾选 <code>Allow parallel run</code> (不同版本idea 名称不一样) ，我也亲眼见过有老师是可以多开启动的， 但我本地启动发现每次都会同时同端口启动多个，不知道是版本问题还是操作问题，这里我用的是另一种有效的方法：</p><p>在 <code>VM options</code> 加上</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token number">8993</span>是区别于 application<span class="token punctuation">.</span>yml 配置中 port 的另一个端口，达到不同端口多开的效果
<span class="token operator">-</span><span class="token class-name">Dserver</span><span class="token punctuation">.</span>port<span class="token operator">=</span><span class="token number">8993</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function _(b,g){const t=l("ExternalLinkIcon");return s(),n("div",null,[p,e("p",null,[e("a",r,[i("参考链接"),d(t)])]),h])}const f=c(o,[["render",_],["__file","IDEA常用技巧.html.vue"]]),m=JSON.parse('{"path":"/docs/technicalDocument/%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7/IDEA%E5%B8%B8%E7%94%A8%E6%8A%80%E5%B7%A7.html","title":"IDEA常用技巧","lang":"zh-CN","frontmatter":{"title":"IDEA常用技巧"},"headers":[{"level":3,"title":"1.查看代码历史版本","slug":"_1-查看代码历史版本","link":"#_1-查看代码历史版本","children":[]},{"level":3,"title":"2.调整idea的虚拟内存","slug":"_2-调整idea的虚拟内存","link":"#_2-调整idea的虚拟内存","children":[]},{"level":3,"title":"3.设置提示词忽略大小写","slug":"_3-设置提示词忽略大小写","link":"#_3-设置提示词忽略大小写","children":[]},{"level":3,"title":"4.关闭代码检查","slug":"_4-关闭代码检查","link":"#_4-关闭代码检查","children":[]},{"level":3,"title":"5.设置文档注释模板","slug":"_5-设置文档注释模板","link":"#_5-设置文档注释模板","children":[]},{"level":3,"title":"6.显示方法分隔符","slug":"_6-显示方法分隔符","link":"#_6-显示方法分隔符","children":[]},{"level":3,"title":"7.设置多行tab","slug":"_7-设置多行tab","link":"#_7-设置多行tab","children":[]},{"level":3,"title":"8.快速匹配方法的大括号位置","slug":"_8-快速匹配方法的大括号位置","link":"#_8-快速匹配方法的大括号位置","children":[]},{"level":3,"title":"9.代码结尾补全","slug":"_9-代码结尾补全","link":"#_9-代码结尾补全","children":[]},{"level":3,"title":"10.模糊搜索方法","slug":"_10-模糊搜索方法","link":"#_10-模糊搜索方法","children":[]},{"level":3,"title":"11.预览某个类的代码","slug":"_11-预览某个类的代码","link":"#_11-预览某个类的代码","children":[]},{"level":3,"title":"12.查看方法在哪里被调用","slug":"_12-查看方法在哪里被调用","link":"#_12-查看方法在哪里被调用","children":[]},{"level":3,"title":"13.自动导包、自动移除没用的包","slug":"_13-自动导包、自动移除没用的包","link":"#_13-自动导包、自动移除没用的包","children":[]},{"level":3,"title":"14.括号颜色区分","slug":"_14-括号颜色区分","link":"#_14-括号颜色区分","children":[]},{"level":3,"title":"15.idea全局设置（打开新窗口设置）","slug":"_15-idea全局设置-打开新窗口设置","link":"#_15-idea全局设置-打开新窗口设置","children":[]},{"level":3,"title":"16.快捷键切换回上一个点开的tab","slug":"_16-快捷键切换回上一个点开的tab","link":"#_16-快捷键切换回上一个点开的tab","children":[]},{"level":3,"title":"17.idea同个项目不同端口多开","slug":"_17-idea同个项目不同端口多开","link":"#_17-idea同个项目不同端口多开","children":[]}],"git":{"updatedTime":1704359960000,"contributors":[{"name":"czx","email":"2504058202@qq.com","commits":2}]},"filePathRelative":"docs/technicalDocument/常用工具/IDEA常用技巧.md"}');export{f as comp,m as data};
