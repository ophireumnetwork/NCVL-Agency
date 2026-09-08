import React from 'react';
import { 
  Truck, 
  Radio, 
  ShieldAlert, 
  Eye, 
  Activity, 
  CheckCircle2, 
  Cpu,
  Layers
} from 'lucide-react';
import { AGENCY_ASSETS } from '../../data/assets';

interface TacticalFleetSectionProps {
  onOpenAssessment: () => void;
}

export const TacticalFleetSection: React.FC<TacticalFleetSectionProps> = ({ onOpenAssessment }) => {
  return (
    <section id="fleet" className="py-24 bg-[#050505] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Truck className="w-3.5 h-3.5" />
            <span>HEAVY RESPONSE &amp; MOBILE COMMAND INFRASTRUCTURE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            OPERATIONAL LOGISTICS &amp; TACTICAL FLEET
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Rapid mobility and tactical containment units configured to respond 
            to civil disturbances, natural disasters, perimeter breaches, and VIP security escorts.
          </p>
        </div>

        {/* 3 FLEET SPOTLIGHT TILES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* TILE 1: RESCUE 01 ARMORED TRUCK */}
          <div className="rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 overflow-hidden shadow-xl flex flex-col justify-between group transition-all">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={AGENCY_ASSETS.patrolTruck}
                  alt="NCVL Rescue 01 Armored Response Truck"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-zinc-800 px-2.5 py-0.5 rounded-sm text-[9px] font-tech text-amber-500 font-bold uppercase tracking-widest">
                  UNIT: RESCUE 01
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                  Armored Tactical Emergency Response
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Heavy-duty rapid response vehicle outfitted with onboard extraction tools, 
                  riot containment shields, high-candlepower searchlights, and first aid trauma stations.
                </p>

                <div className="pt-3 border-t border-white/5 space-y-1 text-xs text-zinc-300 font-light font-tech">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Heavy Winch &amp; Steel Bullbar Reinforcement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>High-Gain Dual Band Radio System</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <span className="text-[10px] font-tech text-amber-500 uppercase font-bold tracking-widest">
                DISPATCHED FOR CALAMITY &amp; RIOT RESPONSE
              </span>
            </div>
          </div>

          {/* TILE 2: VIP ESCORT SUV */}
          <div className="rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 overflow-hidden shadow-xl flex flex-col justify-between group transition-all">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={AGENCY_ASSETS.vipSuv}
                  alt="NCVL VIP Executive Escort Vehicle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-zinc-800 px-2.5 py-0.5 rounded-sm text-[9px] font-tech text-amber-500 font-bold uppercase tracking-widest">
                  UNIT: VIP ESCORT 02
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                  Executive Close Protection Transport
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Darkened ballistic-reinforced SUVs for corporate dignitaries, gaming patrons, 
                  and high-profile individuals traveling across Metro Manila and Central Luzon highways.
                </p>

                <div className="pt-3 border-t border-white/5 space-y-1 text-xs text-zinc-300 font-light font-tech">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Concealed Armed Bodyguard Complement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Live GPS Convoy Telemetry to Command Post</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <span className="text-[10px] font-tech text-amber-500 uppercase font-bold tracking-widest">
                CERTIFIED CLOSE PROTECTION OFFICERS (CPO)
              </span>
            </div>
          </div>

          {/* TILE 3: NIGHT OPERATIONS & SURVEILLANCE */}
          <div className="rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 overflow-hidden shadow-xl flex flex-col justify-between group transition-all">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={AGENCY_ASSETS.nightCommand}
                  alt="NCVL Night Operations Command & Reconnaissance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-zinc-800 px-2.5 py-0.5 rounded-sm text-[9px] font-tech text-amber-500 font-bold uppercase tracking-widest">
                  UNIT: NIGHT RECON 03
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                  Night Operations &amp; Aerial Surveillance
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Mobile command post deployed with night-vision optics, floodlights, 
                  and thermal sensor aerial drones for perimeter reconnaissance over vast estates.
                </p>

                <div className="pt-3 border-t border-white/5 space-y-1 text-xs text-zinc-300 font-light font-tech">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Thermal Infrared Aerial Drone Scouting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>Independent Generator &amp; Floodlight Towers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <span className="text-[10px] font-tech text-amber-500 uppercase font-bold tracking-widest">
                24/7 ROVING SUBDIVISION &amp; PLANT DEFENSE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
