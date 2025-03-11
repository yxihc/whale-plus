## **永久更改源**

**设置淘宝源**

```text
npm config set registry https://registry.npmmirror.com
```

**设置阿里云源**

```text
npm config set registry https://npm.aliyun.com
```

**设置腾讯云源**

```text
npm config set registry https://mirrors.cloud.tencent.com/npm/
```

**设置华为云源**

```text
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

**设置网易源**

```text
npm config set registry https://mirrors.163.com/npm/
```

**设置中科院大学开源镜像站**

```text
npm config set registry https://mirrors.ustc.edu.cn/npm/
```

**设置清华大学开源镜像站**

```text
npm config set registry https://mirrors.tuna.tsinghua.edu.cn/npm/
```

**恢复使用官方 npm 源**

```text
npm config set registry https://registry.npmjs.org
```

## **查看当前使用的源**

要查看您当前使用的是哪个源，可以运行

```text
npm config get registry
```

这将显示当前配置的源 URL。

## **使用 `.npmrc` 文件配置源**

您也可以在项目的根目录或您的用户目录中创建或修改 `.npmrc` 文件，直接添加或修改源设置

```text
registry=https://registry.npmmirror.com
```

这种方法适合在项目级别设置源，不影响全局配置。

## **使用 nrm 管理源**

```
nrm` 是一个 npm 源管理器，可以帮助您快速切换不同的源。首先，您需要安装 `nrm
npm install -g nrm
```

然后，您可以使用 `nrm` 来切换源

**列出所有可用的源**

```text
nrm ls
```

**切换到淘宝源**

```text
nrm use taobao
```

**切换回官方源**

```text
nrm use npm
```

