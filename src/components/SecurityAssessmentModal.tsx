import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  CheckCircle, 
  Calculator, 
  Building2, 
  Eye, 
  Radio, 
  FileCheck, 
  Printer, 
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';
import { AGENCY_ASSETS } from '../data/assets';

interface SecurityAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProposal: () => void;
}

export const SecurityAssessmentModal: React.FC<SecurityAssessmentModalProps> = ({
  isOpen,
  onClose,
  onOpenProposal,
}) => {
  const [step, setStep] = useState<number>(1);
  const [facilityType, setFacilityType] = useState<string>('Industrial & Warehouse');
  const [perimeterSize, setPerimeterSize] = useState<string>('Medium (2,000 - 10,000 sqm)');
  const [accessPoints, setAccessPoints] = useState<number>(2);
  const [operatingHours, setOperatingHours] = useState<'24/7' | '12 Hours Day' | '12 Hours Night'>('24/7');
  const [hasExistingCCTV, setHasExistingCCTV] = useState<boolean>(false);
  const [riskConcerns, setRiskConcerns] = useState<string[]>([
    'Internal Pilferage & Inventory Loss',
    'Unauthorized Perimeter Intrusion'
  ]);
  const [contactData, setContactData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
  });

  if (!isOpen) return null;

  const toggleRisk = (risk: string) => {
    if (riskConcerns.includes(risk)) {
      setRiskConcerns(riskConcerns.filter((r) => r !== risk));
    } else {
      setRiskConcerns([...riskConcerns, risk]);
    }
  };

  // CALCULATE RECOMMENDED SECURITY DEPLOYMENT
  const calculateRecommendations = () => {
    let baseGuards = 2;
    if (perimeterSize.includes('Large')) baseGuards += 3;
    if (perimeterSize.includes('Extensive')) baseGuards += 6;
    if (facilityType.includes('Gaming') || facilityType.includes('Mall')) baseGuards += 4;
    if (accessPoints > 2) baseGuards += (accessPoints - 1);
    
    // 24/7 coverage requires 2 shifts per post for 12h duty (PNP/PADPAO standard)
    const multiplier = operatingHours === '24/7' ? 2 : 1;
    const totalGuards = baseGuards * multiplier;
    
    const recommendedCCTV = accessPoints * 4 + (perimeterSize.includes('Large') ? 16 : 8);
    const metalDetectors = (facilityType.includes('Gaming') || facilityType.includes('Mall') || facilityType.includes('Hotels')) 
      ? accessPoints 
      : Math.max(1, Math.floor(accessPoints / 2));

    const estimatedPADPAORate = 54147; // Standard PADPAO NCR/Region III minimum contract benchmark per guard (12h)
    const estimatedMonthly = totalGuards * estimatedPADPAORate;

    return {
      postsCount: baseGuards,
      totalGuards,
      shiftFormat: operatingHours === '24/7' ? 'Two 12-Hour Shifts (Day & Night 24/7)' : '12-Hour Single Shift',
      recommendedCCTV,
      metalDetectors,
      estimatedMonthly,
    };
  };

  const rec = calculateRecommendations();
  const assessmentCode = `NCVL-SA-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-[#0e0e12] border border-[#2e2e38] rounded-xl shadow-2xl overflow-hidden text-zinc-100 my-8">
        
        {/* MODAL HEADER */}
        <div className="px-6 py-5 bg-[#09090c] border-b border-[#22222a] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-sm overflow-hidden border border-amber-500/40 p-0.5 bg-black flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <img 
                src={AGENCY_ASSETS.logo} 
                alt="NCVL Security Crest" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white tracking-wide">
                Facility Security Assessment & Vulnerability Calculator
              </h3>
              <p className="text-xs text-zinc-400">
                Scientific Guard Allocation & Security Systems Modeling
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="bg-zinc-950 px-6 py-2 border-b border-zinc-800 flex items-center justify-between text-xs">
          <span className="font-tech text-zinc-400">
            PHASE {step} OF 3: {step === 1 ? 'Facility Profile' : step === 2 ? 'Threat Vulnerabilities' : 'Audit Recommendation Report'}
          </span>
          <div className="flex space-x-1.5">
            <span className={`w-6 h-1.5 rounded-full ${step >= 1 ? 'bg-[#C89B2C]' : 'bg-zinc-800'}`} />
            <span className={`w-6 h-1.5 rounded-full ${step >= 2 ? 'bg-[#C89B2C]' : 'bg-zinc-800'}`} />
            <span className={`w-6 h-1.5 rounded-full ${step >= 3 ? 'bg-[#C89B2C]' : 'bg-zinc-800'}`} />
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 max-h-[70vh] overflow-y-auto text-xs space-y-6">
          {/* STEP 1: FACILITY PROFILE */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-zinc-300 font-semibold mb-2">
                  1. Select Facility Classification:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Industrial & Warehouse',
                    'Commercial Mall / Retail',
                    'Gaming & Casino Venue',
                    'Residential Subdivision / HOA',
                    'Condominium High-Rise',
                    'Hospital & Healthcare',
                    'Construction Site',
                    'Corporate Office / BPO',
                    'VIP Executive Residence'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFacilityType(type)}
                      className={`p-2.5 text-left rounded border transition-all ${
                        facilityType === type
                          ? 'bg-[#C89B2C]/20 border-[#C89B2C] text-[#E2BC58] font-bold'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    2. Approximate Perimeter / Floor Area:
                  </label>
                  <select
                    value={perimeterSize}
                    onChange={(e) => setPerimeterSize(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                  >
                    <option>Small (Under 2,000 sqm / Single Building)</option>
                    <option>Medium (2,000 - 10,000 sqm)</option>
                    <option>Large (10,000 - 50,000 sqm)</option>
                    <option>Extensive (50,000+ sqm / Sprawling Compound)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    3. Number of Active Gates / Access Ingresses:
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setAccessPoints(num)}
                        className={`flex-1 py-2 rounded border font-tech text-center ${
                          accessPoints === num
                            ? 'bg-[#C89B2C] text-black font-bold border-[#C89B2C]'
                            : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-600'
                        }`}
                      >
                        {num} {num === 6 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  4. Daily Protection Coverage:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['24/7', '12 Hours Day', '12 Hours Night'] as const).map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setOperatingHours(h)}
                      className={`py-2 px-3 rounded border text-center font-medium ${
                        operatingHours === h
                          ? 'bg-[#C89B2C]/20 border-[#C89B2C] text-[#E2BC58] font-bold'
                          : 'bg-zinc-900/60 border-zinc-800 text-zinc-300'
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: THREAT IDENTIFICATION & VULNERABILITIES */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-zinc-300 font-semibold mb-2">
                  5. Select Specific Threats & Vulnerabilities of Concern:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Internal Pilferage & Inventory Loss',
                    'Unauthorized Perimeter Intrusion',
                    'Armed Robbery & Cash Transit Exposure',
                    'Crowd Congestion & Public Disorder',
                    'Gate Access Control & Unchecked Vehicles',
                    'After-Hours Arson & Fire Hazards',
                    'VIP Harassment & Executive Blackmail',
                    'Undercover Employee Sabotage / Espionage'
                  ].map((risk) => (
                    <button
                      key={risk}
                      type="button"
                      onClick={() => toggleRisk(risk)}
                      className={`p-3 text-left rounded border flex items-center justify-between ${
                        riskConcerns.includes(risk)
                          ? 'bg-[#C89B2C]/15 border-[#C89B2C] text-white font-medium'
                          : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span>{risk}</span>
                      <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        riskConcerns.includes(risk) ? 'bg-[#C89B2C] text-black border-[#C89B2C] font-bold' : 'border-zinc-600'
                      }`}>
                        {riskConcerns.includes(risk) ? '✓' : ''}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-zinc-900/80 border border-zinc-800 rounded-lg space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasExistingCCTV}
                    onChange={(e) => setHasExistingCCTV(e.target.checked)}
                    className="rounded border-zinc-700 text-[#C89B2C] focus:ring-[#C89B2C] bg-zinc-800"
                  />
                  <span className="text-zinc-200 font-medium">
                    Facility already has an operational CCTV surveillance system
                  </span>
                </label>
                <p className="text-[11px] text-zinc-500 pl-5">
                  If unchecked, NCVL will calculate full hardware deployment including cameras, NVRs, and walkthrough detection portals.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-zinc-300 font-semibold">Your Organization Details (For Official Assessment Dossier)</h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Company / Facility Name *"
                    value={contactData.companyName}
                    onChange={(e) => setContactData({ ...contactData, companyName: e.target.value })}
                    className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Representative Name *"
                    value={contactData.contactPerson}
                    onChange={(e) => setContactData({ ...contactData, contactPerson: e.target.value })}
                    className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="Contact Number (Mobile / Landline) *"
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Corporate Email Address *"
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    className="bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SCIENTIFIC RECOMMENDATION REPORT */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="p-4 bg-[#C89B2C]/10 border border-[#C89B2C]/40 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#C89B2C] uppercase tracking-widest font-tech font-bold">
                    PRELIMINARY VULNERABILITY AUDIT REPORT
                  </div>
                  <h4 className="font-heading font-bold text-white text-base">
                    {contactData.companyName || 'Corporate Establishment'}
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Category: {facilityType} • Scope: {rec.shiftFormat}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-zinc-500 font-tech">REPORT REF:</div>
                  <div className="text-xs font-tech font-bold text-[#E2BC58]">{assessmentCode}</div>
                </div>
              </div>

              {/* STATS MATRIX */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                  <div className="text-[10px] text-zinc-400 uppercase">Recommended Guards</div>
                  <div className="font-tech text-2xl font-bold text-[#E2BC58] mt-1">
                    {rec.totalGuards}
                  </div>
                  <div className="text-[10px] text-zinc-500">Across {rec.postsCount} Static Posts</div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                  <div className="text-[10px] text-zinc-400 uppercase">AI CCTV Points</div>
                  <div className="font-tech text-2xl font-bold text-white mt-1">
                    {rec.recommendedCCTV}
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    {hasExistingCCTV ? 'Audit & Upgrade' : 'Full Perimeter Setup'}
                  </div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                  <div className="text-[10px] text-zinc-400 uppercase">Metal Detectors</div>
                  <div className="font-tech text-2xl font-bold text-white mt-1">
                    {rec.metalDetectors}
                  </div>
                  <div className="text-[10px] text-zinc-500">Multi-Zone Archways</div>
                </div>

                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
                  <div className="text-[10px] text-zinc-400 uppercase">Roving Patrols</div>
                  <div className="font-tech text-2xl font-bold text-emerald-400 mt-1">
                    24/7
                  </div>
                  <div className="text-[10px] text-zinc-500">Supervisory Motor Unit</div>
                </div>
              </div>

              {/* ACTION PLAN CHECKLIST */}
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg space-y-2">
                <h5 className="font-semibold text-white flex items-center">
                  <Shield className="w-4 h-4 mr-1.5 text-[#C89B2C]" />
                  Recommended NCVL Tactical Measures:
                </h5>
                <ul className="space-y-1.5 text-zinc-300 text-[11px] list-disc pl-4">
                  <li>Deploy licensed guards in prescribed clean military-cut uniforms with Motorola encrypted radios.</li>
                  <li>Implement 24-hour unannounced visits by NCVL field inspectors to verify sentry alertness.</li>
                  <li>Equip main entrance with under-vehicle inspection mirrors and high-sensitivity wand scanners.</li>
                  <li>Draft site-specific Security Contingency Action Plan and Emergency Evacuation SOP.</li>
                </ul>
              </div>

              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded text-[11px] text-zinc-400">
                <strong className="text-zinc-200">Official Rate Notice: </strong> 
                Guards are compensated in strict compliance with Philippine labor laws, PADPAO Wage Order NCR-25 / Region III rates, including SSS, PhilHealth, Pag-IBIG, and 13th month pay. Contract rates are negotiable upon final physical site audit.
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER NAVIGATION */}
        <div className="px-6 py-4 bg-[#09090c] border-t border-[#22222a] flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-zinc-300 font-medium rounded hover:bg-zinc-800 text-xs"
            >
              Previous Step
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => {
                if (step === 2 && (!contactData.companyName || !contactData.phone)) {
                  alert('Please enter your Company name and contact phone number to view the report.');
                  return;
                }
                setStep(step + 1);
              }}
              className="px-5 py-2 bg-gradient-to-r from-[#C89B2C] to-[#E2BC58] text-black font-bold uppercase tracking-wider rounded text-xs flex items-center shadow-lg"
            >
              <span>{step === 1 ? 'Next: Threat Audit' : 'Generate Assessment Report'}</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-3 py-2 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded text-xs flex items-center hover:bg-zinc-700"
              >
                <Printer className="w-3.5 h-3.5 mr-1.5" />
                Print / Save PDF
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenProposal();
                }}
                className="px-4 py-2 bg-[#C89B2C] hover:bg-[#E2BC58] text-black font-bold uppercase tracking-wider rounded text-xs flex items-center"
              >
                <FileCheck className="w-3.5 h-3.5 mr-1.5" />
                Convert into Formal Proposal &rarr;
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
