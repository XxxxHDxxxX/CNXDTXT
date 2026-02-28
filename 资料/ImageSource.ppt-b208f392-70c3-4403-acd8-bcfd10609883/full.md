![](images/add40cf6f8b77cbaa17567d6808d02913ae5b3a570dc4a54f4522df7ffee9c04.jpg)

# ImageSource

2019/12/19

Zhang Juan

# 学习目标

学员将学会正确地：

□ 创建并配置像源采集

# 像源

在 VisionPro 中用来从相机采集图像的工具是像源  
使用初始化按钮初始化采集

![](images/b747fcdb11aa8bfd271a86989752bda98e66530ee6e8556f27ff77258d5706a4.jpg)

# 采集基础（板卡）

![](images/b78516c964f9f1a1a85686630cc36155f53fecfceb345670d814ed776bf35e2b.jpg)

![](images/3b15f8ab9ebeed37180812e3f4ecffa22d890d8a31162e912345ef5738a69f1a.jpg)

- 视场（FOV）也被称作场景，是相机和镜头能够看到的物理区域  
相机将光能转化为信号（模拟或者数字的）  
- 信号通过板卡传送到计算机进行分析  
灰度值以照片元素或像素的列和行进行再组合

# 图像表现

- 图像以光浓度的点数（称作像素）的2维数组（表格）保存  
- 每个像素的光浓度值或者灰度值以 0 和 255 之间的整数来表示

- 0 = 黑色  
• 255 = 白色

- 左手图像坐标系统

![](images/b556f750d2324a21e475cffd8f2f9551ea73e4bbe43d9917183a435010a11f85.jpg)

# 像源

首先，选择图像是来源于图像数据库还是相机  
您也可以加载一个图像文件或文件夹

![](images/f01786aa31d7e9c17fd31bb934a7ad25c5ef9a26aa05b621a2d7b194a8fb526b.jpg)

# 像源

# 板卡

采集图像的康耐视电路板

# 视频格式:

选择您要用来采集该图像的相机（及其格式）

# 相机端口

该相机连接到哪个端口

![](images/5ee601606c3f7032ec47fa51c44edb5b9e48cc28a0130a15c841e1f9f0863d36.jpg)

# 运行工作

在您运行工作时，它从相机采集图像并放入到LastRun.OutputImage

![](images/d00b57fc960433eb386dc4ae99da10b1886363009c997bef56de0b42e295da29.jpg)

# 获取更佳的图像

修改采集的物理设置通常是您应该做的第一件事，以便尝试提高您的图像质量

灯光

焦点

光圈

在像源配置中有好几个参数也可能有助于提高图像的质量

# 获取更佳的图像

曝光

电子快门，相机的曝光时间

亮度和对比度

- 对比度确定图像灰度值的“扩展”  
- 亮度将整体灰度值调高或者调低

# 频闪和触发

在运行时在像源中有几种与触发采集相关的设置

触发已激活:

如果勾选，表示在每次触发时发出采集请求

- 手动

软件触发

• 采集图像并将其复制到输出图像（OutputImage）缓冲区和 AcqFifoRUN 一样

Settings

Strobe & Trigger

Region

Lookup Table

Ise Duration:

![](images/1e13c309b10c9275d6c8cc8f7938ef1020497c1c5a7c88a82908e17040d332ba.jpg)

Pulse Polarity High

Trigger Mode

![](images/459bac20923c4820aaffa459b196e5e4d9b1ccde47e1f154649eb84481802ec7.jpg)

Manual

![](images/d414e053aafccb66ecb7f71c9809f74b87e6e7b86b1b2b8f4750ef5c969f295c.jpg)

Free Run

![](images/34436887fc6f64c78a312ff4566242ddcb8ee419bab781d9911010591cd25f55.jpg)

Hardware Auto

![](images/515ed88a69b52cb87118b1432be87d6912d38c4e83e12e5106f83f6c91abdf4c.jpg)

Hardware Semi-Auto

![](images/59fcd68469b8bae533afdf01ececbcda4a74dbff2692bd5b82aef2e706c37eb3.jpg)

Trigger Low To High

# 频闪和触发

# 硬件自动

当探测到外部触发线上有信号时开始采集

触发从低到高

- 勾选则触发信号从低到高地转变   
- 不勾选则从高到低地转变

如果取回图像的速率低于触发的速率，可能会发生超运行错误

Settings

Strobe & Trigger

Region

Lookup Table

lse Duration:

![](images/61b82ab69c346334ca533f9217e5b8feb70cdbd93371e2327f3f32bf17680c40.jpg)

Pulse Polarity High

Trigger Mode

![](images/6702c59cc3b077c8ec2e0b3c36096d1d0399978da0a564b307f00372cb2d48b8.jpg)

Manual

![](images/e16ceb0ba38a5644e060466368e71262e3ae650569c680fa3a7002644a3c1afa.jpg)

Free Run

![](images/9c18611fdf3733268fc9d579b31ab89c04d586ca5872d9a97537dcfa9096bcea.jpg)

Hardware Auto

![](images/4511eed37817c0642ee29fae4ac3bb528ecf870596a109a61ba3a749c5b0c230.jpg)

Hardware Semi-Auto

![](images/982f2d04b2ed9de4577595bbaec8f8464fb3cb4156cca827ab968c6560c469a8.jpg)

Trigger Low To High

# 频闪和触发

# 硬件半自动

当您执行运行时，AcqFifo 工具激活板卡，然后等待外部的触发

要采集另一个图像，再次执行运行；否则，可能会丢失下一个外部触发

Settings

Strobe & Trigger

Region

Lookup Table

![](images/8594f0f4397c0b8434d6c43e5ca372ea86d4036a6102466b0a9f3442c0d41f42.jpg)

Strobe Enabled

Pulse Duration:

![](images/a256bcc34d6c055203ff1b0b01e578eeaf6aa82ca5406b7c32cc434876468e0c.jpg)

ms

![](images/0af4267ac7b405f13a5299a9355b34eb7e5fc44fba3dbb870f329f8d8d83ff5d.jpg)

Pulse Polarity High

Trigger Mode

![](images/3e5bc6c1cde6755b76a50ebc666a99337fd0c2c0a19d9fde92f597c3be097c7a.jpg)

Manual

![](images/82a5e65127e7b6a3bb0e9409cd9d3121da16dde282118da4109fd07b12b1f1b4.jpg)

Free Run

![](images/071b616f18ed93c0c193c3cef47e6c1530731fa4a6319839313bf77c84359eb9.jpg)

Hardware Auto

![](images/3a8dcaac53b5fd73102069e40d7889fea9e7591bb1a0976199289273dee5f4df.jpg)

Hardware Semi-Auto

![](images/1084da471a4f9088ec15ded0f80efcc922218a64907585fc8106b941826962cc.jpg)

Trigger Low To High

# 像源设置

# 超时

以毫秒为单位设置在调用采集（Acquire）或者完整采集（CompleteAcquire）时使用的超时时间

超时时间通常用于处理不发生触发的情况

# 其他的参数

# 最后一组参数用于专业化采集设置

频闪采集

使用辅助灯光模块

使用渐进扫描相机采集部分图像

使用查找表单

# 显示直播视频

- 使用显示实时图象按钮打开直播视频显示窗口并显示活动图像

![](images/6361d126f57439b7b02e5018860c71cffec074b4461e735a3b59d945042c3ab0.jpg)

# 显示

可选项，使用浮动显示窗口打开不同的窗口来显示所采集的图像  
注意底部的确切信息。

![](images/6743eeefea7dee2f213d5546ef58a0973a89d5565139c4a012841ff80a915678.jpg)  
位置  
灰度值

# 显示

在任何显示上，您可以右击并且选择放大、缩小、全图等等

![](images/727ef31963a53d2200fd5883f79678dc4c5644abf3999fde0eb5f6030ac9f94e.jpg)

Thank you.