import React, { useState } from 'react';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Step1 from './components/steps/Step1';
import StepFinalization from './components/steps/StepFinalization';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  // Componentes temporários para os outros passos
  const StepPlaceholder = ({ stepNumber, title }) => (
    <div className="max-w-4xl mx-auto text-center space-y-6 py-12">
      <div className="p-8 bg-gray-50 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Passo {stepNumber}: {title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Este passo está em desenvolvimento e será implementado em breve.
        </p>
        <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">
            Formulários e campos específicos para este passo serão adicionados aqui.
          </p>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <StepPlaceholder stepNumber={2} title="Definição de Identidade e Horizontes" />;
      case 3:
        return <StepPlaceholder stepNumber={3} title="Análise do Contexto" />;
      case 4:
        return <StepPlaceholder stepNumber={4} title="Elaboração do Plano de Ações Estratégicas" />;
      case 5:
        return <StepPlaceholder stepNumber={5} title="Implementação do Planejamento" />;
      case 6:
        return <StepFinalization />;
      default:
        return <Step1 />;
    }
  };

  const handleSaveData = () => {
    // Os dados já são salvos automaticamente no localStorage via DataContext
    alert('Dados salvos com sucesso!');
  };

  const handleResetData = () => {
    if (confirm('Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita.')) {
      localStorage.removeItem('roteiro-estrategico-data');
      window.location.reload();
    }
  };

  const handleGeneratePDF = () => {
    setCurrentStep(6); // Navegar para a página de finalização
  };

  const canGoNext = currentStep < 6;
  const canGoPrevious = currentStep > 1;

  return (
    <DataProvider>
      <div className="min-h-screen bg-gray-50">
        <Header 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onGeneratePDF={handleGeneratePDF}
          onSaveData={handleSaveData}
          onResetData={handleResetData}
        />
        
        <div className="flex">
          <Sidebar 
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            className="w-80 min-h-screen"
          />
          
          <main className="flex-1 p-8">
            {renderCurrentStep()}
            
            {/* Navegação entre passos */}
            <div className="max-w-4xl mx-auto mt-12 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={!canGoPrevious}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Passo Anterior</span>
              </Button>
              
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canGoNext}
                className="flex items-center space-x-2"
              >
                <span>Próximo Passo</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
