import React, { useState } from 'react';
import './BlogCard.css';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';
import Rating from '../Rating/Rating';

interface Comment {
  id: string;
  name: string;
  comment: string;
}

interface BlogCardProps {
  title: string;
  content: React.ReactNode;
  imageUrl: string;
  comments: Comment[];
  onCommentSubmit: (commentData: any) => void;
  ratings: number[];
  onRatingSubmit: (rating: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  content,
  imageUrl,
  comments,
  onCommentSubmit,
  ratings,
  onRatingSubmit,
}) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleFullContent = () => {
    setShowFullContent((prevState) => !prevState);
  };

  const contentString = content ? content.toString() : '';
  const summary = contentString.slice(0, 200) + '...';

  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={imageUrl} alt={title} className="blog-card-image" />
      </div>
      <h2>{title}</h2>
      <div className="card-content">
        <div className="card-text">
          {showFullContent ? (
            content
          ) : (
            <>
              {summary}
              <button onClick={toggleFullContent}>Ler mais</button>
            </>
          )}
        </div>
      </div>
      <Rating ratings={ratings} onRatingSubmit={onRatingSubmit} />
      <CommentForm onSubmit={onCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
};

export default BlogCard;
