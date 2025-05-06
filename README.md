
# FodaCerta™ - Conselheiro Digital para Relacionamentos

## Sobre o projeto

FodaCerta™ é uma plataforma que utiliza inteligência artificial para analisar perfis e conversas, oferecendo insights e sugestões para melhorar seus relacionamentos. A aplicação permite aos usuários:

- Analisar perfis de redes sociais para entender interesses e padrões de comunicação
- Extrair texto de screenshots de conversas para análise
- Receber recomendações personalizadas e sugestões de resposta
- Gerenciar assinaturas e créditos para usar os serviços

## Tecnologias utilizadas

- **Framework**: React.js com TypeScript
- **Estilização**: Tailwind CSS com tema cyberpunk personalizado
- **Roteamento**: React Router
- **Gerenciamento de estado**: React Query
- **Autenticação e banco de dados**: Supabase
- **Processamento de pagamentos**: Stripe
- **OCR (Reconhecimento de texto em imagens)**: Google Vision API e Tesseract.js
- **Análise de texto**: OpenAI GPT-4o-mini

## Requisitos do sistema

- Node.js 18.0 ou superior
- npm 9.0 ou superior

## Configuração do ambiente local

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/fodacerta.git
cd fodacerta
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_SERVICE_ROLE_KEY=
VITE_STRIPE_PUBLISHABLE_KEY=
VITE_OPENAI_API_KEY=
VITE_GOOGLE_CLOUD_VISION_KEY=
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Acesse a aplicação em [http://localhost:8080](http://localhost:8080)

## Build para produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Estrutura do projeto

```
/src
  /components
    /dashboard      # Componentes específicos do dashboard
    /layout         # Componentes de layout como Header, Footer
    /ui             # Componentes base de UI
  /hooks            # Hooks personalizados React
  /lib              # Utilitários e configurações de integração
    /supabase.ts    # Cliente Supabase  
    /openai.ts      # Cliente OpenAI
    /ocr.ts         # Função de OCR
  /pages            # Componentes de página para cada rota
    /api            # Funções para API routes
    /auth           # Páginas relacionadas à autenticação
    /dashboard      # Páginas do painel de usuário
  /styles           # Estilos globais
  /utils            # Funções utilitárias
```

## Configuração do Supabase

O projeto utiliza o Supabase para autenticação e armazenamento de dados. As principais tabelas incluem:

- `users`: Informações do usuário (id, nome, email, avatar_url, planos, créditos)
- `analyses`: Análises realizadas (id, user_id, tipo, input, resultado, criado_em)
- `credits_history`: Histórico de créditos (id, user_id, créditos_usados, tipo, data)

## Configuração do Stripe

O Stripe é usado para processar pagamentos de assinaturas e compras de créditos. Os planos configurados são:

- Plano Mensal: R$29,90/mês
- Plano Anual: R$299,90/ano

## Estilização e personalização

O projeto utiliza um tema cyberpunk personalizado com as seguintes cores principais:

- Fundo preto: #000000
- Texto cinza-claro: #D3D3D3
- Neon Red (destaque): #FF3E4E
- Neon Cyan (destaque): #00E1FF

Para modificar as cores do tema, edite o arquivo `tailwind.config.ts` na seção `colors.cyber`.

A fonte principal é Inter, configurada com:
- Peso 400 para textos do corpo
- Peso 800 para títulos

## Exemplos de chamadas à API

### Analisar uma conversa
```typescript
const analyzeConversation = async (text: string) => {
  const response = await fetch('/api/conversation-analysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.access_token}`
    },
    body: JSON.stringify({ text })
  });
  
  return await response.json();
};
```

### Analisar um perfil
```typescript
const analyzeProfile = async (handle: string, platform: string) => {
  const response = await fetch('/api/profile-analysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session?.access_token}`
    },
    body: JSON.stringify({ handle, platform })
  });
  
  return await response.json();
};
```

## Manutenção e suporte

Para reportar bugs ou solicitar novas funcionalidades, abra uma issue no repositório GitHub do projeto.

## Licença

Este projeto é proprietário e todos os direitos são reservados. Uso não autorizado é proibido.

© 2025 FodaCerta™. Todos os direitos reservados.
