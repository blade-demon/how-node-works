/**
 * 测试单线程
 */

// 修改libuv线程池的大小
// process.env.UV_THREADPOOL_SIZE = 8;

const crypto = require("crypto");

const start = Date.now();

for (let i = 0; i < 4; i++) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`${i}:`, Date.now() - start);
  });
}
// 所有的“FS”模块函数，一些crypto的相关函数都是用'fs'module来写的，这也和操作系统有关。
//
