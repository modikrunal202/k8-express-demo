const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send('You are on home page');
})

app.get('/exit', (req, res) => {
  res.send('Server stopped');
  process.exit(0);
})

app.listen(3000, () => {
  console.log('server running');
})