# Promise.all 实现

```javascript
  Promise.all = function(promises) {
    return new Promise((resolve, reject) => {
      let count = promises.length;
      let result = [];
      const hanldeReject = (err) => {
        reject(err)
      }

      const handleResolve = (res) => {
        count--;
        result.push(res);
        if (count === 0) {
          resolve(result)
        }
      }

      for(let i = 0, len = promises.length; i < len; i++) {
        promises[i].then(result => {
          handleResolve(result)
        }, err => {
          handleReject(err)
        })
      }
    })
  }
```
