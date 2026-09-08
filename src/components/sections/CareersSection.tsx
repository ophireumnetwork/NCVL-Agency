import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  Briefcase, 
  ShieldCheck, 
  Send, 
  FileText, 
  Award,
  ChevronRight,
  Upload
} from 'lucide-react';
import { CAREER_VACANCIES } from '../../data/companyData';
import { JobOpening } from '../../types';

export const CareersSection: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>('Licensed Security Guard (SG / SO)');
  const [isApplying, setIsApplying] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // QUICK APPLICATION FORM STATE
  const [appForm, setAppForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    licenseNumber: '',
    yearsExp: '1-3 Years',
    position: 'Licensed Security Guard (SG / SO)',
    message: '',
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsApplying(false);
    }, 3500);
  };

  return (
    <section id="careers" className="py-24 bg-[#080808] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Users className="w-3.5 h-3.5" />
            <span>JOIN THE RANKS OF DISCIPLINED PROFESSIONALS</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            CAREERS &amp; RECRUITMENT PORTAL
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Build an honorable career with an agency that respects your dignity. 
            Guaranteed on-time salary remittances, full statutory social security, and merit-based officer promotions.
          </p>
        </div>

        {/* WHY JOIN NCVL BANNER */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'On-Time Salary Remittance', desc: 'No delayed payouts. Direct bank/ATM payroll with transparent itemized pay slips.' },
            { title: 'Complete Statutory Benefits', desc: 'Active SSS, PhilHealth, Pag-IBIG and state insurance with zero arrears.' },
            { title: 'Free Professional Training', desc: 'Marksmanship, ERT fire safety, VIP de-escalation, and tactical protocols.' },
            { title: 'Fast-Track Officer Promotion', desc: 'Guards regularly advance to Shift-in-Charge (SIC), Inspector, and Operations Manager.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-[#050505] border border-white/5 rounded-sm space-y-3 text-xs">
              <div className="w-8 h-8 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-tech font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-white text-sm">
                {item.title}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* OPEN VACANCIES GRID */}
        <div className="space-y-6">
          <div className="border-b border-white/5 pb-4 flex items-center justify-between">
            <h4 className="font-heading font-bold text-white text-xl tracking-tight">
              Active Nationwide Field Positions
            </h4>
            <span className="text-[10px] text-amber-500 font-tech font-bold tracking-widest uppercase bg-amber-500/10 px-3 py-1 border border-amber-500/20 rounded-sm">
              IMMEDIATE HIRING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_VACANCIES.map((job: JobOpening) => (
              <div
                key={job.id}
                className="p-6 rounded-sm bg-[#050505] border border-white/5 hover:border-amber-500/50 flex flex-col justify-between space-y-5 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[9px] font-tech uppercase text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-sm border border-amber-500/20 font-bold tracking-wider">
                      {job.type}
                    </span>
                    <span className="text-zinc-500 font-tech text-[10px]">{job.location}</span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                    {job.title}
                  </h4>

                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {job.description || 'Standard perimeter guarding and sentry duty post.'}
                  </p>

                  <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-400 space-y-1">
                    <span className="text-[9px] font-tech font-bold uppercase tracking-wider text-zinc-500 block">Requirements:</span>
                    <div className="space-y-0.5">
                      {(job.requirements || []).slice(0, 3).map((r, rIdx) => (
                        <div key={rIdx} className="flex items-center space-x-1.5 text-zinc-300 font-light">
                          <CheckCircle2 className="w-3 h-3 text-amber-500 flex-shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-amber-500 font-tech font-bold">
                    {job.slots || 10} Open Slots
                  </span>
                  <button
                    onClick={() => {
                      setAppForm((prev) => ({ ...prev, position: job.title }));
                      setIsApplying(true);
                    }}
                    className="bg-white hover:bg-amber-500 text-black px-4 py-2 font-black text-xs uppercase tracking-widest transition-all rounded-sm cursor-pointer"
                  >
                    Apply &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION MODAL */}
        {isApplying && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-zinc-800 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 text-xs text-zinc-200 space-y-5">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 bg-amber-500 text-black flex items-center justify-center font-bold text-xs rounded-sm">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      Enlistment Application
                    </h3>
                    <span className="text-[10px] text-amber-500 font-tech">{appForm.position}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsApplying(false)}
                  className="text-zinc-500 hover:text-white transition-colors text-base"
                >
                  ✕
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-zinc-400 font-medium mb-1 text-[11px] uppercase tracking-wider">Candidate Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Juan dela Cruz"
                      value={appForm.fullName}
                      onChange={(e) => setAppForm({ ...appForm, fullName: e.target.value })}
                      className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1 text-[11px] uppercase tracking-wider">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0917-XXX-XXXX"
                        value={appForm.phone}
                        onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1 text-[11px] uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        placeholder="email@gmail.com"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1 text-[11px] uppercase tracking-wider">PNP-SOSIA License #</label>
                      <input
                        type="text"
                        placeholder="SG-XXXX-XXXX"
                        value={appForm.licenseNumber}
                        onChange={(e) => setAppForm({ ...appForm, licenseNumber: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 font-medium mb-1 text-[11px] uppercase tracking-wider">Experience Level</label>
                      <select
                        value={appForm.yearsExp}
                        onChange={(e) => setAppForm({ ...appForm, yearsExp: e.target.value })}
                        className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                      >
                        <option>No experience (Will undergo training)</option>
                        <option>1-3 Years</option>
                        <option>3-5 Years</option>
                        <option>5+ Years (Senior Guard/Officer)</option>
                        <option>Ex-Military / Ex-PNP</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 font-medium mb-1 text-[11px] uppercase tracking-wider">Previous Posts / Experience</label>
                    <textarea
                      rows={2}
                      placeholder="List previous agencies, assignments, or security duties"
                      value={appForm.message}
                      onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
                      className="w-full bg-[#050505] border border-zinc-800 rounded-sm px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-white hover:bg-amber-500 text-black font-black uppercase tracking-widest rounded-sm text-xs transition-all shadow-lg flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Submit Candidacy Application
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Application Transmitted!
                  </h4>
                  <p className="text-zinc-400 text-xs font-light max-w-sm mx-auto">
                    Your profile has been logged at our Mabalacat Operations Command center. 
                    Expect an SMS confirmation for your physical briefing and deployment interview.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
