import React from 'react';
import { 
  Radio, 
  Activity, 
  Eye, 
  FileCheck, 
  AlertTriangle, 
  PhoneCall, 
  CheckCircle,
  Truck,
  Shield
} from 'lucide-react';
import { OPERATIONS_SUPERVISION } from '../../data/companyData';
import { AGENCY_ASSETS } from '../../data/assets';

export const OperationsCommandSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Radio className="w-3.5 h-3.5" />
            <span>24/7 TACTICAL DISPATCH &amp; CONTINUOUS OVERSIGHT</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            OPERATIONS COMMAND &amp; SUPERVISION
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Security failures occur when guards are left unsupervised. NCVL enforces round-the-clock 
            unannounced roving checks, centralized radio repeaters, and strict incident logging.
          </p>
        </div>

        {/* 6 OPERATIONS PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATIONS_SUPERVISION.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 group hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-tech font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center text-[10px] text-amber-500 font-tech">
                <CheckCircle className="w-3 h-3 mr-1.5 text-amber-500" />
                <span>ACTIVE OPERATIONAL PROTOCOL</span>
              </div>
            </div>
          ))}
        </div>

        {/* NIGHT PATROL & COMMUNICATIONS HIGHLIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-sm bg-[#0a0a0a] border border-white/5 p-8 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.04)]">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[9px] font-tech text-amber-500 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-sm border border-amber-500/20">
              <Activity className="w-3 h-3" />
              <span>THE 0100H - 0430H GRAVEYARD PROTOCOL</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white">
              Unannounced Night Roving Inspections
            </h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              Vigilance naturally wanes in the pre-dawn hours. NCVL's dedicated Field Officers and Area Inspectors 
              conduct surprise motorcycle and patrol cruiser inspections throughout the night. 
              Sentry alertness, blotter entries, logbook signatures, and equipment condition are audited live.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-[#050505] rounded-sm border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase font-tech">Response Time</div>
                <div className="text-base font-black text-amber-500">&lt; 15 Mins</div>
              </div>
              <div className="p-3 bg-[#050505] rounded-sm border border-white/5">
                <div className="text-[10px] text-zinc-500 uppercase font-tech">Radio Coverage</div>
                <div className="text-base font-black text-white">100% UHF Repeater</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative group overflow-hidden rounded-sm border border-white/5">
            <img
              src={AGENCY_ASSETS.nightCommand}
              alt="NCVL Mobile Command Center at night"
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[9px] font-tech uppercase text-amber-400 font-bold tracking-widest">
                  COMMAND VEHICLE UNIT 01
                </span>
                <p className="text-white text-xs font-medium">
                  Mobile tactical dispatch with high-power UHF repeater mast and aerial drone reconnaissance.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
