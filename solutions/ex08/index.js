const http = require('http');
const port = process.env.PORT || 8080;
const requestHandler = (request, response) => {
  text = process.env.APPRES || "Hello dev/ops guys";
  console.log(request.url);
  response.end(text);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})
