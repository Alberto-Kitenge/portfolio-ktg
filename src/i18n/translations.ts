// ---------------------------
// SYSTÈME DE TRADUCTION MULTILINGUE (FR/EN)
// ---------------------------

export type Language = "fr" | "en";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    projects: string;
    skills: string;
    contact: string;
  };

  // Identité utilisateur
  userIdentity: {
    title: string;
    tagline: string;
  };

  // Page d'accueil
  home: {
    welcome: string;
    cta_contact: string;
    cta_projects: string;
    scroll_down: string;
  };

  // Projets
  projects: {
    title: string;
    cta_visit: string;
    view_all: string;
    all_projects: string;
    close: string;
  };

  // Compétences
  skills: {
    title: string;
    description: string;
  };

  // Contact
  contact: {
    title: string;
    phone: string;
    location: string;
    follow: string;
  };

  // Footer
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    userIdentity: {
      title: "Développeur Full-Stack Web & Mobile",
      tagline:
        "Je conçois des applications web & mobiles modernes | Django, React/Next.js & FlutterFlow",
    },
    home: {
      welcome: "Bienvenue sur mon portfolio",
      cta_contact: "Me contacter",
      cta_projects: "Voir mes projets",
      scroll_down: "Défiler vers le bas",
    },
    projects: {
      title: "mes projets",
      cta_visit: "Visiter",
      view_all: "Voir tous les projets",
      all_projects: "Tous les projets",
      close: "Fermer",
    },
    skills: {
      title: "Compétences",
      description:
        "Je maîtrise un ensemble de technologies modernes pour créer des applications web et mobiles performantes. Mon expertise couvre le développement frontend avec React et Next.js, le backend avec Django, ainsi que les outils de développement actuels.",
    },
    contact: {
      title: "contact",
      phone: "Téléphone",
      location: "Localisation",
      follow: "Suivez-moi",
    },
    footer: {
      rights: "Tous droits réservés",
    },
  },

  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    userIdentity: {
      title: "Full-Stack Web & Mobile Developer",
      tagline:
        "I design modern web & mobile applications | Django, React/Next.js & FlutterFlow",
    },
    home: {
      welcome: "Welcome to my portfolio",
      cta_contact: "Contact me",
      cta_projects: "View my projects",
      scroll_down: "Scroll down",
    },
    projects: {
      title: "my projects",
      cta_visit: "Visit",
      view_all: "View all projects",
      all_projects: "All projects",
      close: "Close",
    },
    skills: {
      title: "Skills",
      description:
        "I master a set of modern technologies to create performant web and mobile applications. My expertise covers frontend development with React and Next.js, backend with Django, as well as current development tools.",
    },
    contact: {
      title: "contact",
      phone: "Phone",
      location: "Location",
      follow: "Follow me",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
};
