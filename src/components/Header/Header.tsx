import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logo01.png';
import Passarinho01 from '../../assets/Passarinho01.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { scrollToTop } from '../../utils/scrollUtils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassarinho, setShowPassarinho] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    scrollToTop();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const headerWidth = document.querySelector('.header')?.clientWidth || 0;
      const logoWidth = document.querySelector('.logo')?.clientWidth || 0;
      const navWidth = document.querySelector('.header__nav')?.clientWidth || 0;
      const languageSelectorWidth = document.querySelector('.language-selector')?.clientWidth || 0;
      const passarinhoWidth = 200;

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
        <button onClick={() => handleNavClick('/')} className="logo-button">
          <img src={Logo} alt='Logo' />
        </button>
      </div>
      <div className="header__content">
        <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <button onClick={() => handleNavClick('/')} className="header__nav-link">{t('home')}</button>
            </li>
            <li className="header__nav-item">
              <button onClick={() => handleNavClick('/blog')} className="header__nav-link">{t('blog')}</button>
            </li>
            <li className="header__nav-item">
              <button onClick={() => handleNavClick('/about')} className="header__nav-link">{t('about')}</button>
            </li>
            <li className="header__nav-item">
              <button onClick={() => handleNavClick('/contact')} className="header__nav-link">{t('contact')}</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__actions">
        <div className="language-selector">
          <button onClick={() => changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>PT</button>
          <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
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