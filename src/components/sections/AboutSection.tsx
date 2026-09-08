import React from 'react';
import { 
  Users, 
  ShieldAlert, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2, 
  Compass, 
  Award,
  ChevronRight,
  Shield
} from 'lucide-react';
import { CORE_VALUES, COMPANY_PROFILE } from '../../data/companyData';
import { AGENCY_ASSETS } from '../../data/assets';

interface AboutSectionProps {
  openProposal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ openProposal }) => {
  return (
    <section id="about" className="py-24 bg-[#080808] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Compass className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL HERITAGE &amp; VISION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            ABOUT NCVL SECURITY AGENCY
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Founded on the principle that vigilance matters, and driven by an unwavering 
            dedication to the highest standards in private security and infrastructure defense.
          </p>
        </div>

        {/* STORY & BEARING DOCTRINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-sm text-zinc-300 font-light leading-relaxed">
            <h3 className="font-heading font-bold text-2xl text-white tracking-tight">
              A Culture of Tactical Vigilance &amp; Executive Discipline
            </h3>
            
            <p>
              NCVL Security Agency was organized by certified security practitioners who managed safety 
              for multinational corporations, commercial centers, and high-security industrial plants. Founded with humble beginnings 
              under the guidance of seasoned security trainers and initially affiliated with Torch &amp; Shield 
              Security Agency on February 14, 2014, NCVL rigorously built its personnel roster, operational infrastructure, 
              and tactical capabilities until obtaining full autonomous licensing under the Philippine National Police 
              Supervisory Office for Security and Investigation Agencies (PNP-SOSIA).
            </p>

            <p>
              Today, under the leadership of Managing Director <strong>Mr. Nhick D. Mendoza, CSP, CSMS</strong>, 
              NCVL operates nationwide commands across Central Luzon, Metro Manila, Northern Luzon, 
              and Southern Luzon—protecting major commercial gaming centers, hospitality hotels, 
              sprawling residential subdivisions, high-tech warehouses, and industrial plants.
            </p>

            {/* BEARING DOCTRINE BOX */}
            <div className="p-6 rounded-sm bg-[#050505] border border-white/5 space-y-2">
              <div className="text-[10px] uppercase tracking-[0.2em] font-tech text-amber-500 font-bold">
                MILITARY BEARING DOCTRINE:
              </div>
              <div className="font-heading font-black text-xl text-white uppercase italic">
                &ldquo;DO GOOD, LOOK GOOD, AND FEEL GOOD&rdquo;
              </div>
              <p className="text-zinc-400 text-xs font-light">
                Living by this doctrine, every NCVL security guard is strictly required to present 
                pressed and immaculate uniforms, polished boots, clean-shaven military haircuts, and 
                unflinching discipline when representing our agency at client facilities.
              </p>
            </div>

            {/* SERVICE PHILOSOPHY BULLETS */}
            <div className="pt-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-amber-500 mb-3">
                Operational Tenets:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 font-tech">
                {[
                  'Give more than you promise',
                  'Go beyond satisfying the contract',
                  'Challenge the security status quo',
                  'Rigorous cadet psychological screening',
                  'Quick 24/7 supervisor response',
                  'Proactive contingency blueprints',
                  'Transparent wage and benefit remittances',
                  'Full client loss indemnity coverage'
                ].map((philo, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{philo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VISUAL VIP VEHICLE & CREDENTIALS CARD */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-sm overflow-hidden border border-white/5 shadow-2xl group">
              <img
                src={AGENCY_ASSETS.vipSuv}
                alt="NCVL Executive VIP Security Response"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[9px] uppercase tracking-widest font-tech bg-amber-500 text-black px-2.5 py-0.5 rounded-sm font-black">
                  VIP FAST-RESPONSE UNIT
                </span>
                <h4 className="font-heading font-bold text-lg text-white mt-1.5">
                  Armored Escorts &amp; Tactical Transport
                </h4>
                <p className="text-xs text-zinc-300 font-light mt-0.5">
                  Armed security escorts, encrypted Motorola comms, and certified trauma first responders.
                </p>
              </div>
            </div>

            {/* INDEMNITY BADGE */}
            <div className="p-6 bg-[#050505] border border-white/5 rounded-sm space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-200 font-semibold border-b border-white/5 pb-3">
                <span className="flex items-center text-amber-500 font-heading text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Management Loss Indemnity
                </span>
                <span className="text-[9px] font-tech text-emerald-400 font-bold">LEGALLY BOUND</span>
              </div>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                NCVL formally binds itself in our service contract to indemnify your corporation against 
                direct loss or damage caused by the willful negligence or misconduct of deployed guards.
              </p>
            </div>
          </div>
        </div>

        {/* 4 CORE VALUES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-[#050505] border border-white/5 hover:border-amber-500/50 space-y-3 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-tech font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                {val.name}
              </h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
