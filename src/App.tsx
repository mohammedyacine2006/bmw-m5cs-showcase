import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Hero from "./components/Hero";
import Specs from "./components/Specs";
import ExhaustAcoustics from "./components/ExhaustAcoustics";
import AerodynamicMatrix from "./components/AerodynamicMatrix";
import ExperienceSection from "./components/ExperienceSection";
import Showcase from "./components/Showcase";
import TechnicalHighlights from "./components/TechnicalHighlights";
import FooterSection from "./components/FooterSection";
import ContactPage from "./components/ContactPage";
import BottomNav from "./components/BottomNav";
import LogoLoader from "./components/LogoLoader";

function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black text-white scroll-smooth scrollbar-hide" id="app-main-root">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;    /* Firefox */
        }
      `}</style>
      <Hero />
      <Specs />
      <ExhaustAcoustics />
      <AerodynamicMatrix />
      <ExperienceSection />
      <Showcase />
      <TechnicalHighlights />
      <FooterSection />
    </main>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // If the user lands on any route, ensure we clean preloader states beautifully
  }, []);

  const handleIntroZoomStart = () => {
    setHasLoaded(true);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 1.0, duration: 1.5 }}>
      <Router>
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden" id="app-router-root">
          {/* Elite Intro Preloader (completely covers view and fades out dynamically) */}
          {showIntro && (
            <LogoLoader
              onZoomStart={handleIntroZoomStart}
              onComplete={handleIntroComplete}
            />
          )}

          {/* Global Page Layout with smooth entry transition sequence */}
          <div 
            className={`transition-opacity duration-1000 ease-out ${
              hasLoaded ? "opacity-100" : "opacity-0"
            }`}
            id="main-app-content-wrapper"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            
            {/* Sleek Floating Bottom Navigation Bar */}
            <BottomNav />
          </div>
        </div>
      </Router>
    </ReactLenis>
  );
}


