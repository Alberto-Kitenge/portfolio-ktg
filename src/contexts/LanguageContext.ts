// ---------------------------
// CONTEXTE POUR LA GESTION GLOBALE DES LANGUES
// ---------------------------

import { createContext } from 'react';
import { translations } from '../i18n/translations';
import type { Language } from '../i18n/translations';

/**
 * Interface pour le contexte de langue
 */
export interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  t: typeof translations.fr;
}

/**
 * Contexte pour partager l'état de la langue entre tous les composants
 */
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
