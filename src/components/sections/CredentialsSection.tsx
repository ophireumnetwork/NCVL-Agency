import React from 'react';
import { 
  FileCheck, 
  ShieldCheck, 
  Award, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  Lock
} from 'lucide-react';
import { OFFICIAL_LICENSES } from '../../data/companyData';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="compliance" className="py-24 bg-[#080808] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <FileCheck className="w-3.5 h-3.5" />
            <span>STATUTORY CLEARANCES &amp; GOVERNMENT LICENSES</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            LICENSING &amp; REGULATORY COMPLIANCE
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Operate with total peace of mind. NCVL is an autonomous, fully certified 
            private security agency with 100% good standing across all Philippine statutory authorities.
          </p>
        </div>

        {/* OFFICIAL LICENSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICIAL_LICENSES.map((lic, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-[#050505] border border-white/5 hover:border-amber-500/50 shadow-xl space-y-3.5 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-tech font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-sm border border-amber-500/20">
                  {lic.authority}
                </span>
                <span className="text-[10px] font-tech text-emerald-400 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  {lic.status}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                  {lic.title}
                </h3>
                <div className="font-tech text-xs text-amber-400 font-bold mt-1">
                  Ref: {lic.number}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center text-xs text-zinc-400">
                <Calendar className="w-3.5 h-3.5 mr-2 text-amber-500 flex-shrink-0" />
                <span className="font-light">Validity: <strong className="text-zinc-200 font-medium">{lic.validity}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* LABOR COMPLIANCE & CLIENT INDEMNITY SHIELD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-sm bg-[#050505] border border-white/5 space-y-3.5 text-xs">
            <h4 className="font-heading font-bold text-base text-white flex items-center">
              <ShieldCheck className="w-5 h-5 text-amber-500 mr-2.5" />
              Statutory Labor &amp; Wage Guarantee
            </h4>
            <p className="text-zinc-400 font-light leading-relaxed">
              NCVL Security Agency strictly abides by the Philippine Labor Code and Regional Tripartite 
              Wages and Productivity Board (RTWPB) Wage Orders. We provide regular monthly remittance 
              certifications for SSS, PhilHealth, Pag-IBIG, and state insurance.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-emerald-400 font-tech font-bold text-[10px] tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>DOLE-NCMB CERTIFIED: ZERO PENDING LABOR DISPUTES</span>
            </div>
          </div>

          <div className="p-8 rounded-sm bg-[#050505] border border-white/5 space-y-3.5 text-xs">
            <h4 className="font-heading font-bold text-base text-white flex items-center">
              <Lock className="w-5 h-5 text-amber-500 mr-2.5" />
              Client Liability &amp; Loss Indemnity Agreement
            </h4>
            <p className="text-zinc-400 font-light leading-relaxed">
              Under our standard contract terms, NCVL explicitly assumes accountability and binds 
              itself to indemnify the client against losses or direct physical property damage caused 
              by the willful negligence, theft, or misconduct of deployed guards.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-amber-400 font-tech font-bold text-[10px] tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>FULL SURETY &amp; COMPREHENSIVE GENERAL LIABILITY (CGL) BOUND</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
