# package配置说明

### browser，module，main 字段优先级

> browser = browser+mjs > module > browser+cjs > main

```json
  "main": "lib/index.js",  // main 
  "module": "lib/index.mjs", // module

  // browser 可定义成和 main/module 字段一一对应的映射对象，也可以直接定义为字符串
  "browser": {
    "./lib/index.js": "./lib/index.browser.js", // browser+cjs
    // 最终结果
    "./lib/index.mjs": "./lib/index.browser.mjs"  // browser+mjs 
  },

  // "browser": "./lib/index.browser.js" // browser
```

