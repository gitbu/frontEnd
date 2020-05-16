# setDragImage 用法

拖拽时浏览器默认会把当前拖拽元素的半透明图像作为拖动图像，如果我们需要改的话，可以使用`setDragImage`

setDragImage的参数：

1. Element元素

   > ​	这个可以元素也可以是Canvas图像

2. 相对于鼠标的的横向偏移量

3. 相对于鼠标的纵向偏移量

*例子：*

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    #card {
      height: 100px;
      width: 200px;
      border: 1px solid red;
      background: plum;
    }
    #drag {
      height: 50px;
      width: 50px;
      background: red;
    }
  </style>
</head>
<body>
  <div id="drag">
    我是托
  </div>
  <div id="card" draggable="true">
    hello
  </div>
</body>
<script>
  const card = document.querySelector('#card');
  const drag = document.querySelector('#drag');

  card.addEventListener('dragstart', e => {
    e.dataTransfer.setDragImage(drag, 0, 0)
  })
</script>
</html>
```

