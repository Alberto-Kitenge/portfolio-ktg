import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../hooks/useLanguageContext";
import { identity } from "../data/identity";
import Title from "./Title";

/**
 * Composant de contact simplifié
 * Affiche uniquement les informations de contact
 */
const Contact = () => {
  const { t } = useLanguage();
  const userIdentity = identity[0];

  return (
    <section
      className="py-20 relative bg-gradient-to-t from-base-300/20 via-base-100 to-base-200/10 w-full"
      id="contact"
      aria-label={t.contact.title}
    >
      {/* Background décoratif */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/6 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 px-4 md:px-[5%]">
        <Title title={t.contact.title} />

        <div className="text-center mt-12">
          <p className="text-base-content/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets,
            collaborations ou simplement pour échanger sur le développement web
            et mobile.
          </p>

          {/* Cartes d'information en grille */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-base-200 p-6 rounded-xl hover:bg-base-300 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom delay-300">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h4 className="font-bold text-base-content mb-2">Email</h4>
              <a
                href={`mailto:${userIdentity.email}`}
                className="text-accent hover:underline text-sm"
                aria-label={`Envoyer un email à ${userIdentity.email}`}
              >
                {userIdentity.email}
              </a>
            </div>

            <div className="bg-base-200 p-6 rounded-xl hover:bg-base-300 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom delay-500">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h4 className="font-bold text-base-content mb-2">
                {t.contact.phone}
              </h4>
              <a
                href={`tel:${userIdentity.phone}`}
                className="text-accent hover:underline text-sm"
                aria-label={`Appeler ${userIdentity.phone}`}
              >
                {userIdentity.phone}
              </a>
            </div>

            <div className="bg-base-200 p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom delay-700">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>
              <h4 className="font-bold text-base-content mb-2">
                {t.contact.location}
              </h4>
              <p className="text-base-content/70 text-sm">
                {userIdentity.location}
              </p>
            </div>
          </div>

          {/* Liens sociaux */}
          <div className="bg-base-200 p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom delay-1000">
            <h4 className="text-xl font-bold mb-6 text-base-content">
              {t.contact.follow}
            </h4>
            <div className="flex justify-center gap-6">
              <a
                href={userIdentity.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent btn-lg hover:scale-110 transition-transform duration-300"
                aria-label="Profil LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a
                href={userIdentity.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-accent btn-lg hover:scale-110 transition-transform duration-300"
                aria-label="Profil GitHub"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
