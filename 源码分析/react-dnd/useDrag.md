# useDrag

```js
const [{ isDragging }, drag] = useDrag({
    item: { type: 'KNIGHT' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
```

###参数：

* spec(Object)，对象中的item.type必须设置

### 返回:

* （Array)
  * 0：就是传入的collect的返回值
  * 1：是一个连接拖动元素的连接器，需要绑定在拖动元素的ref上
  * [2]：是拖动元素的预览元素，如果设置了就会通过setDragImage设置拖动元素的展现效果

