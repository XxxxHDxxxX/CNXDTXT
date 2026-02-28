![](images/328c2918517ce1b16d6165eeb3eba8cd0c52753a074ce19c94d7e46b3de8ad09.jpg)

# 5. 函数

2023-03-04

# 5.1 函数的定义

```txt
class Program   
{ static void Write() 两个关键字：static和void Console.WriteLine("Text output from function"); } 函数名后跟圆括号 static void Main(string() args) { Write(); 一个要执行的代码块，放在花括号中 Console.ReadKey(); } }
```

# 5.1.1 返回值

class Program   
{ static int SumVals() { int val1 $= 2$ int val2 $= 3$ int sum $\equiv$ val1\*val2; return sum; } static void Main(string( args) { Console.WriteLine("Summed Values $=$ {sum}"); Console. ReadKey(); }

当函数返回一个值时，可以采用以下两种方式修改函数：

 在函数声明中指定返回值的类型，但不使用关键字 void 。  
 使用 return 关键字结束函数的执行，把返回值传送给调用代码。

# 5.1.2 参数

```txt
class Program   
{ static int SumVals(int val1, int val2) { int sum = val1 * val2; return sum; } static void Main(string() args) { int sum = SumVals(2, 3); Console.WriteLine("Summed Values = {sum}"); Console.ReadLine(); } } 
```

当函数接受参数时，必须指定以下内容：

 函数在其定义中指定接受的参数列表，以及这些参数的类型。  
 在每个函数调用中提供匹配的实参列表。

# 5.1.2 输出参数 ref 、 out

class Program   
{ static void ShowVal(ref int val1, out int val2) { val1 $\equiv$ val1; val2 $= 0$ ; val2 $+ = 2$ Console.WriteLine("val1 $=$ {val1}"); } static void Main(string() args) { int val1 $= 2$ ; int val2; ShowVal(ref val1, out val2); Console.WriteLine("val1 $=$ {val1}"); Console.WriteLine("val2 $=$ {val2}"); Console.ReadKey(); } }

ref 关键字与 out 关键字的使用方式相同（在函数定义和函数调用中用作参数的修饰符）。但是，二者存在一些重要的区别：  
 把未赋值的变量用作 ref 参数是非法的，但是可以把未赋值的变量用作 out 参数。  
 另外，在函数使用 out 参数时，必须把它看成是尚未赋值。

# 5.2 变量的作用域

class Program   
{ int val2 = 2; 全局变量 static void ShowVal(ref int val1) { val1 $\equiv$ val1; Console.WriteLine("val1 = { val1}"); } static void Main(string() args) { int val1 $= 2$ 局部变量 ShowVal(ref val1); Console.WriteLine("val1 = {val1}"); Console.WriteLine("val2 = {val2}"); Console.ReadKey(); } }

变量的作用域只在定义它的花括号中。

# 5.3 Main 函数

```txt
class Program   
{ static void Main(string[] args) { Console.WriteLine("\{0\} command line arguments were specified:"，args.Length); foreach (string arg in args) { Console.WriteLine(arg); } Console.ReadKey(); } } 
```

Main() 是 C# 应用程序的入口点，执行这个函数就是执行应用程序。这个函数可以返回 void 或 int ，有一个可选参数 string[]args ， Main() 函数可使用如下 4 种版本：

static void Main()

Static void Main(string[] args)

static int Main()

static int Main(string[] args)

Main() 的可选参数 args 是从应用程序的外部接受信息的方法，这些信息在运行应用程序时以命令行参数的形式指定。

# 5.4 结构函数

```txt
class Program
{
    static void Main(string[] args)
    {
        CustomerName myCustomer;
        myCustomer的第一个Name = "John";
        myCustomer这个名字 = "Franklin";
```

```java
Console.WriteLine(myCustomer.Name()); Console.ReadKey(); } struct CustomerName { public string firstName,,lastName; public string Name(){ return firstName +"" +lastName; } 
```

结构函数是一种特别的成员函数。它首要用于为目标分配存储空间 , 对数据成员进行初始化。关键字 struct 。

# 5.5 函数重载

class Program   
{ static void Main(string[] args) { int[] intArray $=$ {1,2,3,4} MaxValue(intArray); } static int MaxValue(int[] intArray) { return 1; } static double MaxValue(double[] doubleArray) { return 2; }

函数重载是指在同一个类中定义多个同名的函数，但这些函数的参数类型、参数个数、参数顺序不同，以便应对不同的调用需求。

# 5.6 练习

<table><tr><td>姓名</td><td>分数</td></tr><tr><td>小红</td><td>78</td></tr><tr><td>小明</td><td>56</td></tr><tr><td>小笑</td><td>90</td></tr><tr><td>张三</td><td>46</td></tr><tr><td>李四</td><td>66</td></tr></table>

编写控制台程序按照表格的顺序显示出来并且筛选除分数最高的人单独再显示一次。

![](images/8de4048d6121faa80f10de9f7862359ef0c5b1532f052b069d958b7db47ac97c.jpg)

# Thank you