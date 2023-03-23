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
        reactions: {},
    }
)