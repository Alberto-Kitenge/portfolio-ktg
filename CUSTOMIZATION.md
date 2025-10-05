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
  { id: 1, name: "Votre Tech", image: "/assets/techno/tech.png", category: "frontend" },
  // ...
];
```

Modifiez le tableau `experiences` avec votre parcours :

```typescript
export const experiences = [
  {
    id: 1,
    role: "Votre poste",
    company: "Nom de l'entreprise",
    period: "Période",
    description: [
      "Réalisation 1",
      "Réalisation 2"
    ],
    image: "/assets/companies/logo.png"
  },
  // ...
];
```

### 4. Configuration SEO (`src/data/seo.ts`)

```typescript
export const seo = [
  {
    keywords: ["Vos mots-clés", "Votre spécialité"],
    metaDescription: "Votre description pour les moteurs de recherche",
    homepageText: "Texte d'accueil de votre portfolio"
  }
];
```

### 5. Stack technique (`src/data/pages.ts`)

Modifiez la stack dans la page compétences :

```typescript
{ name: "Compétences", slug: "/skills", enabled: true, stack: ["VosTech","React","etc."] }
```

## 🖼️ Images à remplacer

### Images obligatoires :
- `src/assets/img.jpg` - Votre photo de profil
- `src/assets/projects/` - Images de vos projets
- `public/favicon.ico` - Votre favicon
- `public/og-image.jpg` - Image pour les réseaux sociaux (1200x630px)

### Images optionnelles :
- `src/assets/techno/` - Logos des technologies
- `src/assets/companies/` - Logos des entreprises

## 🌐 Personnalisation des traductions

Dans `src/i18n/translations.ts`, vous pouvez :
- Modifier les textes français et anglais
- Ajouter de nouvelles langues
- Personnaliser les messages

## 🎨 Personnalisation du design

### Couleurs du thème (dans `src/index.css`)
```css
@plugin "daisyui/theme" {
  name: "votre-theme";
  --color-primary: oklch(83.392% 0.124 66.558); /* Votre couleur primaire */
  --color-accent: oklch(70% 0.213 47.604);      /* Votre couleur d'accent */
  /* ... autres couleurs */
}
```

### Polices
Ajoutez vos polices dans `index.html` et modifiez le CSS.

## 📱 Meta tags et SEO

Dans `index.html`, modifiez :
- Le titre de la page
- La description
- Les mots-clés
- L'URL canonique
- Les données structurées Schema.org

## 🚀 Déploiement

### Avant de déployer :
1. ✅ Remplacez toutes les images
2. ✅ Modifiez toutes les données personnelles
3. ✅ Testez en local avec `npm run dev`
4. ✅ Buildez avec `npm run build`
5. ✅ Testez le build avec `npm run preview`

### Plateformes supportées :
- **Vercel** (recommandé) - Configuration dans `vercel.json`
- **Netlify** - Configuration dans `netlify.toml`
- **GitHub Pages**
- **Surge.sh**

## ⚡ Optimisations

### Performance :
- Images optimisées (WebP recommandé)
- Lazy loading activé
- Code splitting automatique

### SEO :
- Meta tags complets
- Schema.org structuré
- Sitemap automatique
- Robots.txt

### Accessibilité :
- WCAG AA respecté
- Navigation clavier
- Lecteurs d'écran supportés

## 🔧 Maintenance

### Ajout de nouveaux projets :
1. Ajoutez l'image dans `src/assets/projects/`
2. Modifiez `src/data/projects.ts`
3. Rebuild et redéployez

### Mise à jour des compétences :
1. Modifiez `src/data/skills.ts`
2. Ajoutez les logos dans `src/assets/techno/`

### Nouvelles expériences :
1. Modifiez `src/data/skills.ts` (section experiences)
2. Ajoutez le logo de l'entreprise si nécessaire

## 📞 Support

Si vous avez des questions sur la personnalisation :
- Consultez les commentaires dans le code
- Vérifiez la structure des données existantes
- Testez toujours en local avant de déployer

---

**Bon développement ! 🚀**
