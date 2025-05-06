
import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Observer helper function to animate elements when they come into view
const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement>,
  { threshold = 0.1, root = null, rootMargin = "0px" }
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, threshold, root, rootMargin]);
};

const Index: React.FC = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(benefitsRef, {});
  useIntersectionObserver(testimonialsRef, {});
  useIntersectionObserver(faqRef, {});
  useIntersectionObserver(contactRef, {});

  return (
    <Layout>
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated halo effect */}
        <div className="absolute w-[600px] h-[600px] opacity-20 animate-halo-rotate">
          <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyber-neon-red to-cyber-neon-cyan blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Conquiste com <span className="neon-text-red">inteligência</span>.<br />
            Seduza com <span className="neon-text-cyan">precisão</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Análises avançadas de perfis e conversas para transformar seus relacionamentos com o poder da IA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/register">
              <button className="vip-button text-lg px-8 py-3">
                Quero Acesso VIP
              </button>
            </Link>
            <Link to="/#beneficios">
              <button className="neon-button-cyan text-lg px-8 py-3">
                Como Funciona
              </button>
            </Link>
          </div>
        </div>
        
        {/* Cyberpunk grid overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(to right, #FF3E4E 1px, transparent 1px), linear-gradient(to bottom, #00E1FF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" ref={benefitsRef} className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            <span className="neon-text-cyan">Benefícios</span> do nosso sistema
          </h2>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Nossa IA analisa comportamentos e padrões para te dar as melhores dicas para seus relacionamentos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="cyber-card p-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.1s'}}>
              <div className="neon-text-cyan text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 neon-text-cyan">Análise de Perfil</h3>
              <p className="text-gray-400">
                Entenda os interesses e padrões de comunicação do seu match para criar conexões mais profundas.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="cyber-card p-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.2s'}}>
              <div className="neon-text-red text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 neon-text-red">Análise de Conversa</h3>
              <p className="text-gray-400">
                Extraímos insights das suas conversas para sugerir as melhores respostas e próximos passos.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="cyber-card p-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.3s'}}>
              <div className="neon-text-cyan text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 neon-text-cyan">IA Conselheira</h3>
              <p className="text-gray-400">
                Receba orientações personalizadas baseadas em IA para melhorar seus relacionamentos.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="cyber-card p-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.4s'}}>
              <div className="neon-text-red text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 neon-text-red">Privacidade Total</h3>
              <p className="text-gray-400">
                Seus dados são criptografados e tratados com o mais alto nível de segurança e confidencialidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" ref={testimonialsRef} className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            <span className="neon-text-red">Depoimentos</span> dos usuários
          </h2>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram seus relacionamentos com a FodaCerta™.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="cyber-card p-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.1s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyber-neon-red rounded-full flex items-center justify-center text-white font-bold neon-border-red">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Marcos T.</h4>
                  <div className="flex text-cyber-neon-cyan">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                "A análise de conversa me salvou! Estava travado em um papo sem graça, usei as sugestões da IA e consegui marcar um encontro na mesma noite."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="cyber-card p-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyber-neon-cyan rounded-full flex items-center justify-center text-black font-bold neon-border-cyan">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Carla M.</h4>
                  <div className="flex text-cyber-neon-cyan">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                "Entender o perfil do meu parceiro me ajudou a identificar os interesses dele e surpreendê-lo com um presente perfeito. Nunca o vi tão feliz!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="cyber-card p-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.3s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyber-neon-red rounded-full flex items-center justify-center text-white font-bold neon-border-red">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Renato S.</h4>
                  <div className="flex text-cyber-neon-cyan">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                "Sou tímido e sempre tive dificuldade para iniciar conversas. As sugestões personalizadas me deram confiança para ser eu mesmo. Agora estou namorando!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            <span className="neon-text-cyan">Perguntas</span> Frequentes
          </h2>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Tudo que você precisa saber sobre a FodaCerta™ e como ela pode te ajudar.
          </p>
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.1s'}}>
              <button className="cyber-card flex justify-between items-center w-full p-5 text-left" onClick={(e) => {
                const target = e.currentTarget.nextElementSibling;
                if (target) {
                  target.classList.toggle('hidden');
                  const icon = e.currentTarget.querySelector('.faq-icon');
                  if (icon) {
                    icon.innerHTML = target.classList.contains('hidden') ? '+' : '-';
                  }
                }
              }}>
                <h3 className="font-bold text-lg">Como funciona a análise de perfil?</h3>
                <span className="faq-icon neon-text-cyan text-2xl">+</span>
              </button>
              <div className="hidden mt-2 p-5 cyber-card bg-opacity-50">
                <p className="text-gray-400">
                  Nossa IA analisa o perfil público da pessoa que você está interessado(a), identificando interesses, 
                  padrões de linguagem e valores. Com essas informações, geramos insights valiosos para te ajudar a 
                  criar uma conexão mais autêntica e profunda.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="mb-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.2s'}}>
              <button className="cyber-card flex justify-between items-center w-full p-5 text-left" onClick={(e) => {
                const target = e.currentTarget.nextElementSibling;
                if (target) {
                  target.classList.toggle('hidden');
                  const icon = e.currentTarget.querySelector('.faq-icon');
                  if (icon) {
                    icon.innerHTML = target.classList.contains('hidden') ? '+' : '-';
                  }
                }
              }}>
                <h3 className="font-bold text-lg">Quantos créditos eu recebo por assinatura?</h3>
                <span className="faq-icon neon-text-red text-2xl">+</span>
              </button>
              <div className="hidden mt-2 p-5 cyber-card bg-opacity-50">
                <p className="text-gray-400">
                  O plano mensal (R$29,90) inclui 25 análises de conversa e 15 análises de perfil por mês. 
                  Já o plano anual (R$299,90) oferece 30 análises de conversa e 20 análises de perfil por mês, 
                  além de economia de R$58,90 no valor total.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="mb-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.3s'}}>
              <button className="cyber-card flex justify-between items-center w-full p-5 text-left" onClick={(e) => {
                const target = e.currentTarget.nextElementSibling;
                if (target) {
                  target.classList.toggle('hidden');
                  const icon = e.currentTarget.querySelector('.faq-icon');
                  if (icon) {
                    icon.innerHTML = target.classList.contains('hidden') ? '+' : '-';
                  }
                }
              }}>
                <h3 className="font-bold text-lg">É seguro usar o serviço?</h3>
                <span className="faq-icon neon-text-cyan text-2xl">+</span>
              </button>
              <div className="hidden mt-2 p-5 cyber-card bg-opacity-50">
                <p className="text-gray-400">
                  Sim, a segurança e privacidade são prioridades para nós. Todos os dados são criptografados, 
                  e não armazenamos as conversas ou perfis analisados após fornecer os resultados. 
                  Nossas políticas de privacidade seguem as mais rigorosas normas de proteção de dados.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="mb-6 opacity-0" style={{animation: 'fade-in 0.5s forwards', animationDelay: '0.4s'}}>
              <button className="cyber-card flex justify-between items-center w-full p-5 text-left" onClick={(e) => {
                const target = e.currentTarget.nextElementSibling;
                if (target) {
                  target.classList.toggle('hidden');
                  const icon = e.currentTarget.querySelector('.faq-icon');
                  if (icon) {
                    icon.innerHTML = target.classList.contains('hidden') ? '+' : '-';
                  }
                }
              }}>
                <h3 className="font-bold text-lg">Posso cancelar a assinatura a qualquer momento?</h3>
                <span className="faq-icon neon-text-red text-2xl">+</span>
              </button>
              <div className="hidden mt-2 p-5 cyber-card bg-opacity-50">
                <p className="text-gray-400">
                  Com certeza. Você pode cancelar sua assinatura a qualquer momento diretamente em sua conta, 
                  sem taxas ou custos adicionais. No cancelamento, você manterá o acesso até o final do período 
                  de cobrança atual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contato" ref={contactRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            <span className="neon-text-red">Entre</span> em Contato
          </h2>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Preencha o formulário abaixo para receber mais informações e ficar por dentro das novidades.
          </p>
          
          <div className="max-w-lg mx-auto cyber-card p-8 opacity-0" style={{animation: 'fade-in 0.5s forwards'}}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium neon-text-cyan">Nome completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-black border border-gray-700 text-white rounded-md block w-full p-3 focus:ring-cyber-neon-cyan focus:border-cyber-neon-cyan focus:outline-none focus:neon-border-cyan transition-all duration-300" 
                  placeholder="Seu nome" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium neon-text-cyan">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-black border border-gray-700 text-white rounded-md block w-full p-3 focus:ring-cyber-neon-cyan focus:border-cyber-neon-cyan focus:outline-none focus:neon-border-cyan transition-all duration-300" 
                  placeholder="seu-email@exemplo.com" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium neon-text-cyan">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="bg-black border border-gray-700 text-white rounded-md block w-full p-3 focus:ring-cyber-neon-cyan focus:border-cyber-neon-cyan focus:outline-none focus:neon-border-cyan transition-all duration-300" 
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="vip-button w-full text-lg py-3 font-bold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            <span className="neon-text-cyan">Pronto</span> para transformar seus <span className="neon-text-red">relacionamentos</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que estão usando a FodaCerta™ para melhorar suas conexões.
          </p>
          <Link to="/register">
            <button className="vip-button text-lg px-10 py-3 animate-neon-pulse">
              Comece Agora Gratuitamente
              <ArrowRight className="ml-2 inline-block" size={20} />
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
