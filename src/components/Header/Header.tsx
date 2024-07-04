import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logo01.png';
import Passarinho01 from '../../assets/Passarinho01.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassarinho, setShowPassarinho] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleResize = () => {
      const headerWidth = document.querySelector('.header')?.clientWidth || 0;
      const logoWidth = document.querySelector('.logo')?.clientWidth || 0;
      const navWidth = document.querySelector('.header__nav')?.clientWidth || 0;
      const languageSelectorWidth = document.querySelector('.language-selector')?.clientWidth || 0;
      const passarinhoWidth = 200; // Reduzido o tamanho máximo do passarinho

      const availableSpace = headerWidth - (logoWidth + navWidth + languageSelectorWidth);
      setShowPassarinho(availableSpace >= passarinhoWidth);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'floating' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt='Logo' />
        </Link>
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link" onClick={toggleMenu}>{t('home')}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/blog" className="header__nav-link" onClick={toggleMenu}>{t('blog')}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link" onClick={toggleMenu}>{t('about')}</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" className="header__nav-link" onClick={toggleMenu}>{t('contact')}</Link>
          </li>
        </ul>
      </nav>
      <div className="language-selector">
        <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>PT</button>
        <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {showPassarinho && (
        <div className="passarinho01">
          <img src={Passarinho01} alt='passarinho01' />
        </div>
      )}
    </header>
  );
};

export default Header;