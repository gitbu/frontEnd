# promise的构造函数的实现

```javascript
(function(window,undefined){

  var PENDING = undefined, FULFILLED = 1, REJECTED = 2;
  
  var isFunction = function(obj){
    return 'function' === typeof obj;
  }
  var isArray = function(obj) {
      return Object.prototype.toString.call(obj) === "[object Array]";
  }
  var isThenable = function(obj){
      return obj && typeof obj['then'] == 'function';
  }
  
  var transition = function(status,value){
    var promise = this;
    if(promise._status !== PENDING) return;
    // 这里之所以用setTimeout，是为了保证then先执行
    setTimeout(function(){
      promise._status = status;
      publish.call(promise,value);
    });
  }
  var publish = function(val){
    var promise = this,
        fn,
        st = promise._status === FULFILLED,
        queue = promise[st ? '_resolves' : '_rejects'];
  
      while(fn = queue.shift()) {
          val = fn.call(promise, val) || val;
      }
      promise[st ? '_value' : '_reason'] = val;
      promise['_resolves'] = promise['_rejects'] = undefined;
  }
  
  var Promise = function(resolver){
    if (!isFunction(resolver))
        throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    if(!(this instanceof Promise)) return new Promise(resolver);
  
    var promise = this;
    promise._value;
    promise._reason;
    promise._status = PENDING;
    promise._resolves = [];
    promise._rejects = [];

    var resolve = function(value){
      transition.apply(promise,[FULFILLED].concat([value]));
    }
    var reject = function(reason){
      transition.apply(promise,[REJECTED].concat([reason]));
    }

    // 这就是为什么promise中抛出的错误不会中断程序的运行
    try {
      resolver(resolve,reject);
    } catch(err) {
      reject(err)
    }
  }
  
  window.Promise = Promise;
  
  })(window);
```
