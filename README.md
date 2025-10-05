# Portfolio - Alberto Kitenge

Portfolio personnel moderne et responsive développé avec React, TypeScript et Tailwind CSS. Présente mes projets, compétences et informations de contact avec support multilingue (FR/EN).

## ✨ Fonctionnalités

- 🌐 **Multilingue** : Support français/anglais avec changement instantané
- 📱 **Responsive** : Design adaptatif pour tous les écrans
- ⚡ **Performance** : Build optimisé avec Vite
- 🎨 **UI Moderne** : Interface élégante avec Tailwind CSS et DaisyUI
- 🔄 **Gestion d'état** : Context API pour le changement de langue global
- 🎯 **TypeScript** : Code typé pour plus de robustesse

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/Alberto-Kitenge/portfolio-ktg.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📦 Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualise le build
npm run lint     # Vérifie le code avec ESLint
```

## 🛠️ Stack technique

- **Framework** : React 19 avec TypeScript
- **Build Tool** : Vite 7
- **Styling** : Tailwind CSS v4 + DaisyUI
- **Icons** : Lucide React
- **Linting** : ESLint avec TypeScript

## 📁 Structure du projet

```
src/
├── components/        # Composants React
│   ├── Navbar.tsx    # Navigation avec sélecteur de langue
│   ├── Home.tsx      # Section hero
│   ├── Projects.tsx  # Grille de projets
│   ├── Skills.tsx    # Compétences techniques
│   ├── Contact.tsx   # Informations de contact
│   └── Footer.tsx    # Pied de page
├── contexts/         # Contextes React
│   ├── LanguageContext.ts
│   └── LanguageProvider.tsx
├── hooks/            # Hooks personnalisés
│   └── useLanguageContext.ts
├── data/             # Données du portfolio
│   ├── identity.ts   # Informations personnelles
│   ├── projects.ts   # Liste des projets
│   ├── skills.ts     # Compétences techniques
│   └── pages.ts      # Configuration des pages
├── i18n/             # Traductions FR/EN
│   └── translations.ts
└── assets/           # Images et ressources
```

## 🎨 Personnalisation

Pour personnaliser ce portfolio avec vos propres données, consultez le fichier [CUSTOMIZATION.md](./CUSTOMIZATION.md) qui contient un guide détaillé.

### Étapes principales :
1. Modifiez vos informations dans `src/data/identity.ts`
2. Ajoutez vos projets dans `src/data/projects.ts`
3. Mettez à jour vos compétences dans `src/data/skills.ts`
4. Personnalisez les traductions dans `src/i18n/translations.ts`
5. Remplacez les images dans `src/assets/`

## 🌐 Déploiement

Le projet est configuré pour être déployé sur :

- **Vercel** (recommandé) : `vercel.json` inclus
- **Netlify** : `netlify.toml` inclus
- **GitHub Pages** ou autres hébergeurs statiques

```bash
# Build de production
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

## 📄 Licence

Ce projet est open source et disponible sous licence MIT.

## 📧 Contact

**Alberto Kitenge**  
- Email : kitengewalberto@gmail.com
- LinkedIn : [alberto-kitenge](https://www.linkedin.com/in/alberto-kitenge-6446a0274)
- GitHub : [@Alberto-Kitenge](https://github.com/Alberto-Kitenge)

---

Développé avec ❤️ par Alberto Kitenge
