# hexo-theme-aero

[[English](README_en.md)|中文]

## 简介

一个Frutiger Aero风格的Hexo博客主题，灵感来自Windows Vista、Windows 7等的设计风格

演示网站：[ShinN's Blog](https://sh1nn.top)

![Demo](https://assets.sh1nn.top/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-01-27%20163408.png)

## 特性

- 支持响应式布局

- 支持代码高亮

  - 需在根目录`_config.yml`中增加：

  ```yaml
  highlight: 
    	enable: true
    	hljs: true
  ```

- 使用MathJax渲染LaTeX公式

  - 需在文章前加上`mathjax: enable`

- 音乐播放功能

- 使用PJAX优化加载

- 自定义主题颜色

  - 可在`source/css/_variables.scss`中更改主题颜色和壁纸


## 使用

建站参考[Hexo官方文档](https://hexo.io/zh-cn/docs/)

在博客根目录下运行：

```bash
git clone https://github.com/5h1nnN/hexo-theme-aero.git themes/aero
```

在博客根目录的`_config.yml`中进行主题配置

```yaml
# _config.yml
theme: aero

# 页面标题
title: ShinN's Blog

# 博客标题
subtitle: live happily.

# 签名
description: >
  The brain is wider than the sky.<br>
  For, put them side by side, <br>
  the one the other will contain.<br>
  With ease, and you beside.
```

进入`theme/aero`文件夹，在主题`_config.yml`中修改社交媒体链接、音乐播放等配置

## 依赖项

本主题需要安装以下插件：

```bash
# SCSS 渲染器
npm install hexo-renderer-sass --save

# Markdown 渲染器
npm uninstall hexo-renderer-marked
npm install hexo-renderer-markdown-it --save
```

## 其他

部分样式设计参考https://github.com/khang-nd/7.css
