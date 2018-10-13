process.env.UV_THREADPOOL_SIZE = 1;

// I am a child, I'm going to act like a server and doing nothing else.
// console.log(cluster.isMaster);
const express = require("express");
const crypto = require("crypto");
const Worker = require("webworker-threads").Worker;
const app = express();

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  // crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  // res.send("Hi, there!");
  // });
  const worker = new Worker(function() {
    // res.send("Hi, there!");
    this.onmessage = function() {
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      postMessage(counter);
    };
  });

  worker.onmessage = function(myCounter) {
    console.log(myCounter.data);
    res.json(myCounter.data);
  };

  worker.postMessage();
});

app.get("/fast", (req, res) => {
  // doWork(5000);
  res.send("This will fast!");
});

app.listen(3000);
