import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import FormField from '../FormField';
import { useData } from '../../context/DataContext';

const Step2 = () => {
  const { data, updateData } = useData();

  const handleChange = (field, value) => {
    updateData('step2', field, value);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800">Passo 2: Análise Situacional</CardTitle>
          <CardDescription>
            Realize uma análise detalhada da situação atual do programa, identificando pontos fortes, 
            fracos, oportunidades e ameaças.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Análise SWOT */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Análise SWOT</h3>
            
            <FormField
              label="Pontos Fortes (Strengths)"
              type="textarea"
              value={data.step2?.strengths || ''}
              onChange={(value) => handleChange('strengths', value)}
              placeholder="Liste os principais pontos fortes do programa (ex: corpo docente qualificado, infraestrutura adequada, parcerias estratégicas...)"
              rows={4}
            />

            <FormField
              label="Pontos Fracos (Weaknesses)"
              type="textarea"
              value={data.step2?.weaknesses || ''}
              onChange={(value) => handleChange('weaknesses', value)}
              placeholder="Identifique as principais fragilidades do programa (ex: baixa produção científica, falta de recursos, infraestrutura deficiente...)"
              rows={4}
            />

            <FormField
              label="Oportunidades (Opportunities)"
              type="textarea"
              value={data.step2?.opportunities || ''}
              onChange={(value) => handleChange('opportunities', value)}
              placeholder="Descreva as oportunidades externas que podem beneficiar o programa (ex: editais de fomento, parcerias internacionais, demandas do mercado...)"
              rows={4}
            />

            <FormField
              label="Ameaças (Threats)"
              type="textarea"
              value={data.step2?.threats || ''}
              onChange={(value) => handleChange('threats', value)}
              placeholder="Identifique as ameaças externas que podem prejudicar o programa (ex: cortes de financiamento, concorrência, mudanças regulatórias...)"
              rows={4}
            />
          </div>

          {/* Análise de Recursos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Análise de Recursos</h3>
            
            <FormField
              label="Recursos Humanos"
              type="textarea"
              value={data.step2?.humanResources || ''}
              onChange={(value) => handleChange('humanResources', value)}
              placeholder="Descreva a situação atual dos recursos humanos (docentes, técnicos, discentes): quantitativo, qualificação, dedicação..."
              rows={3}
            />

            <FormField
              label="Recursos Financeiros"
              type="textarea"
              value={data.step2?.financialResources || ''}
              onChange={(value) => handleChange('financialResources', value)}
              placeholder="Analise os recursos financeiros disponíveis: orçamento, fontes de financiamento, sustentabilidade..."
              rows={3}
            />

            <FormField
              label="Infraestrutura e Equipamentos"
              type="textarea"
              value={data.step2?.infrastructure || ''}
              onChange={(value) => handleChange('infrastructure', value)}
              placeholder="Avalie a infraestrutura física e tecnológica: laboratórios, equipamentos, biblioteca, espaços de estudo..."
              rows={3}
            />
          </div>

          {/* Análise de Desempenho */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Análise de Desempenho</h3>
            
            <FormField
              label="Indicadores de Produção Acadêmica"
              type="textarea"
              value={data.step2?.academicProduction || ''}
              onChange={(value) => handleChange('academicProduction', value)}
              placeholder="Analise a produção acadêmica: publicações, teses/dissertações defendidas, participação em eventos..."
              rows={3}
            />

            <FormField
              label="Indicadores de Formação"
              type="textarea"
              value={data.step2?.trainingIndicators || ''}
              onChange={(value) => handleChange('trainingIndicators', value)}
              placeholder="Avalie os indicadores de formação: tempo médio de titulação, taxa de evasão, inserção profissional dos egressos..."
              rows={3}
            />

            <FormField
              label="Avaliação CAPES"
              type="textarea"
              value={data.step2?.capesEvaluation || ''}
              onChange={(value) => handleChange('capesEvaluation', value)}
              placeholder="Descreva o histórico de avaliação CAPES: nota atual, evolução, principais pontos de atenção..."
              rows={3}
            />
          </div>

          {/* Análise do Ambiente Externo */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Análise do Ambiente Externo</h3>
            
            <FormField
              label="Contexto Institucional"
              type="textarea"
              value={data.step2?.institutionalContext || ''}
              onChange={(value) => handleChange('institutionalContext', value)}
              placeholder="Analise o contexto da instituição: políticas institucionais, apoio da reitoria, integração com outros programas..."
              rows={3}
            />

            <FormField
              label="Demandas da Sociedade"
              type="textarea"
              value={data.step2?.societyDemands || ''}
              onChange={(value) => handleChange('societyDemands', value)}
              placeholder="Identifique as demandas da sociedade relacionadas à área do programa: necessidades regionais, mercado de trabalho..."
              rows={3}
            />

            <FormField
              label="Cenário Nacional e Internacional"
              type="textarea"
              value={data.step2?.nationalInternationalScenario || ''}
              onChange={(value) => handleChange('nationalInternationalScenario', value)}
              placeholder="Analise o cenário da área no âmbito nacional e internacional: tendências, desafios, oportunidades..."
              rows={3}
            />
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default Step2;

