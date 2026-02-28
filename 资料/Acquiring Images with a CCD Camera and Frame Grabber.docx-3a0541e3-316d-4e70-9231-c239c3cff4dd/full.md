帧——就是影像动画中最小单位的单幅影像画面，相当于电影胶片上的每一格镜头。 帧就是一幅静止的画面，连续的帧就形成动画，如电视图象等。 我们通常说帧数，简单地说，就是在1秒钟时间里传输的图片的帧数，也可以理解为图形处理器每秒钟能够刷新几次，通常用 fps（Frames Per Second）表示。 每一帧都是静止的图象，快速连续地显示帧便形成了运动的假象。高的帧率可以得到更流畅、更逼真的动画。每秒钟帧数 (fps) 愈多，所显示的动作就会愈流畅。

Acquiring Images with a CCD Camera and Frame Grabber

本主题包含以下部分:

The Imaqe Acquisition Process   
Get a Frame Grabber Object   
Select a Video Format   
Create an Acquisition FIFO   
Acquire an Image   
Sample Application   
Complete Application

VisionPro支持大量广泛使用的电荷耦合设备(CCD)相机以及康耐视数码(CDC)系列相机的图像采集。用Visual Studio获取映像的过程.NET应用程序的不同取决于你使用的相机类型。

本主题描述如何创建Visual Studio .NET应用程序，使用软件触发器从CCD相机获取图像，并使用康耐视显示控件显示图像。有关使用 CDC相机获取图像的说明，请参见主题使用CDC相机和帧捕捉器获取图像。此外，有关如何获取彩色图像的描述，请参阅“如何使用彩色图像”主题。色彩获取需要一个支持彩色图像的照相机。

VisionPro 示例目录(Start->Cognex->VisionPro->VisionPro 示例)包含多个图像采集应用程序示例。

# The Image Acquisition Process（图像采集过程）

为了使用CCD相机和帧捕捉器获取图像，您的 Visual Studio。NET应用程序需要完成以下任务:

1、 添加 CogFrameGrabbers 的引用（Cognex.VisionPro.Core.dll）；  
2、设置相机的视频格式；  
3、使用视频格式和帧抓取信息创建一个采集 FIFO；  
4、通过调用帧抓取对象的 Acquire 或 StartAcquire 方法来开始获取；  
5、如有必要，完成采集，得到代表所采集图像的 CogImage8Grey 对象。

# 二、 Get a Frame Grabber Object（获取一个帧抓取对象）

在应用程序获取图像之前，它必须知道系统用于对图像进行数字化的帧抓取器的数量和类型。VisionPro 定义了一个集合类 CogFrameGrabbers，它表示安装在 PC 上的框架抓取。下面的编程语句创建一个帧抓取集合，然后声明一个对象变量设置为第一个帧抓取:

CogFrameGrabbers myFrameGrabbers $=$ new CogFrameGrabbers();

ICogFrameGrabber myFrameGrabber $\cdot$ null;

myFrameGrabber $=$ myFrameGrabbers[0];

# 三、 Select a Video Format（选择视频格式）

接下来你必须选择一个视频格式，它描述了连接到你的帧抓取器的相机和要获取的图像 的 大 小 。 视 频 格 式 被 指 定 为 字 符 串 ， 并 且 必 须 是 FrameGrabber 对 象 的AvailableVideoFormats方法返回的字符串之一。这个示例代码声明了一个视频格式:const string VIDEO_FORMAT $=$ "Sony XC75 640x480";

# 四、 Create an Acquisition FIFO

要创建一个新的获取 FIFO，需要使用 FrameGrabber 对象的 CreateAcqFifo 方法，传递要使用的视频格式和 CogAcqFifoPixelFormatConstants。

使用 Sony XC-75 相机创建一个适用于获取宽 640 像素、高 480 像素的灰度图像的FIFO采集，并采用默认的FIFO像素格式:

```txt
ICogAcqFof myFifo = null; 
```

myFifo $\equiv$ myFrameGrabber.CreateAcqFifo(VIDEOFormats,CogAcqFifoPixelFormatConstants.F ormat8Grey,0,false);

一旦创建了一个获取FIFO，就可以修改诸如亮度和对比度之类的属性。您可以在任何时候更改获取FIFO属性。

# 五、 Acquire an Image

一个 ICogAcqFifo 对象有两种方法可以用来开始获取图像:

ICogImage Acqire(out int triggerNumber)

int StartAcquire()

使用Acquire将获取请求放置到队列中。如果没有其他请求挂起，则立即进行取像。否则，获取请求将保留在队列中，直到能够处理为止。下面的编程语句使用Acquire方法返回对 CogImage8Grey 对象的引用。CogImage8Grey 类表示一个 8 位的灰度图像。

CogImage8Grey myImage;

int trigNum;

```javascript
myImage = (CogImage8Grey)myFifo.Acquire(out trigNum); 
```

FIFO队列的大小被限制为32个请求，必须获取图像才能从FIFO队列中删除它们。

如果不这样做，FIFO将被填充，随后的图像将无法获得。您可以使用

CompleteAcquire来获取未取像完成的图像，或者使用Flush来删除未完成的请求。

使用GetFifoState来监视FIFO中挂起的获取请求的数量。

调用StartAcquire方法将启动新的取像，而不等待当前取像完成。然后必须将返回值传递给 CompleteAcquire 方法以获得图像。

注：Acqire(）方法会将取像请求放置在取像队列中，按顺序完成；而StartAcquire()

方法不会等待，直接取像，然后需要调用CompleteAcquire()方法获得图像。

# 六、 Sample Application

执行以下步骤在Visual Studio.NET中创建一个示例c#应用程序。此应用程序从相机获取图像并使用 Cognex 显示控件显示它。