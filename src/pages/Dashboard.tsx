
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CreditCounter from "@/components/dashboard/CreditCounter";
import ProfileCard from "@/components/dashboard/ProfileCard";
import AnalysisResultModal from "@/components/dashboard/AnalysisResultModal";
import { formatDate } from "@/lib/utils";

interface Analysis {
  id: number;
  type: "perfil" | "conversa";
  created_at: string;
  title: string;
  description: string;
}

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState<Analysis | null>(null);

  // Dados simulados para demonstração
  const user = {
    name: "Gabriel Santos",
    plan: "VIP Anual",
    credits: 24,
    maxCredits: 30,
  };

  const recentAnalyses: Analysis[] = [
    {
      id: 1,
      type: "perfil",
      created_at: "2025-05-01T14:30:00Z",
      title: "Análise de @mariaclara22",
      description: "Perfil do Instagram com foco em interesses pessoais e tom de comunicação",
    },
    {
      id: 2,
      type: "conversa",
      created_at: "2025-04-29T18:15:00Z",
      title: "Chat com Fernanda",
      description: "Análise de mensagens do WhatsApp sobre planejamento de encontro",
    },
    {
      id: 3,
      type: "perfil",
      created_at: "2025-04-25T09:45:00Z",
      title: "Análise de @pedro_gamer",
      description: "Perfil do Twitter com foco em interesses e padrões de linguagem",
    },
  ];

  const openAnalysisModal = (analysis: Analysis) => {
    setSelectedAnalysis(analysis);
    setIsModalOpen(true);
  };

  const mockAnalysisResult = {
    summary: "O perfil demonstra interesse genuíno, com padrões de comunicação consistentes e tom amigável. Abordagem direta é recomendada.",
    interestLevel: "Alto" as const,
    suggestions: [
      "Iniciar conversa mencionando interesses mútuos em fotografia",
      "Manter tom descontraído mas direto",
      "Evitar usar gírias excessivas que não aparecem no perfil dela"
    ],
    responses: {
      humorous: "Vendo suas fotos, percebi que você também é vítima de cafés caros e pôr do sol. Que tal unirmos nossas carteiras e fotografias em um encontro?",
      sarcastic: "Adorei como você consegue equilibrar 37 filtros em cada foto e ainda parecer natural. Será que você consegue equilibrar um café comigo na agenda?",
      direct: "Gostei do seu perfil e parece que temos interesse comum em fotografia. Que tal conversarmos sobre isso tomando um café este fim de semana?"
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna de perfil e créditos */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl">Dashboard</CardTitle>
                <CardDescription>Gerencie suas análises e créditos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-brand-purple grid place-items-center">
                    <span className="text-xl font-bold text-white">
                      {user.name.substring(0, 1)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <Badge variant="secondary" className="bg-brand-purple text-white">
                      {user.plan}
                    </Badge>
                  </div>
                </div>
                
                <CreditCounter 
                  credits={user.credits} 
                  maxCredits={user.maxCredits} 
                />

                <div className="pt-2">
                  <Link to="/analyze">
                    <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark">
                      Nova Análise
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <ProfileCard
              name="Maria Clara"
              handle="mariaclara22"
              profileImage="https://i.pravatar.cc/300?img=5"
              interests={["fotografia", "viagens", "gastronomia", "livros"]}
              tone="Amigável e entusiasta, usa emojis frequentemente"
            />
          </div>

          {/* Coluna de análises recentes */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Análises Recentes</CardTitle>
                <CardDescription>
                  Histórico das suas últimas análises de perfil e conversa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnalyses.map((analysis) => (
                    <div 
                      key={analysis.id} 
                      className="p-4 border border-gray-800 rounded-lg hover:border-brand-purple transition-colors cursor-pointer"
                      onClick={() => openAnalysisModal(analysis)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{analysis.title}</h3>
                          <p className="text-sm text-gray-400">{analysis.description}</p>
                        </div>
                        <Badge 
                          className={analysis.type === "perfil" ? "bg-cyber-neon-cyan text-black" : "bg-cyber-neon-red text-black"}
                        >
                          {analysis.type === "perfil" ? "Perfil" : "Conversa"}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-gray-500">
                          {formatDate(new Date(analysis.created_at))}
                        </span>
                        <Button variant="outline" size="sm" className="text-xs border-gray-700">
                          Ver detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-gray-700">
                  Ver todas as análises
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle>Estatísticas</CardTitle>
                <CardDescription>
                  Visão geral da sua atividade e sucesso nas interações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-black rounded-lg text-center">
                    <p className="text-xs text-gray-400">Total de análises</p>
                    <p className="text-2xl font-bold text-cyber-neon-cyan">16</p>
                  </div>
                  <div className="p-4 bg-black rounded-lg text-center">
                    <p className="text-xs text-gray-400">Taxa de sucesso</p>
                    <p className="text-2xl font-bold text-cyber-neon-red">78%</p>
                  </div>
                  <div className="p-4 bg-black rounded-lg text-center">
                    <p className="text-xs text-gray-400">Créditos usados</p>
                    <p className="text-2xl font-bold text-gray-300">42</p>
                  </div>
                  <div className="p-4 bg-black rounded-lg text-center">
                    <p className="text-xs text-gray-400">Dias restantes</p>
                    <p className="text-2xl font-bold text-gray-300">24</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal de resultado de análise */}
      {selectedAnalysis && (
        <AnalysisResultModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedAnalysis.title}
          analysis={mockAnalysisResult}
        />
      )}
    </Layout>
  );
};

export default Dashboard;
