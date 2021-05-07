const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('This is the home page');
})

server.get('/about', (req, res) => {
  res.send('This is the about page');
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
