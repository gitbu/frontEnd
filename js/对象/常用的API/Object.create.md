# Object.create

**Object.create()**方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

## 语法

```
Object.create(proto[, propertiesObject])
```

### 参数

- `proto`

  新创建对象的原型对象。

- `propertiesObject`

  可选。如果没有指定为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)，则是要添加到新创建对象的不可枚举（默认）属性（**即其自身定义的属性，而不是其原型链上的枚举属性**）对象的属性描述符以及相应的属性名称。这些属性对应[`Object.defineProperties()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)的第二个参数。



## Object.create 实现原理

```js
 Object.create = function (obj, properties) {
    function F() {}
    F.prototype = obj;
    const r = new F();
    Object.defineProperties(r, properties);
    
    return r;
};
```

