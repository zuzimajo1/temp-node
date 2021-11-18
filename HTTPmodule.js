const http = require("http"); //http module for creating web server

const server = http.createServer((req, res) => {
  //req for request and res for result

  try {
    if (req.url === "/") {
      res.end("This is the home page");
    }
    if (req.url === "/about") {
      res.end("This is the about page");
    }

    res.end(`
      <h1>Cannot find the page you are looking for</h1>
      <a href='/'>Back to home</a>
  `);
  } catch (error) {
    res.end(error);
  }
});

server.listen(5500); //created web server at localhost = 5000
