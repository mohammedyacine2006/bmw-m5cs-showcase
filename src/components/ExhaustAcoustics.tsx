import React, { useState } from "react";
import { Volume2, VolumeX, ShieldCheck, Flame, Sliders } from "lucide-react";
import { motion, Variants } from "framer-motion";

type ModeType = "Efficient" | "Sport" | "Sport Plus";

interface ModeDetail {
  name: ModeType;
  decibels: string;
  valves: string;
  frequency: string;
  description: string;
  color: string;
  barCount: number;
  durationMultiplier: number;
}

export default function ExhaustAcoustics() {
  const [activeMode, setActiveMode] = useState<ModeType>("Sport");
  const [isPlaying, setIsPlaying] = useState(true);

  const modes: ModeDetail[] = [
    {
      name: "Efficient",
      decibels: "72 dB",
      valves: "Closed (Silent Cruise)",
      frequency: "120 Hz Low Rumble",
      description: "Discreet dual-channel routing designed for luxury touring. Minimizes cabin resonance while preserving deep undercurrents.",
      color: "bg-neutral-500",
      barCount: 16,
      durationMultiplier: 2.0
    },
    {
      name: "Sport",
      decibels: "86 dB",
      valves: "50% Open (Dynamic Flow)",
      frequency: "280 Hz Sharp Pulse",
      description: "Optimal balance of race-bred acoustics and cross-country comfort. Unleashes active feedback under load.",
      color: "bg-[#9A8051]",
      barCount: 24,
      durationMultiplier: 1.0
    },
    {
      name: "Sport Plus",
      decibels: "98 dB",
      valves: "100% Straight Bypass",
      frequency: "420 Hz High-Pitch Spit",
      description: "Direct track exhaust ventilation. Unleashes snaps, crackles, and the pure mechanical scream of the 627 HP Twin-Turbo V8.",
      color: "bg-red-500",
      barCount: 32,
      durationMultiplier: 0.5
    }
  ];

  const currentMode = modes.find((m) => m.name === activeMode) || modes[1];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="w-full bg-[#000000] text-white py-20 sm:py-28 border-t border-neutral-900 overflow-hidden relative"
      id="exhaust-acoustics-section"
    >
      {/* Decorative premium ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-red-600/3 blur-[150px] pointer-events-none z-0" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
      >
        {/* Left Column: Visualizer Widget (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center bg-neutral-950/60 border border-white/5 p-6 sm:p-8 relative">
          <div className="absolute top-3 left-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">ACTIVE ACOUSTICS REAL-TIME FEED</span>
          </div>

          <div className="absolute top-3 right-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? "Mute Visualizer" : "Play Visualizer"}
            >
              {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>

          {/* Wave Visualizer Box */}
          <div className="h-44 w-full flex items-end justify-center gap-1 sm:gap-1.5 my-8 border-b border-white/5 pb-2">
            {Array.from({ length: currentMode.barCount }).map((_, idx) => {
              // Calculate randomized heights for dynamic organic movement
              const baseHeight = 12 + (idx % 4) * 14 + (idx % 3) * 16;
              const duration = (0.6 + (idx % 5) * 0.15) * currentMode.durationMultiplier;

              return (
                <motion.div
                  key={`${activeMode}-${idx}`}
                  animate={isPlaying ? {
                    height: [
                      `${baseHeight * 0.2}px`,
                      `${baseHeight * 1.1}px`,
                      `${baseHeight * 0.4}px`,
                      `${baseHeight * 0.9}px`,
                      `${baseHeight * 0.2}px`
                    ]
                  } : { height: "4px" }}
                  transition={isPlaying ? {
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                  } : { duration: 0.5 }}
                  className={`w-1.5 rounded-full ${currentMode.color} opacity-80`}
                  style={{ height: `${baseHeight * 0.3}px` }}
                />
              );
            })}
          </div>

          {/* Mode telemetry readout */}
          <div className="grid grid-cols-3 gap-4 w-full text-center font-secondary">
            <div>
              <span className="text-[8px] text-neutral-500 tracking-wider uppercase block">SOUND LEVEL</span>
              <span className="text-sm font-bold text-white tracking-wide mt-1 block">{currentMode.decibels}</span>
            </div>
            <div>
              <span className="text-[8px] text-neutral-500 tracking-wider uppercase block">BYPASS VALVES</span>
              <span className="text-[10px] font-semibold text-white tracking-wide mt-1 block truncate">{currentMode.valves.split(" ")[0]}</span>
            </div>
            <div>
              <span className="text-[8px] text-neutral-500 tracking-wider uppercase block">FREQ. PEAK</span>
              <span className="text-[10px] font-semibold text-white tracking-wide mt-1 block truncate">{currentMode.frequency.split(" ")[0]} Hz</span>
            </div>
          </div>
        </div>

        {/* Right Column: Controls & Description (lg:col-span-6) */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-red-950/20 border border-red-500/20 px-3 py-1" id="exhaust-badge">
            <Flame className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[9px] font-mono tracking-[0.25em] text-red-400 uppercase">M SPORT VALVE CONFIGURATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wider font-sans leading-none">
            BESPOKE EXHAUST <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500">ACOUSTICS</span>
          </h2>

          <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed font-secondary max-w-lg mx-auto lg:mx-0">
            Automotive engineering extends beyond telemetry metrics; sound is the driver's direct connection to performance. Toggle our active flap systems to sample the engine tone formulations.
          </p>

          {/* Mode toggles */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-2">
            {modes.map((mode) => {
              const isActive = activeMode === mode.name;
              return (
                <button
                  key={mode.name}
                  onClick={() => {
                    setActiveMode(mode.name);
                    setIsPlaying(true);
                  }}
                  className={`px-5 py-2.5 border text-[10px] font-semibold uppercase tracking-widest cursor-pointer transition-all rounded-none font-sans ${
                    isActive
                      ? "bg-white text-black border-white"
                      : "border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-transparent"
                  }`}
                >
                  {mode.name}
                </button>
              );
            })}
          </div>

          <div className="bg-neutral-950/40 p-4 border border-white/5 max-w-lg mx-auto lg:mx-0 text-left">
            <p className="text-xs text-neutral-300 leading-relaxed font-secondary font-light">
              {currentMode.description}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
