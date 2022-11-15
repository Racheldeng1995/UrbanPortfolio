import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_STORY = gql`
  mutation addStory($storyTitle: String!, $storyText: String!) {
    addStory(storyTitle: $storyTitle, storyText: $storyText) {
      _id
      storyTitle
      storyText
      createdAt
      username
      commentCount
      comments {
        _id
      }
      likeCount
      likes {
        _id
        num
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($storyId: ID!, $commentBody: String!) {
    addComment(storyId: $storyId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_LIKE = gql`
  mutation addLike($storyId: ID!, $num: Int!) {
    addLike(storyId: $storyId, num: $num) {
      _id
      likeCount
      likes {
        _id
        num
        username
      }
    }
  }
`;

export const REMOVE_LIKE = gql`
  mutation removeLike($storyId: ID!, $num: Int!) {
    removeLike(storyId: $storyId, num: $num) {
      _id
      likes {
        _id
        num
        username
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(id: $id) {
      _id
      username
      friends {
        _id
        username
      }
    }
  }
`;
