![](images/aebabaee16951e8fa939be8f1b0ac7315bd9a5713dde3d67dacd3e30f19163bd.jpg)

# CogFixtureTool

2019/12/19

Zhang Juan

# 固定工具

- 固定工具用来在您已经计算了一个坐标转换时创建一个固定坐标系统

在我们所举的范例中，使用 PMAlign 来查找我们的元件；它将在其结果中产生一个转换

![](images/d0c4489f1fdbbc9e63ef1f238fbb32d968de9e763089f4fc9d6e58cf5f556ec2.jpg)

![](images/0321841df82bdfb9d5b024e6158b6244f6ee73c18757ca90c63d18fd68f502fa.jpg)

# 我们的问题是:

- 然后我们会创建一个游标卡尺来测量中心“标签”的宽度  
- 游标卡尺的目标区域必须相对于在图像中找到“耳”的地方移动

![](images/b7dd3da20a1c6cd09eb590d1894a96442b418b92fad2ab82c0b4fe9dbefb3e42.jpg)

![](images/ebddda3d2de39a963052e3645753fc15db90901432c0ddd262301f1d39cd881d.jpg)

# 开始

创建并配置一个像源和一个 PMAlign 工具，训练来查找支架的右“耳”

![](images/3965552a033abe63b8c994307a31fdd6b7ae59c45ead065d533ea4f96328d73e.jpg)

# 添加固定工具

- 然后添加一个CogFixture工具并将其输入图像（InputImage）连接到像源的输出图像（OutputImage）

# Tools

![](images/515154363fc665dba5956b4469238ed3a5239a3920ed4911a3db2622c8ae0e71.jpg)

# 连接转换

取 PMAlign 确定的转换并将其用作我们的固定  
- 连接 PMAlign 的姿态结果到固定的转换

如果您另外想添加 X、Y 轴和旋转，您可以分别连接到这些终端

![](images/54fda554e1522c298e663abd4d23fe82413bbdb29bf94105136375d2a1ee0797.jpg)

# 运行工具组

- 运行工具组通过图像并且转换到固定工具

![](images/49995afdfe41e8d29d341f0479785ead65f5571c131df57ce4ed43cd9912c35c.jpg)

# 设置

在多数应用中，即是如此  
在有些情况下，您可能想要在运行随后的视觉工具之前操纵转换

![](images/204df9c39a29852d639a18dd915c3abe5d70e44214751000d50359acd406b049.jpg)

# 添加一个游标卡尺

- 现在添加测径器并将其输入图像连接到固定的输出图像  
配置游标卡尺

Tools

![](images/6cb12906eb955685eff4cb6ffeca8bd12e15d379f6b847e229f245a6d35ef473.jpg)

# 使用固定工具运行

为什么在创建和配置游标卡尺之前创建并配置固定工具很重要？

![](images/b40b927082027ea56ed6771e95a9f0364295d5b2952fa41e462d3490fb7eee24.jpg)

![](images/cca22c3a41d62a2ff93489a9e5f77516b787af43bfa555d8f17a8af7b2163c25.jpg)

Thank you.