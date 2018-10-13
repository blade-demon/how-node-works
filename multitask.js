const https = require("https");
const crypto = require("crypto");
const fs = require("fs");
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`HASH: `, Date.now() - start);
  });
}

function doRequest() {
  https
    .request("https://www.baidu.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("REQUEST: ", Date.now() - start);
      });
      res.on("error", err => {
        console.log(err);
      });
    })
    .end();
}

doRequest();

fs.readFile("multitasks.js", "utf8", () => {
  console.log("FS: ", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
doHash();
doHash();
