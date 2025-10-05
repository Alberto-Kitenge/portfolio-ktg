# Guide de personnalisation du Portfolio

Ce guide vous explique comment personnaliser facilement votre portfolio avec vos propres données.

## 📝 Étapes de personnalisation

### 1. Informations personnelles (`src/data/identity.ts`)

```typescript
export const identity = [
  {
    name: "VOTRE NOM COMPLET",
    title: "Votre titre professionnel",
    tagline: "Votre phrase d'accroche",
    email: "votre.email@exemple.com",
    phone: "+XXX XXX XXX XXX",
    location: "Votre ville, Pays",
    links: {
      linkedin: "https://www.linkedin.com/in/votre-profil",
      github: "https://www.github.com/votre-username"
    }
  }
];
```

### 2. Vos projets (`src/data/projects.ts`)

```typescript
export const projects = [
  {
    title: "Nom de votre projet",
    description: "Description courte du projet",
    techs: ["Tech1", "Tech2", "Tech3"],
    liveLink: "https://lien-demo.com",
    githubLink: "https://github.com/vous/projet",
    image: "/assets/projects/votre-image.jpg"
  },
  // Ajoutez autant de projets que nécessaire
];
```

### 3. Vos compétences (`src/data/skills.ts`)

Modifiez le tableau `skills` avec vos technologies :

```typescript
export const skills = [
  { 
    id: 1, 
    name: "Votre Tech", 
    image: "/assets/techno/tech.png", 
    category: "frontend" // ou "backend", "database", "mobile", "tools"
  },
  // ...
];
```

**Catégories disponibles :** `frontend`, `backend`, `database`, `mobile`, `tools`

### 4. Traductions (`src/i18n/translations.ts`)

Personnalisez les textes en français et anglais :

```typescript
export const translations: Record<Language, Translations> = {
  fr: {
    nav: { home: "Accueil", projects: "Projets", ... },
    userIdentity: { title: "Votre titre", tagline: "Votre accroche" },
    // ... autres traductions
  },
  en: { /* version anglaise */ }
};
```

### 5. Configuration des pages (`src/data/pages.ts`)

```typescript
export const pages = [
  { name: "Accueil", slug: "/", enabled: true, cta: "..." },
  { name: "Projets", slug: "/projects", enabled: true, displayCount: 3 },
  { name: "Compétences", slug: "/skills", enabled: true, stack: ["Django", "React", ...] },
  { name: "Contact", slug: "/contact", enabled: true }
];
```

## 🖼️ Images à remplacer

### Images obligatoires :
- `src/assets/img.jpg` - Votre photo de profil
- `src/assets/projects/` - Images de vos projets
- `public/favicon.ico` - Votre favicon
- `public/og-image.jpg` - Image pour les réseaux sociaux (1200x630px)

### Images optionnelles :
- `src/assets/techno/` - Logos des technologies (PNG, SVG, WebP)

## 🌐 Système multilingue

Le portfolio utilise un **contexte React** pour gérer les langues (FR/EN) :

- **LanguageContext** (`src/contexts/LanguageContext.ts`) : Contexte global
- **LanguageProvider** (`src/contexts/LanguageProvider.tsx`) : Provider qui enveloppe l'app
- **Hook useLanguage** (`src/hooks/useLanguageContext.ts`) : Hook personnalisé pour accéder aux traductions

Le changement de langue est **instantané** sur toute la page sans rafraîchissement.

## 🎨 Personnalisation du design

### Couleurs et thème
Le projet utilise **Tailwind CSS v4** avec **DaisyUI** pour les composants.

Modifiez les couleurs dans `src/index.css` :
```css
@theme {
  --color-primary: /* votre couleur */;
  --color-accent: /* votre couleur */;
}
```

### Composants UI
- **Navbar** : Navigation avec sélecteur de langue
- **Home** : Section hero avec photo et CTA
- **Projects** : Grille de projets avec filtres
- **Skills** : Affichage des compétences par catégorie
- **Contact** : Informations de contact et liens sociaux
- **Footer** : Pied de page avec copyright

## 🚀 Déploiement

### Avant de déployer :
1. ✅ Remplacez toutes les images personnelles
2. ✅ Modifiez les données dans `src/data/`
3. ✅ Personnalisez les traductions dans `src/i18n/translations.ts`
4. ✅ Testez en local : `npm run dev`
5. ✅ Buildez le projet : `npm run build`
6. ✅ Prévisualisez le build : `npm run preview`

### Plateformes supportées :
- **Vercel** (recommandé) - Configuration dans `vercel.json`
- **Netlify** - Configuration dans `netlify.toml`
- **GitHub Pages** ou autres hébergeurs statiques

## ⚡ Stack technique

### Technologies utilisées :
- **React 19** avec TypeScript
- **Vite** pour le build ultra-rapide
- **Tailwind CSS v4** pour le styling
- **DaisyUI** pour les composants UI
- **Lucide React** pour les icônes
- **Context API** pour la gestion d'état globale

### Architecture :
```
src/
├── components/     # Composants React (Navbar, Home, Projects, etc.)
├── contexts/       # Contextes React (LanguageContext)
├── hooks/          # Hooks personnalisés (useLanguageContext)
├── data/           # Données du portfolio (identity, projects, skills)
├── i18n/           # Système de traduction (FR/EN)
└── assets/         # Images et ressources statiques
```

## 🔧 Maintenance

### Ajout de nouveaux projets :
1. Ajoutez l'image dans `src/assets/projects/`
2. Ajoutez le projet dans `src/data/projects.ts`
3. Rebuild : `npm run build`

### Mise à jour des compétences :
1. Modifiez `src/data/skills.ts`
2. Ajoutez les logos dans `src/assets/techno/` (formats : PNG, SVG, WebP)
3. Respectez les catégories : `frontend`, `backend`, `database`, `mobile`, `tools`

### Ajout d'une nouvelle langue :
1. Ajoutez le type dans `src/i18n/translations.ts` : `type Language = "fr" | "en" | "es"`
2. Ajoutez les traductions dans l'objet `translations`
3. Mettez à jour le sélecteur de langue dans `Navbar.tsx`

## 📦 Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build de production (TypeScript + Vite)
npm run preview  # Prévisualise le build de production
npm run lint     # Vérifie le code avec ESLint
```

## 📞 Support

Pour toute question :
- Consultez les commentaires dans les fichiers de données (`src/data/`)
- Vérifiez la structure TypeScript pour les types attendus
- Testez toujours en local avec `npm run dev` avant de déployer

---

**Bon développement ! 🚀**
