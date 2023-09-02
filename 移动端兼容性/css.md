# css兼容性问题

## 1像素问题

解决办法

> ​	把原先元素的 border 去掉，然后利用 :before 或者 :after 重做 border ，并 transform 的 scale 缩小一半，原先的元素相对定位，新做的 border 绝对定位。

```bash
 .scale{
    position: relative;
    border:none;
  }
  .scale:after{
    content: '';
    position: absolute;
    bottom: 0;
    background: #000;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 0 0;
  }
```



## 禁止选中文本问题

解决办法：

> ​	触摸屏的相应顺序为touchstart-->touchmove-->touchend-->click，也可以通过绑定ontouchstart事件，加快事件的响应，解决300ms的延迟问题

## ios滚动不流畅问题

解决办法：

```bash
-webkit-overflow-scrolling: touch;
```

## iphoneX适配问题

## 点击穿透问题

解决办法：

> https://segmentfault.com/a/1190000003848737

## 滚动穿透问题

1. 设置父级滚动元素的overlow:hidden

## 自动播放音频和视屏问题

ios上是不能自动播放的，需要引导用户操作
