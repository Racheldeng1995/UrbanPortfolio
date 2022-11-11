const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    stories: [Story]
    friends: [User]
  }

  type Story {
    _id: ID
    storyTitle: String
    storyText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
    likeCount: Int
    likes: [Like]

  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Like {
    _id: ID
    num: Int
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    stories(username: String): [Story]
    story(_id: ID!): Story
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addStory(storyTitle: String!, storyText: String!): Story
    addComment(storyId: ID!, commentBody: String!): Story
    addFriend(friendId: ID!): User
    addLike(storyId: ID!, num: Int!): Story
    removeLike(storyId: ID!, num: Int!): Story
  }
`;

module.exports = typeDefs;
