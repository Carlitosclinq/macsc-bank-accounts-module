import React from 'react';
import { Card } from '@/components/ui/card';
import { ProgressSteps } from '../components/ProgressSteps';

export const SignatureStep = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Modification de vos données personnelles</h1>
      
      <ProgressSteps currentStep={3} />
      
      <Card className="mt-8">
        <div className="p-6">
          <div className="mb-8">
            <h2 className="font-semibold mb-4">Signature électronique</h2>
            <p className="text-gray-600 mb-4">
              Vous avez vérifié et validé les données contenues dans le formulaire C1. 
              Vous pouvez maintenant le signer pour qu'il soit envoyé à l'ONEM.
            </p>
            
            {/* Rappel des modifications */}
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Récapitulatif des modifications</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ancien compte</span>
                  <span className="font-medium">BE71 **** **** 1234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nouveau compte</span>
                  <span className="font-medium">BE98 **** **** 5678</span>
                </div>
              </div>
            </div>
            
            {/* Zone de signature */}
            <div className="bg-white border-2 border-green-600 rounded p-6 mb-6">
              <p className="text-center text-gray-700 mb-4">
                En cliquant sur le bouton "Signer", vous confirmez que :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-6">
                <li>Toutes les informations fournies sont exactes</li>
                <li>Vous autorisez la transmission de ces données à l'ONEM</li>
                <li>Vous acceptez la modification de votre compte bancaire</li>
              </ul>
              
              <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition shadow-sm">
                Signer
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <button 
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              Précédent
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignatureStep;