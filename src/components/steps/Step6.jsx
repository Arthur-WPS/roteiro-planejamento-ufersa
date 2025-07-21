import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import FormField from '../FormField';
import { useData } from '../../context/DataContext';

const Step6 = () => {
  const { data, updateData } = useData();

  const handleChange = (field, value) => {
    updateData('step6', field, value);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800">Passo 6: Implementação e Sustentabilidade</CardTitle>
          <CardDescription>
            Defina as condições e estratégias para implementação efetiva e sustentabilidade 
            do planejamento estratégico ao longo do tempo.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Plano de Implementação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Plano de Implementação</h3>
            
            <FormField
              label="Fases de Implementação"
              type="textarea"
              value={data.step6?.implementationPhases || ''}
              onChange={(value) => handleChange('implementationPhases', value)}
              placeholder="Descreva as fases de implementação do planejamento: preparação, execução, consolidação..."
              rows={4}
            />

            <FormField
              label="Cronograma Detalhado"
              type="textarea"
              value={data.step6?.detailedSchedule || ''}
              onChange={(value) => handleChange('detailedSchedule', value)}
              placeholder="Estabeleça um cronograma detalhado com marcos e prazos específicos para cada ação..."
              rows={4}
            />

            <FormField
              label="Recursos para Implementação"
              type="textarea"
              value={data.step6?.implementationResources || ''}
              onChange={(value) => handleChange('implementationResources', value)}
              placeholder="Detalhe todos os recursos necessários: humanos, financeiros, tecnológicos, infraestrutura..."
              rows={4}
            />

            <FormField
              label="Estrutura de Governança"
              type="textarea"
              value={data.step6?.governanceStructure || ''}
              onChange={(value) => handleChange('governanceStructure', value)}
              placeholder="Defina a estrutura de governança: comitê gestor, grupos de trabalho, responsabilidades..."
              rows={3}
            />
          </div>

          {/* Gestão da Mudança */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Gestão da Mudança</h3>
            
            <FormField
              label="Estratégias de Comunicação"
              type="textarea"
              value={data.step6?.communicationStrategies || ''}
              onChange={(value) => handleChange('communicationStrategies', value)}
              placeholder="Desenvolva estratégias de comunicação para engajar a comunidade acadêmica..."
              rows={3}
            />

            <FormField
              label="Capacitação e Treinamento"
              type="textarea"
              value={data.step6?.trainingCapacitation || ''}
              onChange={(value) => handleChange('trainingCapacitation', value)}
              placeholder="Identifique necessidades de capacitação: docentes, técnicos, discentes..."
              rows={3}
            />

            <FormField
              label="Resistências e Desafios"
              type="textarea"
              value={data.step6?.resistancesChallenges || ''}
              onChange={(value) => handleChange('resistancesChallenges', value)}
              placeholder="Antecipe possíveis resistências e desafios na implementação e como superá-los..."
              rows={3}
            />

            <FormField
              label="Incentivos e Motivação"
              type="textarea"
              value={data.step6?.incentivesMotivation || ''}
              onChange={(value) => handleChange('incentivesMotivation', value)}
              placeholder="Estabeleça incentivos para motivar a participação e o engajamento..."
              rows={3}
            />
          </div>

          {/* Sustentabilidade Financeira */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Sustentabilidade Financeira</h3>
            
            <FormField
              label="Fontes de Financiamento"
              type="textarea"
              value={data.step6?.fundingSources || ''}
              onChange={(value) => handleChange('fundingSources', value)}
              placeholder="Identifique e diversifique as fontes de financiamento: CAPES, CNPq, FAPs, parcerias..."
              rows={3}
            />

            <FormField
              label="Orçamento Plurianual"
              type="textarea"
              value={data.step6?.multiYearBudget || ''}
              onChange={(value) => handleChange('multiYearBudget', value)}
              placeholder="Elabore um orçamento plurianual para sustentar as ações do planejamento..."
              rows={3}
            />

            <FormField
              label="Estratégias de Captação"
              type="textarea"
              value={data.step6?.fundraisingStrategies || ''}
              onChange={(value) => handleChange('fundraisingStrategies', value)}
              placeholder="Desenvolva estratégias para captação de recursos: projetos, parcerias, editais..."
              rows={3}
            />
          </div>

          {/* Sustentabilidade Institucional */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Sustentabilidade Institucional</h3>
            
            <FormField
              label="Institucionalização do Planejamento"
              type="textarea"
              value={data.step6?.planningInstitutionalization || ''}
              onChange={(value) => handleChange('planningInstitutionalization', value)}
              placeholder="Descreva como o planejamento estratégico será institucionalizado: regimentos, normas..."
              rows={3}
            />

            <FormField
              label="Continuidade Administrativa"
              type="textarea"
              value={data.step6?.administrativeContinuity || ''}
              onChange={(value) => handleChange('administrativeContinuity', value)}
              placeholder="Garanta a continuidade independente de mudanças na coordenação..."
              rows={3}
            />

            <FormField
              label="Cultura Organizacional"
              type="textarea"
              value={data.step6?.organizationalCulture || ''}
              onChange={(value) => handleChange('organizationalCulture', value)}
              placeholder="Promova uma cultura de planejamento e melhoria contínua..."
              rows={3}
            />
          </div>

          {/* Parcerias e Redes */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Parcerias e Redes</h3>
            
            <FormField
              label="Parcerias Estratégicas"
              type="textarea"
              value={data.step6?.strategicPartnerships || ''}
              onChange={(value) => handleChange('strategicPartnerships', value)}
              placeholder="Desenvolva parcerias estratégicas para fortalecer o programa: universidades, empresas, governo..."
              rows={3}
            />

            <FormField
              label="Redes de Colaboração"
              type="textarea"
              value={data.step6?.collaborationNetworks || ''}
              onChange={(value) => handleChange('collaborationNetworks', value)}
              placeholder="Participe de redes de colaboração acadêmica e científica..."
              rows={3}
            />

            <FormField
              label="Internacionalização"
              type="textarea"
              value={data.step6?.internationalization || ''}
              onChange={(value) => handleChange('internationalization', value)}
              placeholder="Estabeleça estratégias de internacionalização sustentáveis..."
              rows={3}
            />
          </div>

          {/* Inovação e Adaptação */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Inovação e Adaptação</h3>
            
            <FormField
              label="Capacidade de Inovação"
              type="textarea"
              value={data.step6?.innovationCapacity || ''}
              onChange={(value) => handleChange('innovationCapacity', value)}
              placeholder="Desenvolva capacidade de inovação e adaptação a mudanças..."
              rows={3}
            />

            <FormField
              label="Flexibilidade Estratégica"
              type="textarea"
              value={data.step6?.strategicFlexibility || ''}
              onChange={(value) => handleChange('strategicFlexibility', value)}
              placeholder="Mantenha flexibilidade para adaptar estratégias conforme necessário..."
              rows={3}
            />

            <FormField
              label="Antecipação de Tendências"
              type="textarea"
              value={data.step6?.trendAnticipation || ''}
              onChange={(value) => handleChange('trendAnticipation', value)}
              placeholder="Desenvolva mecanismos para antecipar tendências na área..."
              rows={3}
            />
          </div>

          {/* Legado e Impacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Legado e Impacto</h3>
            
            <FormField
              label="Impacto Esperado"
              type="textarea"
              value={data.step6?.expectedImpact || ''}
              onChange={(value) => handleChange('expectedImpact', value)}
              placeholder="Descreva o impacto esperado do planejamento: na instituição, na região, na área de conhecimento..."
              rows={3}
            />

            <FormField
              label="Legado para Futuras Gerações"
              type="textarea"
              value={data.step6?.legacyFutureGenerations || ''}
              onChange={(value) => handleChange('legacyFutureGenerations', value)}
              placeholder="Defina o legado que o programa deixará para futuras gerações..."
              rows={3}
            />

            <FormField
              label="Contribuição para o Desenvolvimento"
              type="textarea"
              value={data.step6?.developmentContribution || ''}
              onChange={(value) => handleChange('developmentContribution', value)}
              placeholder="Explicite como o programa contribuirá para o desenvolvimento científico, tecnológico e social..."
              rows={3}
            />
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default Step6;

