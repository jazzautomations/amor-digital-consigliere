
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const toggleBillingPeriod = () => {
    setBillingPeriod(prev => (prev === "monthly" ? "yearly" : "monthly"));
  };

  const plans = [
    {
      name: "Plano Básico",
      description: "Ideal para quem está começando",
      monthlyPrice: 0,
      yearlyPrice: 0,
      credits: 1,
      features: [
        "1 análise grátis",
        "Acesso à dashboard básica",
        "Suporte por email",
      ],
      buttonText: "Começar Grátis",
      popular: false,
      className: "border-gray-800 bg-black",
      buttonClass: "border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white",
    },
    {
      name: "Plano VIP Mensal",
      description: "Para uso pessoal frequente",
      monthlyPrice: 29.90,
      yearlyPrice: 299.90,
      credits: 30,
      features: [
        "30 análises por mês",
        "Acesso à dashboard completa",
        "Análise de perfil e conversas",
        "Suporte prioritário",
        "Sugestões de resposta personalizadas",
      ],
      buttonText: "Assinar Agora",
      popular: true,
      className: "border-cyber-neon-cyan shadow-lg shadow-cyber-neon-cyan/20 bg-black",
      buttonClass: "neon-button-cyan",
    },
    {
      name: "Plano Pro",
      description: "Para usuários avançados",
      monthlyPrice: 49.90,
      yearlyPrice: 499.90,
      credits: 100,
      features: [
        "100 análises por mês",
        "Todas as funções do plano VIP",
        "API de integração",
        "Análise em lote",
        "Relatórios avançados",
        "Suporte 24/7",
      ],
      buttonText: "Quero ser Pro",
      popular: false,
      className: "border-cyber-neon-red bg-black",
      buttonClass: "neon-button-red",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold mb-4">
            Escolha o plano ideal para você
          </h1>
          <p className="text-xl text-gray-400 mb-10">
            Desbloqueia todo o potencial dos seus relacionamentos com nossos planos flexíveis
          </p>

          <div className="flex items-center justify-center mb-10">
            <span className={`text-sm mr-3 ${billingPeriod === "monthly" ? "text-white" : "text-gray-400"}`}>
              Mensal
            </span>
            <button
              onClick={toggleBillingPeriod}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                billingPeriod === "yearly" ? "bg-cyber-neon-cyan" : "bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  billingPeriod === "yearly" ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ml-3 ${billingPeriod === "yearly" ? "text-white" : "text-gray-400"}`}>
              Anual
            </span>
            <Badge className="ml-2 bg-cyber-neon-red text-white">
              Economize 20%
            </Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 flex flex-col ${plan.className} ${
                  plan.popular ? "relative z-10 scale-105 md:-mt-4" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0">
                    <Badge className="bg-cyber-neon-cyan text-black font-medium py-1 px-3 text-sm">
                      Mais Popular
                    </Badge>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold">
                    {plan.monthlyPrice === 0
                      ? "Grátis"
                      : `R$${billingPeriod === "monthly" ? plan.monthlyPrice.toFixed(2) : (plan.yearlyPrice / 12).toFixed(2)}`}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {plan.monthlyPrice === 0
                      ? "para sempre"
                      : billingPeriod === "monthly"
                      ? "por mês"
                      : `R$${plan.yearlyPrice.toFixed(2)} por ano`}
                  </div>
                </div>

                <div className="border-t border-gray-800 my-5 pt-5">
                  <div className="text-sm mb-2">Inclui:</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  <Link to="/register">
                    <Button className={`w-full ${plan.buttonClass}`}>
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-gray-800 rounded-xl bg-gray-900">
            <h3 className="text-xl font-bold mb-2">Pacotes de Créditos Avulsos</h3>
            <p className="text-gray-400 mb-6">
              Precisa de mais análises? Compre pacotes de créditos adicionais a qualquer momento.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-800 rounded-lg bg-black">
                <div className="text-xl font-bold">10 créditos</div>
                <div className="text-cyber-neon-cyan font-bold my-1">R$19,90</div>
                <div className="text-xs text-gray-500">R$1,99 por análise</div>
                <Button className="w-full mt-4 border border-cyber-neon-cyan text-cyber-neon-cyan hover:bg-cyber-neon-cyan hover:text-black">
                  Comprar
                </Button>
              </div>
              
              <div className="p-4 border border-gray-800 rounded-lg bg-black">
                <div className="text-xl font-bold">30 créditos</div>
                <div className="text-cyber-neon-cyan font-bold my-1">R$49,90</div>
                <div className="text-xs text-gray-500">R$1,66 por análise</div>
                <Button className="w-full mt-4 border border-cyber-neon-cyan text-cyber-neon-cyan hover:bg-cyber-neon-cyan hover:text-black">
                  Comprar
                </Button>
              </div>
              
              <div className="p-4 border border-gray-800 rounded-lg bg-black">
                <div className="text-xl font-bold">100 créditos</div>
                <div className="text-cyber-neon-cyan font-bold my-1">R$129,90</div>
                <div className="text-xs text-gray-500">R$1,29 por análise</div>
                <Button className="w-full mt-4 border border-cyber-neon-cyan text-cyber-neon-cyan hover:bg-cyber-neon-cyan hover:text-black">
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Perguntas Frequentes</h2>
          
          <div className="space-y-4">
            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">Como funciona o sistema de créditos?</h3>
              <p className="text-gray-400">
                Cada análise de perfil ou conversa consome 1 crédito. Os créditos são renovados mensalmente se você tiver uma assinatura ativa. Os créditos avulsos não expiram.
              </p>
            </div>
            
            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">Posso cancelar minha assinatura a qualquer momento?</h3>
              <p className="text-gray-400">
                Sim, você pode cancelar sua assinatura a qualquer momento. Você continuará com acesso aos recursos do plano até o fim do período de cobrança.
              </p>
            </div>
            
            <div className="p-4 border border-gray-800 rounded-lg">
              <h3 className="font-bold mb-2">O que acontece se eu usar todos os meus créditos?</h3>
              <p className="text-gray-400">
                Quando seus créditos acabarem, você poderá comprar pacotes adicionais ou esperar pela renovação mensal se tiver uma assinatura ativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
