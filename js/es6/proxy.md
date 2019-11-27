# proxy

proxy在[阮一峰老师](https://es6.ruanyifeng.com/#docs/proxy)的es6中的proxy的章节已经讲得比较明白了，我这边也是从阮老师哪里学的proxy,下面是我在学习后总结出的一些需要注意的点：

> 如果目标对象上的属性设置了不可配置或不可写，get/set不生效

```js
// 没有设置过的
var obj = {};
var p1 = new Proxy(obj, {
	set(target, prop, value) {
		target[prop] = value;
	}
})
p1.name = 'xxx'
p1.name // 'xxx'

// 设置过的
var obj = {};
Object.defineProperty(obj, 'name', {
	value: 'xm',
	writable: false
})
var p1 = new Proxy(obj, {
	set(target, prop, value) {
		target[prop] = value;
	}
})

p1.name = 'xxx'
p1.name // "xm"
```



