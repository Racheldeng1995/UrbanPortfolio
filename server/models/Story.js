const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const likeSchema = require('./Like');
const dateFormat = require('../utils/dateFormat');

const storySchema = new Schema(
  {
    storyTitle: {
      type: String,
      required: 'You need to leave a title!',
      minlength: 1,
      maxlength: 12
    },

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
    comments: [commentSchema],
    likes: [likeSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

storySchema.virtual('commentCount').get(function() {
  return this.comments.length;
})

storySchema.virtual('likeCount').get(function() {
  return this.likes.length ;
})

;

const Story = model('Story', storySchema);

module.exports = Story;

