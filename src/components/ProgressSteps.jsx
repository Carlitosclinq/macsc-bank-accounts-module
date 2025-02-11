import React from 'react';

export const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Info', icon: 'info' },
    { number: 2, label: 'Accord', icon: 'check' },
    { number: 3, label: 'Signature', icon: 'pen' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center w-full px-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center relative">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${currentStep >= step.number 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-600'}
                `}
              >
                {getIcon(step.icon)}
              </div>
              <span className="mt-2 text-sm font-medium">
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div className="absolute w-full">
                  <div
                    className={`
                      h-1 w-[200%] left-1/2
                      ${currentStep > step.number 
                        ? 'bg-green-600' 
                        : 'bg-gray-200'}
                    `}
                  />
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const getIcon = (iconName) => {
  switch (iconName) {
    case 'info':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      );
    case 'check':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 13l4 4L19 7" 
          />
        </svg>
      );
    case 'pen':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" 
          />
        </svg>
      );
    default:
      return null;
  }
};

export default ProgressSteps;