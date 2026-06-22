import React, { useState } from "react";
import { ChevronRight, Cpu, Settings, Activity, ShieldAlert, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MatrixItem {
  id: string;
  label: string;
  value: string;
  details: string;
  calibration: string;
}

interface MatrixCategory {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  description: string;
  items: MatrixItem[];
}

export default function TechnicalHighlights() {
  const categories: MatrixCategory[] = [
    {
      id: "powertrain",
      name: "POWERTRAIN & TRANSMISSION",
      shortName: "POWERTRAIN",
      icon: <Cpu className="w-4 h-4" />,
      description: "State-of-the-art racetrack dynamic systems engineered to sustain maximum lateral forces and deliver instantaneous traction.",
      items: [
        {
          id: "engine",
          label: "ENGINE",
          value: "4.4L BMW M TwinPower Turbo V8",
          details: "Tuned by the elite division, featuring dual high-pressure fuel pumps, cross-bank exhaust manifolds, and dry-sump track oil lubrication.",
          calibration: "Optimal Core Thermo-Staged @ 98.4%"
        },
        {
          id: "transmission",
          label: "TRANSMISSION",
          value: "8-speed M Steptronic Automatic",
          details: "Coupled with Drivelogic three-stage shifting parameters, enabling ultra-fast shifting and instant rev-matching downshifts.",
          calibration: "Drivelogic Stage 3 Armed"
        },
        {
          id: "drivetrain",
          label: "DRIVETRAIN",
          value: "M xDrive (with 2WD selectable mode)",
          details: "Intelligent rear-biased AWD system with active differential vectoring, fully decoupled for genuine dynamic drift capabilities.",
          calibration: "Active Vectoring Online"
        },
        {
          id: "wheels",
          label: "WHEELS",
          value: "20\" M Gold Bronze Forged Light Alloy Style 813M",
          details: "Y-spoke monoblock forged aluminum construction saving 12.5 lbs of unsprung rotational mass per axle, styled in exclusive gold bronze.",
          calibration: "Tire Pressure Adaptive Mode"
        }
      ]
    },
    {
      id: "chassis",
      name: "CHASSIS & DYNAMICS",
      shortName: "CHASSIS SETUP",
      icon: <Sliders className="w-4 h-4" />,
      description: "Rigid chassis reinforcements paired with track-tuned active dampers for razor-sharp handling.",
      items: [
        {
          id: "suspension",
          label: "SUSPENSION SETUP",
          value: "Adaptive M Dynamic Dampers",
          details: "Specially tuned helper springs and retuned damper rates from the M8 Gran Coupé, lowering the ride height by 0.2 inches.",
          calibration: "Dynamic Track Mapping Active"
        },
        {
          id: "brakes",
          label: "BRAKES",
          value: "M Carbon Ceramic Braking Suite",
          details: "6-piston fixed front calipers finished in gloss red, dropping 51 lbs of unsprung mass while offering fade-free track stopping power.",
          calibration: "Thermal Resistance Max (850°C)"
        },
        {
          id: "stability",
          label: "STABILITY SYSTEM",
          value: "M Dynamic Select Stability Controls",
          details: "DSC stability matrix allowing specialized drift thresholds before system intervention, optimized for precision telemetry feedback.",
          calibration: "Sport Mode Calibration Completed"
        }
      ]
    },
    {
      id: "aero",
      name: "AERODYNAMICS & COMPOSITES",
      shortName: "AERO & WEIGHT",
      icon: <Activity className="w-4 h-4" />,
      description: "Extensive weight optimization through aerospace-heritage Carbon Fiber Reinforced Plastic.",
      items: [
        {
          id: "materials",
          label: "MATERIAL COMPOSITION",
          value: "Aerospace-Grade Carbon Fiber (CFRP)",
          details: "Carbon fiber reinforced plastic hood with twin functional heat extractors, front splitter, roof, wing mirrors, rear diffuser and rear wing.",
          calibration: "Weight Index -154 LBS Calibrated"
        },
        {
          id: "exhaust",
          label: "EXHAUST PIPING",
          value: "Four-Pipe Active Sport Exhaust",
          details: "Weight-optimized active exhaust loop featuring dual-mode acoustic flaps and CS-exclusive gold-finished stainless steel outlets.",
          calibration: "Acoustic Bypass 100% Armed"
        },
        {
          id: "cockpit",
          label: "COCKPIT HOUSING",
          value: "Four-Seat M Carbon Buckets",
          details: "Individual high-contour carbon fiber racing seats for both front and rear passengers, optimizing lateral torso stability on racetrack lines.",
          calibration: "Seating Position Offset Active"
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>("powertrain");
  const [selectedItem, setSelectedItem] = useState<string | null>("engine");

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section 
      className="w-full bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 border-t border-white/5 relative overflow-hidden"
      id="packages"
    >
      {/* Decorative subtle top gold line */}
      <div className="absolute top-0 left-24 right-24 h-[1px] bg-gradient-to-r from-transparent via-[#9A8051]/30 to-transparent" />
      
      {/* Visual background details */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#9A8051]/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-500/1 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          
          {/* LEFT SIDEBAR: Static Category Titles & Interactive Controls */}
          <div className="lg:col-span-5 space-y-8" id="technical-sidebar">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-[0.15em] sm:tracking-[0.2em] leading-tight uppercase font-sans">
                CHASSIS & ARCHITECTURE <br />
                <span className="font-semibold text-[#9A8051]">TECHNICAL MATRIX</span>
              </h2>
              <p className="text-xs text-neutral-400 font-secondary leading-relaxed max-w-sm">
                Each subsystem of the M5 CS is calibrated for total dynamic feedback. Click any category or detailed row to inspect its authentic motorsport telemetry specifications.
              </p>
            </div>

            {/* Interactive Category Selector Tabs */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-white/5" id="tech-tabs-container">
              {categories.map((cat) => {
                const isActive = cat.id === activeTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveTab(cat.id);
                      setSelectedItem(cat.items[0]?.id || null);
                    }}
                    className={`flex items-center justify-between p-3 sm:p-4 border transition-all duration-300 text-left rounded-none group cursor-pointer ${
                      isActive 
                        ? "border-[#9A8051] bg-[#9A8051]/5 text-white" 
                        : "border-neutral-800/40 bg-neutral-900/10 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-900/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 transition-colors duration-300 ${isActive ? "text-[#9A8051]" : "text-neutral-500 group-hover:text-neutral-300"}`}>
                        {cat.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono tracking-widest font-bold uppercase">{cat.shortName}</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isActive ? "translate-x-1 text-[#9A8051]" : "text-neutral-600 group-hover:translate-x-1 group-hover:text-neutral-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Live Calibration Readout Widget for interactivity */}
            <div className="p-4 bg-neutral-950/80 border border-neutral-900 flex items-start gap-3 rounded-none" id="tech-calibration-board">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0066B2] mt-1" />
              <div className="space-y-1">
                <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest font-bold">SYSTEM DIAGNOSTICS:</div>
                <div className="text-[10px] font-mono text-white tracking-wider uppercase font-medium">Bespoke Dynamics Telemetry Stream Active</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: Highly Interactive Specification Table Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="technical-matrix-grid">
            <div className="space-y-1 mb-6">
              <span className="text-[9px] font-mono text-neutral-400 tracking-wider">GROUP CATEGORY</span>
              <h3 className="text-xs font-bold font-mono text-white tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#9A8051] inline-block" />
                {activeCategory.name}
              </h3>
            </div>

            {/* List of Component Rows */}
            <div className="divide-y divide-white/5 border-t border-b border-white/5" id="spec-rows-list">
              {activeCategory.items.map((item) => {
                const isSelected = selectedItem === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(isSelected ? null : item.id)}
                    className={`py-4 sm:py-5 transition-all duration-300 cursor-pointer group ${
                      isSelected ? "bg-white/[0.02] px-3" : "hover:bg-white/[0.01] px-3"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-[11px] font-mono tracking-wider text-neutral-400 uppercase font-semibold group-hover:text-white transition-colors duration-300">
                        {item.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold tracking-wide transition-colors duration-300 ${
                          isSelected ? "text-[#9A8051]" : "text-white group-hover:text-[#9A8051]"
                        }`}>
                          {item.value}
                        </span>
                        <ChevronRight className={`w-3 h-3 text-neutral-600 transition-transform duration-300 ${
                          isSelected ? "rotate-90 text-[#9A8051]" : "group-hover:translate-x-0.5"
                        }`} />
                      </div>
                    </div>

                    {/* Expandable description drawer for genuine rich interaction */}
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 border-t border-neutral-800/60 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                            <p className="text-xs text-neutral-400 font-secondary font-light max-w-lg leading-relaxed">
                              {item.details}
                            </p>
                            <span className="text-[9px] font-mono bg-neutral-900 border border-[#9A8051]/30 py-1 px-2 sm:px-3 text-[#9A8051] whitespace-normal sm:whitespace-nowrap self-start font-semibold uppercase text-[8px] sm:text-[9px]">
                              {item.calibration}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Quick interactive reset banner */}
            <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mt-6 text-right">
              // Click rows to view micro-calibrations
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
