![](images/e1335e446e9e812796dedc2848a28bc57bc75ef04fbad534215fc805c9e04499.jpg)

# Vision Tools Demo1

Cognex | 2023.4.18

# 培训目的

本次培训的目的是让大家理解视觉工具之间的使用逻辑关系及脚本的熟练运用；

培训的重点：

1. 工具联合使用  
2. 代码思路详解  
3. 循环逻辑演练   
4. 显示模块演练

什么是 Vpro Tools 的联合 ?

![](images/9f556af310e7d808d7b4d743192c27af4bbc26355aed5acea5614bd0e310f659.jpg)

什么是 CogPMAlignTool?

什么是 CogFixtureTool?

什么是 CogFind…Tool?

如何去展示界面化结果 ?

![](images/f4832be85cbc2a4c9a3ce421722db818205e84f78e7c4e3fd3f522e03f1a9d3f.jpg)

什么是 Vpro Tools 的联合 ?

# 图像特征差异

![](images/f67b0bfa64a4ac0702b777868898472e36fad9e666302475ec56e751ca82a995.jpg)  
Image1

![](images/abfef9cbcc3cff35ac32646e2106995e3504fdb6f59bb2eaad9286038ae1606d.jpg)  
Image2

![](images/386ddfe1a1bf38d852da65fc1330fefa391b00aa0a6a9bc7001f235671252598.jpg)  
Image3

![](images/c60a1ecde53af05adc8c8ebdccb38974ad46091d83183eeb8d9dc139c55ec864.jpg)  
ImageN

![](images/f29fe510feee90241e797c8754c815b787ef0cadd5960c30bf84b8b95e498878.jpg)

![](images/431a7aae6026a2f2973f5e5f00368f683c9b49279597468eab789f18650da120.jpg)

![](images/62cd23faf8b8e9cd21878ab56b1b9665b8d73f0828d4de1bd638e4a785096d28.jpg)

![](images/4439657cd5766c8b67468c1523224ba910a2ce2b4d5051b082cf81c1ab7cc497.jpg)

该如何处理角度的不同和位置的不同 ?

# Vpro Tools 的使用流程

![](images/717f1e76a77db9097291fb70aa8b3d00139e22c2b294e8f97c7b31b97984cb8b.jpg)

# Demo1

# 题目要求 :

1. 通过 Vpro 实现准确定位 type1 的螺丝，并测量螺丝circle1 的半径  
2. 将 circle1 的圆心坐标和半径输出到输出端，依次命名为 X1/Y1/Radius1…  
3. 将 X1/Y1/Radius1 所有结果显示在图片左上角

![](images/89ff49db84c5a6c8055fda0b149590aba1e0b57d7359be4fd6df8949a06ce899.jpg)

# 结果展示 :

![](images/7db63ed77bada852dd52514f9a22e3e11211b7450134a00c3e1452e86b83f4c9.jpg)

# Demo2

# 题目要求 :

如右图，是一个四行四列摆放的共 16 个工件，使用该图片完成如下需求，作业保存 ToolBlock 即可：

1. 使用 PatMax 或者 Blob 从左到右，从上到下匹配出每个工件，并建立合适的 Fixture  
2. 逐个抓取工件的上边缘计算角度  
3. 判断每个工件的角度，大于 15度的在对应工件上显示NG（红色字体显示），否则显示OK （绿色字体显示）

# 结果展示 :

![](images/ea86b6e6417cfadc7ddf2565628cc43c342416f25721c9a2fc9a537568f04761.jpg)

# 课后练习

# 题目要求 :

按照如下要求完成练习，作业保存为 ToolBlock的形式：

1. 统计图片中所有硬币的数量，命名为TotalCounts 并输出到 Outputs (10)  
2. 分别统计每种数额的硬币的数量 (25)  
3. 正确判断每种硬币的正反面 (25)  
4. 按照右图示例显示相关信息到界面，第二问中硬币数量小于 1 的显示为红色，第三问中硬币是反的也显示为红色 (20)  
5. 将所有硬币的外圆显示在图像上，并将相同类型的硬币的圆心连线，颜色均显示为橙色 (20)（作业保存格式 :ToolBlock ，命名： TB_Name,Inputs 里面增加一个花费时间记录，例如Time:90 ）

# 结果展示 :

![](images/695f032f17d934301825f9508d9ef856e59f2c3cda44d23196bb9308ba8ada14.jpg)

![](images/e57ffae1cb7d6ade56822ee5041d0017bfa20b17df698f96f6a849b04fd843a2.jpg)

# THANKS