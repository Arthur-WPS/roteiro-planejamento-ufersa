# Roteiro de Planejamento Estratégico - Versão Web

Uma aplicação web interativa para auxiliar coordenadores de programas de pós-graduação na criação de planejamentos estratégicos, baseada na metodologia da CAPES.

## Características Principais

### ✨ Funcionalidades
- **Interface Intuitiva**: Navegação simples e organizada por passos
- **Salvamento Automático**: Dados salvos automaticamente no navegador
- **Geração de PDF**: Exportação do planejamento final sem orientações
- **Responsivo**: Funciona em desktop, tablet e mobile
- **Progresso Visual**: Acompanhamento do preenchimento em tempo real

### 📋 Estrutura do Roteiro
1. **Passo 1**: Delimitação do Problema-objeto
2. **Passo 2**: Definição de Identidade e Horizontes
3. **Passo 3**: Análise do Contexto
4. **Passo 4**: Elaboração do Plano de Ações Estratégicas
5. **Passo 5**: Implementação do Planejamento
6. **Finalização**: Revisão e geração do documento final

## Como Usar

### 1. Navegação
- Use os botões numerados no topo para navegar entre os passos
- Use a barra lateral esquerda para acesso rápido às seções
- Os botões "Passo Anterior" e "Próximo Passo" estão disponíveis no final de cada seção

### 2. Preenchimento
- Preencha os campos conforme as orientações fornecidas
- Campos obrigatórios são marcados com asterisco (*)
- Os dados são salvos automaticamente conforme você digita
- Use o botão "Salvar" para forçar o salvamento manual

### 3. Acompanhamento do Progresso
- A barra de progresso no topo mostra o percentual geral de conclusão
- Cada passo mostra quantos campos foram preenchidos
- Indicadores visuais mostram o status de cada seção

### 4. Geração do Documento Final
- Acesse a seção "Finalização" após preencher os dados
- Revise o progresso de cada passo
- Clique em "Baixar PDF" para gerar o documento final
- O PDF contém apenas os dados preenchidos, sem as orientações

### 5. Gerenciamento de Dados
- **Salvar**: Força o salvamento dos dados no navegador
- **Limpar**: Remove todos os dados preenchidos (use com cuidado!)
- **Dados Persistentes**: Os dados ficam salvos mesmo após fechar o navegador

## Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone ou extraia o projeto
cd roteiro-estrategico-web

# Instale as dependências
pnpm install

# Execute em modo de desenvolvimento
pnpm run dev

# Ou faça o build para produção
pnpm run build
```

### Execução
- **Desenvolvimento**: `pnpm run dev` - Acesse http://localhost:5173
- **Produção**: Sirva os arquivos da pasta `dist/` em um servidor web

## Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Estilização
- **shadcn/ui**: Componentes de interface
- **jsPDF**: Geração de documentos PDF
- **React Hook Form**: Gerenciamento de formulários

## Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── steps/          # Componentes de cada passo
│   ├── ui/             # Componentes de interface (shadcn/ui)
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── Sidebar.jsx     # Barra lateral
│   └── FormField.jsx   # Campo de formulário reutilizável
├── context/            # Contextos React
│   └── DataContext.jsx # Gerenciamento de estado global
├── utils/              # Utilitários
│   └── pdfGenerator.js # Geração de PDF
├── App.jsx             # Componente principal
└── main.jsx            # Ponto de entrada
```

## Suporte e Manutenção

### Backup de Dados
Os dados são salvos no localStorage do navegador. Para fazer backup:
1. Acesse as ferramentas de desenvolvedor (F12)
2. Vá para Application > Local Storage
3. Procure por "roteiro-estrategico-data"

### Solução de Problemas
- **Dados perdidos**: Verifique se o localStorage não foi limpo
- **PDF não gera**: Verifique se há dados preenchidos
- **Interface não carrega**: Limpe o cache do navegador

### Personalização
A aplicação pode ser personalizada editando:
- **Cores**: Arquivo `src/App.css` e classes Tailwind
- **Campos**: Componentes em `src/components/steps/`
- **PDF**: Arquivo `src/utils/pdfGenerator.js`

## Licença

Este projeto foi desenvolvido para uso acadêmico na UFERSA e pode ser adaptado conforme necessário.

---

**Desenvolvido para a Oficina de Planejamento Estratégico - UFERSA**
*Baseado na metodologia da CAPES para programas de pós-graduação stricto sensu*

