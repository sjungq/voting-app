//External imports
const express = require('express');
require('dotenv').config();

const app = express();

//express middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server started on ${process.env.EXPRESS_PORT}`);
});
