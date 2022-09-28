const express = require("express");
const { fork } = require("child_process");
const app = express();

app.get("/one", (req, res) => {
  getComputation();
  res.send("ok..one");

  //  loadtest -n 100 -c 10 http://localhost:3000/one
  //  Completed requests:  100
  //  Total errors:        0
  //  INFO Total time:          4.4753674 s
  //  Requests per second: 22
  //  INFO Mean latency:        425 ms

  //ctr shift l to select multiple line matching ones

  //  Completed requests:  100
  //  Total errors:        0
  //  Total time:          8.1762187 s
  //  Requests per second: 12
  //  Mean latency:        778.5 ms
});

app.get("/two", async (req, res) => {
  await getComputationAsync();
  res.send("ok..two");
  //  Completed requests:  100
  //  INFO Total errors:        0
  //  Total time:          4.9321199 s
  //  Requests per second: 20
  //  Mean latency:        470.5 ms

  //  Completed requests:  100
  //  Total errors:        0
  //  Total time:          8.0911426 s
  //  Requests per second: 12
  //  Mean latency:        770.8 ms
});

app.get("/three", (req, res) => {
  const child = fork("clusters/bigTask.js");
  child.send("start");
  child.on("message", (sum) => {
    // console.log(sum)
  });
  res.send("ok.. three");
  //without sum operation
  //  Completed requests:  100
  //  INFO Total errors:        0
  //  Total time:          7.1646309 s
  //  Requests per second: 14
  //  Mean latency:        453.8 ms

  //  INFO Completed requests:  100
  //  INFO Total errors:        0
  //  INFO Total time:          1.8123227000000002 s
  //  INFO Requests per second: 55
  //  INFO Mean latency:        173.6 ms
});

//sync
function getComputation() {
  let sum = 0;
  for (let i = 0; i < 1e8; i++) {
    //some large computation
    sum += 1;
  }
  return sum;
}

//async
function getComputationAsync() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
      //some large computation
      sum += 1;
    }
    resolve(sum);
  });
}

app.listen(3000, console.log("app is running in port 3000"));
