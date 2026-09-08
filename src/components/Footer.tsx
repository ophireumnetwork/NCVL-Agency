import React from 'react';
import { 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  Award,
  ChevronRight,
  Lock
} from 'lucide-react';
import { COMPANY_PROFILE, OFFICE_LOCATIONS } from '../data/companyData';
import { AGENCY_ASSETS } from '../data/assets';

interface FooterProps {
  setActiveTab?: (tab: string) => void;
  openProposal: () => void;
  openAssessment: () => void;
  openAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  openProposal,
  openAssessment,
  openAdmin,
}) => {
  const scrollTo = (id: string) => {
    if (setActiveTab) setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 text-zinc-400 text-xs font-tech">
      
      {/* STATUTORY TRUST BADGE STRIP */}
      <div className="border-b border-white/5 py-8 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
          
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-500">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider">PNP-SOSIA REGULATED</div>
              <div className="text-zinc-500 text-[11px] font-light">License No. PSA-WGS-M00542-2024</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-500">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider">PADPAO ACCREDITED</div>
              <div className="text-zinc-500 text-[11px] font-light">Region III &amp; National Chapters</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-500">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider">DOLE &amp; DTI REGISTERED</div>
              <div className="text-zinc-500 text-[11px] font-light">BN #1177898 • Zero Labor Disputes</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-500">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white uppercase tracking-wider">24/7 COMMAND DISPATCH</div>
              <div className="text-zinc-500 text-[11px] font-light">Immediate Roving Support</div>
            </div>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        
        {/* BRAND & MISSION */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-sm overflow-hidden border border-amber-500/40 p-0.5 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <img 
                src={AGENCY_ASSETS.logo} 
                alt="NCVL Security Agency Official Crest" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <span className="font-heading font-black text-lg text-white tracking-widest uppercase">
                NCVL
              </span>
              <span className="text-[9px] font-tech font-bold uppercase tracking-widest text-amber-500 ml-2">
                SECURITY AGENCY INC.
              </span>
            </div>
          </div>

          <p className="text-zinc-400 text-xs font-light leading-relaxed">
            Autonomous private security and physical asset protection agency headquartered in Mabalacat City, Pampanga. 
            Providing disciplined sentries, 24/7 roving patrols, and hardware solutions nationwide.
          </p>

          <div className="pt-2">
            <button
              onClick={openProposal}
              className="bg-white hover:bg-amber-500 text-black px-6 py-2.5 font-black uppercase text-xs tracking-widest transition-all rounded-sm cursor-pointer shadow-md"
            >
              Request Proposal &rarr;
            </button>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-zinc-400">
            {['hero', 'about', 'services', 'store', 'fleet', 'industries', 'portfolio', 'careers'].map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="hover:text-amber-400 uppercase tracking-wider transition-colors cursor-pointer capitalize"
                >
                  {id === 'hero' ? 'Home' : id === 'store' ? 'The Vault (Store)' : id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* PROTECTIVE SERVICES */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
            Deployments
          </h4>
          <ul className="space-y-2 text-xs text-zinc-400 font-light">
            <li>Uniformed Sentry Guards (SG/SO)</li>
            <li>24/7 Mobile Cruiser Patrol</li>
            <li>VIP Close Protection Escorts</li>
            <li>Emergency Response Team (ERT)</li>
            <li>CCTV Command Monitoring</li>
            <li>Corporate Loss Prevention</li>
            <li>Commercial Walkthrough Detectors</li>
          </ul>
        </div>

        {/* HQ CONTACT INFORMATION */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
            Central Command
          </h4>
          <div className="space-y-2 text-xs text-zinc-400">
            <div className="flex items-start space-x-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>Xevera Subdivision, Mabalacat City, Pampanga</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>(045) 9341-494 / 0929-373-3561</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>operations.ncvlsa@gmail.com</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={openAdmin}
              className="text-[10px] text-zinc-500 hover:text-amber-500 uppercase tracking-wider flex items-center space-x-1 cursor-pointer"
            >
              <Lock className="w-3 h-3 text-amber-500" />
              <span>Admin Personnel Login</span>
            </button>
          </div>
        </div>

      </div>

      {/* COPYRIGHT & CREDENTIALS BOTTOM BAR */}
      <div className="border-t border-white/5 py-6 px-4 bg-[#080808] text-[11px] text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} NCVL Security Agency Inc. All Rights Reserved.
          </div>
          <div className="flex space-x-4 uppercase tracking-widest text-[10px]">
            <span>DOLE Registered</span>
            <span>•</span>
            <span>SOSIA Compliant</span>
            <span>•</span>
            <span>PADPAO Certified</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
