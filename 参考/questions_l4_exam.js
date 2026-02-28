// L4真题补充题库 - 基于2025年12月21日考试题目

const questionsL4Exam = [
    // ==================== L4真题 - 填空题 ====================
    {
        id: 241,
        category: "visionpro-basic",
        type: "fill",
        question: "Framework中，我们配置标定时，常用的标定模式有______、______、______。",
        answer: "棋盘格标定、N点标定、手眼标定",
        explanation: "Framework中常用的标定模式包括：棋盘格标定(Checkerboard)、N点标定(NPointToNPoint)、手眼标定(HandEye)等。"
    },
    {
        id: 242,
        category: "visionpro-basic",
        type: "fill",
        question: "关于VisionPro空间树，\".\"表示______，\"#\"表示______，\"@\"表示______。",
        answer: "根空间(Root)、相对于当前工具的输入空间、相对于父级ToolBlock的输入空间",
        explanation: "\".\"表示根空间(Root Space)；\"#\"表示相对于当前工具的输入图像空间；\"@\"表示相对于父级ToolBlock的输入图像空间。"
    },
    {
        id: 243,
        category: "visionpro-tools",
        type: "fill",
        question: "请列举三个VisionPro中可以支持图像掩膜(Mask)的工具：______、______、______。",
        answer: "CogPMAlignTool、CogBlobTool、CogSearchMaxTool",
        explanation: "支持图像掩膜的工具包括：CogPMAlignTool(PatMax)、CogBlobTool、CogSearchMaxTool、CogPatInspectTool等。"
    },
    {
        id: 244,
        category: "visionpro-basic",
        type: "fill",
        question: "由于镜头的光学结构和成像特性，取像视野越______，选用的镜头焦距越______，畸变越明显。",
        answer: "大、短",
        explanation: "视野越大，需要的镜头焦距越短（广角），而短焦距镜头的畸变（特别是桶形畸变）越明显。"
    },
    {
        id: 245,
        category: "csharp-advanced",
        type: "fill",
        question: "在VisionPro脚本中，代码\"int count = blobTool.Results.GetBlobs().Count;\"的作用是______。",
        answer: "获取Blob工具检测到的斑点数量",
        explanation: "blobTool.Results.GetBlobs()返回所有检测到的Blob集合，.Count获取集合中元素的数量，即斑点总数。"
    },

    // ==================== L4真题 - 选择题 ====================
    {
        id: 246,
        category: "visionpro-tools",
        type: "single",
        question: "如果CogFindLineTool结果中RMS Error值越小，说明什么？",
        options: ["卡尺点与点距离越近", "卡尺点与点的距离越远", "卡尺点到线的距离越大", "卡尺点拟合的线越平整"],
        answer: 3,
        explanation: "RMS Error是均方根误差，表示各个卡尺采样点到拟合直线的距离的均方根。RMS Error越小，说明采样点越接近拟合的直线，即拟合的线越平整、精度越高。"
    },
    {
        id: 247,
        category: "csharp-basic",
        type: "single",
        question: "下面语句执行后y的值是多少？\n<pre>int x=0,y=0;\nwhile(x&lt;10)\n{\n    y+=(x+=2);\n}</pre>",
        options: ["30", "28", "10", "40"],
        answer: 0,
        explanation: "循环过程：x=2,y=2; x=4,y=6; x=6,y=12; x=8,y=20; x=10,y=30; x=12退出循环。所以y=2+4+6+8+10=30。"
    },
    {
        id: 248,
        category: "csharp-basic",
        type: "multiple",
        question: "在C#中，以下哪些属于引用类型？（多选）",
        options: ["数组类型", "委托类型", "接口类型", "类类型"],
        answer: [0, 1, 2, 3],
        explanation: "在C#中，数组类型、委托类型、接口类型、类类型都是引用类型。值类型包括：int、double、bool、char、struct、enum等。"
    },
    {
        id: 249,
        category: "visionpro-basic",
        type: "multiple",
        question: "景深和焦距、光圈、物距的关系是？（多选）",
        options: ["拍摄距离越大，景深越大", "焦距越短，景深越大", "光圈越小，景深越大", "焦距越长，景深越大"],
        answer: [0, 1, 2],
        explanation: "影响景深的因素：①拍摄距离(物距)越大，景深越大；②焦距越短，景深越大；③光圈越小(F值越大)，景深越大。焦距越长，景深越小。"
    },
    {
        id: 250,
        category: "csharp-basic",
        type: "single",
        question: "关于数组 double[,] tab=new double[2,3]; 那么下面叙述正确的是？",
        options: ["tab是一个数组维数不确定的数组，使用时可以任意调整", "tab是一个有两个元素的一维数组，它的元素初始值分别是2,3", "tab是一个二维数组，它的元素个数一共有6个", "tab是一个不规则数组，数组元素的个数可以变化"],
        answer: 2,
        explanation: "double[,] tab=new double[2,3] 声明了一个2行3列的二维数组，元素总数为2×3=6个。这是规则的矩形数组，不是交错数组。"
    },
    {
        id: 251,
        category: "csharp-advanced",
        type: "single",
        question: "在ToolBlock中有工具：CogFindLineTool1和CogCaliperTool1，在脚本中为了获取这两个工具对象，以下代码书写正确的是？",
        options: [
            "CogCaliperTool myTool_1 = mToolBlock.Tools[\"CogFindLineTool1\"] as CogFindLineTool;",
            "CogFindLineTool1 myTool_1 = mToolBlock.Tools[\"CogFindLineTool1\"] as CogFindLineTool;",
            "CogFindLineTool myTool_1 = mToolBlock.Tools[\"CogFindLineTool1\"] as CogFindLineTool;",
            "CogFindLineTool myTool_1 = mToolBlock.Tools[\"CogFindLineTool1\"] as CogFindLineTool1;"
        ],
        answer: 2,
        explanation: "获取工具对象时，类型必须与工具实际类型匹配。CogFindLineTool1是CogFindLineTool类型，变量声明和类型转换都要使用CogFindLineTool。"
    },
    {
        id: 252,
        category: "csharp-advanced",
        type: "multiple",
        question: "关于C#异常描述正确的是？（多选）",
        options: ["可以使用throws回避方法中的异常", "一个try模块只能有一个catch模块", "finally模块是异常处理所必须的", "一个try模块可能产生多个异常"],
        answer: [3],
        explanation: "C#中：①使用throw而非throws抛出异常；②一个try可以有多个catch捕获不同类型的异常；③finally是可选的，不是必须的；④一个try块中确实可能产生多个不同类型的异常。"
    },
    {
        id: 253,
        category: "visionpro-basic",
        type: "single",
        question: "使用VisionPro进行相机标定时，以下哪项最影响标定精度？",
        options: ["图像亮度", "标定板角点提取精度", "图像颜色", "图像文件格式"],
        answer: 1,
        explanation: "标定板角点提取精度是影响标定精度的最关键因素。角点提取越精确，建立的像素与物理坐标对应关系越准确。"
    },
    {
        id: 254,
        category: "visionpro-tools",
        type: "single",
        question: "在形态学处理中，如果一个矩形区域经过处理后变得更大（向外扩展），这是什么操作？（内核3×3）",
        options: ["开运算", "闭运算", "腐蚀", "膨胀"],
        answer: 3,
        explanation: "膨胀(Dilate)操作会使白色区域扩大。腐蚀(Erode)使白色区域缩小。开运算=先腐蚀后膨胀，闭运算=先膨胀后腐蚀。"
    },
    {
        id: 255,
        category: "visionpro-basic",
        type: "single",
        question: "相机CCD芯片长边尺寸为8.4mm，分辨率为2448×2048，若使用0.2倍的远心镜头，此时的像素精度是多少？",
        options: ["0.041mm/Pixel", "0.034mm/Pixel", "0.017mm/Pixel", "0.001mm/Pixel"],
        answer: 2,
        explanation: "像素尺寸 = 芯片长边/长边像素数 = 8.4mm/2448 ≈ 0.00343mm。使用0.2倍镜头时，像素精度 = 像素尺寸/放大倍率 = 0.00343/0.2 ≈ 0.017mm/Pixel。"
    },

    // ==================== L4真题 - 判断题 ====================
    {
        id: 256,
        category: "visionpro-basic",
        type: "judge",
        question: "VisionPro不支持线扫描相机的畸变校正。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。VisionPro支持线扫描相机的畸变校正，可以使用CogCalibCheckerboardTool等工具对线扫相机进行标定和畸变校正。"
    },
    {
        id: 257,
        category: "csharp-oop",
        type: "judge",
        question: "若方法的名字相同、参数相同，而方法的返回值类型不同，则可以实现方法的重载。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。方法重载要求方法名相同但参数不同（参数类型、个数或顺序不同）。仅返回值类型不同不能构成重载，会导致编译错误。"
    },
    {
        id: 258,
        category: "csharp-advanced",
        type: "judge",
        question: "在脚本中对CogToolBlock的Inputs和Outputs终端进行操作，一般要执行装箱拆箱操作。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。CogToolBlock的Inputs和Outputs终端存储的是object类型，获取或设置值类型数据时需要进行装箱(赋值时)和拆箱(取值时)操作。"
    },
    {
        id: 259,
        category: "csharp-oop",
        type: "judge",
        question: "由private修饰的成员，能通过实例化的对象直接在类的外部访问。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。private成员只能在当前类的内部访问，不能在类的外部访问，即使通过实例化的对象也不行。"
    },
    {
        id: 260,
        category: "visionpro-basic",
        type: "judge",
        question: "在最新版Framework(FW3.7.8.16)中，最多支持8个客户端同时与它通信。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。Cognex Framework支持多客户端连接，在FW3.7.8.16版本中最多支持8个客户端同时连接。"
    },

    // ==================== L4真题 - 简答题/编程题 ====================
    {
        id: 261,
        category: "csharp-basic",
        type: "essay",
        question: "使用C#中While循环语句计算1到100中的奇数和。（10分）",
        answer: `static void Main(string[] args)
{
    int sum = 0;
    int i = 1;
    while (i <= 100)
    {
        if (i % 2 != 0)
        {
            sum += i;
        }
        i++;
    }
    Console.WriteLine("1到100的奇数和为：" + sum);
    // 结果为2500
}`,
        keyPoints: [
            "正确使用while循环结构",
            "正确判断奇数（i%2!=0）",
            "正确累加求和",
            "循环条件正确（i<=100）"
        ],
        explanation: "使用while循环遍历1到100，通过取模运算判断奇数，累加求和。1到100的奇数和为2500。"
    },
    {
        id: 262,
        category: "visionpro-advanced",
        type: "essay",
        question: "自动标定后，视觉引导的目的坐标需要通过三点求一点，回答以下问题：\n① 请分别列举出这四个点，并简单说明每个点含义？\n② 写出三点求一点的公式；\n③ 标定已经获取了世界坐标系，为何要使用三点求一点？",
        answer: `① 四个点及其含义：
1. Mark点：产品上的定位特征点，用于确定产品在相机视野中的位置
2. Pick点：机器人实际抓取物料的位置
3. Place点：机器人将物料放置的目标位置
4. Target点：经过三点求一点计算后得到的实际放置坐标

② 三点求一点公式：
Target = Place + (Pick - Mark)
展开为：
Target.X = Place.X + (Pick.X - Mark.X)
Target.Y = Place.Y + (Pick.Y - Mark.Y)
Target.Angle = Place.Angle + (Pick.Angle - Mark.Angle)

③ 使用三点求一点的原因：
1. 补偿产品位置偏差：标定建立的是固定坐标系，但实际生产中产品位置会有偏差
2. 实时修正：Mark点是视觉实时检测的，能反映产品当前实际位置
3. 提高贴合精度：通过计算偏差并补偿，使最终放置位置更准确
4. 适应柔性生产：不同产品或同一产品不同批次的位置变化都能被补偿`,
        keyPoints: [
            "正确说明四个点的名称和含义",
            "公式：Target = Place + (Pick - Mark)",
            "解释为何需要三点求一点（位置补偿）"
        ],
        explanation: "三点求一点是视觉引导中的核心算法，通过Mark点检测产品实际位置，结合示教的Pick和Place点，计算出补偿后的目标坐标。"
    },
    {
        id: 263,
        category: "visionpro-advanced",
        type: "essay",
        question: "根据以下要求设计标定流程并写出简单协议(eg:SC,1,9)：\nCamera1/Camera2为固定相机；Camera1拍照出料平台，引导取料；Camera2拍照定位吸嘴上的物料；Camera3固定在Gantry上，用于定位被贴物料；客户需要对物料贴合后的Gap数据做相关性。",
        answer: `标定流程设计：

一、Camera1标定（出料平台相机）
协议：SC,1,1  （棋盘格标定Camera1）

二、Camera2标定（吸嘴上方相机）
协议：SC,2,1  （N点标定Camera2）

三、Camera3标定（Gantry上的相机）
协议：SC,3,1  （棋盘格标定Camera3）

四、手眼标定（Camera3与Gantry的关系）
协议：SC,3,9  （Camera3手眼标定）

五、相关性标定（Gap测量）
协议：SC,4,1  （相关性标定）

协议格式说明：
SC = Standard Calibration（标准标定）
第一个数字 = 相机编号
第二个数字 = 标定类型（1=棋盘格/N点，9=手眼标定等）`,
        keyPoints: [
            "分别说明三个相机的标定方法",
            "Camera3需要手眼标定（固定在Gantry上）",
            "协议格式正确"
        ],
        explanation: "多相机系统标定需要分别建立各相机与机器人坐标系的关系。Camera3固定在运动的Gantry上，需要进行手眼标定。"
    },

    // ==================== 更多补充题目 ====================
    {
        id: 264,
        category: "visionpro-tools",
        type: "single",
        question: "在VisionPro中，\"#\"空间和\"@\"空间的主要区别是什么？",
        options: ["没有区别", "\"#\"是相对于当前工具输入，\"@\"是相对于父级ToolBlock输入", "\"#\"是绝对坐标，\"@\"是相对坐标", "两者相反"],
        answer: 1,
        explanation: "\"#\"表示相对于当前工具的输入图像空间，\"@\"表示相对于父级ToolBlock的输入图像空间。"
    },
    {
        id: 265,
        category: "visionpro-basic",
        type: "single",
        question: "计算像素精度的公式是什么？",
        options: ["像素精度 = 芯片尺寸 × 分辨率", "像素精度 = 芯片尺寸 / 分辨率 / 放大倍率", "像素精度 = 分辨率 / 芯片尺寸", "像素精度 = 放大倍率 × 分辨率"],
        answer: 1,
        explanation: "像素精度 = (芯片尺寸/分辨率)/放大倍率。"
    },
    {
        id: 266,
        category: "visionpro-tools",
        type: "single",
        question: "CogFindLineTool中，哪个参数用于设置忽略偏离拟合直线较远的点？",
        options: ["NumCalipers", "ContrastThreshold", "NumToIgnore", "FilterHalfWidth"],
        answer: 2,
        explanation: "NumToIgnore参数设置拟合直线时忽略的点数，会自动忽略距离拟合直线最远的点，提高拟合精度。"
    },
    {
        id: 267,
        category: "visionpro-tools",
        type: "multiple",
        question: "以下哪些是形态学操作？（多选）",
        options: ["膨胀(Dilate)", "腐蚀(Erode)", "开运算(Open)", "闭运算(Close)", "高斯滤波(Gaussian)"],
        answer: [0, 1, 2, 3],
        explanation: "形态学操作包括：膨胀、腐蚀、开运算(先腐蚀后膨胀)、闭运算(先膨胀后腐蚀)。高斯滤波是图像滤波操作，不是形态学操作。"
    },
    {
        id: 268,
        category: "visionpro-basic",
        type: "single",
        question: "远心镜头的主要特点是什么？",
        options: ["视野大", "物体在不同距离下成像大小不变", "价格便宜", "景深小"],
        answer: 1,
        explanation: "远心镜头的主要特点是物体在不同工作距离下成像大小基本不变，适合精密测量。"
    },
    {
        id: 269,
        category: "visionpro-tools",
        type: "fill",
        question: "CogFindLineTool中，RMS Error表示______。",
        answer: "各采样点到拟合直线距离的均方根误差",
        explanation: "RMS Error是均方根误差，值越小说明拟合越好。"
    },
    {
        id: 270,
        category: "visionpro-basic",
        type: "fill",
        question: "在机器视觉中，FOV表示______。",
        answer: "视野(Field of View)",
        explanation: "FOV是视野的缩写，表示相机能够拍摄到的区域范围。"
    }
];

// 导出题库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questionsL4Exam;
}
