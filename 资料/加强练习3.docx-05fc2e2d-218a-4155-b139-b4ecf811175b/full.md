# 一、填空题（每空 2 分，共 30 分）

CogCalibCheckerboardTool 用于 _标定，其输出的变换类型是

图像形态学处理中，闭运算是先 _后 __，常用于填充 。

在C#异步编程中， 关键字用于等待异步操作， 属性获取 Task 的执行结果。

工业相机的 快门适合拍摄高速运动物体， _快门适合高分辨率静态拍摄。

面向对象SOLID原则中，L代表 _原则，I 代表 _原则。

VisionPro 中，CogFixtureTool 通过 _建立坐标系，CogPMAlignTool 使用 _算法

进行模式匹配。

# 二、不定向选择题（每空 2 分，共 20 分）

1.下列哪些是图像预处理技术（ ）

A. 高斯滤波

B. Sobel 边缘检测

C. 直方图均衡化

D. Hough 变换

2.关于远心镜头，正确的描述是（ ）

A. 消除透视畸变

B. 放大率恒定

C. 适合厚度变化大的物体

D. 比普通镜头便宜

3.相机分辨率 $2 4 4 8 \times 2 0 4 8$ ，传感器尺寸1/1.2"，则像素尺寸约为（ ）

A. 2.4μm

B. 3.8μm

C. $5 . 6 \mu \mathrm { m }$

D. 7.4μm

4.以下C#代码输出结果是（ ）

csharp

string $\mathsf { \Omega } _ { \mathsf { S } } =$ null;

Console.WriteLine(s?.Length ?? -1);

A. 0

B. null

C. -1

D. 异常

5.影响景深的因素有（ ）

A. 光圈值

B. 工作距离

C. 焦距

D. 像素大小

6.Cognex工具中可用于测量尺寸的是（ ）

A. CogCaliperTool

B. CogDistancePointLineTool

C. CogBlobTool

D. CogPMAlignTool

7.提高 CogPMAlignTool 鲁棒性的方法包括（ ）

A. 增加训练图像多样性  
B. 降低对比度阈值   
C. 使用多模型  
D. 扩大搜索区域

8.使用 0.35X 镜头，物体实际尺寸 $1 5 \mathsf { m m }$ ，在 1/2"传感器上成像（对角线尺寸 $8 \mathsf { m m }$ ）将（ ）

A. 完整显示  
B. 部分显示  
C. 超出视野  
D. 无法确定

9.CogHistogramTool 结果中， 表示灰度分布集中程度（ ）

A. Mean   
B. Median   
C. Mode   
D. StandardDeviation

10.在 C#中，关于 try-catch-finally，正确的是（ ）

A. finally 总是最后执行  
B. catch可捕获特定类型异常   
C. 可嵌套多个 catch 块   
D. finally 中不能使用 return

# 三、判断题（每题2分，共10分）

1.全局快门相机会产生运动模糊。（ ）  
2.直方图均衡化会改变图像内容。（ ）  
3.C#中 async 方法必须有 await 调用。（ ）  
4.光圈 f 值越小，进光量越大。（ ）  
5.CogBlobTool 对低对比度图像效果优于 CogPMAlignTool。（ ）

# 四、简答题（共40分）

1.实现 C#方法，判断三点是否构成直角三角形（使用向量点积）（10 分）：

```txt
csharp   
public struct Point { public double X; public double Y; }   
public static bool IsRightTriangle(Point a, Point b, Point c)   
{ //补充代码 
```

2. 选型设计：检测 $1 2 \mathrm { m m } { \times } 1 0 \mathrm { m m }$ 零件，精度 0.008mm/pixel，速度 25 件/秒。计算相机分辨率并选择镜头（需计算过程）。（10 分）

3.解释 CogFindLineTool 参数（10 分）：

ProjectionAngle

ContrastThreshold

FilterHalfSizePixels

GapThreshold

4.修改 VisionPro 脚本：当 CogBlobTool 未检测到斑点时返回 false，否则返回 true（10 分）：

csharp   
public override void Run()   
{ CogBlobTool blobTool $=$ new CogBlobTool(); //现有代码...   
}

# 答案

# 一、填空题

相机；CogTransform2DLinear

膨胀；腐蚀；小孔

await；Result

全局；卷帘

里氏替换；接口隔离

基准特征；PatMax

# 二、不定向选择题

ABC

AB

C（ $( 1 / 1 . 2 " \approx 1 3 . 3 \mathrm { m m }$ ，对角线像素 $\scriptstyle { \int ( 2 4 4 8 ^ { 2 } + 2 0 4 8 ^ { 2 } ) = 3 1 9 2 }$ ，13.3/3192≈0.00416mm=4.16μm）  
C（空值安全访问）

ABC

AB

AC

B（成像尺寸 $1 5 { \times } 0 . 3 5 { = } 5 . 2 5 \mathrm { m m } < 8 \mathrm { m m } )$

D

ABC

# 三、判断题

✗（全局快门减少运动模糊）

✗（仅改变灰度分布）

✗（可无 await 但会警告）

✓

# 四、简答题

直角三角形判断

csharp

public static bool IsRightTriangle(Point a, Point b, Point c)

{

// 计算向量

double abx $=$ b.X - a.X, aby $=$ b.Y - a.Y;

double acx = c.X - a.X, acy = c.Y - a.Y;

double bcx $=$ c.X - b.X, bcy = c.Y - b.Y;

# // 计算点积

double dot1 $=$ abx * acx + aby * acy;

double dot2 $=$ (-abx) * bcx + (-aby) * bcy;

double do $\mathsf { \Omega } \cdot 3 = ( \mathsf { - a c x } ) \mathsf { \Omega } ^ { \ast } \left( \mathsf { - b c x } \right) + ( \mathsf { - a c y } ) \mathsf { \Omega } ^ { \ast } \left( \mathsf { - b c y } \right) ;$ $=$ :

//任意点积接近0则为直角const double tolerance $= 1\mathrm{e} - 5$ return Math.Abs.dot1) $\texttt{<}$ tolerance |Math.Abs.dot2) $\texttt{<}$ tolerance |Math.Abs.dot3) $\texttt{<}$ tolerance;

选型设计

最小分辨率：

```txt
X方向：12mm/0.008mm/pixel = 1500 pixel
```

```txt
Y方向：10mm/0.008mm/pixel = 1250 pixel
```

相机选择： $\geqslant 1 5 0 0 \times 1 2 5 0$ 分辨率（如 1600×1200）

# 镜头选型：

$\textcircled{1}$ 放大率 $=$ 传感器尺寸/视野尺寸（如 1/1.8"传感器选 0.5X）  
$\textcircled{2}$ 景深需满足零件高度公差

# 参数解释

ProjectionAngle：投影角度（边缘检测方向）

ContrastThreshold：对比度阈值（过滤弱边缘）

FilterHalfSizePixels：滤波半宽（平滑边缘）

GapThreshold：最大间隙（允许的边缘间断）

# 脚本修改

csharp   
public override void Run()   
{ CogBlobTool blobTool $=$ new CogBlobTool(); blobTool.Image $\equiv$ inputImage; blobTool. run(); if (blobTool.Results != null && blobTool.Results.GetBlobs( $! =$ null && blobTool.Results.GetBlobs().Count $>0$ ） { //成功检测到斑点 OutputResult $=$ true; } else { //未检测到斑点 OutputResult $=$ false; }