import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ProgressSteps } from '../components/ProgressSteps';

export const AccordStep = () => {
  const [hasChecked, setHasChecked] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Modification de vos données personnelles</h1>
      
      <ProgressSteps currentStep={2} />
      
      <Card className="mt-8">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Vérification du formulaire C1</h2>
            <p className="text-gray-600">
              Veuillez consulter et vérifier les données figurant dans le formulaire C1. Ce document sera envoyé à l'ONEM.
            </p>
          </div>

          {/* Preview du document */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-4">Aperçu des modifications</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Ancien compte bancaire</p>
                <p className="font-medium">BE71 **** **** 1234</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nouveau compte bancaire</p>
                <p className="font-medium">BE98 **** **** 5678</p>
              </div>
            </div>
          </div>

          {/* Bouton pour afficher le C1 */}
          <button className="w-full bg-green-600 text-white py-3 px-4 rounded mb-6 hover:bg-green-700 transition">
            Afficher votre formulaire C1
          </button>

          {/* Section de validation */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input 
                type="checkbox"
                className="mt-1 rounded border-gray-300"
                checked={hasChecked}
                onChange={(e) => setHasChecked(e.target.checked)}
              />
              <span className="text-sm text-gray-700">
                J'ai vérifié le formulaire C1 et je déclare que toutes les informations contenues sont correctes.
              </span>
            </label>
          </div>

          {/* Navigation */}
          <div className="flex justify-between gap-4">
            <button 
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              Précédent
            </button>
            <button 
              className={`px-6 py-2 rounded transition ${
                hasChecked 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!hasChecked}
            >
              Continuer
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccordStep;