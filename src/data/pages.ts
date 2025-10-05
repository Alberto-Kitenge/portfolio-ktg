// ---------------------------
// STRUCTURE DES PAGES
// ---------------------------
export const pages = [
  // Chaque objet correspond à une page; enabled = true pour générer
  {
    name: "Accueil",
    slug: "/",
    enabled: true,
    cta: "Me contacter / Voir mes projets",
  },
  { name: "Projets", slug: "/projects", enabled: true, displayCount: 6 },
  {
    name: "Compétences",
    slug: "/skills",
    enabled: true,
    stack: [
      "Django",
      "Python",
      "React",
      "Next.js",
      "Prisma",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind",
    ],
  },
  { name: "Contact", slug: "/contact", enabled: true },
];
