const { Schema } = require('mongoose');

const likeSchema = new Schema(
  {
    num: {
      type: Number,
      required: true,
      default: 0
    },
    username: {
        type: String,
        required: true
      },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = likeSchema;