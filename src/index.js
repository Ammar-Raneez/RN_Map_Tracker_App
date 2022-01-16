const express = require('express');
const authRouter = require('./routes/auth');
require('./models/User');
require('./utils/database');

const app = express();

// parse the data before sending to routes
app.use(express.json());
app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hi there!');
});

app.listen(3000, () => console.log('Listening on port 3000'));
