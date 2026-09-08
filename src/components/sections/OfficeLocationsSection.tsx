import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Compass, 
  Building2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { OFFICE_LOCATIONS, COMPANY_PROFILE } from '../../data/companyData';
import { OfficeLocation } from '../../types';

export const OfficeLocationsSection: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-[#050505] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>NATIONWIDE COMMAND &amp; REGIONAL DISPATCH</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            HEADQUARTERS &amp; SATELLITE COMMAND POSTS
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Headquartered in Mabalacat City, Pampanga, with strategic regional dispatch stations 
            spread throughout Cavite, Ilocos Norte, Metro Manila, and Greater Central Luzon.
          </p>
        </div>

        {/* HEAD OFFICE SPOTLIGHT */}
        <div className="p-8 sm:p-10 rounded-sm bg-[#0a0a0a] border border-white/10 hover:border-amber-500/50 shadow-[0_0_50px_rgba(245,158,11,0.05)] space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-500 text-black flex items-center justify-center font-black text-xl rounded-sm shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                HQ
              </div>
              <div>
                <span className="text-[9px] font-tech text-amber-500 font-bold uppercase tracking-[0.2em] block">
                  CENTRAL HEADQUARTERS &amp; DISPATCH VAULT
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Mabalacat City, Pampanga (Main Command Post)
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${COMPANY_PROFILE.primaryPhones[0].replace(/[^0-9]/g, '')}`}
                className="bg-white hover:bg-amber-500 text-black px-6 py-3 font-black uppercase text-xs tracking-widest transition-all cursor-pointer flex items-center rounded-sm"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                Call HQ: (045) 9341-494
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-1.5">
              <span className="text-zinc-500 font-tech font-bold uppercase tracking-wider block text-[10px]">
                Physical Address:
              </span>
              <p className="text-zinc-300 font-light leading-relaxed">
                Block 8 Lot 3 Marivic Street, Barangay Tabun, Xevera Subdivision, Mabalacat City, Pampanga
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-zinc-500 font-tech font-bold uppercase tracking-wider block text-[10px]">
                Command Capabilities:
              </span>
              <p className="text-zinc-300 font-light leading-relaxed">
                2-Story Operations Command, Armory Vault, Radio Repeater Mast, Dispatch Vehicles &amp; Training Hall
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-zinc-500 font-tech font-bold uppercase tracking-wider block text-[10px]">
                Operating Schedule:
              </span>
              <p className="text-zinc-300 font-light">
                <strong className="text-amber-500 font-medium">24/7 Operations Desk</strong> (Admin: Mon-Sat 8:00 AM - 5:00 PM)
              </p>
            </div>
          </div>
        </div>

        {/* REGIONAL SATELLITE COMMAND POSTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OFFICE_LOCATIONS.slice(1).map((loc: OfficeLocation, idx: number) => {
            const hoursDisplay = loc.hours || loc.operatingHours || '24/7 Dispatch';
            return (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/40 flex flex-col justify-between space-y-4 text-xs transition-all group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-tech text-amber-500 font-bold uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-sm border border-amber-500/20">
                      {loc.type}
                    </span>
                    <MapPin className="w-4 h-4 text-zinc-600 group-hover:text-amber-500 transition-colors" />
                  </div>

                  <h4 className="font-heading font-bold text-sm text-white">
                    {loc.city}
                  </h4>

                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {loc.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1 text-zinc-400 text-[11px]">
                  <div className="flex items-center">
                    <Phone className="w-3 h-3 mr-1.5 text-amber-500 flex-shrink-0" />
                    <span>{loc.phones[0]}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1.5 text-amber-500 flex-shrink-0" />
                    <span className="text-zinc-500 text-[10px]">{hoursDisplay}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
