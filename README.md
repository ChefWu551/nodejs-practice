# nodejs学习笔记

## 1. node.js简介

> 基于v8解释器的运行引擎，本身是堆一些内置的API（fs/path/http/js内置对象/queryString等）使用，通过待执行的javascript代码，解释成对应的服务端提供服务

- 浏览器是js的前端运行环境
- nodejs是js的后端运行环境
- nodejs中无法调用DOW和BOM等浏览器内置API(ajax)

### 1.1. nodejs 可以做什么

> 作为一个js的运行环境，仅仅提供了基础的功能和api，然而，基于nodejs提供的这些基础，很多强大的工具和框架

- 基于Express框架，可以快速构建web应用
- 基于Electron框架，可以构建跨平台桌面应用
- 基于restify框架，可以快速构建API接口项目
- 读写和操作数据库，创建使用的命令行工具辅助前端开发

### 1.2. 学习重点

- js基础语法
- nodejs内置API模块(fs\path\http)
- 第三方api模块（express\mysql）

### 1.3. nodejs环境安装

- LTS长期稳定版，追求稳定性的企业级项目

### 1.4. nodejs执行js脚本文件

- 创建js文件（console.log("print")）;
- 打开终端，输入：node /path/to/xxx.js

## 2. nodejs入门学习

### 2.1. fs文件系统模块

- fs.readFile() 方法，用来读取指定文件中的内容
- fs.writeFile()方法，可以用来指定文件中写入

```const a = 
const fs = require("fs"); // 引入fs模块
fs.readFile('path/to/file', 'utf-8', function(err, data) {})
```

- nodejs相对路径和绝对路径

  ```
  path>of>excuse> node xx.js
  // 如果xx.js引用了其他文件，且用的是相对目录，则对应的绝对路径是当前执行node所在的文件夹的路径，且拼接js文件指向的文件路径
  // 解决相对路径导致文件找不到问题，使用__dirname变量，代表文件所属目录
  console.log(__dirname)
  ```

### 2.2. path模块

- path.join() // 路径拼接

- Path.baseName() // 获取文件路径的文件名

  例如： /a/b/c.html 通过baseName可以获取c.html

  使用 path.baseName(path, '.html') 可以直接返回文件名称 c

- Path.extname() // 获取文件拓展名