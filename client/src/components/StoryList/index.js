import React from 'react';
import { Link } from 'react-router-dom';

const StoryList = ({ stories, title }) => {
  if (!stories.length) {
    return <h3>No Stories Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-center mb-3">{title}</h3>
      {stories &&
        stories.map(story => (
          <div key={story._id} className="card mb-4">
            <p className="card-header">
              <Link
                to={`/profile/${story.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {story.username}
              </Link>{' '}
              story posted on {story.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/story/${story._id}`}>
                <p>{story.storyTitle}</p>
                <p className="mb-0">
                  Comments: {story.commentCount}  Likes: {story.likes.length? (story.likes.length): (0) } || Click to{' '}
                  {story.commentCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default StoryList;
