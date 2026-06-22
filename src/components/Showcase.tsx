import React from "react";
import { motion, Variants } from "framer-motion";

import cs1 from "../assets/images/cs1.png";
import cs2 from "../assets/images/cs2.png";
import cs3 from "../assets/images/cs3.png";
import cs4 from "../assets/images/cs4.png";
import cs5 from "../assets/images/cs5.png";
import cs6 from "../assets/images/cs6.png";

export default function Showcase() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.95, ease: "easeOut" }
    }
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.95, ease: "easeOut" }
    }
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.95, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-black text-white w-full overflow-hidden flex flex-col pb-24 sm:pb-32 border-t border-neutral-900" id="showcase-editorial">
      {/* SECTION 04: SHOWCASE GALLERY */}
      {/* BLOCK 1 (Hero Panorama) */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full relative uppercase font-sans"
      >
        <div className="w-full aspect-[4/3] md:aspect-[1920/803] relative bg-neutral-950 overflow-hidden">
          {/* USER: Inject Showcase imagery */}
          <img src={cs1} alt="Product Showcase Hero Panorama" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
        <div className="relative mt-6 px-4 md:absolute md:bottom-16 md:left-16 md:z-20 md:max-w-xl md:mt-0">
          <span className="font-mono text-xs text-[#9A8051] tracking-widest block mb-1 font-bold">
            01 // RUNWAY TELEMETRY
          </span>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            DYNAMIC GRAVITY.
          </h2>
          <p className="text-white/70 font-light text-xs sm:text-sm tracking-wide max-w-sm mt-2 sm:mt-4 normal-case">
            A silhouette sculpted by high-speed airflow and raw competitive track logic.
          </p>
        </div>
      </motion.div>

      {/* BLOCK 2 (Symmetrical Duplet - Rebuilt for Luxury Editorial Under-image text) */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-24 w-full max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16"
      >
        <motion.div 
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-4"
        >
          <div className="aspect-square relative bg-neutral-950 overflow-hidden group">
            <img src={cs2} alt="Pure Precision" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
          </div>
          <div className="text-left py-2 flex flex-col space-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#9A8051] uppercase font-bold">02 // TRACK STANCE</span>
            <h3 className="text-base md:text-lg font-light tracking-[0.2em] text-white uppercase">
              PURE PRECISION
            </h3>
            <p className="text-white/60 font-light text-sm tracking-wide leading-relaxed normal-case">
              Calculated dynamics resulting in peerless cornering agility. Weight balancing achieves unmatched center of gravity optimization.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-4"
        >
          <div className="aspect-square relative bg-neutral-950 overflow-hidden group">
            <img src={cs3} alt="Raw Power" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
          </div>
          <div className="text-left py-2 flex flex-col space-y-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#9A8051] uppercase font-bold">02 // THERMAL DYNAMICS</span>
            <h3 className="text-base md:text-lg font-light tracking-[0.2em] text-white uppercase">
              RAW POWER
            </h3>
            <p className="text-white/60 font-light text-sm tracking-wide leading-relaxed normal-case">
              Unrestrained force delivered with absolute control. Custom dual-compressors ensure intensive performance thresholds under heat load.
            </p>
          </div>
        </motion.div>
      </div>

      {/* BLOCK 3 (Middle Panorama) */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full relative uppercase font-sans mt-12 sm:mt-20"
      >
        <div className="w-full aspect-[4/3] md:aspect-[1920/900] relative bg-neutral-950 overflow-hidden">
           <img src={cs4} alt="Middle Panorama" className="absolute inset-0 w-full h-full object-cover" />
           <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
        <div className="relative mt-6 px-4 md:absolute md:bottom-16 md:left-16 md:z-20 md:max-w-xl md:mt-0">
          <span className="font-mono text-xs text-[#9A8051] tracking-widest block mb-1 font-bold">
            03 // VISUAL AERODYNAMICS
          </span>
          <h3 className="text-lg sm:text-xl md:text-3xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase mb-2 sm:mb-4">
            AERODYNAMIC INTEGRITY
          </h3>
          <p className="text-white/70 font-light text-xs sm:text-sm tracking-wide max-w-sm normal-case">
            Every curve, every intake obsessively engineered to cut through the air, leaving nothing to chance.
          </p>
        </div>
      </motion.div>

      {/* BLOCK 4 & 5 (Asymmetric Alternating Showcase) */}
      <div className="flex flex-col gap-12 sm:gap-20 w-full mt-12 sm:mt-20">
        {/* Row 1 Expanded */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16 items-center max-w-7xl mx-auto px-4 w-full"
        >
          <div className="w-full md:w-[60%] lg:w-[65%] aspect-[1288/805] bg-neutral-950 overflow-hidden relative">
            <img src={cs5} alt="Crafted for the Track" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col justify-center space-y-6 px-4 md:px-8">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white">
              CRAFTED FOR <br/> THE TRACK
            </h4>
            <div className="w-12 h-[1px] bg-[#9A8051]" />
            <p className="text-white/70 font-light text-xs sm:text-sm tracking-wide max-w-sm normal-case">
              An aggressive stance met with lightweight carbon fiber components creates an inescapable presence.
            </p>
          </div>
        </motion.div>

        {/* Row 2 Expanded */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row-reverse gap-6 sm:gap-10 md:gap-16 items-center max-w-7xl mx-auto px-4 w-full"
        >
          <div className="w-full md:w-[60%] lg:w-[65%] aspect-[1288/805] bg-neutral-950 overflow-hidden relative">
            <img src={cs6} alt="Aerodynamic Supremacy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col justify-center space-y-6 px-4 md:px-8 items-start md:items-end text-left md:text-right">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white">
              AERODYNAMIC <br/> SUPREMACY
            </h4>
            <div className="w-12 h-[1px] bg-[#9A8051]" />
            <p className="text-white/70 font-light text-xs sm:text-sm tracking-wide max-w-sm normal-case">
              Molded from the wind tunnel, the profile dictates performance at its absolute edge.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
