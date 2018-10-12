# Nodejs 源码学习

这个 Repo 是为了在研究 nodejs 源码的过程中，更好地理解其内部工作原理，我会写一些 demo 来帮助自己来巩固和验证自己的理解。

```sh
  yarn install
  yarn run node-test
```

## NodeJs 内部结构

我们在 js 文件然后在终端执行的 js 代码。通过两个模块帮助我们执行 js 代码：**V8**和**libuv**

![enter image description here](images/node-1-1.jpg)

- V8 [项目地址](https://github.com/v8/v8)

V8 是 Google 用 C++和 JavaScript 开发的开源的 JavaScript 引擎,，用于在浏览器环境之外执行 JavaScript 代码。

- libuv [项目地址](https://github.com/libuv/libuv)

  libuv 是一个主要由 C/C++ 编写的开源工程，它可以让 node 直接调用系统底层的服务：包含文件系统，网络服务，还有一些并发操作。

拥有了 node，我们就可以不用写 C++代码和 V8，libuv 进行交互了，我们直接写 js 代码就可以直接和使唤这两个大兄弟干活了～

![enter image description here](images/node-1-2.jpg)

## 线程基础

## Node 事件循环

## Node 是单线程吗？
