import { gql } from '@apollo/client';

export const QUERY_STORIES = gql`
  query stories($username: String) {
    stories(username: $username) {
      _id
      storyTitle
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
      likeCount
      likes {
        _id
        num
        username
      }
    }
  }
`;

export const QUERY_STORY = gql`
  query story($id: ID!) {
    story(_id: $id) {
      _id
      storyTitle
      storyText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
      likeCount
      likes {
        _id
        num
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      stories {
        _id
        storyTitle
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
        likeCount
        likes {
          _id
          num
          username
        }
      }
      friends {
        _id
        username
      }
    }
}
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      stories {
        _id
        storyTitle
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
        likeCount
        likes {
          _id
          num
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
