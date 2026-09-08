import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Building,
  Radio
} from 'lucide-react';
import { COMPANY_PROFILE, OFFICE_LOCATIONS } from '../../data/companyData';

interface ContactSectionProps {
  onOpenProposal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenProposal }) => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Uniformed Sentry Guard Services',
    guardsCount: '2 - 5 Guards',
    facilityType: 'Commercial / Corporate Building',
    message: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Uniformed Sentry Guard Services',
        guardsCount: '2 - 5 Guards',
        facilityType: 'Commercial / Corporate Building',
        message: '',
        consent: true,
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Phone className="w-3.5 h-3.5" />
            <span>DIRECT EXECUTIVE &amp; DISPATCH CHANNELS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            CONTACT NCVL SECURITY AGENCY
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Ready to secure your premises or schedule a site inspection? 
            Contact our Operations command desk for immediate contract rates and security consultations.
          </p>
        </div>

        {/* 2-COLUMN SPLIT: DIRECT CONTACT DETAILS + INQUIRY FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CONTACT DETAILS & PHONE DIRECTORY (LEFT) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* PRIMARY HOTLINE CARD */}
            <div className="p-8 rounded-sm bg-[#0a0a0a] border border-white/5 space-y-5">
              <h3 className="font-heading font-bold text-lg text-white flex items-center">
                <Radio className="w-4 h-4 text-amber-500 mr-2.5" />
                24/7 Command &amp; Operations Hotlines
              </h3>

              <div className="space-y-4 text-xs font-tech">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                    Pampanga Head Office Landline:
                  </span>
                  <a
                    href="tel:0459341494"
                    className="text-lg font-bold text-amber-500 hover:underline"
                  >
                    (045) 9341-494
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                    Mobile Direct Operations Lines:
                  </span>
                  <div className="space-y-1.5 mt-1 text-zinc-200">
                    <div>
                      <a href="tel:09293733561" className="hover:text-amber-400 font-bold">
                        0929-373-3561
                      </a>
                      <span className="text-zinc-500 text-[10px] ml-2">(Smart / Dispatch)</span>
                    </div>
                    <div>
                      <a href="tel:09178826442" className="hover:text-amber-400 font-bold">
                        0917-882-6442
                      </a>
                      <span className="text-zinc-500 text-[10px] ml-2">(Globe / Executive)</span>
                    </div>
                    <div>
                      <a href="tel:09399182390" className="hover:text-amber-400 font-bold">
                        0939-918-2390
                      </a>
                      <span className="text-zinc-500 text-[10px] ml-2">(Viber / WhatsApp)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                    Corporate Email Addresses:
                  </span>
                  <div className="space-y-1 mt-1 text-zinc-300">
                    <div>
                      <a href="mailto:operations.ncvlsa@gmail.com" className="hover:text-amber-400">
                        operations.ncvlsa@gmail.com
                      </a>
                    </div>
                    <div>
                      <a href="mailto:mendozanhick@gmail.com" className="hover:text-amber-400">
                        mendozanhick@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HEADQUARTERS MAP SUMMARY CARD */}
            <div className="p-8 rounded-sm bg-[#0a0a0a] border border-white/5 space-y-3 text-xs">
              <h4 className="font-heading font-bold text-sm text-white flex items-center">
                <MapPin className="w-4 h-4 text-amber-500 mr-2" />
                Physical Headquarters Address
              </h4>
              <p className="text-zinc-400 font-light leading-relaxed">
                Block 8 Lot 3 Marivic Street, Barangay Tabun, Xevera Subdivision, Mabalacat City, Pampanga
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-zinc-500 font-tech text-[10px]">
                <span>Coordinates: 15.2215° N, 120.5746° E</span>
                <span className="text-amber-500">PROVINCE OF PAMPANGA</span>
              </div>
            </div>

          </div>

          {/* INQUIRY & SITE INSPECTION FORM (RIGHT) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#0a0a0a] border border-white/5 space-y-6">
              
              <div className="border-b border-white/5 pb-4">
                <span className="text-[9px] font-tech uppercase tracking-[0.25em] text-amber-500 font-bold block">
                  SECURITY INQUIRY OR TENDER REQUEST
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mt-1">
                  Schedule a Site Assessment
                </h3>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1.5 uppercase font-tech text-[10px]">
                        Authorized Representative Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Director Carlos Santos"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1.5 uppercase font-tech text-[10px]">
                        Establishment / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Industrial Logistics Inc."
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1.5 uppercase font-tech text-[10px]">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@company.com.ph"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1.5 uppercase font-tech text-[10px]">
                        Direct Contact Telephone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0917-XXX-XXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1.5 uppercase font-tech text-[10px]">
                        Primary Protective Need
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      >
                        <option>Uniformed Sentry Guard Services</option>
                        <option>24/7 Mobile Patrol &amp; Dispatch</option>
                        <option>Executive VIP Close Protection Escort</option>
                        <option>CCTV Command &amp; Surveillance Hardware</option>
                        <option>Perimeter Assessment &amp; Security Audit</option>
                        <option>Event Crowd Control &amp; Temporary Post</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-400 font-medium mb-1.5 uppercase font-tech text-[10px]">
                        Estimated Guard Complement
                      </label>
                      <select
                        value={form.guardsCount}
                        onChange={(e) => setForm({ ...form, guardsCount: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      >
                        <option>1 - 2 Guards (Small Post)</option>
                        <option>2 - 5 Guards (Standard Facility)</option>
                        <option>6 - 15 Guards (Subdivision / Complex)</option>
                        <option>16 - 30+ Guards (Large Mall / Plant)</option>
                        <option>Unsure (Needs Assessment Audit)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-medium mb-1.5 uppercase font-tech text-[10px]">
                      Specific Site Concerns or Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your property location, operating hours, perimeter risks, or current security provider issues..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-white hover:bg-amber-500 text-black font-black uppercase tracking-widest rounded-sm text-xs transition-all shadow-xl flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Transmit Security Proposal Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">
                    Transmission Acknowledged!
                  </h4>
                  <p className="text-zinc-400 text-xs font-light max-w-sm mx-auto">
                    Your request has been routed to our Operations Command desk in Mabalacat City. 
                    An Operations Inspector will contact you within 24 hours with custom rate sheets.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
