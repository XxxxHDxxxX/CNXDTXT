# 一、填空题（每空 2 分，共 30 分）

1.CogFindLineTool 运行结果中 Rotation 是 （弧度/角度），转换为角度的公式是_。  
2.图像处理中的开运算是先 _处理，然后 _处理。  
3.在C#异常处理结构中， 块封装了可能引发异常的代码，抛出的异常要用_语句捕捉，无论代码是否抛出异常，都会执行 _语句。  
4.工业相机按照传感器结构特性可以分为 _相机和 _相机。其中 _相机经常用来飞拍作业，更节省拍照时间。  
5.在 C#中面向对象的三大特性是 ，，。  
6.在C#中定义方法时使用的参数为 _，而调用方法时使用的参数是 。

# 二、不定向选择题（每空 2 分，共 20 分）

1.增亮图像亮度的方法有（ ）

A. 增大光源亮度，增大曝光值   
B. 增大相机增益值   
C. 减小光圈值   
D. 增加图像像素灰度值或者乘以大于1的常数

2.String 类中，以下方法有哪些可以截取字符串（ ）

A. Substring()

B. ToUpper()

C. EndWith

D. Remove()

3.如下图所示，判断该 PMAlign 工具结果是粗糙得分还是精细得分（ ）

[图片描述：表格显示“精细阶段”]

A. 拟合误差

B. 覆盖范围

C. 缩放

D. 精细阶段

4.以下关于 Machinesupport 中 TCPJobParser 方法描述正确的有（ ）

A. 可以解析 command 指令

B. 运行 RunJob 方法

C. 设置返回结果

D. 可以返回取像完成指令

5.以下哪些工具可以用于图像区域分割（ ）

A. CogBlobTool

B. CogFindLineTool

C. CogCopyRegionTool

D. CogAffineTransformTool

6.景深和焦距、光圈、物距的关系是（ ）

A. 光圈越小，景深越大  
B. 拍摄距离越大，景深越大  
C. 焦距越短，景深越大  
D. 以上都是错误的

7.下面哪些措施可以提高 CogPMAlignTool 的运行速度（ ）

A. 减小搜索区域  
B. 增大搜索区域  
C. 提高硬件配置  
D. 提高接受阈值

8.以下语句得到 C 的值是多少？（ ）

csharp

int $\mathsf { A } = 6$

int $\mathtt { B } = 4$

int $\begin{array}{c} \mathsf { C } = \mathsf { A } > \mathsf { B } \overset { , } { : } 4 \overset { , } { : } 1 4 \overset { . } { \underset { . } { \end{array} } }$ ;

A. 2

B. 4

C. 14

D. 10

9.相机 CCD 芯片长边尺寸为 $8 . 4 \mathsf { m m }$ ，分辨率为 $2 4 4 8 ^ { \ast } 2 0 4 8$ ，若使用 0.2 倍的远心镜头，此时的像素精度是多少？（ ）

A. 0.017mm/Pixel

B. 0.041mm/Pixel

C. 0.042mm/Pixel

D. 0.002mm/Pixel

10.CogHistogramTool 工具中结果的 Mode 指的是（ ）

A. 平均灰度值

B. 灰度值中值

C. 众数，直方图中数量最多对应的灰阶值

D. 灰度值方差

# 三、判断题（每题 2 分，共 10 分）

循环中，可以用continue语句跳出当前循环体，继续进行下一次循环。（ ）

操作符（||）被用来说明两个条件同为真的情况。（ ）

VisionPro中，同一个图片根空间和像素空间的坐标一定相同。（ ）

夏天叶子显示绿色是因为对绿光吸收得少，大部分绿光反射到人眼中。（ ）

CogBlobTool 对于形状多变，明暗对比比较强烈的特征定位效果比 CogPMAlignTool 要好。（ ）

# 四、简答题（共40分）

1.实现下面的函数，返回任意整型数组的最小值。（10分）

csharp

```java
public static int GetMinValue.params int[] nums)   
{ //补充代码 
```

2.根据要求进行相机选型，检测料件大小： $1 5 \mathsf { m m } ^ { * } 2 0 \mathsf { m m }$ ，要求检测精度 0.01mm/Pixel，要求检测速度 17 件/秒，请问如何选择相机，并给出选择理由。（10 分）

3.参数解释，如下图，解释下图中最大线数，角度容差（边缘限制），长度阈值，距离容差的意思。（10 分）

[图片描述：参数设置界面]

最大线数：

角度容差：

长度阈值：

距离容差：

4.补全或修改脚本：当边或者blob抓不到时，输出999.999，不影响外层运行。（10分）

```swift
csharp   
public class CogToolBlockAdvancedScript : CogToolBlockAdvancedScriptBase   
{ public override bool GroupRun(ref string message, ref CogToolResultConstants result) { //现有代码略，需修改 }   
} 
```

# 答案

# 一、填空题

1.弧度；CogMath.RadToDeg()   
2.腐蚀；膨胀   
3.Try；catch；finally   
4.CCD；CMOS；CMOS   
5.封装；继承；多态   
6.形参；实参

# 二、不定向选择题

ABCD

A   
D   
ABCD   
C   
A   
ACD   
B   
A   
C

# 三、判断题

✓

✗（|| 表示逻辑或，即两个条件至少一个为真）  
$\pmb { \chi }$ （坐标不一定相同）  
✓   
✓

# 四、简答题

1.代码实现

csharp

public static int GetMinValue paramss int[] nums)   
{ int min $=$ nums[0]; for (int $\mathrm{i} = 1$ .i $<$ nums.Length; i++) { if (nums[i] < min) { min $=$ nums[i]; } } return min;

# 2.相机选型

计算最小像素需求：

宽边： $1 5 \mathrm { m m } / 0 . 0 1 \mathrm { m m } / \mathrm { p i x e l } = 1 5 0 0$ pixel

长边：20mm / 0.01mm/pixel $=$ 2000 pixel

相机选择：CAM-CIC-5000-20-G（分辨率 $2 4 4 8 \small { \times } 2 0 4 8 > 1 5 0 0 \small { \times } 2 0 0 0$ ，帧率 20 帧/秒 $> 1 7$ 帧/秒），满足分辨率和速度要求。

# 3.参数解释

最大线数：允许检测到的最大直线数量（图中设置为 1）。

角度容差：允许检测直线的角度与预期角度的偏差范围（图中 $\pm 5 ^ { \circ }$ ）。

长度阈值：直线的最小有效长度（图中 0 表示无限制）。

距离容差：允许的直线位置偏差范围（图中 0.5 单位）。

# 4.脚本修改

csharp   
public override bool GroupRun(ref string message, ref CogToolResultConstants result)   
{ CogBlobTool blob $=$ mToolBar.Contents["BlobTool"] as CogBlobTool; CogFindLineTool findline $=$ mToolBar.Contents["CogFindLineTool1"] as CogFindLineTool; CogDistancePointLineTool cdp $=$ mToolBar.Contents["CogDistancePointLineTool1"] as

CogDistancePointLineTool;

```javascript
blobRUN(); findline.Run 
```

// 检查 Blob 结果和直线结果是否存在

```javascript
if (blob.Results == null || blob.Results.GetBlobs() == null || blob.Results.GetBlobs().Count == 0  
|  
    findline.Results == null || findline.Results.Count == 0)  
{  
    mToolBlock.Outputs["Distance"].Value = 999.999;  
}  
else  
{  
    // 确保距离工具执行  
    cdp.run();  
    mToolBlock.Outputs["Distance"].Value = cdp Distance;  
}  
return false; 
```