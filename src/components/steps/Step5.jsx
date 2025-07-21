import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import FormField from '../FormField';
import { useData } from '../../context/DataContext';

const Step5 = () => {
  const { data, updateData } = useData();

  const handleChange = (field, value) => {
    updateData('step5', field, value);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800">Passo 5: Monitoramento e Avaliação</CardTitle>
          <CardDescription>
            Estabeleça um sistema de monitoramento e avaliação para acompanhar o progresso 
            e medir o sucesso das estratégias implementadas.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Indicadores de Desempenho */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Indicadores de Desempenho</h3>
            
            <FormField
              label="Indicadores Quantitativos"
              type="textarea"
              value={data.step5?.quantitativeIndicators || ''}
              onChange={(value) => handleChange('quantitativeIndicators', value)}
              placeholder="Liste os indicadores quantitativos que serão monitorados (ex: número de publicações Qualis A, tempo médio de titulação, taxa de evasão...)"
              rows={4}
            />

            <FormField
              label="Indicadores Qualitativos"
              type="textarea"
              value={data.step5?.qualitativeIndicators || ''}
              onChange={(value) => handleChange('qualitativeIndicators', value)}
              placeholder="Defina os indicadores qualitativos (ex: satisfação dos discentes, qualidade das parcerias, impacto social das pesquisas...)"
              rows={4}
            />

            <FormField
              label="Metas por Indicador"
              type="textarea"
              value={data.step5?.indicatorTargets || ''}
              onChange={(value) => handleChange('indicatorTargets', value)}
              placeholder="Estabeleça metas específicas para cada indicador (ex: Aumentar publicações A1+A2 em 50% até 2027, reduzir tempo médio de titulação para 24 meses...)"
              rows={4}
            />
          </div>

          {/* Sistema de Monitoramento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Sistema de Monitoramento</h3>
            
            <FormField
              label="Periodicidade do Monitoramento"
              type="textarea"
              value={data.step5?.monitoringFrequency || ''}
              onChange={(value) => handleChange('monitoringFrequency', value)}
              placeholder="Defina a periodicidade do monitoramento (ex: mensal para indicadores operacionais, semestral para indicadores estratégicos...)"
              rows={3}
            />

            <FormField
              label="Responsáveis pelo Monitoramento"
              type="textarea"
              value={data.step5?.monitoringResponsibles || ''}
              onChange={(value) => handleChange('monitoringResponsibles', value)}
              placeholder="Identifique os responsáveis pelo monitoramento: coordenação, comissões, secretaria..."
              rows={3}
            />

            <FormField
              label="Ferramentas de Monitoramento"
              type="textarea"
              value={data.step5?.monitoringTools || ''}
              onChange={(value) => handleChange('monitoringTools', value)}
              placeholder="Descreva as ferramentas que serão utilizadas: planilhas, sistemas informatizados, dashboards..."
              rows={3}
            />

            <FormField
              label="Fontes de Dados"
              type="textarea"
              value={data.step5?.dataSources || ''}
              onChange={(value) => handleChange('dataSources', value)}
              placeholder="Identifique as fontes de dados: SUCUPIRA, sistemas internos, pesquisas de satisfação, relatórios..."
              rows={3}
            />
          </div>

          {/* Processo de Avaliação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Processo de Avaliação</h3>
            
            <FormField
              label="Avaliação Interna"
              type="textarea"
              value={data.step5?.internalEvaluation || ''}
              onChange={(value) => handleChange('internalEvaluation', value)}
              placeholder="Descreva o processo de autoavaliação: comissões, metodologia, periodicidade..."
              rows={3}
            />

            <FormField
              label="Avaliação Externa"
              type="textarea"
              value={data.step5?.externalEvaluation || ''}
              onChange={(value) => handleChange('externalEvaluation', value)}
              placeholder="Defina processos de avaliação externa: consultores, pares, avaliação CAPES..."
              rows={3}
            />

            <FormField
              label="Critérios de Avaliação"
              type="textarea"
              value={data.step5?.evaluationCriteria || ''}
              onChange={(value) => handleChange('evaluationCriteria', value)}
              placeholder="Estabeleça os critérios de avaliação: eficácia, eficiência, impacto, sustentabilidade..."
              rows={3}
            />
          </div>

          {/* Relatórios e Comunicação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Relatórios e Comunicação</h3>
            
            <FormField
              label="Relatórios de Acompanhamento"
              type="textarea"
              value={data.step5?.followUpReports || ''}
              onChange={(value) => handleChange('followUpReports', value)}
              placeholder="Defina os tipos de relatórios: executivos, técnicos, para diferentes públicos..."
              rows={3}
            />

            <FormField
              label="Comunicação dos Resultados"
              type="textarea"
              value={data.step5?.resultsCommunication || ''}
              onChange={(value) => handleChange('resultsCommunication', value)}
              placeholder="Descreva como os resultados serão comunicados: reuniões, site, boletins, apresentações..."
              rows={3}
            />

            <FormField
              label="Transparência e Prestação de Contas"
              type="textarea"
              value={data.step5?.transparency || ''}
              onChange={(value) => handleChange('transparency', value)}
              placeholder="Estabeleça mecanismos de transparência: publicação de dados, acesso à informação..."
              rows={3}
            />
          </div>

          {/* Revisão e Ajustes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Revisão e Ajustes</h3>
            
            <FormField
              label="Processo de Revisão Estratégica"
              type="textarea"
              value={data.step5?.strategicReview || ''}
              onChange={(value) => handleChange('strategicReview', value)}
              placeholder="Defina como e quando o planejamento será revisado: periodicidade, gatilhos, metodologia..."
              rows={3}
            />

            <FormField
              label="Mecanismos de Ajuste"
              type="textarea"
              value={data.step5?.adjustmentMechanisms || ''}
              onChange={(value) => handleChange('adjustmentMechanisms', value)}
              placeholder="Estabeleça mecanismos para ajustes: correções de rota, revisão de metas, novas estratégias..."
              rows={3}
            />

            <FormField
              label="Aprendizado Organizacional"
              type="textarea"
              value={data.step5?.organizationalLearning || ''}
              onChange={(value) => handleChange('organizationalLearning', value)}
              placeholder="Descreva como o programa incorporará os aprendizados: documentação de lições, melhores práticas..."
              rows={3}
            />
          </div>

          {/* Gestão de Riscos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Gestão de Riscos</h3>
            
            <FormField
              label="Identificação de Riscos"
              type="textarea"
              value={data.step5?.riskIdentification || ''}
              onChange={(value) => handleChange('riskIdentification', value)}
              placeholder="Identifique os principais riscos que podem afetar o planejamento: financeiros, operacionais, estratégicos..."
              rows={3}
            />

            <FormField
              label="Planos de Contingência"
              type="textarea"
              value={data.step5?.contingencyPlans || ''}
              onChange={(value) => handleChange('contingencyPlans', value)}
              placeholder="Desenvolva planos de contingência para os principais riscos identificados..."
              rows={3}
            />
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default Step5;

