import Title from "./Title";
import img from "../assets/img.jpg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import { useLanguage } from "../hooks/useLanguageContext";
import { identity } from "../data/identity";

/**
 * Composant de la section À propos
 * Affiche les compétences principales et la photo de profil
 */
const About = () => {
  const { t } = useLanguage();
  const userIdentity = identity[0];

  // Sections à propos avec traductions
  const aboutSections = [
    {
      id: 1,
      title: t.about.frontend_dev,
      description: t.about.frontend_desc,
      icon: <LetterText className="text-accent scale-150" aria-hidden="true" />,
    },
    {
      id: 2,
      title: t.about.backend_dev,
      description: t.about.backend_desc,
      icon: <CalendarSync className="text-accent scale-150" aria-hidden="true" />,
    },
    {
      id: 3,
      title: t.about.ui_ux,
      description: t.about.ui_ux_desc,
      icon: <Paintbrush className="text-accent scale-150" aria-hidden="true" />,
    },
  ];

  return (
    <section 
      className="bg-base-300 py-20 px-5 md:px-20" 
      id="about"
      aria-label={t.about.title}
    >
      <Title title={t.about.title} />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mt-12">
          {/* Photo de profil */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={img}
                alt={`Photo de profil de ${userIdentity.name}`}
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
              {/* Overlay décoratif */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl -z-10"></div>
            </div>
          </div>

          {/* Sections de compétences */}
          <div className="flex flex-col space-y-6 max-w-2xl">
            {/* Introduction */}
            <div className="text-center lg:text-left mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
                {userIdentity.name}
              </h2>
              <p className="text-lg text-base-content/80">
                {userIdentity.title}
              </p>
              <p className="text-base text-base-content/70 mt-2">
                {userIdentity.location}
              </p>
            </div>

            {/* Cartes de compétences */}
            <div className="space-y-4">
              {aboutSections.map((section) => (
                <article
                  key={section.id}
                  className="flex flex-col sm:flex-row items-center bg-base-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-2 text-base-content">
                      {section.title}
                    </h3>
                    <p className="text-sm text-base-content/70 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Informations de contact */}
            <div className="bg-base-100 p-6 rounded-xl shadow-xl mt-6">
              <h3 className="text-lg font-bold mb-4 text-center lg:text-left">
                Informations de contact
              </h3>
              <div className="space-y-2 text-sm text-base-content/70">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a 
                    href={`mailto:${userIdentity.email}`}
                    className="text-accent hover:underline"
                    aria-label={`Envoyer un email à ${userIdentity.email}`}
                  >
                    {userIdentity.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Téléphone:</span>{" "}
                  <a 
                    href={`tel:${userIdentity.phone}`}
                    className="text-accent hover:underline"
                    aria-label={`Appeler ${userIdentity.phone}`}
                  >
                    {userIdentity.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Localisation:</span> {userIdentity.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
