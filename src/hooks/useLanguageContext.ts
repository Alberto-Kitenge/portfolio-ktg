// ---------------------------
// HOOK POUR UTILISER LE CONTEXTE DE LANGUE
// ---------------------------

import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { LanguageContextType } from '../contexts/LanguageContext';

/**
 * Hook personnalisé pour utiliser le contexte de langue
 * Lance une erreur si utilisé en dehors du LanguageProvider
 * @returns {LanguageContextType} - Objet contenant la langue actuelle, les traductions et la fonction de changement
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};
