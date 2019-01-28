# express 练手项目

## 环境

node v10.15.0

npm v6.5.0

```shell
express --view=ejs <name>
```

## 启动步骤

```shell
npm install
npm start
npm start
```

## 相关配置

- eslint

  ```shell
  npm install eslint --save-dev
  ```

- package.json

  ```json
    "scripts": {
      "push": "git pull && git add . && git commit -m 'add' && git push",
    },
  ```

## pm2 进程管理启动

```
npm install pm2 -g

pm2 start ./bin/www

pm2 stop ./bin/www

```
