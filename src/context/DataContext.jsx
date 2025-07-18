import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Estrutura inicial dos dados
const initialData = {
  // Passo 1: Delimitação do Problema-objeto
  step1: {
    problemaObjeto: '',
    relevanciaEpistemologica: '',
    relevanciaSocietal: '',
    competenciasDocentes: '',
    infraestrutura: '',
    linhasPesquisa: '',
    processoValidacao: '',
    feedbacksRecebidos: ''
  },
  
  // Passo 2: Definição de Identidade e Horizontes
  step2: {
    missao: '',
    visao: '',
    valores: [
      { nome: '', descricao: '' },
      { nome: '', descricao: '' },
      { nome: '', descricao: '' },
      { nome: '', descricao: '' },
      { nome: '', descricao: '' }
    ],
    objetivosEstrategicos: [
      { descricao: '', contribuicao: '' },
      { descricao: '', contribuicao: '' },
      { descricao: '', contribuicao: '' }
    ],
    objetivosTaticos: [
      { descricao: '', objetivoRelacionado: '' },
      { descricao: '', objetivoRelacionado: '' },
      { descricao: '', objetivoRelacionado: '' }
    ],
    objetivosOperacionais: [
      { descricao: '', objetivoRelacionado: '' },
      { descricao: '', objetivoRelacionado: '' },
      { descricao: '', objetivoRelacionado: '' }
    ],
    metas: {
      objetivo1: [
        { descricao: '', indicador: '', valorAtual: '', valorMeta: '', prazo: '', responsavel: '' },
        { descricao: '', indicador: '', valorAtual: '', valorMeta: '', prazo: '', responsavel: '' }
      ],
      objetivo2: [
        { descricao: '', indicador: '', valorAtual: '', valorMeta: '', prazo: '', responsavel: '' },
        { descricao: '', indicador: '', valorAtual: '', valorMeta: '', prazo: '', responsavel: '' }
      ],
      objetivo3: [
        { descricao: '', indicador: '', valorAtual: '', valorMeta: '', prazo: '', responsavel: '' },
        { descricao: '', indicador: '', valorAtual: '', valorMeta: '', prazo: '', responsavel: '' }
      ]
    },
    alinhamento: ''
  },
  
  // Passo 3: Análise do Contexto
  step3: {
    forcas: [
      { descricao: '', evidencias: '', contribuicao: '' },
      { descricao: '', evidencias: '', contribuicao: '' },
      { descricao: '', evidencias: '', contribuicao: '' },
      { descricao: '', evidencias: '', contribuicao: '' },
      { descricao: '', evidencias: '', contribuicao: '' }
    ],
    fraquezas: [
      { descricao: '', evidencias: '', impacto: '' },
      { descricao: '', evidencias: '', impacto: '' },
      { descricao: '', evidencias: '', impacto: '' },
      { descricao: '', evidencias: '', impacto: '' },
      { descricao: '', evidencias: '', impacto: '' }
    ],
    oportunidades: [
      { descricao: '', fonte: '', potencial: '' },
      { descricao: '', fonte: '', potencial: '' },
      { descricao: '', fonte: '', potencial: '' },
      { descricao: '', fonte: '', potencial: '' },
      { descricao: '', fonte: '', potencial: '' }
    ],
    ameacas: [
      { descricao: '', probabilidade: '', impacto: '' },
      { descricao: '', probabilidade: '', impacto: '' },
      { descricao: '', probabilidade: '', impacto: '' },
      { descricao: '', probabilidade: '', impacto: '' },
      { descricao: '', probabilidade: '', impacto: '' }
    ],
    estrategiasFO: [
      { forca: '', oportunidade: '', estrategia: '' },
      { forca: '', oportunidade: '', estrategia: '' }
    ],
    estrategiasWO: [
      { fraqueza: '', oportunidade: '', estrategia: '' },
      { fraqueza: '', oportunidade: '', estrategia: '' }
    ],
    estrategiasFT: [
      { forca: '', ameaca: '', estrategia: '' },
      { forca: '', ameaca: '', estrategia: '' }
    ],
    estrategiasWT: [
      { fraqueza: '', ameaca: '', estrategia: '' },
      { fraqueza: '', ameaca: '', estrategia: '' }
    ],
    ishikawa: {
      problema: '',
      gestaoAcademica: ['', '', ''],
      recursosHumanos: ['', '', ''],
      infraestrutura: ['', '', ''],
      processos: ['', '', ''],
      ambienteExterno: ['', '', ''],
      financiamento: ['', '', '']
    },
    matrizGUP: [
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' },
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' },
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' },
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' },
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' },
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' },
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' },
      { problema: '', gravidade: '', urgencia: '', tendencia: '', total: '', prioridade: '' }
    ],
    sintese: '',
    implicacoes: ''
  },
  
  // Passo 4: Elaboração do Plano de Ações Estratégicas
  step4: {
    acoesEstrategicas: [
      {
        titulo: '',
        descricao: '',
        objetivoRelacionado: '',
        problemaOportunidade: '',
        prioridade: 'Alta',
        what: '',
        why: '',
        who: { responsavel: '', equipe: '', stakeholders: '' },
        when: { inicio: '', conclusao: '', marcos: ['', '', ''] },
        where: '',
        how: '',
        howMuch: { financeiros: '', humanos: '', materiais: '', tecnologicos: '', outros: '' }
      },
      {
        titulo: '',
        descricao: '',
        objetivoRelacionado: '',
        problemaOportunidade: '',
        prioridade: 'Alta',
        what: '',
        why: '',
        who: { responsavel: '', equipe: '', stakeholders: '' },
        when: { inicio: '', conclusao: '', marcos: ['', '', ''] },
        where: '',
        how: '',
        howMuch: { financeiros: '', humanos: '', materiais: '', tecnologicos: '', outros: '' }
      },
      {
        titulo: '',
        descricao: '',
        objetivoRelacionado: '',
        problemaOportunidade: '',
        prioridade: 'Alta',
        what: '',
        why: '',
        who: { responsavel: '', equipe: '', stakeholders: '' },
        when: { inicio: '', conclusao: '', marcos: ['', '', ''] },
        where: '',
        how: '',
        howMuch: { financeiros: '', humanos: '', materiais: '', tecnologicos: '', outros: '' }
      },
      {
        titulo: '',
        descricao: '',
        objetivoRelacionado: '',
        problemaOportunidade: '',
        prioridade: 'Média',
        what: '',
        why: '',
        who: { responsavel: '', equipe: '', stakeholders: '' },
        when: { inicio: '', conclusao: '', marcos: ['', '', ''] },
        where: '',
        how: '',
        howMuch: { financeiros: '', humanos: '', materiais: '', tecnologicos: '', outros: '' }
      },
      {
        titulo: '',
        descricao: '',
        objetivoRelacionado: '',
        problemaOportunidade: '',
        prioridade: 'Média',
        what: '',
        why: '',
        who: { responsavel: '', equipe: '', stakeholders: '' },
        when: { inicio: '', conclusao: '', marcos: ['', '', ''] },
        where: '',
        how: '',
        howMuch: { financeiros: '', humanos: '', materiais: '', tecnologicos: '', outros: '' }
      }
    ],
    indicadores: {
      acao1: {
        processo: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ],
        resultado: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ],
        impacto: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ]
      },
      acao2: {
        processo: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ],
        resultado: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ],
        impacto: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ]
      },
      acao3: {
        processo: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ],
        resultado: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ],
        impacto: [
          { indicador: '', medicao: '', frequencia: '', responsavel: '' },
          { indicador: '', medicao: '', frequencia: '', responsavel: '' }
        ]
      }
    },
    riscos: {
      acao1: [
        { descricao: '', probabilidade: '', impacto: '', mitigacao: '', responsavel: '' },
        { descricao: '', probabilidade: '', impacto: '', mitigacao: '', responsavel: '' }
      ],
      acao2: [
        { descricao: '', probabilidade: '', impacto: '', mitigacao: '', responsavel: '' },
        { descricao: '', probabilidade: '', impacto: '', mitigacao: '', responsavel: '' }
      ],
      acao3: [
        { descricao: '', probabilidade: '', impacto: '', mitigacao: '', responsavel: '' },
        { descricao: '', probabilidade: '', impacto: '', mitigacao: '', responsavel: '' }
      ]
    },
    cronograma: {
      ano1: { t1: '', t2: '', t3: '', t4: '' },
      ano2: { t1: '', t2: '', t3: '', t4: '' },
      ano3: { t1: '', t2: '', t3: '', t4: '' }
    },
    orcamento: {
      acao1: { ano1: '', ano2: '', ano3: '', total: '' },
      acao2: { ano1: '', ano2: '', ano3: '', total: '' },
      acao3: { ano1: '', ano2: '', ano3: '', total: '' },
      acao4: { ano1: '', ano2: '', ano3: '', total: '' },
      acao5: { ano1: '', ano2: '', ano3: '', total: '' },
      totalGeral: { ano1: '', ano2: '', ano3: '', total: '' },
      fontes: {
        recursosPropriosInstituicao: '',
        recursosAgenciasFomento: '',
        parceriasSetorPrivado: '',
        outrasFontes: ''
      }
    }
  },
  
  // Passo 5: Implementação do Planejamento
  step5: {
    governanca: {
      coordenadorGeral: '',
      membros: [
        { nome: '', funcao: '' },
        { nome: '', funcao: '' },
        { nome: '', funcao: '' },
        { nome: '', funcao: '' }
      ],
      frequenciaReunioes: '',
      responsabilidades: ''
    },
    comunicacao: {
      publicoInterno: '',
      canaisInternosComunicacao: '',
      frequenciaInternosComunicacao: '',
      publicoExterno: '',
      canaisExternosComunicacao: '',
      frequenciaExternosComunicacao: '',
      estrategiasEngajamento: ''
    },
    capacitacao: [
      { area: '', publicoAlvo: '', tipoCapacitacao: '', responsavel: '' },
      { area: '', publicoAlvo: '', tipoCapacitacao: '', responsavel: '' },
      { area: '', publicoAlvo: '', tipoCapacitacao: '', responsavel: '' }
    ],
    monitoramento: {
      avaliacoesMensais: '',
      avaliacoesTrimestrais: '',
      avaliacoesSemestrais: '',
      avaliacoesAnuais: '',
      instrumentos: {
        questionarios: '',
        entrevistas: '',
        gruposFocais: '',
        analiseDocumental: '',
        observacaoDireta: '',
        outros: ''
      }
    },
    relatorios: {
      responsavel: '',
      distribuicao: ''
    },
    retroalimentacao: {
      reunioesAvaliacao: '',
      pesquisasSatisfacao: '',
      caixasSugestoes: '',
      outros: '',
      revisoesMenores: '',
      revisoesMaiores: ''
    },
    gestaoMudancas: {
      responsavel: ''
    },
    aprendizadoOrganizacional: {
      compartilhamentoBoas: ''
    },
    institucionalizacao: {
      pdiUniversidade: '',
      planejamentoOrcamentario: '',
      avaliacaoDocente: '',
      processosAutoavaliacao: '',
      outros: ''
    },
    continuidade: {
      proximaRevisao: '',
      atualizacoesIntermediarias: '',
      preparacaoProximoCiclo: ''
    }
  },
  
  // Metadados
  metadata: {
    nomePrograma: '',
    coordenador: '',
    dataPreenchimento: '',
    versao: '1.0',
    ultimaAtualizacao: ''
  }
};

// Reducer para gerenciar as ações
const dataReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.step]: {
          ...state[action.step],
          [action.field]: action.value
        }
      };
    
    case 'UPDATE_NESTED_FIELD':
      return {
        ...state,
        [action.step]: {
          ...state[action.step],
          [action.section]: {
            ...state[action.step][action.section],
            [action.field]: action.value
          }
        }
      };
    
    case 'UPDATE_ARRAY_ITEM':
      const newArray = [...state[action.step][action.field]];
      newArray[action.index] = action.value;
      return {
        ...state,
        [action.step]: {
          ...state[action.step],
          [action.field]: newArray
        }
      };
    
    case 'UPDATE_NESTED_ARRAY_ITEM':
      const newNestedArray = [...state[action.step][action.section][action.field]];
      newNestedArray[action.index] = action.value;
      return {
        ...state,
        [action.step]: {
          ...state[action.step],
          [action.section]: {
            ...state[action.step][action.section],
            [action.field]: newNestedArray
          }
        }
      };
    
    case 'LOAD_DATA':
      return action.data;
    
    case 'RESET_DATA':
      return initialData;
    
    default:
      return state;
  }
};

// Contexto
const DataContext = createContext();

// Provider
export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, initialData);

  // Carregar dados do localStorage na inicialização
  useEffect(() => {
    const savedData = localStorage.getItem('roteiro-estrategico-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'LOAD_DATA', data: parsedData });
      } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
      }
    }
  }, []);

  // Salvar dados no localStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem('roteiro-estrategico-data', JSON.stringify(data));
  }, [data]);

  // Funções auxiliares
  const updateField = (step, field, value) => {
    dispatch({ type: 'UPDATE_FIELD', step, field, value });
  };

  const updateNestedField = (step, section, field, value) => {
    dispatch({ type: 'UPDATE_NESTED_FIELD', step, section, field, value });
  };

  const updateArrayItem = (step, field, index, value) => {
    dispatch({ type: 'UPDATE_ARRAY_ITEM', step, field, index, value });
  };

  const updateNestedArrayItem = (step, section, field, index, value) => {
    dispatch({ type: 'UPDATE_NESTED_ARRAY_ITEM', step, section, field, index, value });
  };

  const resetData = () => {
    dispatch({ type: 'RESET_DATA' });
  };

  const exportData = () => {
    return JSON.stringify(data, null, 2);
  };

  const importData = (jsonData) => {
    try {
      const parsedData = JSON.parse(jsonData);
      dispatch({ type: 'LOAD_DATA', data: parsedData });
      return true;
    } catch (error) {
      console.error('Erro ao importar dados:', error);
      return false;
    }
  };

  const value = {
    data,
    updateField,
    updateNestedField,
    updateArrayItem,
    updateNestedArrayItem,
    resetData,
    exportData,
    importData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData deve ser usado dentro de um DataProvider');
  }
  return context;
};

export default DataContext;

