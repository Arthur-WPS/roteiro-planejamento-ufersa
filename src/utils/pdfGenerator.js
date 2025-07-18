import jsPDF from 'jspdf';

export const generatePDF = (data) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 7;
  let currentY = margin;

  // Função para adicionar texto com quebra de linha
  const addText = (text, fontSize = 12, isBold = false, isTitle = false) => {
    if (isTitle) {
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
    } else if (isBold) {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', 'normal');
    }

    const textLines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    
    // Verificar se precisa de nova página
    if (currentY + (textLines.length * lineHeight) > pageHeight - margin) {
      doc.addPage();
      currentY = margin;
    }

    doc.text(textLines, margin, currentY);
    currentY += textLines.length * lineHeight + (isTitle ? 10 : 5);
  };

  // Função para adicionar seção
  const addSection = (title, content) => {
    // Verificar se o conteúdo existe e não está vazio
    if (content && typeof content === 'string' && content.trim() !== '') {
      addText(title, 14, true);
      addText(content, 11);
      currentY += 5;
    } else if (content && typeof content === 'object') {
      // Se for um objeto, tentar converter para string
      const contentStr = JSON.stringify(content, null, 2);
      if (contentStr && contentStr !== '{}' && contentStr !== '[]') {
        addText(title, 14, true);
        addText(contentStr, 11);
        currentY += 5;
      }
    }
  };

  // Cabeçalho do documento
  addText('PLANEJAMENTO ESTRATÉGICO', 18, true, true);
  addText('PROGRAMA DE PÓS-GRADUAÇÃO', 16, true);
  currentY += 10;

  // Informações básicas (se disponíveis)
  if (data.programInfo) {
    addSection('PROGRAMA:', data.programInfo.nome || '');
    addSection('INSTITUIÇÃO:', data.programInfo.instituicao || '');
    addSection('ÁREA DE CONCENTRAÇÃO:', data.programInfo.areaConcentracao || '');
    currentY += 10;
  }

  // PASSO 1: Delimitação do Problema-objeto
  if (data.step1) {
    addText('1. DELIMITAÇÃO DO PROBLEMA-OBJETO', 16, true, true);
    
    addSection('1.1 Problema-objeto do Programa', data.step1.problemaObjeto);
    addSection('1.2 Relevância Epistemológica', data.step1.relevanciaEpistemologica);
    addSection('1.3 Relevância Societal', data.step1.relevanciaSocietal);
    addSection('1.4 Competências Docentes Relacionadas', data.step1.competenciasDocentes);
    addSection('1.5 Infraestrutura e Recursos Disponíveis', data.step1.infraestrutura);
    addSection('1.6 Linhas de Pesquisa Envolvidas', data.step1.linhasPesquisa);
    addSection('1.7 Processo de Validação', data.step1.processoValidacao);
    addSection('1.8 Principais Feedbacks Recebidos', data.step1.feedbacksRecebidos);
  }

  // PASSO 2: Definição de Identidade e Horizontes
  if (data.step2) {
    addText('2. DEFINIÇÃO DE IDENTIDADE E HORIZONTES', 16, true, true);
    
    addSection('2.1 Missão', data.step2.missao);
    addSection('2.2 Visão', data.step2.visao);
    addSection('2.3 Valores', data.step2.valores);
    addSection('2.4 Objetivos Estratégicos', data.step2.objetivosEstrategicos);
    addSection('2.5 Metas de Longo Prazo', data.step2.metasLongoPrazo);
  }

  // PASSO 3: Análise do Contexto
  if (data.step3) {
    addText('3. ANÁLISE DO CONTEXTO', 16, true, true);
    
    addSection('3.1 Forças (Strengths)', data.step3.forcas);
    addSection('3.2 Fraquezas (Weaknesses)', data.step3.fraquezas);
    addSection('3.3 Oportunidades (Opportunities)', data.step3.oportunidades);
    addSection('3.4 Ameaças (Threats)', data.step3.ameacas);
    addSection('3.5 Análise de Causas (Diagrama de Ishikawa)', data.step3.analiseIshikawa);
    addSection('3.6 Priorização de Questões', data.step3.priorizacao);
  }

  // PASSO 4: Plano de Ações Estratégicas
  if (data.step4) {
    addText('4. PLANO DE AÇÕES ESTRATÉGICAS', 16, true, true);
    
    if (data.step4.acoes && Array.isArray(data.step4.acoes)) {
      data.step4.acoes.forEach((acao, index) => {
        addText(`4.${index + 1} Ação Estratégica ${index + 1}`, 14, true);
        addSection('O que (What):', acao.what);
        addSection('Por que (Why):', acao.why);
        addSection('Quem (Who):', acao.who);
        addSection('Quando (When):', acao.when);
        addSection('Onde (Where):', acao.where);
        addSection('Como (How):', acao.how);
        addSection('Quanto (How Much):', acao.howMuch);
        addSection('Indicadores:', acao.indicadores);
        currentY += 5;
      });
    }
  }

  // PASSO 5: Implementação
  if (data.step5) {
    addText('5. IMPLEMENTAÇÃO DO PLANEJAMENTO', 16, true, true);
    
    addSection('5.1 Estrutura de Governança', data.step5.governanca);
    addSection('5.2 Cronograma de Implementação', data.step5.cronograma);
    addSection('5.3 Sistema de Monitoramento', data.step5.monitoramento);
    addSection('5.4 Indicadores de Desempenho', data.step5.indicadores);
    addSection('5.5 Processo de Avaliação', data.step5.avaliacao);
    addSection('5.6 Mecanismos de Ajuste', data.step5.ajustes);
  }

  // Rodapé
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `Página ${i} de ${totalPages}`,
      pageWidth - margin - 30,
      pageHeight - 10
    );
    doc.text(
      `Gerado em: ${new Date().toLocaleDateString('pt-BR')}`,
      margin,
      pageHeight - 10
    );
  }

  return doc;
};

export const downloadPDF = (data, filename = 'planejamento-estrategico.pdf') => {
  const doc = generatePDF(data);
  doc.save(filename);
};

export const previewPDF = (data) => {
  const doc = generatePDF(data);
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank');
};

