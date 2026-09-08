import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  CheckCircle2, 
  Upload, 
  Shield, 
  MapPin, 
  Building, 
  AlertCircle,
  Send,
  PhoneCall,
  Lock
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/companyData';
import { AGENCY_ASSETS } from '../data/assets';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');

  // FORM STATE MATCHING SECTION 19 PRECISELY
  const [formData, setFormData] = useState({
    // STEP 1: CLIENT INFORMATION
    companyName: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',

    // STEP 2: LOCATION
    siteAddress: '',
    city: '',
    province: 'Pampanga',

    // STEP 3: SECURITY REQUIREMENTS
    facilityType: 'Corporate Office / Building',
    serviceRequired: 'Uniformed Guard Services',
    guardsCount: 4,
    armedGuards: 'Mixed (Armed at Ingress, Unarmed Concierge)',
    shiftRequirement: '12 Hours (2-Shift System 24/7)',
    deploymentDate: '',

    // STEP 4: RISK INFORMATION
    primaryConcerns: '',
    accessPoints: '2 Access Ingress Gates',
    facilitySize: '5,000 - 10,000 sqm',
    existingSystems: 'Basic Analog CCTV without automated alarms',

    // STEP 5: DOCUMENTS
    fileName: '',
    scopeOfWorkNotes: '',
    consentAgreed: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `NCVL-RFP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  const provinces = [
    'Pampanga', 'Metro Manila', 'Cavite', 'Bulacan', 'Ilocos Norte', 
    'Rizal', 'Batangas', 'Laguna', 'Tarlac', 'Bataan', 'Zambales', 'Other Luzon'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-[#0d0d11] border border-[#2e2e38] rounded-xl shadow-2xl overflow-hidden text-zinc-100 my-8">
        
        {/* HEADER */}
        <div className="px-6 py-5 bg-[#08080a] border-b border-[#22222a] flex items-center justify-between">
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
              <h3 className="font-heading font-bold text-lg text-white">
                Request a Formal Security Proposal
              </h3>
              <p className="text-xs text-zinc-400">
                Official Tender & Security Service Contract Specification
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

        {/* PROGRESS STEPPER */}
        {!submitted && (
          <div className="bg-zinc-950 px-6 py-2 border-b border-zinc-800 flex items-center justify-between text-[11px]">
            <span className="font-tech text-zinc-400">
              STEP {step} OF 5: {
                step === 1 ? 'Client Info' : 
                step === 2 ? 'Site Location' : 
                step === 3 ? 'Security Profile' : 
                step === 4 ? 'Risk & Threat Scope' : 'Review & Document Upload'
              }
            </span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span
                  key={s}
                  className={`w-5 h-1.5 rounded-full ${step >= s ? 'bg-[#C89B2C]' : 'bg-zinc-800'}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* CONTENT */}
        <div className="p-6 max-h-[72vh] overflow-y-auto text-xs">
          {!submitted ? (
            <form id="proposal-form" onSubmit={handleSubmit} className="space-y-4">
              
              {/* STEP 1: CLIENT INFORMATION */}
              {step === 1 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-zinc-200 text-sm pb-1 border-b border-zinc-800">
                    Step 1: Client & Management Contact Information
                  </h4>
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sante Barley Logistics or Eurotel Hotel Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Position / Designation</label>
                      <input
                        type="text"
                        placeholder="e.g. Property Manager / VP Operations"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.ph"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Contact Number (Mobile / Landline) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0917-XXX-XXXX or (045) XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: LOCATION */}
              {step === 2 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-zinc-200 text-sm pb-1 border-b border-zinc-800">
                    Step 2: Facility Location & Deployment Ground
                  </h4>
                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Site / Facility Address *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Specific building number, street name, subdivision / industrial estate"
                      value={formData.siteAddress}
                      onChange={(e) => setFormData({ ...formData, siteAddress: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Municipality / City *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mabalacat, Pasig, Dasmariñas"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Province *</label>
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                      >
                        {provinces.map((prov) => (
                          <option key={prov} value={prov}>{prov}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: SECURITY REQUIREMENTS */}
              {step === 3 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-zinc-200 text-sm pb-1 border-b border-zinc-800">
                    Step 3: Guard Complement & Service Specifications
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Facility Type</label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                      >
                        <option>Industrial Plant & Warehouse</option>
                        <option>Commercial Mall & Shopping Center</option>
                        <option>Gaming Venue & Casino</option>
                        <option>Residential Subdivision / Gated Community</option>
                        <option>High-Rise Condominium</option>
                        <option>Corporate Office / BPO Facility</option>
                        <option>Hospital & Medical Center</option>
                        <option>Construction Site</option>
                        <option>Executive VIP Escort</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Primary Service Focus</label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                      >
                        <option>Uniformed Guard Services</option>
                        <option>24/7 Mobile Motorized Patrol</option>
                        <option>Emergency Response Team (ERT)</option>
                        <option>CCTV Control Room Management</option>
                        <option>Access Control & Gatekeeper Sentinel</option>
                        <option>VIP Close Protection Escort</option>
                        <option>Comprehensive Integrated Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Estimated Guards</label>
                      <input
                        type="number"
                        min={1}
                        max={100}
                        value={formData.guardsCount}
                        onChange={(e) => setFormData({ ...formData, guardsCount: parseInt(e.target.value) || 1 })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white font-tech focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Armed / Unarmed Post</label>
                      <select
                        value={formData.armedGuards}
                        onChange={(e) => setFormData({ ...formData, armedGuards: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                      >
                        <option>Armed Guards (Licensed Firearms)</option>
                        <option>Unarmed Guards (Defensive Equipment Only)</option>
                        <option>Mixed (Armed at Ingress, Unarmed Concierge)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Shift Duration</label>
                      <select
                        value={formData.shiftRequirement}
                        onChange={(e) => setFormData({ ...formData, shiftRequirement: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                      >
                        <option>12 Hours (2-Shift System 24/7)</option>
                        <option>8 Hours (3-Shift System 24/7)</option>
                        <option>12 Hours Day Duty Only</option>
                        <option>12 Hours Night Duty Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Preferred Deployment Target Date</label>
                    <input
                      type="date"
                      value={formData.deploymentDate}
                      onChange={(e) => setFormData({ ...formData, deploymentDate: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: RISK INFORMATION */}
              {step === 4 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-zinc-200 text-sm pb-1 border-b border-zinc-800">
                    Step 4: Risk Parameters & Threat Assessment
                  </h4>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Primary Security Concerns & Priorities</label>
                    <textarea
                      rows={3}
                      placeholder="Describe existing vulnerabilities: e.g. Night trespassers along perimeter fence, employee pilferage at loading bays, or visitor congestion at lobby."
                      value={formData.primaryConcerns}
                      onChange={(e) => setFormData({ ...formData, primaryConcerns: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Number of Entry / Exit Gates</label>
                      <input
                        type="text"
                        placeholder="e.g. 2 Vehicle Gates, 1 Pedestrian Turnstile"
                        value={formData.accessPoints}
                        onChange={(e) => setFormData({ ...formData, accessPoints: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Approximate Facility Size</label>
                      <input
                        type="text"
                        placeholder="e.g. 15,000 sqm or 8-storey tower"
                        value={formData.facilitySize}
                        onChange={(e) => setFormData({ ...formData, facilitySize: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Existing Security Systems on Site</label>
                    <input
                      type="text"
                      placeholder="e.g. 16 IP Cameras, Biometrics at HR, Guardhouse Boom Barrier"
                      value={formData.existingSystems}
                      onChange={(e) => setFormData({ ...formData, existingSystems: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: DOCUMENTS & SUBMISSION */}
              {step === 5 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-zinc-200 text-sm pb-1 border-b border-zinc-800">
                    Step 5: Optional RFP / Tender Document Upload & Review
                  </h4>

                  <div className="p-4 border-2 border-dashed border-zinc-700 hover:border-[#C89B2C] rounded-lg text-center bg-zinc-900/40 cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto text-[#C89B2C] mb-2" />
                    <p className="text-zinc-200 font-medium">Upload RFP, TOR, or Facility Site Plan</p>
                    <p className="text-zinc-500 text-[10px] mt-0.5">Supports PDF, DOCX, JPG, PNG (Max 25MB)</p>
                    <input
                      type="file"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFormData({ ...formData, fileName: e.target.files[0].name });
                        }
                      }}
                      className="hidden"
                      id="rfp-upload"
                    />
                    <label
                      htmlFor="rfp-upload"
                      className="inline-block mt-3 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded cursor-pointer text-xs"
                    >
                      {formData.fileName ? `Selected: ${formData.fileName}` : 'Choose File from Computer'}
                    </label>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Additional Scope Notes</label>
                    <textarea
                      rows={2}
                      placeholder="Any specific tender submission deadlines, board meeting dates, or special clauses."
                      value={formData.scopeOfWorkNotes}
                      onChange={(e) => setFormData({ ...formData, scopeOfWorkNotes: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-zinc-900/90 border border-zinc-800 rounded space-y-2">
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentAgreed}
                        onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
                        className="mt-0.5 rounded border-zinc-700 text-[#C89B2C] focus:ring-[#C89B2C] bg-zinc-800"
                      />
                      <span className="text-zinc-300 text-[11px] leading-snug">
                        I consent to NCVL Security Agency processing the information submitted through this form for purposes of evaluating our security requirements and preparing a formal proposal in accordance with the Philippine Data Privacy Act (RA 10173).
                      </span>
                    </label>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* SUBMITTED SUCCESS VIEW */
            <div className="text-center py-8 space-y-4">
              <div className="w-20 h-20 mx-auto rounded-sm overflow-hidden border border-amber-500/40 p-1 bg-black shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center">
                <img 
                  src={AGENCY_ASSETS.logo} 
                  alt="NCVL Security Agency Official Crest" 
                  referrerPolicy="no-referrer" 
                  className="w-full h-full object-contain" 
                />
              </div>

              <h3 className="font-heading font-bold text-xl text-white">
                Proposal Request Successfully Logged
              </h3>

              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg max-w-sm mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Proposal Tracking Code:</span>
                  <span className="font-tech font-bold text-[#E2BC58]">{referenceCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Client / Company:</span>
                  <span className="text-zinc-200">{formData.companyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Facility Location:</span>
                  <span className="text-zinc-200">{formData.city}, {formData.province}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Requested Postings:</span>
                  <span className="text-zinc-200 font-semibold">{formData.guardsCount} Guards ({formData.shiftRequirement})</span>
                </div>
              </div>

              <p className="text-zinc-400 text-xs max-w-md mx-auto leading-relaxed">
                Thank you. Your security requirement has been submitted to 
                <strong> NCVL Security Agency Executive Management</strong> for review. 
                Our Operations General Manager will prepare the official contract rate 
                breakdown and schedule a site vulnerability audit.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <a
                  href={`tel:${COMPANY_PROFILE.primaryPhones[0].replace(/[^0-9]/g, '')}`}
                  className="px-4 py-2.5 bg-zinc-900 border border-zinc-700 hover:border-[#C89B2C] text-zinc-200 rounded text-xs font-semibold flex items-center justify-center"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-[#C89B2C]" />
                  Direct Hotline: (045) 9341-494
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#C89B2C] hover:bg-[#E2BC58] text-black font-bold uppercase tracking-wider rounded text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER CONTROLS */}
        {!submitted && (
          <div className="px-6 py-4 bg-[#08080a] border-t border-[#22222a] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-zinc-900 border border-zinc-700 text-zinc-300 font-medium rounded hover:bg-zinc-800 text-xs"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone)) {
                    alert('Please complete all required fields in Step 1.');
                    return;
                  }
                  if (step === 2 && (!formData.siteAddress || !formData.city)) {
                    alert('Please complete the site address and city in Step 2.');
                    return;
                  }
                  setStep(step + 1);
                }}
                className="px-5 py-2 bg-gradient-to-r from-[#C89B2C] to-[#E2BC58] text-black font-bold uppercase tracking-wider rounded text-xs flex items-center shadow-lg"
              >
                <span>Continue</span>
                <span className="ml-1.5">&rarr;</span>
              </button>
            ) : (
              <button
                type="submit"
                form="proposal-form"
                disabled={!formData.consentAgreed}
                className="px-6 py-2.5 bg-gradient-to-r from-[#C89B2C] to-[#E2BC58] hover:from-[#E2BC58] hover:to-[#C89B2C] text-black font-bold uppercase tracking-wider rounded text-xs flex items-center shadow-lg disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5 mr-2" />
                Submit Formal Proposal Request
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
