import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import FormField from '../FormField';
import { useData } from '../../context/DataContext';

const Step4 = () => {
  const { data, updateData } = useData();

  const handleChange = (field, value) => {
    updateData('step4', field, value);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800">Passo 4: Estratégias e Ações</CardTitle>
          <CardDescription>
            Defina as estratégias e ações específicas que serão implementadas para alcançar 
            os objetivos estabelecidos no passo anterior.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Estratégias Gerais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Estratégias Gerais</h3>
            
            <FormField
              label="Estratégia 1"
              type="textarea"
              value={data.step4?.strategy1 || ''}
              onChange={(value) => handleChange('strategy1', value)}
              placeholder="Primeira estratégia principal para alcançar os objetivos (ex: Implementar programa de capacitação docente...)"
              rows={3}
            />

            <FormField
              label="Estratégia 2"
              type="textarea"
              value={data.step4?.strategy2 || ''}
              onChange={(value) => handleChange('strategy2', value)}
              placeholder="Segunda estratégia principal (ex: Estabelecer parcerias estratégicas com instituições nacionais e internacionais...)"
              rows={3}
            />

            <FormField
              label="Estratégia 3"
              type="textarea"
              value={data.step4?.strategy3 || ''}
              onChange={(value) => handleChange('strategy3', value)}
              placeholder="Terceira estratégia principal (ex: Modernizar infraestrutura de pesquisa...)"
              rows={3}
            />

            <FormField
              label="Estratégia 4"
              type="textarea"
              value={data.step4?.strategy4 || ''}
              onChange={(value) => handleChange('strategy4', value)}
              placeholder="Quarta estratégia principal (opcional)"
              rows={3}
            />
          </div>

          {/* Ações por Estratégia */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Ações Específicas</h3>
            
            <FormField
              label="Ações para Melhoria da Produção Científica"
              type="textarea"
              value={data.step4?.scientificProductionActions || ''}
              onChange={(value) => handleChange('scientificProductionActions', value)}
              placeholder="Liste as ações específicas para melhorar a produção científica: incentivos à publicação, grupos de pesquisa, eventos científicos..."
              rows={4}
            />

            <FormField
              label="Ações para Formação de Recursos Humanos"
              type="textarea"
              value={data.step4?.humanResourcesActions || ''}
              onChange={(value) => handleChange('humanResourcesActions', value)}
              placeholder="Defina ações para melhorar a formação: acompanhamento pedagógico, seminários de pesquisa, qualificação de docentes..."
              rows={4}
            />

            <FormField
              label="Ações para Inserção Social"
              type="textarea"
              value={data.step4?.socialInsertionActions || ''}
              onChange={(value) => handleChange('socialInsertionActions', value)}
              placeholder="Especifique ações de inserção social: projetos de extensão, parcerias com setor produtivo, transferência de tecnologia..."
              rows={4}
            />

            <FormField
              label="Ações para Internacionalização"
              type="textarea"
              value={data.step4?.internationalizationActions || ''}
              onChange={(value) => handleChange('internationalizationActions', value)}
              placeholder="Detalhe ações de internacionalização: acordos de cooperação, mobilidade acadêmica, publicações internacionais..."
              rows={4}
            />
          </div>

          {/* Plano de Ação Detalhado */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Plano de Ação Detalhado</h3>
            
            <FormField
              label="Ação Prioritária 1"
              type="textarea"
              value={data.step4?.priorityAction1 || ''}
              onChange={(value) => handleChange('priorityAction1', value)}
              placeholder="Descreva a primeira ação prioritária: O que será feito? Como? Quando? Quem será responsável? Recursos necessários?"
              rows={4}
            />

            <FormField
              label="Ação Prioritária 2"
              type="textarea"
              value={data.step4?.priorityAction2 || ''}
              onChange={(value) => handleChange('priorityAction2', value)}
              placeholder="Descreva a segunda ação prioritária com todos os detalhes de implementação..."
              rows={4}
            />

            <FormField
              label="Ação Prioritária 3"
              type="textarea"
              value={data.step4?.priorityAction3 || ''}
              onChange={(value) => handleChange('priorityAction3', value)}
              placeholder="Descreva a terceira ação prioritária com todos os detalhes de implementação..."
              rows={4}
            />
          </div>

          {/* Recursos e Responsabilidades */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Recursos e Responsabilidades</h3>
            
            <FormField
              label="Recursos Humanos Necessários"
              type="textarea"
              value={data.step4?.humanResourcesNeeded || ''}
              onChange={(value) => handleChange('humanResourcesNeeded', value)}
              placeholder="Identifique os recursos humanos necessários para implementar as estratégias: docentes, técnicos, bolsistas..."
              rows={3}
            />

            <FormField
              label="Recursos Financeiros Necessários"
              type="textarea"
              value={data.step4?.financialResourcesNeeded || ''}
              onChange={(value) => handleChange('financialResourcesNeeded', value)}
              placeholder="Estime os recursos financeiros necessários: equipamentos, bolsas, custeio, investimentos..."
              rows={3}
            />

            <FormField
              label="Responsáveis pela Implementação"
              type="textarea"
              value={data.step4?.implementationResponsibles || ''}
              onChange={(value) => handleChange('implementationResponsibles', value)}
              placeholder="Defina os responsáveis por cada estratégia/ação: coordenação, docentes, comissões..."
              rows={3}
            />

            <FormField
              label="Parcerias e Apoios Necessários"
              type="textarea"
              value={data.step4?.partnershipsSupport || ''}
              onChange={(value) => handleChange('partnershipsSupport', value)}
              placeholder="Identifique parcerias e apoios necessários: institucionais, empresariais, governamentais..."
              rows={3}
            />
          </div>

          {/* Cronograma Geral */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Cronograma Geral</h3>
            
            <FormField
              label="Ações de Curto Prazo (até 1 ano)"
              type="textarea"
              value={data.step4?.shortTermActions || ''}
              onChange={(value) => handleChange('shortTermActions', value)}
              placeholder="Liste as ações que serão implementadas no curto prazo..."
              rows={3}
            />

            <FormField
              label="Ações de Médio Prazo (1 a 3 anos)"
              type="textarea"
              value={data.step4?.mediumTermActions || ''}
              onChange={(value) => handleChange('mediumTermActions', value)}
              placeholder="Liste as ações que serão implementadas no médio prazo..."
              rows={3}
            />

            <FormField
              label="Ações de Longo Prazo (3 a 5 anos)"
              type="textarea"
              value={data.step4?.longTermActions || ''}
              onChange={(value) => handleChange('longTermActions', value)}
              placeholder="Liste as ações que serão implementadas no longo prazo..."
              rows={3}
            />
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default Step4;

