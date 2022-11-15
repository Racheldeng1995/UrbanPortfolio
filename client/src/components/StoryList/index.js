import React from 'react';
import { Link } from 'react-router-dom';

const StoryList = ({ stories, title }) => {
  if (!stories.length) {
    return <h3>No Stories Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-center mb-3">{title}</h3>
      <div className="flex-row justify-space-around">
        {stories &&
          stories.map(story => (
            <div key={story._id} className="col-3 card ml-1 mr-1 mb-2 mt-2 p-1">
              <div className="card-header p-1">
                <Link
                  to={`/profile/${story.username}`}
                  style={{ fontWeight: 700 }}
                  // className="text-light"
                >
                <div className="text-center">{story.username}</div>
                </Link>{' '}
                <h5 className="text-center">story posted on</h5>
                <h5 className="text-center">{story.createdAt}</h5>
              </div>
              <div className="card-body text-justify p-2">
                <Link to={`/story/${story._id}`}>
                  <p>{story.storyTitle}</p>
                  <div className="mb-0">
                    <p className="text-center">Comments: {story.commentCount}  Likes: {story.likes.length? (story.likes.length): (0) } </p>
                    <h6>Click to{' '}
                    {story.commentCount ? 'see' : 'start'} the discussion!</h6> 
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StoryList;
