import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../hooks/useLanguageContext";
import { identity } from "../data/identity";
import img from "../assets/img.jpg";

/**
 * Composant Footer avec informations de contact et navigation
 * Support multilingue et accessibilité
 */
const Footer = () => {
  const { t } = useLanguage();
  const userIdentity = identity[0];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-300" role="contentinfo">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-20">
        {/* Grille principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-base-content">
          {/* Section À propos */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-accent ring-offset-base-300 ring-offset-2">
                  <img
                    src={img}
                    alt={`Photo de ${userIdentity.name}`}
                    className="object-cover"
                  />
                </div>
              </div>
              <h2 className="font-bold text-xl text-primary">
                {userIdentity.name}
              </h2>
            </div>
            <p className="text-base-content/80 mb-3 font-medium">
              {t.userIdentity.title}
            </p>
            <p className="text-base-content/70 text-sm leading-relaxed max-w-md">
              {t.userIdentity.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-base-content mb-4">Navigation</h3>
            <div className="space-y-2">
              <a
                className="block text-base-content/70 hover:text-accent transition-colors"
                href="#home"
              >
                {t.nav.home}
              </a>
              <a
                className="block text-base-content/70 hover:text-accent transition-colors"
                href="#projects"
              >
                {t.nav.projects}
              </a>
              <a
                className="block text-base-content/70 hover:text-accent transition-colors"
                href="#skills"
              >
                {t.nav.skills}
              </a>
              <a
                className="block text-base-content/70 hover:text-accent transition-colors"
                href="#contact"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>

          {/* Contact & Réseaux sociaux */}
          <div>
            <h3 className="font-bold text-base-content mb-4">Contact</h3>
            <div className="space-y-3 mb-6">
              <a
                className="block text-base-content/70 hover:text-accent transition-colors text-sm"
                href={`mailto:${userIdentity.email}`}
                aria-label={`Envoyer un email à ${userIdentity.email}`}
              >
                {userIdentity.email}
              </a>
              <a
                className="block text-base-content/70 hover:text-accent transition-colors text-sm"
                href={`tel:${userIdentity.phone}`}
                aria-label={`Appeler ${userIdentity.phone}`}
              >
                {userIdentity.phone}
              </a>
              <span className="block text-base-content/70 text-sm">
                {userIdentity.location}
              </span>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              <a
                href={userIdentity.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-sm hover:btn-accent"
                aria-label="Profil LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={userIdentity.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle btn-sm hover:btn-accent"
                aria-label="Profil GitHub"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${userIdentity.email}`}
                className="btn btn-ghost btn-circle btn-sm hover:btn-accent"
                aria-label="Envoyer un email"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-base-content/10 py-8">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="flex justify-center items-center text-sm text-base-content/60">
            <p>
              © {currentYear} {userIdentity.name} - {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
