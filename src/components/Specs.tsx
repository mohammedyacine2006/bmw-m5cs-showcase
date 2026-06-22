import React, { useState, useRef } from "react";
import { 
  Zap, 
  Timer, 
  Gauge, 
  Scale, 
  X, 
  CheckCircle2, 
  ChevronRight, 
  CornerDownRight, 
  ShieldAlert,
  Flame,
  UserCheck
} from "lucide-react";
import { motion, Variants } from "framer-motion";

interface SpecDetail {
  title: string;
  subtitle: string;
  metric: string;
  icon: React.ReactNode;
  highlights: string[];
  description: string;
}

export default function Specs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [activeSpecIndex, setActiveSpecIndex] = useState<number | null>(null);
  const [showCommissionModal, setShowCommissionModal] = useState(false);
  
  // Interactive Commission Form State
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredCenter, setPreferredCenter] = useState("Silicon Valley Elite Vaults");
  const [commissionSubmitted, setCommissionSubmitted] = useState(false);

  // Technical Specs Data Array - USER: Edit metric details for product template
  const specsData: SpecDetail[] = [
    {
      title: "V8 TWIN-TURBO",
      subtitle: "ENGINE CAPACITY",
      metric: "627 HP",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      highlights: ["Premium TwinPower 4.0L", "950 Nm Peak torque", "Dual high-pressure fuel pumps", "Forged lightweight pistons"],
      description: "Under the sculpted carbon-fiber hood lives our strongest production engine. Tuned from our elite division, it produces race-track intensity combined with state-of-the-art thermal efficiency."
    },
    {
      title: "0 - 100 KM/H",
      subtitle: "SPRINT DYNAMICS",
      metric: "3.0S",
      icon: <Timer className="w-6 h-6 md:w-8 md:h-8" />,
      highlights: ["Launch Control Optimization", "Intelligent AWD System", "8-Speed Active Sequential", "Rear-biased layout tracking"],
      description: "Blistering launch performance. The bespoke active drive system transfers power dynamically between axles within milliseconds, launching this premium body with pure traction authority."
    },
    {
      title: "ELECTRONICALLY LIMITED",
      subtitle: "VMAX APEX STATUS",
      metric: "306 KM/H",
      icon: <Gauge className="w-6 h-6 md:w-8 md:h-8" />,
      highlights: ["Track package standard", "High-speed tires optimized", "Bespoke downforce balance", "Ceramic thermal dissipation"],
      description: "Unprecedented speed constraints. Aerodynamically sculpted splitters and dynamic air intake systems ensure absolute stability and premium steering feedback at extreme velocities."
    },
    {
      title: "WEIGHT REDUCTION",
      subtitle: "LIGHTWEIGHT CHASSIS",
      metric: "-154 LBS",
      icon: <Scale className="w-6 h-6 md:w-8 md:h-8" />,
      highlights: ["Bespoke Carbon hood", "Composite ceramic track brakes", "Single motorsport buckets", "Carbon rear spoiler diffuser"],
      description: "Ounces yield pounds, pounds yield performance. Stripped of heavy sound dissipation foam and constructed with premium Aerospace-grade Carbon Fiber Reinforced Plastic, the vehicle redefines agility."
    }
  ];

  const handleCommissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailAddress || !phoneNumber) {
      alert("Please fill in all requested fields to validate the premium commission slot.");
      return;
    }
    setCommissionSubmitted(true);
  };

  const handleCloseCommissionModal = () => {
    setShowCommissionModal(false);
    setCommissionSubmitted(false);
    setFullName("");
    setEmailAddress("");
    setPhoneNumber("");
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen lg:h-screen w-full snap-start snap-always relative overflow-hidden bg-[#000000] text-white flex flex-col justify-center border-t border-neutral-900 px-4 sm:px-6 py-16 sm:py-20 lg:py-0" 
      id="specs-section-container"
    >
      {/* SECTION 02: SPECIFICATIONS */}
      {/* Visual background lighting accents */}
      <div className="absolute inset-0 z-0">
        {/* USER: Change colors here to match the brand */}
        <div className="absolute top-1/2 left-10 w-[20vw] h-[20vw] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none select-none" />
        <div className="absolute bottom-10 right-20 w-[25vw] h-[25vw] bg-[#9A8051]/5 blur-[180px] rounded-full pointer-events-none select-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full max-h-none lg:max-h-[85vh] z-10" id="specs-inner-boundary">
        
        {/* Header Block */}
        <div 
          className="text-center md:text-left" 
          id="specs-intro-header"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wider font-sans" 
            id="specs-main-headline"
          >
            PERFORMANCE SPECIFICATIONS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm text-neutral-400 font-light mt-2 max-w-lg leading-relaxed font-secondary" 
            id="specs-sub-description"
          >
            A masterclass in automotive lightweighting and track-optimized telemetry. Click on any metrics below to review deep mechanical analytics.
          </motion.p>
        </div>

        {/* 2x2 / 1x4 CSS Specs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 my-6 sm:my-8 md:my-10" 
          id="specs-matrix-grid"
        >
          {specsData.map((spec, idx) => (
            <motion.div 
              variants={cardVariants}
              key={idx}
              onClick={() => setActiveSpecIndex(idx)}
              className="group relative border border-white/10 bg-neutral-950/40 backdrop-blur-md p-4 sm:p-6 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] md:min-h-[200px] cursor-pointer transition-all duration-300 hover:border-[#9A8051]/60 hover:bg-neutral-950/70"
              id={`spec-card-${idx}`}
            >
              {/* Dynamic decorative hover glowing indicators */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#9A8051] group-hover:w-16 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#9A8051] group-hover:h-12 transition-all duration-300" />

              {/* Icon & Metadata Top section */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#9A8051] bg-[#9A8051]/5 p-2 rounded-none border border-[#9A8051]/10 group-hover:border-[#9A8051]/40 transition-colors">
                  {spec.icon}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 font-bold group-hover:text-white/40 transition-colors">
                  [ 0{idx + 1} // SYS ]
                </span>
              </div>

              {/* Large Metric & Text Section */}
              <div className="mt-auto">
                {/* Metric value rendered in the secondary (Montserrat) font for data-dashboard aesthetic */}
                <span className="block text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white group-hover:text-[#9A8051] transition-colors font-secondary" id={`val-${idx}`}>
                  {spec.metric}
                </span>
                <span className="block text-[8px] md:text-[9px] font-mono tracking-widest text-[#9A8051] uppercase mt-2">
                  {spec.title}
                </span>
                <span className="block text-[9px] md:text-[10px] font-medium text-neutral-400 tracking-wider uppercase mt-0.5 font-secondary">
                  {spec.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section containing elegant button */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-white/5 pt-6 sm:pt-8 pb-8 sm:pb-12 lg:pb-0" 
          id="specs-footer-trigger"
        >
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
              ESTIMATED AVAILABILITY // LIMIT 363 UNITS
            </span>
            <p className="text-xs text-white/95 font-medium mt-0.5 font-secondary leading-relaxed">
              Individual commissions open for global priority reservations.
            </p>
          </div>

          <button
            onClick={() => setShowCommissionModal(true)}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white font-medium text-xs md:text-sm uppercase tracking-[0.25em] relative overflow-hidden group transition-colors duration-500 hover:text-black cursor-pointer font-sans"
            id="reserve-commission-button"
          >
            {/* Slide-over background color effect */}
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
            
            <span className="flex items-center justify-center gap-3">
              RESERVE COMMISSION
              <ChevronRight className="w-4 h-4 text-[#9A8051] group-hover:text-black" />
            </span>
          </button>
        </div>

      </div>

      {/* SPEC ANALYTICS DETAIL MODAL */}
      {activeSpecIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveSpecIndex(null)}
          id="spec-analytics-modal"
        >
          <div 
            className="w-full max-w-xl border border-[#9A8051]/20 bg-neutral-950 p-4 sm:p-6 md:p-8 relative max-h-[85vh] sm:max-h-[90vh] overflow-y-auto mx-3 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSpecIndex(null)}
              className="absolute top-4 right-4 p-2 border border-neutral-800 text-white hover:border-[#9A8051]/40 transition-colors cursor-pointer"
              id="close-spec-modal-button"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-6">
              <span className="p-3 bg-[#9A8051]/5 text-[#9A8051] border border-[#9A8051]/20">
                {specsData[activeSpecIndex].icon}
              </span>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#9A8051] uppercase block">
                  SYSTEM SUBSECTION 0{activeSpecIndex + 1}
                </span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-white font-sans">
                  {specsData[activeSpecIndex].title}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase">Target Output Met:</span>
                <span className="text-2xl sm:text-4xl font-extrabold text-[#9A8051] font-secondary">
                  {specsData[activeSpecIndex].metric}
                </span>
              </div>

              <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed font-secondary">
                {specsData[activeSpecIndex].description}
              </p>

              {/* Bulleted Highlights */}
              <div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-3">
                  Telemetry / Engineering Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specsData[activeSpecIndex].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2.5 p-2.5 bg-neutral-900/60 border border-neutral-900 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#9A8051] shrink-0" />
                      <span className="text-neutral-300 font-light font-secondary truncate">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs">
              <span className="text-neutral-500 font-mono">STATUS: CONFIRMED ACCURATE</span>
              <button 
                onClick={() => setActiveSpecIndex(null)}
                className="px-6 py-2 bg-white text-black font-medium text-xs uppercase tracking-widest hover:bg-[#9A8051] transition-colors cursor-pointer font-sans"
              >
                Close Logs
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRIVATE COMMISSION CHECKOUT MODAL */}
      {showCommissionModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300"
          onClick={handleCloseCommissionModal}
          id="commission-overlay"
        >
          <div 
            className="w-full max-w-xl border border-white/10 bg-neutral-950 p-4 sm:p-6 md:p-8 pt-14 sm:pt-8 relative max-h-[85vh] sm:max-h-[90vh] overflow-y-auto mx-3 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
            id="commission-form-card"
          >
            <button
              onClick={handleCloseCommissionModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 border border-neutral-800 text-white hover:border-[#9A8051]/40 transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {!commissionSubmitted ? (
              <form onSubmit={handleCommissionSubmit} className="space-y-6">
                <div>
                   <div className="flex items-center mb-1">
                    <span className="text-[9px] font-mono tracking-widest text-[#9A8051] uppercase font-bold">
                      Bespoke Allocation Portal
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white font-sans">
                    VERGE CO-COMMISSION
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mt-2 font-secondary">
                    Enter your personal and credential data. A verified executive consultant from the concierge office will align via private secure transport channels within 3 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1.5 font-medium">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sterling H. Sterling"
                      className="w-full bg-white/5 border-none rounded-md p-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#9A8051]/30 font-secondary transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1.5 font-medium">
                        Secure Contact Email
                      </label>
                      <input
                        type="email"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="vip@executive.com"
                        className="w-full bg-white/5 border-none rounded-md p-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#9A8051]/30 font-secondary transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1.5 font-medium">
                        Private Telephone Line
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 (555) 363-2526"
                        className="w-full bg-white/5 border-none rounded-md p-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#9A8051]/30 font-secondary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1.5 font-medium">
                      Target Handover Location Center
                    </label>
                    <select
                      value={preferredCenter}
                      onChange={(e) => setPreferredCenter(e.target.value)}
                      className="w-full bg-white/5 border-none rounded-md p-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#9A8051]/30 font-secondary transition-all cursor-pointer appearance-none"
                    >
                      <option value="Global Elite Vaults" className="bg-neutral-950 text-white">Global Elite Vaults // California</option>
                      <option value="Advanced Racetrack Sanctuary" className="bg-neutral-950 text-white">Advanced Racetrack Sanctuary // Monaco</option>
                      <option value="Central Operations Hangar" className="bg-neutral-950 text-white">Central Operations Hangar // Germany</option>
                    </select>
                  </div>
                </div>

                <div className="bg-neutral-900/50 p-4 border border-white/5 space-y-2 text-xs" id="disclaimer-info">
                  <span className="text-[#9A8051] font-secondary text-[9px] tracking-wide block uppercase font-bold">
                    [ IMPORTANT COMMISSION NOTES ]
                  </span>
                  <p className="text-neutral-400 font-light leading-relaxed font-secondary">
                    A minimum standard refundable retainer of $5,000 USD is necessary to hold priority placement slot once communication registers. Delivery date will be scheduled in Central HQ.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#9A8051] text-black font-medium text-xs uppercase tracking-[0.25em] transition-colors hover:bg-white cursor-pointer font-sans"
                  >
                    Submit Verifiable Commission Request
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-6" id="success-state">
                <div className="inline-flex p-4 bg-[#9A8051]/10 border border-[#9A8051]/20 rounded-none mb-4 text-[#9A8051]">
                  <UserCheck className="w-12 h-12" />
                </div>
                <div>
                   <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#9A8051] font-sans">
                    COMMISSION SLOT RECORDED
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 max-w-sm mx-auto leading-relaxed font-secondary font-medium">
                    Thank you, <span className="text-white font-bold">{fullName}</span>. Your slot reservation identifier code is <span className="text-amber-400 font-bold font-mono">#RES-363-{Math.floor(10000 + Math.random() * 90000)}</span>.
                  </p>
                  <p className="text-xs text-neutral-400 mt-3 max-w-sm mx-auto leading-relaxed font-secondary">
                    An executive consultation dossier has been compiled and forwarded to your secured address: <span className="text-white font-mono">{emailAddress}</span>.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-900">
                  <button
                    onClick={handleCloseCommissionModal}
                    className="w-full py-3 bg-white text-black font-medium text-xs uppercase tracking-widest hover:bg-[#9A8051] transition-colors cursor-pointer font-sans"
                  >
                    Return to Showcase
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
