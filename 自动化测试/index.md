# 前端自动化测试

## 工具

* cypress

## cypress 安装

cypress的安装有两种方法:

* [直接下载](https://download.cypress.io/desktop)
* 在项目目录下执行:

  ```code
  npm i -D cypress
  ```

  这种方式会先下载cypres包，然后再下载应用安装到本地，然后再node_modules/.bin/cypress 的执行cypres应用程序

下载注意事项:

* 在网速度慢的时候会非常耗时，所以我建议找一个网速好的环境，或者公司人少的时候下载（我就是在公司早上没人的时候下载的）
* 如果是从家里下载好放到公司,执行:

  ```code
  ./node_moudles/.bin/cypress open
  ```

  会报错，找不到cypress的应用，需要把cypress的应用放到对应的文件路径下
