
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-orbitron font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
            FodaCerta<span className="text-sm align-super">™</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/como-funciona" className="text-sm font-medium hover:text-brand-purple transition-colors duration-200">
            Como Funciona
          </Link>
          <Link to="/precos" className="text-sm font-medium hover:text-brand-purple transition-colors duration-200">
            Planos e Preços
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-brand-purple transition-colors duration-200">
            Blog
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/login">
            <Button variant="outline" className="hidden sm:flex">Entrar</Button>
          </Link>
          <Link to="/cadastro">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark">Começar</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
