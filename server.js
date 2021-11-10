//External imports
const next = require('next');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';

//Mongoose Schemas
const Poll = require('./api/models/Poll');

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
    const p = await Poll.find({});
    res.json({ data: p });
  });

  server.post('/api/create', async (req, res) => {
    const newPoll = new Poll({
      pollPrompt: req.body.body.pollPrompt,
      pollOptions: req.body.body.pollOptions,
    });
    await newPoll.save();
    res.json(newPoll._id);
  });

  server.get('/api/poll', async (req, res) => {
    if (req.query.postId !== 'undefined') {
      const foundPoll = await Poll.findById(req.query.postId);
      res.json({ data: foundPoll });
      //app.render(req, res, '/poll', { postId: req.params.postId });
    } else {
      app.render(req, res, '/');
    }
  });

  // server.get('/poll/:postId', async (req, res) => {
  //   const foundPoll = await Poll.findById(req.query.postId);
  //   app.render(req, res, '/poll', { poll: foundPoll });
  // });
  // server.get('/poll', async (req, res) => {
  //   const foundPoll = await Poll.findById(req.query.postId);
  //   app.render(req, res, '/poll', { postId: req.params.postId });
  // });
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, () => {
    console.log(`Server started on ${process.env.PORT}`);
  });
});
