# 已知问题和解决方案  {docsify-ignore}
## 安装问题 
### 计算机积极阻止了一个远程连接 {docsify-ignore}
<div class="question-box">

  网络问题：检查网络状态或是关闭防火墙
  </div>

  ### Requirements installation failed with return code 1 {docsify-ignore}
  <div class="question-box">
   
  尝试访问 [网址](https://pypi.tuna.tsinghua.edu.cn/simple/)，如显示被屏蔽则使用手机热点给电脑提供网络再次运行安装程序, 如仍未解决参照问题反馈方式进行反馈

  [安装问题反馈方式](zh-cn/guide.md#安装问题反馈方式) 
  
  </div>

  ###   Python installation failed with code 1601 {docsify-ignore}

   <div class="question-box">

   Python卸载出现残留，完全卸载Python后重启电脑，再次尝试安装。
   </div>

## 启动VRChat报错  {docsify-ignore}
<div class="question-box">
   <p>
   <b>问题描述:</b><br>
   当使用核显启动SteamVR时，VRChat会有99%的概率弹窗报错并闪退。  
   </p>
   <p>
   <b>解决方案 </b>  <br>
   暂无，非EXVR问题。
   </p> 
</div>

## 点击开始追踪未响应或者闪退  {docsify-ignore}
   
<div class="question-box">

  <b>深感疑惑:</b>  <br>
  能问出这个问题的我怀疑你有没有看教程。  

   <b>解决方案:</b>  <br>
  解压路径不能有中文（我认为是个人就看得到）
  
  [你自己点我看看](/zh-cn/guide.md#步骤二：解压压缩包)
 
</div>

---  
## 面捕常见问题  {docsify-ignore}
<div class="question-box">
   <b style="color: red;">·查看模型参数是否正确加载(端口占用)  </b><br>
   <p>
   当  __VRChat、EXVR、VRCFT__ （_面捕软件_） 都正常启动，但是模型参数一直显示loading，请关闭加速器，等待参数显示后再重新打开加速器，并重新登陆VRC或重启VRC。</p>
   <b style="color: red;">·模型是否支持面捕</b><br>
   <p>
      确保VRCFT软件中的模型参数数量大于10，参数小于10则代表即该模型不支持面捕。</p>
   <b style="color: red;">·我模型有面捕，而且参数正常加载，但是表情一直是同一个。  </b><br>
         <p>
      请确保EXVR、VRChat以及VRCFT正常运行。<br> 
      </p>
   <p>

   查看 [手势表情问题](#关于模型手势表情的问题)
   </p>
   <b style="color: red;">·我模型没面捕，但是我的模型表情改变不了</b><br>
   </p>
   
   查看 [手势表情问题](#关于模型手势表情的问题)
      <p>
</div>

---  
# 联想拯救者电脑异常占用与卡顿问题  {docsify-ignore}
## 已知问题描述  {docsify-ignore}
<div class="question-box">
<b style="color: green;">打开显卡混合模式时</b>

- **问题描述**
  启动软件与游戏并开启追踪时，最大化游戏窗口会导致CPU占用异常提升，同时追踪延迟增加约0.5秒。  

 **临时解决方法**  
  1. 关闭最大化，拉大游戏窗口游玩。  
  2. 打开独显直连（但会导致另一个问题）。  
  3. 调低优先级以减少占用，但增加的延迟不变。
</div>
<div class="question-box">
<b style="color: green;">打开显卡独显直连时  </b>

- **问题描述**  
  启动软件与游戏并开启追踪时，摄像头视频帧捕捉会出现明显卡顿。

- **临时解决方法**  
  1. 打开混合模式（但会导致另一个问题）。  
  备注：具体问题与拯救者的调度有关，暂无更多解决方法。
</div>

---  
# 常见问题展示  {docsify-ignore}
## R菜单看不到 {docsify-ignore}
<div class="question-box">
<ul>
 <li>使用VR模式打开VRChat，抬起手保证自己看得到R菜单，另一只手操作。
 </li>
 <li>
 打开R菜单设置，打开圆盘菜单，打开HUD显示即可。
 </li>
 </ul>
</div>

## 校准问题  {docsify-ignore}
<div class="question-box">
<ul>
<li>
 <b>头的校准</b><br>  
   将头摆正，按 `Ctrl + '`（分号）。
</li>
<li><b>手的校准 </b><br>  
   手掌向前放在头的右侧，按 `Ctrl + ]`。可以通过调整x、y、z参数调整伸展长度，满足个人不同需求。
</li>
<li><b>眼睛的校准  </b><br> 
   正常状态下眼睛，按 `Ctrl + ;`（闭不上眼时可以稍微眯眼）。 
   </li>
</div>

## 游戏内操作问题  {docsify-ignore}
<div class="question-box">
进入游戏无法移动  
   进入游戏按一次 `ESC`。
</div>

## 驱动问题 {docsify-ignore}
<div class="question-box">
只有头部有追踪，手部没有
</div>

### 解决方法 {docsify-ignore}
<div class="question-box">
<ol>
<li>
   关闭SteamVR跟VRChat，重新安装驱动(点击ExVR内的 __Uninstall Driver__ 再 __Install Driver__)后，重新打开SteamVR。
   </li>
   <li>
   重启电脑之后尝试重新安装驱动
   </li>
</ol>
</div>

---  
# ExVR快捷键没反应  {docsify-ignore}
## 场景  {docsify-ignore}
<div class="question-box">
在游戏内鼠标及快捷键无反应，但在EXVR窗口或其他窗口正常。
</div>

## 解决方案提供  {docsify-ignore}

<div class="question-box">
<ul>
<li>以管理员身份运行EXVR。  </li>
<li>将EXVR窗口移至前台，开启EXVR自带终端，查看输出。</li>  
<li> 保持其他软件开启，重启EXVR尝试。 </li>   
<li> 尝试关闭QQ及微信，再次重启EXVR。 </li>  
</ul>
</div>

   额外注释：EXVR快捷键参考 [快捷键列表](/zh-cn/hotkey.md#按键设置) ，未提及的与EXVR无关。

# 关于模型手势表情的问题 {docsify-ignore}

<h2 id="gesture-expression">关于模型手势表情的问题</h2>

## 问题描述: {docsify-ignore}
<div class="question-box">
 - 模型始终处于闭眼状态或其他手势表情状态(模型为无面捕模型或有面捕模型)
 </div>

## 解决方法: {docsify-ignore}
<div class="question-box">
<ol>
<li><b>有面捕模型</b><br>都带有手势表情禁用功能，自己去r菜单模型菜单里边找。实在没有就按照无面部模型的来操作</li>
<li><b>无面部模型</b><br>打开r圆盘菜单，点击选项，点击虚拟形象，将 (手势) 按钮禁用(此时表情仍未恢复，使用shift+F1即可恢复默认表情)，此后可使用pc切换手势表情的方法切换表情</li>
 </ol>
 </div>

---  
# Vrchat启动模式问题 {docsify-ignore}

## 为什么我的VRChat没办法变成VR模式 {docsify-ignore}
<div class="question-box">
- 关于启动Exvr之后为什么还是跟pc没区别的问题 </br>
下载好你的Steamvr，打开steam，点击vrchat的属性，启动方式改为steam虚拟现实启动 </br>
我依然想不通为什么这种基础问题难倒这么多人 </br>
以及vr模式没有规定一定要vr头显，不然exvr的项目是用来干啥的
</div>

## 为什么我的VRChat没办法变成原来的样子了 {docsify-ignore}
<div class="question-box">
虽然说这是一个非常基础的steam操作，但是我不知道为什么很多人不知道 </br>
问题描述: 为什么我的vrchat只能steamvr启动？ </br>
解决方案: steam中，点击库中vrchat的设置，属性，选择启动方式 </br>
</div>
ps: 你猜我为什么把这两个放在一起
