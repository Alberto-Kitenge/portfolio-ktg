import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { LanguageProvider } from "./contexts/LanguageProvider";
import { SpeedInsights } from "@vercel/speed-insights/react";

/**
 * Composant principal de l'application
 * Structure du portfolio avec toutes les sections
 */
export default function App() {
  return (
    <>
      {/* Speed Insights */}
      <SpeedInsights />

      <LanguageProvider>
        {/* Navigation */}
        <div className="p-5 md:px-[5%]">
          <Navbar />
        </div>
        {/* Section Accueil */}
        <Home />
        {/* Section Projets */}
        <Projects />
        {/* Section Compétences */}
        <Skills />
        {/* Section Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </LanguageProvider>
    </>
  );
}
