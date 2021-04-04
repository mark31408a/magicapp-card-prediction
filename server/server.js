const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("start")
  // io.sockets.emit("gotourl", {text:"asd"});
  socket.on("setcard",(payload) => {
    console.log("send card")
    console.log(payload)
    io.sockets.emit("gotourl", payload);
  })
  
});

httpServer.listen(4000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4000/');