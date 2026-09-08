import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Target, 
  CheckCircle, 
  Building, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';
import { COMPANY_PROFILE, OPERATIONAL_PRINCIPLES } from '../../data/companyData';

interface TrustCapabilityBarProps {
  openAssessment: () => void;
}

export const TrustCapabilityBar: React.FC<TrustCapabilityBarProps> = ({ openAssessment }) => {
  return (
    <section className="bg-[#050505] border-b border-white/5 py-20 px-4 text-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* EDITORIAL COMPANY STATEMENT */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Award className="w-3.5 h-3.5" />
            <span>DISCIPLINED PROTECTION TENETS</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            YOUR TOTAL SECURITY AND SAFETY<br />
            <span className="text-amber-500">IS OUR SOLEMN DUTY.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            At NCVL Security Agency, we reject one-size-fits-all security templates. 
            We formulate comprehensive protective programs grounded in rigorous vulnerability assessment, 
            disciplined military-standard bearing, and continuous 24/7 supervision.
          </p>
        </div>

        {/* 5 OPERATIONAL PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {OPERATIONAL_PRINCIPLES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0a0a0a] border border-white/5 rounded-sm hover:border-amber-500/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(245,158,11,0.06)]"
            >
              <div className="w-8 h-8 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-tech font-bold text-xs mb-3 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.principle}
              </h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
