# reject的实现原理

```js
Promise.reject = function(arg){
  return Promise(function(resolve,reject){
    reject(arg)
  })
}
```
