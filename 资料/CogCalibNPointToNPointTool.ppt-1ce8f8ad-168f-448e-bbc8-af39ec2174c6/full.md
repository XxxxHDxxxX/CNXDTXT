![](images/e0625a336091a0ed3edb7131fe59d3d99eb5c29d5db24a16822272b70a40d134.jpg)

# CogCalibNPointToNPointTool

2019/12/19

Zhang Juan

# 学习目标

# 学员将学会正确地：

使用 CalibNPoint 工具创建并配置校准惯例

# CogCalibNPointToNPoint工具

CogCalibNPointToNPoint 工具计算将图像坐标映射到“真实情况”坐标的二维转换  
- 它还将计算的坐标空间附加到坐标空间树上，在后面我们会讨论空间树

# 校准

校准您的视觉系统创建一个固定的坐标系统，表示真实情况的测量和位置

![](images/478e76cb80527e48c5f2f2055a55eee04fb136e880b3d9ab08fe136c2507c9b0.jpg)

# 校准图像

通常，校准在待检查的元件以外的元件上进行  
一些校准板标准：

在已知位置上包含特征

- 所需的特征数量取决于计算的自由度数量  
- 即平移、旋转、比例、纵横和倾斜要求三个已知位置

当在检查的元件上运行时在同样的光学设置上占据视场大约 $50 - 70\%$

# 采集校准图像

采集您想要校准的元件的图像  
在本例中，我们将使用一个 $100 \mathrm{~mm}$ 的校准方形

使用其角作为已知位置

![](images/af7e120e796f4d28614cb56a4269e8dfc683b24db7f1fc20d1eec7656b2e25a1.jpg)

# 确定位置

- 有很多种方法我们可以确定校准方形各角的位置

![](images/57ec23399726b6673d89e18971b6db3bed26c47e138f8da2f2a61bce511990a6.jpg)

# 创建校准工具

在工作中添加一个 CalibNPointToNPoint 工具  
连接像源的输出图像（OutputImage）终端到校准工具的输入图像（InputImage）

# 输入坐标

连接各角的 X、Y 坐标到校准工具的各个未校准点

![](images/a799799e7804328e5005ff329362002d5793a666649adf7cbbdb05afbc93fdcb.jpg)

# 抓取校准图像

# 打开校准控件并按下抓取校准图像按钮

这会将当前输入图像(Current.InputImage)传递给当前校准图像(Current.CalibrationImage)

![](images/de5f9764a62bf4acda84dc0ffa4f4b26833f646bd1f4fb1425c2bffb28e5ffe1.jpg)

![](images/d18e4acd0a910a4a1cca3f6d213434c68ff073b0b179f0ec99648e6d3e7336e2.jpg)

# 输入坐标

注意三个角的坐标已经被传递给校准工具  
输入每个点的真实坐标

Calibrate

Origin

Settings

Graphics

Calibration Result

Point Pairs:

![](images/2980b5f8b0b781c9ead17152665eb77b56ac12afc909669e68ef1eab8522476f.jpg)

![](images/60cfe2f9e83e8520be54c0f6ac38ffe9ef67f17c622b21804b9145a78cc32d29.jpg)

<table><tr><td>N</td><td>Uncalibrated X</td><td>Uncalibrated Y</td></tr><tr><td>0</td><td>134.894</td><td>60.7819</td></tr><tr><td>1</td><td>516.805</td><td>63.4156</td></tr><tr><td>2</td><td>131.96</td><td>437.775</td></tr></table>

<table><tr><td>Raw Calibrated X</td><td>Raw Calibrated Y</td></tr><tr><td>0</td><td>0</td></tr><tr><td>100</td><td>0</td></tr><tr><td>0</td><td>100</td></tr></table>

# 自由度

下一步，选择自由度，以便在计算未校准和校准点之间的最匹配转换时使用

![](images/d436da203bb9cfe9f30a747d703a9d10407e50028b4c153d1d733ff9d8c85dcf.jpg)

# 原点

可选项，表示其他原点平移、旋转或者坐标轴的利手性转换

Calibrate

Origin

Settings

Graphics

Calibration Result

Calibration Origin

Origin X

![](images/daa70136d5c1c4bc400acf62aa1792eaaa0ef9a3b7ba89ec5c293c82d527681f.jpg)

Origin Y

![](images/b071f3465dd315332628f748bb7081ba87f5a67313dd5e7f5e9759c1a0f8d7ee.jpg)

X Axis Rotation

![](images/2eb98833605b3cbe55ffd4ca953cce3b45e3465c50490f311b2bd24973b3ccea.jpg)

![](images/6b190b2b41c6d6cb01b4e84b2fbd7102defa199fbbd9963b6e1ca3c1c155b731.jpg)

Swap handedness

Origin Space

Raw Calibrated Space

X Axis Rotation Space

Raw Calibrated Space

![](images/d771a18dc3dfc72fa7e43dedf43e14cf766f3d141be1e349562e16e3daa8c8e3.jpg)

![](images/d0d66f7016c1bd1a52a8298c8c9b9ddae86aef9b373486715b1790c25fa22411.jpg)

# 图形

也是可选项，表示图形显示校准

![](images/f1d05eadb608c49d776e10b816271343dccf18ec945efd6802696c2377fdbeaa.jpg)

# 计算校准

# 最后按下计算校准按钮

在当前校准图像(Current.CalibrationImage)中，注意校准图像的坐标轴图形

![](images/0f6a1972cb3109680a2bf2b2417790a632cf423e7cff56184aa020f7d8eb094d.jpg)

![](images/2dba224fa4ecd1603a73c8430d39b8cc259532fa1fa4b2b960c931926b0bfb70.jpg)

# 结果

检查校准结果对您正使用的校准图像是否有意义

![](images/c78c85f25b3501cd412e548fa46026ab6212cfef957c6d07a6d04f193e6c4c80.jpg)

# 校准错误

如果存在较大的RMS错误，在控件中会显示一条信息

![](images/56016029e039dbe38ca4c1b8eb8eddcb80d70e2727c25e342bde7454c5713fa3.jpg)

# 取消角查找工具

现在我们已经计算了校准转换，不需要再运行工具直到我们需要再次校准我们的视觉系统

元件和相机之间的距离会变化

在每个工具或者工具组上右击取消它

在您运行工具组时，工具不会执行

保持校准工具处于激活状态

# 分析元件

- 现在向工具组添加视觉分析工具在本案例中我们将添加一个斑点工具  
- 连接斑点工具的输入图像到校准工具的输出图像

![](images/03db2f0136c2842eb8acf9333dde0e7725bf098450c58a2f07aa7a9dd6610b50.jpg)

# Thank you.