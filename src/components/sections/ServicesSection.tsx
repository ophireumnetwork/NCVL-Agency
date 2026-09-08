import React, { useState } from 'react';
import { 
  Shield, 
  Car, 
  UserCheck, 
  Flame, 
  Key, 
  Eye, 
  Building, 
  Search, 
  AlertOctagon, 
  CheckCircle,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { SECURITY_SERVICES_LIST } from '../../data/companyData';
import { SecurityService } from '../../types';

interface ServicesSectionProps {
  openProposal: () => void;
  openAssessment: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  openProposal,
  openAssessment,
}) => {
  const [selectedService, setSelectedService] = useState<SecurityService>(SECURITY_SERVICES_LIST[0]);

  const iconMap: Record<string, any> = {
    Shield,
    Car,
    UserCheck,
    Flame,
    Key,
    Eye,
  };

  const allSpecializedServices = [
    { title: 'Uniformed Sentry Guards', icon: Shield, tag: 'Standard Deployment' },
    { title: '24/7 Motorized Patrol', icon: Car, tag: 'Roving Fleet' },
    { title: 'VIP Close Protection Escorts', icon: UserCheck, tag: 'Executive' },
    { title: 'Emergency Response Team (ERT)', icon: Flame, tag: 'Tactical Intervention' },
    { title: 'Access Control & Gatehouse', icon: Key, tag: 'Perimeter Sentinel' },
    { title: 'CCTV Command Operations', icon: Eye, tag: 'Surveillance' },
    { title: 'Corporate Loss Prevention', icon: AlertOctagon, tag: 'Anti-Pilferage' },
    { title: 'Lawful Investigation & Background', icon: Search, tag: 'Special Intelligence' },
  ];

  return (
    <section id="services" className="py-24 bg-[#080808] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Shield className="w-3.5 h-3.5" />
            <span>CERTIFIED DEFENSIVE &amp; SURVEILLANCE SOLUTIONS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            COMPREHENSIVE SECURITY SERVICES
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Delivering professionalized security officers, active motorized patrols, 
            and technical deterrents strictly regulated under PNP-SOSIA and PADPAO guidelines.
          </p>
        </div>

        {/* PRIMARY SERVICE TILES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_SERVICES_LIST.map((svc) => {
            const Icon = iconMap[svc.iconName] || Shield;
            const isSelected = selectedService.id === svc.id;

            return (
              <div
                key={svc.id}
                onClick={() => setSelectedService(svc)}
                className={`p-6 rounded-sm border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-[#0a0a0a] border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.15)]'
                    : 'bg-[#050505] border-white/5 hover:border-zinc-700 hover:bg-[#0a0a0a]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center border ${
                      isSelected 
                        ? 'bg-amber-500 text-black border-amber-500' 
                        : 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[9px] font-tech font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-sm border border-amber-500/30 uppercase tracking-widest">
                        SELECTED
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white">
                    {svc.title}
                  </h3>

                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  {/* FEATURE BULLETS */}
                  <div className="pt-3 border-t border-white/5 space-y-1.5">
                    {(svc.features || []).slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start text-xs text-zinc-300 font-light">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs">
                  <span className="text-amber-500 font-tech font-bold uppercase tracking-wider text-[11px] flex items-center">
                    <span>Inspect Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* SELECTED SERVICE SPOTLIGHT DETAILS PANEL */}
        {selectedService && (
          <div className="p-8 sm:p-10 rounded-sm bg-[#0a0a0a] border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.06)] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
              <div>
                <div className="text-[9px] font-tech uppercase tracking-[0.3em] text-amber-500 font-bold">
                  TACTICAL DEPLOYMENT BLUEPRINT
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openProposal}
                  className="bg-white hover:bg-amber-500 text-black px-6 py-3 font-black uppercase text-xs tracking-widest transition-all rounded-sm cursor-pointer shadow-md"
                >
                  Request Tender Proposal
                </button>
                <button
                  onClick={openAssessment}
                  className="border border-zinc-700 hover:border-amber-500 text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-zinc-900 transition-all rounded-sm cursor-pointer"
                >
                  Assess Deployment Need
                </button>
              </div>
            </div>

            <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-4xl">
              {selectedService.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-500">
                  Standard Operational Capabilities:
                </h4>
                <div className="space-y-2">
                  {(selectedService.features || []).map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-zinc-300 font-light">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-amber-500">
                  Suitable Facility Deployments:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(selectedService.suitableFor || selectedService.capabilities || []).map((env, idx) => (
                    <div key={idx} className="p-3 bg-[#050505] rounded-sm border border-white/5 font-tech text-zinc-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                      <span>{env}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
