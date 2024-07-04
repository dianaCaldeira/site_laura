import React, { useState } from 'react';
import './BlogCard.css';
import Rating from '../Rating/Rating';
import { Comment } from '../../Type';

interface BlogCardProps {
  id: number;
  title: string;
  content: React.ReactNode;
  imageUrl: string;
  comments: Comment[];
  ratings: number[];
  onCommentSubmit: (commentData: any) => void;
  onRatingSubmit: (rating: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  content,
  imageUrl,
  comments,
  ratings,
  onCommentSubmit,
  onRatingSubmit
}) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleFullContent = () => {
    setShowFullContent((prevState) => !prevState);
  };

  // Função para extrair texto do conteúdo React
  const extractTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractTextContent).join(' ');
    if (React.isValidElement(node)) {
      if ('children' in node.props) {
        return extractTextContent(node.props.children);
      }
    }
    return '';
  };

  const contentText = extractTextContent(content);
  const summary = contentText.slice(0, 200) + '...';

  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={imageUrl} alt={title} className="blog-card-image" />
      </div>
      <h2>{title}</h2>
      <div className="card-content">
        <div className="card-text">
          {showFullContent ? (
            <>
              {content}
              <button onClick={toggleFullContent} className="read-more-btn">Ler menos</button>
            </>
          ) : (
            <>
              <p>{summary}</p>
              <button onClick={toggleFullContent} className="read-more-btn">Ler mais</button>
            </>
          )}
        </div>
      </div>
      <Rating postId={id} ratings={ratings} onRatingSubmit={onRatingSubmit} />
      {/* Você pode adicionar um componente de comentários aqui se desejar */}
    </div>
  );
};

export default BlogCard;