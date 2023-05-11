const express = require('express');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.get('/status', (req, res) => res.status(200).json({ message: 'On fire!' }));
app.use('/user', userRouter);
app.use('/login', loginRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
