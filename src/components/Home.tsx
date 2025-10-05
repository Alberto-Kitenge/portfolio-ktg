import { ArrowDown } from "lucide-react";
import { useLanguage } from "../hooks/useLanguageContext";
import { identity } from "../data/identity";
import img from "../assets/img.png";

/**
 * Composant de la section d'accueil
 * Présentation principale avec nom, titre et actions
 */
const Home = () => {
  const { t } = useLanguage();

  // Récupération des données
  const userIdentity = identity[0];

  return (
    <section
      className="min-h-screen w-full flex items-center"
      id="home"
      aria-label="Section d'accueil"
    >
      <div className="flex justify-center items-center relative overflow-hidden w-full py-20">
        {/* Background animé */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-glow animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-[5%] relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <div className="text-center lg:text-left animate-in slide-in-from-left duration-1000">
              {/* Nom complet */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-in fade-in duration-1000 delay-300">
                <span className="bg-gradient-to-r from-accent via-primary via-secondary to-accent bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000 delay-500 inline-block animate-gradient hover:scale-105 transition-transform duration-300 cursor-default">
                  {userIdentity.name}
                </span>
              </h1>

              {/* Titre professionnel */}
              <h2 className="text-xl md:text-2xl mt-4 text-base-content/80 font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                {t.userIdentity.title}
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl mt-6 text-base-content/70 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                {t.userIdentity.tagline}
              </p>

              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
                <a
                  className="btn btn-accent btn-lg hover:scale-105 transition-transform duration-300"
                  href="#contact"
                  aria-label={t.home.cta_contact}
                >
                  {t.home.cta_contact}
                </a>
                <a
                  className="btn btn-outline btn-accent btn-lg hover:scale-105 transition-transform duration-300"
                  href="#projects"
                  aria-label={t.home.cta_projects}
                >
                  {t.home.cta_projects}
                </a>
              </div>
            </div>

            {/* Espace pour la photo - masqué sur mobile */}
            <div className="hidden lg:flex justify-end animate-in slide-in-from-right duration-1000 delay-500">
              <div className="relative">
                {/* Photo de profil */}
                <img
                  src={img}
                  alt="LucDEV"
                  className="w-96 h-96 object-cover shadow-xl"
                  style={{
                    borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
                  }}
                />
                {/* Éléments décoratifs */}
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-accent/15 to-primary/15 -z-10"
                  style={{
                    borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bouton de défilement vers les projets */}
          <div className="flex justify-center mt-12 animate-in fade-in duration-1000 delay-1500">
            <a
              href="#projects"
              className="inline-block cursor-pointer hover:scale-110 transition-transform duration-300"
              aria-label="Voir mes projets"
            >
              <ArrowDown
                className="animate-bounce animate-float text-accent"
                size={32}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
