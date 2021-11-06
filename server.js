//External imports
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

//express middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.get('/api/test', (req, res) => {
  const testJson = { id: 0, text: 'Monica' };
  res.json(testJson);
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(process.env.EXPRESS_PORT, () => {
  console.log(`Server started on ${process.env.EXPRESS_PORT}`);
});
