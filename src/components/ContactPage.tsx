import React, { useState } from "react";
import { Mail, ShieldCheck, MailCheck, Send, Clock, MapPin, Phone, ArrowLeft, Users, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Full_Name: "",
    Email: "",
    Subject: "Premium Platform Bespoke Interest",
    Message: ""
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.Full_Name || !formData.Email || !formData.Message) {
      alert("Please complete the required formulation parameters.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const dataToSend = new FormData(e.currentTarget);
      dataToSend.append("access_key", "35a685e8-efcc-49fe-951f-130ea0a4da86");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Generate a unique cryptographic-style ticket ID
        const randomID = `PRV-M-${Math.floor(100000 + Math.random() * 900000)}`;
        setTicketId(randomID);
        setIsSubmitSuccessful(true);
      } else {
        setSubmitError(data.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      setSubmitError("A connection error occurred. Please verify your secure link and retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      Full_Name: "",
      Email: "",
      Subject: "Premium Platform Bespoke Interest",
      Message: ""
    });
    setIsSubmitSuccessful(false);
    setSubmitError(null);
  };

  return (
    <div 
      className="min-h-screen w-full bg-black text-white flex flex-col justify-between items-center px-4 sm:px-6 py-8 sm:py-12 md:py-16 select-none relative overflow-y-auto"
      id="contact-page-container"
    >
      {/* Decorative luxury gradient background glow */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full bg-[#4f5e55]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] rounded-full bg-[#9A8051]/3 blur-[140px] pointer-events-none" />

      {/* Floating Header Back Navigation button */}
      <div className="w-full max-w-5xl mx-auto z-10 self-start mb-8 md:mb-10">
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 hover:text-[#9A8051] transition-colors cursor-pointer bg-neutral-950/40 border border-neutral-900 px-4 py-2.5 rounded-none"
          id="back-home-button"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>RETURN TO SHOWCASE</span>
        </button>
      </div>

      {/* Main Core Flexbox Layout Wrapper */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center my-auto z-20" id="contact-main-grid">
        
        {/* Left Column (lg:col-span-5) - Elegant text and location meta information */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left" id="contact-info-block">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 mb-2" id="contact-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9A8051]" />
            <span className="text-[9px] font-mono tracking-[0.25em] text-white/70 uppercase">
              SECURE VIP INTAKE
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3 sm:mb-4 leading-none font-sans" id="contact-headline">
            Connect with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#9A8051]">M-Specialist Team.</span>
          </h1>

          <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed font-secondary max-w-md mx-auto lg:mx-0" id="contact-desc">
            Direct secure channels to our Special Operations Team. Register your performance blueprint, arrange remote delivery retention, or connect with certified factory engineers.
          </p>

          {/* Quick Contact Specs */}
          <div className="pt-6 border-t border-neutral-950 space-y-4 max-w-sm mx-auto lg:mx-0 text-left" id="contact-meta-specs">
            <div className="flex items-center gap-3.5 text-xs font-secondary">
              <div className="p-3 bg-[#4f5e55]/10 border border-[#9A8051]/20 text-[#9A8051]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[8px] font-bold">REPLY CHANNELS TIME</span>
                <span className="text-white font-medium">Within 3 Hours // 24/7 Operations</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-xs font-secondary">
              <div className="p-3 bg-[#4f5e55]/10 border border-[#9A8051]/20 text-[#9A8051]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[8px] font-bold">FACTORY HQ</span>
                <span className="text-white font-medium">Central Platform HQ, Innovation District</span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-xs font-secondary">
              <div className="p-3 bg-[#4f5e55]/10 border border-[#9A8051]/20 text-[#9A8051]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[8px] font-bold">ELITE SECURE TELEPHONE LINE</span>
                <span className="text-white font-medium">+49 (89) 382-0 // Secure Transit Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (lg:col-span-7) - Integrated contact form form or submission certificate */}
        <div className="lg:col-span-7" id="contact-form-wrapper">
          <div className="bg-neutral-950/80 border border-[#9A8051]/30 p-4 sm:p-6 md:p-8 relative" id="contact-form-card">
            
            {/* Ambient visual indicator on top border */}
            <div className="absolute top-0 left-0 w-16 h-[3px] bg-[#9A8051]" />
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#9A8051]/10 pointer-events-none" />

            {!isSubmitSuccessful ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="vip-contact-form">
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white font-sans flex items-center gap-2">
                    VIP REGISTRATION PROFILE
                    <span className="text-[8px] text-[#9A8051] border border-[#9A8051]/30 px-1.5 py-0.5 tracking-wider font-mono bg-[#9A8051]/5">
                      SECURE PORTAL
                    </span>
                  </h3>
                  <p className="text-[10px] text-neutral-400 font-secondary mt-1">
                    Complete fields below. Fields with values will link directly to authorized factory databases.
                  </p>
                </div>

                {/* Name / Email Input Field Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-secondary tracking-widest text-[#9A8051] uppercase block mb-1.5 font-bold">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      name="Full_Name"
                      required
                      value={formData.Full_Name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-black border border-[#4f5e55]/50 focus:border-[#9A8051] text-xs text-white p-3.5 outline-none font-secondary rounded-none"
                    />
                  </div>

                  <div>
                    <label className="text-[9px] font-secondary tracking-widest text-[#9A8051] uppercase block mb-1.5 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      value={formData.Email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@vance-holdings.com"
                      className="w-full bg-black border border-[#4f5e55]/50 focus:border-[#9A8051] text-xs text-white p-3.5 outline-none font-secondary rounded-none"
                    />
                  </div>
                </div>

                {/* Subject Selection dropdown */}
                <div>
                  <label className="text-[9px] font-secondary tracking-widest text-[#9A8051] uppercase block mb-1.5 font-bold">
                    Subject Classification
                  </label>
                  <select
                    name="Subject"
                    value={formData.Subject}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-[#4f5e55]/50 focus:border-[#9A8051] text-xs text-white p-3.5 outline-none font-secondary rounded-none cursor-pointer"
                  >
                    <option value="Premium Platform Bespoke Interest">Bespoke Production Allocation Interest</option>
                    <option value="Elite Labs Storage Inquiry">Elite Labs Controlled Storage Retention</option>
                    <option value="Test Track Booking">Closed Track Consultation</option>
                    <option value="Technical Engineering Collaboration">Direct Engineering Assembly Inquiry</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="text-[9px] font-secondary tracking-widest text-[#9A8051] uppercase block mb-1.5 font-bold">
                    Classified Message Report Specifications
                  </label>
                  <textarea
                    name="Message"
                    required
                    rows={4}
                    value={formData.Message}
                    onChange={handleInputChange}
                    placeholder="Provide performance requirements, custom interior colors, and/or dealership location coordinates here..."
                    className="w-full bg-black border border-[#4f5e55]/50 focus:border-[#9A8051] text-xs text-white p-3.5 outline-none font-secondary rounded-none resize-none"
                  />
                </div>

                {submitError && (
                  <div className="flex items-center gap-2.5 p-3 bg-red-950/20 border border-red-500/20 text-xs text-red-400">
                    <ShieldAlert className="w-4.5 h-4.5 shrink-0 text-red-500" />
                    <span className="font-secondary">{submitError}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-[#9A8051] hover:bg-white text-black font-bold text-xs uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-none ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  id="submit-contact-button"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>{isSubmitting ? "TRANSMITTING ENCRYPTED DATA..." : "TRANSMIT SECURITY LOGS"}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-6" id="contact-success-screen">
                <div className="inline-flex p-4 bg-[#9A8051]/10 border border-[#9A8051]/30 text-[#9A8051] rounded-none">
                  <MailCheck className="w-12 h-12" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase text-[#9A8051] tracking-tight font-sans">
                    TRANSMISSION SUCCESSFUL
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-secondary max-w-md mx-auto">
                    An M-Specialist will contact you within the 3-hour operational window.
                  </p>
                </div>

                {/* Ticket and receipt */}
                <div className="max-w-md mx-auto p-4 bg-neutral-900 border border-neutral-800 text-left space-y-2.5 font-secondary text-xs rounded-none">
                  <span className="text-[9px] text-[#9A8051] block uppercase font-bold tracking-widest">[ TRANSACTION RECEIPT ]</span>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-500 uppercase text-[9px] font-bold">Security ID:</span>
                    <span className="text-white text-[10px] uppercase font-mono font-bold">{ticketId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-500 uppercase text-[9px] font-bold">Sender profile:</span>
                    <span className="text-white text-[10px] font-bold truncate max-w-[200px]">{formData.Full_Name} ({formData.Email})</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-500 uppercase text-[9px] font-bold">Classification:</span>
                    <span className="text-white text-[10px] uppercase font-bold text-right">{formData.Subject}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-500 uppercase text-[9px] font-bold">Status:</span>
                    <span className="text-[#9A8051] text-[9px] uppercase tracking-widest font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9A8051]" />
                      TRANSMITTED TO ELITE LABS
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-[#9A8051] transition-colors cursor-pointer rounded-none"
                  >
                    New Transmission
                  </button>
                  <button
                    onClick={() => navigate("/")}
                    className="px-6 py-2.5 bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 text-xs font-semibold uppercase tracking-widest cursor-pointer rounded-none"
                  >
                    Back to Showcase
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Decorative tiny copyright line */}
      <div className="w-full text-center text-[8px] text-neutral-600 font-mono uppercase tracking-[0.25em] z-10 pt-8" id="contact-footer">
        CLASSIFIED CONSOLE PORTAL // 2026 SPECIAL FORMS. RESERVED SYSTEM INTEL.
      </div>
    </div>
  );
}
