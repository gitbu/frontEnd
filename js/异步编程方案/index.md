# 异步编程方案

## 回调方法

```javascript
  ajax(() => {
    ajax(() => {
      ajax(() => {
        ...
      })
    })
  })
```

特点： 层级太深
缺点：不易阅读->不易维护->容易制造Bug

## Promsie

```javascript
  Promise(() => {
    // 处理逻辑
  }).then().then().then()...
```

特点： 链式调用
缺点：需要用then连接起来

## Generator

```javascript
  let fs = require('fs')
  let co = require('co')
  function read(file) {
    return new Promise(function(resolve, reject) {
      fs.readFile(file, 'utf8', function(err, data) {
        if (err) reject(err)
        resolve(data)
      })
    })
  }
  function* r() {
    let r1 = yield read('./1.txt')
    let r2 = yield read(r1)
    let r3 = yield read(r2)
    console.log(r1)
    console.log(r2)
    console.log(r3)
  }
  co(r()).then(function(data) {
    console.log(data)
  })

```

特点： 将异步打平了
缺点：需要自己写执行器

## Async/await

```javascript
  async function() {
    const ret1 = await axios();
    const ret2 = await axios();
    const ret3 = await axios();
    ...
  }
```

特点： Generator + 自动执行器

优点：更加语义化，优雅
