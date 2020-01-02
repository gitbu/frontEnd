# instanceOf 的实现原理

```js
instanceof (A,B) = {
    varL = A.__proto__;
    varR = B.prototype;
    if(L === R) {
        // A的内部属性 __proto__ 指向 B 的原型对象
        return true;
    }
    return false;
}
```

