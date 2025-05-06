
import React from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4 max-w-4xl">
        <h1 className="text-3xl font-extrabold mb-6">Política de Cookies</h1>
        
        <div className="prose prose-invert max-w-none">
          <p>
            Última atualização: 6 de maio de 2025
          </p>
          
          <h2>1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou celular) quando você visita websites. Os cookies são amplamente utilizados para fazer os sites funcionarem de maneira mais eficiente, bem como fornecer informações aos proprietários do site.
          </p>
          
          <h2>2. Como usamos os cookies</h2>
          <p>
            A FodaCerta™ utiliza cookies para diversos fins, incluindo:
          </p>
          <ul>
            <li>Manter você conectado durante sua visita</li>
            <li>Lembrar suas preferências e configurações</li>
            <li>Melhorar a velocidade e segurança do site</li>
            <li>Coletar dados estatísticos anônimos sobre o uso do site para melhorar continuamente nossas funcionalidades</li>
            <li>Permitir funcionalidades de compartilhamento em redes sociais</li>
            <li>Fornecer recursos de chat e análise em tempo real</li>
          </ul>
          
          <h2>3. Tipos de cookies que utilizamos</h2>
          
          <h3>3.1. Cookies essenciais</h3>
          <p>
            Esses cookies são necessários para o funcionamento do site e não podem ser desativados em nossos sistemas. Eles geralmente são definidos apenas em resposta a ações feitas por você que equivalem a uma solicitação de serviços, como definir suas preferências de privacidade, fazer login ou preencher formulários.
          </p>
          
          <h3>3.2. Cookies de desempenho</h3>
          <p>
            Estes cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver como os visitantes navegam pelo site.
          </p>
          
          <h3>3.3. Cookies de funcionalidade</h3>
          <p>
            Esses cookies permitem que o site forneça funcionalidade e personalização aprimoradas. Eles podem ser definidos por nós ou por provedores terceiros cujos serviços adicionamos às nossas páginas.
          </p>
          
          <h3>3.4. Cookies de publicidade</h3>
          <p>
            Esses cookies podem ser definidos através do nosso site pelos nossos parceiros de publicidade. Eles podem ser usados por essas empresas para criar um perfil de seus interesses e mostrar anúncios relevantes em outros sites.
          </p>
          
          <h2>4. Como gerenciar cookies</h2>
          <p>
            A maioria dos navegadores permite que você controle cookies através das preferências. Entretanto, se você limitar a capacidade dos sites de configurar cookies, isso pode piorar sua experiência geral, pois não será mais personalizada para você. Também pode impedir que você salve configurações personalizadas, como informações de login.
          </p>
          
          <h2>5. Cookies de terceiros</h2>
          <p>
            Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
          </p>
          <ul>
            <li>Este site usa o Google Analytics, uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência.</li>
            <li>Utilizamos integrações de mídia social que podem definir cookies para aprimorar a funcionalidade de compartilhamento social.</li>
            <li>Utilizamos cookies do Stripe para processamento de pagamentos e gerenciamento de assinaturas.</li>
          </ul>
          
          <h2>6. Atualizações na política de cookies</h2>
          <p>
            Podemos atualizar esta Política de Cookies de tempos em tempos para refletir, por exemplo, mudanças nos cookies que usamos ou por outros motivos operacionais, legais ou regulatórios. Portanto, visite esta Política de Cookies regularmente para se manter informado sobre nosso uso de cookies e tecnologias relacionadas.
          </p>
          
          <h2>7. Contato</h2>
          <p>
            Se você tiver dúvidas sobre o uso de cookies pela FodaCerta™, entre em contato conosco pelo e-mail: contato@fodacerta.com.br
          </p>
          
          <div className="mt-8">
            <p>
              Para obter mais informações sobre nosso processamento de dados, consulte nossa{" "}
              <Link to="/privacidade" className="text-cyber-neon-cyan hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
            <p>
              <Link to="/termos" className="text-cyber-neon-red hover:underline">
                Termos de Serviço
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
