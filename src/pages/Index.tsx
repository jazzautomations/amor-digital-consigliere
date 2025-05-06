
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, User } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-purple-dark to-brand-dark py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-purple-light">
                  Conquiste com inteligência.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Transforme seus relacionamentos com análises avançadas de perfis e conversas. 
                O conselheiro digital que vai te ajudar a ser o match perfeito.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cadastro">
                  <Button size="lg" className="bg-brand-purple hover:bg-brand-purple-dark animate-pulse-glow">
                    Começar agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/como-funciona">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-dark">
                    Como funciona
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="glass-effect p-6 rounded-xl max-w-md mx-auto">
                <div className="mb-4 bg-brand-purple text-white p-3 rounded-lg inline-flex items-center">
                  <MessageCircle className="mr-2" size={20} />
                  <span className="font-medium">Análise de Conversa</span>
                </div>
                <p className="text-white mb-4">Seu match está demorando para responder...</p>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg mb-4">
                  <p className="text-sm text-white">
                    <strong>Análise FodaCerta™:</strong> Interesse moderado. Sugiro abordagem menos direta e mais focada em interesses compartilhados.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-brand-purple bg-opacity-30 p-3 rounded-lg text-white text-sm hover:bg-opacity-40 cursor-pointer transition">
                    "Ei, vi que você curte fotografia também! Qual sua câmera favorita?"
                  </div>
                  <div className="bg-brand-purple bg-opacity-30 p-3 rounded-lg text-white text-sm hover:bg-opacity-40 cursor-pointer transition">
                    "Já pensou no nosso próximo encontro? Tem um lugar incrível que quero te mostrar!"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-purple blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-blue blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-orbitron">
            Principais funcionalidades
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Nosso sistema de inteligência artificial analisa comportamentos e padrões para te dar as melhores dicas para seus relacionamentos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="neomorphic p-6">
              <div className="bg-brand-purple text-white p-3 rounded-full inline-flex items-center justify-center mb-4 w-12 h-12">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Análise de Perfil</h3>
              <p className="text-gray-600 mb-4">
                Entenda os interesses e padrões de comunicação do seu match para criar conexões mais profundas.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Identificação de interesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Análise de tom e linguagem</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Compatibilidade de valores</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="neomorphic p-6">
              <div className="bg-brand-purple text-white p-3 rounded-full inline-flex items-center justify-center mb-4 w-12 h-12">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Análise de Conversa</h3>
              <p className="text-gray-600 mb-4">
                Extraímos insights das suas conversas para sugerir as melhores respostas e próximos passos.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Extração de texto de screenshots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Avaliação de interesse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Sugestões de resposta personalizadas</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="neomorphic p-6">
              <div className="bg-brand-purple text-white p-3 rounded-full inline-flex items-center justify-center mb-4 w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.48 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5"></path><path d="M12 15v-3"></path><path d="M12 9v0"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">IA Conselheira</h3>
              <p className="text-gray-600 mb-4">
                Receba orientações personalizadas baseadas em IA para melhorar seus relacionamentos.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Estratégias de aproximação</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Dicas para manter o interesse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm text-gray-600">Como superar obstáculos comuns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-brand-soft-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-orbitron">
            Como funciona
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Em apenas 3 passos simples, você terá insights valiosos para melhorar seus relacionamentos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold mb-3 pt-3">Cadastre-se</h3>
              <p className="text-gray-600">
                Crie sua conta e escolha o plano que melhor se adequa às suas necessidades.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold mb-3 pt-3">Envie dados</h3>
              <p className="text-gray-600">
                Compartilhe o perfil ou conversas que você quer analisar através da nossa interface simples.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold mb-3 pt-3">Receba insights</h3>
              <p className="text-gray-600">
                Nossa IA analisa os dados e fornece sugestões personalizadas para melhorar sua comunicação.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/cadastro">
              <Button size="lg" className="bg-brand-purple hover:bg-brand-purple-dark">
                Comece agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-orbitron">
            Escolha seu plano
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Planos flexíveis para atender às suas necessidades, com créditos mensais para análises de perfil e conversas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md bg-white">
              <h3 className="text-xl font-bold mb-2">Básico</h3>
              <p className="text-sm text-gray-500 mb-6">Para quem quer experimentar</p>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">R$ 0</span>
                <span className="text-gray-500 ml-2 mb-1">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">2 análises de conversa/mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">1 análise de perfil/mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✗</span>
                  <span className="text-sm text-gray-400">Variações de resposta limitadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✗</span>
                  <span className="text-sm text-gray-400">Histórico de análises</span>
                </li>
              </ul>
              <Link to="/cadastro">
                <Button variant="outline" className="w-full">
                  Começar grátis
                </Button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="border-2 border-brand-purple rounded-lg p-6 transition-all hover:shadow-md bg-white relative">
              <div className="bg-brand-purple text-white text-xs font-bold py-1 px-3 rounded-full absolute -top-3 right-6">MAIS POPULAR</div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-sm text-gray-500 mb-6">Para usuários frequentes</p>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">R$ 29,90</span>
                <span className="text-gray-500 ml-2 mb-1">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">25 análises de conversa/mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">15 análises de perfil/mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">Todas as variações de resposta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">Histórico de análises</span>
                </li>
              </ul>
              <Link to="/cadastro?plan=premium">
                <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark">
                  Assinar agora
                </Button>
              </Link>
            </div>

            {/* Annual Plan */}
            <div className="border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md bg-white">
              <h3 className="text-xl font-bold mb-2">Anual</h3>
              <p className="text-sm text-gray-500 mb-6">Melhor custo-benefício</p>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">R$ 299,90</span>
                <span className="text-gray-500 ml-2 mb-1">/ano</span>
              </div>
              <div className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded mb-6 inline-block">
                Economize R$ 58,90
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">30 análises de conversa/mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">20 análises de perfil/mês</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">Todas as variações de resposta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-purple mr-2">✓</span>
                  <span className="text-sm">Histórico de análises ilimitado</span>
                </li>
              </ul>
              <Link to="/cadastro?plan=annual">
                <Button className="w-full bg-brand-dark hover:bg-black">
                  Assinar anual
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-soft-purple">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 font-orbitron">
            O que nossos usuários dizem
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram seus relacionamentos com a FodaCerta™.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Marcos T.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "A análise de conversa me salvou! Estava travado em um papo sem graça, usei as sugestões da IA e consegui marcar um encontro na mesma noite."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Carla M.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Entender o perfil do meu parceiro me ajudou a identificar os interesses dele e surpresae-lo com um presente perfeito. Nunca o vi tão feliz!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Renato S.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-gray-300"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Sou tímido e sempre tive dificuldade para iniciar conversas. As sugestões personalizadas me deram confiança para ser eu mesmo. Agora estou namorando!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-orbitron">
            Pronto para transformar seus relacionamentos?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que estão usando a FodaCerta™ para melhorar suas conexões.
          </p>
          <Link to="/cadastro">
            <Button size="lg" className="bg-brand-purple hover:bg-brand-purple-dark animate-pulse-glow">
              Comece agora gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
