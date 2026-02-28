1、 CogCaliperResults. MapFromImage

Map from the image to one of the caliper 1D spaces(从原图像到投影图像，得到边的位置信息)

public double MapFromImage(double x,double y,CogCaliperSpaceCo nstants toSpace)

返回值为位置

2、 CogCaliperResults. MapToImage Method

从投影图像到原图片，返回其在原图像上指定位置的坐标

public void MapToImage(double position,CogCaliperSpaceConstants fromSpace,double t,out double x,out double y)

t: 指定0.0将返回的点放置在区域的顶部(顶部是原点边)。指定1.0将返回的点放置在区域的底部。该参数的默认值是0.5，它将该点放置在区域的中心。(即0返回投影起点，1返回投影终点，0.5为区域中心)

3、CogCaliperResults. Map Method

在过滤后的图像位置与结果位置和投影图像位置之间映射。

public double Map(

double position,

CogCaliperSpaceConstants toSpace,

CogCaliperSpaceConstants fromSpace

)

4、CogCaliperSpaceConstants Enumeration

public enum CogCaliperSpaceConstants

Filter 在此空间中，滤波图像的左边缘为零

Projection 空间,零对应的左边缘投影图像

Result 投影图像的中心为零的空间