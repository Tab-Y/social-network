const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please use a valid email."],    // validates email
    },
    thoughts: [{
      type: Schema.Types.ObjectId,        // gets associated thougts
      ref: "Thought",
    }],
    friends: [{
      type: Schema.Types.ObjectId,        // gets this users freinds
      ref: "User",
    }],
  },
  {
    toJSON: {
      virtuals: true,           // gets virtuals for user schema
    },
    id: false,
  },
);

userSchema.virtual("friendCount").get(function () {     // sets the virtual for friends count
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;
