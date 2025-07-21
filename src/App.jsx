import React, { useState } from 'react';
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';
import Step6 from './components/steps/Step6';
import StepFinalization from './components/steps/StepFinalization';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
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
    setCurrentStep(7); // Navegar para a página de finalização
  };

  const canGoNext = currentStep < 7;
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
            {renderStep()}
            
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

