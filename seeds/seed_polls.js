const mongoose = require('mongoose');
const Poll = require('../api/models/Poll');
require('dotenv').config();

const { prompts, options } = require('./seedHelper');

mongoose.connect(process.env.MONGO_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Poll.deleteMany({}); //clearing the db before populating it
  for (let i = 0; i < prompts.length; i++) {
    const rand = Math.floor(Math.random() * 5) + 2;
    let newOptions = [];
    for (let j = 0; j < rand; j++) {
      newOptions.push({
        optionText: sample(options),
        voteCount: Math.floor(Math.random() * 5),
      });
    }
    const newPoll = new Poll({
      pollPrompt: prompts[i],
      pollOptions: newOptions,
    });
    await newPoll.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
