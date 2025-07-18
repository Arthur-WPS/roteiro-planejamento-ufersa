import React from 'react';
import { Button } from '@/components/ui/button';

const Sidebar = ({ currentStep, setCurrentStep, className = '' }) => {
  const steps = [
    { id: 1, title: 'Problema-objeto' },
    { id: 2, title: 'Identidade e Horizontes' },
    { id: 3, title: 'Análise do Contexto' },
    { id: 4, title: 'Plano de Ações' },
    { id: 5, title: 'Implementação' }
  ];

  return (
    <aside className={`bg-white border-r border-gray-200 ${className}`}>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Passos do Planejamento
        </h2>
        
        <nav className="space-y-3">
          {steps.map((step) => (
            <Button
              key={step.id}
              variant={currentStep === step.id ? "default" : "ghost"}
              onClick={() => setCurrentStep(step.id)}
              className="w-full justify-start"
            >
              Passo {step.id}: {step.title}
            </Button>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Button
            variant={currentStep === 6 ? "default" : "ghost"}
            onClick={() => setCurrentStep(6)}
            className="w-full justify-start"
          >
            Finalização
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

