# Framework& MachineSupport

C

0 G

N E X

2020

2023/4/21

PERFECTING VISION

# L3-->L4 Training --The second Part

<table><tr><td>分类</td><td>课程</td><td>培训内容</td><td>课堂</td><td>责任人</td></tr><tr><td>Vision Basic</td><td>1.视觉项目评估</td><td>整体视觉项目评估方案,相机,镜头,光源</td><td>0</td><td></td></tr><tr><td rowspan="5">Vision Tools Script</td><td>1.Vision Pro 脚本的编写 &amp; 脚本调试</td><td></td><td rowspan="3">1</td><td rowspan="3">建鹏</td></tr><tr><td>2.工具的调用及其参数的输入输出</td><td>工具的调用及其参数的输入输出</td></tr><tr><td>3.VPP界面显示(Inspection输入输出的介绍)</td><td>VPP界面显示(Inspection输入输出)</td></tr><tr><td>4.Vision Tools Script Demo 1</td><td>练习 Vision Tools Script</td><td>1</td><td>甲文</td></tr><tr><td>5.Vision Tools Script Demo 2</td><td>练习 Vision Tools Script</td><td>1</td><td>雷过</td></tr><tr><td rowspan="13">Framework</td><td>1.Framework 框架介绍</td><td>Framework 框架介绍</td><td rowspan="4">1</td><td rowspan="4">锦涛</td></tr><tr><td>2.创建一个新的 MachineSupport</td><td>项目启动,创建一个空的 machinesupport。</td></tr><tr><td>3.相机调用</td><td>相机的设置调用等</td></tr><tr><td>4.标定及 inspection 模块</td><td>标定及 Inspection 的添加,功能设置等</td></tr><tr><td>5.IMachineSupport 接口主要函数介绍</td><td>MS 中最重要的,要用户实现的接口介绍</td><td rowspan="2">1</td><td rowspan="2">建军</td></tr><tr><td>6.其他 Framework 中主要函数介绍</td><td>其他常用的 Framework 函数讲解</td></tr><tr><td rowspan="3">7.通讯模块</td><td>控制 inspection 输入输出</td><td rowspan="6">1</td><td rowspan="6">认证</td></tr><tr><td>控制对应 Inspection 运行</td></tr><tr><td>与 SI 通讯的建立,按照 SI 指令运行 inspection,获取结果,发送坐标等结果到 SI。</td></tr><tr><td>8.Vpp 间数据传输介绍</td><td>跨 vpp 数据分享及传递</td></tr><tr><td>9.MachineSupport 自定义窗口的添加</td><td>项目自定义窗体的添加和设计。</td></tr><tr><td>10.存图模块</td><td>项目存图逻辑如 Group 模块。</td></tr><tr><td>11.从 0 开始搭建一个简单的三相机对位项目。</td><td>综合演练</td><td>1</td><td>黄海</td></tr></table>

# Framework 框架介绍

![](images/fbedfb8224d91d57d8f3536ecfd567f7b3960f07ad5e3c75bed1045d919b6e24.jpg)

Framework 是一个视觉服务器，是 VisionPro，机械手对位和检测设备之间的桥梁。主要包括以下功能：

- 获取图像  
- 自动标定  
- 运行inspection的toolblocks   
- 与光源控制器对接  
- 设置跟机台主控程序通讯的 TCP/IP 或者串口  
显示 Log 信息  
- 呈现 inspection 结果给用户  
- 保存图片  
Offline 模拟

# Framework 框架介绍

# Framework 文件分布如下：

![](images/9afce9e9fced20e079686808c14da94e9dd44d101b7753a2b9fc5b004243ebfe.jpg)

# Framework 框架介绍

![](images/0b8f6d1289dcd8cd6dc1c65e97e3b7c228f2e1d4163e4bc786f455508d12cc6e.jpg)  
Framework 界面介绍：

# Framework 框架介绍

Framework 界面介绍：

![](images/7ea733667c9ad4f65e7e32f0134a12ead6be3df0be17fa0ed8cea9e2d9b88d2a.jpg)

![](images/05934415b2a724aa6994bc9ae2b30b8a861e31aa1af9bc2d495598ee024cdb27.jpg)

# Framework 框架介绍

Framework 界面介绍：

![](images/b0a86b93a5184d12f1e9fae59e2f4d8f17ebe5eb75a2e3adee4c2062c8ea207c.jpg)

# Framework 框架介绍

Framework 界面介绍：工具栏

![](images/53ddb9731e14fdf811bf51447caf768e83552594f09bb73441d9883f4c68ce69.jpg)

Run

Camera

![](images/8e4a32332bd4053dc1d6295ef337983eb9ae08dc125ead1f0f264f4bcb074394.jpg)

Calibration

![](images/f5bfcf072c3f774f3ac52c340abca0ac8e2a7166965819e155d2385c1725b8c8.jpg)

Inspection

![](images/fbaea6a8c96066d399ed261c32462ce44ab897791967ddf61059bee536f94437.jpg)

Tools

![](images/199704efc1944a682ab2e8379861e8d63d8e1b745dce14d6c8676c200b2b5754.jpg)

Settings

Run: 控制系统 Offline/Online

![](images/0f624b58072bce9dd51ca33a5e4045c4a8fad315642910b2d113eeab8da896e0.jpg)

Camera: 设置相机 IP 和其他参

![](images/91ffdf5bcdf981c3b6d19646f2ea6ab3aff556d555bcbd48259165f369e4eb6b.jpg)

![](images/98e98aa46e50566a044693b54d9aa9b52c2c61ad019ff9b745ec763817b91ee8.jpg)

![](images/5a897629be7a81952f3f114fbc0d28e57c88cba2a9bb9dd41d3205d96c764675.jpg)  
Camera 1 Settings   
Camera Live Mode

Start Live

Exposure Time:

![](images/b0f7e1d21ce59f9dbbbaf5665411bd506248380027cb62aa37bbf4ec11b180b7.jpg)

- Camera Type : AreaScanGigE( 面阵相机 )  
DisplacementSensor(位移传感器)   
Other:USB 3.0 相机  
- GigE Settings: IP Address & Bandwidth(带宽)   
- Camera Settings: Brightness(亮度), Contrast(对比度), Timeout(超时), Trigger Mode(触发模式：软 or 硬触发), Hardware Trigger Polarity(触发时是低电平 -> 高电平 or 高电平 -> 低电平); line debounce time: 线消抖时间，去除杂乱干扰信号抖动 Trigger Delay Abs: 触发延迟时间  
- Flip Rotate: 图像旋转翻转   
- Revert：恢复初始化  
Edit AcqFifo：编辑取相工具（注意：不会保存）

![](images/174e684ed9db3a06c46a107f94eff78b4947035842912beea941fb565726b401.jpg)

# Framework 框架介绍

Framework 界面介绍：工具栏

![](images/fa6849c74cd7e3e2b07167d58d9977d4c064ba4144bd7e434620da8fb4da34fc.jpg)

Run

![](images/8bb9bb297c3e1935ed6e72b5fa4bff9ff788055200ba1c9564eb9cf843558b0d.jpg)

Camera

![](images/5b8966513d4e88ed37b3db1000aba011db8be5cc0166be04b76a2ac5f90624e0.jpg)

Calibration

![](images/881d1eac22c0b36c6a6bf212fd8f5db7c95d80fc9b138e49801f04143d086c70.jpg)

Inspection

![](images/614c0d1ab6da1f2f4a780946fbe327fdf6b39d3ece0d2108c15c7bd8769ccbf7.jpg)

Tools

![](images/5588865f549a41a7412333ae6f897f33c20db29e3b75083422bf8d81db6132c4.jpg)

Settings

# Calibration: 标定

![](images/15093a8ccb6911b1d61a2799c3929d701864509500f94a872878c842326d69a9.jpg)

- Acquisition Setup: 标定的相机取相设置   
- Edit ToolBlock: 编辑 VPP(具体后面章节会讲)  
- Autocalibration Settings: 自动标定设置

![](images/cb83ede6447669c6b9a79702e669511ab4e94b507b9ed7ab8bb3e5fb442ad701.jpg)

# Camera Motion, 如左图:

- Passthrough：系统不进行标定或者不在 calibration 内进行标定。为采集的图像已经含有标定信息的位移传感器或其他采图设备使用。  
StaticPose: 相机静止，常规的 9 点标定 /11 点标定等 /Chardboard 标定  
- MovingCameraXYTheta: 标定块不动，相机运动标定  
- MovingCameraXYThetaInverse: 建立相对坐标系而使用 $(\star)$ 。

# Framework 框架介绍

Framework 界面介绍：工具栏

![](images/eda64f1cead17951a3429eaa51641dcb717747e6f5e24e5c45bc490435d243fc.jpg)

Run

![](images/8f6fba22ce7c34b72b3d8de8e95f1714e31ec20bc889e156a484f2c6707c6238.jpg)

Camera

![](images/a937d54b45884f60e8f6e37a993d7f61ac0947f2710f8f8cde6a4a17b255f435.jpg)

Calibration

![](images/b96c934362e0e30a27da7433589cfe138c72f07f2f22c543428c08bdd6fc85fc.jpg)

Inspection

![](images/09905c11809cc125ab445ed54b9ff2d9a387579e7a1cbd889ccb6f1c9774e47c.jpg)

Tools

![](images/07f37df3193aca95909b8bcc0298782e92733b54bffa6a164093bb510abae7d8.jpg)

Settings

![](images/307d99afa14a94f0410af713d4d591affbc2d880dfce12edfc5dab1b6e3495b5.jpg)

RotationAndTranslation  
RotationAndTranslation  
RotationOnly  
TranslationOnly1Axes  
TranslationOnly2Axes

Physical Configuration: 默认值 0   
- Distortion Model: 扭曲模式，此项一般选择 OneParamRadial 模式，如  
- 果是真远心镜头可以选择 Telecentric 模式。  
- Degrees of Freedom: 角度自由度, 分为 RotationAndTranslation(XYTheta),  
- RotationOnly(OnlyTheta),TranslationOnly1Axis(Only1Axis),TranslationOnly2Axes(OnlyXY),11点标定使用  
- RotationAndTranslation，9点标定使用TranslationOnly2Axes。其他两项很少使用。  
- Calibration Plate Mylar 标定板规格，按照实际使用的填写，否则会导致标定的坐标系异常  
- Minimum Rotation: 最小旋转角度, 最小为 5 度, 否则计算不准确。  
- Align Home2D to Motion2D at Image Center: 默认不勾选。

# Framework 框架介绍

Framework 界面介绍：工具栏

![](images/cb40001d05cdb5924d788cd39a9e4793fba3e7241e224a52b8311786c2950c01.jpg)  
Inspection

Inspection 1 Settings

![](images/cc754e5a237cbe659a12cf0af7df0ddd227c793fad10478f15a0f095d4720e5c.jpg)

![](images/c0120e21fdbfad5483300873756d85eb6ac1cfbfc032f081c46959ebf8ab92be.jpg)

Run

![](images/ecf0061fd55b31827566f866aa86475fcceca7509791f58da030f257e369efe1.jpg)

Camera

![](images/68d8451afa60212d3a2f3afeafb9cc3e69115603d552300a773785717949b59f.jpg)

Calibration

![](images/b43e05b73a1a3bf68001bb89e691c629d1a69a677eef6a3645884029c6a3f861.jpg)

Inspection

![](images/6b91727360d9b842d2ea483ddf7761850f69fe545d9d16e646c70ce6612a7faf.jpg)

Tools

![](images/fcae33db766de55c6c6dc5867a3357909ba44a0819ddf613406e861b1258d85a.jpg)

Settings

Inspection:

Acquisition Setup: 正常拍照的相机取相设置 EditToolBlock: Inspection_VPP 编辑

![](images/603e57b69c2551f45633e65b668e895f53468276f19105e1c92b8756430bb0d5.jpg)

Inspection Settings _ Record Displays

Show Record: 选择 Inspection_VPP 某个工具的图像，仅保存 / 显示在 Play1 等上 Add Record：增加 Show Record 项。

# Framework 框架介绍

Framework 界面介绍：工具栏

# Tool

$\mathcal{A}$ Tools

![](images/19f29d966b10cc94053c0c0b885ea72aa4887f7e4e17040dc389c0e3180fa502.jpg)

Settings

CustomTool

S

Camera Setup Tool...

Calibration Info...

Change Calibration Tools...

Edit Autocal Template Tool...

Motion Error Visualizer...

Reset Autocal Calibration Scripts...

Force All Tools to Release Mode...

ReLoad All Inspections...

Reduce Inspection Tool Size...

Run Image Cleanup Now

Generate Cycle Time Report...

Convert VPBs to Bitmaps...

Version Information...

Image Playback

![](images/7ecb9a02b3d33530fcc2f8b061ad81e2fb4b39fdc0a88e2c4a2e7d977cb2295b.jpg)

Run

![](images/8663b2f8a2ba04744a33b3cf4cef1b8c1f8643d8b67f64ecb3e7b186be245648.jpg)

Camera

![](images/520e69952dcd2f43ffb99d70298bb6878f39e40af10332fa7d104b37159126fd.jpg)

Calibration

![](images/02f54da32db758318b2727ff9a496b580a4bda95b8e8ebdc9405ed93ca39e560.jpg)

Inspection

![](images/c6f7fa11204a8ddfe98eaa79dd128fe02e8a734dd3cfeb6e2e082ea90dd4a1d5.jpg)

Tools

![](images/21b2d623a75e9dd5d880db52e016ddbd33a117da6d221793e66b549495a9eee1.jpg)

Settings

- Camera Setup Tool: 相机设置工具，MP 架线保持相机的一致性  
- Calibration info: 可以查看标定结果信息  
- Change Calibration Tools: 更改标定工具 (*)  
- Edit Autocal Template Tool: 更改自动标定工具 (*)  
- Motion ErrorVisualizer: 分析机构误差  
- Reset Autocal Calibration Scripts: 还原自动标定脚本 (*)  
- Force All Tools to Release Mode: 强制所有工具到 Release 模式  
- Reduce Inspection ToolSize: 减小 Inspection 工具尺寸   
- Reload All Inspection: 重新加载所有 Inspection  
- RunImage Cleanup Now: 清理图片  
- Generate Cycle Time Report: CT 报告 (+ machinesupport 实现)   
- Convert VPBs to Bitmaps: 转换 VPB(CGA -> VPB) 文件为 Bitmap  
- Version information: 版本信息  
- Image Playback: 仿图工具

# Settings

![](images/79e63d6f1e11924c68b7d1111ec41ef30d8a3e1ed1797c097f3c70e5be3d9b14.jpg)

• Language(语言): 系统界面语言设置 (中/英/日/韩…)  
- Data Save Settings：数据保存设定  
- Image Save Settings: 图片保存设置  
- Image Cleanup Settings: 图片删除设定  
- Image File Name Settings: 文件名设置  
Light Controller Setup: 光源控制器设置  
- Light Controller Intensity: 光源控制器通道 / 灵敏度设置  
- Server Communication: 系统服务器设置   
- Vision System Setup: 视觉系统设置   
AssemblyPlus Settings: 框架设置   
ProductManagement: 产品管理

![](images/42ad9c46cb7fab7f335f3f7da6d2a02285f110c5d067daae1301ed6e274300ba.jpg)

Run

![](images/b71d7b8a45372f78b4a87651009d6f93f0c97e308a3847d8ed292976a6efdc3f.jpg)

Camera

![](images/cfbc31ba71189051b18da8d4037324eef38ef81705861813ba164d6788e524e5.jpg)

Calibration

![](images/1c1342a0d2222fff181485ca6d2b82f4e37069f0833b78108bf62266ce2e169e.jpg)

Inspection

![](images/18c719fd2dc4f1babc0ed4e8629ed269eadcedad8ee3a5f942b7d88c6da043f0.jpg)

Tools

Settings

# Image Save

# Settings :

![](images/8f20f7410eb81446c5407b68bbc230809840f5e87f604ad955339a25c3a5c863.jpg)

# Framework 界面介绍：工具栏

![](images/54a31322a29e83a2afa3bc36bd0322228c7d9ea9527aecf38f1362a0c5f050dc.jpg)

Run

![](images/2627320eca6896d264150c163c2f7f296eb2ac8040a5a3116199ac87148543d6.jpg)

Camera

![](images/12cdf11cae39ac56da5784a63ef32713381e41672628ee02b2dfbe051ff9b98a.jpg)

Calibration

![](images/fcb7d93fa4fb9356e925101f3e5cc12ef955f55639bf13083b8e7d6fdde5d463.jpg)

Inspection

![](images/24e395dc840a350ecdab89701f9352552fe9152935806dbb7a2a3115b194d10e.jpg)

Tools

Settings

# Image File Name

# Settings :

当framework运行时多线程保存图

片

Image File Name Settings

Image File Path

Raw Format

{0:yyyyMMdd}},{3}},{1},{2},{HHmmssff},{4},{D3},{6},{7}

Raw Preview

20190408\Pickup\PartNameABC141812752_003_ABCDEFG123456_Accept.bmp

Annotated Format

{0:yyyyMMdd}},{3}},{1},{2},{HHmmssff},{4},{D3},{6},{7}

Annotated Preview

20190408(Pickup)PartNameABC141812752_003_ABCDEFG123456_Accept.jpg

Parameters

0 = (DateTime) Part creation time

1 = (String) Part name (Inspection name if no part was specified)

2 = (DateTime) Image acquire time

3 - (String) Inspection name

4 = (int) Injection input ID

$5 =$ (String) "ImageID" inspection tool output terminal

$6 =$ (String) "ImageID", with an underscore prepended, if "ImageID" exists

7 = (String) RunStatus (Unknown, Accept, Warning, Reject, Error)

8 = (String) Inspection result status (OK, NG)

9 = (String) First manual grading defect nan

10 = (String) Comma separated manual grading defect names

11 = (String) Manual grading comment

Part Name

![](images/eb274e91dcc93fe92571cafb43e87d22bbc88bfd876f8e6fe8901e9b6130032e.jpg)

![](images/0e9dbccb907ef245e8041dfe6a3d126923d2078d2f189e79903f2d3e7aec59c1.jpg)

Preview: PartNameABC

Parameters

0 = (String) Specified Part Name

1 = (DateTime) Part creation time

2 = (UInt64) PartUID

Revert

Default

File name strings are formatted using String.Format...

See the MSDN documentation for more details.

OK

Cancel

$\left\{  {1,2,3}\right\}   \Rightarrow  \;\left\{  {1,3,4}\right\}   \Rightarrow  \left\{  {2,3,4}\right\}   \Rightarrow  \left\{  {3,4,5}\right\}   \Rightarrow  \left\{  {4,5,6}\right\}   \Rightarrow  \left\{  {5,6}\right\}   \Rightarrow  \left\{  {6,7}\right\}   \Rightarrow  \left\{  {7,8}\right\}   \Rightarrow  }\right.$

# Parameters:

0：创建时间 yyyyMMdd  
• 1:Partn赫的名字，由 Machinesupport传入（很多情况为SN)

• ②Part 创建时间_yyyyMMdd

- 2: 图像采集时间可以自己测试)  
3:Inspection名字  
4: Inspection 的 input_ID  
- 5:Inspection 输出中的 ImageID  
- 6:Inspection 输出中的 ImageID 如果存在，用下划线强调  
- 7:VPP)_RunStatus 状态 (String)   
8:Inspection 结果状态 (String)   
9: 第一次手动采图缺陷名字 (可以自己测试)  
10: 逗号分隔的手动采图缺陷名字 (可以自己测试)  
11: 手动采图内容 (可以自己测试)

![](images/d75d6ddf95c208b93f2429581d7aafa313894d7f147839c1ba99ebe5d58fba45.jpg)  
Light Controller Setup :

![](images/934166d5ae30e7197838b51a8bc85d69b096f32134559386822b4a2aed512e3d.jpg)

设置光源串口/TCP模

式； Serial模式：

OPT_OPTControllerDemo 软件设置好的串口参数填入上

图中TCP模式：

光源的IP地址由OPT_OPTControllerDemo软件设置

OPTControllerDemo 软件设置好的 IP 地址填入上图 TCP

中

![](images/d7e71b0ace1c76782268afcb728a49104f37e57891b47fcb2fe794f66448177c.jpg)  
Light Controller Intensity:

设置不同材质各个Inspection光源参

数；选择对应的材质；

选择对应的

Inspection ; Intensity

数值由0255;

# Framework 框架介绍

Framework 界面介绍：工具栏

![](images/5f8819858a09ac6daa21f7d97be5104417338d57fa9093d58a231be31b2b83c6.jpg)  
Server

服务器TCP/Serial设置；

注意事项下面会有叙述；

![](images/b6596292acab3dcfef4e71de4779bd2e6adc85ff2a49d0fc371d9d07ff2c3315.jpg)

Run

![](images/b181a0668251454a2d9fe99fefb604c4f701ad93ee774a082a9bbe8d1e459896.jpg)

Camera

![](images/d32f09d9815ef48ceed515ee13a5c642f3c0ee07cd90b90cd27c8970b17892ea.jpg)

Calibration

![](images/5337a886ac34c2b173885762ddcd95566806a521fe77f66ade1b925ebc220837.jpg)

Inspection

![](images/197af85067f596213a95dbddfe41c5bf01c752553ec04b52e26deb7e3360bc21.jpg)

Tools

Settings

![](images/0ee0efa69b5df5fb090b578e603f56af7c3b4a47461f9e3d617b1e02c670a96f.jpg)  
Framework Settings:

- Camera IP 也可以在此设置；  
- Calibration 的 Camera Motion 也可以在此设置；  
- Pitch 为 Mylar 规格大小;  
- Inspection 在此命名;  
- 使用鼠标来勾画 Camera/Calibration/Inspection 三者关系;  
通过 $+ -$ 符号可以添加项目/输入/输出;  
- 注意 Camera/Calibration/Inspection 三者的输出可以连几

个其他项的输入，但是三者的输入只能对接其他项的一个输出

![](images/a895a48307b7d3aa4fc07ece68dfa60a6f199ffd43ceafb72159b9306c471fbd.jpg)  
Framework Settings:

Appearance 外观：

Result Display: 界面显示 Display 数量

Display Layout: 界面 Display 排布方

式 Default Language: 默认语言

Initial Window Position: 初始化软件位置

Window Size: 软件外观大小

Fit Displays with Graphics: 自适应画面

Show Cycle Time on Displays: 在 Display 显示 CT 时 间 Maximize on Startup: 初始化全屏

Behavior:

Startup in Online Mode: 开机时 Online 模式

Auto-show Onscreen Keyboard: 自动显示屏幕键盘

Use Hardware Triggers in Simulator: 仿图时

使用硬触发

# Framework 框架介绍

# Framework 界面介绍：光源部分

![](images/29053edc881b933d30de3be715cb4ae0861a39ea4f68d4f057cfa510486bb4b1.jpg)

Run

![](images/e799b11bee4a75f6bb1c42b50f0c2c03de8afc5194fdaec0b890094e3718e977.jpg)

Camera

![](images/b423d35e18cf5d032a8d7edf55f831286f239b9f64c94dd17aafbd7585838541.jpg)

Calibration

![](images/5655bc845e570f5a22eb98b5de005df194aca6fabf1aa347a276a774c3d79915.jpg)

Inspection

![](images/f34cbdb9a1a351a8440736870f8d3712dc1283703fea24ba3d3bc2791b4a3032.jpg)

Tools

Settings

![](images/8768f4ce2e24d145297f1f0ec2d9a3c714948832e06433f69ed135fde43212c1.jpg)

![](images/c94edc841df44405a8b82014de33ecdc19066bcbec4a571ff1f6e0b87cc7ae81.jpg)

# 创建一个新的 MachineSupport

1. 解压一个新的框架升级包，我们以目前最新的 FW3.5.4.6 创建 CognexAssemblyPlus_x64 为例

20230228 FW_Pack_v3.5.4.6_VPro9.2CR2

20230228 FW_Pack_v3.5.4.6_VPro9.2CR2.7z

2. 将程序所必须的应用程序和 .dll 文件导出

Calibrations 2023/2/22 21:53   
CameraSetupTools 2023/2/22 21:53   
CamSetup 2023/2/22 21:53  
CognexAssemblyPlus_x64 2023/2/28 17:32   
CognexAssemblyPlusAndInspectPro... 2023/2/28 17:32   
CognexInspectPro_x64 2023/2/28 17:32   
DisplayColorMaps 2023/2/22 21:53   
Inspections 2021/9/23 15:24   
Language 2023/2/28 17:32   
Log 2022/9/5 22:05   
Plugs 2023/2/22 21:53   
Referenced Assemblies 2023/2/22 21:53   
x64 2023/2/23 17:09   
CommunicationTester.exe 2021/5/13 17:13   
UniversalFrameworkUpdater.exe 2023/2/22 21:36

![](images/1cba0a07f0e085ab58e8c16866b43f6eb0c1d33876adb1f5a5ff3f7d1e616859.jpg)

Calibrations 2023/2/22   
CameraSetupTools 2023/2/22   
CamSetup 2023/2/22  
CognexAssemblyPlus_x64 2023/2/28   
CognexAssemblyPlusAndInspectPro... 2023/2/28   
CognexInspectPro_x64 2023/2/28   
DisplayColorMaps 2023/2/22   
Inspections 2021/9/23   
Language 2023/2/28   
Log 2022/9/5 2   
Plugs 2023/2/22   
ReferencedAssemblies 2023/2/22   
x64 2023/2/23   
coggsgarbo.dll 2022/1/6 1   
Cognex.VisionPro.AlgnPlusCalibratio... 2020/12/17   
Cognex.VisionPro.Vs.TexturedRangel... 2020/12/17   
Cognex.VPE.AOI.dll 2020/4/14   
Cognex.VPE.AOISHadowCamera.dll 2023/2/22   
Cognex.VPE.Cami.dll 2020/4/71   
Cognex.VPE.CGSnap.dll 2020/4/7 1   
Cognex.VPE.Core.dll 2020/12/17   
Cognex.VPE.ImageGenerator.Control... 2020/12/1;   
Cognex.VPE.InspectPro.CVL.dll 2020/12/17   
Cognex.VPE.PAMiZ.dll 2020/4/7 1   
Cognex.VPE.SBH.dll 2020/4/7 1  
Cognex.VPE.Tools.dll 2020/4/71   
Cognex.VSAlignPlusUtilities.dll 2020/12/17   
Cognex.VS.Core.dll 2022/1/6 1   
Cognex.VS.DSA.Analysis.dll 2023/2/23   
Cognex.VS.Dsa.dll 2023/2/25   
Cognex.VS.FrameworkCommunicatio... 2023/2/22   
Cognex.VS.FrameworkSetup.dll 2023/2/22   
Cognex.VS.Garbo.dll 2022/11/1   
Cognex.VS.Interop.dll 2022/1/6 1   
Cognex.VS.LightController.dll 2023/2/22   
Cognex.VS.ToolBlockUtility.dll 2023/2/22   
Cognex.VSUTILITY.dll 2023/2/22   
Cognex.VSUTILITY.xml 2023/2/22   
CognexAssemblyPlus.exe 2023/2/28

# 创建一个新的 MachineSupport

3. 打开 VS2012，新建一个 C# 下的类库文件，重新命名

MachineSupportGeneralSPP

![](images/3bed321bd6215ebe40dd4777b682fdd5bdf4b0aa5296ea0c67a952eae999bbec.jpg)

# 创建一个新的 MachineSupport

4. 对这个类也重命名为“MachineSupportGeneralSPP”

![](images/8834e047f5db2252d257cbca9ae8304cd01de4db05a0edf6073455e6cabaaafb.jpg)

![](images/d934b98244654a566817cd28d526ccabc61f68d562975384bf9db0c26db70416.jpg)

5. 添加 VisionPro、Utility 等相关引用，并引用对应 using 指令，将 namespace 和程序集名称都修改为

![](images/d2f7953d3e44821f574c27510b2c14289d93a9716e1352af3d5f01134a303a51.jpg)

用管理器-MachineSupportGeneralSPP

![](images/600e352c4c70f19a5203144161525e32ec044402e6c825391ad49207d81a7a33.jpg)

![](images/1afc8af726482d86df2b5c69bb0bccd93ea5b43302e0d410f67b05c28d8efccf.jpg)

# 创建一个新的 MachineSupport

6. 让 MachineSupportGeneralSPP 继承 IMachineSupport 并实现接口,

并添加工厂类

```cs
using System.Text; using System. Threading. Tasks; using Cognex.VisionPro; using Cognex.VS; using Cognex.VS. Utility; using Cognex.VS.MachineSupport;   
public class Machine   
public static IM public class MachineSupportFactory return new M { public static IMachineSupport Create() { return new MachineSupportGeneralSPP(); } public void Forc public class MachineSupportGeneralSPP:IMachineSupport { private IFrameworkSupport m_framework; string IMachineSupport.MachineryName get { return "SPP"; } public void ForceRecordFlush() { public void ForceRecordFlush() { public void ForceRecordFlush() { public void Init GetAcquisitionSetupOverlayGraphics(int inspectionID, int inputID, int cameraID, int pr return null; public string ImageSavedToDisk(bool savedToDisk, string savedToDiskPath, bool movedOnce, ref CommandDestination des get{ throw public void Init(IFrameworkSupport framework) return : 
```

# 创建一个新的 MachineSupport

7. 更改调试和生成路径（外部程序、工作目录和输出路径）并生成解决方案，这个时候我们得到一个空的 Framework 程序

![](images/7c9083f3e7c86a8a5e1776cce889cc5ee01242fd7186f8f7f4b8fb5efd17d699.jpg)

![](images/7b196554316c9814dcdc70a4c6e51d8c257319537317ffb57d74a8d69bab84bb.jpg)

# 相机的调用

当需要对相机进行特殊设置时候需要对相机进行调用，一般一般

在“Prepare”中进行设置，不用写在Config中

m_framework Cameras[0].FrameGrabber.OwnedGigEAccess.SetDoubleFeat

ure("TriggerDelayAbs", Came1TriggerDelayAbs);

对该相机在（100,100）坐标取一个长800，宽600的像

```java
public void Prepare() { if (m_framework Cameras.Count != 0 && m_framework Cameras[0].AcqFifoOp != null) { m_framework Cameras[0].AcqFifoOp.OwnedROIParams.SetROIXYWidthHeight(100, 100, 800, 600); } return ; void ICogAcqROI.SetROIXYWidthHeight(int x, int y, int width, int height) Sets the ROI. public ProfinetUserData ProfinetJobParser(CommandAndInfo 异常: 
```

# 标定及 inspection 模块

Framework Setup

- -□ X

![](images/b02eabd2fdd735cc6c79036309fececa12d05284e675633c70cb9686aedc3ebb.jpg)

![](images/987ab7d454542b95c865e3b82502b3a1ccab03ce442887aba4120720c5485572.jpg)

![](images/48ae9f51c73deb84ab68bae063b02eff361b1bfabcc0c108b4f1baffed6801b1.jpg)

![](images/152792122046c57e50ae1cb011342cb1a86343b43beb6f7b6f2b0d5dea9e2555.jpg)

1. 打开程序后找到：视觉系统设置  
2. 点击添加

Cameras、Calibrations和Inspections并连线，最后确定，该名字就是在Inspection中显示的名

字

![](images/a07cbbb20fb8f0c45e33727a4996bef287a0ca9157185f4820adc1e891a2d942.jpg)

# 标定及 inspection 模块

![](images/0edd15c193ec07512c5919a3d16c99f2dbfcb507080dbbade61f2fdc6ed70f23.jpg)

VisionTool Configuration - Inspection 1 - Nozzle

![](images/22bf729cc61506b382286f7b4567466d3ea71846bc46c3e9f38297905916a909.jpg)

打开新添加的VPP，可以先添加个工具，比如PMAlign工具，保存并关闭

# 作业

根据给的升级框架，新建一个新的 MachineSupport，并添加上相机引导，下相机拍吸嘴，和上相机定位被贴合特征和复检的的 Inspection 和对应的 Calibration.（100 分，dll 文件等导出 10 分，新建类库并重命名 20 分，添加引用和程序集修改 20 分，实现接口并返回值 20 分，调试和生成程序可以正常打开 20 分，新建 Cal&Insp10 分）

# Thanks