# Dom 元素尺寸和位置

## Dom 元素的尺寸

### offsetWidth

offsetWidth = border + padding + width

### clientWidth

clientWidth = padding + width

### scrollWidth

获取对象的滚动宽度

### scrollTop

这个元素的**内容顶部**（卷起来的）到它的视口可见内容（的顶部）的距离的度量



## 元素位置

### getBoundingClientRect

元素的大小及其相对于视口的位置。

### offsetLeft和offsetTop

是指元素相对于其offsetParent指定的坐标来说

###元素距离文档的高度

> h = document.documentElement.scrollTop + el.getBoudingClientRect().top