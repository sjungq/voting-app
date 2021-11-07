//External imports
const next = require('next');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';

//internal imports
const Test = require('./api/models/Test');

const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.connect(process.env.MONGO_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

app.prepare().then(() => {
  const server = express();

  //express middleware
  server.use(express.json());

  //custom server stuff
  server.get('/api/test', async (req, res) => {
    const testDoc = new Test({ id: 0, text: 'Monica' });
    await testDoc.save();
    res.json(testDoc);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
  });
});
