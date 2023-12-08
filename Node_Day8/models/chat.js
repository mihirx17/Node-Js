const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
    maxLength: 50,
  },
  to: {
    type: String,
    required: true,
    maxLength: 60,
  },
  message: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
