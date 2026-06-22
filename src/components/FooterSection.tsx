import React, { useState, useEffect } from "react";
import { Instagram, Youtube, Linkedin, X, Check, Sliders, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import exteriorImage from "../assets/images/m5_cs_interior_premium_1781366699691.jpg";

/** Detect mobile viewport for responsive image sizing */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
  }, [breakpoint]);
  return isMobile;
}

export default function FooterSection() {
  const isMobile = useIsMobile();
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Signature Deep Green Metallic");
  const [selectedWheels, setSelectedWheels] = useState("20\" Forged Gold Bronze Y-Spoke");
  const [selectedCalipers, setSelectedCalipers] = useState("Red High-Gloss Carbon Ceramic");
  const [isConfigured, setIsConfigured] = useState(false);

  // USER: Override configuration options array
  const colors = [
    { name: "Signature Deep Green Metallic", hex: "#1e2e28", desc: "Exclusive deep satin military green" },
    { name: "Frozen Satin Grey", hex: "#42454a", desc: "Ultra-sleek satin dark gunmetal" },
    { name: "Gloss Charcoal Metallic", hex: "#1c1d1f", desc: "Glossy stealth high-metallic charcoal" }
  ];

  const wheels = [
    { name: "20\" Forged Gold Bronze Y-Spoke", style: "Style A-Max", desc: "Signature lightweight forged bronze alloys" },
    { name: "20\" Jet Black Forged Wheel", style: "Style B-Max Black", desc: "Gloss black track-focused high-rigidity wheels" }
  ];

  const calipers = [
    { name: "Red High-Gloss Carbon Ceramic", colorClass: "bg-red-600" },
    { name: "Gold Metallic Carbon Ceramic", colorClass: "bg-amber-500" }
  ];

  const handleConfigurationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfigured(true);
  };

  const resetConfigurator = () => {
    setIsConfigured(false);
    setIsConfiguratorOpen(false);
  };

  return (
    <section 
      className="min-h-screen w-full flex flex-col justify-start pt-16 sm:pt-24 md:pt-32 items-center relative overflow-hidden bg-black text-white select-none px-4 sm:px-6 border-t border-neutral-900"
      id="footer-section-container"
    >
      {/* SECTION 05: FOOTER & COMMISSION (CTA) */}
      {/* Static Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src={exteriorImage} 
          alt="Premium Product Interior Footer" 
          className={`w-full h-full animate-fade-in ${
            isMobile
              ? "object-contain object-[center_top_15%]"
              : "object-cover object-center"
          }`}
        />
        {/* Stronger gradient on mobile to blend contained image into black */}
        <div className={`absolute inset-0 ${
          isMobile
            ? "bg-gradient-to-b from-black/80 via-black/50 to-black"
            : "bg-gradient-to-t from-black via-black/70 to-black/90"
        }`} />
      </div>

      {/* Absolute background accent line */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent pointer-events-none z-10" />

      {/* Decorative center halo glowing light with updated Gold/Bronze core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-[#9A8051]/3 blur-[160px] pointer-events-none z-10" />

      {/* Center content - Enforce the New Minimalist Style with tightened vertical spacing */}
      <div 
        className="flex flex-col items-center justify-center text-center max-w-3xl z-20 px-4" 
        id="footer-center-content"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-3 md:mb-4 animate-fade-in" id="footer-heading">
          {/* USER: Footer headline label */}
          SUPERCAR: THE ERA OF EXCELLENCE.
        </h2>
        
        <p className="text-white/70 font-light text-xs sm:text-sm tracking-wide max-w-md mx-auto leading-relaxed mb-6 md:mb-8" id="footer-tagline">
          The pinnacle of motorsport engineering, tailored precisely to your specific requirements. Initiate your commission to consult with our Elite Assembly Specialists.
        </p>

        {/* High-End ShinyButton specifically engineered to inject the custom shimmer loop effect */}
        <motion.button
          onClick={() => setIsConfiguratorOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative px-8 py-3.5 bg-black text-[#9A8051] border border-[#9A8051]/60 rounded-none uppercase text-xs tracking-widest hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(154,128,81,0.5)] active:shadow-[0_0_15px_rgba(255,255,255,0.4)] cursor-pointer overflow-hidden transition-all duration-300 mt-2"
          id="config-cta-button"
        >
          <span className="relative z-10 block font-medium">
            INITIATE COMMISSION
          </span>
        </motion.button>
      </div>

      {/* Bottom Footer block containing Navigation, Coordinates, Socials - locked absolute at bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full z-10 px-4 sm:px-8 pb-4 md:pb-6 border-t border-neutral-900/40 pt-4 sm:pt-6 bg-transparent" 
        id="footer-bottom-block"
      >
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" id="footer-meta-row">
            
            {/* Left: Legacy Stamp & Coordinates */}
            <div className="text-center md:text-left space-y-1" id="footer-coords">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] text-white tracking-widest font-bold">
                {/* USER: Your Brand Division name */}
                <span>BRAND ELITE DIVISION</span>
                <span className="w-1 h-3 bg-red-600 transform skew-x-12 inline-block" />
                <span className="w-1 h-3 bg-blue-600 transform skew-x-12 inline-block" />
                <span className="w-1 h-3 bg-cyan-500 transform skew-x-12 inline-block" />
              </div>
              <p className="text-[9px] text-neutral-500 font-mono uppercase tracking-[0.2em]">
                {/* USER: Headquarters coordinates */}
                LAT: 48.1770° N, LON: 11.5562° E // CENTRAL ASSEMBLY PLANT
              </p>
            </div>

            {/* Center Socials */}
            <div className="flex flex-col items-center" id="footer-social-wrapper">
              <div className="text-[9px] sm:text-[10px] md:text-xs font-light tracking-[0.2em] sm:tracking-[0.3em] text-white/50 uppercase mb-3 sm:mb-4 text-center">
                <span className="hidden sm:inline">V8 TWIN-TURBO   //   627 HP   //   0-60 MPH IN 2.9s</span>
                <span className="sm:hidden">V8 // 627 HP // 2.9s</span>
              </div>
              <div className="flex items-center gap-4" id="footer-social-links">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-[#9A8051] hover:border-[#9A8051]/30 transition-all rounded-none"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-[#9A8051] hover:border-[#9A8051]/30 transition-all rounded-none"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2.5 bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-[#9A8051] hover:border-[#9A8051]/30 transition-all rounded-none"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Quick links */}
            <div className="hidden md:flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-neutral-400 font-secondary" id="footer-links-row">
              <a 
                href="#packages" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-white transition-colors cursor-pointer normal-case"
              >
                PACKAGES
              </a>
              <button onClick={() => alert("Company Terms and Legal policies.")} className="hover:text-white transition-colors cursor-pointer">Legal</button>
              <button onClick={() => alert("Global Privacy Protection Policies.")} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
              <button onClick={() => alert("Direct Line: Corporate Communications.")} className="hover:text-white transition-colors cursor-pointer">Contact</button>
              <button onClick={() => alert("Connecting coordinates for Global Flagship Dealer.")} className="hover:text-[#9A8051] transition-colors text-[#9A8051] cursor-pointer">Find a Dealer</button>
            </div>

          </div>

          {/* Smallest copyright info */}
          <div className="flex flex-col items-center gap-1.5" id="footer-copyright-block">
            <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-light text-center">
              DIGITAL EXPERIENCE ENGINEERED BY YACINE
            </div>
            <div className="text-center text-[9px] text-neutral-600 font-mono uppercase tracking-[0.2em]" id="footer-copyright">
              © {new Date().getFullYear()} BRAND TEMPLATE ARCHITECTURE. ALL CLASSIFIED SYSTEM DATA PROTECTED.
            </div>
          </div>
        </div>
      </div>

      {/* LUXURY SPECIFICATION CONFIGURATOR MODAL */}
      {isConfiguratorOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsConfiguratorOpen(false)}
          id="configurator-overlay"
        >
          <div 
            className="w-full max-w-2xl border border-white/10 bg-neutral-950 p-4 sm:p-6 md:p-8 pt-14 sm:pt-8 relative max-h-[85vh] sm:max-h-[90vh] overflow-y-auto mx-3 sm:mx-4 rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsConfiguratorOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 border border-neutral-800 text-white hover:border-[#9A8051]/40 transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {!isConfigured ? (
              <form onSubmit={handleConfigurationSubmit} className="space-y-6">
                
                {/* Header title */}
                <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
                  <span className="p-2.5 bg-[#9A8051]/5 text-[#9A8051] border border-[#9A8051]/30">
                    <Sliders className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-[9px] font-secondary tracking-widest text-neutral-500 uppercase block font-bold">
                      EXCLUSIVE INDIVIDUAL SPECIFICATION LABS
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white font-sans">
                      Configuring Showcase Model
                    </h3>
                  </div>
                </div>

                {/* Option group 1: Painting Color */}
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-widest block font-medium">
                    01 Paintwork Formulation
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => setSelectedColor(color.name)}
                        className={`p-3.5 text-left cursor-pointer transition-all flex flex-col justify-between h-24 rounded-md ${selectedColor === color.name ? "bg-white/10" : "bg-white/5 hover:bg-white/10"}`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: color.hex }} />
                          {selectedColor === color.name && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-white block truncate uppercase font-secondary">{color.name.split(" ")[1]}</span>
                          <span className="text-[8px] text-neutral-500 block truncate font-secondary mt-0.5">{color.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Option group 2: Forged Wheels */}
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-widest block font-medium">
                    02 Forged Alloys / Dynamic Hubs
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {wheels.map((wheel) => (
                      <button
                        key={wheel.name}
                        type="button"
                        onClick={() => setSelectedWheels(wheel.name)}
                        className={`p-4 text-left cursor-pointer transition-all flex flex-col justify-between h-20 rounded-md ${selectedWheels === wheel.name ? "bg-white/10 text-white font-semibold" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-[9px] font-mono tracking-widest text-[#9A8051] font-bold uppercase">{wheel.style}</span>
                          {selectedWheels === wheel.name && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-white block uppercase font-secondary">{wheel.name}</span>
                          <span className="text-[8px] text-neutral-500 block font-secondary truncate mt-0.5">{wheel.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Option group 3: Brake Caliper Coatings */}
                <div className="space-y-3">
                  <label className="text-[10px] text-neutral-500 uppercase tracking-widest block font-medium">
                    03 Carbon Ceramic Calipers
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {calipers.map((caliper) => (
                      <button
                        key={caliper.name}
                        type="button"
                        onClick={() => setSelectedCalipers(caliper.name)}
                        className={`p-4 text-left cursor-pointer transition-all flex items-center justify-between rounded-md ${selectedCalipers === caliper.name ? "bg-white/10 text-white font-semibold" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-3.5 h-3.5 rounded-none ${caliper.colorClass}`} />
                          <span className="text-[10px] font-bold text-white uppercase font-secondary">{caliper.name.split(" ")[0]} Finish</span>
                        </div>
                        {selectedCalipers === caliper.name && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-neutral-900">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#9A8051] text-black font-semibold text-xs uppercase tracking-[0.25em] transition-all hover:bg-white cursor-pointer rounded-none"
                  >
                    LOCK SPECIFICATION OVERRIDE
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-8 space-y-6 animate-fade-in-quick" id="configurator-completion-screen">
                <div>
                  <h4 className="text-xl font-bold uppercase text-[#9A8051] tracking-tight font-sans">
                    SPECIFICATION REGISTERED
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-secondary max-w-md mx-auto mt-2">
                    Your bespoke formulation has been compiled and saved into the Individual Production line database. An expert from our Special Operations Division will contact you shortly.
                  </p>
                </div>

                {/* Configuration summary summary card */}
                <div className="max-w-md mx-auto p-4 bg-neutral-900 border border-neutral-800 text-left space-y-3 font-secondary text-xs rounded-none">
                  <span className="text-[9px] text-[#9A8051] block uppercase font-bold tracking-widest">[ BESPOKE DYNAMICS LOG ]</span>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-500 uppercase text-[9px] font-bold">Body Finish:</span>
                    <span className="text-white text-[10px] uppercase font-bold text-right">{selectedColor}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-500 uppercase text-[9px] font-bold">Alloys Fitted:</span>
                    <span className="text-white text-[10px] uppercase font-bold text-right">{selectedWheels}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-500 uppercase text-[9px] font-bold">Braking Core:</span>
                    <span className="text-white text-[10px] uppercase font-bold text-right">{selectedCalipers}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={resetConfigurator}
                    className="px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#9A8051] transition-colors cursor-pointer rounded-none"
                  >
                    Edit Specification
                  </button>
                  <button
                    onClick={() => setIsConfiguratorOpen(false)}
                    className="px-6 py-2.5 bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold uppercase tracking-widest cursor-pointer rounded-none"
                  >
                    Close Specs Portal
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
