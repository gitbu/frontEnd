# useDrop

```js
const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
```

###参数：

* spec(Object)，对象中的item.accept必须设置

### 返回:

* （Array)
  * 0：就是传入的collect的返回值
  * 1：是一个连接放置元素的连接器，需要绑定在放置元素的ref上