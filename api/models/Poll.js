const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new mongoose.Schema({
  ownerId: String,
  pollPrompt: {
    required: true,
    type: String,
  },
  pollOptions: {
    type: [
      {
        optionText: String,
        voteCount: Number,
      },
    ],
    validate: [minTwo, 'Need at least two poll options'],
  },
});

function minTwo(array) {
  return array.length > 1;
}
module.exports = mongoose.model('Poll', PollSchema);
