// ---------------------------
// PROVIDER POUR LA GESTION GLOBALE DES LANGUES
// ---------------------------

import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';
import { LanguageContext } from './LanguageContext';
import type { LanguageContextType } from './LanguageContext';

/**
 * Props pour le provider de langue
 */
interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Provider pour la gestion globale de la langue
 * Stocke la langue sélectionnée dans localStorage et la partage avec tous les composants
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Récupère la langue depuis localStorage ou utilise 'fr' par défaut
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['fr', 'en'].includes(savedLanguage) ? savedLanguage : 'fr';
  });

  // Sauvegarde la langue dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    // Met à jour l'attribut lang du document pour l'accessibilité
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  /**
   * Change la langue actuelle et force un re-render de tous les composants
   * @param {Language} language - La nouvelle langue à définir
   */
  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  /**
   * Récupère les traductions pour la langue actuelle
   */
  const t = translations[currentLanguage];

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

