import { ClientRecord, LeadershipMember, OfficeLocation, Product, SecurityService, JobOpening } from '../types';
import { AGENCY_ASSETS } from './assets';

export const COMPANY_PROFILE = {
  name: 'NCVL SECURITY AGENCY',
  tagline: 'Your Security and Safety is Our Primary Concern.',
  militaryVision: 'Do Good, Look Good, And Feel Good',
  established: '2014',
  accreditationSummary: 'Licensed under PNP-SOSIA & Registered with PADPAO Region III / National',
  pnpSosaiLicense: 'PSA-WGS-M00542-2024 / RCSU-NCR CRPSA-20261402-002',
  dtiNumber: '1177898',
  headquarters: 'Block 8 Lot 3 Marivic St., Brgy. Tabun, Xevera, Mabalacat, Pampanga',
  primaryEmail: 'ncvl.agency@gmail.com',
  primaryPhones: ['045-9341-494', '045-934-1494', '0981-681-0048', '0995-857-0101', '0938-142-0048'],
};

export const CORE_VALUES = [
  {
    name: 'PEOPLE',
    desc: 'Our employees, customers, and community citizens always take the highest precedence in our value chain.',
    highlight: 'Dignity & Welfare'
  },
  {
    name: 'INTEGRITY',
    desc: 'Individual and management ethics guide all our business dealings. Uncompromising standards of trust.',
    highlight: 'Ethical Standard'
  },
  {
    name: 'DEVELOPMENT',
    desc: 'Continuous tactical training through our Guard Skills Development Training Academy to elevate security standards.',
    highlight: 'Continuous Growth'
  },
  {
    name: 'COMMUNITY',
    desc: 'Active civic involvement supporting work-family-community-life balance across all deployed localities.',
    highlight: 'Civic Responsibility'
  }
];

export const OPERATIONAL_PRINCIPLES = [
  { principle: 'Respect', description: 'Consistent and unconditional respect for every individual and property.' },
  { principle: 'Professionalism', description: 'Rigorous military-inspired discipline, polished appearance, and standardized conduct.' },
  { principle: 'Prudence', description: 'Decisive, thoughtful action in all critical situations and emergency interventions.' },
  { principle: 'Dependability', description: 'Building client confidence through 24/7 responsiveness and steadfast reliability.' },
  { principle: 'Diligent Protection', description: 'Vigilant deterrence guarding facilities, financial assets, personnel, and data.' }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: 'Mr. Nhick D. Mendoza, CSP, CSMS',
    title: 'Managing Director / CEO',
    credentials: ['Certified Security Professional (CSP)', 'Certified Security Management Specialist (CSMS)', 'Philippine Air Force (PAF) Affiliate', 'FALEO-SF PET Certified'],
    department: 'Executive Board',
    bio: 'Pioneered NCVL Security Agency with a military-rooted vision of professionalized private security, disciplined training, and unwavering client advocacy.'
  },
  {
    name: 'Ms. Cindy Mahilom Evangelista',
    title: 'Licensee & Directress in Finance',
    credentials: ['Registered Agency Licensee', 'PADPAO Accredited Officer', 'DTI Certified Sole Proprietor', 'Financial Oversight Officer'],
    department: 'Board of Directors & Finance',
    bio: 'Directs overall statutory compliance, licensing governance with PNP-SOSIA, financial solvency, and full employee benefit remittance (SSS, PhilHealth, Pag-IBIG).'
  },
  {
    name: 'Ms. Bianca E. Mendoza, CSMS',
    title: 'Deputy Directress in Finance',
    credentials: ['Certified Security Management Specialist (CSMS)', 'Fiscal Operations Manager'],
    department: 'Board of Directors',
    bio: 'Oversees logistics allocation, corporate contract budgeting, open-book transparency, and welfare operations for deployed security teams.'
  },
  {
    name: 'Mr. Arnold B. Asadon, CSP, CSMS',
    title: 'General Manager',
    credentials: ['Certified Security Professional (CSP)', 'Certified Security Management Specialist (CSMS)', 'Operational Logistics Strategist'],
    department: 'General Management',
    bio: 'Coordinates nationwide branch deployments, client vulnerability audits, and daily field inspection schedules across Luzon and regional operations.'
  },
  {
    name: 'Mr. Gilbert S. Suarez, PNP, CSP, CSMS, BOSH, CST',
    title: 'Senior Vice President for Operations',
    credentials: ['Certified Security Trainer (CST)', 'Basic Occupational Safety & Health (BOSH)', 'CSP & CSMS Certified', 'Ex-PNP Specialist'],
    department: 'Tactical Operations',
    bio: 'Heads tactical readiness, Emergency Response Training (ERT), industrial hygiene protocols, and security contingency action plans.'
  },
  {
    name: 'Col. Jun Funcion, CSP (Ret. PNP)',
    title: 'Senior Security Consultant',
    credentials: ['Retired Police Colonel (PNP)', 'Certified Security Professional (CSP)', 'Counter-Insurgency Specialist'],
    department: 'Advisory Council',
    bio: 'Advises NCVL leadership on crisis coordination, high-risk executive protection, anti-pilferage investigations, and law enforcement synergy.'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'hq-mabalacat',
    type: 'Head Office',
    name: 'NCVL Mabalacat Headquarters',
    address: 'Block 8 Lot 3 Marivic Street, Barangay Tabun, Xevera Subdivision',
    city: 'Mabalacat City',
    province: 'Pampanga',
    phones: ['(045) 9341-494', '(045) 934-1494'],
    mobiles: ['0981-681-0048', '0995-857-0101', '0938-142-0048'],
    email: 'ncvl.agency@gmail.com',
    operatingHours: '24/7 Operations Command & Dispatch'
  },
  {
    id: 'sat-ilocos',
    type: 'Satellite Office',
    name: 'Northern Luzon Satellite Command',
    address: 'Brgy. 15 San Jose Poblacion, 126 Leano Street',
    city: 'San Nicolas',
    province: 'Ilocos Norte',
    phones: ['(045) 308-798'],
    mobiles: ['0938-142-0048'],
    email: 'ncvl.agency@gmail.com',
    operatingHours: 'Monday - Saturday: 8:00 AM - 6:00 PM (24/7 Field Dispatch)'
  },
  {
    id: 'sat-dasma',
    type: 'Satellite Office',
    name: 'Cavite Regional Station',
    address: '469 Don Placido Avenue, Barangay Sabang',
    city: 'Dasmariñas City',
    province: 'Cavite',
    phones: ['(046) 420-9576'],
    mobiles: ['0922-408-8909', '0938-142-0048'],
    email: 'ncvl.agency@gmail.com',
    operatingHours: '24/7 Field Support & Roving Inspection'
  },
  {
    id: 'sat-carmona',
    type: 'Satellite Office',
    name: 'Carmona Industrial Hub',
    address: 'Block 4 Phase 3B, Milagrosa',
    city: 'Carmona',
    province: 'Cavite',
    phones: ['(046) 420-9576'],
    mobiles: ['0938-142-0048', '0922-408-8909'],
    email: 'ncvl.agency@gmail.com',
    operatingHours: 'Monday - Saturday: 8:00 AM - 5:00 PM'
  },
  {
    id: 'sat-caloocan',
    type: 'Satellite Office',
    name: 'Metro Manila North Command',
    address: '2245 Zapote Road, Camarin',
    city: 'North Caloocan City',
    province: 'Metro Manila',
    phones: ['(02) 8420-9576'],
    mobiles: ['0981-681-0048'],
    email: 'ncvl.agency@gmail.com',
    operatingHours: '24/7 Dispatch and Roving Supervisors'
  },
  {
    id: 'hist-navotas',
    type: 'Historic Founding Site',
    name: 'Historic Navotas Operations Base',
    address: 'No. 101 Fisherman Village, Brgy. Daanghari',
    city: 'Navotas City',
    province: 'Metro Manila',
    phones: ['(02) 8420-9576'],
    mobiles: ['0938-142-0048'],
    email: 'ncvl.agency@gmail.com',
    operatingHours: 'Administrative Archive & Historic Record'
  }
];

export const VERIFIED_CLIENT_PORTFOLIO: ClientRecord[] = [
  { name: 'Bingo Plus / Leisure & Resorts World Corp (LRWC)', location: '30+ Outlets Nationwide (QC, Manila, Cavite, Batangas, Bulacan, Rizal)', category: 'Gaming & Entertainment', scope: 'Uniformed Security, Asset Protection & Crowd Monitoring' },
  { name: 'Hotel Sogo (Quezon Avenue, Banawe QC, Trinoma)', location: 'Metro Manila', category: 'Hotels & Resorts', scope: 'Access Control, Customer Safety & Night Patrol' },
  { name: 'Eurotel (Boracay, Las Piñas, North EDSA)', location: 'Aklan & Metro Manila', category: 'Hotels & Resorts', scope: 'Hospitality Security, Front Desk Concierge & VIP Escort' },
  { name: 'Sante Barley Corporate Headquarters', location: 'Ortigas Center, Pasig City', category: 'Corporate & Industrial', scope: 'Corporate Access Management & Executive Floor Security' },
  { name: 'Sante Barley Mega Warehouse & Logistics Hub', location: 'Silang, Cavite', category: 'Corporate & Industrial', scope: 'Perimeter Logistics, Cargo Verification & 24/7 Guardhouse' },
  { name: 'Chemacor Marketing Corporation', location: 'Caloocan City', category: 'Corporate & Industrial', scope: 'Industrial Compound Protection & Visitor Control' },
  { name: 'Do-All Metal Corporation', location: 'Navotas City & Balagtas, Bulacan', category: 'Corporate & Industrial', scope: 'Manufacturing Facility Security, Static Posts & Metal Checking' },
  { name: 'Raymond Transport Bus Terminals', location: 'Sampaloc & Cubao, Manila', category: 'Retail & Commercial', scope: 'Terminal Passenger Safety, Dispatch Screening & Baggage Checks' },
  { name: 'Parkwood Village Homeowners Association', location: 'Pasig City & Las Piñas City', category: 'Residential & Subdivisions', scope: 'Gated Subdivision Security, Vehicle Decal Screening & Night Rover' },
  { name: 'Greensborough Subdivision', location: 'Dasmariñas, Cavite', category: 'Residential & Subdivisions', scope: '24/7 Gatehouse Sentinel & Neighborhood Bicycle/Motorcycle Patrol' },
  { name: 'Xevera Subdivision Communities', location: 'Mabalacat City, Pampanga', category: 'Residential & Subdivisions', scope: 'Large Residential Township Protection & Clubhouse Security' },
  { name: 'Terraverde Residences & Crystal Place', location: 'Carmona & Imus, Cavite', category: 'Residential & Subdivisions', scope: 'Residential Enclave Security & Perimeter Integrity Checks' },
  { name: 'Courtyards at Golden Horizon & Pacifica Homes', location: 'Trece Martires & General Trias, Cavite', category: 'Residential & Subdivisions', scope: 'Phase Access Gates & 24/7 Mobile Patrol' },
  { name: 'E-Games PAGCOR & AB Leisure Exponent', location: 'Maceda, Pandacan, JT Mall Manila & Baguio', category: 'Gaming & Entertainment', scope: 'High-Value Cash Vault Escort & Gaming Floor Surveillance' },
  { name: 'Icebergs Food Concepts Inc.', location: 'Quezon City & Banawe', category: 'Retail & Commercial', scope: 'Commercial Dining Security & Loss Prevention' },
  { name: 'Mang Inasal Commercial Branch', location: 'Rosario, Batangas', category: 'Retail & Commercial', scope: 'Storefront Patrol & Customer Traffic Direction' },
  { name: 'El Jardin de Zaida Luxury Resort', location: 'San Juan, Batangas', category: 'Hotels & Resorts', scope: 'Eco-Resort Perimeter Guarding & Guest Haven Security' },
  { name: 'Samuel Christian College', location: 'Cavite', category: 'Institutions & Education', scope: 'Campus Perimeter, Student Safety & Gate Control' }
];

export const SECURITY_SERVICES_LIST: SecurityService[] = [
  {
    id: 'uniformed-guard',
    title: 'Uniformed Security Services',
    shortDesc: 'Disciplined, licensed security officers strictly following prescribed general orders with immaculate military bearing.',
    fullDesc: 'NCVL uniformed guards are rigorously trained at our own Guard Skills Development Training Academy. Outfitted in clean, pressed uniforms with polished equipment, they represent your establishment with dignity, deterrence, and authority.',
    iconName: 'Shield',
    features: ['Standard 8-hour or 12-hour duty tours', 'Mandatory clean-shaven military grooming standard', 'Licensed under PNP-SOSIA with complete background verification', 'Equipped with communications and defensive implements'],
    suitableFor: ['Corporate Headquarters', 'Commercial Malls', 'Hospitals', 'Residential Villages', 'Financial Institutions'],
    capabilities: ['Static post sentry', 'Customer hospitality & deterrence', 'First Aid and emergency evacuation assistance']
  },
  {
    id: 'patrol-response',
    title: '24/7 Mobile Patrol & Inspection',
    shortDesc: 'Continuous roving patrols utilizing marked patrol cars, motorcycles, and roving inspection supervisors.',
    fullDesc: 'Our operations division mandates 24-hour unannounced field inspections to audit sentry vigilance. Roving motorized units deter theft, check perimeter lighting, and respond immediately to triggered alarms.',
    iconName: 'Car',
    features: ['High-visibility motorized roving patrols', 'Real-time GPS tracking and patrol logging', 'Supervisory unannounced inspection rounds', 'Rapid dispatch for distress calls'],
    suitableFor: ['Industrial Parks', 'Sprawling Subdivisions', 'Multi-Facility Commercial Grounds', 'Construction Sites'],
    capabilities: ['Perimeter sweep', 'Lock-up security checks', 'After-hours unauthorized intrusion response']
  },
  {
    id: 'corporate-vip',
    title: 'Executive Protection & VIP Escorts',
    shortDesc: 'Discreet, highly skilled personal security specialists for high-net-worth individuals, executives, and foreign delegations.',
    fullDesc: 'Our VIP protective officers (wearing formal Barong Tagalog or tactical corporate suits) excel in advance route reconnaissance, threat assessment, secure motorcade transit, and low-profile close protection.',
    iconName: 'UserCheck',
    features: ['Barong Tagalog or corporate suit dress codes', 'Advanced tactical driving and defensive navigation', 'Close protection certified security management (CSMS)', 'Discretion and confidentiality agreements'],
    suitableFor: ['Corporate CEOs & Directors', 'International Dignitaries', 'Celebrities & Athletes', 'Courtroom or Sensitive Proceedings'],
    capabilities: ['Route reconnaissance', 'Venue sweep and exit coordination', 'Emergency evacuation protocols']
  },
  {
    id: 'ert-emergency',
    title: 'Emergency Response Team (ERT)',
    shortDesc: 'Rapid intervention specialists trained in bomb threats, civil unrest, fire evacuation, and active disaster response.',
    fullDesc: 'Proven in rigorous drills (including PAGCOR and high-occupancy facility certifications), our ERT operates with specialized ballistic protection, breach containment tactics, and medical first-aid triage.',
    iconName: 'Flame',
    features: ['Tactical emergency gear and protective equipment', 'Certified in fire and seismic evacuation coordination', 'Crisis de-escalation and riot containment', 'Coordination with BFP, PNP, and local rescue units'],
    suitableFor: ['Casinos & Gaming Arenas', 'High-Rise Office Towers', 'Mass Event Venues', 'Heavy Industrial Compounds'],
    capabilities: ['Active disturbance control', 'Triage and medical first responder care', 'Emergency building evacuation management']
  },
  {
    id: 'access-control',
    title: 'Access Control & Gatehouse Sentinel',
    shortDesc: 'Comprehensive visitor logging, vehicle inspection, badge validation, and barrier operations.',
    fullDesc: 'Serving major gated communities and industrial logistics yards, our officers conduct vehicle inspections with under-carriage mirrors, document visitor IDs, issue passes, and manage boom barrier systems.',
    iconName: 'Key',
    features: ['Under-vehicle inspection mirror sweeps', 'Digital or physical visitor entry logbooks', 'Delivery manifest verification and seal checks', 'Truck weighing and parking management'],
    suitableFor: ['Logistics Hubs', 'Residential Gated Enclaves', 'Warehouses', 'Secluded Facilities'],
    capabilities: ['Vehicle cargo inspection', 'Contraband detection', 'Gatehouse record archiving']
  },
  {
    id: 'surveillance-control',
    title: 'CCTV Control Room & AI Monitoring',
    shortDesc: 'Vigilant monitoring of facility video feeds, access alarm panels, and automated intrusion alerts.',
    fullDesc: 'Stationed in centralized command rooms, our operators maintain active observation over facility video walls, tracking suspicious perimeter movements and coordinating with ground guards via tactical radio.',
    iconName: 'Eye',
    features: ['Trained control room operators (CRO)', '24/7 video recording review and incident logging', 'Immediate radio dispatch to on-duty ground sentries', 'Alarm verification to prevent false calls'],
    suitableFor: ['Hotels', 'BPO Buildings', 'Supermarkets', 'Large Industrial Compounds'],
    capabilities: ['Live footage audit', 'Loss prevention surveillance', 'Evidence extraction for lawful proceedings']
  }
];

// E-COMMERCE PRODUCTS FOR SECURITY AGENCY CLIENTS & CORPORATE FACILITIES
export const SECURITY_PRODUCTS: Product[] = [
  {
    id: 'ncvl-cctv-4k-ptz',
    name: 'NCVL Sentinel 4K AI Ultra-HD PTZ Dome Camera',
    category: 'surveillance',
    price: 34500,
    rating: 4.9,
    reviewCount: 42,
    image: AGENCY_ASSETS.cctvCamera,
    badge: 'Agency Choice',
    description: 'Commercial-grade 4K 8MP motorized Pan-Tilt-Zoom security camera engineered for wide-area corporate monitoring, perimeter fences, and high-traffic shopping centers.',
    features: [
      '4K (3840 x 2160) Ultra-HD sensor with 32x Optical Zoom',
      'Starlight night vision & 150-meter smart infrared illuminators',
      'AI Deep Learning: Human and vehicle perimeter classification',
      'Vandal-resistant IP67 / IK10 weatherproof metallic alloy housing',
      'Full integration with NCVL 24/7 Remote Monitoring Command'
    ],
    specs: {
      'Resolution': '8 Megapixels (4K UHD)',
      'Zoom': '32x Optical, 16x Digital',
      'Night Vision': 'Up to 150 meters with adaptive Smart IR',
      'Protection Rating': 'IP67 Weatherproof & IK10 Vandal-Proof',
      'Power Source': 'PoE+ (Power over Ethernet) or 24V AC',
      'Connectivity': 'ONVIF Profile S/G/T compliant'
    },
    inStock: true,
    leadTime: 'Immediate dispatch / 1-2 days Metro Manila & Central Luzon',
    commercialWarranty: '3 Years Full Replacement Warranty'
  },
  {
    id: 'ncvl-walkthrough-scanner',
    name: 'NCVL Multi-Zone Walkthrough Metal Detector Archway',
    category: 'access-control',
    price: 89000,
    rating: 5.0,
    reviewCount: 28,
    image: AGENCY_ASSETS.metalDetector,
    badge: 'High Security',
    description: 'Pinpoint 18-zone archway detection portal with dual-side LED indicators for malls, hotels, casino gaming halls, and educational institutions.',
    features: [
      '18 distinct pinpoint detection zones for head-to-toe scanning',
      'Digital passenger count and alarm frequency counter',
      'Adjustable 100-level sensitivity per zone (avoids false coin alarms)',
      'Tamper-proof password lock and audible volume controls',
      'Includes 2x NCVL handheld security wand scanners'
    ],
    specs: {
      'Detection Zones': '18 Independent Matrix Zones',
      'Throughput': '60 persons per minute',
      'Interference Shielding': 'Digital DSP anti-electromagnetic interference',
      'Dimensions': '2200mm (H) x 820mm (W) x 500mm (D)',
      'Power': '110V - 240V AC with backup battery slot',
      'Standard': 'Meets international aviation and police screening norms'
    },
    inStock: true,
    leadTime: 'Stock available for immediate delivery & on-site assembly',
    commercialWarranty: '2 Years Corporate Warranty & Calibration Support'
  },
  {
    id: 'ncvl-motorola-radio-kit',
    name: 'NCVL Tactical Motorola Digital Radio & Body-Cam Kit (Pair)',
    category: 'communication',
    price: 18900,
    rating: 4.8,
    reviewCount: 65,
    image: AGENCY_ASSETS.radioComms,
    badge: 'Essential Gear',
    description: 'Battle-proven digital two-way communication kit paired with night-vision 1080p body-worn camera with encrypted storage for security teams.',
    features: [
      'Long-range 5W UHF digital frequency with private encrypted channels',
      'Noise-cancelling microphone and heavy-duty acoustic earpiece',
      '1080p 60fps security body camera with tamper-proof internal memory',
      'Shock-proof drop rating (up to 2 meters) and IP66 water resistance',
      'Dual-dock rapid charging cradle with 24-hour battery endurance'
    ],
    specs: {
      'Frequency Band': 'UHF 400-470 MHz (Pre-programmed agency frequencies)',
      'RF Power Output': '5 Watts High / 1 Watt Low switchable',
      'Body Cam Storage': '64GB Tamper-proof AES-256 encrypted flash',
      'Battery Life': 'Up to 26 hours duty cycle per charge',
      'Included in Box': '2x Radios, 2x Body Cams, 2x Earpieces, Dual Dock'
    },
    inStock: true,
    leadTime: 'In stock, ships within 24 hours',
    commercialWarranty: '2 Years Manufacturer Replacement Warranty'
  },
  {
    id: 'ncvl-perimeter-alarm-hub',
    name: 'NCVL Industrial Perimeter Laser & Strobe Siren System',
    category: 'emergency-systems',
    price: 42000,
    rating: 4.7,
    reviewCount: 19,
    image: AGENCY_ASSETS.patrolTruck,
    badge: 'Facility Security',
    description: 'Quad-beam photoelectric infrared perimeter tripwire system with wireless cellular dialer and 120dB strobe siren for compounds and warehouses.',
    features: [
      'Quad-beam laser barrier up to 250m perimeter distance',
      'Immunity to birds, leaves, and rain (dual beam interruption required)',
      '4G LTE cellular SMS / voice call automatic alert transmitter',
      'Integrated solar charging panel with 7-day battery autonomy'
    ],
    specs: {
      'Detection Range': 'Up to 250 meters outdoor',
      'Beam Type': 'Quad Infrared Pulsed Beams',
      'Alert Mechanism': '120dB Strobe Siren + Automated 4G GSM dialer',
      'Operating Temp': '-20°C to +65°C weatherproof'
    },
    inStock: true,
    leadTime: '2-4 business days with custom perimeter wiring guide',
    commercialWarranty: '2 Years Warranty'
  },
  {
    id: 'ncvl-handheld-wand-pack',
    name: 'NCVL High-Sensitivity Handheld Security Scanner (Set of 4)',
    category: 'access-control',
    price: 8400,
    rating: 4.9,
    reviewCount: 84,
    image: AGENCY_ASSETS.metalDetector,
    badge: 'Best Seller',
    description: 'Ergonomic security wand with vibration and audio alarm modes for guardhouses, night clubs, events, and school entrances.',
    features: [
      'High sensitivity detecting knives, concealed weapons, and small blades',
      'Selectable silent vibration or high-pitch buzzer alarm',
      'Rechargeable 9V battery with micro-USB port charging',
      'Impact-resistant ABS reinforced polymer body'
    ],
    specs: {
      'Alarm Types': 'Sound & LED / Vibration & LED',
      'Battery Type': '9V Standard or Rechargeable',
      'Weight': '350 grams per unit'
    },
    inStock: true,
    leadTime: 'Immediate same-day dispatch available',
    commercialWarranty: '1 Year Warranty'
  },
  {
    id: 'ncvl-guard-tactical-kit',
    name: 'NCVL Complete Guardhouse Sentry & Duty Equipment Set',
    category: 'tactical-gear',
    price: 15500,
    rating: 4.9,
    reviewCount: 37,
    image: AGENCY_ASSETS.vipSuv,
    badge: 'Duty Package',
    description: 'Complete station outfitting including under-vehicle mirror with LED flashlight, traffic wands, heavy-duty duty belt, metal detector wand, and first-aid response pack.',
    features: [
      'Curved acrylic under-vehicle inspection mirror with caster wheels',
      '2x Rechargeable high-visibility magnetic LED traffic safety wands',
      'Tactical heavy-duty nylon duty belt with holster and pouch slots',
      'Comprehensive emergency trauma first aid kit'
    ],
    specs: {
      'Mirror Diameter': '30cm Acrylic Convex with 120cm telescopic handle',
      'Traffic Wands': 'Red/Green Dual Mode 500m night visibility',
      'Standards': 'Standard PNP Security Guard Outfitting Compliant'
    },
    inStock: true,
    leadTime: 'Ships next business day',
    commercialWarranty: '1 Year Warranty'
  }
];

export const ASSESSMENT_STEPS = [
  { step: 1, title: 'Preliminary Consultation & Facility Profile', description: 'Reviewing operational floorplans, business hours, asset values, and baseline vulnerability indicators.' },
  { step: 2, title: 'On-Site Physical Security Survey', description: 'Inspection of ingress gates, vehicle turnstiles, building perimeters, fence integrity, and blind spots.' },
  { step: 3, title: 'Threat and Vulnerability Analysis', description: 'Identifying high-risk internal pilferage points, trespassing vectors, and emergency evacuation bottlenecks.' },
  { step: 4, title: 'Access Control & Perimeter Evaluation', description: 'Evaluating visitor verification, vehicle inspection procedures, delivery bay manifests, and parking.' },
  { step: 5, title: 'Security Personnel Allocation Analysis', description: 'Calculating the exact guard count, optimal 8h/12h shift schedules, armed sentry points, and roving rovers.' },
  { step: 6, title: 'Electronic Systems & Equipment Review', description: 'Assessing camera line of sight, metal detector calibration, radio dead zones, and panic alarms.' },
  { step: 7, title: 'Comprehensive Assessment Report', description: 'Delivering a detailed written audit documenting existing vulnerabilities and tactical counter-measures.' },
  { step: 8, title: 'Custom Security Proposal & SLA', description: 'Formulating the formal tender proposal with itemized statutory costs and clear performance guarantees.' },
];

export const OFFICIAL_LICENSES = [
  { authority: 'PNP-SOSIA', title: 'License to Operate (LTO)', number: 'PSA-WGS-M00542-2024', validity: 'Oct 17, 2024 – Oct 17, 2029', status: 'Active Regular License' },
  { authority: 'PNP-RCSU NCR', title: 'Certificate of Registration', number: 'CRPSA-20261402-002', validity: 'Oct 17, 2024 – Oct 17, 2029', status: 'Registered & Certified' },
  { authority: 'DTI Philippines', title: 'Certificate of Business Name', number: '1177898', validity: 'Valid to Sept 10, 2029', status: 'Sole Proprietorship' },
  { authority: 'PADPAO', title: 'Philippine Association of Detective & Protective Agency Operators', number: 'Region III & National Chapter', validity: 'Regular Member in Good Standing', status: 'Active Member' },
  { authority: 'DOLE-NCMB', title: 'Certificate of Non-Pending Labor Dispute', number: 'NCMB-R3-CERT-2024', validity: 'Current Annual Period', status: 'Zero Pending Cases' },
  { authority: 'BIR', title: 'Certificate of Registration & Tax Clearance', number: 'Form 2303 / OCN Verified', validity: 'Annual Clearance Active', status: 'Tax Compliant' }
];

export const TRAINING_PROGRAMS = [
  { title: 'Pre-Deployment Briefing & Bearing', desc: 'Mandatory uniform inspection, military grooming, company rules, and client-specific post orders.' },
  { title: 'Emergency Response Training (ERT)', desc: 'Tactical room evacuation, earthquake and fire drills, and disaster hazard mitigation.' },
  { title: 'First Aid & Emergency Medical Care', desc: 'Basic Life Support (BLS), CPR administration, bleeding control, and trauma stabilization.' },
  { title: 'Customer Service & De-escalation', desc: 'Courteous interpersonal skills, resolving disputes calmly, and diplomatic crowd management.' },
  { title: 'Firearms Safety & Marksmanship', desc: 'Responsible firearm handling, disassembly, dry-fire practice, and legal rules on the use of force.' },
  { title: 'Report Writing & Evidence Preservation', desc: 'Accurate blotter entries, incident timeline documentation, and formal court testimony protocol.' },
  { title: 'Physical Fitness & Defensive Tactics', desc: 'Arrest procedures, baton techniques, self-defense disarmament, and conditioning.' },
  { title: 'Access Control & Electronic Scanning', desc: 'Operation of walk-through detectors, handheld wands, and under-vehicle inspection mirrors.' },
  { title: 'CCTV Monitoring & Surveillance Systems', desc: 'Spotting suspicious behavior, pan-tilt-zoom camera tracking, and video record archiving.' },
  { title: 'Radio Procedures & Protocol Discipline', desc: 'Standard phonetic alphabet, emergency code calls, radio silence rules, and call sign discipline.' }
];

export const GALLERY_COLLECTION = [
  { id: 'gal-1', title: 'Armored Emergency Tactical Response Truck', category: 'Mobile Patrol & Vehicles', src: AGENCY_ASSETS.patrolTruck, description: 'Rapid deployment heavy response vehicle equipped with extraction equipment, medical trauma packs, and radio repeaters.' },
  { id: 'gal-2', title: 'VIP Close Protection Escort Unit', category: 'VIP Escort & Protection', src: AGENCY_ASSETS.vipSuv, description: 'Executive security detail providing motorcade security and close bodyguard protection for dignitaries and corporate executives.' },
  { id: 'gal-3', title: '24/7 Mobile Command & Drone Surveillance', category: 'Command Center & Monitoring', src: AGENCY_ASSETS.nightCommand, description: 'Night mobile surveillance center supporting aerial thermal quadcopter drone sweeps over sprawling perimeters.' },
  { id: 'gal-4', title: 'Sentinel 4K Ultra-HD AI Camera Fleet', category: 'Equipment & Hardware', src: AGENCY_ASSETS.cctvCamera, description: 'Commercial-grade optical surveillance systems deployed at high-traffic mall entries and industrial compounds.' },
  { id: 'gal-5', title: 'Walkthrough Multi-Zone Metal Detector Portal', category: 'Equipment & Hardware', src: AGENCY_ASSETS.metalDetector, description: 'High-throughput 18-zone archway detection portal screening ingress points at hotels, gaming halls, and corporate towers.' },
  { id: 'gal-6', title: 'Tactical Radio & Encrypted Communications Fleet', category: 'Equipment & Hardware', src: AGENCY_ASSETS.radioComms, description: 'Over 140 Motorola and high-power commercial two-way radios operating on secured repeater frequencies.' }
];

export const OPERATIONS_SUPERVISION = [
  { title: '24/7 Operations Command & Dispatch', description: 'A centralized communication desk maintaining real-time status oversight of all guards across nationwide posts.' },
  { title: 'Unannounced Roving Field Inspections', description: 'Surprise supervisory checks conducted throughout the day and night (especially 0100H-0430H) to ensure guard alertness.' },
  { title: 'Senior Management Assessment Visits', description: 'Executive visits by the Managing Director, VP for Operations, and Consultants to evaluate client satisfaction.' },
  { title: 'Emergency Response Protocol (ERT)', description: 'Immediate mobile detachment dispatch in case of perimeter incursions, civil commotion, or natural calamities.' },
  { title: 'Formal Blotter & Shift Handover', description: 'Daily documentation of all visitor logs, gate passes, vehicle movements, and incident accounts with clear chain of custody.' },
  { title: 'Encrypted Radio & Tactical Comms', description: 'Fleet of over 140 UHF/VHF two-way radios connected to high-gain repeater masts for uninterrupted communications.' }
];

export const CAREER_VACANCIES: JobOpening[] = [
  {
    id: 'lic-guard',
    title: 'Licensed Security Guard (SG / SO)',
    department: 'Field Operations',
    location: 'Pampanga / Cavite / Metro Manila / Ilocos',
    type: 'Full-Time',
    description: 'Enforcing perimeter ingress, visitor logging, military discipline, and regular roving rounds.',
    slots: 24,
    requirements: [
      'Valid PNP-SOSIA Security Guard License',
      'High School Graduate or College Level',
      'Minimum 5\'6" for males, 5\'2" for females',
      'Clear police, NBI, and barangay clearances',
      'Drug test certified and physically fit'
    ],
    responsibilities: [
      'Enforce facility access control, visitor validation, and logbook entries',
      'Perform regular roving inspection rounds across client premises',
      'Maintain disciplined military bearing, clean-shaven look, and pristine uniform',
      'Coordinate with client safety officers and NCVL area inspectors'
    ]
  },
  {
    id: 'vip-specialist',
    title: 'Executive Protection Specialist / VIP Escort',
    department: 'Special Operations Division',
    location: 'Metro Manila / Clark Freeport Zone',
    type: 'Full-Time',
    description: 'Close protection escort for corporate executives, high-net-worth clients, and foreign dignitaries.',
    slots: 6,
    requirements: [
      'Minimum 3 years close protection or VIP escort experience',
      'Formal background in military, law enforcement, or specialized security training',
      'Advanced tactical driving certification is an advantage',
      'Presentable in Barong Tagalog and executive business attire'
    ],
    responsibilities: [
      'Conduct pre-departure route checks and destination vulnerability assessments',
      'Maintain close bodyguard perimeter guarding for client dignitaries',
      'Coordinate discreet emergency evacuation routes during sudden contingencies'
    ]
  },
  {
    id: 'cctv-operator',
    title: 'Control Room CCTV Operator',
    department: 'Technical & Surveillance',
    location: 'Xevera Mabalacat Command Center',
    type: 'Full-Time',
    description: 'Operating video wall monitors, tracking motion alerts, and coordinating radio dispatch.',
    slots: 4,
    requirements: [
      'Experience in multi-channel CCTV VMS (Video Management Systems)',
      'Basic troubleshooting of IP cameras and NVR network systems',
      'Sharp attention to detail and ability to spot suspicious perimeter actions',
      'Clear verbal communication over UHF two-way radio channels'
    ],
    responsibilities: [
      'Monitor multi-screen video feeds and alarm sensors continuously',
      'Log daily surveillance reports and archive incident footage',
      'Dispatch field patrol guards upon observing unauthorized perimeter movements'
    ]
  }
];
