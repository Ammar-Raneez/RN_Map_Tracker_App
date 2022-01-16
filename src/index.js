const express = require('express');
const app = express();
require('./utils/database');

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => console.log('Listening on port 3000'));
