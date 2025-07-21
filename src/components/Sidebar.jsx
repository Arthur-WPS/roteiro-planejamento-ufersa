import React from 'react';
import { Button } from '@/components/ui/button';

const Sidebar = ({ currentStep, setCurrentStep, className = '' }) => {
  const steps = [
    { id: 1, title: 'Delimitação do Problema-objeto' },
    { id: 2, title: 'Análise Situacional' },
    { id: 3, title: 'Definição de Objetivos' },
    { id: 4, title: 'Estratégias e Ações' },
    { id: 5, title: 'Monitoramento e Avaliação' },
    { id: 6, title: 'Implementação e Sustentabilidade' },
    { id: 7, title: 'Finalização' },
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
              className="w-full justify-start text-sm"
            >
              Passo {step.id}: {step.title}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

