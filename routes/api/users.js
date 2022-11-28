const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
// require content for user
  }
);


const User = model('user', userSchema);

module.exports = User;
