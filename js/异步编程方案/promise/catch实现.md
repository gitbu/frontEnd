# Promise.catch 实现

```javascript
  Promise.prototype.catch = function(handleError) {
    return this.then(null, (err) => handleError(err))
  }
```