/**
 * 测试单线程
 */

const crypto = require("crypto");

const start = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("6: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("7: ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("8: ", Date.now() - start);
});

/*
测试结果发现：
2: 1694
1: 1700
如果是单线程的话时间应该是
*/
