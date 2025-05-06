
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="neon-text-red">Foda</span>
            <span className="neon-text-cyan">Certa</span>
            <span className="text-sm align-super">™</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/#beneficios" className="text-sm font-medium hover:text-cyber-neon-cyan transition-colors duration-200">
            Benefícios
          </Link>
          <Link to="/#depoimentos" className="text-sm font-medium hover:text-cyber-neon-cyan transition-colors duration-200">
            Depoimentos
          </Link>
          <Link to="/#faq" className="text-sm font-medium hover:text-cyber-neon-cyan transition-colors duration-200">
            FAQ
          </Link>
          <Link to="/#contato" className="text-sm font-medium hover:text-cyber-neon-cyan transition-colors duration-200">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/login">
            <button className="hidden sm:flex neon-button-cyan">Entrar</button>
          </Link>
          <Link to="/register">
            <button className="vip-button animate-neon-pulse">Acesso VIP</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
