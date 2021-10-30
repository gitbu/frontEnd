# lint

统一编码规范的目的：

1. 增强代码的可读性，可读性好了，人的心情就好了，人的心情好了，效率自然就高了



## eslint

解决了什么问题：

 	1. 代码质量的问题： 就是有可能产生bug，如：===而不是==、不建议写全局变量...
 	2. 编码风格的问题：实际就是代码美观的问题，如：每行不得超过100行，用单引号...



## prettier

prettier解决了什么问题：

代码风格的问题



为什么要用prettier,而不是`airbnb`、`standard`

因为`prettier`更加美观



prettier怎么结合eslint使用

### `lint-staged`使用

说明：只对修改过的文件进行检测

安装：

```bash
npm i -D lint-staged
```

package.json配置：

```bash
"husky": {
	"hooks": {
		"pre-commit": "lint-staged"
	}
},

"lint-staged": {
	"**/*.ts": [
		"eslint --fix"
	]
}
```

