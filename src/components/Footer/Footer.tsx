import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="footer">
    <p className="footer__text">&copy; 2024 Neuropediatra Laura T. Todos os direitos reservados.</p>
    <p className="footer__text">CRM: 78673</p>
    <div className="footer-social">
      <a href="https://www.instagram.com/lauraneuroped/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </div>
  </footer>
);

export default Footer;
