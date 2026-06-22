import React, { useState } from "react";
import { Shield, Sparkles, Box, Cpu } from "lucide-react";
import { motion, Variants } from "framer-motion";

type ComponentKey = "hood" | "splitter" | "diffuser";

interface AeroComponent {
  key: ComponentKey;
  name: string;
  material: string;
  weightReduction: string;
  downforceImpact: string;
  dragCoefficient: string;
  description: string;
  microcopy: string;
}

export default function AerodynamicMatrix() {
  const [activeComponent, setActiveComponent] = useState<ComponentKey>("hood");

  const components: AeroComponent[] = [
    {
      key: "hood",
      name: "Carbon Fiber Vent Hood",
      material: "CFRP (Carbon Fiber Reinforced Plastic)",
      weightReduction: "-21.5 lbs vs Steel",
      downforceImpact: "+18 lbs at 150 mph",
      dragCoefficient: "-0.01 Cd reduction",
      description: "Obsessively molded carbon fiber composite channels engineered with specific ventilation profiles. Safely vents high-pressure thermal air away from the V8 twin-turbo core while optimizing clean laminar airflow across the front windshield.",
      microcopy: "Aerospace-grade structural CFRP engineered for thermal dissipation and front weight bias shift."
    },
    {
      key: "splitter",
      name: "Track-Optimized Front Splitter",
      material: "Pre-preg High-Gloss Carbon Fiber",
      weightReduction: "-6.2 lbs",
      downforceImpact: "+42 lbs at 150 mph",
      dragCoefficient: "Neutral drag impact",
      description: "An aggressive low-slung splitter that divides incoming airflow. Forces high-pressure air upward to generate massive nose downforce, while routing low-pressure airflow underneath the flat-bottom belly pan for clean ground effect vacuum.",
      microcopy: "Precision autoclave molded structure configured for high-speed tracking and lateral stability."
    },
    {
      key: "diffuser",
      name: "Venturi Rear Diffuser",
      material: "Multi-layered Carbon Fiber Composite",
      weightReduction: "-11.8 lbs",
      downforceImpact: "+55 lbs at 150 mph",
      dragCoefficient: "-0.02 Cd drag reduction",
      description: "Features extended vertical air vanes that stabilize high-velocity underbody exhaust. Expands airflow cross-section to create a vacuum beneath the rear axle, pulling the tires to the track surface without adding parasitic aerodynamic drag.",
      microcopy: "Vortex-shedding geometry designed to eliminate wake drag and high-speed instability."
    }
  ];

  const currentComponent = components.find((c) => c.key === activeComponent) || components[0];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="w-full bg-[#000000] text-white py-20 sm:py-28 border-t border-neutral-900 overflow-hidden relative font-sans"
      id="aerodynamic-matrix-section"
    >
      {/* Visual background lighting accents */}
      <div className="absolute top-1/3 right-10 w-[20vw] h-[20vw] bg-[#9A8051]/3 blur-[140px] rounded-full pointer-events-none z-0" />

      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-white/10 px-3 py-1 mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#9A8051]" />
            <span className="text-[9px] font-mono tracking-[0.25em] text-white/70 uppercase">
              COMPUTATIONAL FLUID DYNAMICS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wider">
            AERODYNAMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9A8051]">COMPONENT MATRIX</span>
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-light mt-3 max-w-xl mx-auto leading-relaxed font-secondary">
            Analyze the lightweight aerodynamics. Every component is autoclaved from carbon composites to ensure optimal downforce profiles at high speeds.
          </p>
        </div>

        {/* Component Selector Tabs */}
        <div className="flex justify-center border-b border-white/10 mb-8 sm:mb-12 max-w-2xl mx-auto">
          {components.map((comp) => (
            <button
              key={comp.key}
              onClick={() => setActiveComponent(comp.key)}
              className={`flex-1 pb-4 text-[10px] sm:text-xs uppercase tracking-widest transition-all relative cursor-pointer font-medium ${
                activeComponent === comp.key ? "text-[#9A8051]" : "text-white/40 hover:text-white/85"
              }`}
            >
              {comp.key === "hood" && "Carbon Hood"}
              {comp.key === "splitter" && "Front Splitter"}
              {comp.key === "diffuser" && "Rear Diffuser"}
              {activeComponent === comp.key && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9A8051]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Block */}
        <motion.div 
          key={activeComponent}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center max-w-5xl mx-auto"
        >
          {/* Column 1: Component Stats (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-white/5 bg-neutral-950/50 p-6 space-y-4 font-secondary">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#9A8051] uppercase block">
                PERFORMANCE INDEX METRICS
              </span>
              <div className="h-[1px] bg-white/5" />
              <div className="space-y-1">
                <span className="text-[9px] text-neutral-500 uppercase block">COMPONENT WEIGHT SAVINGS</span>
                <span className="text-xl font-bold text-white tracking-wide block">{currentComponent.weightReduction}</span>
              </div>
              <div className="h-[1px] bg-white/5" />
              <div className="space-y-1">
                <span className="text-[9px] text-neutral-500 uppercase block">DOWNFORCE GENERATION</span>
                <span className="text-xl font-bold text-white tracking-wide block">{currentComponent.downforceImpact}</span>
              </div>
              <div className="h-[1px] bg-white/5" />
              <div className="space-y-1">
                <span className="text-[9px] text-neutral-500 uppercase block">DRAG COEFFICIENT OFFSET</span>
                <span className="text-xl font-bold text-[#9A8051] tracking-wide block">{currentComponent.dragCoefficient}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Details & Description (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block mb-1">
                Autoclave Specification Blueprint
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
                {currentComponent.name}
              </h3>
              <span className="text-[9px] bg-neutral-900 border border-white/10 px-2 py-0.5 text-neutral-400 uppercase inline-block mt-2">
                {currentComponent.material}
              </span>
            </div>

            <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed font-secondary">
              {currentComponent.description}
            </p>

            <div className="pt-4 border-t border-white/5 flex items-start gap-3.5 text-left text-xs text-neutral-400 leading-relaxed font-secondary font-light italic">
              <span className="w-1.5 h-1.5 bg-[#9A8051] inline-block shrink-0 mt-1.5" />
              <p>{currentComponent.microcopy}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
