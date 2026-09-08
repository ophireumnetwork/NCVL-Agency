import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Search, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { VERIFIED_CLIENT_PORTFOLIO } from '../../data/companyData';
import { ClientRecord } from '../../types';

export const ClientExperienceSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const industries = [
    { id: 'all', label: 'All Deployments' },
    { id: 'Gaming & Entertainment', label: 'Gaming & Casinos' },
    { id: 'Hotels & Resorts', label: 'Hotels & Resorts' },
    { id: 'Residential & Subdivisions', label: 'Subdivisions & HOAs' },
    { id: 'Corporate & Industrial', label: 'Corporate & Logistics' },
    { id: 'Retail & Commercial', label: 'Retail & Commercial' },
  ];

  const filtered = VERIFIED_CLIENT_PORTFOLIO.filter((c: ClientRecord) => {
    const ind = c.industry || c.category || '';
    const desc = c.description || c.scope || '';
    const matchInd = selectedIndustry === 'all' || ind === selectedIndustry;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                        c.location.toLowerCase().includes(search.toLowerCase()) ||
                        desc.toLowerCase().includes(search.toLowerCase());
    return matchInd && matchSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#080808] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>VERIFIED DEPLOYMENT TRACK RECORD</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
              COMMERCIAL &amp; INSTITUTIONAL PORTFOLIO
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl font-light leading-relaxed">
              NCVL Security Agency holds continuous protective custody across prestigious commercial establishments, 
              luxury hospitality chains, industrial hubs, and gated communities throughout the Philippines.
            </p>
          </div>

          {/* SEARCH BOX */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search clients, branches, or cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#050505] border border-zinc-800 rounded-sm pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap gap-2">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedIndustry === ind.id
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                  : 'bg-[#050505] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* CLIENT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((client: ClientRecord, idx: number) => {
            const industryLabel = client.industry || client.category || 'Security Guard Detachment';
            const descText = client.description || client.scope || 'Standard Armed Sentry, Access Control, and Perimeter Patrol Deployment.';
            
            return (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#050505] border border-white/5 hover:border-amber-500/50 flex flex-col justify-between space-y-4 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(245,158,11,0.05)]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[9px] font-tech uppercase font-bold text-amber-500 tracking-widest bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-sm">
                      {industryLabel}
                    </span>
                    <span className="text-[10px] bg-zinc-900 text-zinc-400 px-2.5 py-0.5 rounded-full border border-zinc-800 uppercase tracking-tighter">
                      ACTIVE CONTRACT
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                    {client.name}
                  </h3>

                  <div className="flex items-start text-xs text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    <span>{client.location}</span>
                  </div>

                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {descText}
                  </p>
                </div>

                {/* BRANCHES LIST / HIGHLIGHT */}
                {client.branches && client.branches.length > 0 && (
                  <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs">
                    <span className="text-[9px] uppercase font-tech text-zinc-500 font-bold tracking-wider block">
                      Verified Outlets / Posts:
                    </span>
                    <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                      {client.branches.slice(0, 8).map((br, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2 py-0.5 bg-zinc-900/80 border border-zinc-800 rounded-sm text-[10px] text-zinc-300"
                        >
                          {br}
                        </span>
                      ))}
                      {client.branches.length > 8 && (
                        <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/40 rounded-sm text-[10px] text-amber-400 font-bold">
                          +{client.branches.length - 8} more branches
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
