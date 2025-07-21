import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import FormField from '../FormField';
import { useData } from '../../context/DataContext';

const Step3 = () => {
  const { data, updateData } = useData();

  const handleChange = (field, value) => {
    updateData('step3', field, value);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800">Passo 3: Definição de Objetivos</CardTitle>
          <CardDescription>
            Estabeleça objetivos claros, mensuráveis e alinhados com a missão do programa e as 
            demandas identificadas na análise situacional.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Objetivo Geral */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Objetivo Geral</h3>
            
            <FormField
              label="Objetivo Geral do Planejamento Estratégico"
              type="textarea"
              value={data.step3?.generalObjective || ''}
              onChange={(value) => handleChange('generalObjective', value)}
              placeholder="Defina o objetivo geral que o programa pretende alcançar com este planejamento estratégico. Deve ser amplo, mas específico o suficiente para orientar as ações..."
              rows={4}
            />
          </div>

          {/* Objetivos Específicos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Objetivos Específicos</h3>
            
            <FormField
              label="Objetivo Específico 1"
              type="textarea"
              value={data.step3?.specificObjective1 || ''}
              onChange={(value) => handleChange('specificObjective1', value)}
              placeholder="Primeiro objetivo específico (ex: Melhorar a qualidade da produção científica do programa...)"
              rows={3}
            />

            <FormField
              label="Objetivo Específico 2"
              type="textarea"
              value={data.step3?.specificObjective2 || ''}
              onChange={(value) => handleChange('specificObjective2', value)}
              placeholder="Segundo objetivo específico (ex: Reduzir o tempo médio de titulação dos discentes...)"
              rows={3}
            />

            <FormField
              label="Objetivo Específico 3"
              type="textarea"
              value={data.step3?.specificObjective3 || ''}
              onChange={(value) => handleChange('specificObjective3', value)}
              placeholder="Terceiro objetivo específico (ex: Fortalecer as parcerias nacionais e internacionais...)"
              rows={3}
            />

            <FormField
              label="Objetivo Específico 4"
              type="textarea"
              value={data.step3?.specificObjective4 || ''}
              onChange={(value) => handleChange('specificObjective4', value)}
              placeholder="Quarto objetivo específico (opcional)"
              rows={3}
            />

            <FormField
              label="Objetivo Específico 5"
              type="textarea"
              value={data.step3?.specificObjective5 || ''}
              onChange={(value) => handleChange('specificObjective5', value)}
              placeholder="Quinto objetivo específico (opcional)"
              rows={3}
            />
          </div>

          {/* Objetivos por Dimensão */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Objetivos por Dimensão</h3>
            
            <FormField
              label="Objetivos para Formação de Recursos Humanos"
              type="textarea"
              value={data.step3?.humanResourcesObjectives || ''}
              onChange={(value) => handleChange('humanResourcesObjectives', value)}
              placeholder="Objetivos relacionados à formação de mestres e doutores: qualidade, tempo de titulação, inserção profissional..."
              rows={3}
            />

            <FormField
              label="Objetivos para Produção Científica"
              type="textarea"
              value={data.step3?.scientificProductionObjectives || ''}
              onChange={(value) => handleChange('scientificProductionObjectives', value)}
              placeholder="Objetivos relacionados à produção científica: publicações, inovação, transferência de tecnologia..."
              rows={3}
            />

            <FormField
              label="Objetivos para Inserção Social"
              type="textarea"
              value={data.step3?.socialInsertionObjectives || ''}
              onChange={(value) => handleChange('socialInsertionObjectives', value)}
              placeholder="Objetivos relacionados ao impacto social: extensão, parcerias com setor produtivo, contribuição para políticas públicas..."
              rows={3}
            />

            <FormField
              label="Objetivos para Internacionalização"
              type="textarea"
              value={data.step3?.internationalizationObjectives || ''}
              onChange={(value) => handleChange('internationalizationObjectives', value)}
              placeholder="Objetivos relacionados à internacionalização: parcerias internacionais, mobilidade, publicações em periódicos internacionais..."
              rows={3}
            />
          </div>

          {/* Alinhamento Estratégico */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Alinhamento Estratégico</h3>
            
            <FormField
              label="Alinhamento com o PDI Institucional"
              type="textarea"
              value={data.step3?.pdiAlignment || ''}
              onChange={(value) => handleChange('pdiAlignment', value)}
              placeholder="Descreva como os objetivos se alinham com o Plano de Desenvolvimento Institucional (PDI) da universidade..."
              rows={3}
            />

            <FormField
              label="Alinhamento com o PNPG"
              type="textarea"
              value={data.step3?.pnpgAlignment || ''}
              onChange={(value) => handleChange('pnpgAlignment', value)}
              placeholder="Explique como os objetivos contribuem para as diretrizes do Plano Nacional de Pós-Graduação (PNPG)..."
              rows={3}
            />

            <FormField
              label="Contribuição para os ODS"
              type="textarea"
              value={data.step3?.odsContribution || ''}
              onChange={(value) => handleChange('odsContribution', value)}
              placeholder="Identifique como os objetivos contribuem para os Objetivos de Desenvolvimento Sustentável (ODS) da ONU..."
              rows={3}
            />
          </div>

          {/* Critérios de Sucesso */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Critérios de Sucesso</h3>
            
            <FormField
              label="Indicadores de Sucesso"
              type="textarea"
              value={data.step3?.successIndicators || ''}
              onChange={(value) => handleChange('successIndicators', value)}
              placeholder="Defina os principais indicadores que demonstrarão o sucesso do planejamento estratégico..."
              rows={3}
            />

            <FormField
              label="Metas Quantitativas"
              type="textarea"
              value={data.step3?.quantitativeGoals || ''}
              onChange={(value) => handleChange('quantitativeGoals', value)}
              placeholder="Estabeleça metas quantitativas específicas (ex: aumentar em 30% as publicações Qualis A, reduzir tempo médio de titulação para 24 meses...)"
              rows={3}
            />
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default Step3;

