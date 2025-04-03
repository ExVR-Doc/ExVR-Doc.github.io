# 配置 {docsify-ignore}

## config.json {docsify-ignore}

`config.json` 文件, 被存放在本地root根目录 (`./settings`) 中， 修改用户配置的参数，这些参数包括有摄像机、IP设置、平滑和跟踪参数

### 常规设置  {docsify-ignore}

| 参数        | 描述                                      |
|------------|-------------------------------------------|
| Camera     | 指定输入的摄像机索引                        |
| IP         | 定义连接设置的IP地址                        |
| Smoothing  | `启用` / `禁用` 平滑移动                        |

### Tracking设置  {docsify-ignore}

| **项目**  | **参数**                     | **描述**              |                                                                
|----------------|------------------------------------|------------------------------------------------------------|
| **Head**       | enable                            | 激活头部追踪 (`true` / `false`)                              |
|                | x_scalar, y_scalar, z_scalar       | 调整各个轴上头部位置的灵敏度                                 |         
|                | x_rotation_scalar, y_rotation_scalar, z_rotation_scalar | 调整头部的旋转灵敏度 |
| **Face**       | enable                            | 启用面捕                                           |
| **Tongue**     | enable                            | 启用舌头动态捕捉                        |
|                | tougue_confidence                 | 舌头动态捕捉的置信度阈值 |
|                | tongue_threshold                  | 识别舌头运动的阈值 |
|                | tongue_x_scalar, tongue_y_scalar  | 调整舌头动态捕捉的灵敏度 |
| **Mouth**      | enable                            | 启用嘴部动态捕捉                        |
|                | mouth_close_threshold             | 嘴部闭合阈值 |
| **Hand**       | enable                            | 启用手部追踪 (`true` / `false`)                              |
|                | x_scalar, y_scalar, z_scalar       | 调整各个轴上手部位置的灵敏度                                 |
|                | hand_confidence                   | 手部追踪的置信度阈值 |
|                | enable_hand_auto_reset            | 自动重置手部位置 (`true` / `false`) |
|                | hand_detection_upper_threshold    | 手部检测的上限阈值 |
|                | hand_detection_lower_threshold    | 手部检测的下限阈值 |
|                | hand_count_threshold              | 手部的计数阈值 |
|                | only_front                        | 仅允许手在前方移动  |
| **Finger**     | enable                            | 启用手指追踪 (`true` / `false`)                              |
|                | finger_confidence                 | 手指检测的最低置信度 |
|                | finger_threshold                  | 手指状态（张开/收紧）的阈值 |



### 模型设置 {docsify-ignore}

| **模块** | **参数**                     | **描述**              |                                                          
|-----------|-------------------------------|----------|
| **Face Modle** | min_face_detection_confidence | 面部检测所需的最低置信度 |
|             | min_face_presence_confidence  | 检测面部存在的最低置信度 |
|             | min_tracking_confidence       | 维持面部跟踪的最低置信度 |
| **Hand Model** | min_hand_detection_confidence | 手部检测所需的最低置信度 |
|             | min_hand_presence_confidence  | 检测手部存在的最低置信度 |
|             | min_tracking_confidence       | 维持手部跟踪的最低置信度 |  



## data.json {docsify-ignore}

文件`data.json`位于根目录（`./settings`）中，包含虚拟体验的初始设置，包括位置、旋转和形态键

- **Position**：定义头部的3D坐标
- **Rotation**：定义头部绕各个轴的旋转
- **BlendShapes**：包含各种面部表情
- **LeftHandPosition** / **RightHandPosition**：定义左右手的位置
- **LeftHandRotation** / **RightHandRotation**：定义左右手的旋转
- **LeftHandFinger** / **RightHandFinger**：控制每个手指的运动

每个条目包含以下内容：
- **k**：键（属性的名称）
- **v**：属性的默认值
- **s**：调整值的偏移量
- **e**：启用标志（`true` / `false`）以激活或禁用设置


## smoothing.json {docsify-ignore}

文件`smoothing.json`位于根目录（`./settings`）中，用于设置平滑各种运动和形态键

- **OtherBlendShapes**：控制一般面部形态键的平滑度
- **EyeBlink**：平滑眼皮移动
- **EyeLook**：平滑眼睛移动
- **TongueOut**：平滑舌头伸出移动
- **TongueMove**：平滑舌头的左右移动
- **HeadPosition**：平滑头部位置移动
- **HeadRotation**：平滑头部旋转移动
- **LeftHandPosition** / **RightHandPosition**：平滑手部位置
- **LeftHandRotation** / **RightHandRotation**：平滑手部旋转
- **LeftHandFinger** / **RightHandFinger**：平滑手指运动

如果您不是对该应用程序进行二次开发，请避免修改以下参数：
- **key**：键
- **is_rotation**：属性是否为旋转
- **indices**：数据索引
- **shifting**：索引的偏移量

你可以**修改**以下参数以获得对自身更好的体验：  
- **max_delta**：允许的最大变化量。较高的值使动作更敏感，但可能引入抖动
- **deadzone**：忽略小幅运动的死区。较大的死区减少抖动，但可能使动作感觉不够流畅
- **dt_multiplier**：平滑因子。较小的值产生更平滑的运动，但可能降低响应速度


## hotkeys.json {docsify-ignore}

文件`hotkeys.json`被存放在根目录(`./settings`)中，定义了所有可用的 [键盘和鼠标快捷键](/zh-cn/hotkey.md#按键设置) ,你可以修改这个文件来自定义