![obsidian-to-yuque](https://socialify.git.ci/elliotxx/obsidian-to-yuque/image?description=1&font=Raleway&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto)

# Obsidian to Yuque

一个用于将 Obsidian 笔记发布到语雀的插件。

NOTE: 由于语雀已经不支持免费创建 token，所以插件不再支持免费使用。

## 功能特性

- ✨ 支持一键将当前笔记发布到语雀
- 🔑 支持配置语雀 Token 和知识库路径
- 🔗 发布后自动显示语雀文档链接
- 📝 保持 Markdown 格式不变

## 安装方法

### 从 Obsidian 插件市场安装

1. 打开 Obsidian 设置
2. 进入 `第三方插件` 
3. 确保安全模式已关闭
4. 点击 `浏览` 按钮
5. 搜索 "Obsidian to Yuque"
6. 点击安装

### 手动安装

1. 从 [Releases](https://github.com/elliotxx/obsidian-to-yuque/releases) 下载最新版本
2. 解压到你的 vault 的插件目录: `<vault>/.obsidian/plugins/obsidian-to-yuque`
3. 重新加载 Obsidian
4. 在设置中启用插件

## 配置说明

### 获取语雀 Token

1. 登录[语雀](https://www.yuque.com/)
2. 点击头像 -> 设置 -> Token
3. 点击 `新建 Token`
4. 填写名称，选择权限（至少需要 `读取、写入知识库` 权限）
5. 创建并复制生成的 Token

### 配置插件

1. 在 Obsidian 中打开设置
2. 找到 `Obsidian to Yuque` 插件设置
3. 填入以下信息：
   - 语雀 Token：刚才获取的 Token
   - 知识库路径：要发布到的知识库路径（格式：username/repo）

## 使用方法

1. 打开要发布的笔记
2. 使用以下任一方式发布：
   - 使用命令面板（Ctrl/Cmd + P），输入 "发布到语雀"
   - 使用快捷键（可在设置中自定义）

发布成功后会显示语雀文档链接。

## 开发
```bash
# 克隆项目
git clone https://github.com/elliotxx/obsidian-to-yuque.git
# 安装依赖
npm install
# 开发模式
npm run dev
# 构建
npm run build
```

## 问题反馈

如果你在使用过程中遇到任何问题，或者有功能建议，欢迎：

1. 提交 [Issue](https://github.com/elliotxx/obsidian-to-yuque/issues)
2. 提交 [Pull Request](https://github.com/elliotxx/obsidian-to-yuque/pulls)

## 许可证

[MIT License](LICENSE)