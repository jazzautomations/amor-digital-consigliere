
import React, { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AnalysisResultModal from "@/components/dashboard/AnalysisResultModal";

const Analyze = () => {
  const [activeTab, setActiveTab] = useState("conversa");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [conversationText, setConversationText] = useState("");
  const [profileHandle, setProfileHandle] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Componente Dropzone para upload de imagens
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': [],
    },
    maxFiles: 1,
  });

  // Simulação de análise de conversa
  const analyzeConversation = async () => {
    setError(null);
    
    if (!conversationText.trim() && !selectedFile) {
      setError("Por favor, insira o texto da conversa ou faça upload de uma imagem");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Abrir o modal de resultados
      setIsModalOpen(true);
    } catch (err) {
      setError("Erro ao processar a análise. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  // Simulação de análise de perfil
  const analyzeProfile = async () => {
    setError(null);
    
    if (!profileHandle.trim()) {
      setError("Por favor, insira um nome de usuário ou link para o perfil");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Abrir o modal de resultados
      setIsModalOpen(true);
    } catch (err) {
      setError("Erro ao processar a análise de perfil. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  // Resultados simulados
  const mockResults = {
    summary: activeTab === "perfil" 
      ? "O perfil demonstra uma personalidade extrovertida e sociável, com forte interesse em atividades sociais e eventos culturais."
      : "A conversa indica interesse moderado com sinais de receptividade a convites diretos. Tom amigável predominante.",
    interestLevel: "Moderado" as const,
    suggestions: [
      activeTab === "perfil" 
        ? "Iniciar conversa mencionando eventos culturais recentes"
        : "Ser direto ao propor um encontro específico",
      activeTab === "perfil" 
        ? "Mostrar conhecimento sobre os temas que ela demonstra interesse"
        : "Manter um tom casual mas confiante",
      activeTab === "perfil" 
        ? "Evitar abordagens genéricas, personalize baseado nos interesses dela"
        : "Sugerir continuidade da conversa em um contexto presencial"
    ],
    responses: {
      humorous: activeTab === "perfil" 
        ? "Vi que você é fã de arte moderna. Já tentei entender Picasso, mas acabei com o cérebro tão cubista quanto as obras dele. Quer me explicar em um café?" 
        : "Parece que estamos conversando há tanto tempo que até o corretor do meu celular já sabe seu nome. Hora de atualizar para uma conversa ao vivo?",
      sarcastic: activeTab === "perfil" 
        ? "Adoro como você consegue postar 37 stories por dia e ainda ter tempo para viver a vida que está compartilhando. Impressionante multitarefa!"
        : "Nossa conversa está tão animada que quase tive que tomar café extra para acompanhar. Que tal continuar esse festival de entusiasmo pessoalmente?",
      direct: activeTab === "perfil" 
        ? "Notei que você gosta de jazz e exposições de arte. Tem uma exposição nova no centro cultural este fim de semana. Gostaria de ir comigo?"
        : "Tenho gostado bastante de conversar com você. Que tal continuarmos pessoalmente? Tem um café ótimo perto do centro que acho que você vai gostar."
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Nova Análise</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="conversa" className="data-[state=active]:bg-cyber-neon-cyan data-[state=active]:text-black">
                Análise de Conversa
              </TabsTrigger>
              <TabsTrigger value="perfil" className="data-[state=active]:bg-cyber-neon-red data-[state=active]:text-black">
                Análise de Perfil
              </TabsTrigger>
            </TabsList>

            <TabsContent value="conversa" className="space-y-6">
              <div className="space-y-4">
                <div className="p-5 border border-dashed border-gray-600 rounded-lg bg-black">
                  <h2 className="text-xl font-semibold mb-3">Análise de Conversa</h2>
                  <p className="text-gray-400 mb-4">
                    Cole o texto da conversa ou faça upload de uma screenshot para analisar 
                    o nível de interesse, tom emocional e receber sugestões de resposta.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="conversation">Cole o texto da conversa</Label>
                    <Textarea
                      id="conversation"
                      placeholder="Cole aqui o texto da conversa que deseja analisar..."
                      className="min-h-[200px] border-gray-700 bg-black focus:border-cyber-neon-cyan"
                      value={conversationText}
                      onChange={(e) => setConversationText(e.target.value)}
                    />
                  </div>

                  <div className="text-center text-gray-400 text-sm">— OU —</div>

                  <div className="space-y-2">
                    <Label>Faça upload de uma screenshot</Label>
                    <div
                      {...getRootProps()}
                      className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer ${
                        isDragActive ? 'border-cyber-neon-cyan bg-cyber-neon-cyan bg-opacity-5' : 'border-gray-700'
                      }`}
                    >
                      <input {...getInputProps()} ref={fileInputRef} />
                      {selectedFile ? (
                        <div className="space-y-2">
                          <p className="text-cyber-neon-cyan">{selectedFile.name}</p>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFile(null);
                            }}
                          >
                            Remover
                          </Button>
                        </div>
                      ) : isDragActive ? (
                        <p>Solte o arquivo aqui...</p>
                      ) : (
                        <div className="space-y-2">
                          <p>Arraste uma imagem ou clique para selecionar</p>
                          <p className="text-xs text-gray-500">Formatos aceitos: JPG, PNG, GIF</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive" className="border-cyber-neon-red">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    className="w-full neon-button-cyan"
                    onClick={analyzeConversation}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analisando...
                      </span>
                    ) : "Analisar Conversa"}
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="perfil" className="space-y-6">
              <div className="space-y-4">
                <div className="p-5 border border-dashed border-gray-600 rounded-lg bg-black">
                  <h2 className="text-xl font-semibold mb-3">Análise de Perfil</h2>
                  <p className="text-gray-400 mb-4">
                    Insira o nome de usuário ou link do perfil em uma rede social para analisar 
                    interesses, padrões de comunicação e obter sugestões de abordagem.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="profileUrl">Username ou URL do perfil</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="profileUrl"
                        placeholder="@username ou https://..."
                        className="border-gray-700 bg-black focus:border-cyber-neon-red"
                        value={profileHandle}
                        onChange={(e) => setProfileHandle(e.target.value)}
                      />
                      <Button className="neon-button-red" type="button">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Rede Social</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="border-gray-700 hover:border-cyber-neon-red hover:text-cyber-neon-red">
                        Instagram
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:border-cyber-neon-red hover:text-cyber-neon-red">
                        Twitter/X
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:border-cyber-neon-red hover:text-cyber-neon-red">
                        TikTok
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive" className="border-cyber-neon-red">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    className="w-full neon-button-red"
                    onClick={analyzeProfile}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Analisando...
                      </span>
                    ) : "Analisar Perfil"}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Modal com resultados da análise */}
      <AnalysisResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={activeTab === "perfil" ? `Análise de ${profileHandle}` : "Análise de Conversa"}
        analysis={mockResults}
      />
    </Layout>
  );
};

export default Analyze;
