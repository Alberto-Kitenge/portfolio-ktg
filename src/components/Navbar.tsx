import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguageContext";
import { identity } from "../data/identity";
import LanguageSelector from "./LanguageSelector";
import img from "../assets/img.png";

/**
 * Composant de navigation principal avec support multilingue
 * Navigation fixe en haut de page avec photo de profil
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Récupération des données d'identité
  const userIdentity = identity[0];

  /**
   * Gère la fermeture du menu au clic extérieur
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".navbar-start")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /**
   * Gère l'ouverture/fermeture du menu mobile
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Ferme le menu mobile lors du clic sur un lien
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar bg-base-100/90 backdrop-blur-md rounded-xl shadow-lg transition-all duration-500 ease-in-out fixed top-2 left-2 right-2 z-50 mx-auto max-w-7xl"
      style={{
        transitionProperty: "all, transform, opacity, box-shadow",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-start">
        {/* Menu mobile */}
        <div className="relative mr-2" onClick={(e) => e.stopPropagation()}>
          <button
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMenuOpen && (
            <ul
              className="absolute top-full left-0 right-0 mt-2 w-screen -ml-5 p-2 menu bg-base-100 shadow-lg z-[100]"
              role="menu"
            >
              <li role="menuitem">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="hover:bg-accent hover:text-accent-content rounded-lg transition-all duration-300"
                >
                  {t.nav.home}
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="hover:bg-accent hover:text-accent-content rounded-lg transition-all duration-300"
                >
                  {t.nav.projects}
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="hover:bg-accent hover:text-accent-content rounded-lg transition-all duration-300"
                >
                  {t.skills.title}
                </a>
              </li>
              <li role="menuitem">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="hover:bg-accent hover:text-accent-content rounded-lg transition-all duration-300"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Photo de profil avec anneau */}
        <a
          className="btn btn-ghost p-1"
          href="#home"
          aria-label={`Accueil - ${userIdentity.name}`}
        >
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
              <img
                src={img}
                alt={`Photo de ${userIdentity.name}`}
                className="object-cover"
              />
            </div>
          </div>
        </a>
      </div>

      {/* Menu desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1" role="menubar">
          <li role="menuitem">
            <a href="#home">{t.nav.home}</a>
          </li>
          <li role="menuitem">
            <a href="#projects">{t.nav.projects}</a>
          </li>
          <li role="menuitem">
            <a href="#skills">{t.skills.title}</a>
          </li>
          <li role="menuitem">
            <a href="#contact">{t.nav.contact}</a>
          </li>
        </ul>
      </div>

      {/* Actions de fin */}
      <div className="navbar-end flex items-center gap-2">
        {/* Sélecteur de langue */}
        <LanguageSelector />

        {/* Liens sociaux */}
        <div className="flex">
          <a
            className="btn btn-ghost btn-circle"
            href={userIdentity.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn"
            title="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            className="btn btn-ghost btn-circle"
            href={userIdentity.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
            title="GitHub"
          >
            <Github />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
