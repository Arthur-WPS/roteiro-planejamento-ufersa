import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FormField from '../FormField';
import { useData } from '../../context/DataContext';
import { Target, Lightbulb, Users, CheckCircle } from 'lucide-react';

const Step1 = () => {
  const { data, updateField } = useData();
  const stepData = data.step1;

  const handleFieldChange = (field, value) => {
    updateField('step1', field, value);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Cabeçalho */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-red-100 rounded-full">
            <Target className="h-8 w-8 text-red-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Passo 1: Delimitação do Problema-objeto
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Defina o foco central e a relevância do seu programa de pós-graduação
            </p>
          </div>
        </div>
      </div>

      {/* Orientações */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-800">
            <Lightbulb className="h-5 w-5" />
            <span>Orientações para o Passo 1</span>
          </CardTitle>
          <CardDescription className="text-blue-700">
            O problema-objeto é o elemento central que orienta todas as atividades do programa. 
            Deve ser claro, específico e alinhado com as competências do corpo docente e a infraestrutura disponível.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-blue-700">
          <div className="space-y-2">
            <p><strong>Dicas importantes:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Seja específico e evite generalidades</li>
              <li>Considere a relevância científica e social</li>
              <li>Alinhe com as competências do corpo docente</li>
              <li>Valide com a comunidade acadêmica e sociedade</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Formulário Principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-red-600" />
            <span>Definição do Problema-objeto</span>
          </CardTitle>
          <CardDescription>
            Descreva de forma clara e objetiva o problema central que seu programa se propõe a abordar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormField
            label="Problema-objeto do Programa"
            value={stepData.problemaObjeto}
            onChange={(value) => handleFieldChange('problemaObjeto', value)}
            type="textarea"
            rows={6}
            placeholder="Descreva o problema central que o programa se propõe a abordar, incluindo sua delimitação temporal, espacial e conceitual..."
            required
            helpText="O problema-objeto deve ser específico, relevante e alinhado com as competências do programa. Evite generalidades e seja preciso na delimitação."
          />
        </CardContent>
      </Card>

      {/* Relevância Epistemológica */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span>Relevância Epistemológica</span>
          </CardTitle>
          <CardDescription>
            Justifique a importância científica e acadêmica do problema-objeto.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormField
            label="Relevância Epistemológica"
            value={stepData.relevanciaEpistemologica}
            onChange={(value) => handleFieldChange('relevanciaEpistemologica', value)}
            type="textarea"
            rows={5}
            placeholder="Explique por que este problema é relevante do ponto de vista científico e acadêmico. Cite lacunas no conhecimento, contribuições teóricas esperadas..."
            required
            helpText="Demonstre como o problema contribui para o avanço do conhecimento na área, citando lacunas teóricas e metodológicas que serão abordadas."
          />
        </CardContent>
      </Card>

      {/* Relevância Societal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span>Relevância Societal</span>
          </CardTitle>
          <CardDescription>
            Demonstre a importância social e o impacto do problema-objeto para a sociedade.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormField
            label="Relevância Societal"
            value={stepData.relevanciaSocietal}
            onChange={(value) => handleFieldChange('relevanciaSocietal', value)}
            type="textarea"
            rows={5}
            placeholder="Descreva como este problema impacta a sociedade e quais benefícios sociais, econômicos ou ambientais podem resultar de sua solução..."
            required
            helpText="Explique os impactos sociais, econômicos, ambientais ou culturais que a solução do problema pode gerar para a sociedade."
          />
        </CardContent>
      </Card>

      {/* Alinhamento com Competências */}
      <Card>
        <CardHeader>
          <CardTitle>Alinhamento com Competências do Programa</CardTitle>
          <CardDescription>
            Demonstre como o problema-objeto se alinha com as competências e recursos disponíveis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormField
            label="Competências Docentes Relacionadas"
            value={stepData.competenciasDocentes}
            onChange={(value) => handleFieldChange('competenciasDocentes', value)}
            type="textarea"
            rows={4}
            placeholder="Liste as principais competências do corpo docente que se relacionam com o problema-objeto..."
            required
            helpText="Identifique as expertises, formações e experiências do corpo docente que são relevantes para abordar o problema-objeto."
          />

          <FormField
            label="Infraestrutura e Recursos Disponíveis"
            value={stepData.infraestrutura}
            onChange={(value) => handleFieldChange('infraestrutura', value)}
            type="textarea"
            rows={4}
            placeholder="Descreva a infraestrutura física, tecnológica e recursos materiais disponíveis..."
            required
            helpText="Inclua laboratórios, equipamentos, bibliotecas, parcerias institucionais e outros recursos que apoiam a pesquisa."
          />

          <FormField
            label="Linhas de Pesquisa Envolvidas"
            value={stepData.linhasPesquisa}
            onChange={(value) => handleFieldChange('linhasPesquisa', value)}
            type="textarea"
            rows={4}
            placeholder="Identifique as linhas de pesquisa do programa que contribuem para abordar o problema-objeto..."
            required
            helpText="Liste as linhas de pesquisa existentes no programa que têm relação direta ou indireta com o problema-objeto."
          />
        </CardContent>
      </Card>

      {/* Validação do Problema-objeto */}
      <Card>
        <CardHeader>
          <CardTitle>Validação do Problema-objeto</CardTitle>
          <CardDescription>
            Descreva como o problema-objeto foi validado junto à comunidade acadêmica e sociedade.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FormField
            label="Processo de Validação"
            value={stepData.processoValidacao}
            onChange={(value) => handleFieldChange('processoValidacao', value)}
            type="textarea"
            rows={4}
            placeholder="Descreva os métodos utilizados para validar a relevância do problema-objeto (consultas, workshops, pesquisas, etc.)..."
            helpText="Inclua consultas a especialistas, workshops com stakeholders, pesquisas de opinião, análise de demandas setoriais, etc."
          />

          <FormField
            label="Principais Feedbacks Recebidos"
            value={stepData.feedbacksRecebidos}
            onChange={(value) => handleFieldChange('feedbacksRecebidos', value)}
            type="textarea"
            rows={4}
            placeholder="Resuma os principais feedbacks e sugestões recebidos durante o processo de validação..."
            helpText="Destaque os comentários mais relevantes que confirmaram a importância do problema ou sugeriram ajustes na delimitação."
          />
        </CardContent>
      </Card>

      {/* Indicador de Progresso */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <div>
              <h3 className="font-medium text-gray-900">Progresso do Passo 1</h3>
              <p className="text-sm text-gray-600">
                Preencha todos os campos para avançar para o próximo passo
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">
              {Object.values(stepData).filter(value => value && value.toString().trim() !== '').length}/8
            </p>
            <p className="text-sm text-gray-500">campos preenchidos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;

