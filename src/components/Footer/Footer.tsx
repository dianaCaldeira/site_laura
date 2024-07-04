import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Logo2 from '../../assets/Logo02.jpeg'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__left">
      <img src={Logo2} alt="Logo2" className="footer__logo" />
    </div>
    <div className="footer__center">
      <p className="footer__text">&copy; 2024 Neuropediatra Laura T. Todos os direitos reservados.</p>
      <p className="footer__text">CRM: 78673</p>
    </div>
    <div className="footer__right">
      <a href="https://www.instagram.com/lauraneuroped/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
        <FaInstagram size={28} />
      </a>
      <a href="https://www.facebook.com/lauraneuroped" target="_blank" rel="noopener noreferrer" className="footer__social-link">
        <FaFacebookF size={28} />
      </a>
      <a href="https://www.linkedin.com/in/lauraneuroped" target="_blank" rel="noopener noreferrer" className="footer__social-link">
        <FaLinkedinIn size={28} />
      </a>
      <a href="https://www.youtube.com/channel/lauraneuroped" target="_blank" rel="noopener noreferrer" className="footer__social-link">
        <FaYoutube size={28} />
      </a>
    </div>
  </footer>
);

export default Footer;