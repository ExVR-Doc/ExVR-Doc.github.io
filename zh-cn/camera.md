# 使用摄像头 {docsify-ignore}
## 使用本地摄像头 {docsify-ignore}
拥有的本地摄像头，是EXVR的默认选项，问题待收集；
## 使用外接摄像头 {docsify-ignore}
### 软件推荐 {docsify-ignore}

<b><font color=red>请自行选用适合的网络摄像头插件（电脑服务端以及手机客户端）仅用作推荐，请根据环境参考响应软件的文档并做出调整。</font></b>
<br>
<font color=red>软件具有切换前置以及后置摄像头的功能请参阅对应软件的说明。</font>

- [DroidCam](https://www.dev47apps.com) <br>
- [Iriun](https://iriun.com)<br>

### 链接配置 {docsify-ignore}
请在完成网络摄像头软件端的配置之后可以在软件中看到手机摄像头传输的视频图像后继续

<img src="/zh-cn/images/Camera.png" style="width: 100%; max-width: 100%; height: auto;"><br>
- 优先选择上图中的选项选择您的对应名称的网络摄像头
- 如没有出现网络摄像头，请重启EXVR
- 如问题仍未解决，可尝试使用网络摄像头的url填入输入框内

使用选择框时请勿填入摄像头url<br>
具体逻辑如下

``` python 
    source = (
                ip_camera_url
                if ip_camera_url != ""
                else self.get_camera_source(selected_camera_name)
            )
```    


