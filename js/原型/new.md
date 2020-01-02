# new

## new 做了什么

```js
function A() {}
A.prototype.num = 3;
const a1 = new A();
```

1. 创建了一个新对象 ```o = new Object()```
2. 将```__proto__```指向A的原型 ```o.__proto__ = A.prototype```
3. 把构造函数A的```this```指向新创建的对象
4. 最会返回返回值，这里的返回值会有两种情况：
   * 如果构造函数没有返回值，返回值就是新创建的对象
   * 如果构造函数有返回值，返回值就是构造函数的返回值