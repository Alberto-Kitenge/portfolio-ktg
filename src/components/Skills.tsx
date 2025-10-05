import Title from "./Title";
import { skills } from "../data/skills";
import { pages } from "../data/pages";
import { useLanguage } from "../hooks/useLanguageContext";

// Images temporaires pour les compétences (à remplacer par les vraies images)
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgNEXT from "../assets/techno/next-js.webp";

/**
 * Composant des compétences techniques
 * Affiche uniquement les technologies maîtrisées
 */
const Skills = () => {
  const { t } = useLanguage();

  // Configuration depuis les pages
  const skillsPage = pages.find((page) => page.slug === "/skills");
  const skillStack = skillsPage?.stack || [];

  // Images temporaires pour les compétences
  const tempSkillImages: Record<string, string> = {
    Django: imgREACT, // Remplacer par l'image Django
    React: imgREACT,
    "Next.js": imgNEXT,
    TypeScript: imgTYPE,
    Tailwind: imgTAILWIND,
    Bootstrap: imgCSS,
    JavaScript: imgJS,
    HTML: imgHTML,
    CSS: imgCSS,
  };

  // Filtrer les compétences selon la stack définie
  const displayedSkills = skills.filter((skill) =>
    skillStack.some(
      (stackItem) =>
        skill.name.toLowerCase().includes(stackItem.toLowerCase()) ||
        stackItem.toLowerCase().includes(skill.name.toLowerCase())
    )
  );

  return (
    <section
      className="py-16 relative bg-gradient-to-br from-base-200/20 via-base-100 to-base-300/20 w-full"
      id="skills"
      aria-label={t.skills.title}
    >
      {/* Background décoratif */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-[5%] max-w-4xl">
        <Title title={t.skills.title} />

        <div className="text-center">
          {/* Grille des technologies */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
            {displayedSkills.map((skill, index) => (
              <div
                key={skill.id}
                className="flex flex-col items-center group animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 p-3 rounded-full border-2 border-accent/30 group-hover:border-accent transition-all duration-300 bg-base-100 shadow-lg group-hover:shadow-xl group-hover:scale-105">
                  <img
                    src={tempSkillImages[skill.name] || imgHTML}
                    alt={`Logo ${skill.name}`}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-center text-base-content group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-base-content/70 leading-relaxed">
              {t.skills.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
