# monitor

1. `isOver`是否移动到目标区域上

2. `canDrop`是否可放置

3. `getItemType`就是useDrag中传入的type

   ```js
    const [{ isDragging }, drag] = useDrag({
       item: { type: `${color}` },
       canDrag: !forbidDrag,
       collect: (monitor) => ({
         isDragging: monitor.isDragging(),
       }),
     })
   ```

   

4. `didDrop`:是否被放置了

5. `getInitialClientOffset`:获取开始拖动时鼠标的距离视口的坐标
6. `getInitialSourceClientOffset`:获取开始拖动元素在屏幕中的距离视口的left和top
7. `getClientOffset`:获取当前拖动中鼠标距离视口的坐标
8. `getClientOffset`获取当前拖拽元素距离视口的left和top

