import React, { useState, useEffect } from "react";
import { Menu, X, ArrowDown, ChevronRight, Check, Sliders, ShieldCheck } from "lucide-react";
import { motion, Variants } from "motion/react";
import coastalBg from "../assets/images/m5_cs_coastal_1781364769708.jpg";
import frontBg from "../assets/images/m5_cs_front_1781364784016.jpg";

/** Detect mobile viewport to simplify animations & adjust layout */
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

/** Detect custom media queries dynamically */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setMatches(e.matches);
    handler(mql);
    mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
  }, [query]);
  return matches;
}

// Premium Brand Logo Component (Placeholder for Buyer's Logo)
const BrandLogo = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-11 md:h-11 cursor-pointer transition-transform duration-500 hover:rotate-12" aria-label="Brand Logo" id="premium-brand-logo">
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="50" cy="50" r="46" fill="#000000" />
    <path d="M 50,50 L 19,50 A 31,31 0 0,1 50,19 Z" fill="#0066B2" />
    <path d="M 50,50 L 50,19 A 31,31 0 0,1 81,50 Z" fill="#FFFFFF" />
    <path d="M 50,50 L 81,50 A 31,31 0 0,1 50,81 Z" fill="#0066B2" />
    <path d="M 50,50 L 50,81 A 31,31 0 0,1 19,50 Z" fill="#FFFFFF" />
    <circle cx="50" cy="50" r="31" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

export default function Hero() {
  const isMobile = useIsMobile();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Setup Variables for Buyer Customization
  const activeSeries = "M5";
  const activeModel = "CS";
  
  // Custom states for the interactive configurator
  const [activeColor, setActiveColor] = useState("Signature Dark Olive");
  const [activeAlloys, setActiveAlloys] = useState("20-inch Forged Gold");
  const [activeTrim, setActiveTrim] = useState("Premium Alcantara");

  // Simple fade-in for mobile/tablet to boost LCP performance
  const mobileFade: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0 } }
  };

  const topVariants: Variants = isDesktop ? {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 2.2 } }
  } : mobileFade;

  const leftVariants: Variants = isDesktop ? {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 2.2 } }
  } : mobileFade;

  const rightVariants: Variants = isDesktop ? {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 2.2 } }
  } : mobileFade;

  const bottomVariants: Variants = isDesktop ? {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 2.2 } }
  } : mobileFade;

  // Product Options dictionary for Buyer Configuration
  const paintColors = [
    { name: "Signature Dark Olive", hex: "#1B3B2B", description: "The iconic signature deep matte green paint with gold bronze accents." },
    { name: "Satin Gunmetal Grey", hex: "#4A4D50", description: "An ultra-stealth dark matte finish highlighting the vehicle's sharp creases." },
    { name: "Obsidian Black Metallic", hex: "#0E0E10", description: "Cruel metallic deep noir with subtle carbon structure undertones." }
  ];

  const alloysOpts = [
    { name: "20-inch Forged Gold", type: "Style A-Spec" },
    { name: "20-inch Matte Black", type: "Style B-Spec" }
  ];

  const trimOpts = [
    { name: "Premium Alcantara", description: "Racing style wrap with signature contrast stitching." },
    { name: "Carbon Perforated Leather", description: "Lightweight leather with premium carbon structuring." }
  ];

  return (
    <div className="h-auto md:min-h-screen lg:h-screen w-full flex flex-col justify-start md:justify-between snap-start snap-always relative overflow-y-auto lg:overflow-hidden bg-black text-white font-sans select-none" id="hero-showcase-container">
      {/* SECTION 01: HERO */}
      {/* Background Hero Image with Zoom and Vignette effect */}
      <div className="relative h-[35vh] sm:h-[45vh] md:h-[50vh] lg:absolute lg:inset-0 lg:h-full lg:w-full z-0 overflow-hidden" id="hero-background-wrapper">
        <motion.div
           initial={{ scale: 1.0 }}
           whileInView={isMobile ? { scale: 1.0 } : { scale: 1.015 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 2.2 }}
           className="w-full h-full"
        >
          {/* USER: Inject your hero product/vehicle image here */}
          <img
            src={coastalBg}
            alt="Supercar Hero Showcase"
            className={`w-full h-full select-none pointer-events-none ${
              isMobile
                ? "object-contain object-[center_top_15%] opacity-90"
                : "object-cover object-[center_top_30%] lg:object-[center_top] scale-110 lg:scale-120 -translate-y-[10%] lg:-translate-y-[18%] lg:hover:scale-[1.23] transition-transform duration-[6000ms] ease-out opacity-85"
            }`}
            referrerPolicy="no-referrer"
            id="hero-bg-image"
          />
        </motion.div>
        {/* Soft elegant vignette and cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60 z-10" />
        {/* Extended bottom gradient – blends image into dark bg on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
      </div>

      {/* TOP NAVIGATION BAR */}
      <motion.header 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={topVariants}
        className="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-5 md:px-12 md:py-6 hidden md:flex items-center justify-between bg-transparent" 
        id="top-navbar-bar"
      >
        {/* Left Section */}
        <div className="flex items-center gap-3" id="nav-brand-group">
          <BrandLogo />
          <div className="h-6 w-[1px] bg-white/10 hidden md:block" />
          <span className="text-[9px] font-light tracking-[0.25em] text-white/55 uppercase hidden md:inline-block font-sans">
            Showcase Series
          </span>
        </div>

        {/* Center Section: Premium Minimal Links with subtle active hover underline */}
        <nav className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.35em] font-sans font-medium" id="nav-center-links">
          <a href="#overview" className="text-white/70 hover:text-white transition-colors relative py-1 duration-300 group">
            Overview
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#9A8051] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#performance" className="text-white/70 hover:text-white transition-colors relative py-1 duration-300 group">
            Engineering
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#9A8051] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#dynamics" className="text-white/70 hover:text-white transition-colors relative py-1 duration-300 group">
            Dynamics
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#9A8051] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4" id="nav-action-group">
          <button
            onClick={() => setIsConfigOpen(true)}
            className="hidden sm:block px-5 py-2 bg-transparent border border-white/20 text-white text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] active:scale-95 cursor-pointer font-sans"
            id="configure-trigger-button"
          >
            Configure
          </button>
          
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-white hover:text-white/85 transition-colors focus:outline-none"
            aria-label="Toggle Specifications Menu"
            id="burger-menu-icon"
          >
            <div className="flex flex-col gap-1.5 justify-center items-end w-6 h-5">
              <span className="w-6 h-[1.5px] bg-white transition-opacity duration-300" />
              <span className="w-4 h-[1.5px] bg-white transition-all hover:w-6" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* MONUMENTAL TOP-LEFT TITLE BLOCK (Placed cleanly below the navbar area as a strong designer anchor) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={leftVariants}
        className="absolute top-20 left-4 sm:left-6 lg:left-12 lg:top-28 z-10 text-left pointer-events-none flex flex-col items-start" 
        id="top-left-title-block"
      >
        <span className="text-[9px] md:text-[11px] font-bold tracking-[0.4em] text-[#9A8051] font-sans uppercase mb-1 drop-shadow-md">
          {/* USER: Replace Tagline */}
          THE ALL NEW
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-tighter uppercase font-black drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)] select-none leading-none font-serif italic" id="giant-m5-text">
          {/* USER: Replace Model Name */ }
          <span className="bg-gradient-to-r from-[#FFFFFF] to-[#E2E8F0] bg-clip-text text-transparent">{activeSeries}</span> <span className="bg-gradient-to-r from-[#C5A059] to-[#A38A5E] bg-clip-text text-transparent">{activeModel}</span>
        </h1>
        <span className="text-[8px] font-mono tracking-[0.25em] text-white/40 uppercase mt-2 block">
          M5 CS // FOUNDER'S EDITION
        </span>
        {/* Premium description paragraph – fills empty mobile space */}
        <p className="text-neutral-400 text-sm md:text-base max-w-md mt-4 leading-relaxed font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] block md:hidden">
          The ultimate expression of Bavarian engineering. Forged in the wind tunnel and unleashed on the track, the M5&nbsp;CS merges uncompromising lightweight dynamics with executive luxury.
        </p>
        {/* Tablet premium bold one-liner */}
        <p className="text-[#9A8051] text-sm md:text-base font-semibold max-w-md mt-4 tracking-wide leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] hidden md:block lg:hidden">
          Uncompromising lightweight dynamics met with executive luxury.
        </p>
      </motion.div>

      {/* SLEEK, MINIMALIST INFO SIDE BLOCK (Placed elegantly in the Right-Center area of the viewport) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={rightVariants}
        className="relative lg:absolute lg:top-[42%] right-0 lg:right-8 z-20 lg:-translate-y-1/2 flex flex-col gap-4 font-sans w-full max-w-full md:max-w-4xl lg:max-w-[280px] px-4 sm:px-6 lg:px-0 mt-6 lg:mt-0 mx-auto lg:mx-0" 
        id="right-center-key-stats"
      >
        <div className="border border-white/10 bg-black/70 backdrop-blur-xl p-5 space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:flex lg:flex-col lg:space-y-4 shadow-2xl transition-all duration-300 hover:border-white/25 hover:bg-black/80">
          {/* USER: Inject vehicle/product stats here */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#9A8051] uppercase block">
              LAUNCH BENCHMARK
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-sans">3.0s</span>
              <span className="text-[10px] text-white/60 font-sans tracking-wide uppercase">0-100 KM/H</span>
            </div>
          </div>
          <div className="h-[1px] bg-white/10 md:hidden lg:block" />
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#9A8051] uppercase block">
              ENGINE POWER
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-sans">627 HP</span>
              <span className="text-[10px] text-white/60 font-sans tracking-wide uppercase">V8 Twin-Turbo</span>
            </div>
          </div>
          <div className="h-[1px] bg-white/10 md:hidden lg:block" />
          <ul className="space-y-2 text-[11px] text-white/85 font-light font-sans tracking-wide flex flex-col justify-center">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9A8051] inline-block shrink-0" />
              <span>Lightweight Carbon Build</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9A8051] inline-block shrink-0" />
              <span>Track-Tested Dynamic AWD</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* BOTTOM CONTENT AREA (Shifted down to perfect alignment with the bottom safe zone) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bottomVariants}
        className="relative lg:absolute lg:bottom-12 left-0 right-0 z-30 px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8 lg:gap-12 mt-6 lg:mt-0 pb-24 sm:pb-28 lg:pb-0" 
        id="bottom-content-area"
      >
        
        {/* Bottom Left Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftVariants}
          className="flex flex-col w-full sm:max-w-xs lg:w-80" 
          id="bottom-left-card-group"
        >
          <div className="relative group overflow-hidden border border-white/10 bg-black/80 backdrop-blur-md p-3" id="inset-portrait-card">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
              {/* USER: Inject secondary inset card image here */}
              <img
                src={frontBg}
                alt="Product Aggressive Front Profile"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[4000ms] pointer-events-none select-none"
                referrerPolicy="no-referrer"
                id="inset-card-image"
              />
              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs px-2 py-0.5 text-[8px] tracking-[0.15em] font-secondary text-amber-400 border border-amber-400/20 uppercase">
                Active LED
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex flex-col items-start" id="explore-actions-block">
            <span className="text-xs md:text-sm font-medium tracking-wider text-white select-text font-secondary leading-relaxed drop-shadow-md" id="welcome-text-line">
              Welcome to the New Era of Performance.
            </span>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="mt-3.5 px-6 py-2.5 bg-white text-black text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2.5 transition-all duration-300 hover:bg-neutral-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer font-sans"
              id="explore-action-button"
            >
              Explore
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Right Verbatim Text Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightVariants}
          className="w-full max-w-full lg:max-w-[260px] text-left self-start lg:self-end" 
          id="bottom-right-text-block"
        >
          <p className="text-[11px] md:text-xs leading-relaxed text-white/90 select-text tracking-wide font-light font-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" id="verbatim-text">
            {/* USER: Update this copy for the specific product context */}
            The ultimate performance machine redefining standards in class and luxury. Crafted with lightweight composites for an exceptionally strong build, it combines track-level intensity with executive comfort.
          </p>
        </motion.div>
      </motion.div>

      {/* INTERACTIVE SPECIFICATIONS MENU / DRAWER (Sidebar Panel) */}
      <div
        className={`fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm transition-opacity duration-500 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsSidebarOpen(false)}
        id="specs-drawer-backdrop"
      >
        <div
          className={`w-full max-w-md h-full bg-neutral-950 border-l border-white/10 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto transition-transform duration-500 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
          id="specs-drawer-panel"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6" id="drawer-header">
            <div>
              {/* USER: Specs Drawer Headline */}
              <h2 className="text-lg font-extrabold tracking-tight uppercase font-sans">CHASSIS SPECIFICATIONS</h2>
              <p className="text-[10px] tracking-wide text-white/50 uppercase mt-1 font-secondary">Supercar Configuration Metrics</p>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 border border-white/15 hover:border-white/40 transition-colors"
              id="close-drawer-button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Specifications Grid */}
          <div className="my-8 space-y-6" id="specs-grid-container">
            <div className="border border-white/5 bg-neutral-900/40 p-4 transition-all hover:bg-neutral-900/60" id="spec-card-power">
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest text-white/40 uppercase font-secondary">Engine Output</span>
                <span className="text-[10px] bg-red-600/20 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-none font-medium font-secondary">Peak Record</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold font-secondary tracking-tight">627</span>
                <span className="text-xs text-white/70 font-secondary tracking-widest uppercase">HORSEPOWER</span>
              </div>
              <p className="text-xs text-white/60 mt-2 font-light font-secondary leading-relaxed">High performance V8 twin-turbo architecture powerhouse running high pressure dual injectors.</p>
            </div>

            <div className="border border-white/5 bg-neutral-900/40 p-4 transition-all hover:bg-neutral-900/60" id="spec-card-acceleration">
              <span className="text-[10px] tracking-widest text-white/40 uppercase font-secondary">Sprint Profile</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold font-secondary tracking-tight">3.0</span>
                <span className="text-xs text-white/70 font-secondary tracking-widest uppercase">SECONDS (0-100 KM/H)</span>
              </div>
              <p className="text-xs text-white/60 mt-2 font-light font-secondary leading-relaxed">Blistering off-the-line launch configured with advanced all-wheel dynamics.</p>
            </div>

            <div className="border border-white/5 bg-neutral-900/40 p-4 transition-all hover:bg-neutral-900/60" id="spec-card-weight">
              <span className="text-[10px] tracking-widest text-white/40 uppercase font-secondary">Chassis Lightweighting</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold font-secondary tracking-tight">-154 LBS</span>
                <span className="text-[10px] text-white/50 font-secondary tracking-widest uppercase">LIGHTER THAN PRECEDING SERIES</span>
              </div>
              <p className="text-xs text-white/60 mt-2 font-light font-secondary leading-relaxed">Extensive premium carbon fiber hood, front splitter, roof, wing mirrors, diffuser and composite bucket seats.</p>
            </div>

            <div className="border border-white/5 bg-neutral-900/40 p-4 transition-all hover:bg-neutral-900/60" id="spec-card-brakes">
              <span className="text-[10px] tracking-widest text-white/40 uppercase font-secondary">Thermal Braking System</span>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-wide font-secondary">Carbon Ceramics</span>
                <span className="text-xs text-amber-400 font-secondary uppercase">Gold Bronze Calipers</span>
              </div>
              <p className="text-xs text-white/60 mt-1.5 font-light font-secondary leading-relaxed">Virtually immune to thermal brake fade, ensuring razor-sharp stopping power at high speed track applications.</p>
            </div>
          </div>

          {/* Action Area */}
          <div className="border-t border-white/10 pt-6 space-y-4" id="drawer-action-block">
            <div className="flex items-center gap-2.5 text-xs text-white/70 font-light justify-center font-secondary">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full original manufacturer warranty included</span>
            </div>
            <button
              onClick={() => {
                setIsSidebarOpen(false);
                setIsConfigOpen(true);
              }}
              className="w-full py-3 bg-white text-black font-medium text-xs uppercase tracking-[0.2em] transition-all hover:bg-neutral-200 font-sans"
              id="drawer-config-action"
            >
              Config custom build
            </button>
          </div>
        </div>
      </div>

      {/* DYNAMIC CONFIGURATOR OVERLAY */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-500 ${isConfigOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => {
          setIsConfigOpen(false);
          setIsSubmitted(false);
        }}
        id="configurator-modal-backdrop"
      >
        <div
          className="w-full max-w-3xl border border-white/10 bg-neutral-950 p-4 sm:p-6 md:p-8 pt-14 sm:pt-8 flex flex-col md:flex-row gap-6 sm:gap-8 relative max-h-[85vh] sm:max-h-[90vh] overflow-y-auto mx-3 sm:mx-4"
          onClick={(e) => e.stopPropagation()}
          id="configurator-modal-panel"
        >
          {/* Close Trigger Button */}
          <button
            onClick={() => {
              setIsConfigOpen(false);
              setIsSubmitted(false);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 border border-neutral-800 text-white hover:border-white/40 transition-colors z-10"
            id="close-config-button"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Column 1: Configurator Preview */}
          <div className="flex-1 flex flex-col justify-between" id="config-visual-column">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-[10px] tracking-widest uppercase font-secondary text-amber-400 font-medium">Platform Configurator</span>
              </div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight font-sans">{activeColor}</h2>
              <p className="text-[10px] text-white/40 tracking-wider uppercase mt-1 font-secondary">
                {activeSeries} {activeModel} — Bespoke Build
              </p>
            </div>

            {/* Simulated Live Configured Car Preview Card */}
            <div className="relative aspect-video w-full my-6 bg-neutral-900 border border-white/10 overflow-hidden" id="config-visual-card">
              {/* USER: Change this to the configurable product preview image */}
              <img
                src={frontBg}
                alt="Configure Preview Master"
                className="w-full h-full object-cover object-center pointer-events-none select-none transition-all duration-700"
                referrerPolicy="no-referrer"
                id="config-preview-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
              
              {/* Dynamic Overlay simulation depending on color picked */}
              {/* USER: Adjust generic blends based on the paint options you define! */}
              {activeColor === paintColors[0].name && (
                <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color pointer-events-none transition-all duration-700" />
              )}
              {activeColor === paintColors[1].name && (
                <div className="absolute inset-0 bg-neutral-600/10 mix-blend-color pointer-events-none transition-all duration-700" />
              )}
              {activeColor === paintColors[2].name && (
                <div className="absolute inset-0 bg-zinc-950/30 mix-blend-color pointer-events-none transition-all duration-700" />
              )}

              {/* Badges */}
              <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                <span className="text-[9px] font-secondary tracking-wider bg-black/75 border border-white/10 p-1 font-medium uppercase text-white">
                  Alloys: {activeAlloys}
                </span>
                <span className="text-[9px] font-secondary tracking-wider bg-black/75 border border-white/10 p-1 font-medium uppercase text-white">
                  Cabin: {activeTrim}
                </span>
              </div>
            </div>

            <div className="text-[10px] text-white/50 space-y-1 block mt-2 font-secondary" id="design-notes">
              <span className="font-secondary text-white tracking-widest font-bold uppercase block">DESIGN NOTE:</span>
              <p className="font-light leading-relaxed">Carbon fiber lightweight construction hood and rear spoiler are applied standard to preserve optimal racing weight constraints.</p>
            </div>
          </div>

          {/* Column 2: Selection Options or Success Message */}
          <div className="w-full md:w-80 flex flex-col justify-between min-w-0" id="config-options-column">
            {isSubmitted ? (
              <div className="flex-1 flex flex-col justify-center items-center text-center py-10 px-4 space-y-4" id="success-view-pane">
                <div className="w-12 h-12 bg-[#9A8051]/10 border border-[#9A8051]/30 rounded-full flex items-center justify-center text-[#9A8051]">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase font-sans text-white">
                  BUILD SUBMITTED
                </h3>
                <p className="text-[11px] text-white/70 font-light leading-relaxed font-sans max-w-xs">
                  Your custom build in <span className="font-semibold text-white">{activeColor}</span> has been securely submitted. Our elite concierge team will email you shortly.
                </p>
                <p className="text-[10px] text-[#9A8051] font-mono tracking-wider uppercase">
                  CONCIERGE NOTIFIED // 2026
                </p>
                <button
                  onClick={() => {
                    setIsConfigOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="mt-6 px-6 py-2 border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all text-[10px] font-medium uppercase tracking-[0.15em] font-sans cursor-pointer"
                >
                  Close Build
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-6" id="config-option-groups">
                  
                  {/* Paint Selector */}
                  <div>
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-3 font-medium">
                      01 Exterior Paintwork
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3" id="config-paint-selection">
                      {paintColors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setActiveColor(color.name)}
                          className={`h-11 transition-all flex items-center justify-center relative cursor-pointer rounded-md ${activeColor === color.name ? "bg-white/10" : "bg-white/5 hover:bg-white/10"}`}
                          title={color.name}
                        >
                          <span className="w-8 h-8 rounded-none block border border-white/10 shadow-inner" style={{ backgroundColor: color.hex }} />
                          {activeColor === color.name && (
                            <div className="absolute -top-1 -right-1 bg-white text-black p-0.5 rounded-none">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="text-[10px] text-neutral-500 mt-2 font-light font-secondary leading-relaxed italic">
                      {paintColors.find((c) => c.name === activeColor)?.description}
                    </p>
                  </div>

                  {/* Alloy Selector */}
                  <div>
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2.5 font-medium">
                      02 Wheels & Performance Tyres
                    </label>
                    <div className="space-y-2.5" id="config-alloy-selection">
                      {alloysOpts.map((alloy) => (
                        <button
                          key={alloy.name}
                          onClick={() => setActiveAlloys(alloy.name)}
                          className={`w-full py-3 px-4 rounded-md text-left text-xs uppercase tracking-wider flex justify-between items-center cursor-pointer transition-all font-secondary ${activeAlloys === alloy.name ? "bg-white/10 text-white font-semibold" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
                        >
                          <div>
                            <span className="block text-[10px] font-medium">{alloy.name}</span>
                            <span className="block text-[8px] text-neutral-500 mt-0.5">{alloy.type}</span>
                          </div>
                          {activeAlloys === alloy.name && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interior Trim Selector */}
                  <div>
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2.5 font-medium">
                      03 Lightweight Interior Elements
                    </label>
                    <div className="space-y-2.5" id="config-trim-selection">
                      {trimOpts.map((trim) => (
                        <button
                          key={trim.name}
                          onClick={() => setActiveTrim(trim.name)}
                          className={`w-full py-3 px-4 rounded-md text-left text-xs uppercase tracking-wider flex justify-between items-center cursor-pointer transition-all font-secondary ${activeTrim === trim.name ? "bg-white/10 text-white font-semibold" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
                        >
                          <div>
                            <span className="block text-[10px] font-medium">{trim.name}</span>
                            <span className="block text-[8px] text-neutral-500 mt-0.5">{trim.description}</span>
                          </div>
                          {activeTrim === trim.name && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Summation Footer */}
                <div className="border-t border-white/10 pt-5 mt-6" id="config-footer">
                  <div className="flex items-center justify-between mb-3 font-secondary">
                    <span className="text-[10px] font-secondary tracking-widest uppercase text-white/40">Guaranteed Price</span>
                    <span className="text-sm font-bold tracking-wider text-[#9A8051] font-secondary">$142,000 MSRP</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(true);
                    }}
                    className="w-full py-3 bg-[#9A8051] text-black text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-white active:scale-95 duration-200 font-sans cursor-pointer"
                    id="submit-build-button"
                  >
                    Submit Specification
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
