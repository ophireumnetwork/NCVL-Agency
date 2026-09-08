import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Award, 
  BadgeCheck, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { LEADERSHIP_TEAM } from '../../data/companyData';
import { LeadershipMember } from '../../types';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-[#050505] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <UserCheck className="w-3.5 h-3.5" />
            <span>COMMAND CORPS &amp; EXECUTIVE MANAGEMENT</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            TACTICAL &amp; EXECUTIVE LEADERSHIP
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Seasoned law enforcement professionals, licensed security strategists, and fiscal integrity directors 
            steering NCVL's standard of discipline, accountability, and operational vigilance.
          </p>
        </div>

        {/* LEADERSHIP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEADERSHIP_TEAM.map((leader: LeadershipMember, idx: number) => {
            const roleTitle = leader.role || leader.title;
            return (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 flex flex-col justify-between space-y-5 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(245,158,11,0.06)] relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-tech font-bold uppercase tracking-[0.2em] text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-sm border border-amber-500/20">
                      {leader.department || 'COMMAND BOARD'}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                      {leader.name}
                    </h3>
                    <div className="text-xs font-medium text-amber-500/90 mt-0.5 tracking-wide">
                      {roleTitle}
                    </div>
                  </div>

                  {leader.credentials && leader.credentials.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {leader.credentials.map((cred, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded-sm bg-[#050505] border border-zinc-800 text-[10px] font-tech text-zinc-300"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-zinc-400 text-xs font-light leading-relaxed pt-1">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="font-tech text-[10px] tracking-wider uppercase">Directorial Clearance</span>
                  <span className="text-emerald-400 font-tech font-bold flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    CERTIFIED
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
