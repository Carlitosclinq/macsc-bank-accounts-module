import React from 'react';
import { Card } from '@/components/ui/card';

export const AccountList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mes comptes bancaires</h1>
      
      {/* Liste des comptes existants */}
      <Card className="mb-6">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-2 rounded">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">BE71 **** **** 1234</span>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Principal</span>
              </div>
              <p className="text-gray-600 text-sm">Compte pour recevoir vos paiements</p>
              <p className="text-gray-500 text-xs">(Allocations, primes, remboursements...)</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Utilisé pour: Allocations de chômage, Primes syndicales
            </div>
            <button className="text-green-600 hover:text-green-700 px-4 py-2">
              Modifier
            </button>
          </div>
        </div>
      </Card>

      {/* Compte pour les cotisations */}
      <Card className="mb-6">
        <div className="p-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 p-2 rounded">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">BE98 **** **** 5678</span>
              </div>
              <p className="text-gray-600 text-sm">Compte pour vos cotisations</p>
              <p className="text-gray-500 text-xs">(Prélèvement mensuel)</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Utilisé pour: Domiciliation des cotisations
            </div>
            <button className="text-green-600 hover:text-green-700 px-4 py-2">
              Modifier
            </button>
          </div>
        </div>
      </Card>

      {/* Bouton Ajouter */}
      <button className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 flex items-center justify-center gap-2 shadow-sm">
        <span>+</span> Ajouter un compte bancaire
      </button>
    </div>
  );
};

export default AccountList;