![](images/078d85dc7fbe7b6332a58dcff5a861a4dfa00d4461c66706d4ac35cb88881410.jpg)

# CheckerboardTool

# 学习目标

掌握CogCalibCheckerboardTool工具含义以及作用  
掌握CogCalibCheckerboardTool使用方法

# CogCalibCheckerboardTool 介绍

- 物体通过镜头成像都会过多过少产生一定的扭曲，从而影响设备精度，为了提高精度以及完成其他执行单元的功能，我们需要对通过镜头取到的图像进行校正，进而获取精度较高的数据。  
那么今天我们要学习的CogCalibCheckerboardTool这个工具就可以完成校正这一工作。

# CogCalibCheckerboardTool 简介

如右图所示为

CogCalibCheckerboardTool

工具所在位置

![](images/1697b3c837392358d4cc4d3258eba3a1d85da5c9b249de463cb50498b194dff6.jpg)

# CogCalibCheckerboardTool 作用

为什么用 CogCalibCheckerboardTool？

![](images/18cf62f11abd7d9881edc938c8de1020be96ca2e4afc2369cb856ba435b97ce4.jpg)  
未扭曲图像

![](images/af652dc81433ebd7f8e531d2fbb5ee0dcabc5d1a3473e3727ba5f8597290ec41.jpg)  
纵横   
线性扭曲

![](images/0d3c910e1675d193562f062e311a0cb79f14c117d36a83397202fdc8ede80d32.jpg)  
透视

![](images/3f909eb744093e4b334ffa9580128c12e6f374abfa27f85baa8e6b082ce14344.jpg)  
放射   
非线性扭曲

如上图所示，为三种常见的图像扭曲类型

为了提高检测精度，所以我们需要用到

CogCalibCheckerboardTool 来校正图像本身存在的扭曲

# CogCalibCheckerboardTool 作用

CogCalibCheckerboardTool 作用:

1. 棋盘格校准使用一个棋盘格板来计算像素和真实单位（mm）之间的转换  
2. 可以计算线性和非线性转换（非线性转换说明图像存在光学或透视扭曲）

![](images/1830c1f84647914d47e05876fafdee18669201bd6954a2e530b9aa6692a071ed.jpg)

CogCalibCheckerboardTool 工具界面如上图所示

# CogCalibCheckerboardTool 使用方法

如右图所示，为

CogCalibCheckerboardTool 基本操作步骤：

1.抓取校正图像  
2. 选择校正模式  
3. 选择特性搜寻器  
4. 标明在您的校准版上是否存在一个基准（原点）标志  
5. 输入校正板尺寸   
6. 计算校正，查看转换结果

![](images/174d74f4f03bddc4a2f9ebb708be820cd6c64bc0afd03739d8dc689b3ce55c37.jpg)

# CogCalibCheckerboardTool 使用方法

首先，点击抓取校正图像按钮，将标定板的图片传进来，之后就可以选择校正模式了

# 校正模式

```txt
Linear   
Linear   
PerspectiveAndRadialWarp LinescanWarp Linescan2DWarp SineTanLawProjectionWarp ThreeParamRadialWarp NoDistortionWarp 
```

如左图所示，为校正模式：

1.Liner (线性畸变)   
2. Perspective And Radial

Warp (透视和放射畸变)

3.LinescanWarp   
4.Linescan2Dwarp   
5. SineTanLawProjectionWarp   
6. ThreeParamRadialWarp   
7.NoDistortionWarp

# CogCalibCheckerboardTool 使用方法

如右图所示，根据标定板类型选择特性搜寻器

特性搜寻器：

![](images/fd4960d7f9de441658117e153f4f67b219f64838bc2b432863284d4b986a5dcc.jpg)

如右图所示，为两种常见的标定板类型，棋盘格与点网格

![](images/098762ec8c6dba54020aa87da0e620c0b77963058197cd2fae5fd0524aaf7ce0.jpg)  
棋盘格  
Checkerboard plate

![](images/3ccc5681fae257416b66fde8dfc510edc1a0375a611285d5670623c2c9909966.jpg)  
点网格  
Grid-of-dots plate

# CogCalibCheckerboardTool 使用方法

如右图所示，选择是否有基准（原点）在标定板上

基准符号：

![](images/088451493fa979a37d8ae4ddc8c6fc23e9eaf6d2c20d38151096b7f5225a6d09.jpg)

如右图所示，为带有基准（原点）的棋盘格，图中红色标注出来的即为原点。

注：如果找到基准，该点将成为原始校准空间的原点；如果没有找到，原始校准空间的原点是最接近校准图像中心的顶点。

![](images/137e023c797772499d03c5263aea0e94fdaa5177a5a619eb1e4092696af13008.jpg)

# CogCalibCheckerboardTool 使用方法

如右图所示，输入校正板的尺寸（非常重要，不能输错）输入校正板尺寸之后，点击计算校正即可。

![](images/c018892c8857c645057078e056e6deaef12c36dbdc392cdcdab8fa0c186bafe4.jpg)

如右图所示，为计算校正之后转换结果界面，我们可以看到相关的校正系数，至此便完成了图像校正。

![](images/8bc4617d99045d5d0bbbe7a16d4a0d413546ba783eae846df9f7b8d141f3cf84.jpg)

# CogCalibCheckerboardTool 使用方法

怎么使用校正后的结果:

如右图所示，当我们完成图像校正之后，就可以使用该工具对我们的输入图像进行校正了。

只需要把另外的图像输入进该工具，再将输出图像传递给其他工具，此时的图像就已经是被校正过的图像了。

![](images/ad6289b1b69887aa8ea5a67ea10982ceca2139b111e9d2da2965943a50077220.jpg)

# Thank you.