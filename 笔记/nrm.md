# nrm（Node Registry Manager）

`nrm`（Node Registry Manager）是一个用于管理 Node.js 包管理器（如 npm 和 yarn）源的工具。它允许你轻松切换不同的 npm 源，以便于在中国等地区更快速地下载和安装 npm 包。

## nrm 的主要功能

1. **切换源**：可以在多个 npm 源之间快速切换，例如 npm 官方源、淘宝源（cnpm）等。
2. **添加自定义源**：可以添加自定义的 npm 源，以便于使用特定的镜像。
3. **查看当前源**：可以查看当前使用的 npm 源。
4. **列出可用源**：可以查看当前支持的所有源。

## 安装 nrm

你可以通过 npm 安装 `nrm`。以下是安装命令：

npm install -g nrm

# 操作
1. 查看当前源：nrm current

2. 列出所有可用源：nrm ls

3. 切换源： 例如，切换到淘宝源：nrm use taobao

4. 添加自定义源：nrm add mysource https://my.custom.registry

5. 删除自定义源：nrm del mysource