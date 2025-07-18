import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useData } from '../../context/DataContext';
import { downloadPDF, previewPDF } from '../../utils/pdfGenerator';
import { 
  CheckCircle, 
  Download, 
  Eye, 
  FileText, 
  AlertCircle,
  Target,
  Users,
  BarChart3,
  ClipboardList,
  Settings
} from 'lucide-react';

const StepFinalization = () => {
  const { data } = useData();
  const [isGenerating, setIsGenerating] = useState(false);

  // Função para contar campos preenchidos por passo
  const getStepProgress = (stepNumber) => {
    const stepData = data[`step${stepNumber}`];
    if (!stepData) return { filled: 0, total: 0, percentage: 0 };

    let totalFields = 0;
    let filledFields = 0;

    const countFields = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] === 'string') {
          totalFields++;
          if (obj[key].trim() !== '') {
            filledFields++;
          }
        } else if (Array.isArray(obj[key])) {
          obj[key].forEach(item => {
            if (typeof item === 'object' && item !== null) {
              countFields(item);
            } else if (typeof item === 'string') {
              totalFields++;
              if (item.trim() !== '') {
                filledFields++;
              }
            }
          });
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          countFields(obj[key]);
        }
      }
    };

    countFields(stepData);
    const percentage = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
    
    return { filled: filledFields, total: totalFields, percentage };
  };

  const steps = [
    {
      id: 1,
      title: 'Delimitação do Problema-objeto',
      icon: Target,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 2,
      title: 'Identidade e Horizontes',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      title: 'Análise do Contexto',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 4,
      title: 'Plano de Ações Estratégicas',
      icon: ClipboardList,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 5,
      title: 'Implementação',
      icon: Settings,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      // Simular um pequeno delay para mostrar o loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const filename = `planejamento-estrategico-${new Date().toISOString().split('T')[0]}.pdf`;
      downloadPDF(data, filename);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreviewPDF = async () => {
    try {
      previewPDF(data);
    } catch (error) {
      console.error('Erro ao visualizar PDF:', error);
      alert('Erro ao visualizar PDF. Tente novamente.');
    }
  };

  // Calcular progresso geral
  const overallProgress = steps.map(step => getStepProgress(step.id));
  const totalFilled = overallProgress.reduce((sum, progress) => sum + progress.filled, 0);
  const totalFields = overallProgress.reduce((sum, progress) => sum + progress.total, 0);
  const overallPercentage = totalFields > 0 ? Math.round((totalFilled / totalFields) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Cabeçalho */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-green-100 rounded-full">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Revisão e Geração do Documento Final
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Revise o progresso e gere o documento final do planejamento estratégico
            </p>
          </div>
        </div>
      </div>

      {/* Progresso Geral */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-800">
            <CheckCircle className="h-6 w-6" />
            <span>Progresso Geral do Planejamento</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-green-600">{overallPercentage}%</p>
              <p className="text-sm text-gray-600">Concluído</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">{totalFilled}/{totalFields}</p>
              <p className="text-sm text-gray-600">campos preenchidos</p>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${overallPercentage}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>

      {/* Progresso por Passo */}
      <Card>
        <CardHeader>
          <CardTitle>Progresso por Passo</CardTitle>
          <CardDescription>
            Revise o progresso de cada passo do planejamento estratégico
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step) => {
              const progress = getStepProgress(step.id);
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="flex items-center space-x-4 p-4 rounded-lg border">
                  <div className={`p-2 rounded-lg ${step.bgColor}`}>
                    <Icon className={`h-5 w-5 ${step.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">
                        Passo {step.id}: {step.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-600">
                          {progress.filled}/{progress.total}
                        </span>
                        <span className={`text-sm font-bold ${
                          progress.percentage >= 70 ? 'text-green-600' : 
                          progress.percentage >= 30 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {progress.percentage}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          progress.percentage >= 70 ? 'bg-green-500' : 
                          progress.percentage >= 30 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${progress.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {progress.percentage >= 70 ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Ações de Geração */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-blue-600" />
            <span>Gerar Documento Final</span>
          </CardTitle>
          <CardDescription>
            Gere o documento final do planejamento estratégico em formato PDF, 
            contendo apenas as informações preenchidas, sem as orientações do roteiro.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {overallPercentage < 30 && (
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <p className="text-sm text-yellow-800">
                    <strong>Atenção:</strong> O planejamento está com apenas {overallPercentage}% de conclusão. 
                    Recomendamos preencher mais campos antes de gerar o documento final.
                  </p>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handlePreviewPDF}
                variant="outline"
                className="flex items-center space-x-2"
                disabled={totalFilled === 0}
              >
                <Eye className="h-4 w-4" />
                <span>Visualizar PDF</span>
              </Button>
              
              <Button
                onClick={handleGeneratePDF}
                disabled={isGenerating || totalFilled === 0}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
              >
                <Download className="h-4 w-4" />
                <span>
                  {isGenerating ? 'Gerando PDF...' : 'Baixar PDF'}
                </span>
              </Button>
            </div>

            {totalFilled === 0 && (
              <p className="text-sm text-gray-500">
                Preencha pelo menos um campo para gerar o documento.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Informações Adicionais */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Sobre o Documento Final</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700">
          <div className="space-y-2">
            <p><strong>O documento PDF gerado conterá:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Apenas as informações preenchidas nos formulários</li>
              <li>Estrutura organizada por passos e seções</li>
              <li>Formatação profissional adequada para apresentação</li>
              <li>Data de geração e numeração de páginas</li>
              <li>Nenhuma orientação ou instrução do roteiro</li>
            </ul>
            <p className="text-sm mt-4">
              <strong>Dica:</strong> Você pode gerar o PDF quantas vezes quiser. 
              Os dados ficam salvos automaticamente no navegador.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepFinalization;

