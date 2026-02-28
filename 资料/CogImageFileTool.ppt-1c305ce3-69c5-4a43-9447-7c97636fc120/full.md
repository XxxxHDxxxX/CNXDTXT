![](images/3cf3dfc4a6788598c59a4c694761371c11c1618d41d60cb8f3008729ff7a63aa.jpg)

# CogImageFileTool

2019/12/19

Zhang Juan

# 学习目标

# 学员将学会正确地：

利用图像文件工具加载和保存图像文件  
利用终端传送工具间的数据  
保存并且加载 VisionPro 项目到 QuickBuild 中

# 图像文件工具

- 用来将图像写入到文件中或者从文件中读出  
支持的文件类型有:

图像数据库文件：.idf 和 .cdb

位图：.bmp

标记图像文件格式：.tif

例子：

要保存并且读回测试图像进行原型构建、开发和制档要从生产运行中保存并且读回图像

- 即所有失败的元件

# 图像文件模式

- 使用录制按钮在读取和书写模式之间切换  
在读取模式中您可以从图像文件中读取图像  
在写模式中您可以向图像文件中追加图像  
首先，我们会讲解如何从现有的图像文件中读取图像

![](images/84f45271cb8cf8c1d0a82d1c660e5d3595cbb8ad73c92d3460d4e9d6b1b6e4e7.jpg)

# 读取图像

例子：您需要在固定的一套已保存图像上构建原型并且测试视觉工具  
- 使用 OpenImageFile 按钮加载一个文件
浏览查找图像文件

![](images/f8e3cdbae4124c42128a90c002228aa0a8c3fcdec83e908d0ef299bc244713cf.jpg)

# 读取图像

![](images/d537b088ff459bec4b3627cc651720423b2f13a09c07d62aaf992da6ddee7396.jpg)

# 三种图像

- 多数工具使用几种图像进行工作  
图像文件工具有三种图像  
从显示区的下拉菜单中选择要浏览的图像

![](images/eb82a39849bed13b1365faec92fd10321ab28b4eacf88c7792ff09b661b7d6e0.jpg)

# 选中的图像

当您第一次打开某图像文件时，默认状态下第一个图像为选中的图像

选中的图像的缩略图以蓝色高亮显示

选中的图像显示在显示区中

![](images/a463bb709ced9fd2c690bbe1d2b887d87fa48696f09b5f848ac2e077f275b265.jpg)

# LastRun.OutputImage

当我们从图像文件中抓取某图像时，它成为LastRun.OutputImage

![](images/eea57ea38191db567fa8073b53192776488f75c278e3ac38bbd257d777adf9ba.jpg)

# 将图像写入到文件

范例：您的质保部门想得到已保存的在生产过程中失败的所有元件的图像  
- 当处于书写模式时，运行图像文件添加当前输入图像（Current.InputImage）到图像文件中

取出当前输入图像并将其放入上次运行输出图像（LastRun.OutputImage）

![](images/f35fa7ab6880b29ce56fe41204df9ff6d9ae2af4196ff9dbeb758f5d30cfad81.jpg)

# Current.InputImage

Current.InputImage 是要写入到下一次以录制模式运行的图像文件中的图像

![](images/080d9e3a949d11e5e3034f73ea5adbfd675ce28fd0128f3fba08e875477bb4f4.jpg)

# 添加图像到图像文件中

通过创建一个新文件或者打开一个现有文件来添加

![](images/225cfa1e780bec31f9502f46db93f59f4e6f7b91237a94bb8b41a3b074b16b49.jpg)

# 链接图像

从像源的输出图像（OutputImage）拖放到图像文件（ImageFile）工具的输入图像（InputImage）现在每次运行工作时，所采集的图像会追加到图像文件中

Tools

![](images/4f2f35ba94914137000b9bc4da8f034393b4dcf78a8bc306f30f16de52484000.jpg)

<ToolGroup Inputs>

![](images/ca2d696f26f645d65739a3fb9735dd9924b21fda31d7abad6cac93217fba1bcd.jpg)

Image Source

![](images/4e66cb6ebf5f0921534428e162f81045064eab32bb8a8969edc107725172948e.jpg)

OutputImage

![](images/754863990580fb8797b860cc4b899cf3ffadaa2a0726e3be8b164d801e4018fb.jpg)

CogImageFileTool1

![](images/d19d76310248b54db0cbbd8bfafef26e5dac5587b3ac17cf33820ef27ee51a09.jpg)

InputImage

![](images/d4a0f7fc08e9e41e4438bbc55e36821ccfaf24b33f40e002214df1081cb70278.jpg)

OutputImage

![](images/7998b724f260ad92922a75f6a3b61259b25cca407494ebd0cb7a6d0c3bbe6c56.jpg)

<ToolGroup Outputs>

# 加载/保存

在图像文件控件中，有两个保存按钮

一个保存整个工具和其所有的设置到.vpp文件中

另一个将当前打开的文件中的图像保存到一个图像文件

$\bullet$ .bmp、.cdb、.idf或者.tif

![](images/cc85801f68c14967b09c61e01a12763cd9f6d9a635c5cf46512c3b93a42c67f0.jpg)

Thank you.