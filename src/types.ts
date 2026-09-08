export interface Product {
  id: string;
  name: string;
  category: 'surveillance' | 'access-control' | 'communication' | 'tactical-gear' | 'emergency-systems';
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  inStock: boolean;
  leadTime: string;
  commercialWarranty: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  withInstallation?: boolean;
}

export interface SecurityService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  suitableFor: string[];
  capabilities?: string[];
}

export interface ClientRecord {
  name: string;
  location: string;
  category?: 'Gaming & Entertainment' | 'Hotels & Resorts' | 'Corporate & Industrial' | 'Residential & Subdivisions' | 'Retail & Commercial' | 'Institutions & Education';
  industry?: string;
  scope?: string;
  description?: string;
  branches?: string[];
}

export interface LeadershipMember {
  name: string;
  title: string;
  role?: string;
  credentials: string[];
  department?: string;
  bio: string;
}

export interface OfficeLocation {
  id: string;
  type: 'Head Office' | 'Satellite Office' | 'Historic Founding Site';
  name: string;
  address: string;
  city: string;
  province: string;
  phones: string[];
  mobiles?: string[];
  email: string;
  coordinates?: { lat: number; lng: number };
  operatingHours?: string;
  hours?: string;
}

export interface ProposalRequest {
  id: string;
  createdAt: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  facilityType: string;
  address: string;
  city: string;
  province: string;
  guardsRequired: number;
  shiftHours: '8' | '12' | '24';
  armedGuards: boolean;
  scopeOfService: string[];
  primaryConcerns: string;
  estimatedBudget?: string;
  status: 'pending' | 'reviewed' | 'dispatched';
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-Time' | 'Contract';
  description?: string;
  slots?: number;
  requirements: string[];
  responsibilities?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
}

export interface PatrolMarker {
  id: string;
  callSign: string;
  type: 'patrol-cruiser' | 'rapid-ert' | 'command-hq' | 'secured-facility' | 'k9-unit';
  sector: 'Central Luzon' | 'Metro Manila' | 'Subic / Bataan' | 'Calabarzon';
  x: number; // 0 to 100 percentage inside radar grid
  y: number; // 0 to 100 percentage inside radar grid
  lat: number;
  lng: number;
  status: 'Patrolling' | 'Standby / High-Alert' | 'Dispatched' | 'Secured Perimeter' | 'Escort En Route';
  speedKmH?: number;
  personnel?: string;
  onboardGear?: string[];
  vehicleModel?: string;
  facilityName?: string;
  threatLevel?: 'Normal' | 'Elevated' | 'Drill Active';
  lastPing: string;
  responseRadiusKm: number;
}

export interface IncidentAlert {
  id: string;
  title: string;
  sector: string;
  severity: 'CRITICAL' | 'ELEVATED' | 'ROUTINE';
  timestamp: string;
  targetMarkerId: string;
  description: string;
  etaSeconds: number;
  assignedUnitId: string;
}
