# extends 的实现

```js
function inherits(subClass, superClass) {
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, configurable: true, writable: true}
    });
    Object.setPrototypeOf(subClass.__proto__, superClass);
}
```

