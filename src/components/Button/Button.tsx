import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
  to?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ to, text, onClick }) => {
  if (to) {
    return (
      <Link to={to} className="button">
        {text}
      </Link>
    );
  } else {
    return (
      <button className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
};

export default Button;