# git

##远程仓库

**添加远程到本地**

```bash
git remote add local buaiping@192.168.5.107:/Users/buaiping/robot.git
```

**将一个本地仓库推到远程仓库**

```bash
git push -u origin master
```



**在本地搭建一个远程仓库**

第一步：创建远程仓库

```bash
git init --bare demo.git
```

第二步：修改权限

```bash
chmod -R 777 demo.git
```

第三步：把提开发者公钥放到复制到本地

```bash
cd ~/.ssh
touch authorized_keys
echo >> "这里放置公钥" authorized_keys
```

*注意*：公钥在`~/.ssh/id_rsa.pub`中，如果没有，执行`ssh-keygen`



