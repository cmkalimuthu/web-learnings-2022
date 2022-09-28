const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
var path = require("path");

app.get("/", (req, res) => {
  var options = {
    root: path.join(__dirname),
  };
  res.sendFile("index.html", options, (err) => {
    err ? console.log("error", err) : console.log("file sent");
  });
});

var users = [];
io.on("connection", (socket) => {
  console.log("connect successfull");
  socket.on("setUserName", (userName) => {
    if (users.indexOf(userName) == -1) {
      users.push(userName);
      socket.emit("userSet", { username: userName });
    } else {
      socket.emit(
        "userExist",
        userName + "is already taken .please choose other name !"
      );
    }
  });

  socket.on('msg',(data)=>{
    io.sockets.emit('newMsg',data)
  })
});

app.listen(3000,()=>{
    console.log('listening to port localhost:3000\\')
});
