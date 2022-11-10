const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const storySchema = new Schema(
  {
    storyText: {
      type: String,
      required: 'You need to leave a story!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

storySchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Story = model('Story', storySchema);

module.exports = Story;

