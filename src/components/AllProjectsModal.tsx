import { ExternalLink, X } from "lucide-react";
import { useLanguage } from "../hooks/useLanguageContext";
import { projects } from "../data/projects";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal DaisyUI pour afficher tous les projets
 */
const AllProjectsModal = ({ isOpen, onClose }: AllProjectsModalProps) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-6xl max-h-[90vh] p-0">
        {/* Header du modal */}
        <div className="sticky top-0 z-10 bg-base-300 px-6 py-4 flex justify-between items-center border-b border-base-content/10">
          <h2 className="text-2xl font-bold">
            {t.projects.all_projects} ({projects.length})
          </h2>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label={t.projects.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="bg-base-200 p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {/* Image du projet */}
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    className="w-full object-cover h-40 hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Contenu du projet */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-base-content">
                    {project.title}
                  </h3>

                  <p className="text-sm text-base-content/70 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies utilisées */}
                  <div className="flex flex-wrap gap-2" role="list">
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
                      className="btn btn-accent btn-sm w-full"
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
        </div>
      </div>

      {/* Backdrop avec effet de flou - ne ferme pas au clic */}
      <form
        method="dialog"
        className="modal-backdrop bg-black/50 backdrop-blur"
      >
        <button type="button" className="cursor-default">
          close
        </button>
      </form>
    </dialog>
  );
};

export default AllProjectsModal;
