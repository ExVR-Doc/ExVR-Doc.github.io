
# 关于基于EXVR的低成本VR实现扩展功能软件参考
<font color=red>请视情况选用引用项目</font>

## 软件
### 引言
本文使用来自github的开源仓库
- [视频管线全身追踪](https://github.com/ju1ce/Mediapipe-VR-Fullbody-Tracking)

- [owoTracker](https://github.com/abb128/owo-track-driver)

- [VRCFaceTracking](https://github.com/benaclejames/VRCFaceTracking)      
### 视频管线全身追踪
> https://github.com/ju1ce/Mediapipe-VR-Fullbody-Tracking
此软件可实现对全身的追踪，虚拟3个Tracker，完成对双脚和腰部的追踪。
在本计划中充当腰部（可替换）和脚的追踪器
如果继续使用owoTracker可依据教程关闭腰部追踪
### VRCFaceTracking
> https://github.com/benaclejames/VRCFaceTracking<br>
官方的面捕插件可以搭载多个模型，实现面捕功能
在本计划中充当面捕功能

### owoTracker
> https://github.com/abb128/owo-track-driver<br>
使用一台可以运行owoTracker的手机充当定位器，代替腰部Chocker，较使用视频管线全身追踪拥有更高的精确度。
在本计划中可以作为优化追踪的手段。

## 硬件建议
- 使用两个摄像头（任意）充当上半身和下半身的视频输入分别传入EXVR和Mediapipe-VR-Fullbody-Tracking
- 如果使用单摄像头也具有可行性，但需要将整个身体纳入摄像头的同时保持EXVR追踪视频清晰且易于操作VR游戏较为困难

