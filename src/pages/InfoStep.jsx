import React from 'react';
import { Card } from '@/components/ui/card';
import { ProgressSteps } from '../components/ProgressSteps';

export const InfoStep = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Modification de vos données personnelles</h1>
      
      <ProgressSteps currentStep={1} />
      
      <Card className="mt-8">
        <div className="p-6">
          <div className="mb-8">
            <h2 className="font-semibold mb-4">Modification du compte bancaire</h2>
            <p className="text-gray-600 mb-4">
              Pour les besoins de votre dossier de chômage, cette modification nécessite une validation officielle.
              Vos données seront transmises à l'ONEM via le formulaire C1.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
              <p className="text-blue-800 text-sm">
                Le processus de modification se déroule en trois étapes :
              </p>
              <ol className="list-decimal ml-5 mt-2 text-sm text-blue-800">
                <li>Vérification de vos informations</li>
                <li>Confirmation des modifications</li>
                <li>Signature électronique du document</li>
              </ol>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-medium mb-2">Compte actuel</h3>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-600">BE71 **** **** 1234</p>
              <p className="text-sm text-gray-500">Utilisé pour les allocations de chômage</p>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <button 
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              onClick={() => history.back()}
            >
              Retour
            </button>
            <button 
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Continuer
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InfoStep;