import React from "react";
import { useParams } from "react-router-dom";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import Like from "../components/Like";
import "./SingleStory.css";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_STORY } from "../utils/queries";
import { QUERY_ME_BASIC } from "../utils/queries";

const SingleStory = (props) => {
  const { id: storyId } = useParams();

  const { loading, data } = useQuery(QUERY_STORY, {
    variables: { id: storyId },
  });

  console.log(
    useQuery(QUERY_STORY, {
      variables: { id: storyId },
    })
  );

  const { data: userData } = useQuery(QUERY_ME_BASIC);

  console.log(data);
  const story = data?.story || {};
  // console.log(story.likeCount)
  // console.log(story)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div class="story-container">
      <div class="card mb-3">
        <p className="">
          <span style={{ fontWeight: 700 }} className="text-light">
            {story.username}
          </span>{" "}
          Story posted on {story.createdAt}
        </p>

        <div className="bar">
          <div class="emptybar">{story.storyTitle}</div>
          <div class="filledbar">{story.storyText}</div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>

      <div className="mb-3">
        {Auth.loggedIn() ? (
          <></>
        ) : (
          <>
            <p className="dgreen text-italic text-right">
              Login to share your stories and make friends!
            </p>
          </>
        )}

        {Auth.loggedIn() && (
          <Like storyId={story._id} username={userData.me.username} />
        )}
      </div>

      {story.commentCount > 0 && <CommentList comments={story.comments} />}

      {Auth.loggedIn() && <CommentForm storyId={story._id} />}
    </div>
  );
};

export default SingleStory;
