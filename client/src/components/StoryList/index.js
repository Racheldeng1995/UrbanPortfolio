import React from 'react';
import { Link } from 'react-router-dom';

const StoryList = ({ stories, title }) => {
  console.log(stories)
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
                <h4 className="text-center p-2">{story.storyTitle}</h4>
                <h5 className="text-center">story posted on</h5>
                <h5 className="text-center">{story.createdAt}</h5>
                <Link
                  to={`/profile/${story.username}`}
                  style={{ fontWeight: 700 }}
                  // className="text-light"
                >
                <h5 className="text-right pr-2 text-italic p-1 text-extralight">By {story.username}</h5>
                </Link>{' '}
              </div>
              <div className="card-body text-justify p-2">

                <Link to={`/story/${story._id}`}>
                  
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
