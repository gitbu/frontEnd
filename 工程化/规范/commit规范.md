# commit管理

## commit message 书写和规范

Commitizen：

cz-conventional-changelog

```bash
npm i -D commitizen
commitizen init cz-conventional-changelog --save --save-exact
```



## changelog

conventional-changelog

```bash
npm i -g conventional-changelog
conventional-changelog -p angular -i CHANGELOG.md -s
```



## commit message 校验

commitlint

husky

```bash
npm i -D commitlint
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



