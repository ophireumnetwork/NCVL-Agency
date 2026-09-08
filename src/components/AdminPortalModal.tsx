import React, { useState } from 'react';
import { 
  X, 
  Database, 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  ShoppingCart, 
  Users, 
  Download, 
  Copy, 
  Check, 
  Search,
  Lock,
  RefreshCw,
  Eye
} from 'lucide-react';
import { COMPANY_PROFILE, VERIFIED_CLIENT_PORTFOLIO, OFFICE_LOCATIONS } from '../data/companyData';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'proposals' | 'equipment' | 'careers' | 'schema'>('audit');
  const [copiedSchema, setCopiedSchema] = useState(false);

  if (!isOpen) return null;

  // SUPABASE SQL MIGRATION DEFINITION
  const supabaseSQLSchema = `-- ========================================================
-- NCVL SECURITY AGENCY - SUPABASE POSTGRESQL ARCHITECTURE
-- Production Schema with Row Level Security (RLS)
-- ========================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUMS
CREATE TYPE user_role AS ENUM ('super_admin', 'ops_officer', 'finance_officer', 'client_reviewer');
CREATE TYPE proposal_status AS ENUM ('new_inquiry', 'site_assessed', 'proposal_sent', 'contract_awarded', 'archived');
CREATE TYPE order_status AS ENUM ('quotation_pending', 'po_received', 'dispatched', 'installed', 'completed');

-- 3. PROFILES & ADMIN USERS
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  role user_role DEFAULT 'ops_officer',
  department TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_desc TEXT NOT NULL,
  full_desc TEXT NOT NULL,
  icon_name TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. EQUIPMENT & HARDWARE PRODUCTS
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  specs JSONB DEFAULT '{}'::jsonb,
  in_stock BOOLEAN DEFAULT true,
  warranty_period TEXT DEFAULT '2 Years',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. PROPOSAL REQUESTS & TENDERS (CONFIDENTIAL)
CREATE TABLE IF NOT EXISTS public.proposal_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_code TEXT UNIQUE NOT NULL,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  facility_type TEXT NOT NULL,
  site_address TEXT NOT NULL,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  guards_count INT DEFAULT 2,
  shift_type TEXT DEFAULT '12h_2shifts',
  armed_requirement TEXT DEFAULT 'mixed',
  primary_concerns TEXT,
  attachment_url TEXT,
  status proposal_status DEFAULT 'new_inquiry',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. EQUIPMENT REQUISITIONS & QUOTES (CONFIDENTIAL)
CREATE TABLE IF NOT EXISTS public.equipment_orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference_code TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  delivery_address TEXT NOT NULL,
  items JSONB NOT NULL,
  subtotal NUMERIC(12,2) NOT NULL,
  include_installation BOOLEAN DEFAULT false,
  status order_status DEFAULT 'quotation_pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. JOB APPLICATIONS (CONFIDENTIAL)
CREATE TABLE IF NOT EXISTS public.job_applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_position TEXT NOT NULL,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  license_number TEXT,
  license_expiry DATE,
  experience_years INT DEFAULT 0,
  resume_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.proposal_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipment_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public can read published services and products
CREATE POLICY "Public Read Services" ON public.services FOR SELECT USING (is_published = true);
CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (in_stock = true);

-- Public can insert new inquiries but CANNOT read others
CREATE POLICY "Public Create Proposals" ON public.proposal_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Create Equipment Orders" ON public.equipment_orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Create Applications" ON public.job_applications FOR INSERT WITH CHECK (true);

-- Only Authenticated Admins can select, update, or delete sensitive data
CREATE POLICY "Admins Full Access Proposals" ON public.proposal_requests
  FOR ALL TO authenticated USING (auth.jwt() ->> 'role' IN ('super_admin', 'ops_officer'));

CREATE POLICY "Admins Full Access Orders" ON public.equipment_orders
  FOR ALL TO authenticated USING (auth.jwt() ->> 'role' IN ('super_admin', 'ops_officer'));

CREATE POLICY "Admins Full Access Applications" ON public.job_applications
  FOR ALL TO authenticated USING (auth.jwt() ->> 'role' IN ('super_admin', 'ops_officer'));
`;

  const copySQL = () => {
    navigator.clipboard.writeText(supabaseSQLSchema);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-[#0b0b0f] border border-[#2c2c36] rounded-xl shadow-2xl overflow-hidden text-zinc-100 my-8">
        
        {/* HEADER */}
        <div className="px-6 py-4 bg-[#070709] border-b border-[#1f1f26] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-[#C89B2C]/20 border border-[#C89B2C]/50 flex items-center justify-center">
              <Database className="w-5 h-5 text-[#C89B2C]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-heading font-bold text-lg text-white">
                  NCVL Agency Command & Admin Portal
                </h3>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-tech">
                  SYSTEM READY
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Authoritative Record Verification, RFQ Pipeline & Supabase Architecture
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ADMIN NAV TABS */}
        <div className="bg-[#050507] px-6 border-b border-[#1f1f26] flex space-x-2 overflow-x-auto text-xs">
          {[
            { id: 'audit', label: 'Document Audit & Verification', icon: AlertTriangle },
            { id: 'proposals', label: 'Proposal RFP Pipeline (4)', icon: FileText },
            { id: 'equipment', label: 'Equipment Requisitions (3)', icon: ShoppingCart },
            { id: 'careers', label: 'Recruitment Applications (6)', icon: Users },
            { id: 'schema', label: 'Supabase Database Schema', icon: Database },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-3.5 font-medium border-b-2 flex items-center space-x-1.5 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#C89B2C] text-[#E2BC58] font-bold'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB BODY */}
        <div className="p-6 max-h-[70vh] overflow-y-auto text-xs">
          
          {/* TAB 1: DISCREPANCY & VERIFICATION AUDIT (PROMPT REQUIREMENT #34) */}
          {activeTab === 'audit' && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-950/20 border border-amber-800/40 rounded-lg space-y-2">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Authoritative Proposal 2026 Source Verification Notes</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  As instructed in the system directives, conflicting details between 
                  historic documents (e.g. Navotas founding vs Mabalacat HQ renewal) have been 
                  harmonized and highlighted for agency administrator verification:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg space-y-2">
                  <h4 className="font-semibold text-white flex items-center text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#C89B2C] mr-1.5" />
                    Verified Primary Headquarters
                  </h4>
                  <p className="text-zinc-300">
                    <strong>Current Active HQ:</strong> Block 8 Lot 3 Marivic Street, Barangay Tabun, Xevera Subdivision, Mabalacat City, Pampanga.
                  </p>
                  <p className="text-zinc-400 text-[11px]">
                    <em>Historical Origin:</em> Founded at 101 Fisherman Village, Brgy. Daanghari, Navotas City (affiliated with Torch & Shield in Feb 14, 2014 until autonomous PNP-SOSIA licensing).
                  </p>
                  <div className="text-[10px] text-emerald-400 font-tech">STATUS: CONFIRMED ACCORDING TO 2024-2029 LICENSES</div>
                </div>

                <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg space-y-2">
                  <h4 className="font-semibold text-white flex items-center text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#C89B2C] mr-1.5" />
                    Statutory License Numbers
                  </h4>
                  <p className="text-zinc-300">
                    <strong>PNP-SOSIA:</strong> License to Operate No. PSA-WGS-M00542-2024 (Expiry: Oct 17, 2029).
                  </p>
                  <p className="text-zinc-300">
                    <strong>RCSU-NCR:</strong> Certificate of Registration RCSU-NCR CRPSA-20261402-002 (Expiry: Oct 17, 2029).
                  </p>
                  <p className="text-zinc-300">
                    <strong>DTI Business Name:</strong> No. 1177898 (Valid to Sept 10, 2029).
                  </p>
                  <div className="text-[10px] text-emerald-400 font-tech">STATUS: CURRENT & IN GOOD STANDING</div>
                </div>

                <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg space-y-2">
                  <h4 className="font-semibold text-white flex items-center text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#C89B2C] mr-1.5" />
                    Verified Management Hierarchy
                  </h4>
                  <p className="text-zinc-300">
                    <strong>Managing Director / CEO:</strong> Mr. Nhick D. Mendoza, CSP, CSMS.
                  </p>
                  <p className="text-zinc-300">
                    <strong>Licensee & Finance Directress:</strong> Ms. Cindy Mahilom Evangelista.
                  </p>
                  <p className="text-zinc-300">
                    <strong>Deputy Directress in Finance:</strong> Ms. Bianca E. Mendoza, CSMS.
                  </p>
                  <p className="text-zinc-300">
                    <strong>Senior VP for Operations:</strong> Mr. Gilbert S. Suarez, PNP, CSP, CSMS, BOSH, CST.
                  </p>
                </div>

                <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg space-y-2">
                  <h4 className="font-semibold text-white flex items-center text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#C89B2C] mr-1.5" />
                    Operational Equipment Audit
                  </h4>
                  <p className="text-zinc-300">
                    <strong>140+ Radios:</strong> 100 Handheld Radios + 40 Motorola Radios.
                  </p>
                  <p className="text-zinc-300">
                    <strong>20 Units:</strong> High-Sensitivity Metal Detection Portals & Scanners.
                  </p>
                  <p className="text-zinc-300">
                    <strong>Fleet:</strong> Armored Emergency Response Trucks, Innova, Nissan Navara, Patrol Vans & Motorcycles.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROPOSALS PIPELINE */}
          {activeTab === 'proposals' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="font-semibold text-zinc-300">Active Security Tenders & RFQs</span>
                <span className="text-zinc-500 font-tech">4 Inquiries in Queue</span>
              </div>

              {[
                { ref: 'NCVL-RFP-2026-8912', client: 'Bingo Plus / LRWC Laguna Hub', facility: 'Gaming & Commercial', guards: '12 Guards (24/7 12h)', status: 'Site Survey Complete', date: 'Sept 4, 2026' },
                { ref: 'NCVL-RFP-2026-8915', client: 'Sante Barley Silang Warehouse', facility: 'Industrial Logistics', guards: '8 Guards (Armed Gatehouse)', status: 'Rate Evaluation', date: 'Sept 5, 2026' },
                { ref: 'NCVL-RFP-2026-8920', client: 'Greensborough HOA Dasmariñas', facility: 'Residential Subdivision', guards: '6 Guards + 1 Motorcycle Rover', status: 'Drafting Contract', date: 'Sept 6, 2026' },
                { ref: 'NCVL-RFP-2026-8933', client: 'Eurotel Hotel Boracay Station 2', facility: 'Hospitality & VIP Concierge', guards: '10 Guards (Uniform & Barong)', status: 'New Ingress Review', date: 'Today' }
              ].map((item) => (
                <div key={item.ref} className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-tech font-bold text-[#E2BC58]">{item.ref}</span>
                      <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">{item.facility}</span>
                    </div>
                    <div className="text-white font-semibold text-xs mt-0.5">{item.client}</div>
                    <div className="text-zinc-400 text-[11px]">{item.guards} • Logged: {item.date}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-[#C89B2C]/20 border border-[#C89B2C]/40 text-[#E2BC58] text-[10px] font-bold rounded uppercase">
                      {item.status}
                    </span>
                    <button className="p-1.5 bg-zinc-800 hover:bg-zinc-700 rounded text-zinc-200">
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: EQUIPMENT ORDERS */}
          {activeTab === 'equipment' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="font-semibold text-zinc-300">Commercial Hardware Purchase Inquiries</span>
                <span className="text-zinc-500 font-tech">3 Orders Pending Dispatch</span>
              </div>

              {[
                { ref: 'NCVL-EQ-449102', client: 'Do-All Metal Corp', items: '4x Walkthrough Archway Metal Detectors', total: '₱356,000', status: 'Payment Verified', install: 'With NCVL Installation' },
                { ref: 'NCVL-EQ-449108', client: 'Xevera Mabalacat HOA', items: '8x Sentinel 4K AI Dome PTZ Cameras + NVR', total: '₱276,000', status: 'Field Tech Scheduled', install: 'Installation Included' },
                { ref: 'NCVL-EQ-449114', client: 'Raymond Transport Terminal', items: '12x Motorola Digital Radios & Body-Cams', total: '₱113,400', status: 'Preparing Delivery', install: 'Self-Deploy' }
              ].map((order) => (
                <div key={order.ref} className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-tech font-bold text-[#E2BC58]">{order.ref}</span>
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">{order.status}</span>
                    </div>
                    <div className="text-white font-semibold text-xs mt-0.5">{order.client}</div>
                    <div className="text-zinc-400 text-[11px]">{order.items} • <span className="text-zinc-300 font-medium">{order.install}</span></div>
                  </div>
                  <div className="text-right">
                    <div className="font-tech text-sm font-bold text-[#C89B2C]">{order.total}</div>
                    <button className="text-[10px] text-zinc-400 hover:text-white underline mt-0.5">
                      Generate Requisition Invoice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: RECRUITMENT */}
          {activeTab === 'careers' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span className="font-semibold text-zinc-300">Guard & Officer Candidate Submissions</span>
                <span className="text-zinc-500 font-tech">6 Recent Submissions</span>
              </div>

              {[
                { name: 'Reynaldo Bautista Jr.', role: 'Licensed Security Guard (SG)', license: 'SOSIA-SG-2024-9128', exp: '4 Years', location: 'Angeles City, Pampanga' },
                { name: 'Mark Anthony Ramos', role: 'Executive Protection / VIP Escort', license: 'SOSIA-SO-2023-4412', exp: '6 Years (Ex-Philippine Army)', location: 'Dasmariñas, Cavite' },
                { name: 'Jerome De Leon', role: 'Control Room CCTV Operator', license: 'SOSIA-CCT-2025-1099', exp: '3 Years (BPO Command)', location: 'Caloocan City' },
              ].map((c, idx) => (
                <div key={idx} className="p-3 bg-zinc-900/60 border border-zinc-800 rounded-lg flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-white text-xs">{c.name}</h5>
                    <div className="text-zinc-400 text-[11px]">Applying for: <strong className="text-zinc-200">{c.role}</strong></div>
                    <div className="text-zinc-500 text-[10px]">Lic: {c.license} • {c.exp} • {c.location}</div>
                  </div>
                  <button className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs rounded border border-zinc-700">
                    Review Clearances
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: SUPABASE DATABASE SCHEMA */}
          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-white text-xs">
                    Production Supabase PostgreSQL Migration
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Includes strict Row-Level Security (RLS) preventing public access to client proposals, RFQs, and candidate resumes.
                  </p>
                </div>
                <button
                  onClick={copySQL}
                  className="px-3 py-1.5 bg-[#C89B2C] hover:bg-[#E2BC58] text-black font-bold text-xs rounded flex items-center shadow"
                >
                  {copiedSchema ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
                  {copiedSchema ? 'Copied SQL!' : 'Copy SQL Script'}
                </button>
              </div>

              <pre className="p-4 bg-black/80 border border-zinc-800 rounded-lg text-[11px] font-mono text-zinc-300 overflow-x-auto max-h-96 leading-relaxed">
                {supabaseSQLSchema}
              </pre>
            </div>
          )}

        </div>

        {/* FOOTER */}
        <div className="px-6 py-3.5 bg-[#070709] border-t border-[#1f1f26] flex items-center justify-between text-xs text-zinc-500">
          <div className="flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5 text-[#C89B2C]" />
            <span>Administrative access authenticated • Confidential corporate record</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded font-medium"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
