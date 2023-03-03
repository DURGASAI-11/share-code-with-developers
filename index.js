const http = require("http");

const server = http.createServer((req, res, err) => {
  if (err) {
    console.log("dont know what is the error you have to find it ");
  }
  if (req.url === "/") {
    res.end("welcome to the home page");
  }
  if (req.url === "/about") {
    res.end("Here is all about us ");
  }
  res.end(`<h1>Oops!</h1>
  <p> we cant seem to find the page you are looking for </p>
  <a href="/">back home`);
});

server.listen(5000, () => {
  console.log("hi i am listening to the 5000 port");
});
