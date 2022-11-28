const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
// require content for reaction
  }

);


const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;