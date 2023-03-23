const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'thoughts',
            },
          ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'users',
            },
          ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
)

