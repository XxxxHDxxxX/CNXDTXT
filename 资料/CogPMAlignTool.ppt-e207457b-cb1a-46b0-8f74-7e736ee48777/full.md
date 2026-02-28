![](images/bc49149d258c23d392e25fa950953197fbfe4d1a4c264f9f2ae8cc0271ce545d.jpg)

# CogPMAlignTool

2019/12/19

Zhang Juan

# 学习目标

# 学员将学会正确地：

识别 PMAlign 可能是视觉解决方案一个部分的应用  
□ 创建并配置一个PMAlign工具来查找不同运行条件下的图案

√ 训练图案并确定自动萃取的特征对于该应用是否有效  
✓ 评价参数设置，确定对于不同的运行条件需要哪些参数  
✓ 优化执行时间和精确度

# PatMax®介绍

- PatMax® 是一种图案位置搜索技术  
PatMax® 图案不依赖于像素格栅   
特征是表示图像中不同区域之间界限的等高线  
基于特征的表现可以比像素格栅表现更快捷和更准确地进行转化

![](images/a5c4d48d5244470c7c7250270a67955ebfe2bcedcd30dd3c1399295498e9e483.jpg)

# PatMax® 功能

# 使用一个工具测量

图案的位置

相对于原来训练图案的尺寸

相对于原来训练图案的角度

# 空前的精确度

多达1/40像素的平移

多达1/50度的旋转

多达 $0.05\%$ 比例

# 速度得到提高

基本图案查找速度更快

角度和尺寸的确定更快

# PatMax® 功能

# 对齐结果得到改善

处理的图像对比度范围较广

散焦、部分阻塞和预期之外的特征可以忍受

# 更易于使用

在一个步骤中直接测量角度和尺寸大小

图案可以在没有保真度损失的情况下在机器之间传送

# PatMax® 应用

![](images/f54683788034b0efe8d82b1db2e34df68e679f46935832bdc57762a9549ae5a1.jpg)

基于基准点对齐打印的电路板 (对齐)

# PatMax® 应用

定位桃汁罐头上的拉环；在平移、旋转和灯光方面的差异（探测是否存在）

结果：4

结果：3

结果：2

结果：1

得分： 0.97

对比度： 0.94

匹配错误： 0.02

位置： $x = 351.08$

$$
\mathbf {y} = 2 4 5. 9 2
$$

角度： 0.09

X- 比例: 1.0

Y- 比例: 1.0

![](images/bb7dcb358b07a616603f3e364f78623a26755c99a9ca0415a675b5529f3bf570.jpg)

# PatMax® 应用

- 尽管类型有差异、灯光有变化、元件角度旋转、外形极其相似，也可以对引擎盖进行识别（整理和归类）

![](images/11215428ca8d1acfc500603b68c60032a62b1b1cd3e1fdc8ff4ebabf5b0c61d4.jpg)

# PatMax® 算法

# PatQuick™

速度最快  
对于三维或者低质量元件最佳  
- 承受更多图像差异  
例子：捡放  
** PatQuick™ 是 PatMax®算法的仓促部分

# PatMax®

精确度最高  
在二维元件上表现佳  
最适合于细微细节  
例子：薄片对齐

# PatFlex

为高度灵活的图案设计  
在弯曲不平的表面上表现较佳  
- 极其灵活，但不够精确  
例子：标签定位

# 图片

![](images/a6b75993be79c4e67eb00c6fdd645e8707cabc6fe9a0e5590ffe0abf22377731.jpg)

# 图案训练

![](images/45142d25f6780f94faa72a678dc35bcf3c04e54b8f6aca418c0ab2fcd97e14ad.jpg)

# 链接工具

您需要图像，用于：  
图案训练   
运行期间检查  
链接像源的输出图像（OutputImage）到PMAlign的输入图像（InputImage）拖放

# Tools

![](images/6b6e306782221703be004bfd6b045d8bad7a0a1506b5c5e4d2f9a2adb533b383.jpg)

# 训练图案

PMAlign 工具有三个相关的图像  
要训练我们的图案，你们需要一个Current.TrainImage

![](images/0b669bee2ea90c355a8113ab1c1b2494fed4b85d3841ee3b3a7ab58accf5e54b.jpg)

# Current.InputImage

PMAlign 工具还有一个可以是运行期间图像也可以是“抓取”作为训练图像的 Current.InputImage (Current.TrainImage)

![](images/034105221ceff9fe849528b05a578d7058e87052485021c072dd046ff15a019e.jpg)

# 抓取训练图像

在控件中按下抓取训练图像按钮

![](images/89693495522d2074075d5c1245c8b7be59c9c32ac162aa5b753b44bf93f0a547.jpg)

![](images/bde001f8f688ad6effaadc589f16e1b6e262d6b090d893d2bd2bb5e7fc2384a7.jpg)

在您训练一个图案时，PatMax 确定该图案中包含的所有特征  
特征是表示图像中不同区域之间界限的等高线  
特征通过一系列沿着等高线排列的界点  
界点通过图像中位置（x、y）和其垂直于等高线的方向q来定义

# 图案训练

PatMax® 图案训练的总指南:

选择一个有一致特征的代表性图案

- 减少不必要的特征和图像噪音  
- 只训练重要的特征  
- 考虑遮罩，来创建代表性图案

更大的图案会提供更高的精确度  
实际上，界点越多，精确度越高

# 图案区域和原点

# 在使用图形时

拖动并调整图案周围训练框的大小在适当的位置上定位原点

![](images/8e00408aca75f70a23ada4bf78e498967a39958b0f7a16f4a50df5d9862caf6a.jpg)

# 图案区域和原点

下一步，定义包含要训练的图案的像素区域和图案原点

使用图形或者在训练区域和原点标签中输入值

![](images/2028b507a2fdccdda24bbfcfa7867c61b169d4d057a45e544fdd83fcdcbcf01e.jpg)

# 模型原点

- 在 PatMax® 定位搜索场景中模型的实例时，模型原点可以辨别要向您报告的点  
- 要维持最高的精确度，原点必须放置图案区域的中心

![](images/88dbc4d6ef44617529b9ef66b7bb124c9d37ac4c58f93bdb60d6ec9edfebc5ba.jpg)

# 训练图案

# 按下训练按钮训练图案

PatMax 找到区域中的特征

![](images/8754862696ed2e0f4ed149fa5a37b03920ec1e47ec7a98c5a339935383de1887.jpg)

# 图案特征

要看看 PatMax 使用该图案已经探测到什么作为要查找的特征，需要勾选训练特征图形

![](images/b88c928dbd43925d1f637f3ea1608dc395c6a8d359c69e433a060cd7b82181ee.jpg)

# 图案特征

黄线表示粗糙特征  
绿线表示 精细特征

Current.TrainImage

![](images/3c0921bbb499d0cee2cc5c78082a7d8da808350a05455c16731ed2b5766780c3.jpg)

# 图案特征

放大以便更近距离地查看所探测到的特征

CurrentTrainImage

![](images/d30817a29208e24413206ae89c610852a18ece5c35e15bc3ce54794d0a89ea9d.jpg)

# InfoStrings

# 寻找任何 InfoStrings

这些将表示图案训练是否成功

它们还警告受训图案可能存在的各种问题

Info:

Pattern was trained successfully

Trained

# 图案极性

图案极性在沿边界的每个点上定义为向黑色的方向，与磁性无关。

默认状态下，PatMax® 只查找与受训图案具有相同极性的图案。

您可以配置 PatMax® 忽略图案的极性并且只使用特征形状信息

![](images/89ffba0d19f3fb314d1d72704b65dc3941da1f955997cb458088a0353897ba78.jpg)  
受训图案

![](images/bfa55d5b34482924322959380af397bad4b82b41dc0a8d20c1c7ada1133e81ce.jpg)

![](images/0dd124d9c43abf118b7253b39ceffe269f5a61b882990912c18fc95def5dddff.jpg)

![](images/7111a33fc618dddcb3a9443bfafcd67815999211e15dd21a083422d44f889ef0.jpg)  
匹配的极性

![](images/4c6301f0bd5cfe9d9592ed0e0c422dc2812658b7b88b9e6f7eb6f92af88c54a7.jpg)

![](images/57e188a8eaf13071ff80ef8262874c0263cdc6b8531b83b143035f1d4a35121f.jpg)

![](images/da23d1e8a3b5bb5244f1262a2907563ae1355833c8cc03de40990761e63a9eaa.jpg)  
不匹配的极性

# 极性

勾选复选框忽略极性（允许极性变化）

![](images/85a11af7abca6b30bd70cb2e456b9b24e0867c2a0575928d24f345244024335b.jpg)

# 忽略图案极性

极性是对 $\mathrm{PatMax}^{\circledR}$ 的一个提示, 可以使得图案更明确些。您应该使用极性, 除非对象受极性变化的影响。注意下面说明的可能模糊的对象。

![](images/4919b92fec05fc98ce6409a9d752120cf1c6c49510e9ce126e0388986686b71e.jpg)  
对象

![](images/454b6f9c3709ef67709bc525bb17f57d748da3ea40a01dd27b722172f8501fa8.jpg)  
PatMax 图案

![](images/0542350e6b5b74817f7f8650e638e1c22569f264067ceb2393b4b6e808a76998.jpg)  
PatMax 使用了极性  
预期匹配

![](images/f83c297c35ab619cbeb08361f21311f92c6b8554a00b51f37a90524d7dfb406f.jpg)  
PatMax 忽略了极性

![](images/dc61b42d33724ac2c584af17bd798a09cf63297ba415d41f9d869d4f3ae57f3e.jpg)  
预期匹配   
偶然的匹配

# 弹性

# 显示高级参数

弹性 是一个高级参数，在查找与原来的受训图案存在一些几何形状变化的元件时很有用途

![](images/090ae876711223fbbf277f66916125eda6a4ec275483846d31083bf49fc357f8.jpg)

# 弹性

弹性，是一个运行期间参数，用来指定您允许 PatMax® 忍受非线性几何形状变化的程度

弹性以像素为单位进行测量，通常为0到8

在您提高弹性时，PatMax® 可能找到非预期的匹配- 精确降低

![](images/2f9030aec2d0b558af9f8243609b2d611a29e154ac3e7ef6b8427c69a50c15b1.jpg)

# “坏”图案

如果您看着受训图案却不喜欢它时，该怎么办？

太多细节

细节不足

特征遗漏

# 粒度

图案训练图像：

![](images/9aa90dff351ad26197249a250c16562a797de77cc1dff73c0230be4f57414ead.jpg)  
粗糙定位

![](images/c146007ad1368e0339133410ea27450142165919a2c13583b9898dd86679e57e.jpg)

![](images/6c12c37a639802962d9c0b87069111fff27585760e7ef3c73ffccc193affe558.jpg)  
小特征：  
精细定位

- 粒度表示 $\mathrm{PatMax}^{\text{®}}$ 在图像中探测到哪些特征  
在多数情况下，PatMax®为您选择的粒度范围是最佳的

# 粒度

![](images/48c0d6be41fe3ff0a1996886f35aee14ac3af544fcc450339055fffa0284d73b.jpg)  
精度 $= 1$

![](images/c0302e80278fc157ccae1c400c932e7cfdb0fd27a22ec93da9725810daca2244.jpg)  
图案训练图像

![](images/bf470166411a5185991be4c4a3f2259eee029937cf641b80e0128283bd2ce0bc.jpg)  
精度 $= 15$

![](images/fd46bb1f0f59bac5fef303bb02b475f0067dd9432c27eb301253edfff512936d.jpg)  
精度 $= 4$

![](images/2c978b72bc7d2c37abe890e2778ae554515a2efc9bf28fe9abf3a4ed6219994e.jpg)  
精度 $= 10$

- 粒度被描述为探测到其中特征的目的半径，以像素表示  
- 增加粒度会减少 $\mathrm{PatMax}^{\circledR}$ 将使用的精细特征的数量

# 精度限制

- PatMax® 使用精细和粗糙限制之间的精度范围  
使得粒度更粗糙（更高）：

提高速度

降低精确度

探测粗糙并且减弱精细特征（可能是好的也可能是坏的）

使得粒度更精细（更低）：

降低速度

提高线性精确度

探测精细并且减弱粗糙特征（可能是好的也可能是坏的）

# 人工建模

您也可以使用形状模型训练 PMAlign 模型

在找不到整体质量好的训练元件的应用场合中使用

![](images/448166ee25e283447bd82a49184f5231e1845a576c8c502ab41ec5d9fd30fc11.jpg)

# 人工模型编辑器

模型编辑器允许您使用图像作为向导自动萃取形状或者绘制您自己的形状

![](images/b9c26e4f3f8c9d242437817ddd2d44b094593518f6d92d837de1bbc3dd68d626.jpg)

# 运行期间

![](images/488bb875e5b4bfccbb8b37a62368bc4699fec46e175ea9e55045b735d27e4bb1.jpg)

# 运行期间参数

选择运行期间算法  
- 然后规定在运行期间图像中要找到的实例数量  
指定接受阀值

![](images/df3fc026b930d2f26c7abcc42cff423a0b381f41074b6aa5a7ce8d61cea244ad.jpg)

# 接受阈值

接受阈值是 $\mathrm{PatMax}^{\text {® }}$ 用来确定匹配是否代表搜索图像之中模型的一个有效实例的分值（介于 0 和 1.0 之间）。提高接近值会减少搜索所需要的时间。

![](images/cfa25c4909cbe1513425eeaf96ec4626eea5365afb94e3c8d9bde16844ccd4a5.jpg)

# 六种自由度

![](images/0652845469a4d16a0b81f97ac5fef1029843f228deecef450ae6a4cdc841b9ca.jpg)  
X平移

![](images/973d9a09cb242c09bd44583b6dfbeeb78a36010c63243d49b1f377c74ba7bada.jpg)  
Y平移

![](images/49e3d22e81dce0859a23aa633bf03cc65928e718dbe3e0ed83aa84aaef13929d.jpg)  
旋转

![](images/b9d99cf91954df8f0a0e9b12c59cf4e42a6c95662d684a4c786dcbfd9c7390a8.jpg)  
锁定

![](images/d720ec864bcd55bd54dc97d6f1516c0f652f59503235b40ce24586f42cef75aa.jpg)  
X 比例

![](images/8cbd850845077c2acad1208641d40cce48a92a22a21cdb049abf4e494f698b66.jpg)  
Y 比例

** 如果使用多种自由角度，比例也一直应用在第一位。**

# 自由度

# 设置标称值或者值的范围

使用箭头在您使用的值之间切换

另外切换角度和角弧度

比例 X 和比例 Y 均为高级参数

![](images/dd8b4e4259e8a7033ab0f0405d90035ce8f4b70798a4a9a63161f0d3db62444a.jpg)

# 自由度

记住：告诉 PatMax® 您了解元件的哪些内容 -- 不要激活您的应用程序不需要的自由度

- 标称值应该设置为已知元件所有的值  
如果以不同于图像的比例做为训练图案，则设置锁定比例的标称值以反映图像的比例

范例：训练图案的尺寸可能使得 PatMax® 很难确定，这是元音变音的一个特征还是图像噪音

按照此尺寸训练，并且将标称刻度值设置为 $50\%$ ，确保整个字符被训练为所有特征

![](images/26cdbf30a85fe9013b9d279b02f25b31c298e1e9ebf231a886ff0f9c357300e9.jpg)

# 自由度

# 每个自由度都会有一个从低到高的值域

# 可以激活多个自由度

- 多个自由度可能会造成无意的匹配  
- 在三刻度自由度中，最多只能激活两个 - 第三个会是多余的

按照此尺寸训练并且设置 $50 - 200\%$ 比例的范围可以允许：

![](images/dfe6e04165c99d2d7322ce742878c1552e581e4991fb8b3664ad08e5a0fc11e2.jpg)

原来 - 1.00

e

0.50

e

0.67

e

1.17

e

1.33

e

1.67

e

2.00

# 搜索区域

默认状态，PatMax搜索整个图像寻找可能的匹配  
- 要让 PatMax 只在图像的一个部分中查找，使用一个区域形状（Region Shape）
  通过键入值或者使用图形设置大小和位置

Train Params

Train Region & Origin

Run Params

Search Region

Region Mode:

Pixel Aligned Bounding Box Adjust Mask

![](images/521438d790c6470eb8e6fe8245f705ca0f82844df62fc350c080446e19a1f4ba.jpg)

Region Shape:

<None=Use Entire Image>

CogCircle

CogEllipse

CogRectangle

CogRectangleAffine

<None=UseEntireImage>

# 图形

最后，选择在运行期间需要显示的图像

记住图形的更新需要时间

![](images/cb5b1339d422b0d4232eea81aa1236c9e66077326b927b79f38839446a319f8b.jpg)

# 运行PatMax

按下运行按钮在当前输入图像上运行 PatMax  
如果查找到一个实例，指定图形会出现在最后运行的输入图像上

![](images/24d953f9e6a09b1f661af1760c7138cf6e76a453c6518a4738302dd034d16e4a.jpg)

# 结果

结果显示在结果标签的下面  
如果找到多个实例，它们将按得分降序排列返回

![](images/168eb850497ed81ea7c352b2be2d733c72d97a804d5b8171e8bba0a3f3e2fe91.jpg)

# PatMax得分

得分范围从0（不匹配）到1.0（完全匹配）  
• 亮度、对比度和极性不影响得分。它们只可能影响图案是否探测得到。  
在计分中需要考虑的因素包括:

- 图案形状适合度  
- 在自由度范围内的适合  
- 遗失特征   
- 无关特征（只限于 $\mathrm{PatMax}^{\text {® }}$ 算法）

# 结果

# 得分

结果特征与训练图案特征的匹配程度是多少

# X、Y

所找到的图案相对于指定原点的位置

# 角度

所找到的图案相对于原来训练的图案的角度如果使用标称角度，这始终等于标称值

# 结果

匹配错误（只限 PatMax 算法）

训练图案的形状和在搜索图像中找到的图案实例的形状之间差异度的测量

覆盖 (只限 PatMax 算法)

训练图案的所有部分也在搜索图像中存在程度的测量

- 杂乱 (只限 PatMax 算法)

找到的对象中包含有训练图案中没有的特征程度的测量

# 结果

# 比例

所找到的图案的大小与原始训练图案的对比

如果使用标称比例，这总是等于标称值

a.k.a. 锁定比例

# 比例 $X$ 、比例Y

所找到的图案的大小与原始训练图案沿 X 和 Y 轴方向的对比

如果使用标称比例，这总是等于标称值

# 如何使得PatMax®更快

控制您能控制的并且告诉 PatMax® 您所知道的元件  
了解哪些参数影响执行时间

# 参数和执行时间

- 搜索 “体积” 越大，执行时间可能越长  
(宽) × (高) × (角度区域) × (刻度区域)   
减小接受阈值强迫更多的探索  
加大所要求的结果的数量使得执行时间稍长  
减小精细粒度限制增加时间（更高细节要解析）  
提高粗糙粒度限制减少时间（但是确保探测到必要的特征）  
考虑极性稍微提高速度  
设置对比阈值 $>0.0$ ，便于更快地执行

# 运行期间精确度指南

# 从不要求 PatMax® 解决您已经知道或者应该知道的

倾向于“考虑极性”

倾向于弹性非常接近于0.0

倾向于标称的 DOF 设置

如果您需要使用 DOF 区，根据对象变化的实际预期设置它们

# 高精确度指南

# 对象外观

对象在相对几何形状上必须一致

对象在相对外观上必须一致

对象特征必须明显地界定

# 演示和照明

最小化镜面反射、阴影、非线性变化、阻塞、不均匀对比度变化

# 高精确度指南

# 相机

使用高质量镜头将扭曲最小化

坚持视场的中间

细心地对焦

调整光圈避免饱和

根据系统校准相机

# 越大的图像越准确

# 确保精细粒度为 1.0

如果自动选择更大的值，您会受到警告

Thank you.