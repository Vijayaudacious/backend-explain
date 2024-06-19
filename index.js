const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello world ");
});
console.log("hello don");
server.listen("4000");
