import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ShoppingCart, 
  FileText, 
  ChevronRight,
  Clock,
  Sparkles,
  Lock
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';
import { AGENCY_ASSETS } from '../data/assets';

interface HeaderProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openAssessment: () => void;
  openProposal: () => void;
  openAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab = 'home',
  setActiveTab,
  cartCount,
  openCart,
  openAssessment,
  openProposal,
  openAdmin,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Heritage' },
    { id: 'services', label: 'Services' },
    { id: 'store', label: 'The Vault', isVault: true },
    { id: 'incident-map', label: 'Radar Map' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'industries', label: 'Sectors' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'gallery', label: 'Operations' },
    { id: 'compliance', label: 'Licensing' },
    { id: 'contact', label: 'Dispatch' },
  ];

  const handleNavClick = (id: string) => {
    if (setActiveTab) setActiveTab(id);
    setMobileMenuOpen(false);
    
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      {/* TOP TACTICAL TELEMETRY STATUS BAR */}
      <div className="bg-[#050505] border-b border-white/5 py-1.5 px-4 sm:px-8 text-[11px] text-zinc-400 font-tech">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-zinc-300 font-semibold">
                SYSTEM STATUS: <span className="text-amber-500">OPTIMAL / LIVE DISPATCH</span>
              </span>
            </div>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="hidden md:inline text-[10px] uppercase tracking-wider text-zinc-400">
              PNP-SOSIA LICENSED: PSA-WGS-M00542-2024
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[10px] tracking-wider uppercase">
            <a 
              href="tel:0459341494" 
              className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>(045) 9341-494</span>
            </a>
            <span className="text-zinc-700">|</span>
            <button
              onClick={openAdmin}
              className="text-zinc-500 hover:text-amber-400 transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Lock className="w-3 h-3 text-amber-500" />
              <span>PORTAL ACCESS</span>
            </button>
          </div>

        </div>
      </div>

      {/* MAIN NAV BAR */}
      <nav className={`w-full bg-[#050505]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 ${
        isScrolled ? 'py-3.5 shadow-2xl' : 'py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-sm overflow-hidden border border-amber-500/40 p-0.5 bg-black shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center">
              <img 
                src={AGENCY_ASSETS.logo} 
                alt="NCVL Security Agency Official Crest" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-heading font-black text-lg sm:text-xl text-white tracking-[0.15em] uppercase">
                  NCVL
                </span>
                <span className="text-[9px] font-tech font-bold uppercase tracking-[0.2em] text-amber-500 px-1.5 py-0.5 rounded-sm bg-amber-500/10 border border-amber-500/30">
                  DEFENSE
                </span>
              </div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-zinc-400 font-tech font-semibold">
                SECURITY AGENCY INC.
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden xl:flex items-center space-x-7 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors cursor-pointer ${
                  item.isVault
                    ? 'text-amber-500 hover:text-amber-400 font-bold flex items-center space-x-1'
                    : 'hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center space-x-3">
            
            {/* STORE CART BUTTON */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-sm bg-[#0a0a0a] border border-zinc-800 hover:border-amber-500/60 text-zinc-200 hover:text-amber-400 transition-all cursor-pointer"
              title="View Hardware Shopping Cart"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-black font-black text-[10px] flex items-center justify-center font-tech shadow-[0_0_10px_#f59e0b]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* AUDIT / TENDER BUTTON */}
            <button
              onClick={openProposal}
              className="hidden sm:inline-flex bg-white hover:bg-amber-500 text-black px-5 py-2.5 font-black uppercase text-xs tracking-widest transition-all rounded-sm shadow-md cursor-pointer"
            >
              Deploy Sentry &rarr;
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-sm bg-[#0a0a0a] border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </nav>

      {/* MOBILE EXPANDED MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#050505] border-b border-white/5 py-4 px-6 space-y-3 font-tech text-xs uppercase tracking-wider">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 px-3 rounded-sm text-zinc-300 hover:bg-zinc-900 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/5 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAssessment();
              }}
              className="w-full py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-200 text-center font-bold tracking-widest uppercase rounded-sm"
            >
              Launch Risk Assessment Tool
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openProposal();
              }}
              className="w-full py-2.5 bg-amber-500 text-black text-center font-black tracking-widest uppercase rounded-sm"
            >
              Request Tender / Proposal
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
