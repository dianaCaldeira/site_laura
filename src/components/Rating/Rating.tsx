import React, { useState } from 'react';
import './Rating.css';

interface RatingProps {
  postId: number;
  ratings: number[];
  onRatingSubmit: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ postId, ratings, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const averageRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;

  const handleRatingSubmit = (selectedRating: number) => {
    onRatingSubmit(selectedRating);
    setRating(0);
  };

  return (
    <div className="rating">
      <h3>Avalie este artigo:</h3>
      <p>Avaliação média: {averageRating.toFixed(1)}</p>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? 'filled' : ''}`}
            onClick={() => handleRatingSubmit(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;