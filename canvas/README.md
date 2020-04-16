# 概念

## 实现方式
通过`Javascript`和`HTML`的`<canvas>`元素来绘制图形的

## 用途
可以绘制动画、游戏、数据可视化、图片编辑、实时视屏处理等方面

## 适用场景
2D图形

## 兼容性
`IE9`之前的`IE`浏览器不支持`HTML`的`canvas`元素，但在这些浏览器上可以展示替代内容

```html
  <canvas id="myCanvas">
    this is replace content
  </canvas>
  // canvas标签中的内容会在不兼容的浏览器显示
```

## 需要的知识
只要你会`Javascript`和`HTML`就可以了

## 需要注意的几个点
1. `canvas`标签只有两个属性`width`和`height`,默认值`width=300`、`height=150`
2. `</canvas>`标签是不可以省略的，省略了后边的内容就成了替换内容，兼容浏览器就不可见了
3. 坐标轴的y轴向下是正的，这个和我们理解的那个坐标轴是不一样的，我们数学里的坐标轴y轴向上是正的，不管canvas的画布还是其他的画布，一般都是这样的,如图
![画布](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/224/70658d72d2408295cdfba55e6cd5fcc8/Canvas_default_grid.png)

4. > 不同于 [SVG](https://developer.mozilla.org/en-US/docs/Glossary/SVG)，[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

   `canvas`只支持两种形式的图形：矩形和路径,其他图形都是有由路径组合而成

   `svg`可以支持：线条、矩形、圆形、椭圆、折现、多边形、路径等