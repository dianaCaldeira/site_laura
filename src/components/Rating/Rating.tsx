import React, { useState } from 'react';
import './Rating.css';

interface RatingProps {
  ratings: number[];
  onRatingSubmit: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ ratings, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);

  const averageRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRatingSubmit(rating);
    setRating(0);
  };

  return (
    <div className="rating">
      <h3>Avalie este artigo:</h3>
      <p>Avaliação média: {averageRating.toFixed(1)}</p>
      <form onSubmit={handleSubmit}>
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'selected' : ''}`}
              onClick={() => setRating(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Rating;