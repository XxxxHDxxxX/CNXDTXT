EXPANDING

O U R

# EDGE

# FW v3.6.6.11 Guide

Cognoid Name | Date

# 1.支持带AIK方案的USB 3.0相机

![](images/f9551fa526feb1b70cc464cb1277e08fff220f302a101efc3235e9cdbfc449fc.jpg)

MV Viewer

![](images/a13a9987526dc103150d47b5e7822a437e3e2c0ddb9df21c5fe56ca43bbfa7af.jpg)

![](images/18bde1544ccabf16739fa7556bd6bc8b47fb912cd1c71bccc82aea8f562d0501.jpg)

![](images/a9603d17105041058f0980ce95f800fc4adf8931add19fe158423dbb80e900f6.jpg)  
1.相机应用程序安装  
6.取像设置中修改光源及曝光参数

![](images/31dd8775bb2475d0fc7274a0553ce69025e653677ec3ccf8ba24ee763175e648.jpg)

1 OPT 和 Huaray的USB3.0相机可以通过AIK的方式实现  
2.为了保证取像的稳定性，需要使用USB 3.0 PCI-E扩展卡

![](images/593db70dc6daedc606100b5f80995fa75ff506d0cca6957d85c35a9ba0af523e.jpg)

# 2.批量删图工具集成用于图像过滤的Everything解决方案

![](images/fd349078dce4f65d10c262d3e9a47d1476c223365a5e46a1632a08ff54342462.jpg)

![](images/c83f833a05a6cd8e167e1d3ee43ebeebad99a645d7d806e4bf73c460eac90b10.jpg)

# 1.FW安装包中的Everything 安装程序

<table><tr><td>时间</td><td>讯息</td></tr><tr><td>15:35:00.126</td><td>Start select raw and annotated images...</td></tr><tr><td>15:35:02.234</td><td>Search image total count 70656</td></tr><tr><td>15:35:02.250</td><td>Select raw and annotated images count 10000</td></tr><tr><td>15:35:02.250</td><td>在D:\Images启动图像文件夹清理过程，所需的空闲空间为100 GB。</td></tr><tr><td>15:35:02.872</td><td>当前批处理清理图像计数:50，运行时间:7463 ms</td></tr><tr><td>15:35:04.438</td><td>当前批处理清理图像计数:50，运行时间:9029 ms</td></tr><tr><td>15:35:06.019</td><td>当前批处理清理图像计数:50，运行时间:10611 ms</td></tr><tr><td>15:35:07.647</td><td>当前批处理清理图像计数:50，运行时间:12238 ms</td></tr><tr><td>15:35:09.234</td><td>当前批处理清理图像计数:50，运行时间:13826 ms</td></tr><tr><td>15:35:10.821</td><td>当前批处理清理图像计数:50，运行时间:15412 ms</td></tr></table>

# 4.图像删图Log信息：

开启“PrintCycletimeBreakdown”时显示橙色框信息

![](images/54d66b4263ee74e9c56430ab6066a552d4552dadde7c22259e1d65e4b5c6e4f8.jpg)

# 2.按照默认路径及配置进行安装

![](images/f210179709a0ea0843167152b2f8affc43feedc6b5049e8c0ba9e732daf039f9.jpg)

# 3.图像清理设置：

开启图像删图和设置删图条件及单批次删图数量

启用图像自动删除功能，需要确保已安装Everything应用程序

![](images/bfbd3c43daa1c335142ae8a6e995b6d5bd8fe0f32b3b4bac788d2b94ea528121.jpg)

# 图像Tag分类:

OK：全路径包含“OK”或“ok”；

NG：全路径包含“NG”或“ng”

Tossing: 全路径包含“Tossing”

或“tossing”,

其它为 Temporary

# 3.更新图像保存设置

1. 图像保存路径可以支持原图截图分开设置用户可以在图像保存设置中配置

2. 支持图像保存时不需要默认生成大的文件夹 Tag (OK/NG/Temporary), 用户可以在图像保存设置中配置, 图像保存路径如右图所示

![](images/6bb7192bca0fd435bc66298d4cd418601019a116d47582ac7d20dea194b4b65f.jpg)

![](images/e608716eef3370c427445a02167f00b86317f0c85760c75228a2e691b39bf401.jpg)

![](images/634e29512ad7ea191492d988bedfe4a0428fcada5cf5958449dc3f116ccb4bd0.jpg)

# 3.更新图像保存设置

注意：由于原图截图可以分开保存了，部分图像路径相关的函数可能无法使用，如若MS中使用了这些函数则需要重新更改，以下为示例

![](images/12467de4d377c9fef6d03529cfdc887083c74ecf774ec3a1bdf7933f27321f59.jpg)

![](images/07242d35d16eb0a7dd732dae84120703c08e11277071ab0514c07ab067359480.jpg)

# 4.显示窗口个数限制从6个增加到12个

在主界面的Display最大显示数量由6增加到12个用户可以在“Settings”->“AssemblyPlus Settings”中设置Display Layout设置是由字符串设置，设置规则如下行数：以，分割后的数量即为行数

例如1_1_1_1, 1_1_1_1, 1_1_1_1

显示分为3行

例如1\_1\_1\_1, 1\_1

显示分为2行

列数：每一行的显示多少个Display，是根据有几个“1”

例如1_1_1_1

该行显示为4个Display

例如1_1

该行显示为2个Display

Dummy占位：当数字为1时正常显示Display，为0时Display不显示

例如0\_1,1\_1

第一个Display不显示，用Dummy代替，如右图所示

![](images/e7636b5a9990d254282490f99d3bc9f291ab73927038d468b335135f7739a82c.jpg)

# Appearance

Result Displays:

![](images/6e9b5c34e15b776033b36450b97954687a17f6ba510fe4201c00b458fcfb0282.jpg)

Display Layout:

![](images/ab866e6452e52fd2327dfc2d81ed2741d984925f2c4c962d855ca104bfdab666.jpg)

![](images/5a3b06f75b495700acfa5f392ecf628bc370c9efda0ab03c6bdee257998753db.jpg)

![](images/dad1d1854ef26c4202267057f2645e96aa3be3f10ef9e1999a7eee34daf136e5.jpg)

![](images/6e46840f1d79b37e39b46313203e620824a7e1153eb0b0c92f004ba29fb62fba.jpg)

# 5.增强Metadata功能

增加“DUT Color”和“Image Nickname”。

![](images/70dc33ee318b283f5c1189bef815679f306f79acbbdbd77eb615799b9721cce4.jpg)

DUT Color: Product Color

ImageNickname格式：InspectionName_CamIndex_InputIndex

重构GetMetadataString(),增加ProductName,inspectionName,inputIDCounter

![](images/04325cee420ab088ffd939ddcf44977eca80a7b28ce79ce8892bd533fc8b5dd9.jpg)

Metadata读取工具:

MetadataReader_V2.8_02202024.7z

# 6. 增加ImagePlayback在连续运行过程中出现错误时停止的功能

![](images/f93c56df5771ab7da8556e97a346385ee8f490115b4e23a46e352c75bbc8cb83.jpg)

勾选启用“运行失败自动停止”后，程序在自动连续跑图过程中出现运行失败，跑图工具会自动停止运行，便于查看。

# EXPANDING

# O U R

# EDGE

# Questions/

# Thank You