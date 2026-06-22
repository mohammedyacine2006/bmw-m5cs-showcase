import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Volume2, Cpu } from "lucide-react";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"buckets" | "audio" | "telemetry">("buckets");

  const tabsInfo = [
    {
      id: "buckets" as const,
      label: "Composite Buckets",
      icon: <Layers className="w-5 h-5" />,
      title: "CARBON RACING STRUCTURE",
      desc: "Track-optimized structural carbon shells finished in fine-grain leather and laser-carved bolster contours, engineered to reduce weight significantly while providing absolute lateral restraint."
    },
    {
      id: "audio" as const,
      label: "Premium Acoustics",
      icon: <Volume2 className="w-5 h-5" />,
      title: "SPATIAL COCKPIT ACOUSTICS",
      desc: "A bespoke spatial acoustic architecture, expertly equalized to mitigate cabinet pressure and render authentic, high-fidelity frequencies up to the vehicle's speed threshold."
    },
    {
      id: "telemetry" as const,
      label: "Competition Telemetry",
      icon: <Cpu className="w-5 h-5" />,
      title: "CORE PERFORMANCE RAW FEED",
      desc: "Real-time engine, tire, and drive dynamics processed instantaneously. High-frequency sensory modules transmit thermal gradients and lateral G-forces directly to the head-up console."
    }
  ];

  return (
    <section 
      className="min-h-screen lg:h-screen w-full snap-start snap-always relative overflow-hidden bg-[#050505] text-white flex flex-col justify-between select-none border-t border-neutral-900 pb-24 sm:pb-20 lg:pb-0"
      id="experience-section-container"
    >
      {/* SECTION 03: INTERIOR / CABIN EXPERIENCES */}
      {/* Subtle coordinate grids/lines for raw engineering aesthetic */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/5" />
        <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-white/5" />
        <div className="absolute left-0 right-0 top-24 h-[1px] bg-white/5" />
        <div className="absolute left-0 right-0 bottom-24 h-[1px] bg-white/5" />
        {/* Soft background radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9A8051]/5 blur-[120px] rounded-full" />
      </div>

      {/* 1. TOP ABSOLUTE TEXT */}
      <div className="absolute top-8 sm:top-12 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-4 sm:px-6 text-center pointer-events-none">
        <h2 className="text-base sm:text-xl md:text-3xl font-light uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white mb-2 leading-none">
          A SANCTUARY OF PERFORMANCE
        </h2>
        <p className="text-[10px] md:text-xs text-white/50 leading-relaxed font-light max-w-lg mx-auto normal-case">
          A driver-focused enclosure formulated to strip away raw secondary road vibration, fusing pure mechanical feedback with luxury Alcantara ergonomics.
        </p>
      </div>

      {/* 2. CENTRAL SLIDERS (Studio PNG Asset Simulation) */}
      <div className="flex-1 w-full flex items-center justify-center relative z-10 px-3 sm:px-4 md:px-12 mt-16 sm:mt-20">
        <AnimatePresence mode="wait">
          {activeTab === "buckets" && (
            <motion.div
              key="buckets"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
            >
              {/* Data Panel representation */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center">
                <div className="border border-[#9A8051] bg-[#050505]/80 p-4 sm:p-6 md:p-8 w-full max-w-[400px] flex flex-col font-mono text-[10px] sm:text-xs text-white/70 space-y-3 sm:space-y-4 tracking-widest relative">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#9A8051]" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#9A8051]" />
                  <div className="flex border-b border-white/10 pb-3 sm:pb-4">
                    <span className="break-all sm:break-normal">MATERIAL // MULTI-LAYER CARBON FIBER (CFRP)</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-3 sm:pb-4">
                    <span className="break-all sm:break-normal">WEIGHT REDUCTION // -21 LBS PER SEAT</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-3 sm:pb-4">
                    <span className="break-all sm:break-normal">STRUCTURE // ANTI-SLIP SIDE BOLSTERS</span>
                  </div>
                  <div className="flex">
                    <span>SAFETY CONTEXT // FIA RACING HOMOLOGATED</span>
                  </div>
                </div>
              </div>

              {/* Text descriptions */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 max-w-sm">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#9A8051] uppercase font-bold">SPECIFICATION A // 01</span>
                <h3 className="text-xl font-light tracking-[0.2em] uppercase text-white">
                  {tabsInfo[0].title}
                </h3>
                <div className="w-12 h-[1px] bg-[#9A8051]" />
                <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed normal-case">
                  {tabsInfo[0].desc}
                </p>
                <div className="flex gap-4 pt-1 text-[10px] font-mono text-white/40 uppercase">
                  <div>WEIGHT: <span className="text-[#9A8051]">-30 LBS</span></div>
                  <div>MATERIAL: <span className="text-[#9A8051]">CFRP / PREMIUM</span></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "audio" && (
            <motion.div
              key="audio"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
            >
              {/* Data Panel representation */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center">
                <div className="border border-white/10 bg-[#050505]/80 p-4 sm:p-6 md:p-8 w-full max-w-[400px] flex flex-col font-mono text-[10px] sm:text-xs text-white/70 space-y-3 sm:space-y-4 tracking-widest relative">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#9A8051]" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#9A8051]" />
                  <div className="flex border-b border-white/10 pb-4">
                    <span>SYSTEM MODE // 3D SPATIAL REVERB</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-4">
                    <span>OUTPUT POWER // 464 WATTS DIGITAL AMP</span>
                  </div>
                  <div className="flex border-b border-white/10 pb-4">
                    <span>EQUALIZER // DYNAMIC PLATFORM PRESET</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>EQUALIZER // PREMIUM PRESET</span>
                    <span className="flex items-center gap-2">
                       [ACTIVE] <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Text descriptions */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 max-w-sm">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#9A8051] uppercase font-bold">SPECIFICATION B // 02</span>
                <h3 className="text-xl font-light tracking-[0.2em] uppercase text-white">
                  {tabsInfo[1].title}
                </h3>
                <div className="w-12 h-[1px] bg-[#9A8051]" />
                <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed normal-case">
                  {tabsInfo[1].desc}
                </p>
                <div className="flex gap-4 pt-1 text-[10px] font-mono text-white/40 uppercase">
                  <div>OUTPUT: <span className="text-[#9A8051]">464 WATTS</span></div>
                  <div>DRIVERS: <span className="text-[#9A8051]">16 CHANNELS</span></div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "telemetry" && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
            >
              {/* Data Panel representation */}
              <div className="w-full md:w-1/2 relative flex items-center justify-center">
                <div className="border border-white/10 bg-[#050505]/80 p-4 sm:p-6 md:p-8 w-full max-w-[420px] flex flex-col relative">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#E11B22]" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#E11B22]" />
                  
                  {/* Large Readouts */}
                  <div className="flex flex-col lg:flex-row lg:items-baseline gap-4 lg:gap-8 border-b border-white/10 pb-6 mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl sm:text-6xl font-black text-white tracking-tighter">299</span>
                      <span className="text-sm font-mono text-white/50 tracking-widest ml-2">KM/H</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-xl sm:text-3xl font-black tracking-tighter text-[#0066B2]">7,200</span>
                      <span className="text-sm font-mono tracking-widest ml-2 text-[#E11B22]">RPM</span>
                    </div>
                  </div>
                  
                  {/* Micro Table */}
                  <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 font-mono text-[9px] sm:text-[10px] md:text-[11px] text-white/70 tracking-widest uppercase">
                    <div className="border-b border-white/10 pb-4">TIRE TEMP: 72°C [OPTIMAL]</div>
                    <div className="border-b border-white/10 pb-4">LATERAL G: 1.45 G</div>
                    <div>BRAKE PRESS: 84%</div>
                    <div className="flex gap-2 text-[#E11B22]">LAP STATE: <span>LIVE FEED</span></div>
                  </div>
                </div>
              </div>

              {/* Text descriptions */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 max-w-sm">
                <span className="font-mono text-[9px] tracking-[0.3em] text-[#9A8051] uppercase font-bold">SPECIFICATION C // 03</span>
                <h3 className="text-xl font-light tracking-[0.2em] uppercase text-white">
                  {tabsInfo[2].title}
                </h3>
                <div className="w-12 h-[1px] bg-[#9A8051]" />
                <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed normal-case">
                  {tabsInfo[2].desc}
                </p>
                <div className="flex gap-4 pt-1 text-[10px] font-mono text-white/40 uppercase">
                  <div>LATERAL G: <span className="text-[#9A8051]">1.45 G</span></div>
                  <div>LAP DYNAMICS: <span className="text-[#9A8051]">LIVE FEED</span></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. BOTTOM ABSOLUTE ICONS */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl px-3 sm:px-6">
          <div className="flex justify-around items-center border-t border-white/10 pt-4 sm:pt-6 gap-1 sm:gap-2" id="selector-tabs-row">
            {tabsInfo.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setActiveTab(tab.id)}
                  className="group flex flex-col items-center text-center px-2 sm:px-4 py-2 cursor-pointer transition-all duration-300 relative"
                  id={`experience-tab-${tab.id}`}
                >
                  {/* Icon with Gold/Bronze color styling */}
                  <div 
                    className={`mb-2 p-2.5 border transition-all duration-300 ${
                      isSelected
                        ? "text-[#9A8051] bg-[#9A8051]/10 border-[#9A8051]"
                        : "text-white/40 bg-white/5 border-transparent group-hover:text-white/80 group-hover:bg-white/10"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  
                  {/* Thin elegant text labels */}
                  <span 
                    className={`text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.18em] transition-colors duration-300 ${
                      isSelected ? "text-white font-medium" : "text-white/40 group-hover:text-white/80"
                    }`}
                  >
                    {tab.label}
                  </span>
                  
                  {/* Subtle active underline indicator */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute -bottom-[25px] w-8 h-[2px] bg-[#9A8051]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
