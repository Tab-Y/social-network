const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {                     // as shown in assignment 26
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {                               // as shown in assignment 26
    toJSON: {
      getters: true,
    },
    id: false,
  },
);


module.exports = reactionSchema;