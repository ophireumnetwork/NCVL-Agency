import React from 'react';
import { 
  ShieldCheck, 
  FileSearch, 
  MapPin, 
  Users, 
  Camera, 
  FileText, 
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { ASSESSMENT_STEPS } from '../../data/companyData';

interface AssessmentProcessSectionProps {
  onOpenAssessment: () => void;
  onOpenProposal: () => void;
}

export const AssessmentProcessSection: React.FC<AssessmentProcessSectionProps> = ({
  onOpenAssessment,
  onOpenProposal,
}) => {
  return (
    <section id="assessment" className="py-24 bg-[#050505] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <FileSearch className="w-3.5 h-3.5" />
            <span>SYSTEMATIC METHODOLOGY BEFORE CONTRACT EXECUTION</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            SECURITY VULNERABILITY ASSESSMENT
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            We never deploy blind sentries into an unknown threat profile. 
            Every deployment begins with our structured 8-stage physical security audit.
          </p>
        </div>

        {/* 8-STAGE AUDIT TIMELINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ASSESSMENT_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 flex flex-col justify-between space-y-4 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(245,158,11,0.06)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-tech font-bold text-amber-500 text-xs">
                    0{stepItem.step}
                  </span>
                  <span className="text-[9px] font-tech text-zinc-500 uppercase tracking-widest">
                    STAGE {stepItem.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {stepItem.title}
                </h3>

                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center text-[10px] text-amber-500/80 font-tech">
                <CheckCircle className="w-3 h-3 mr-1.5 text-amber-500 flex-shrink-0" />
                <span>Audited by Certified CSP Officers</span>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE CALLOUT BANNER */}
        <div className="p-8 sm:p-10 rounded-sm bg-[#0a0a0a] border border-white/10 hover:border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.05)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[9px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500 block">
              IMMEDIATE DEFENSE READINESS AUDIT
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Launch Our Security Assessment Estimator
            </h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              Calculate your establishment's vulnerability score, perimeter risks, and recommended security guard count in less than 3 minutes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenAssessment}
              className="bg-white hover:bg-amber-500 text-black px-8 py-4 font-black uppercase text-xs tracking-widest transition-all cursor-pointer rounded-sm shadow-lg flex items-center"
            >
              <FileSearch className="w-3.5 h-3.5 mr-2" />
              Launch Assessment Tool
            </button>
            <button
              onClick={onOpenProposal}
              className="border border-zinc-700 hover:border-amber-500 text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-900 transition-all cursor-pointer rounded-sm flex items-center"
            >
              Request Tender &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
