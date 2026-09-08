import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Building, 
  Activity, 
  Factory, 
  ShoppingBag, 
  HardHat, 
  Coins, 
  Briefcase, 
  Calendar, 
  UserCheck, 
  Gamepad2,
  ChevronRight,
  Shield,
  ArrowRight
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenAssessment: () => void;
  onOpenProposal: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenAssessment,
  onOpenProposal,
}) => {
  const industries = [
    {
      id: 'gaming',
      title: 'Gaming & Casino Venues',
      icon: Gamepad2,
      challenges: 'High cash flow velocity, large crowd density, and potential fraudulent gaming or physical altercations.',
      solution: 'Discreet uniformed and plainclothes security, armed vault escorts, metal detector walkthrough screening, and coordination with gaming regulators (PAGCOR).',
      evidence: 'Protected over 30+ Bingo Plus and E-Games gaming floors nationwide.'
    },
    {
      id: 'corporate',
      title: 'Corporate Offices & BPOs',
      icon: Building2,
      challenges: 'Visitor flow authentication, confidential asset protection, and executive floor access control.',
      solution: 'Front-desk concierge guards in sharp Barong Tagalog or corporate uniforms, automated badge scanning, and after-hours roving audits.',
      evidence: 'Proven at Sante Barley Ortigas HQ and commercial office complexes.'
    },
    {
      id: 'residential',
      title: 'Residential Subdivisions & HOAs',
      icon: Home,
      challenges: 'Unchecked visitor entry, vehicle speeding, package theft, and night perimeter trespassing.',
      solution: '24/7 gatehouse sentinels with barrier controls, vehicle decal checking, visitor logging, and motorized night rovers.',
      evidence: 'Trusted by Parkwood Village, Greensborough, Xevera, and Terraverde Residences.'
    },
    {
      id: 'condos',
      title: 'Condominium High-Rises',
      icon: Building,
      challenges: 'Elevator access management, short-term rental verification, parking garage security, and fire evacuation readiness.',
      solution: 'Lobby concierge presence, CCTV monitor sentries, parking level foot patrols, and ERT certified first-responders.',
      evidence: 'Deployed at Acasys Prime Residences, Monte Royale, and urban enclaves.'
    },
    {
      id: 'industrial',
      title: 'Industrial Facilities & Logistics Hubs',
      icon: Factory,
      challenges: 'Cargo seal tampering, internal pilferage, unauthorized truck dispatch, and raw metal theft.',
      solution: 'Weighbridge gate verification, under-vehicle mirror checks, metal detector wands at staff exits, and perimeter infrared tripwires.',
      evidence: 'Serving Do-All Metal Corp, Sante Barley Mega Warehouse, and Chemacor.'
    },
    {
      id: 'retail',
      title: 'Shopping Centers & Malls',
      icon: ShoppingBag,
      challenges: 'Shoplifting, customer lost-child emergencies, entrance weapon detection, and parking lot safety.',
      solution: 'High-visibility deterrence guards at portals, walk-through arches, and mobile crowd management.',
      evidence: 'Deployed at major shopping centers and commercial arcades.'
    },
    {
      id: 'construction',
      title: 'Construction Sites & Heavy Machinery',
      icon: HardHat,
      challenges: 'Nighttime cable/rebar pilferage, equipment vandalism, contractor time-in validation, and hazard safety compliance.',
      solution: 'Perimeter sentry towers, equipment log manifests, unannounced night inspection visits, and spot metal scans.',
      evidence: 'Secured critical property developments and contractor compounds across Luzon.'
    },
    {
      id: 'hospitality',
      title: 'Hotels & Resort Enclaves',
      icon: Briefcase,
      challenges: 'Guest privacy, luggage screening without hospitality friction, late-night noise control, and parking security.',
      solution: 'Customer-service trained hospitality guards combining courteous diplomacy with vigilant situational awareness.',
      evidence: 'Client portfolio includes Hotel Sogo nationwide and Eurotel Boracay / Manila.'
    },
    {
      id: 'healthcare',
      title: 'Hospitals & Medical Centers',
      icon: Activity,
      challenges: 'Emotional dispute de-escalation, ER entrance crowd control, pharmaceutical asset protection, and ambulance bay clearance.',
      solution: 'Diplomatic de-escalation specialists, triage ingress security, and 24/7 emergency dispatch response.',
      evidence: 'Trained in healthcare facility protocols and public empathy.'
    },
    {
      id: 'financial',
      title: 'Financial Assets & Cash Transit',
      icon: Coins,
      challenges: 'Armed robbery risk during cash replenishment, teller desk vulnerability, and parking stakeouts.',
      solution: 'Licensed armed security guards with certified defensive firearms training and armored transport logistics.',
      evidence: 'Deployed for financial asset holding centers and cash exchange kiosks.'
    },
    {
      id: 'events',
      title: 'Special Events & Banquets',
      icon: Calendar,
      challenges: 'Overcapacity, queue management, VIP arrival corridors, and emergency evacuation management.',
      solution: 'Pre-event threat vulnerability assessment, designated security perimeters, ticket verification, and crowd control ropes.',
      evidence: 'Handled sports figures, charity banquets, and gaming tournaments.'
    },
    {
      id: 'vip',
      title: 'VIP & Executive Protection',
      icon: UserCheck,
      challenges: 'Targeted harassment, route ambushes, stalking, and public appearance security.',
      solution: 'Dedicated close protection officers (CSMS certified), convoy escort vehicles, and advance route scouting.',
      evidence: 'Providing executive escort details across Metro Manila and Luzon.'
    }
  ];

  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section id="industries" className="py-24 bg-[#080808] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Building className="w-3.5 h-3.5" />
            <span>TAILORED PROTOCOLS FOR DIVERSE THREAT SURFACES</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            INDUSTRIES WE PROTECT
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Every facility demands a specific security doctrine. Select your operational sector to inspect 
            how NCVL structures personnel, access controls, and emergency protocols.
          </p>
        </div>

        {/* 12 INDUSTRY SELECTOR TILES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = activeIndustry.id === ind.id;

            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind)}
                className={`p-4 rounded-sm border transition-all text-left flex flex-col justify-between space-y-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0a0a0a] border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.15)] text-white'
                    : 'bg-[#050505] border-white/5 text-zinc-400 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-amber-500' : 'text-zinc-500'}`} />
                <span className="font-heading font-bold text-xs leading-snug line-clamp-2">
                  {ind.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* SELECTED SECTOR SPOTLIGHT BOX */}
        {activeIndustry && (
          <div className="p-8 sm:p-10 rounded-sm bg-[#0a0a0a] border border-white/10 hover:border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.05)] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <activeIndustry.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[9px] font-tech uppercase tracking-[0.25em] text-amber-500 font-bold block">
                    SECTOR DEFENSE DOCTRINE
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {activeIndustry.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onOpenProposal}
                  className="bg-white hover:bg-amber-500 text-black px-6 py-3 font-black uppercase text-xs tracking-widest transition-all rounded-sm cursor-pointer shadow-md"
                >
                  Tender Proposal
                </button>
                <button
                  onClick={onOpenAssessment}
                  className="border border-zinc-700 hover:border-amber-500 text-white px-6 py-3 font-black uppercase text-xs tracking-widest hover:bg-zinc-900 transition-all rounded-sm cursor-pointer"
                >
                  Vulnerability Audit
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-sm bg-[#050505] border border-white/5 space-y-2">
                <span className="text-[10px] font-tech text-rose-400 font-bold uppercase tracking-wider block">
                  Identified Threat Surface:
                </span>
                <p className="text-zinc-300 font-light leading-relaxed">
                  {activeIndustry.challenges}
                </p>
              </div>

              <div className="p-5 rounded-sm bg-[#050505] border border-white/5 space-y-2">
                <span className="text-[10px] font-tech text-amber-500 font-bold uppercase tracking-wider block">
                  NCVL Protective Solution:
                </span>
                <p className="text-zinc-300 font-light leading-relaxed">
                  {activeIndustry.solution}
                </p>
              </div>

              <div className="p-5 rounded-sm bg-[#050505] border border-white/5 space-y-2">
                <span className="text-[10px] font-tech text-emerald-400 font-bold uppercase tracking-wider block">
                  Verified Deployment Evidence:
                </span>
                <p className="text-zinc-300 font-light leading-relaxed">
                  {activeIndustry.evidence}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
