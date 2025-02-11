import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const Confirmation = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto mt-8">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Modification effectuée avec succès
          </h1>
          
          <p className="text-gray-600 mb-8">
            Le document a été signé et envoyé à l'ONEM
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-medium text-gray-900 mb-4">Récapitulatif</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Numéro de dossier</span>
                <span className="font-medium">2024-02-123456</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date de modification</span>
                <span className="font-medium">11/02/2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Nouveau compte</span>
                <span className="font-medium">BE98 **** **** 5678</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              className="w-full bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 transition"
              onClick={() => window.location.href = '/mes-comptes'}
            >
              Retour à mes comptes
            </button>
            
            <button 
              className="w-full bg-white text-green-600 py-3 px-4 rounded border border-green-600 hover:bg-green-50 transition"
            >
              Télécharger le document signé
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Confirmation;