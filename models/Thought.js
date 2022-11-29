const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      type: [reactionSchema],     // gets array of reactions
    },
  },
  {
    toJSON: {
      virtuals: true,           // gets virtuals for thought schema
    },
    id: false,
  },
);

thoughtSchema.virtual("reactionCount").get(function () {     // sets the virtual for reactions count
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
