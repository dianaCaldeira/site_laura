import React, { useState } from 'react';
import './BlogCard.css';
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

  const contentString = content ? (content as React.ReactElement).props.children.map((child: React.ReactNode) => {
    if (typeof child === 'string') return child;
    if (React.isValidElement(child) && child.props.children) return child.props.children;
    return '';
  }).join(' ') : '';

  const summary = contentString.slice(0, 300) + '...';

  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={imageUrl} alt={title} className="blog-card-image" />
      </div>
      <h2>{title}</h2>
      <div className="card-content">
        <div className="card-text">
          {showFullContent ? content : <p>{summary}</p>}
          <button onClick={toggleFullContent} className="read-more-btn">
            {showFullContent ? 'Ler menos' : 'Ler mais'}
          </button>
        </div>
      </div>
      <Rating ratings={ratings} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default BlogCard;