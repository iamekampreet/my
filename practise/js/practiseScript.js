const server = require("http").createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write(
    '<form method="POST"><input type="text" name="placeholder"><button type="submit">Submit</button></form>'
  );

  req.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  res.end();
});

server.listen(5000, () => {
  console.log("Server is running");
});
