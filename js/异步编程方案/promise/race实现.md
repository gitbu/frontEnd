# Promise.race实现

```javascript
  Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
      for(let i = 0, len = promises.length; i < len; i++) {
        promises[i].then(result => {
          resolve(result)
        }, err => {
          reject(err)
        })
      }
    })
  }
```
