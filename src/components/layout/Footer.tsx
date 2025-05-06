
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="block mb-4">
              <div className="text-xl font-orbitron font-bold text-white">
                FodaCerta<span className="text-sm align-super">™</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Seu conselheiro digital para conquistar e manter relacionamentos.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link to="/precos" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Planos e preços
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Termos de serviço
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                contato@fodacerta.com.br
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FodaCerta™. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400 text-center md:text-right">
            A análise de perfil é para uso pessoal. Não nos responsabilizamos por uso indevido.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
