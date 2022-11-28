const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
// require content for thought
  }

);


const Thought = model('thought', thoughtSchema);

module.exports = Thought;
