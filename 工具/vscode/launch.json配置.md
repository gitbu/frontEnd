# launch.json配置详解

### 必选字段

* `type` 调试类型， 如：`node`、`php`
* `request`: 请求类型,`launch`和`attach`
* `name`： 下拉菜单中显示的名字

### 可选字段

* `program` 指定调试入口文件地址
* `runtimeExecutable` 设置运营时可执行文件路径，默认是`node` 可以是其他的执行程序，如:`npm` 和`nodemon`
* `runtimeArgs` 传递给运行时可执行文件的参数
* `args` 传递给程序的参数，可在`process.argv`中拿到

### 目录变量

* `${workspaceRoot}`: 当前打开工程的路径
* `${file}`: 当前打开的文件
* `${fileBasename}`: 当前打开文件的名字，包含后缀名
* `${fileDirname}`: 当前打开文件所在文件夹的路径
* `${fileExtname}`: 当前代开文件的后缀名
* `${cwd}`: 当前执行的目录