const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to Tan World");
    res.end();
  }
  if (req.url === "/source-code") {
    res.write("Welcome to Tan source");
    res.end();
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Have a project or Want to Collaborate?</h1>");
    res.end();
  }
}); //one kind of  a event emitter

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listenning on PORT ${PORT}`);
});
