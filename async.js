const https = require("https");

const start = Date.now();

const doRequest = () => {
  https
    .request("https://www.baidu.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
      res.on("error", err => {
        console.log(err);
      });
    })
    .end();
};

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// https请求并不是直接由node来进行执行，而是有libuv代理了这些请求。
// node的所有标准库中，几乎所有的网络相关操作都是由底层的操作系统完成的。
// 系统的异步操作都在’pendingOSTasks‘数组中。
