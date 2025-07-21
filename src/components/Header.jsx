import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { FileText, Download, Save, RotateCcw } from 'lucide-react';
import { useData } from '../context/DataContext';

const Header = ({ currentStep, setCurrentStep, onGeneratePDF, onSaveData, onResetData }) => {
  const { data } = useData();
  
  // Calcular progresso baseado no preenchimento dos campos
  const calculateProgress = () => {
    let totalFields = 0;
    let filledFields = 0;
    
    // Função recursiva para contar campos preenchidos
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
    
    // Contar campos dos passos 1-6 (excluir metadata)
    ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'].forEach(step => {
      if (data[step]) {
        countFields(data[step]);
      }
    });
    
    return totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0;
  };

  const progress = calculateProgress();

  const steps = [
    { id: 1, title: 'Delimitação do Problema-objeto', short: 'Passo 1' },
    { id: 2, title: 'Análise Situacional', short: 'Passo 2' },
    { id: 3, title: 'Definição de Objetivos', short: 'Passo 3' },
    { id: 4, title: 'Estratégias e Ações', short: 'Passo 4' },
    { id: 5, title: 'Monitoramento e Avaliação', short: 'Passo 5' },
    { id: 6, title: 'Implementação e Sustentabilidade', short: 'Passo 6' },
    { id: 7, title: 'Finalização', short: 'Finalizar' }
  ];

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Título */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Roteiro de Planejamento Estratégico
                </h1>
                <p className="text-sm text-gray-500">UFERSA - Programas de Pós-Graduação</p>
              </div>
            </div>
          </div>

          {/* Navegação de Passos */}
          <div className="hidden md:flex items-center space-x-1">
            {steps.map((step) => (
              <Button
                key={step.id}
                variant={currentStep === step.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentStep(step.id)}
                className={`text-xs px-3 py-2 ${
                  currentStep === step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {step.short}
              </Button>
            ))}
          </div>

          {/* Ações */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onSaveData}
              className="hidden sm:flex items-center space-x-1"
            >
              <Save className="h-4 w-4" />
              <span>Salvar</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onResetData}
              className="hidden sm:flex items-center space-x-1 text-red-600 hover:text-red-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Limpar</span>
            </Button>
            
            <Button
              onClick={onGeneratePDF}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white"
              disabled={progress < 30}
            >
              <Download className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Gerar PDF</span>
              <span className="sm:hidden">PDF</span>
            </Button>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Progresso do Preenchimento
            </span>
            <span className="text-sm text-gray-500">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Navegação Mobile */}
        <div className="md:hidden pb-4">
          <div className="flex space-x-1 overflow-x-auto">
            {steps.map((step) => (
              <Button
                key={step.id}
                variant={currentStep === step.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentStep(step.id)}
                className={`text-xs px-2 py-1 whitespace-nowrap ${
                  currentStep === step.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600'
                }`}
              >
                {step.short}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

