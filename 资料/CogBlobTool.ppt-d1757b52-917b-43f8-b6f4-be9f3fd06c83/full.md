![](images/d06e772f36aa079e7257b4a0a8445ed048ab13a34bf4368da4b6abb7927aa2a2.jpg)

# CogBlobTool

2019/12/19

Zhang Juan

# 学习目标

# 学员将学会正确地：

□ 辨别斑点工具可能是视觉解决方案一个部分的应用场合  
□ 创建并且配置一个斑点工具来

√ 在指定的灰度范围之内查找斑点  
√ 根据给定的标准筛选斑点

# 斑点概述

斑点分析探测并且分析图像中的二维形状  
斑点通过辨别处于用户定义的灰度范围内的像素不同组，来查找对象  
斑点报告多种属性：

面积

质心

周长

主轴

![](images/b7b117f835538e6ce5bdcc017674a3a1362329ca6d82f704e807d2f15a87bfe8.jpg)

# 何时使用斑点

# 斑点分析非常适合以下场合的应用：

对象在尺寸、形状和/或方向上差异很大（训练模型很难或者不可能）对象有背景中找不到的截然不同的灰度对象没有重叠或者接触

# 应用案例：

检查环氧树脂点分配的数量、尺寸和形状

检查表示坏薄片模型的墨水点的正确位置和大小

检查药片的破碎和大小

根据对象的尺寸、形状或位置整理或者分类对象

# 图片

![](images/6c837c4fe584d990b600e61b27f88dd74a3df007912df517cbbdf9489c80ea27.jpg)

# 分割

斑点在其运行时所做的第一件事就是图像分割，确定哪些像素是斑点像素以及哪些是背景像素  
有数种模式可以指定哪些可以将斑点与背景像素分开

![](images/b654e8e1ea1b1b796d144a81d741952ac1fcc323050e01d6469840d7dd137300.jpg)  
斑点像素  
背景像素

# 分割

# 多数模式会要求：

极性

- 在光亮背景上的黑色斑点  
- 在黑色背景上的光亮斑点

阀值

- 将斑点像素从背景像素中分 开来的值

![](images/6f6f9245c19cc1b39feda545e5339ac3aad66af2032d062fd4597a40814da03b.jpg)

![](images/3557dae8f5400821bce4f430407cca29904b1bc465429227f8c26fd216d5b08d.jpg)

# 固定阀值

在固定阈值中，斑点像素和背景像素分别根据灰度值来确定。  
设置一个灰度级阈值：

![](images/a66b92f70dd48d182a215a55aac34f7ec279caaad621c0835ad888939f955558.jpg)

# 相对阀值

相对阈值解释为左尾和右尾之间全体像素的百分数  
尾度代表柱状图两端的噪音级像素

![](images/5f622de3133d66084f333fd60912dca9416800656389b7435cdd7e996f57b7d0.jpg)  
图像：

柱状图：

最低值像素的 $5 \%$

左尾像素值

![](images/fa3bbaccf652f00093e389dce7a52b58beca6846ab81d3d94815f377c23c0868.jpg)

# 使用相对阀值

相对阀值调整因为线性灯光变化

![](images/54b3e37a52a78e06b909c7cb059ffbbca7009f9da4999b2d5876d5069a92da8e.jpg)

40% 的  
![](images/fe3625df4e3ea4079527cef7528f54ae35e5c35ba2cd30e581bc358cdb453e75.jpg)  
阀值 $= 30$

![](images/7250b18886e039e600be9220efccb0638a629fdc3d667ba01824dd6a8980a793.jpg)

![](images/7e7bd074b6ceba343cef8241f55e1d928acf86d620e2cd1460aa1ca220ae94ae.jpg)

40% 的  
![](images/f1dabfa09e1e054591ead83470921cd40b027351a43c8146a271ce975abe51df.jpg)  
阀值 $= 100$

![](images/f3f47b893af83e9de0d89f7022d8e6c6ea3efcaa03fb7539a920796505995dba.jpg)

![](images/a27f94bcd9d57c803905559b5b84304b9f42136db892d743e73db489c58bd987.jpg)

40%的  
![](images/51168272cea159fdd02d2ebcc75bbec047e9ff4430da12b7be1924bf993953ce.jpg)  
阀值 $= 140$

![](images/deee0325b54c6d7b958e3588d89be11ba9f2f7a4de92235ae20856690c5deb68.jpg)

# 固定和相对阀值

固定的灰度阈值不提供线性灯光变化

![](images/4733d236bc7290c7d66662cfa7a4696c5c7f412993a2198bcbd5f376853ed052.jpg)

# 固定和相对阀值

固定的阈值要比相对的速度快，因为与百分比对应灰度不必计算  
- 固定阈值可以检测场景中是否有某特征，而相对阈值始终在场景中找到一个斑点

![](images/d17b0009e01be7ba26989a456efd91f9d3f554e43d2c7f69f66fb843b92d5289.jpg)

# 硬性阀值

# 到目前为止所有例子都使用了硬性阈值

该值（灰度或百分比）将斑点像素从背景像素中分开

![](images/b833a7c1b8f7b3863b4dd8550815f353c9d7aafcb7ce874bd356ef227870df8e.jpg)

检查柱状图确定阀值灰度

![](images/8361ccdc973728eda57137714ef4d7780ec283bdaa05835537ada8a9ea962fe7.jpg)

![](images/fe2f0ddb8c6b5d1165c088c682075f8b500afdb5e070bf115d92a62365bc47cc.jpg)

# 硬性阈值

![](images/4e3ecd3c3095f9acb30ae8f1f8c4d4e907b67649f4a49938b19a3f92bc6efb28.jpg)

# 空间量化错误

当对象在不同图像降落在不同的像素格子上时，硬性阈值同时重现  
可能导致斑点尺寸、周长和位置的错误结果  
随着对象周长加大，错误变得更加明显

![](images/b47529ab6ff1b4a3be584f95141e06388b4c6ce2597d3e9573aaedf8bfece28e.jpg)  
对象中的像素 = 64

![](images/6b47352f1f218665bc6a13b5645481010f2cb607a054ddd919cc0097c766bdf0.jpg)  
对象中的像素 = 81

![](images/4af5b2a7ff8c8e2a8ce5119c01b8215c7a93a003d0c158e0774dd007e3ed2f02.jpg)  
对象中的像素 $= 44$

![](images/b06d79f26f2491600292e7cc74fc0db7f90aa5cb447d2861c6a0d821d1a61c50.jpg)  
对象中的像素 $= 25$

# 像素加权

空间量化错误可以通过应用像素加权来消除  
当斑点对应于像素格子移动时，总权数保持不变

![](images/f411313e4b3f64d6ed8842821fb39af84c4da4f337cbb9487ec327aca733b7a0.jpg)  
总面积 $= 3$

![](images/d90098c7755da9584477fc1723572862cfcdf2482a2f9e83beaaaf081a37ae6d.jpg)  
总面积 $= 3$

![](images/f2da9d165f998a7272103a593b6eea19263bc7f840b76aae9694edf5568482ac.jpg)  
总面积 $= 3$

# 软性阀值

使用软性阈值创建一个像素加权计划  
软性阀值使用一系列阀值

![](images/6b19fbbe0498156b6ccdecf748bfc1a4f67d0091bee931b9a92886cab6f9cbd9.jpg)  
阀值用于光亮背景上的黑色对象

![](images/67f21a85ef155ff4c06b4bfcbdf9a697f89713db28a89e36342f8620500ad93d.jpg)  
阀值用于黑色背景上的光亮对象

# 软性阈值

软性阀值例子

低阀值 $= 50$

高阀值 = 65

软度 $= 3$

![](images/b89000a5d36aca1d916871408203d276619212581cf0fed7a779f763ab0e61de.jpg)

# 软性阈值

![](images/b9c1b6adb96e5f5a6db094b2d5635aa57ccd486ad09eb45ee7fe37bc52ebd4ad.jpg)  
阀值使用灰度表示

![](images/4b173bb0a10b1937c80278236aa551ccde4be86f234d743c819a8733c633a9c9.jpg)  
阀值和尾度使用百分数表示

# 使用一个减法图像

当图像包含类似的背景和斑点灰度时，使用一个减法图像  
阀值图像只包含背景信息  
图像中的每个像素与阈值图像中的相应像素相差指定的数量，即斑点像素

![](images/9a50ed11ee086337c7c5567f11301410bb0801a9493f1b318278c10a385135f2.jpg)  
减法图像

![](images/77d7fc34220771faeece5903a8de45570a9b6dad26db9085fb71f0538f297c82.jpg)  
待分割的图像

![](images/71711d442b4e780b98a0ed189aecbc7a27090b0a85ddd754fa30d3d0b8e822f5.jpg)  
分割后的图像

# 像素映射

- 为不能使用硬性或者软性二进制阀值进行分割的图像使用一个像素映射（查找表）  
要求一个比例因子，应用到像素映射值

![](images/4000968153d74fa27b317425f1dd7f361d4060a9b821a0b2a1b03d2a11506dc3.jpg)  
最初图形

![](images/53c58d11ab94380fa12742ed26867c90b0588eb4ee96bdd2392c453c59090a56.jpg)  
像素图

![](images/bee4ea82e5883c3227bcc2ee15513402b1fb0c58c9ee7a45b64e676b9aed4182.jpg)  
分段图形

# 像素映射

为每个灰度提供一个输出值

![](images/09584943752e21bdb2afdc385a3e62e563ebfc593598c8cc9fe8f89902568cd6.jpg)

# 连通性分析

在将图像分区之后，斑点执行连通性分析  
- 整个图像斑点分析返回图像中所有斑点像素的一个结果  
灰度分析辨别离散的已连接斑点

![](images/f421bc79f8e967b3985c2300c39336a58c82ec4de30b35ccdb3afc72428c636b.jpg)

![](images/6dd44b097b8ebe5b6d69d952a3c8facd77146f44f16485a8b3c0014c91e4f53f.jpg)

![](images/024d2532224122f0890d6f57851b54d9048be5bac25954afb6e4bb693adefdd9.jpg)  
完整斑点分析  
灰度分析

# 已连接斑点分析

对象像素必须

垂直、横向或者对角相连

背景像素只是

垂直或者横向地连接

![](images/528abfced6f7dfc4406b9b8fbacf40b41a6cafbc3ac58362ddf970a876e7257d.jpg)

有多少个斑点

处于图像中？

# 应用形态筛选

首先从下拉列表中选择筛选方式  
顺序问题！

要重新排序或者删除某操作，使用对话框中的按钮

![](images/2544fb63f2b23dfd3a85253648c3f1cc608ab6da358ea4174f0ced1fab760a19.jpg)

![](images/e5f5d0bcfec012bb5a23f359e5e5d1778b42a19fb21f3d71620a0058053e9ae0.jpg)

# 修剪和填充

修剪忽略但是不删除低于规定尺寸的特征。  
填充使用灰度值从左边相邻的像素开始填充修剪后的特征

![](images/19e3beb9c029ccf3a57db8cef3b2cee1ca86324e69c3e254546d036fb8c58179.jpg)  
最初图形

1个斑点围9个孔

斑点面积 $= 900$

![](images/5b6354a0a1748e8fe679abe97c3990a11c84fd6facadd702b6e559ca76cdefec.jpg)  
修正图形

1个斑点围1个孔

斑点面积=900

![](images/f4e2ac8f58638e3ef17ceae733767f396b60963a92edbb1cabcf531a75bb618c.jpg)  
填充图形

1个斑点围1个孔

斑点面积=980

孔仍然存在，但不会

被报告

孔被填充了

# 区域

默认状态下，斑点分析在整个图像上进行  
要只在采集的图像的一个部分中探测斑点，需要使用一个区域形状可能在输入图像上图形定位和设定大小

![](images/4850c4eef8ee93af769fff8758cd97e642c8cde7eba70476b4563627b49e75e7.jpg)

# 测量

- 允许你指定在每个斑点上计算的测量

![](images/f81a8ec29f61bec7498db1d3a6fc06c1185ecbeffbb3fcf8b3c512e83a25bcb9.jpg)

# 测量

对于每种所选的测量，选择：

网格

运行期间

筛选

<table><tr><td colspan="2">MeasureFilter</td><td>Range</td><td>Low</td><td>High</td></tr><tr><td colspan="2">Runtime</td><td></td><td></td><td></td></tr><tr><td colspan="2">Runtime</td><td colspan="3">Grid (computed only when displayed in results grid)</td></tr><tr><td colspan="2">Runtime</td><td colspan="3">✓ Runtime (computed when tool is run)</td></tr><tr><td colspan="2">Runtime</td><td colspan="3">Filter (filters blobs based on low/high range)</td></tr><tr><td colspan="2">Runtime</td><td></td><td></td><td></td></tr></table>

# 测量

针对任何属性，使用筛选来排除一定范围之外的斑点

或者只包括在一定范围之内的

![](images/36d917893c78f643d294c8c14408f524172fa2594ad39bc6067225056bcc63ef.jpg)

# 测量

结果可以按顺序整理，以便进行所选择的测量

升序或者降序

![](images/da43e25ac7f51b62e787a8fcc022a074a16e07e276f1a11c58104bdf8a07ee25.jpg)

# 图形

选择，以便显示结果或诊断图形记住图形会增加时间

![](images/cfc1986f7fa43e703a9037382e125a573bd1b0737dc579d171104ccb0185f555.jpg)

# 结果

N斑点的索引   
ID 处于分类标准外的独特的斑点标识号  
测量为所选择的那些测量进行

# 几何属性

# - 几何属性为常量的斑点测量，不论斑点的方向

面积

周长

质心

坐标轴周围惯量的第三个

力矩

几何延伸

主要限制框

![](images/558a7945f23097bac6b29881dfaf52af5cfd0bc871bb987fb4a19e091bffee52.jpg)

# 非几何形属性

非几何性属性指那些随着斑点旋转或者位置变化而变化的属性

斑点中位数

坐标轴周围惯量的第二个

力矩

坐标延伸

任意的限制框

![](images/b9abababa10fb87b046da96005bff1fb8036354d9f815fd1612e2b06bda52b8e.jpg)

# 拓扑的属性

辨别斑点、孔以及孔中的斑点

![](images/83e4e596348c52cd6416a070ce2f89d30b9ac576f8195860f2b7e9a913cf8607.jpg)

Thank you.