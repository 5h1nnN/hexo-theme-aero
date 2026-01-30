# hexo-theme-aero

[English | [中文](README.md)]

## Introduction

A Frutiger Aero style Hexo blog theme, inspired by the design aesthetics of Windows Vista and Windows 7.

Demo Site: [ShinN's Blog](https://sh1nn.top)

![Demo](https://assets.sh1nn.top/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-01-27%20163408.png)

## Features

- Supports responsive layout.

- Supports code highlighting.

  - In the `_config.yml` file located in the root directory, add：

    ```yaml
    highlight: 
      	enable: true
      	hljs: true
    ```

- Renders LaTeX equations using MathJax.
  - Requires adding `mathjax: enable` to the post front-matter.

- Music player functionality.

- Uses PJAX for optimized loading.

- Customizable theme colors.
  - Theme colors and wallpaper can be modified in `source/css/_variables.scss`.

## Usage

[Hexo Docs](https://hexo.io/docs/)

Run the following command in the root directory of your blog:

```bash
git clone https://github.com/5h1nnN/hexo-theme-aero.git themes/aero
```

Configure the theme in the `_config.yml` file located in your blog's root directory:

```yaml
# _config.yml
theme: aero

# Page Title
title: ShinN's Blog

# Blog Title
subtitle: live happily.

# Description / Signature
description: >
  The brain is wider than the sky.<br>
  For, put them side by side, <br>
  the one the other will contain.<br>
  With ease, and you beside.
```

Navigate to the `themes/aero` folder and modify the theme's `_config.yml` to configure social media links, music playback settings, etc.

## Dependencies

This theme requires the following plugins to be installed:

```bash
# SCSS Renderer
npm install hexo-renderer-sass --save

# Markdown Renderer
npm uninstall hexo-renderer-marked
npm install hexo-renderer-markdown-it --save
```

## Credits

Some style designs are referenced from https://github.com/khang-nd/7.css