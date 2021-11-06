//External imports
const next = require('next');
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //express middleware
  server.use(express.json());
  server.get('/api/test', (req, res) => {
    const testJson = { id: 0, text: 'Monica' };
    res.json(testJson);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
  });
});
