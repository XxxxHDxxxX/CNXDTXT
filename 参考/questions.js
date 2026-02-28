// 题库数据 - 扩展版
const questions = [
    // ==================== C# 基础 ====================
    {
        id: 1,
        category: "csharp-basic",
        type: "single",
        question: "在C#中，以下哪个是正确的单行注释方式？",
        options: ["/* 注释内容 */", "// 注释内容", "<!-- 注释内容 -->", "# 注释内容"],
        answer: 1,
        explanation: "C#中单行注释使用 // 符号。多行注释使用 /* */，文档注释使用 ///。"
    },
    {
        id: 2,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个数据类型可以存储小数？",
        options: ["int", "char", "double", "bool"],
        answer: 2,
        explanation: "double 是小数类型，可以存储小数也可以存储整数，小数点后面可以有15-16位。int只能存整数，char存字符，bool存布尔值。"
    },
    {
        id: 3,
        category: "csharp-basic",
        type: "single",
        question: "C#中用于存储金钱的数据类型是？",
        options: ["int", "double", "decimal", "float"],
        answer: 2,
        explanation: "decimal类型用来存储金钱，精度高。使用时需在末尾加上m或M，如：decimal money = 100.50m;"
    },
    {
        id: 4,
        category: "csharp-basic",
        type: "single",
        question: "以下代码的输出结果是什么？\n<pre>int a = 10;\nint b = 3;\nConsole.WriteLine(a / b);</pre>",
        options: ["3.333", "3", "3.33", "编译错误"],
        answer: 1,
        explanation: "两个int类型相除，结果仍然是int类型，小数部分会被截断。10/3=3，余数1被丢弃。"
    },
    {
        id: 5,
        category: "csharp-basic",
        type: "single",
        question: "以下关于变量命名规范，哪个符合Camel命名规范？",
        options: ["HighSchoolStudent", "highSchoolStudent", "high_school_student", "HIGHSCHOOLSTUDENT"],
        answer: 1,
        explanation: "Camel(骆驼)命名规范要求首单词的首字母小写，其余单词首字母大写。多用于给变量命名。"
    },
    {
        id: 6,
        category: "csharp-basic",
        type: "single",
        question: "在C#中，= 和 == 的区别是？",
        options: ["没有区别", "= 是赋值，== 是判断相等", "= 是判断相等，== 是赋值", "= 用于字符串，== 用于数字"],
        answer: 1,
        explanation: "= 是赋值运算符，用于给变量赋值；== 是关系运算符，用于判断两个值是否相等。"
    },
    {
        id: 7,
        category: "csharp-basic",
        type: "single",
        question: "以下代码的输出结果是？\n<pre>int num = 5;\nnum++;\nConsole.WriteLine(num);</pre>",
        options: ["4", "5", "6", "编译错误"],
        answer: 2,
        explanation: "num++ 是后自增运算符，会让num的值加1。初始值5，自增后变为6。"
    },
    {
        id: 8,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个是C#中的逻辑与运算符？",
        options: ["&", "&&", "||", "!"],
        answer: 1,
        explanation: "&& 是逻辑与运算符，表示两个条件都为true时结果才为true。|| 是逻辑或，! 是逻辑非。"
    },
    {
        id: 9,
        category: "csharp-basic",
        type: "single",
        question: "将字符串 \"123\" 转换为整数，以下哪种方式正确？",
        options: ["(int)\"123\"", "int.Parse(\"123\")", "\"123\".ToInt()", "(string)123"],
        answer: 1,
        explanation: "int.Parse() 或 Convert.ToInt32() 可以将字符串转换为整数。强制类型转换(int)只能用于兼容类型之间。"
    },
    {
        id: 10,
        category: "csharp-basic",
        type: "single",
        question: "以下代码的输出结果是？\n<pre>int a = 5;\nint b = ++a + a++;\nConsole.WriteLine(b);</pre>",
        options: ["10", "11", "12", "13"],
        answer: 2,
        explanation: "++a先自增a变为6，然后参与运算(6)；a++先参与运算(6)，再自增。所以 b = 6 + 6 = 12。"
    },
    {
        id: 11,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个转义符表示换行？",
        options: ["\\t", "\\n", "\\r", "\\b"],
        answer: 1,
        explanation: "\\n 表示换行。\\t 表示Tab空格，\\r 表示回车，\\b 表示退格。在Windows中，换行通常使用 \\r\\n。"
    },
    {
        id: 12,
        category: "csharp-basic",
        type: "single",
        question: "数组 int[] arr = new int[5]; 中元素的默认初始值是？",
        options: ["null", "0", "-1", "未定义"],
        answer: 1,
        explanation: "int数组的元素默认初始值为0，string数组默认为null，bool数组默认为false。"
    },
    {
        id: 13,
        category: "csharp-basic",
        type: "single",
        question: "以下关于for循环的说法，正确的是？",
        options: ["for循环至少执行一次", "for循环用于已知循环次数的情况", "for循环不能嵌套", "for循环没有条件判断"],
        answer: 1,
        explanation: "for循环用于处理已知循环次数的情况。语法：for(表达式1;表达式2;表达式3){循环体;}"
    },
    {
        id: 14,
        category: "csharp-basic",
        type: "single",
        question: "break 和 continue 的区别是？",
        options: ["没有区别", "break结束整个循环，continue结束本次循环", "continue结束整个循环，break结束本次循环", "都是结束整个循环"],
        answer: 1,
        explanation: "break 跳出整个循环；continue 结束本次循环，判断循环条件，如果成立则进入下一次循环。"
    },
    {
        id: 15,
        category: "csharp-basic",
        type: "single",
        question: "以下代码中，三元表达式的结果是？\n<pre>int a = 10, b = 20;\nint max = a > b ? a : b;</pre>",
        options: ["10", "20", "30", "编译错误"],
        answer: 1,
        explanation: "三元表达式语法：条件 ? 值1 : 值2。如果条件为true返回值1，否则返回值2。a(10) > b(20) 为false，所以返回b(20)。"
    },
    {
        id: 16,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个方法可以对数组进行升序排序？",
        options: ["Array.Sort()", "Array.Reverse()", "Array.Clear()", "Array.Copy()"],
        answer: 0,
        explanation: "Array.Sort() 对数组进行升序排序。Array.Reverse() 反转数组。如果想要降序排序，可以先Sort再Reverse。"
    },
    {
        id: 17,
        category: "csharp-basic",
        type: "single",
        question: "声明常量的关键字是？",
        options: ["static", "readonly", "const", "final"],
        answer: 2,
        explanation: "const 关键字用于声明常量。语法：const 类型 变量名 = 值; 常量一旦赋值就不能被重新赋值。"
    },
    {
        id: 18,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个不是值类型？",
        options: ["int", "double", "string", "bool"],
        answer: 2,
        explanation: "string是引用类型。值类型包括：int、double、bool、char、decimal、struct、enum。引用类型包括：string、数组、自定义类、集合、object。"
    },
    {
        id: 19,
        category: "csharp-basic",
        type: "single",
        question: "将值类型转换为引用类型的过程称为？",
        options: ["拆箱", "装箱", "强制转换", "隐式转换"],
        answer: 1,
        explanation: "装箱：将值类型转换为引用类型。拆箱：将引用类型转换为值类型。装箱和拆箱会影响性能。"
    },
    {
        id: 20,
        category: "csharp-basic",
        type: "single",
        question: "以下关于string的说法，正确的是？",
        options: ["string是值类型", "string可以被修改", "string具有不可变性", "string不能为null"],
        answer: 2,
        explanation: "string具有不可变性，当给字符串重新赋值时，老值不会被销毁，而是重新开辟空间存储新值。"
    },

    // ==================== 面向对象 ====================
    {
        id: 21,
        category: "csharp-oop",
        type: "single",
        question: "面向对象的三大特征是？",
        options: ["封装、继承、抽象", "封装、继承、多态", "抽象、接口、多态", "类、对象、方法"],
        answer: 1,
        explanation: "面向对象的三大特征是：封装、继承、多态。封装隐藏实现细节，继承实现代码复用，多态实现接口统一。"
    },
    {
        id: 22,
        category: "csharp-oop",
        type: "single",
        question: "在类中，用于保护字段的成员是？",
        options: ["方法", "属性", "构造函数", "析构函数"],
        answer: 1,
        explanation: "属性用于保护字段，对字段的赋值和取值进行限定。属性的本质是两个方法：get和set。"
    },
    {
        id: 23,
        category: "csharp-oop",
        type: "single",
        question: "构造函数的特点，以下说法错误的是？",
        options: ["没有返回值", "名称必须和类名相同", "可以有多个重载", "必须声明为static"],
        answer: 3,
        explanation: "构造函数特点：①没有返回值，连void也不能写；②名称必须和类名相同；③可以有多个重载。构造函数不能声明为static。"
    },
    {
        id: 24,
        category: "csharp-oop",
        type: "single",
        question: "new 关键字在创建对象时做了哪些事情？",
        options: ["只开辟空间", "只创建对象", "只调用构造函数", "开辟空间、创建对象、调用构造函数"],
        answer: 3,
        explanation: "new做了3件事：①在堆中开辟空间；②在开辟的空间中创建对象；③调用对象的构造函数进行初始化。"
    },
    {
        id: 25,
        category: "csharp-oop",
        type: "single",
        question: "this 关键字的作用是？",
        options: ["代表当前类", "代表当前类的对象", "代表父类", "代表子类"],
        answer: 1,
        explanation: "this关键字：①代表当前类的对象；②在类当中显示的调用本类的构造函数，使用 :this()。"
    },
    {
        id: 26,
        category: "csharp-oop",
        type: "single",
        question: "以下哪个访问修饰符表示只能在当前类内部访问？",
        options: ["public", "private", "protected", "internal"],
        answer: 1,
        explanation: "private：私有的，只能在当前类的内部访问。public：公开的。protected：受保护的，当前类及子类可访问。internal：同一程序集内可访问。"
    },
    {
        id: 27,
        category: "csharp-oop",
        type: "single",
        question: "继承的特性包括？",
        options: ["单根性和封装性", "单根性和传递性", "多继承和封装性", "多态性和传递性"],
        answer: 1,
        explanation: "继承的特性：①单根性：一个子类只能有一个父类；②传递性：如A继承B，B继承C，则A可以使用B和C的成员。"
    },
    {
        id: 28,
        category: "csharp-oop",
        type: "single",
        question: "子类调用父类构造函数的关键字是？",
        options: ["this", "base", "super", "parent"],
        answer: 1,
        explanation: "base关键字用于子类调用父类的构造函数或成员。语法：public ChildClass(参数) : base(参数) { }"
    },
    {
        id: 29,
        category: "csharp-oop",
        type: "single",
        question: "实现多态的方式不包括以下哪个？",
        options: ["虚方法", "抽象类", "接口", "枚举"],
        answer: 3,
        explanation: "实现多态的三种方式：①虚方法(virtual/override)；②抽象类(abstract)；③接口(interface)。枚举与多态无关。"
    },
    {
        id: 30,
        category: "csharp-oop",
        type: "single",
        question: "虚方法使用的关键字是？",
        options: ["virtual 和 abstract", "virtual 和 override", "abstract 和 override", "interface 和 override"],
        answer: 1,
        explanation: "虚方法：父类方法用virtual标记，子类重写时用override标记。当父类方法有实现且需要被实例化时使用虚方法。"
    },
    {
        id: 31,
        category: "csharp-oop",
        type: "single",
        question: "抽象类的特点，以下说法正确的是？",
        options: ["可以被实例化", "抽象方法可以有方法体", "子类必须重写所有抽象方法", "抽象方法可以是private"],
        answer: 2,
        explanation: "抽象类特点：①不能被实例化；②抽象方法不能有方法体；③子类必须重写所有抽象成员(除非子类也是抽象类)；④抽象成员不能是private。"
    },
    {
        id: 32,
        category: "csharp-oop",
        type: "single",
        question: "接口的特点，以下说法错误的是？",
        options: ["不能被实例化", "成员默认是public", "可以包含字段", "可以多继承"],
        answer: 2,
        explanation: "接口特点：①不能被实例化；②成员默认是public；③只能有方法、属性、索引器，不能有字段和构造函数；④接口之间可以多继承。"
    },
    {
        id: 33,
        category: "csharp-oop",
        type: "single",
        question: "以下哪个类不能被继承？",
        options: ["abstract类", "static类", "sealed类", "partial类"],
        answer: 2,
        explanation: "sealed(密封类)不能被继承。abstract类必须被继承，static类不能被实例化但概念不同，partial类是部分类可以被继承。"
    },
    {
        id: 34,
        category: "csharp-oop",
        type: "single",
        question: "里氏转换的规则是？",
        options: ["父类可以赋值给子类", "子类可以赋值给父类", "任意类型可以相互转换", "只有值类型可以转换"],
        answer: 1,
        explanation: "里氏转换：①子类可以赋值给父类；②如果父类中装的是子类对象，可以将父类强转为子类对象。"
    },
    {
        id: 35,
        category: "csharp-oop",
        type: "single",
        question: "is 和 as 关键字的区别是？",
        options: ["没有区别", "is返回bool，as返回对象或null", "as返回bool，is返回对象或null", "两者都返回bool"],
        answer: 1,
        explanation: "is：判断类型转换是否成功，返回true或false。as：尝试类型转换，成功返回对应对象，失败返回null。"
    },

    // ==================== C# 高级特性 ====================
    {
        id: 36,
        category: "csharp-advanced",
        type: "single",
        question: "out参数的作用是？",
        options: ["传入参数", "返回多个不同类型的值", "传递引用", "定义常量"],
        answer: 1,
        explanation: "out参数侧重于在一个方法中返回多个不同类型的值。out参数在方法内必须赋值。"
    },
    {
        id: 37,
        category: "csharp-advanced",
        type: "single",
        question: "ref参数的特点是？",
        options: ["方法外不需要赋值", "方法内不需要赋值", "方法外必须赋值", "只能用于值类型"],
        answer: 2,
        explanation: "ref参数：将变量带入方法中进行改变，改变后的值带出方法。ref参数要求方法外必须赋值，方法内可以不赋值。"
    },
    {
        id: 38,
        category: "csharp-advanced",
        type: "single",
        question: "ArrayList和List<T>的主要区别是？",
        options: ["功能不同", "ArrayList是泛型，List<T>不是", "List<T>类型安全，不需要装箱拆箱", "没有区别"],
        answer: 2,
        explanation: "List<T>是泛型集合，类型安全，不需要装箱拆箱。ArrayList可存储任意类型(object)，需要装箱拆箱，性能较低。"
    },
    {
        id: 39,
        category: "csharp-advanced",
        type: "single",
        question: "Hashtable和Dictionary<TKey,TValue>的主要区别是？",
        options: ["没有区别", "Dictionary是泛型，类型安全", "Hashtable是泛型", "Dictionary不支持键值对"],
        answer: 1,
        explanation: "Dictionary<TKey,TValue>是泛型字典集合，类型安全，性能更好。Hashtable存储object类型，需要装箱拆箱。"
    },
    {
        id: 40,
        category: "csharp-advanced",
        type: "single",
        question: "StringBuilder相比string的优势是？",
        options: ["更安全", "更简单", "不开辟新空间，直接修改，更高效", "支持更多方法"],
        answer: 2,
        explanation: "StringBuilder不开辟新空间，直接对字符串进行修改操作，在大量字符串操作时性能更高。string每次赋值都会开辟新空间。"
    },
    {
        id: 41,
        category: "csharp-advanced",
        type: "single",
        question: "序列化的作用是？",
        options: ["压缩数据", "加密数据", "将对象转换为二进制以便传输", "格式化代码"],
        answer: 2,
        explanation: "序列化：将对象转换为二进制。反序列化：将二进制转换为对象。作用：传输数据。需要在类前加[Serializable]标记。"
    },
    {
        id: 42,
        category: "csharp-advanced",
        type: "single",
        question: "FileStream和StreamReader的区别是？",
        options: ["没有区别", "FileStream操作字节，StreamReader操作字符", "StreamReader操作字节", "FileStream只能读不能写"],
        answer: 1,
        explanation: "FileStream操作的是字节(byte[])，适合任意文件。StreamReader/StreamWriter操作的是字符，适合文本文件，更方便。"
    },
    {
        id: 43,
        category: "csharp-advanced",
        type: "single",
        question: "using语句块的作用是？",
        options: ["引用命名空间", "定义变量作用域", "自动释放资源", "异常处理"],
        answer: 2,
        explanation: "using语句块可以自动释放实现了IDisposable接口的对象资源，如文件流、数据库连接等，无需手动调用Close()和Dispose()。"
    },
    {
        id: 44,
        category: "csharp-advanced",
        type: "single",
        question: "partial关键字的作用是？",
        options: ["定义部分方法", "定义部分类，可将一个类分在多个文件中", "定义私有成员", "定义静态成员"],
        answer: 1,
        explanation: "partial定义部分类，可以将一个类的定义分散在多个文件中。多个部分类的成员可以互相访问，最终会合并为一个类。"
    },
    {
        id: 45,
        category: "csharp-advanced",
        type: "single",
        question: "以下哪个方法可以将字符串分割成数组？",
        options: ["Substring()", "Split()", "Replace()", "Trim()"],
        answer: 1,
        explanation: "Split()方法分割字符串，返回字符串数组。Substring()截取字符串，Replace()替换，Trim()去除两端空格。"
    },

    // ==================== VisionPro 基础 ====================
    {
        id: 46,
        category: "visionpro-basic",
        type: "single",
        question: "VisionPro是哪家公司的机器视觉软件？",
        options: ["Keyence", "Cognex", "Omron", "Basler"],
        answer: 1,
        explanation: "VisionPro是康耐视(Cognex)公司的机器视觉软件平台。"
    },
    {
        id: 47,
        category: "visionpro-basic",
        type: "single",
        question: "VisionPro项目文件的扩展名是？",
        options: [".vpp", ".idb", ".bmp", ".xml"],
        answer: 0,
        explanation: ".vpp是VisionPro项目文件的扩展名。.idb是图像数据库文件，.bmp是位图图像文件。"
    },
    {
        id: 48,
        category: "visionpro-basic",
        type: "single",
        question: "QuickBuild是VisionPro的什么功能？",
        options: ["代码编辑器", "可视化快速开发工具", "图像采集工具", "调试工具"],
        answer: 1,
        explanation: "QuickBuild是VisionPro的可视化快速开发工具，可以通过拖拽方式快速搭建视觉检测项目，无需编写代码。"
    },
    {
        id: 49,
        category: "visionpro-basic",
        type: "single",
        question: "CogToolBlock的作用是？",
        options: ["采集图像", "封装多个工具，形成可复用的工具组", "显示图像", "保存图像"],
        answer: 1,
        explanation: "CogToolBlock可以封装多个视觉工具，形成一个可复用的工具组，便于管理和复用复杂的视觉处理流程。"
    },
    {
        id: 50,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro中，用于图像采集的工具是？",
        options: ["CogBlobTool", "CogAcqFifoTool", "CogPMAlignTool", "CogFixtureTool"],
        answer: 1,
        explanation: "CogAcqFifoTool是VisionPro中用于从相机采集图像的工具。"
    },
    {
        id: 51,
        category: "visionpro-basic",
        type: "single",
        question: "IDB文件在VisionPro中的作用是？",
        options: ["存储程序代码", "存储图像数据库，用于离线测试", "存储工具配置", "存储日志"],
        answer: 1,
        explanation: ".idb(Image Database)文件是VisionPro的图像数据库文件，可以存储多张测试图片，用于离线开发和测试。"
    },
    {
        id: 52,
        category: "visionpro-basic",
        type: "single",
        question: "VisionPro中Fixture的作用是？",
        options: ["图像滤波", "建立坐标系，用于定位补偿", "边缘检测", "颜色识别"],
        answer: 1,
        explanation: "CogFixtureTool用于建立坐标系统，实现定位补偿。可以将检测结果相对于某个固定坐标系表示，消除位置偏差的影响。"
    },
    {
        id: 53,
        category: "visionpro-basic",
        type: "single",
        question: "VisionPro脚本使用的编程语言是？",
        options: ["C++", "Python", "C#/VB.NET", "Java"],
        answer: 2,
        explanation: "VisionPro脚本支持C#和VB.NET编程语言，可以在QuickBuild中编写脚本实现自定义功能。"
    },
    {
        id: 54,
        category: "visionpro-basic",
        type: "single",
        question: "CogDisplay控件的作用是？",
        options: ["采集图像", "处理图像", "显示图像和图形结果", "保存图像"],
        answer: 2,
        explanation: "CogDisplay是VisionPro中用于显示图像和图形结果的控件，可以显示处理后的图像以及叠加的图形标注。"
    },
    {
        id: 55,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro中，什么决定了检测的感兴趣区域？",
        options: ["InputImage", "Region", "Pose", "Score"],
        answer: 1,
        explanation: "Region(区域)定义了视觉工具的检测范围，即感兴趣区域(ROI)。合理设置Region可以提高检测速度和准确性。"
    },

    // ==================== VisionPro 工具 ====================
    {
        id: 56,
        category: "visionpro-tools",
        type: "single",
        question: "CogPMAlignTool的主要功能是？",
        options: ["斑点检测", "模板匹配定位", "边缘检测", "颜色识别"],
        answer: 1,
        explanation: "CogPMAlignTool(PatMax)是VisionPro中最强大的模板匹配定位工具，可以实现旋转、缩放不变的高精度定位。"
    },
    {
        id: 57,
        category: "visionpro-tools",
        type: "single",
        question: "CogBlobTool的主要功能是？",
        options: ["模板匹配", "斑点分析和检测", "卡尺测量", "条码识别"],
        answer: 1,
        explanation: "CogBlobTool用于斑点(Blob)分析，可以检测、计数、测量图像中的连通区域，常用于缺陷检测、物体计数等。"
    },
    {
        id: 58,
        category: "visionpro-tools",
        type: "single",
        question: "CogCaliperTool的主要功能是？",
        options: ["颜色检测", "边缘查找和测量", "模板匹配", "OCR识别"],
        answer: 1,
        explanation: "CogCaliperTool(卡尺工具)用于在指定方向上查找边缘，可以测量距离、宽度等尺寸。"
    },
    {
        id: 59,
        category: "visionpro-tools",
        type: "single",
        question: "CogFindLineTool的作用是？",
        options: ["画直线", "查找图像中的直线边缘", "连接两点", "计算斜率"],
        answer: 1,
        explanation: "CogFindLineTool用于在图像中查找直线边缘，通过多个卡尺采样点拟合出最佳直线。"
    },
    {
        id: 60,
        category: "visionpro-tools",
        type: "single",
        question: "CogFindCircleTool的作用是？",
        options: ["画圆", "查找图像中的圆形边缘", "计算面积", "颜色识别"],
        answer: 1,
        explanation: "CogFindCircleTool用于查找图像中的圆形边缘，可以获取圆心坐标和半径。"
    },
    {
        id: 61,
        category: "visionpro-tools",
        type: "single",
        question: "CogIDTool的主要功能是？",
        options: ["模板匹配", "测量尺寸", "读取一维码和二维码", "颜色识别"],
        answer: 2,
        explanation: "CogIDTool用于读取一维码(条形码)和二维码(DataMatrix、QR码等)。"
    },
    {
        id: 62,
        category: "visionpro-tools",
        type: "single",
        question: "CogOCRMaxTool的作用是？",
        options: ["图像压缩", "光学字符识别(OCR)", "边缘检测", "颜色转换"],
        answer: 1,
        explanation: "CogOCRMaxTool用于光学字符识别(OCR)，可以识别图像中的文字和数字。"
    },
    {
        id: 63,
        category: "visionpro-tools",
        type: "single",
        question: "CogCalibCheckerboardTool的作用是？",
        options: ["颜色检测", "使用棋盘格进行标定校准", "模板匹配", "边缘检测"],
        answer: 1,
        explanation: "CogCalibCheckerboardTool使用棋盘格图案进行相机标定，可以校正镜头畸变，建立像素与实际尺寸的关系。"
    },
    {
        id: 64,
        category: "visionpro-tools",
        type: "single",
        question: "CogCalibNPointToNPointTool的作用是？",
        options: ["颜色检测", "N点对N点标定，建立坐标转换", "模板匹配", "图像滤波"],
        answer: 1,
        explanation: "CogCalibNPointToNPointTool通过匹配N组对应点，建立图像坐标与实际坐标之间的转换关系。"
    },
    {
        id: 65,
        category: "visionpro-tools",
        type: "single",
        question: "CogImageFileTool的作用是？",
        options: ["采集图像", "从文件加载/保存图像", "显示图像", "处理图像"],
        answer: 1,
        explanation: "CogImageFileTool用于从文件加载图像或将图像保存到文件，支持多种图像格式。"
    },
    {
        id: 66,
        category: "visionpro-tools",
        type: "single",
        question: "CogHistogramTool的作用是？",
        options: ["边缘检测", "分析图像的灰度直方图", "颜色识别", "模板匹配"],
        answer: 1,
        explanation: "CogHistogramTool用于分析图像的灰度直方图，可以获取亮度分布、平均灰度等统计信息。"
    },
    {
        id: 67,
        category: "visionpro-tools",
        type: "single",
        question: "CogCopyRegionTool的作用是？",
        options: ["复制文件", "复制图像的指定区域", "复制工具", "复制项目"],
        answer: 1,
        explanation: "CogCopyRegionTool用于复制图像的指定区域，可以提取感兴趣区域进行后续处理。"
    },
    {
        id: 68,
        category: "visionpro-tools",
        type: "single",
        question: "CogImageConvertTool的作用是？",
        options: ["压缩图像", "转换图像格式(如彩色转灰度)", "旋转图像", "缩放图像"],
        answer: 1,
        explanation: "CogImageConvertTool用于转换图像格式，如将24位彩色图转换为8位灰度图。"
    },
    {
        id: 69,
        category: "visionpro-tools",
        type: "single",
        question: "CogAffineTransformTool的作用是？",
        options: ["颜色转换", "图像仿射变换(旋转、缩放、平移)", "边缘检测", "模板匹配"],
        answer: 1,
        explanation: "CogAffineTransformTool用于对图像进行仿射变换，包括旋转、缩放、平移等操作。"
    },
    {
        id: 70,
        category: "visionpro-tools",
        type: "single",
        question: "在CogBlobTool中，Polarity参数的作用是？",
        options: ["设置颜色", "设置查找亮斑点还是暗斑点", "设置大小", "设置位置"],
        answer: 1,
        explanation: "Polarity(极性)设置斑点的类型：LightBlobsOnDarkBackground(暗背景上的亮斑点)或DarkBlobsOnLightBackground(亮背景上的暗斑点)。"
    },

    // ==================== 更多C#基础题 ====================
    {
        id: 71,
        category: "csharp-basic",
        type: "single",
        question: "以下代码输出什么？\n<pre>string s = \"Hello\";\ns.ToUpper();\nConsole.WriteLine(s);</pre>",
        options: ["Hello", "HELLO", "hello", "编译错误"],
        answer: 0,
        explanation: "string具有不可变性，ToUpper()返回一个新字符串但不会修改原字符串。需要 s = s.ToUpper(); 才能改变s的值。"
    },
    {
        id: 72,
        category: "csharp-basic",
        type: "single",
        question: "enum枚举类型默认的底层类型是？",
        options: ["string", "int", "double", "object"],
        answer: 1,
        explanation: "枚举类型默认与int类型兼容，可以通过强制类型转换互相转换。枚举值默认从0开始递增。"
    },
    {
        id: 73,
        category: "csharp-basic",
        type: "single",
        question: "struct(结构)和class(类)的主要区别是？",
        options: ["没有区别", "struct是值类型，class是引用类型", "struct是引用类型，class是值类型", "struct不能有方法"],
        answer: 1,
        explanation: "struct是值类型，存储在栈中；class是引用类型，存储在堆中。struct适合存储小型数据结构。"
    },
    {
        id: 74,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个方法可以判断字符串是否为空或null？",
        options: ["string.IsEmpty()", "string.IsNullOrEmpty()", "string.IsNull()", "string.HasValue()"],
        answer: 1,
        explanation: "string.IsNullOrEmpty(str) 判断字符串是否为null或空字符串(\"\")，返回bool值。"
    },
    {
        id: 75,
        category: "csharp-basic",
        type: "single",
        question: "IndexOf方法在找不到指定内容时返回什么？",
        options: ["0", "-1", "null", "抛出异常"],
        answer: 1,
        explanation: "IndexOf返回指定内容第一次出现的位置索引，如果找不到则返回-1。LastIndexOf返回最后一次出现的位置。"
    },

    // ==================== 更多面向对象题 ====================
    {
        id: 76,
        category: "csharp-oop",
        type: "single",
        question: "静态成员和实例成员的调用方式区别是？",
        options: ["没有区别", "静态用类名调用，实例用对象名调用", "静态用对象名调用，实例用类名调用", "都用类名调用"],
        answer: 1,
        explanation: "静态成员使用 类名.成员名 调用；实例成员需要先创建对象，使用 对象名.成员名 调用。"
    },
    {
        id: 77,
        category: "csharp-oop",
        type: "single",
        question: "所有类的基类是？",
        options: ["Base", "Root", "Object", "Class"],
        answer: 2,
        explanation: "object是所有类的基类(最顶层父类)，所有类都直接或间接继承自object类。"
    },
    {
        id: 78,
        category: "csharp-oop",
        type: "single",
        question: "析构函数的特点是？",
        options: ["可以被显式调用", "程序结束时自动执行，用于释放资源", "可以有参数", "可以有返回值"],
        answer: 1,
        explanation: "析构函数在对象被垃圾回收时自动执行，用于释放非托管资源。语法：~类名() { }，不能被显式调用，没有参数和返回值。"
    },
    {
        id: 79,
        category: "csharp-oop",
        type: "single",
        question: "virtual和abstract的区别是？",
        options: ["没有区别", "virtual方法有实现，abstract方法没有实现", "abstract方法有实现，virtual方法没有实现", "都没有实现"],
        answer: 1,
        explanation: "virtual(虚方法)必须有方法体实现，子类可选择重写。abstract(抽象方法)不能有方法体，子类必须重写。"
    },
    {
        id: 80,
        category: "csharp-oop",
        type: "single",
        question: "一个类可以继承多少个接口？",
        options: ["0个", "1个", "最多3个", "多个"],
        answer: 3,
        explanation: "一个类只能继承一个父类(单继承)，但可以实现多个接口。语法：class MyClass : ParentClass, IInterface1, IInterface2"
    },

    // ==================== 更多VisionPro工具题 ====================
    {
        id: 81,
        category: "visionpro-tools",
        type: "single",
        question: "CogPMAlignTool中Score参数表示什么？",
        options: ["位置坐标", "匹配得分/相似度", "旋转角度", "缩放比例"],
        answer: 1,
        explanation: "Score是匹配得分，表示找到的目标与模板的相似程度，范围0-1，值越大越相似。通常设置一个阈值来判断是否匹配成功。"
    },
    {
        id: 82,
        category: "visionpro-tools",
        type: "single",
        question: "在CogBlobTool中，Area参数表示什么？",
        options: ["周长", "面积(像素数)", "圆度", "位置"],
        answer: 1,
        explanation: "Area是斑点的面积，以像素为单位。可以通过设置面积范围来过滤不需要的斑点。"
    },
    {
        id: 83,
        category: "visionpro-tools",
        type: "single",
        question: "使用CogCaliperTool测量两边缘间距时，Edge0和Edge1分别代表什么？",
        options: ["第一条边缘和第二条边缘", "起点和终点", "宽度和高度", "X坐标和Y坐标"],
        answer: 0,
        explanation: "Edge0是搜索方向上找到的第一条边缘，Edge1是第二条边缘。Width = Edge1位置 - Edge0位置，表示两边缘间距。"
    },
    {
        id: 84,
        category: "visionpro-tools",
        type: "single",
        question: "CogFindLineTool中NumCalipers参数的作用是？",
        options: ["设置线宽", "设置查找直线时使用的卡尺采样点数量", "设置颜色", "设置长度"],
        answer: 1,
        explanation: "NumCalipers设置沿搜索区域分布的卡尺采样点数量，更多的采样点可以提高直线拟合精度，但会增加处理时间。"
    },
    {
        id: 85,
        category: "visionpro-tools",
        type: "single",
        question: "CogTransform2DLinear用于什么？",
        options: ["颜色转换", "存储和操作2D坐标变换(平移、旋转、缩放)", "图像滤波", "边缘检测"],
        answer: 1,
        explanation: "CogTransform2DLinear用于存储和操作2D线性坐标变换，包括平移(TranslationX/Y)、旋转(Rotation)、缩放(Scaling)等。"
    },

    // ==================== 综合应用题 ====================
    {
        id: 86,
        category: "csharp-advanced",
        type: "single",
        question: "在VisionPro脚本中，如何获取PMAlign工具的匹配结果？",
        options: ["pmAlignTool.Result", "pmAlignTool.Results", "pmAlignTool.OutputImage", "pmAlignTool.Score"],
        answer: 1,
        explanation: "CogPMAlignTool的匹配结果存储在Results属性中，是一个结果集合。可以通过Results[0]获取第一个匹配结果。"
    },
    {
        id: 87,
        category: "csharp-advanced",
        type: "single",
        question: "什么是方法重载(Overload)？",
        options: ["方法名和参数都相同", "方法名相同但参数不同", "方法名不同但参数相同", "继承父类的方法"],
        answer: 1,
        explanation: "方法重载：方法名称相同，但参数不同(参数类型、个数或顺序不同)。与返回值类型无关。"
    },
    {
        id: 88,
        category: "csharp-advanced",
        type: "single",
        question: "什么是方法重写(Override)？",
        options: ["在同一类中定义同名方法", "子类重新实现父类的虚方法或抽象方法", "定义静态方法", "定义私有方法"],
        answer: 1,
        explanation: "方法重写：子类使用override关键字重新实现父类的virtual或abstract方法，实现多态。"
    },
    {
        id: 89,
        category: "visionpro-tools",
        type: "single",
        question: "在VisionPro中，如何让检测结果跟随产品位置变化？",
        options: ["使用CogBlobTool", "使用CogFixtureTool建立跟随坐标系", "使用CogHistogramTool", "使用CogImageFileTool"],
        answer: 1,
        explanation: "CogFixtureTool可以根据定位结果建立动态坐标系，后续工具的检测区域会跟随这个坐标系移动，实现位置补偿。"
    },
    {
        id: 90,
        category: "visionpro-basic",
        type: "single",
        question: "VisionPro中的Job是什么概念？",
        options: ["一张图片", "一个视觉检测任务/作业", "一个工具", "一个脚本"],
        answer: 1,
        explanation: "Job是VisionPro中的作业/任务，包含图像源、视觉工具和处理逻辑。一个Job完成一个完整的视觉检测任务。"
    },

    // ==================== 更多综合题 ====================
    {
        id: 91,
        category: "csharp-basic",
        type: "single",
        question: "以下代码的输出是？\n<pre>int[] arr = {1, 2, 3};\nConsole.WriteLine(arr.Length);</pre>",
        options: ["1", "2", "3", "编译错误"],
        answer: 2,
        explanation: "数组的Length属性返回数组中元素的个数。{1, 2, 3}包含3个元素，所以输出3。"
    },
    {
        id: 92,
        category: "csharp-basic",
        type: "single",
        question: "Random类用于什么？",
        options: ["排序", "生成随机数", "格式化字符串", "类型转换"],
        answer: 1,
        explanation: "Random类用于生成随机数。使用方法：Random r = new Random(); int num = r.Next(1, 11); 生成1-10的随机整数。"
    },
    {
        id: 93,
        category: "csharp-oop",
        type: "single",
        question: "protected访问修饰符的访问范围是？",
        options: ["只在当前类内部", "当前类内部和子类中", "整个项目", "任何地方"],
        answer: 1,
        explanation: "protected：受保护的，可在当前类的内部以及该类的子类中访问，子类可以在其他项目中。"
    },
    {
        id: 94,
        category: "csharp-advanced",
        type: "single",
        question: "Path.GetFileName()方法的作用是？",
        options: ["获取文件大小", "获取路径中的文件名", "创建文件", "删除文件"],
        answer: 1,
        explanation: "Path.GetFileName(path)获取路径中的文件名(包含扩展名)。Path.GetFileNameWithoutExtension()获取不含扩展名的文件名。"
    },
    {
        id: 95,
        category: "csharp-advanced",
        type: "single",
        question: "File.Exists()方法的作用是？",
        options: ["创建文件", "删除文件", "判断文件是否存在", "复制文件"],
        answer: 2,
        explanation: "File.Exists(path)判断指定路径的文件是否存在，返回bool值。存在返回true，不存在返回false。"
    },
    {
        id: 96,
        category: "visionpro-tools",
        type: "single",
        question: "CogBlobTool的ConnectivityMode参数用于什么？",
        options: ["设置颜色", "设置连通性(4连通或8连通)", "设置大小", "设置位置"],
        answer: 1,
        explanation: "ConnectivityMode设置斑点的连通性：GreyScale4(4连通)或GreyScale8(8连通)。8连通会将对角相邻的像素也视为连通。"
    },
    {
        id: 97,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro中，什么是训练(Train)？",
        options: ["运行程序", "学习模板图像的特征", "采集图像", "保存结果"],
        answer: 1,
        explanation: "训练(Train)是让视觉工具学习模板图像的特征，如PatMax工具训练模板、Blob工具设置阈值等。训练后才能进行运行(Run)检测。"
    },
    {
        id: 98,
        category: "visionpro-tools",
        type: "single",
        question: "CogPMAlignTool的AcceptThreshold参数作用是？",
        options: ["设置搜索区域", "设置匹配得分的接受阈值", "设置旋转角度", "设置缩放范围"],
        answer: 1,
        explanation: "AcceptThreshold设置匹配得分的接受阈值，只有Score >= AcceptThreshold的结果才会被接受。通常设为0.5-0.9之间。"
    },
    {
        id: 99,
        category: "csharp-advanced",
        type: "single",
        question: "try-catch-finally语句块中，finally的特点是？",
        options: ["只在异常时执行", "只在正常时执行", "无论是否异常都会执行", "从不执行"],
        answer: 2,
        explanation: "finally块中的代码无论是否发生异常都会执行，通常用于释放资源、关闭连接等清理操作。"
    },
    {
        id: 100,
        category: "visionpro-basic",
        type: "single",
        question: "在机器视觉中，OK/NG判定通常基于什么？",
        options: ["图像大小", "检测工具的结果与设定的判定条件比较", "图像颜色", "文件名"],
        answer: 1,
        explanation: "OK/NG判定基于检测结果与预设条件的比较，如面积范围、位置偏差、匹配得分等。满足条件为OK(良品)，否则为NG(不良品)。"
    },

    // ==================== 判断题 ====================
    {
        id: 101,
        category: "csharp-basic",
        type: "judge",
        question: "C#中，string是值类型。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。string是引用类型，不是值类型。值类型包括int、double、bool、char、struct、enum等。"
    },
    {
        id: 102,
        category: "csharp-basic",
        type: "judge",
        question: "在C#中，数组的索引从0开始。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。C#中数组的索引从0开始，最后一个元素的索引是Length-1。"
    },
    {
        id: 103,
        category: "csharp-basic",
        type: "judge",
        question: "const声明的常量可以在运行时修改其值。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。const声明的常量在编译时就确定了值，运行时不能修改。"
    },
    {
        id: 104,
        category: "csharp-oop",
        type: "judge",
        question: "一个类可以继承多个父类。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。C#中类是单继承的，一个类只能有一个直接父类。但可以实现多个接口。"
    },
    {
        id: 105,
        category: "csharp-oop",
        type: "judge",
        question: "抽象类可以被实例化。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。抽象类不能被实例化，只能被继承。需要通过子类来创建对象。"
    },
    {
        id: 106,
        category: "csharp-oop",
        type: "judge",
        question: "接口中可以包含字段。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。接口中只能包含方法、属性、索引器和事件，不能包含字段和构造函数。"
    },
    {
        id: 107,
        category: "csharp-oop",
        type: "judge",
        question: "sealed类可以被其他类继承。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。sealed(密封类)不能被继承。使用sealed关键字可以防止类被继承。"
    },
    {
        id: 108,
        category: "csharp-advanced",
        type: "judge",
        question: "StringBuilder比string在频繁字符串操作时性能更好。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。StringBuilder不会像string那样每次操作都创建新对象，在频繁字符串操作时性能更好。"
    },
    {
        id: 109,
        category: "visionpro-basic",
        type: "judge",
        question: "VisionPro中，.vpp文件是图像数据库文件。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。.vpp是VisionPro项目文件，.idb才是图像数据库文件。"
    },
    {
        id: 110,
        category: "visionpro-basic",
        type: "judge",
        question: "CogFixtureTool用于建立坐标系统。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。CogFixtureTool用于建立坐标系统，实现定位补偿，让后续检测跟随产品位置变化。"
    },
    {
        id: 111,
        category: "visionpro-tools",
        type: "judge",
        question: "CogPMAlignTool的Score值范围是0-100。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。Score值范围是0-1，表示匹配相似度。1表示完全匹配，0表示完全不匹配。"
    },
    {
        id: 112,
        category: "visionpro-tools",
        type: "judge",
        question: "CogBlobTool可以用于检测和计数图像中的连通区域。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。CogBlobTool用于斑点分析，可以检测、计数、测量图像中的连通区域(Blob)。"
    },
    {
        id: 113,
        category: "csharp-basic",
        type: "judge",
        question: "在C#中，==用于赋值，=用于比较。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。=是赋值运算符，==是比较运算符。这是相反的。"
    },
    {
        id: 114,
        category: "csharp-oop",
        type: "judge",
        question: "构造函数可以有返回值。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。构造函数没有返回值，连void也不能写。构造函数的名称必须与类名相同。"
    },
    {
        id: 115,
        category: "csharp-advanced",
        type: "judge",
        question: "List<T>是泛型集合，不需要装箱拆箱操作。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。List<T>是泛型集合，类型安全，不需要装箱拆箱。而ArrayList需要装箱拆箱。"
    },
    {
        id: 116,
        category: "visionpro-basic",
        type: "judge",
        question: "VisionPro脚本只支持VB.NET语言。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。VisionPro脚本支持C#和VB.NET两种语言。"
    },
    {
        id: 117,
        category: "visionpro-tools",
        type: "judge",
        question: "CogCaliperTool用于查找边缘和测量距离。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。CogCaliperTool(卡尺工具)用于在指定方向上查找边缘，可以测量边缘间的距离。"
    },
    {
        id: 118,
        category: "csharp-basic",
        type: "judge",
        question: "break语句只能用于循环中。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。break语句可以用于循环和switch语句中。在循环中跳出循环，在switch中跳出case。"
    },
    {
        id: 119,
        category: "csharp-oop",
        type: "judge",
        question: "private成员可以在子类中直接访问。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。private成员只能在当前类内部访问，子类不能直接访问。子类要访问需要使用protected或public。"
    },
    {
        id: 120,
        category: "visionpro-basic",
        type: "judge",
        question: "标定的目的是建立像素坐标与物理坐标的对应关系。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。相机标定的主要目的是建立像素坐标与实际物理坐标之间的对应关系，实现精确测量。"
    },

    // ==================== 多选题 ====================
    {
        id: 121,
        category: "csharp-basic",
        type: "multiple",
        question: "以下哪些是C#中的值类型？（多选）",
        options: ["int", "string", "double", "bool", "class"],
        answer: [0, 2, 3],
        explanation: "值类型包括：int、double、bool、char、decimal、struct、enum。string和class是引用类型。"
    },
    {
        id: 122,
        category: "csharp-basic",
        type: "multiple",
        question: "以下哪些是C#中的引用类型？（多选）",
        options: ["string", "int", "数组", "自定义类", "bool"],
        answer: [0, 2, 3],
        explanation: "引用类型包括：string、数组、自定义类、集合、object、接口等。int和bool是值类型。"
    },
    {
        id: 123,
        category: "csharp-oop",
        type: "multiple",
        question: "实现多态的方式包括哪些？（多选）",
        options: ["虚方法", "抽象类", "接口", "枚举", "结构"],
        answer: [0, 1, 2],
        explanation: "实现多态的三种方式：虚方法(virtual/override)、抽象类(abstract)、接口(interface)。枚举和结构与多态无关。"
    },
    {
        id: 124,
        category: "csharp-oop",
        type: "multiple",
        question: "以下哪些是C#中的访问修饰符？（多选）",
        options: ["public", "private", "protected", "static", "internal"],
        answer: [0, 1, 2, 4],
        explanation: "访问修饰符包括：public、private、protected、internal、protected internal。static是静态修饰符，不是访问修饰符。"
    },
    {
        id: 125,
        category: "csharp-advanced",
        type: "multiple",
        question: "以下哪些集合类是泛型集合？（多选）",
        options: ["List<T>", "ArrayList", "Dictionary<TKey,TValue>", "Hashtable"],
        answer: [0, 2],
        explanation: "List<T>和Dictionary<TKey,TValue>是泛型集合。ArrayList和Hashtable是非泛型集合。"
    },
    {
        id: 126,
        category: "visionpro-tools",
        type: "multiple",
        question: "以下哪些VisionPro工具可以用于定位？（多选）",
        options: ["CogPMAlignTool", "CogBlobTool", "CogSearchMaxTool", "CogHistogramTool"],
        answer: [0, 1, 2],
        explanation: "CogPMAlignTool(PatMax)、CogBlobTool(通过Blob质心定位)、CogSearchMaxTool都可以用于定位。CogHistogramTool用于分析直方图。"
    },
    {
        id: 127,
        category: "visionpro-tools",
        type: "multiple",
        question: "以下哪些VisionPro工具可以用于测量？（多选）",
        options: ["CogCaliperTool", "CogFindLineTool", "CogFindCircleTool", "CogImageFileTool"],
        answer: [0, 1, 2],
        explanation: "CogCaliperTool测量边缘间距，CogFindLineTool测量直线，CogFindCircleTool测量圆。CogImageFileTool用于加载/保存图像。"
    },
    {
        id: 128,
        category: "csharp-basic",
        type: "multiple",
        question: "以下哪些是循环语句？（多选）",
        options: ["for", "while", "do-while", "foreach", "if"],
        answer: [0, 1, 2, 3],
        explanation: "循环语句包括：for、while、do-while、foreach。if是条件语句，不是循环语句。"
    },
    {
        id: 129,
        category: "csharp-oop",
        type: "multiple",
        question: "关于抽象类，以下说法正确的是？（多选）",
        options: ["不能被实例化", "抽象方法没有方法体", "可以包含非抽象成员", "子类必须重写所有抽象成员"],
        answer: [0, 1, 2, 3],
        explanation: "抽象类的特点：不能被实例化、抽象方法没有方法体、可以包含非抽象成员、子类必须重写所有抽象成员(除非子类也是抽象类)。"
    },
    {
        id: 130,
        category: "visionpro-basic",
        type: "multiple",
        question: "VisionPro中常用的文件类型包括？（多选）",
        options: [".vpp", ".idb", ".bmp", ".exe"],
        answer: [0, 1, 2],
        explanation: ".vpp是项目文件，.idb是图像数据库文件，.bmp是图像文件。.exe是可执行程序，不是VisionPro特有的文件类型。"
    },

    // ==================== 填空题 ====================
    {
        id: 131,
        category: "csharp-basic",
        type: "fill",
        question: "C#中用于声明常量的关键字是______。",
        answer: "const",
        explanation: "const关键字用于声明常量，常量一旦赋值就不能被修改。"
    },
    {
        id: 132,
        category: "csharp-basic",
        type: "fill",
        question: "C#中用于跳出整个循环的关键字是______。",
        answer: "break",
        explanation: "break用于跳出整个循环，continue用于结束本次循环进入下一次。"
    },
    {
        id: 133,
        category: "csharp-basic",
        type: "fill",
        question: "将值类型转换为引用类型的过程称为______。",
        answer: "装箱",
        explanation: "装箱(Boxing)是将值类型转换为引用类型。拆箱(Unboxing)是将引用类型转换为值类型。"
    },
    {
        id: 134,
        category: "csharp-oop",
        type: "fill",
        question: "面向对象的三大特征是封装、继承和______。",
        answer: "多态",
        explanation: "面向对象的三大特征是：封装、继承、多态。"
    },
    {
        id: 135,
        category: "csharp-oop",
        type: "fill",
        question: "所有类的基类是______。",
        answer: "object",
        explanation: "object是所有类的基类(最顶层父类)，所有类都直接或间接继承自object类。"
    },
    {
        id: 136,
        category: "csharp-oop",
        type: "fill",
        question: "子类调用父类构造函数使用的关键字是______。",
        answer: "base",
        explanation: "base关键字用于子类调用父类的构造函数或成员。"
    },
    {
        id: 137,
        category: "csharp-oop",
        type: "fill",
        question: "不能被继承的类使用______关键字修饰。",
        answer: "sealed",
        explanation: "sealed(密封类)关键字修饰的类不能被继承。"
    },
    {
        id: 138,
        category: "csharp-advanced",
        type: "fill",
        question: "将对象转换为二进制的过程称为______。",
        answer: "序列化",
        explanation: "序列化(Serialize)是将对象转换为二进制，反序列化(Deserialize)是将二进制转换为对象。"
    },
    {
        id: 139,
        category: "visionpro-basic",
        type: "fill",
        question: "VisionPro项目文件的扩展名是______。",
        answer: ".vpp",
        explanation: ".vpp是VisionPro项目文件的扩展名。"
    },
    {
        id: 140,
        category: "visionpro-basic",
        type: "fill",
        question: "VisionPro中用于建立坐标系的工具是______。",
        answer: "CogFixtureTool",
        explanation: "CogFixtureTool用于建立坐标系统，实现定位补偿。"
    },
    {
        id: 141,
        category: "visionpro-tools",
        type: "fill",
        question: "VisionPro中用于模板匹配定位的工具是______。",
        answer: "CogPMAlignTool",
        explanation: "CogPMAlignTool(PatMax)是VisionPro中最强大的模板匹配定位工具。"
    },
    {
        id: 142,
        category: "visionpro-tools",
        type: "fill",
        question: "VisionPro中用于斑点分析的工具是______。",
        answer: "CogBlobTool",
        explanation: "CogBlobTool用于斑点(Blob)分析，可以检测、计数、测量图像中的连通区域。"
    },
    {
        id: 143,
        category: "visionpro-tools",
        type: "fill",
        question: "VisionPro中用于边缘查找和测量的卡尺工具是______。",
        answer: "CogCaliperTool",
        explanation: "CogCaliperTool(卡尺工具)用于在指定方向上查找边缘，测量距离。"
    },
    {
        id: 144,
        category: "visionpro-tools",
        type: "fill",
        question: "VisionPro中用于查找直线的工具是______。",
        answer: "CogFindLineTool",
        explanation: "CogFindLineTool用于在图像中查找直线边缘。"
    },
    {
        id: 145,
        category: "visionpro-tools",
        type: "fill",
        question: "VisionPro中用于查找圆形的工具是______。",
        answer: "CogFindCircleTool",
        explanation: "CogFindCircleTool用于查找图像中的圆形边缘，获取圆心坐标和半径。"
    },

    // ==================== 更多单选题(L3考试内容) ====================
    {
        id: 146,
        category: "visionpro-basic",
        type: "single",
        question: "相机标定的主要目的是什么？",
        options: ["提高图像亮度", "建立像素坐标与物理坐标的对应关系", "压缩图像", "改变图像颜色"],
        answer: 1,
        explanation: "相机标定的主要目的是建立像素坐标与实际物理坐标之间的对应关系，同时可以校正镜头畸变。"
    },
    {
        id: 147,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro中，像素当量(Pixel Size)表示什么？",
        options: ["图像分辨率", "每个像素代表的实际物理尺寸", "图像大小", "颜色深度"],
        answer: 1,
        explanation: "像素当量表示每个像素代表的实际物理尺寸，如0.1mm/pixel，用于将像素测量结果转换为实际尺寸。"
    },
    {
        id: 148,
        category: "visionpro-basic",
        type: "single",
        question: "镜头畸变主要分为哪两种类型？",
        options: ["明暗畸变和色彩畸变", "径向畸变和切向畸变", "水平畸变和垂直畸变", "放大畸变和缩小畸变"],
        answer: 1,
        explanation: "镜头畸变主要分为径向畸变(桶形/枕形)和切向畸变。标定可以校正这些畸变。"
    },
    {
        id: 149,
        category: "visionpro-tools",
        type: "single",
        question: "CogCalibCheckerboardTool标定时，棋盘格的作用是什么？",
        options: ["装饰作用", "提供已知尺寸的特征点用于标定", "测试相机", "调节光源"],
        answer: 1,
        explanation: "棋盘格提供已知尺寸和位置的角点，通过检测这些角点并与实际尺寸对比，建立像素与物理坐标的对应关系。"
    },
    {
        id: 150,
        category: "visionpro-tools",
        type: "single",
        question: "N点标定(NPointToNPoint)至少需要多少对对应点？",
        options: ["1对", "2对", "3对", "4对"],
        answer: 3,
        explanation: "N点标定至少需要4对对应点来建立可靠的坐标变换关系。点数越多，标定精度越高。"
    },
    {
        id: 151,
        category: "visionpro-basic",
        type: "single",
        question: "工业相机的曝光时间过长会导致什么问题？",
        options: ["图像太暗", "图像模糊(运动模糊)", "图像分辨率降低", "相机损坏"],
        answer: 1,
        explanation: "曝光时间过长，在拍摄运动物体时会产生运动模糊。需要根据物体运动速度合理设置曝光时间。"
    },
    {
        id: 152,
        category: "visionpro-basic",
        type: "single",
        question: "相机增益(Gain)过高会导致什么问题？",
        options: ["图像太暗", "图像噪点增加", "分辨率降低", "帧率下降"],
        answer: 1,
        explanation: "增益过高会放大图像噪声，导致图像噪点增加，影响检测精度。应优先调整光源和曝光时间。"
    },
    {
        id: 153,
        category: "visionpro-basic",
        type: "single",
        question: "选择工业镜头时，工作距离是指什么？",
        options: ["镜头长度", "镜头到物体的距离", "焦距", "光圈大小"],
        answer: 1,
        explanation: "工作距离(WD)是指镜头前端到被拍摄物体的距离。需要根据安装空间和视野要求选择合适的工作距离。"
    },
    {
        id: 154,
        category: "visionpro-basic",
        type: "single",
        question: "镜头的光圈(F值)越小表示什么？",
        options: ["进光量越少", "进光量越多", "焦距越长", "视野越大"],
        answer: 1,
        explanation: "光圈F值越小，光圈开口越大，进光量越多，图像越亮。F1.4比F2.8进光量更多。"
    },
    {
        id: 155,
        category: "visionpro-basic",
        type: "single",
        question: "景深是指什么？",
        options: ["图像深度", "能够清晰成像的距离范围", "镜头焦距", "视野大小"],
        answer: 1,
        explanation: "景深是指能够清晰成像的距离范围。光圈越小、工作距离越远、焦距越短，景深越大。"
    },
    {
        id: 156,
        category: "visionpro-tools",
        type: "single",
        question: "CogBlobTool中，ThresholdMode设置为Relative时，阈值是相对于什么计算的？",
        options: ["固定值", "图像平均灰度", "图像最大灰度", "图像最小灰度"],
        answer: 1,
        explanation: "Relative模式下，阈值是相对于图像区域的平均灰度计算的，可以自动适应亮度变化。"
    },
    {
        id: 157,
        category: "visionpro-tools",
        type: "single",
        question: "CogPMAlignTool中，ZoneAngle用于设置什么？",
        options: ["结果角度", "搜索角度范围", "模板角度", "图像旋转角度"],
        answer: 1,
        explanation: "ZoneAngle设置模板匹配时允许的旋转角度范围，如±10度。增大范围会增加搜索时间。"
    },
    {
        id: 158,
        category: "visionpro-tools",
        type: "single",
        question: "CogPMAlignTool中，ZoneScale用于设置什么？",
        options: ["结果缩放", "搜索缩放范围", "模板缩放", "图像缩放"],
        answer: 1,
        explanation: "ZoneScale设置模板匹配时允许的缩放范围，如0.9-1.1。用于检测大小有变化的目标。"
    },
    {
        id: 159,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro脚本中，获取ToolBlock输入图像的代码是？",
        options: ["InputImage", "mToolBlock.Inputs.InputImage", "GetImage()", "Image.Input"],
        answer: 1,
        explanation: "在脚本中，通过mToolBlock.Inputs.InputImage获取ToolBlock的输入图像。"
    },
    {
        id: 160,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro脚本中，运行工具的方法是？",
        options: ["Start()", "Execute()", "Run()", "Process()"],
        answer: 2,
        explanation: "在脚本中，调用工具的Run()方法来运行工具，如myTool.Run()。"
    },

    // ==================== 更多判断题 ====================
    {
        id: 161,
        category: "visionpro-basic",
        type: "judge",
        question: "标定后的坐标系原点一定在图像中心。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。标定后的坐标系原点位置取决于标定时的设置，可以在任意位置。"
    },
    {
        id: 162,
        category: "visionpro-tools",
        type: "judge",
        question: "CogBlobTool只能检测白色斑点。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。通过设置Polarity参数，CogBlobTool可以检测亮斑点或暗斑点。"
    },
    {
        id: 163,
        category: "visionpro-tools",
        type: "judge",
        question: "CogPMAlignTool可以同时找到多个匹配结果。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。通过设置RunParams.FindNumToFind可以指定要查找的目标数量。"
    },
    {
        id: 164,
        category: "visionpro-basic",
        type: "judge",
        question: "增大相机曝光时间可以获得更亮的图像。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。曝光时间越长，传感器接收的光量越多，图像越亮。但可能导致运动模糊。"
    },
    {
        id: 165,
        category: "visionpro-basic",
        type: "judge",
        question: "镜头焦距越长，视野越大。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。焦距越长，视野越小，图像放大倍数越高。焦距越短，视野越大。"
    },
    {
        id: 166,
        category: "csharp-basic",
        type: "judge",
        question: "do-while循环至少执行一次循环体。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。do-while循环先执行循环体，再判断条件，所以至少执行一次。"
    },
    {
        id: 167,
        category: "csharp-oop",
        type: "judge",
        question: "接口可以继承多个接口。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。接口之间可以多继承。类只能单继承，但可以实现多个接口。"
    },
    {
        id: 168,
        category: "csharp-advanced",
        type: "judge",
        question: "out参数在方法外可以不赋值。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。out参数在方法外可以不赋值，但在方法内必须赋值。ref参数在方法外必须赋值。"
    },
    {
        id: 169,
        category: "visionpro-tools",
        type: "judge",
        question: "CogFindLineTool可以直接测量两条直线的夹角。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。CogFindLineTool只能找到一条直线。需要使用两个CogFindLineTool分别找到两条线，然后在脚本中计算夹角。"
    },
    {
        id: 170,
        category: "visionpro-basic",
        type: "judge",
        question: "VisionPro中所有工具都需要手动调用Run()方法来执行。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。在QuickBuild中，工具会按照工具列表顺序自动执行。只有在脚本中才需要手动调用Run()。"
    },

    // ==================== 更多多选题 ====================
    {
        id: 171,
        category: "visionpro-basic",
        type: "multiple",
        question: "影响机器视觉检测精度的因素包括？（多选）",
        options: ["相机分辨率", "镜头质量", "光源照明", "标定精度", "图像噪声"],
        answer: [0, 1, 2, 3, 4],
        explanation: "所有这些因素都会影响检测精度：相机分辨率决定细节捕捉能力，镜头影响成像质量，光源影响对比度，标定影响测量精度，噪声影响边缘检测。"
    },
    {
        id: 172,
        category: "visionpro-tools",
        type: "multiple",
        question: "CogBlobTool可以获取哪些Blob特征？（多选）",
        options: ["面积(Area)", "周长(Perimeter)", "质心坐标(CenterOfMass)", "圆度(Circularity)", "边界框(BoundingBox)"],
        answer: [0, 1, 2, 3, 4],
        explanation: "CogBlobTool可以计算Blob的多种几何特征，包括面积、周长、质心、圆度、边界框等。"
    },
    {
        id: 173,
        category: "csharp-basic",
        type: "multiple",
        question: "以下哪些可以用于类型转换？（多选）",
        options: ["强制转换(int)", "Convert.ToInt32()", "int.Parse()", "int.TryParse()", "as关键字"],
        answer: [0, 1, 2, 3, 4],
        explanation: "所有这些都可以用于类型转换：强制转换适用于兼容类型，Convert和Parse用于字符串转换，TryParse不抛异常，as用于引用类型转换。"
    },
    {
        id: 174,
        category: "csharp-oop",
        type: "multiple",
        question: "以下关于构造函数的说法正确的是？（多选）",
        options: ["没有返回值", "名称必须和类名相同", "可以有多个重载", "用于初始化对象"],
        answer: [0, 1, 2, 3],
        explanation: "构造函数的特点：没有返回值(连void都不写)、名称必须和类名相同、可以有多个重载、用于初始化对象。"
    },
    {
        id: 175,
        category: "visionpro-basic",
        type: "multiple",
        question: "工业相机的主要参数包括？（多选）",
        options: ["分辨率", "帧率", "像素大小", "接口类型", "传感器类型"],
        answer: [0, 1, 2, 3, 4],
        explanation: "工业相机的主要参数包括：分辨率(像素数)、帧率(fps)、像素大小(μm)、接口类型(GigE/USB3等)、传感器类型(CCD/CMOS)等。"
    },

    // ==================== 更多填空题 ====================
    {
        id: 176,
        category: "visionpro-basic",
        type: "fill",
        question: "VisionPro中用于从相机采集图像的工具是______。",
        answer: "CogAcqFifoTool",
        explanation: "CogAcqFifoTool是VisionPro中用于从相机采集图像的工具。"
    },
    {
        id: 177,
        category: "visionpro-tools",
        type: "fill",
        question: "VisionPro中用于读取条码和二维码的工具是______。",
        answer: "CogIDTool",
        explanation: "CogIDTool用于读取一维码(条形码)和二维码(DataMatrix、QR码等)。"
    },
    {
        id: 178,
        category: "visionpro-tools",
        type: "fill",
        question: "VisionPro中用于光学字符识别的工具是______。",
        answer: "CogOCRMaxTool",
        explanation: "CogOCRMaxTool用于光学字符识别(OCR)，识别图像中的文字和数字。"
    },
    {
        id: 179,
        category: "csharp-basic",
        type: "fill",
        question: "C#中，获取数组长度的属性是______。",
        answer: "Length",
        explanation: "数组的Length属性返回数组中元素的个数。"
    },
    {
        id: 180,
        category: "csharp-basic",
        type: "fill",
        question: "C#中，用于结束本次循环并进入下一次循环的关键字是______。",
        answer: "continue",
        explanation: "continue用于结束本次循环，判断循环条件，如果成立则进入下一次循环。"
    },
    {
        id: 181,
        category: "csharp-oop",
        type: "fill",
        question: "C#中，用于标记虚方法的关键字是______。",
        answer: "virtual",
        explanation: "virtual关键字用于标记虚方法，子类可以用override重写。"
    },
    {
        id: 182,
        category: "csharp-oop",
        type: "fill",
        question: "C#中，用于标记抽象类和抽象方法的关键字是______。",
        answer: "abstract",
        explanation: "abstract关键字用于标记抽象类和抽象方法。抽象类不能被实例化，抽象方法没有方法体。"
    },
    {
        id: 183,
        category: "csharp-advanced",
        type: "fill",
        question: "C#中，可以将一个类的定义分散在多个文件中的关键字是______。",
        answer: "partial",
        explanation: "partial关键字定义部分类，可以将一个类的定义分散在多个文件中。"
    },
    {
        id: 184,
        category: "visionpro-basic",
        type: "fill",
        question: "VisionPro中，图像数据库文件的扩展名是______。",
        answer: ".idb",
        explanation: ".idb(Image Database)是VisionPro的图像数据库文件扩展名。"
    },
    {
        id: 185,
        category: "visionpro-tools",
        type: "fill",
        question: "CogPMAlignTool的匹配得分(Score)的范围是______到______。",
        answer: "0到1",
        explanation: "Score值范围是0-1，1表示完全匹配，0表示完全不匹配。"
    },

    // ==================== 更多综合应用题 ====================
    {
        id: 186,
        category: "visionpro-tools",
        type: "single",
        question: "在VisionPro中，如何设置CogBlobTool只检测面积大于100像素的斑点？",
        options: ["设置Polarity", "设置AreaFilter的最小值为100", "设置ThresholdMode", "设置ConnectivityMode"],
        answer: 1,
        explanation: "通过设置Results.GetBlobs()时的过滤条件，或在工具属性中设置面积过滤范围，最小值设为100。"
    },
    {
        id: 187,
        category: "visionpro-tools",
        type: "single",
        question: "CogCaliperTool的FilterMode设置为Peak表示什么？",
        options: ["只找第一个边缘", "找最强的边缘", "找所有边缘", "不过滤"],
        answer: 1,
        explanation: "Peak模式会选择对比度最强(最明显)的边缘对作为结果。"
    },
    {
        id: 188,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro脚本中，如何获取PMAlign工具的第一个匹配结果的X坐标？",
        options: ["pmAlign.Results[0].X", "pmAlign.Results[0].GetPose().TranslationX", "pmAlign.X", "pmAlign.ResultX"],
        answer: 1,
        explanation: "通过Results[0].GetPose().TranslationX获取第一个匹配结果的X坐标。"
    },
    {
        id: 189,
        category: "csharp-advanced",
        type: "single",
        question: "在VisionPro脚本中，如何遍历Blob工具的所有结果？",
        options: ["for循环遍历Results", "foreach遍历GetBlobs()", "while循环", "不能遍历"],
        answer: 1,
        explanation: "使用foreach遍历CogBlobTool.Results.GetBlobs()返回的Blob集合。"
    },
    {
        id: 190,
        category: "visionpro-basic",
        type: "single",
        question: "VisionPro中，如何将像素坐标转换为物理坐标？",
        options: ["直接乘以像素当量", "使用标定工具的坐标变换", "不能转换", "使用CogAffineTransform"],
        answer: 1,
        explanation: "使用标定工具(如CogCalibCheckerboardTool)建立的坐标变换，将像素坐标转换为物理坐标。"
    },
    {
        id: 191,
        category: "csharp-basic",
        type: "single",
        question: "以下代码的输出是？\n<pre>for(int i=0; i<3; i++)\n{\n    if(i==1) continue;\n    Console.Write(i);\n}</pre>",
        options: ["012", "02", "01", "12"],
        answer: 1,
        explanation: "当i=1时执行continue跳过本次循环，不输出1。所以输出02。"
    },
    {
        id: 192,
        category: "csharp-basic",
        type: "single",
        question: "以下代码的输出是？\n<pre>int i = 0;\nwhile(i < 5)\n{\n    i++;\n    if(i == 3) break;\n}\nConsole.WriteLine(i);</pre>",
        options: ["2", "3", "4", "5"],
        answer: 1,
        explanation: "当i自增到3时执行break跳出循环，此时i=3。"
    },
    {
        id: 193,
        category: "csharp-oop",
        type: "single",
        question: "以下代码中，子类构造函数调用父类构造函数的正确写法是？",
        options: ["public Child() : base() { }", "public Child() { base(); }", "public Child() : this() { }", "public Child() : parent() { }"],
        answer: 0,
        explanation: "使用 : base() 在子类构造函数中调用父类构造函数。"
    },
    {
        id: 194,
        category: "csharp-advanced",
        type: "single",
        question: "如何判断一个object变量是否可以转换为string类型？",
        options: ["obj.GetType() == string", "obj is string", "obj == string", "obj.ToString()"],
        answer: 1,
        explanation: "使用 is 关键字判断类型转换是否可行，返回true或false。"
    },
    {
        id: 195,
        category: "visionpro-tools",
        type: "single",
        question: "CogFindCircleTool的结果中，如何获取圆的半径？",
        options: ["Result.Radius", "Results[0].GetCircle().Radius", "Circle.Radius", "GetRadius()"],
        answer: 1,
        explanation: "通过Results[0].GetCircle().Radius获取找到的圆的半径。"
    },
    {
        id: 196,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro中，如何保存当前显示的图像到文件？",
        options: ["使用CogImageFileTool", "使用CogDisplay.Save()", "使用File.Save()", "无法保存"],
        answer: 0,
        explanation: "使用CogImageFileTool的Save功能将图像保存到文件。"
    },
    {
        id: 197,
        category: "csharp-basic",
        type: "single",
        question: "string.Format(\"{0:F2}\", 3.14159) 的输出是？",
        options: ["3.14159", "3.14", "3.1", "3"],
        answer: 1,
        explanation: "F2格式化字符串表示保留2位小数，所以输出3.14。"
    },
    {
        id: 198,
        category: "csharp-advanced",
        type: "single",
        question: "Dictionary<string, int>中，如何检查某个键是否存在？",
        options: ["dict.Exists(key)", "dict.ContainsKey(key)", "dict.HasKey(key)", "dict.Find(key)"],
        answer: 1,
        explanation: "使用ContainsKey(key)方法检查字典中是否存在指定的键。"
    },
    {
        id: 199,
        category: "visionpro-tools",
        type: "single",
        question: "如何让CogPMAlignTool的搜索区域跟随另一个定位结果移动？",
        options: ["设置InputImage", "设置SearchRegion的Fixture", "设置RunParams", "无法实现"],
        answer: 1,
        explanation: "通过设置SearchRegion的Fixture为前序定位工具的输出位姿，实现搜索区域跟随。"
    },
    {
        id: 200,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro QuickBuild中，工具的执行顺序是？",
        options: ["随机执行", "按工具添加顺序执行", "按工具名称排序执行", "同时执行"],
        answer: 1,
        explanation: "在QuickBuild中，工具按照工具列表中从上到下的顺序依次执行。"
    },

    // ==================== 更多判断题 ====================
    {
        id: 201,
        category: "csharp-basic",
        type: "judge",
        question: "C#中，switch语句的case后面可以省略break。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。C#中每个case后面必须有break、return或goto，否则编译错误。这与C/C++不同。"
    },
    {
        id: 202,
        category: "csharp-oop",
        type: "judge",
        question: "静态方法可以直接访问非静态成员。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。静态方法只能直接访问静态成员，不能直接访问非静态(实例)成员。"
    },
    {
        id: 203,
        category: "csharp-advanced",
        type: "judge",
        question: "泛型集合List<T>比ArrayList性能更好。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。List<T>是泛型集合，不需要装箱拆箱操作，性能比ArrayList更好。"
    },
    {
        id: 204,
        category: "visionpro-tools",
        type: "judge",
        question: "CogPMAlignTool训练后，可以自动适应目标的颜色变化。",
        options: ["正确", "错误"],
        answer: 1,
        explanation: "错误。PMAlign是基于几何特征的匹配，对颜色变化不敏感，但对灰度对比度变化敏感。"
    },
    {
        id: 205,
        category: "visionpro-basic",
        type: "judge",
        question: "在VisionPro中，可以同时连接多个相机。",
        options: ["正确", "错误"],
        answer: 0,
        explanation: "正确。VisionPro支持同时连接和管理多个相机，可以在不同的Job或ToolBlock中使用不同的相机。"
    },

    // ==================== 额外的综合题目 ====================
    {
        id: 206,
        category: "visionpro-basic",
        type: "single",
        question: "GigE相机的优势不包括以下哪项？",
        options: ["传输距离长", "带宽高", "成本低", "必须使用专用采集卡"],
        answer: 3,
        explanation: "GigE相机不需要专用采集卡，可以直接使用标准网卡连接，这是它的优势之一。"
    },
    {
        id: 207,
        category: "visionpro-basic",
        type: "single",
        question: "在选择工业镜头时，C接口和CS接口的主要区别是？",
        options: ["分辨率不同", "法兰距不同", "光圈不同", "焦距不同"],
        answer: 1,
        explanation: "C接口法兰距17.526mm，CS接口法兰距12.5mm。法兰距是镜头安装面到成像面的距离。"
    },
    {
        id: 208,
        category: "visionpro-tools",
        type: "single",
        question: "CogBlobTool中，Morphology操作的作用是？",
        options: ["颜色转换", "形态学处理(膨胀/腐蚀)", "边缘检测", "滤波"],
        answer: 1,
        explanation: "Morphology提供形态学操作，如膨胀(Dilate)和腐蚀(Erode)，用于处理Blob的形状。"
    },
    {
        id: 209,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个不是合法的C#标识符？",
        options: ["_name", "name1", "1name", "@class"],
        answer: 2,
        explanation: "标识符不能以数字开头。1name是非法的。_name、name1、@class都是合法的。"
    },
    {
        id: 210,
        category: "csharp-oop",
        type: "single",
        question: "以下关于接口的说法，错误的是？",
        options: ["接口成员默认是public", "接口可以包含属性", "接口可以被实例化", "类可以实现多个接口"],
        answer: 2,
        explanation: "接口不能被实例化，只能被类实现。接口成员默认public，可以包含属性，类可以实现多个接口。"
    },

    // ==================== 更多填空题 ====================
    {
        id: 211,
        category: "csharp-basic",
        type: "fill",
        question: "C#中，逻辑与运算符是______。",
        answer: "&&",
        explanation: "&&是逻辑与运算符，两个条件都为true时结果才为true。"
    },
    {
        id: 212,
        category: "csharp-basic",
        type: "fill",
        question: "C#中，逻辑或运算符是______。",
        answer: "||",
        explanation: "||是逻辑或运算符，只要一个条件为true结果就为true。"
    },
    {
        id: 213,
        category: "csharp-oop",
        type: "fill",
        question: "C#中，表示当前类对象的关键字是______。",
        answer: "this",
        explanation: "this关键字代表当前类的对象。"
    },
    {
        id: 214,
        category: "csharp-advanced",
        type: "fill",
        question: "C#中，用于异常处理的三个关键字是try、catch和______。",
        answer: "finally",
        explanation: "try-catch-finally是异常处理结构，finally块无论是否异常都会执行。"
    },
    {
        id: 215,
        category: "visionpro-tools",
        type: "fill",
        question: "CogBlobTool中，设置查找亮斑点还是暗斑点的参数是______。",
        answer: "Polarity",
        explanation: "Polarity参数设置斑点的极性：亮斑点或暗斑点。"
    },

    // ==================== 综合应用题(脚本编程) ====================
    {
        id: 216,
        category: "csharp-advanced",
        type: "single",
        question: "在VisionPro脚本中，以下哪行代码可以获取Blob工具的斑点数量？",
        options: ["blobTool.Count", "blobTool.Results.GetBlobs().Count", "blobTool.BlobCount", "blobTool.GetCount()"],
        answer: 1,
        explanation: "通过blobTool.Results.GetBlobs().Count获取检测到的斑点数量。"
    },
    {
        id: 217,
        category: "csharp-advanced",
        type: "single",
        question: "VisionPro脚本中，如何设置ToolBlock的输出Terminal值？",
        options: ["Output.Value = x", "mToolBlock.Outputs.Terminal = x", "SetOutput(x)", "Terminal.Set(x)"],
        answer: 1,
        explanation: "通过mToolBlock.Outputs.TerminalName = value设置输出Terminal的值。"
    },
    {
        id: 218,
        category: "visionpro-tools",
        type: "single",
        question: "如何在脚本中判断PMAlign工具是否找到了目标？",
        options: ["if(pmAlign.Found)", "if(pmAlign.Results.Count > 0)", "if(pmAlign.Success)", "if(pmAlign.HasResult)"],
        answer: 1,
        explanation: "通过判断Results.Count是否大于0来确定是否找到了目标。"
    },
    {
        id: 219,
        category: "csharp-basic",
        type: "single",
        question: "Math.Round(2.5)的结果是？",
        options: ["2", "3", "2.5", "编译错误"],
        answer: 0,
        explanation: "C#的Math.Round默认使用银行家舍入法，2.5舍入到最近的偶数2。要得到3需使用MidpointRounding.AwayFromZero。"
    },
    {
        id: 220,
        category: "csharp-advanced",
        type: "single",
        question: "以下哪种方式可以安全地将字符串转换为整数，不抛出异常？",
        options: ["int.Parse()", "Convert.ToInt32()", "int.TryParse()", "(int)string"],
        answer: 2,
        explanation: "int.TryParse()在转换失败时返回false而不是抛出异常，是最安全的转换方式。"
    },

    // ==================== 最后补充题目 ====================
    {
        id: 221,
        category: "visionpro-basic",
        type: "single",
        question: "在VisionPro中，如何提高检测速度？",
        options: ["增大搜索区域", "提高图像分辨率", "减小ROI区域", "增加采样点数量"],
        answer: 2,
        explanation: "减小ROI(感兴趣区域)可以减少处理的像素数量，从而提高检测速度。"
    },
    {
        id: 222,
        category: "visionpro-tools",
        type: "single",
        question: "CogPMAlignTool中，Coarse/Fine Search的作用是？",
        options: ["调节亮度", "粗搜索和精搜索提高速度和精度", "设置颜色", "调节大小"],
        answer: 1,
        explanation: "粗搜索先快速找到大致位置，精搜索再精确定位，既保证速度又保证精度。"
    },
    {
        id: 223,
        category: "visionpro-basic",
        type: "single",
        question: "机器视觉系统中，同轴光的特点是？",
        options: ["光线倾斜照射", "光线从镜头方向照射", "光线从侧面照射", "光线从背面照射"],
        answer: 1,
        explanation: "同轴光光线从镜头光轴方向照射，适合检测镜面反射的物体表面。"
    },
    {
        id: 224,
        category: "visionpro-basic",
        type: "single",
        question: "背光源的主要应用场景是？",
        options: ["检测物体表面纹理", "检测物体轮廓和尺寸", "检测物体颜色", "检测物体3D形状"],
        answer: 1,
        explanation: "背光源从物体背后照射，产生剪影效果，主要用于检测物体的轮廓和尺寸。"
    },
    {
        id: 225,
        category: "csharp-basic",
        type: "single",
        question: "以下哪个是正确的数组声明？",
        options: ["int arr[5];", "int[] arr = new int[5];", "int arr = new int(5);", "int[5] arr;"],
        answer: 1,
        explanation: "C#中正确的数组声明语法是：类型[] 变量名 = new 类型[长度];"
    },
    {
        id: 226,
        category: "csharp-oop",
        type: "single",
        question: "以下代码中，override关键字的作用是？\n<pre>public override void Method() { }</pre>",
        options: ["声明新方法", "重写父类的虚方法或抽象方法", "隐藏父类方法", "声明静态方法"],
        answer: 1,
        explanation: "override用于重写父类的virtual或abstract方法，实现多态。"
    },
    {
        id: 227,
        category: "csharp-advanced",
        type: "single",
        question: "LINQ中，Where方法的作用是？",
        options: ["排序", "过滤", "分组", "投影"],
        answer: 1,
        explanation: "Where方法用于根据条件过滤集合中的元素，返回满足条件的元素。"
    },
    {
        id: 228,
        category: "visionpro-tools",
        type: "single",
        question: "CogFindEllipseTool的作用是？",
        options: ["画椭圆", "查找图像中的椭圆边缘", "测量椭圆面积", "颜色识别"],
        answer: 1,
        explanation: "CogFindEllipseTool用于查找图像中的椭圆形边缘，获取椭圆的参数。"
    },
    {
        id: 229,
        category: "visionpro-basic",
        type: "single",
        question: "VisionPro中，CogToolGroup的作用是？",
        options: ["采集图像", "将多个工具组织在一起", "显示图像", "保存结果"],
        answer: 1,
        explanation: "CogToolGroup用于将多个工具组织在一起，便于管理和组织复杂的视觉流程。"
    },
    {
        id: 230,
        category: "csharp-basic",
        type: "single",
        question: "以下代码的输出是？\n<pre>string s = \"Hello\";\nConsole.WriteLine(s.Length);</pre>",
        options: ["5", "6", "Hello", "编译错误"],
        answer: 0,
        explanation: "Length属性返回字符串的字符数，\"Hello\"有5个字符。"
    },

    // ==================== 解答题 ====================
    {
        id: 231,
        category: "csharp-basic",
        type: "essay",
        question: "请简述C#中值类型和引用类型的区别，并各举两个例子。",
        answer: `值类型和引用类型的主要区别：

1. 存储位置不同：
   - 值类型：存储在栈(Stack)中
   - 引用类型：存储在堆(Heap)中，栈中存储指向堆的引用

2. 赋值行为不同：
   - 值类型：赋值时复制整个值
   - 引用类型：赋值时复制引用（指针），指向同一个对象

3. 默认值不同：
   - 值类型：有默认值（如int为0，bool为false）
   - 引用类型：默认值为null

值类型例子：int、double、bool、char、struct、enum
引用类型例子：string、数组、class、interface、object`,
        keyPoints: [
            "提到存储位置（栈/堆）的区别",
            "提到赋值时复制行为的区别",
            "正确列举值类型例子",
            "正确列举引用类型例子"
        ],
        explanation: "理解值类型和引用类型的区别是C#编程的基础，对于理解内存管理和避免常见错误非常重要。"
    },
    {
        id: 232,
        category: "csharp-oop",
        type: "essay",
        question: "请解释面向对象编程的三大特征（封装、继承、多态），并说明它们各自的作用。",
        answer: `面向对象编程的三大特征：

1. 封装(Encapsulation)：
   - 定义：将数据和操作数据的方法绑定在一起，隐藏内部实现细节
   - 作用：提高安全性，隐藏复杂性，便于修改和维护
   - 实现方式：使用访问修饰符(private、public、protected)控制访问权限

2. 继承(Inheritance)：
   - 定义：子类可以继承父类的属性和方法
   - 作用：实现代码复用，建立类之间的层次关系
   - 特点：C#是单继承（一个类只能有一个父类），但可以实现多个接口

3. 多态(Polymorphism)：
   - 定义：同一操作作用于不同对象产生不同的行为
   - 作用：提高程序的扩展性和可维护性
   - 实现方式：虚方法(virtual/override)、抽象类(abstract)、接口(interface)`,
        keyPoints: [
            "正确解释封装的概念和作用",
            "正确解释继承的概念和作用",
            "正确解释多态的概念和作用",
            "提到多态的实现方式"
        ],
        explanation: "封装、继承、多态是面向对象编程的核心概念，掌握这三大特征对于编写高质量的面向对象程序至关重要。"
    },
    {
        id: 233,
        category: "csharp-oop",
        type: "essay",
        question: "请说明抽象类和接口的区别，以及各自的使用场景。",
        answer: `抽象类和接口的区别：

1. 定义方式：
   - 抽象类：使用abstract关键字，可以包含抽象方法和非抽象方法
   - 接口：使用interface关键字，只能包含方法签名（C# 8.0后可有默认实现）

2. 成员限制：
   - 抽象类：可以有字段、属性、构造函数、普通方法
   - 接口：只能有方法、属性、索引器、事件，不能有字段和构造函数

3. 继承方式：
   - 抽象类：单继承，一个类只能继承一个抽象类
   - 接口：多实现，一个类可以实现多个接口

4. 访问修饰符：
   - 抽象类：成员可以有各种访问修饰符
   - 接口：成员默认是public

使用场景：
- 抽象类：当多个类有共同的行为和状态，需要代码复用时
- 接口：当需要定义一组行为规范，让不相关的类实现相同的能力时`,
        keyPoints: [
            "说明定义方式的区别",
            "说明成员限制的区别",
            "说明继承方式的区别（单继承vs多实现）",
            "给出合适的使用场景"
        ],
        explanation: "抽象类和接口都是实现抽象的方式，根据具体需求选择合适的方式可以使代码更加灵活和可维护。"
    },
    {
        id: 234,
        category: "visionpro-basic",
        type: "essay",
        question: "请描述一个完整的VisionPro视觉检测流程，包括从图像采集到结果输出的主要步骤。",
        answer: `VisionPro视觉检测的完整流程：

1. 图像采集阶段：
   - 配置相机参数（曝光、增益等）
   - 使用CogAcqFifoTool从相机采集图像
   - 或使用CogImageFileTool从文件加载测试图像

2. 图像预处理阶段（可选）：
   - 使用CogImageConvertTool进行格式转换（如彩色转灰度）
   - 使用滤波工具进行图像增强
   - 使用CogCopyRegionTool提取感兴趣区域

3. 定位阶段：
   - 使用CogPMAlignTool（PatMax）进行模板匹配定位
   - 使用CogFixtureTool建立坐标系，实现位置补偿

4. 检测/测量阶段：
   - 使用CogBlobTool进行斑点检测
   - 使用CogCaliperTool/CogFindLineTool/CogFindCircleTool进行尺寸测量
   - 使用CogIDTool读取条码/二维码
   - 使用CogOCRMaxTool进行字符识别

5. 结果判定阶段：
   - 根据检测结果与设定的判定条件进行比较
   - 输出OK/NG判定结果
   - 将结果显示在CogDisplay上或通过通信发送给PLC`,
        keyPoints: [
            "提到图像采集（CogAcqFifoTool）",
            "提到定位（CogPMAlignTool、CogFixtureTool）",
            "提到检测/测量工具的使用",
            "提到结果判定和输出"
        ],
        explanation: "理解完整的视觉检测流程对于设计和实现视觉检测系统非常重要，每个阶段的正确配置都会影响最终的检测效果。"
    },
    {
        id: 235,
        category: "visionpro-tools",
        type: "essay",
        question: "请说明CogPMAlignTool（PatMax）的工作原理，以及如何提高模板匹配的成功率。",
        answer: `CogPMAlignTool(PatMax)工作原理：

PatMax是一种基于几何特征的模板匹配算法：
1. 训练阶段：提取模板图像的几何特征（边缘、轮廓等）
2. 运行阶段：在搜索区域内寻找与模板几何特征最匹配的位置
3. 输出结果：返回匹配位置(X,Y)、旋转角度、缩放比例和匹配得分

提高匹配成功率的方法：

1. 模板训练优化：
   - 选择特征明显、边缘清晰的区域作为模板
   - 避免包含可能变化的区域（如反光、文字等）
   - 合理设置训练区域大小

2. 搜索参数优化：
   - 合理设置搜索区域(SearchRegion)，不要过大或过小
   - 设置合适的角度范围(ZoneAngle)和缩放范围(ZoneScale)
   - 调整AcceptThreshold接受阈值

3. 图像质量保证：
   - 确保光源稳定，减少亮度变化
   - 保持图像清晰度，避免模糊

4. 使用Fixture：
   - 建立坐标系，让搜索区域跟随产品位置变化`,
        keyPoints: [
            "说明PatMax基于几何特征匹配",
            "提到模板训练的注意事项",
            "提到搜索参数的设置",
            "提到图像质量和光源的重要性"
        ],
        explanation: "PatMax是VisionPro中最强大的定位工具，理解其原理和优化方法对于实现稳定可靠的视觉定位非常重要。"
    },
    {
        id: 236,
        category: "csharp-advanced",
        type: "essay",
        question: "请解释C#中的异常处理机制(try-catch-finally)，并说明在什么情况下应该使用异常处理。",
        answer: `C#异常处理机制：

1. try块：
   - 包含可能抛出异常的代码
   - 程序正常运行时执行try块中的代码

2. catch块：
   - 捕获并处理try块中抛出的异常
   - 可以有多个catch块处理不同类型的异常
   - 应该从具体异常到一般异常的顺序排列

3. finally块：
   - 无论是否发生异常都会执行
   - 通常用于释放资源（如关闭文件、数据库连接等）

基本语法：
try
{
    // 可能抛出异常的代码
}
catch (SpecificException ex)
{
    // 处理特定类型的异常
}
catch (Exception ex)
{
    // 处理一般异常
}
finally
{
    // 清理代码，总是执行
}

应该使用异常处理的情况：
1. 文件操作（文件可能不存在或无法访问）
2. 网络通信（连接可能失败或超时）
3. 数据库操作（连接或查询可能失败）
4. 用户输入处理（输入可能无法转换为期望的类型）
5. 外部API调用（可能返回错误）`,
        keyPoints: [
            "正确解释try-catch-finally各部分的作用",
            "说明finally总是执行的特点",
            "提供合适的使用场景示例",
            "提到异常处理用于释放资源"
        ],
        explanation: "异常处理是编写健壮程序的重要机制，合理使用异常处理可以让程序更加稳定和易于维护。"
    },
    {
        id: 237,
        category: "visionpro-basic",
        type: "essay",
        question: "请说明相机标定的目的、常用方法以及标定时需要注意的事项。",
        answer: `相机标定的目的：

1. 建立像素坐标与物理坐标的对应关系
2. 校正镜头畸变（径向畸变、切向畸变）
3. 实现精确的尺寸测量

常用标定方法：

1. 棋盘格标定(CogCalibCheckerboardTool)：
   - 使用标准棋盘格图案
   - 适合固定安装的相机
   - 可以校正镜头畸变

2. N点标定(CogCalibNPointToNPointTool)：
   - 使用N对对应点（至少4对）
   - 适合机器人视觉、手眼标定
   - 灵活性高

3. 圆阵列标定：
   - 使用圆形阵列图案
   - 精度高

标定注意事项：

1. 标定板要求：
   - 平整、无变形
   - 精度高、尺寸准确
   - 特征清晰可见

2. 拍摄要求：
   - 覆盖整个视野范围
   - 拍摄多个角度（至少10张）
   - 避免运动模糊

3. 环境要求：
   - 光源稳定
   - 标定后不能移动相机或镜头
   - 定期验证标定精度

4. 精度验证：
   - 使用已知尺寸的标准件验证
   - 检查重复性`,
        keyPoints: [
            "说明标定的主要目的",
            "提到常用的标定方法",
            "提到标定板的要求",
            "提到标定后验证的重要性"
        ],
        explanation: "相机标定是实现精确测量的基础，标定的质量直接影响测量精度。"
    },
    {
        id: 238,
        category: "csharp-basic",
        type: "essay",
        question: "请解释C#中的装箱(Boxing)和拆箱(Unboxing)，并说明为什么应该避免频繁的装箱拆箱操作。",
        answer: `装箱和拆箱的定义：

1. 装箱(Boxing)：
   - 将值类型转换为引用类型(object)的过程
   - 系统在堆上创建一个新对象，将值类型的值复制到该对象中
   - 例如：int num = 10; object obj = num;

2. 拆箱(Unboxing)：
   - 将引用类型转换回值类型的过程
   - 从堆上的对象中提取值类型的值
   - 例如：object obj = 10; int num = (int)obj;

应该避免频繁装箱拆箱的原因：

1. 性能开销：
   - 装箱时需要在堆上分配内存
   - 需要复制值到堆对象中
   - 拆箱时需要检查类型并复制值

2. 内存压力：
   - 频繁装箱会产生大量临时对象
   - 增加垃圾回收(GC)的压力
   - 影响程序整体性能

3. 常见的装箱场景：
   - 使用ArrayList等非泛型集合
   - 将值类型传递给object参数
   - 字符串拼接中使用值类型

4. 避免方法：
   - 使用泛型集合(List<T>、Dictionary<TKey,TValue>)
   - 使用StringBuilder进行字符串拼接
   - 使用适当的重载方法避免object参数`,
        keyPoints: [
            "正确解释装箱和拆箱的概念",
            "说明装箱拆箱的性能开销",
            "提到对GC的影响",
            "给出避免装箱拆箱的方法"
        ],
        explanation: "理解装箱拆箱对于编写高性能的C#程序非常重要，特别是在处理大量数据时应尽量避免。"
    },
    {
        id: 239,
        category: "visionpro-tools",
        type: "essay",
        question: "请详细说明CogBlobTool的工作原理，以及如何设置参数来检测特定的目标。",
        answer: `CogBlobTool工作原理：

Blob(Binary Large Object)分析是将图像二值化后，检测和分析连通区域的过程。

工作流程：
1. 设置阈值，将图像转换为二值图像
2. 识别连通区域（Blob）
3. 计算每个Blob的几何特征
4. 根据过滤条件筛选目标Blob

主要参数设置：

1. 阈值设置(Threshold)：
   - Hard Threshold：固定阈值，适合光照稳定的场景
   - Relative Threshold：相对阈值，自动适应亮度变化
   - 设置合适的阈值使目标与背景分离

2. 极性设置(Polarity)：
   - LightBlobsOnDarkBackground：检测暗背景上的亮斑点
   - DarkBlobsOnLightBackground：检测亮背景上的暗斑点

3. 连通性设置(ConnectivityMode)：
   - GreyScale4：4连通（上下左右）
   - GreyScale8：8连通（包括对角线方向）

4. 面积过滤：
   - 设置最小/最大面积范围
   - 过滤掉噪点和不需要的大区域

5. 形态学处理(Morphology)：
   - Dilate(膨胀)：扩大Blob区域，填补小孔洞
   - Erode(腐蚀)：缩小Blob区域，分离粘连
   - Open(开运算)：先腐蚀后膨胀，去除小噪点
   - Close(闭运算)：先膨胀后腐蚀，填补小孔洞

6. 输出特征：
   - Area：面积
   - Perimeter：周长
   - CenterOfMassX/Y：质心坐标
   - BoundingBox：边界框
   - Circularity：圆度`,
        keyPoints: [
            "说明Blob分析的基本原理",
            "提到阈值设置方法",
            "提到极性和连通性设置",
            "提到形态学处理的应用"
        ],
        explanation: "CogBlobTool是VisionPro中常用的检测工具，掌握其参数设置对于实现各种检测任务非常重要。"
    },
    {
        id: 240,
        category: "csharp-advanced",
        type: "essay",
        question: "请解释泛型(Generic)的概念、优点以及使用场景。",
        answer: `泛型的概念：

泛型是C#中一种参数化类型的机制，允许在定义类、接口、方法时使用类型参数，在使用时再指定具体类型。

语法示例：
- 泛型类：class MyClass<T> { T value; }
- 泛型方法：T GetValue<T>(T input) { return input; }
- 泛型接口：interface IRepository<T> { T GetById(int id); }

泛型的优点：

1. 类型安全：
   - 编译时进行类型检查
   - 避免运行时类型转换错误

2. 性能优化：
   - 避免装箱拆箱操作
   - 减少内存分配和GC压力

3. 代码复用：
   - 一套代码适用于多种类型
   - 减少重复代码

4. 可读性好：
   - 明确表示集合中元素的类型
   - IDE提供更好的智能提示

使用场景：

1. 集合类：
   - List<T>、Dictionary<TKey, TValue>
   - 存储特定类型的元素

2. 数据访问层：
   - 泛型仓储模式Repository<T>
   - 通用的CRUD操作

3. 通用工具类：
   - 比较器、转换器
   - 工厂模式

4. 约束使用：
   - where T : class（引用类型约束）
   - where T : struct（值类型约束）
   - where T : new()（无参构造函数约束）
   - where T : BaseClass（基类约束）
   - where T : IInterface（接口约束）`,
        keyPoints: [
            "正确解释泛型的概念",
            "提到类型安全的优点",
            "提到性能优化（避免装箱拆箱）",
            "给出实际使用场景"
        ],
        explanation: "泛型是C#中非常重要的特性，合理使用泛型可以编写出更安全、高效、可复用的代码。"
    }
];

// 导出题库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}
