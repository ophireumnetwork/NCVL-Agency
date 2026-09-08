import React from 'react';
import { 
  Shield, 
  FileText, 
  ArrowRight, 
  Radio, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  PhoneCall,
  ShoppingBag,
  Activity,
  Compass
} from 'lucide-react';
import { COMPANY_PROFILE } from '../../data/companyData';
import { AGENCY_ASSETS } from '../../data/assets';

interface HeroSectionProps {
  openAssessment: () => void;
  openProposal: () => void;
  onNavigateStore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  openAssessment,
  openProposal,
  onNavigateStore,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] bg-[#050505] text-white flex flex-col justify-between border-b border-white/5 overflow-hidden">
      
      {/* BACKGROUND SUBTLE RADIAL DOT MATRIX */}
      <div className="absolute inset-0 bg-grid-dots opacity-15 pointer-events-none" />

      {/* AMBER AMBIENT GLOW */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      {/* MAIN CONTENT SPLIT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* LEFT COLUMN: HERO HEADLINE & CALL TO ACTION */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.4em] font-tech">
                PNP-SOSIA LICENSED AGENCY • PSA-WGS-M00542-2024
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl xl:text-[80px] font-black leading-[0.9] tracking-tighter uppercase italic font-heading">
              Legendary<br />
              <span className="text-white">Protection.</span>
            </h1>
          </div>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed font-light">
            The ultimate deterrent in modern physical and infrastructure security. 
            Military-drilled uniformed sentries, 24/7 roving patrol cruisers, and aerospace-grade surveillance hardware engineered for vigilance.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={openProposal}
              className="bg-white text-black px-9 py-4 font-black uppercase text-xs tracking-widest hover:bg-amber-500 transition-colors shadow-lg cursor-pointer rounded-sm flex items-center"
            >
              Deploy Now &rarr;
            </button>
            <button
              onClick={openAssessment}
              className="border border-zinc-700 px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-zinc-900 transition-colors text-white cursor-pointer rounded-sm flex items-center"
            >
              System Specs
            </button>
            <button
              onClick={onNavigateStore}
              className="px-6 py-4 text-amber-500 hover:text-amber-400 font-tech font-bold uppercase tracking-widest text-xs flex items-center transition-colors cursor-pointer"
            >
              The Vault (Store) &rarr;
            </button>
          </div>

          {/* TELEMETRY MICRO-TAGS */}
          <div className="flex flex-wrap gap-3 pt-4 text-xs font-tech text-zinc-400 border-t border-white/5">
            <div className="flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-500" />
              <span>Full Client Loss Indemnity</span>
            </div>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center space-x-1.5">
              <Radio className="w-3.5 h-3.5 text-amber-500" />
              <span>140+ Encrypted Radios</span>
            </div>
            <span className="text-zinc-700">•</span>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Zero Labor Liabilities</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ELEGANT DARK TELEMETRY SENSOR CORE */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          <div className="w-full max-w-sm bg-[#0a0a0a] border border-zinc-800 rounded-sm shadow-[0_0_100px_rgba(245,158,11,0.08)] flex flex-col p-6 relative z-10 space-y-6">
            
            {/* HARDWARE / CORE DISPLAY BOX */}
            <div className="h-64 bg-[#050505] rounded-sm flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group">
              <img
                src={AGENCY_ASSETS.cctvCamera}
                alt="Apex Sentinel Core"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              
              {/* RADAR TARGETING RETICLE OVERLAY */}
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 rounded-full border border-amber-500/40 flex items-center justify-center relative">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-amber-500" />
                </div>
              </div>

              <div className="absolute bottom-3 left-4 text-left">
                <div className="text-[9px] text-amber-500 uppercase font-bold tracking-[0.25em] font-tech">
                  Apex Sentinel X-1
                </div>
                <div className="text-base font-bold tracking-tight uppercase italic text-white font-heading">
                  AI Surveillance Core
                </div>
              </div>
            </div>

            {/* TELEMETRY GAUGES */}
            <div className="space-y-4 font-tech">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  <span>Command Dispatch Signal</span>
                  <span className="text-amber-500">99.8% STABLE</span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full w-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[94%] shadow-[0_0_10px_#f59e0b]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 p-3 rounded-sm border border-white/5">
                  <div className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Perimeter</div>
                  <div className="text-sm font-bold text-white tracking-wide">ACTIVE 24/7</div>
                </div>
                <div className="bg-white/5 p-3 rounded-sm border border-white/5">
                  <div className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Patrol Radius</div>
                  <div className="text-sm font-bold text-white tracking-wide">PROVINCE-WIDE</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1 text-zinc-400">
                <span className="text-[10px] uppercase text-zinc-500">Authorized Agency Post</span>
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">SOSIA VERIFIED</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 4-COLUMN FOOTER METRIC STRIP (DIRECTLY FROM THE ELEGANT DARK SPEC) */}
      <div className="w-full border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#080808] font-tech">
        
        <div className="border-b sm:border-b-0 sm:border-r border-white/5 flex flex-col justify-center px-8 py-5">
          <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Asset Class</span>
          <span className="text-white text-sm font-bold uppercase tracking-wider">Armed Sentry &amp; Biometric</span>
        </div>

        <div className="border-b sm:border-b-0 lg:border-r border-white/5 flex flex-col justify-center px-8 py-5">
          <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Dispatch Uptime</span>
          <span className="text-white text-sm font-bold uppercase tracking-wider">99.999% Secured 24/7</span>
        </div>

        <div className="border-b sm:border-b-0 sm:border-r border-white/5 flex flex-col justify-center px-8 py-5">
          <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Support Tier</span>
          <span className="text-amber-500 text-sm font-bold uppercase tracking-wider underline underline-offset-4">Emergency Tactical</span>
        </div>

        <div className="flex items-center justify-between px-8 py-5">
          <div className="flex flex-col">
            <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Headquarters</span>
            <span className="text-white text-sm font-bold uppercase tracking-wider">Mabalacat, Pampanga</span>
          </div>
          <button 
            onClick={openAssessment}
            className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors cursor-pointer"
          >
            <span className="text-xs">&rarr;</span>
          </button>
        </div>

      </div>

    </section>
  );
};
