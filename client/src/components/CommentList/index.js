import React from "react";
import { Link } from "react-router-dom";

const CommentList = ({ comments }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Comments</span>
      </div>
      <div className="card-body">
        {comments &&
          comments.map((comment) => (
            <div className="pill mb-3" key={comment._id}>
              {comment.commentBody}
              <div className="comment mt-3 text-italic">
                Commented by{" "}
                <Link
                  to={`/profile/${comment.username}`}
                  style={{ fontWeight: 700 }}
                >
                  {comment.username} on {comment.createdAt}
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
