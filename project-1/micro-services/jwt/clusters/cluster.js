const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

const nCpus = os.cpus().length;
app.get("/", (req, res) => {
  for (i = 0; i < 1e8; i++) {
    //large computaion 10 pow 9
  }
  res.send(`ok.. ${process.pid}`);
//   cluster.worker.kill();
});

//checks each process is master or not if not will listen to the port .else create child process and executes
if (cluster.isMaster) {
  for (let i = 0; i < nCpus; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} is died`);
    cluster.fork();
  });
} else {
  app.listen(3000, console.log(`app ${process.pid} is running at port 3000 `));
}

//usig parent or single process
// app.listen(3000,console.log(`app is running at port 3000 `));

//to run load test loadtest -n 1000 -c 100 http://localhost:3000
