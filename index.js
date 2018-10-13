process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require("cluster");
// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause index.js to be executed again.
  console.log(cluster.isMaster);
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {
  // I am a child, I'm going to act like a server and doing nothing else.
  console.log(cluster.isMaster);
  const express = require("express");
  const crypto = require("crypto");
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi, there!");
    });
  });

  app.get("/fast", (req, res) => {
    // doWork(5000);
    res.send("This will fast!");
  });

  app.listen(3000);
}
