const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema (
    {
        text: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 150,
        },
        createdAt: {
            type: Date,
            default: Date.now,
          },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactions],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)
userSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
  const Thought = model('thoughts', thoughtSchema);
  
  module.exports = Thought;