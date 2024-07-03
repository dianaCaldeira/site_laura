import React from 'react';
import './CommentList.css';

interface Comment {
  id: string;
  name: string;
  comment: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="comment-list">
      <h3>Comentários:</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p className="comment-name">{comment.name}</p>
          <p className="comment-text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;