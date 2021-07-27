import React from 'react';

const Comment = ({ comment }) => (
  <div className="card">
    <div>
      <span className="title">
        Comment Id
      </span>
      <span className="content">
        {comment.id}
      </span>
    </div>
    <div>
      <span className="title">
        Email
      </span>
      <span className="content">
        {comment.email}
      </span>
    </div>
    <div>
      <p className="title">Comment</p>
      <span className="content">
        {comment.body}
      </span>
    </div>
  </div>
);
export default Comment;
