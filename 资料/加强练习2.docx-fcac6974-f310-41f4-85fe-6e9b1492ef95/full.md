# 一、填空题（每空 2 分，共 30 分）

1.CogFindCircleTool 运行结果中 CenterX 的单位是 （像素/毫米），转换为世界坐标需使用 _方法。  
2.图像处理中的顶帽运算是原始图像与 运算结果的差值，常用于增强 _特征。  
3.在C#中，使用 关键字定义委托类型， 关键字声明异步方法。  
4.工业相机的帧率单位是 _，全局快门相机更适合拍摄 _物体。  
5.在面向对象设计中， 原则要求一个类只有一个引起变化的原因， _原则强 6.调对扩展开放，对修改关闭。  
7.在 VisionPro 中，CogTransform2DLinear 工具用于实现 _变换和 _变换。

# 二、不定向选择题（每空 2 分，共 20 分）

1.提高图像对比度的方法有（ ）

A. 直方图均衡化  
B. 增加伽马值  
C. 线性灰度拉伸   
D. 中值滤波

2.下列 Cognex 工具中可用于边缘检测的是（ ）

A. CogCaliperTool   
B. CogPMAlignTool   
C. CogBlobTool   
D. CogFindLineTool

3.使用 0.5 倍远心镜头时，若物体实际尺寸为 $2 0 \mathsf { m m }$ ，在相机芯片上成像尺寸为（ ）

A. 40mm

B. 20mm

C. 10mm

D. 5mm

4.关于 C#中的泛型，正确的描述是（ ）

A. List<T>是类型安全的集合

B. 泛型方法不能用于值类型

C. where T : class 表示 T 必须是引用类型

D. 泛型会降低代码执行效率

5.影响景深的因素包括（ ）

A. 光圈大小

B. 焦距长短

C. 拍摄距离

D. 传感器尺寸

6.下列哪些操作可以减少图像噪声（ ）

A. 增加曝光时间

B. 使用高斯滤波

C. 提高 ISO 值

D. 均值滤波

7.以下代码的输出结果是（ ）

csharp

int $\mathsf { x } = 5$ ;

Console.WriteLine $( x + + + + + x )$ ;

A. 10 B. 11

C. 12 D. 13

8.相机传感器尺寸为 1/1.8"，分辨率 $1 6 0 0 \times 1 2 0 0$ ，单个像素尺寸约为（ ）

A. 1.5μm B. 3.0μm

C. 4.5μm D. 6.0μm

9.CogHistogramTool 结果中的 StandardDeviation 表示（ ）

A. 灰度平均值 B. 灰度中值

C. 灰度分布离散程度 D. 最频灰度值

10.在 VisionPro 中，CogFixtureTool 的主要作用是（ ）

A. 图像滤波 B. 坐标系统一

C. 特征匹配 D. 图像分割

# 三、判断题（每题2分，共10分）

finally代码块中的语句无论是否发生异常都会执行。（ ）

远心镜头可以完全消除透视畸变。（ ）

CMOS 相机比 CCD 相机更适合高速运动物体拍摄。（ ）

直方图均衡化会改变图像的像素位置。（ ）

CogPMAlignTool 在低对比度图像中的匹配效果优于 CogCNLSearchTool。（ ）

# 四、简答题（共40分）

1.实现C#方法，计算两个点之间的欧氏距离（10分）：

csharp

public struct Point { public double X; public double Y; }

public static double Distance(Point p1, Point p2)

{

// 补充代码

}

2.选型设计：检测 $1 0 \mathrm { m m } { \times } 8 \mathrm { m m }$ 的精密零件，要求精度 0.005mm/pixel，速度 30 件/秒。请计算所需相机分辨率，并说明镜头选型要点（需给出具体计算过程）。（10 分）

3.解释以下 CogBlobTool 参数（10 分）：

Connectivity

SegmentationParams.Mode

MorphologyOperations

AreaMin

4.修改 VisionPro 脚本：当 CogFindCircleTool 未找到圆时，输出圆心坐标(-1,-1)，否则输出实际圆心坐标（10 分）：

csharp

public override void Run()

{

CogFindCircleTool circleTool $=$ new CogFindCircleTool();

// 现有代码...

}

# 答案

# 一、填空题

像素；MapImagePointToWorldPoint

开运算；明亮区域

delegate；async

FPS；高速运动

单一职责；开闭

旋转；平移

# 二、不定向选择题

AC

AD

C（0.5 倍放大率，成像尺寸 ${ \bf \Lambda } = 2 0 { \times } 0 . 5 { = } 1 0 \mathrm { m m } ,$ ）

ABC

BD

C（ $\left( 5 + 7 = 1 2 \right)$

C（ $( 1 / 1 . 8 " { \approx } 9 \mathrm { { m m } }$ ， $9 / 1 6 0 0 { \approx } 0 . 0 0 5 6 \mathsf { m m } = 5 . 6 \mu \mathsf { m }$ ，最接近 $4 . 5 \mu \mathrm { { m } } $ ）

C

B

# 三、判断题

✓

✓

✓

✗（仅改变灰度值分布）

✗（CogCNLSearchTool 更适合低对比度图像）

# 四、简答题

1.欧氏距离计算

csharp   
public static double Distance(Point p1, Point p2)   
{ double dx $=$ p1.X - p2.X; double dy $=$ p1.Y - p2.Y; return Math.Sqrt(dx \* dx + dy \* dy);   
}

2.选型设计

最小分辨率：

X 方向：10mm / 0.005mm/pixel = 2000 pixel

Y 方向：8mm / 0.005mm/pixel $=$ 1600 pixel

相机选择： ${ \geqslant } 2 0 0 0 { \times } 1 6 0 0$ 分辨率（如 $2 4 4 8 \times 2 0 4 8 )$ ）

# 3.镜头选型：

$\textcircled{1}$ 放大倍数 $=$ 传感器尺寸/视野尺寸   
$\textcircled{2}$ 建议使用远心镜头消除透视畸变  
$\textcircled{3}$ 景深需满足零件厚度变化

# 4.参数解释

Connectivity：连通性规则（4/8 连通）

SegmentationParams.Mode：分割模式（阈值/边缘）

MorphologyOperations：形态学操作（膨胀/腐蚀等）

AreaMin：斑点最小面积过滤阈值

# 5.脚本修改

csharp   
public override void Run()   
{ CogFindCircleTool circleTool $=$ new CogFindCircleTool(); circleTool.Image $\equiv$ inputImage; circleTool. run(); if (circleTool.Results != null && circleTool.Results.Count $>0$ { OutputX $=$ circleTool.Results[0].CenterX; OutputY $=$ circleTool.Results[0].CenterY; } else { OutputX $= -1$ . OutputY $= -1$ 1