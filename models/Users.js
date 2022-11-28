const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
// require content for user
  }
  // virtual thoughts?
//   virtual friend count?
);


const User = model('user', userSchema);

module.exports = User;
