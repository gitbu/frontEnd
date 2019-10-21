# Promise.then实现

```javascript
  Promise.prototype.then = function(onFullfiled, onRejected) {
    var promise = this;
    // 每次返回一个promise，保证是可thenable的
    return Promise(function(resolve,reject){
        function callback(value){
          var ret = isFunction(onFulfilled) && onFulfilled(value) || value;
          if(isThenable(ret)){
            ret.then(function(value){
               resolve(value);
            },function(reason){
               reject(reason);
            });
          }else{
            resolve(ret);
          }
        }
        function errback(reason){
          reason = isFunction(onRejected) && onRejected(reason) || reason;
          reject(reason);
        }
        if(promise._status === PENDING){
          promise._resolves.push(callback);
          promise._rejects.push(errback);
        }else if(promise._status === FULFILLED){ // 状态改变后的then操作，立刻执行
          callback(promise._value);
        }else if(promise._status === REJECTED){
          errback(promise._reason);
        }
    });
  }
```
