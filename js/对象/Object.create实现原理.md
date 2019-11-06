# Object.create 实现原理

```js
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
```