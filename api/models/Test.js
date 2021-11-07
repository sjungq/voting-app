const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new mongoose.Schema({
  id: String,
  text: String,
});

module.exports = mongoose.model('Test', TestSchema);
