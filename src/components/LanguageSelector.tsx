// ---------------------------
// COMPOSANT DE SÉLECTION DE LANGUE
// ---------------------------

import { useLanguage } from '../hooks/useLanguageContext';
import type { Language } from '../i18n/translations';

/**
 * Composant de sélection de langue avec accessibilité WCAG AA
 * Permet de basculer entre français et anglais
 */
const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  /**
   * Gère le changement de langue
   * @param {Language} language - La nouvelle langue à sélectionner
   */
  const handleLanguageChange = (language: Language) => {
    changeLanguage(language);
  };

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language selection">
      {/* Bouton Français */}
      <button
        onClick={() => handleLanguageChange('fr')}
        className={`btn btn-sm ${
          currentLanguage === 'fr' 
            ? 'btn-accent' 
            : 'btn-ghost hover:btn-accent'
        }`}
        aria-pressed={currentLanguage === 'fr'}
        aria-label="Changer la langue en français"
        title="Français"
      >
        FR
      </button>

      {/* Séparateur visuel */}
      <span className="text-base-content/50" aria-hidden="true">|</span>

      {/* Bouton Anglais */}
      <button
        onClick={() => handleLanguageChange('en')}
        className={`btn btn-sm ${
          currentLanguage === 'en' 
            ? 'btn-accent' 
            : 'btn-ghost hover:btn-accent'
        }`}
        aria-pressed={currentLanguage === 'en'}
        aria-label="Switch language to English"
        title="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector;
