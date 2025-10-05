import Title from "./Title";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../hooks/useLanguageContext";
import { projects } from "../data/projects";
import { pages } from "../data/pages";
import { useState } from "react";
import AllProjectsModal from "./AllProjectsModal";

/**
 * Composant d'affichage des projets
 * Utilise les données centralisées et le support multilingue
 */
const Projects = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Configuration de la page projets
  const projectsPage = pages.find((page) => page.slug === "/projects");
  const displayCount = projectsPage?.displayCount || 6;

  // Projets à afficher (limité selon la configuration)
  const projectsToShow = projects.slice(0, displayCount);

  return (
    <section
      id="projects"
      aria-label={t.projects.title}
      className="relative bg-gradient-to-b from-base-100 to-base-200/30 py-16 w-full"
    >
      {/* Background décoratif */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-[5%]">
        <Title title={t.projects.title} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projectsToShow.map((project, index) => (
            <article
              key={index}
              className="bg-base-300 p-6 h-fit rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image du projet */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={`Aperçu du projet ${project.title}`}
                  className="w-full object-cover h-48 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Contenu du projet */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-base-content">
                  {project.title}
                </h3>

                <p className="text-sm text-base-content/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies utilisées */}
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Technologies utilisées"
                >
                  {project.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge badge-accent badge-sm"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton d'action */}
                <div className="pt-2">
                  <a
                    className="btn btn-accent w-full"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.projects.cta_visit} ${project.title}`}
                  >
                    {t.projects.cta_visit}
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Lien vers tous les projets si il y en a plus */}
        {projects.length > displayCount && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-outline btn-accent"
              aria-label={`${t.projects.view_all} (${projects.length})`}
            >
              {t.projects.view_all} ({projects.length})
            </button>
          </div>
        )}
      </div>

      {/* Modal pour tous les projets */}
      <AllProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
