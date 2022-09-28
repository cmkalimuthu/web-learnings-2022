const http = require("http");
const service = require("./service");
const today = service.dateFun();

http
  .createServer((req, res) => {
    if (req.url.includes("/welcome/")) {
      const name = req.url.toString().split("/").at(2);
      const message = `<h1> Hey ${
        name ? name : "chief"
      } Today is : ${today} </h1>`;

      res.writeHead(200, { "content-type": "text/html" });
      res.write(message);
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("Sorry Page Not Found !");
    }

    res.end();
  })
  .listen(8080);
