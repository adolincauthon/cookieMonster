const express = require('express');
const dotenv = require('dotenv').config();

const cookieRoutes = require('./routes/cookieRoutes');
const domainRoutes = require('./routes/domainRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

//main api endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'This endpoint will contain the list of callable endpoints',
  });
});

app.use('/cookies', cookieRoutes);
app.use('/domains', domainRoutes);
app.use('/user', userRoutes);

console.log(`Listening on Port: ${PORT}`);
app.listen(PORT);
