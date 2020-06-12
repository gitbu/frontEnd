# void和undefined

## void是啥

> **`void` 运算符** 对给定的表达式进行求值，然后返回 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)。



## undefined是啥

> 全局属性`undefined`表示原始值`undefined。`它是一个JavaScript的 [原始数据类型](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive) 。



### undefined的值可以改变吗

```js
(function(){
    var undefined = 123;
    console.log(undefined);//输出123
})()

function a() {
  var undefined = 123;
  console.log(undefined);//undefined
}
a()
```

上面为啥要结果会不一样呢,这个我也不知道，

mdn上是这样说的,很懵圈，不理解，解释不了上面的问题

> 在现代浏览器（JavaScript 1.8.5/Firefox 4+），自ECMAscript5标准以来undefined是一个不能被配置（non-configurable），不能被重写（non-writable）的属性。即便事实并非如此，也要避免去重写它。
>
> 但是它有可能在非全局作用域中被当作[标识符](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)（变量名）来使用(因为undefined不是一个[`保留字`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Reserved_Words)))，这样做是一个非常坏的主意，因为这样会使你的代码难以去维护和排错。



我对undefined的理解是这个样子的：表示变量没有定义或则定义了但是没有赋值



## 使用void 0代替undefined的原因

　① 使用void 0比使用undefined能够减少3个字节

```
>"undefined".length
9
>"void 0".length
6
```

　　② undefined并不是javascript中的保留字，我们可以使用undefined作为变量名字，然后给它赋值。void 0输出唯一的结果undefined，保证了不变性。