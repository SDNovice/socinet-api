const { Schema, model } = require('mongoose');
const thoughtSchema = new Schema(
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
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
  const Thought = model('thoughts', thoughtSchema);
  
  module.exports = Thought;