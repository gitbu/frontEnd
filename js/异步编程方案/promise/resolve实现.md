# resolve的实现原理

```js
Promise.resolve = function(arg){
  return Promise(function(resolve,reject){
    resolve(arg)
  })
}
```
