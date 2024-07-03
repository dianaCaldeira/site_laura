import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logo01.png';
import Passarinho01 from '../../assets/Passarinho01.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt='Logo' />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">Home</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/blog" className="header__nav-link">Blog</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">Sobre</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" className="header__nav-link">Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="passarinho01">
        <img src={Passarinho01} alt='passarinho01' />
      </div>
    </header>
  );
};

export default Header;