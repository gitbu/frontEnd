# call方法

作用：把当前节点作为call后边函数的参数

例子：

```js
function foo(selection) {
  selection
      .attr("name1", "value1")
      .attr("name2", "value2");
}
foo(d3.selectAll("div"))
```

和这个是等价的

```js
d3.selectAll("div").call(foo);
```

