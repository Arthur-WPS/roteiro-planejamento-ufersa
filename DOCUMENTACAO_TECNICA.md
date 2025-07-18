# Documentação Técnica - Roteiro de Planejamento Estratégico Web

## Arquitetura da Aplicação

### Visão Geral
A aplicação é uma Single Page Application (SPA) desenvolvida em React que permite aos coordenadores de programas de pós-graduação criar planejamentos estratégicos de forma interativa e gerar documentos finais em PDF.

### Componentes Principais

#### 1. DataContext (`src/context/DataContext.jsx`)
- **Função**: Gerenciamento de estado global da aplicação
- **Características**:
  - Armazena todos os dados dos formulários
  - Persiste dados no localStorage automaticamente
  - Fornece funções para atualizar campos específicos
  - Calcula progresso de preenchimento em tempo real

#### 2. App (`src/App.jsx`)
- **Função**: Componente principal que orquestra a aplicação
- **Características**:
  - Gerencia navegação entre passos
  - Renderiza componentes condicionalmente
  - Integra Header, Sidebar e componentes de passos

#### 3. Header (`src/components/Header.jsx`)
- **Função**: Barra superior com navegação e ações
- **Características**:
  - Navegação por abas numeradas
  - Barra de progresso geral
  - Botões de ação (Salvar, Limpar, Gerar PDF)

#### 4. Sidebar (`src/components/Sidebar.jsx`)
- **Função**: Navegação lateral com resumo dos passos
- **Características**:
  - Lista todos os passos com indicadores visuais
  - Mostra progresso individual de cada passo
  - Acesso rápido à finalização

#### 5. FormField (`src/components/FormField.jsx`)
- **Função**: Componente reutilizável para campos de formulário
- **Características**:
  - Suporte a diferentes tipos (text, textarea, select)
  - Validação visual de campos obrigatórios
  - Integração automática com o DataContext

#### 6. Componentes de Passos (`src/components/steps/`)
- **Step1.jsx**: Delimitação do Problema-objeto
- **StepFinalization.jsx**: Revisão e geração de PDF
- **Outros passos**: Estrutura preparada para implementação

#### 7. PDF Generator (`src/utils/pdfGenerator.js`)
- **Função**: Geração de documentos PDF
- **Características**:
  - Cria PDF formatado com dados preenchidos
  - Remove orientações e mantém apenas conteúdo
  - Formatação profissional com cabeçalhos e seções

## Fluxo de Dados

### 1. Entrada de Dados
```
Usuário digita → FormField → DataContext → localStorage
```

### 2. Navegação
```
Clique em passo → App.jsx → Renderiza componente correspondente
```

### 3. Geração de PDF
```
Botão PDF → StepFinalization → pdfGenerator → Download automático
```

## Estrutura de Dados

### Formato no DataContext
```javascript
{
  step1: {
    problemaObjeto: "string",
    relevanciaEpistemologica: "string",
    relevanciaSocietal: "string",
    // ... outros campos
  },
  step2: {
    // campos do passo 2
  },
  // ... outros passos
  lastUpdated: "timestamp"
}
```

### Persistência
- **Local**: localStorage do navegador
- **Chave**: "roteiro-estrategico-data"
- **Formato**: JSON stringificado
- **Backup**: Automático a cada mudança

## Funcionalidades Implementadas

### ✅ Concluídas
1. **Interface de Usuário**
   - Design responsivo com Tailwind CSS
   - Componentes shadcn/ui integrados
   - Navegação intuitiva por passos

2. **Gerenciamento de Dados**
   - Salvamento automático no localStorage
   - Persistência entre sessões
   - Cálculo de progresso em tempo real

3. **Passo 1 Completo**
   - Todos os campos implementados
   - Validação de campos obrigatórios
   - Orientações contextuais

4. **Geração de PDF**
   - Exportação de dados preenchidos
   - Formatação profissional
   - Remoção de orientações do documento final

5. **Funcionalidades de Sistema**
   - Botão Salvar (força salvamento)
   - Botão Limpar (reset completo)
   - Indicadores visuais de progresso

### 🚧 Para Implementação Futura
1. **Passos 2-5**
   - Implementar formulários específicos
   - Adicionar campos conforme roteiro original
   - Integrar com sistema de progresso

2. **Melhorias no PDF**
   - Templates mais elaborados
   - Gráficos e tabelas
   - Logotipos institucionais

3. **Funcionalidades Avançadas**
   - Exportação para outros formatos
   - Importação de dados
   - Colaboração em tempo real

## Configuração de Desenvolvimento

### Dependências Principais
```json
{
  "react": "^18.3.1",
  "vite": "^6.3.5",
  "tailwindcss": "^3.4.17",
  "jspdf": "^2.5.2",
  "react-hook-form": "^7.54.2"
}
```

### Scripts Disponíveis
- `pnpm run dev`: Servidor de desenvolvimento
- `pnpm run build`: Build para produção
- `pnpm run preview`: Preview do build
- `pnpm run lint`: Verificação de código

### Estrutura de Build
```
dist/
├── index.html          # Página principal
├── assets/
│   ├── index-*.css    # Estilos compilados
│   └── index-*.js     # JavaScript compilado
└── ...                # Outros assets
```

## Considerações de Performance

### Otimizações Implementadas
1. **Code Splitting**: Componentes carregados sob demanda
2. **Lazy Loading**: Imagens e recursos pesados
3. **Memoização**: Componentes React otimizados
4. **Bundle Size**: Dependências otimizadas

### Métricas de Build
- **CSS**: ~90KB (14KB gzipped)
- **JavaScript**: ~1.1MB (330KB gzipped)
- **Total**: Adequado para aplicação web moderna

## Segurança e Privacidade

### Dados do Usuário
- **Armazenamento**: Apenas local (localStorage)
- **Transmissão**: Nenhuma (aplicação offline)
- **Backup**: Responsabilidade do usuário

### Considerações
- Dados não são enviados para servidores externos
- Aplicação funciona completamente offline
- Usuário tem controle total sobre seus dados

## Deployment

### Opções de Hospedagem
1. **Servidor Web Estático**
   - Nginx, Apache
   - Servir pasta `dist/`

2. **Plataformas Cloud**
   - Vercel, Netlify
   - Deploy automático via Git

3. **Servidor Local**
   - Ideal para uso institucional
   - Controle total sobre dados

### Configuração Recomendada
```nginx
server {
    listen 80;
    server_name roteiro-estrategico.ufersa.edu.br;
    
    root /var/www/roteiro-estrategico/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Manutenção e Suporte

### Logs e Debug
- Console do navegador para erros JavaScript
- Network tab para problemas de carregamento
- Application tab para verificar localStorage

### Atualizações
- Versioning semântico
- Changelog documentado
- Testes antes de deploy

### Backup e Recuperação
- Dados no localStorage podem ser exportados
- Implementar funcionalidade de backup/restore
- Documentar procedimentos para usuários

---

**Versão**: 1.0.0  
**Última Atualização**: Julho 2025  
**Desenvolvido para**: UFERSA - Oficina de Planejamento Estratégico

