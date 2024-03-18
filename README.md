# @ckpack/base

## tsconfig

## eslint

## verify-commit

### 安装依赖

```shell
npm install simple-git-hooks @ckpack/verify-commit
```

## 修改`package.json`
```json
{
  "simple-git-hooks": {
    "commit-msg": "npx verify-commit"
  }
}
```
