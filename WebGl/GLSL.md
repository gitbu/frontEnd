# GLSL语法

## 限定符

**1.uniform**

uniform是**外部程序**传递给（vertex和fragment）shader的变量。因此它是application通过函数glUniform**（）函数赋值的。在（vertex和fragment）shader程序内部，uniform变量就像是C语言里面的常量（const ），它不能被shader程序修改。（shader只能用，不能改）

如果uniform变量在vertex和fragment两者之间声明方式完全一样，则它可以在vertex和fragment共享使用。（相当于一个被vertex和fragment shader共享的全局变量）

uniform变量一般用来表示：变换矩阵，材质，光照参数和颜色等信息。



**2.attribute**

attribute是只能在vertex shader中使用的变量。（它不能在fragment shader中声明attribute变量，也不能被fragment shader中使用）

一般用attribute变量来表示一些顶点的数据，如：顶点坐标，法线，纹理坐标，顶点颜色等。

在application中，一般用函数glBindAttribLocation（）来绑定每个attribute变量的位置，然后用函数glVertexAttribPointer（）为每个attribute变量赋值。



**3.varying**

varying是vertex和fragment shader之间做数据传递用的。一般vertex shader修改varying变量的值，然后fragment shader使用该varying变量的值。因此varying变量在vertex和fragment shader二者之间的声明必须是一致的。application不能使用此变量。



## 内置变量

### 顶点着色器

1. gl_Position: 此变量用于写入齐次顶点位置坐标
2. gl_PointSize: 此变量用于为顶点着色器写入将要栅格化的点的大小，以像素为单位

### 片元着色器

1. gl_FragColor: 定义了后续固定功能管线中使用的片段的颜色
2. gl_FragData: 是一个数组，写入的数值`gl_FragData[n]` 指定了后续固定功能管线中对应于`n`数据的片段数据
3. gl_FragCoord: 存储了片段的窗口相对坐标 `x`、`y`、`z` 及 `1/w`。该值是在顶点处理阶段之后对图元插值生成片段计算所得。`z` 分量是深度值用来表示片段的深度

## 学习资料

[GLSL详解](https://colin1994.github.io/2017/11/11/OpenGLES-Lesson04/)

