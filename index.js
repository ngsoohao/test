const http = require('http');
const fs = require('fs');

const PORT = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;
  let filePath;

  switch (url) {
    case '/':
      filePath = 'index.html';
      break;
    case '/about':
      filePath = 'about.html';
      break;
    case '/contact-me':
      filePath = 'contact-me.html';
      break;
    default:
      filePath = '404.html';
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(404);
      res.end('404 Page Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});