import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/HomePage';
import About from './pages/About/AboutPage';
import Blog from './pages/Blog/Blog';
import ContactPage from './pages/Contact/ContactPage';
import './styles/global.css';
import { useEffect } from 'react';

// Componente para controlar o scroll
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const AppContent: React.FC = () => {
  const whatsappLink = "https://wa.me/5531995626630";

  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <a href={whatsappLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;