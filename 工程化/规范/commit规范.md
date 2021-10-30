# commit管理

## commit message 书写和规范

Commitizen：是一个写格式化message的工具

```bash
npm i -D commitizea
// 使其支持angular的commit的message格式
commitizen init cz-conventional-changelog --save --save-exact
```



## changelog

conventional-changelog

```bash
npm i -g conventional-changelog-cli
conventional-changelog -p angular -i CHANGELOG.md -s
```



## commit message 校验

commitlint

husky

```bash
npm i -D @commitlint/cli
npm i -D @commitlint/config-conventional
npm i -D husky



```

package.json

```bash
"husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
    }
  }
```



创建文件：.commitlintrc.js或则.commitlint.config.js

```bash
module.exports = {extends: ['@commitlint/config-conventional']};
```



# lint-staged

作用：过滤git代码暂存区文件的工具

安装：要配合`husky`使用

```js
npm i husky lint-staged
```

配置说明：

有两种方式配置：

1. 写在`package.json`文件中

   ```bash
   {
   	"lint-staged": {
   		"**/*.ts": [
   			"elint --fix",
   			"git add"
   		]
   	}
   }
   ```

2. 写配置文件: `.lintstaged`、`lint-staged.config.js`

i