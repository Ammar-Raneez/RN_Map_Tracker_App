const express = require('express');
require('./models/User');
require('./utils/database');
const authRouter = require('./routes/auth');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

// parse the data before sending to routes
app.use(express.json());
app.use(authRouter);

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => console.log('Listening on port 3000'));
