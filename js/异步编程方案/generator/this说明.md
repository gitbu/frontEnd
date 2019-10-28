# geerator中this的使用说明

## 返回的迭代器就是gererator函数的实例

```javascript
function* gen() {
  yield 3;
}
gen.prototype.eat = () => console.log('eat banner');

const iter = gen();
iter.eat();
```

## generator函数返回的是迭代器而不是this

```js
function* gen() {
  this.name = 'bap';
}
iter = gen();
console.log(iter.name)
```
