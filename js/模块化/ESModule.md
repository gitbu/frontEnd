# ESMODULE

## export注意点

1. export命令规定的是对外接口必须与模块内部的变量建立一一对应关系

   ```js
    // 报错
   export 1;

   // 报错
   var m = 1;
   export m;

   // 写法一
   export var m = 1;

   // 写法二
   var m = 1;
   export {m};

   // 写法三
   var n = 1;
   export {n as m};
   ```

   ​

## import注意点

1. `import`语句会执行所加载的模块

## export default

1. `export default`就是输出一个叫做`default`的变量或方法，然后系统允许你为它取任意名字

## export 与 import 的复合写法

1. `export`和`import`语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，`foo`和`bar`实际上并没有被导入当前模块，只是相当于对外转发了这两个接口