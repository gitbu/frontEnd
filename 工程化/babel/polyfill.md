# polyfill

## 配置`useBuiltsIns`方式

### useBuiltIns: false

```js
// webpack的配置
module.exports = {
  entry: ["@babel/polyfill"]
}
```

**缺点：**

1. 所有的api都会打包，大小大概`100kb`
2. 全局污染

### useBuiltIns: entry

```js
// babel.config.js的配置
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

**优点：**

1.根据浏览器配置筛选打包

**缺点：**

1. 包的的体积还是会很大
2. 全局污染

### useBuiltIns: usage

```js
// babel.config.js的配置
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

**优点：**

1. 按需加载
2. 根据浏览器配置筛选打包

**缺点：**

1. 全局污染

### `transform-runtime`方式

```js
module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
```

**特点：** 这种方式优先级是最高的，而且会忽略浏览器的配置

**优点**

1. 按需打包
2. 沙箱隔离