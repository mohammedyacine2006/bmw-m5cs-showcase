import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Implement Scroll Direction State tracking
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine active nav item dynamically
  useEffect(() => {
    if (location.pathname === "/contact") {
      setActiveItem("contact");
      return;
    }

    // Set up IntersectionObserver to detect active page section when on the homepage
    const sections = [
      { id: "hero-showcase-container", name: "home" },
      { id: "specs-section-container", name: "specs" },
      { id: "experience-section-container", name: "dashboard" }
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.15
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const found = sections.find((s) => s.id === sectionId);
          if (found) {
            setActiveItem(found.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location.pathname]);

  const handleNavClick = (target: string) => {
    if (target === "contact") {
      navigate("/contact");
      setActiveItem("contact");
    } else {
      if (location.pathname !== "/") {
        // If not on home, route to home first, then scroll
        navigate("/");
        // Allow brief delay for mounting, then scroll
        setTimeout(() => {
          scrollToSection(target);
        }, 100);
      } else {
        scrollToSection(target);
      }
    }
  };

  const scrollToSection = (target: string) => {
    let elementId = "";
    if (target === "home") elementId = "hero-showcase-container";
    if (target === "specs") elementId = "specs-section-container";
    if (target === "dashboard") elementId = "experience-section-container";

    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveItem(target);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "specs", label: "Specs" },
    { id: "dashboard", label: "Interior" },
    { id: "contact", label: "Contact" }
  ];

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Desktop Floating Bottom Navigation Bar */}
      <nav 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
        }`} 
        aria-label="Main Navigation"
      >
        <div className="bg-black backdrop-blur-md border border-white/5 px-3 py-2 rounded-full flex items-center gap-1 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  isActive ? "text-[#9A8051]" : "text-white/60"
                } hover:text-white px-3 sm:px-4 py-2 text-[10px] sm:text-xs uppercase tracking-wider transition-colors duration-200 font-medium cursor-pointer`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Top Navigation Header */}
      <header className="fixed top-0 left-0 w-full h-16 bg-black/90 backdrop-blur-md border-b border-white/5 z-55 flex items-center justify-between px-6 md:hidden">
        {/* Brand logo / text */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white">M5 CS SHOWCASE</span>
          <span className="w-[1.5px] h-3 bg-red-600 transform skew-x-12 inline-block" />
          <span className="w-[1.5px] h-3 bg-blue-600 transform skew-x-12 inline-block" />
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 border border-white/10 text-white rounded-none hover:border-white/30 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-burger-button"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay / Drawer */}
      <div 
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <motion.div 
          initial="hidden"
          animate={isMobileMenuOpen ? "visible" : "hidden"}
          variants={mobileMenuVariants}
          className="flex flex-col items-center gap-6"
        >
          {navItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  handleNavClick(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl uppercase tracking-[0.25em] font-medium font-sans cursor-pointer transition-colors ${
                  isActive ? "text-[#9A8051]" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
