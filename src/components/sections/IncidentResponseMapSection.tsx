import React, { useState, useEffect, useRef } from 'react';
import { 
  Radio, 
  ShieldAlert, 
  ShieldCheck, 
  Crosshair, 
  Navigation, 
  AlertTriangle, 
  Zap, 
  Clock, 
  Eye, 
  Layers, 
  Play, 
  Pause, 
  RotateCcw, 
  PhoneCall, 
  Car, 
  Building2, 
  Compass, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  Info,
  Maximize2
} from 'lucide-react';
import { PatrolMarker, IncidentAlert } from '../../types';

// TACTICAL PLACEHOLDER LOCATION MARKERS & PATROL ASSETS
const INITIAL_PATROL_MARKERS: PatrolMarker[] = [
  {
    id: 'hq-01',
    callSign: 'CENTRAL-COMMAND-01',
    type: 'command-hq',
    sector: 'Central Luzon',
    x: 50,
    y: 48,
    lat: 15.2163,
    lng: 120.5739,
    status: 'Standby / High-Alert',
    speedKmH: 0,
    personnel: 'Duty Officer, 4 Radio Controllers, 1 ERT Commander',
    onboardGear: ['Base Radio Repeater Station', 'Dual CCTV Video Wall', 'Emergency Arsenal Vault', 'Starlink Satellite Failover'],
    facilityName: 'NCVL Corporate HQ & Central Dispatch (Mabalacat, Pampanga)',
    threatLevel: 'Normal',
    lastPing: 'Just now',
    responseRadiusKm: 60,
  },
  {
    id: 'patrol-01',
    callSign: 'CRUISER-APEX-01',
    type: 'patrol-cruiser',
    sector: 'Central Luzon',
    x: 44,
    y: 36,
    lat: 15.1852,
    lng: 120.5312,
    status: 'Patrolling',
    speedKmH: 48,
    personnel: '2 Armed Security Guards (1 Officer, 1 Senior Sentinel)',
    vehicleModel: 'Toyota Hilux 4x4 Tactical Patrol Cruiser',
    onboardGear: ['Motorola APX VHF Radio', 'First-Aid Trauma Pack', 'Dashcam Dual IR', 'Spike Strip Deployer'],
    threatLevel: 'Normal',
    lastPing: '2s ago',
    responseRadiusKm: 15,
  },
  {
    id: 'ert-01',
    callSign: 'RAPID-INTERCEPT-ALPHA',
    type: 'rapid-ert',
    sector: 'Central Luzon',
    x: 58,
    y: 34,
    lat: 15.2411,
    lng: 120.6128,
    status: 'Standby / High-Alert',
    speedKmH: 0,
    personnel: '2 ERT Tactical Operatives (High-Risk Certified)',
    vehicleModel: 'Yamaha 250cc Tactical Rapid Interceptor Motorcycle Squad',
    onboardGear: ['Tactical Plate Carriers', 'Stun Gun & Baton', 'Headset Radio', 'Emergency Breaching Tool'],
    threatLevel: 'Normal',
    lastPing: '1s ago',
    responseRadiusKm: 12,
  },
  {
    id: 'facility-01',
    callSign: 'FACILITY-FONTANA',
    type: 'secured-facility',
    sector: 'Central Luzon',
    x: 37,
    y: 44,
    lat: 15.1789,
    lng: 120.5184,
    status: 'Secured Perimeter',
    personnel: '12 On-Duty Stationed Sentries & 2 Post Ingress Guards',
    facilityName: 'Fontana Leisure Parks & Casino Compound',
    onboardGear: ['AI 4K Perimeter Optical Fence', 'Biometric Turnstiles', 'X-Ray Baggage Inspection'],
    threatLevel: 'Normal',
    lastPing: 'Just now',
    responseRadiusKm: 5,
  },
  {
    id: 'facility-02',
    callSign: 'FACILITY-WIDUS',
    type: 'secured-facility',
    sector: 'Central Luzon',
    x: 42,
    y: 54,
    lat: 15.1822,
    lng: 120.5289,
    status: 'Secured Perimeter',
    personnel: '8 Concierge Sentries, 4 Armed Lobby Officers',
    facilityName: 'Widus Hotel & Casino Complex Clark',
    onboardGear: ['Walkthrough Metal Detector Archway', 'Handheld Garrett Scanners', 'Silent Panic Buttons'],
    threatLevel: 'Normal',
    lastPing: 'Just now',
    responseRadiusKm: 5,
  },
  {
    id: 'patrol-02',
    callSign: 'CRUISER-VANGUARD-04',
    type: 'patrol-cruiser',
    sector: 'Central Luzon',
    x: 62,
    y: 58,
    lat: 15.1482,
    lng: 120.5983,
    status: 'Patrolling',
    speedKmH: 35,
    personnel: '2 Armed Sentries (Roving Night Watch)',
    vehicleModel: 'Isuzu D-Max Tactical All-Terrain Cruiser',
    onboardGear: ['High-Intensity Roof Searchlight', 'Encrypted Handhelds', 'Body-Worn Cameras'],
    threatLevel: 'Normal',
    lastPing: '4s ago',
    responseRadiusKm: 18,
  },
  {
    id: 'k9-01',
    callSign: 'K9-SENTINEL-02',
    type: 'k9-unit',
    sector: 'Central Luzon',
    x: 34,
    y: 62,
    lat: 15.1221,
    lng: 120.4892,
    status: 'Patrolling',
    speedKmH: 15,
    personnel: '1 Certified K-9 Handler + 1 Belgian Malinois Explosive Sniffer',
    vehicleModel: 'Ford Ranger K-9 Customized Climate Kennel Unit',
    onboardGear: ['Tactical K-9 Vest', 'Sniffer Harness', 'Emergency K-9 First Aid Kit'],
    threatLevel: 'Normal',
    lastPing: 'Just now',
    responseRadiusKm: 20,
  },
  {
    id: 'ncr-patrol',
    callSign: 'NCR-ESCORT-BRAVO',
    type: 'patrol-cruiser',
    sector: 'Metro Manila',
    x: 68,
    y: 78,
    lat: 14.5832,
    lng: 121.0612,
    status: 'Escort En Route',
    speedKmH: 52,
    personnel: '3 Armored Escort Officers (Level III-A Ballistic Armor)',
    vehicleModel: 'Toyota HiAce Armored Executive Transit',
    onboardGear: ['GPS Fleet Telematics', 'Bullet-Resistant Glass', 'Encrypted Satellite Comm'],
    facilityName: 'Ortigas Corporate Center & Financial Hub',
    threatLevel: 'Normal',
    lastPing: '2s ago',
    responseRadiusKm: 25,
  },
  {
    id: 'facility-03',
    callSign: 'FACILITY-MEGATOWER',
    type: 'secured-facility',
    sector: 'Metro Manila',
    x: 76,
    y: 72,
    lat: 14.5547,
    lng: 121.0244,
    status: 'Secured Perimeter',
    personnel: '16 Commercial Sentries & Control Room Operators',
    facilityName: 'BGC High-Street Commercial & Lifestyle Tower',
    onboardGear: ['Central Access Control Turnstiles', 'Facial Recognition Terminals', 'Central Fire Integration'],
    threatLevel: 'Normal',
    lastPing: 'Just now',
    responseRadiusKm: 5,
  },
  {
    id: 'subic-patrol',
    callSign: 'SUBIC-INTERCEPT-CHARLIE',
    type: 'rapid-ert',
    sector: 'Subic / Bataan',
    x: 22,
    y: 46,
    lat: 14.8211,
    lng: 120.2789,
    status: 'Patrolling',
    speedKmH: 40,
    personnel: '2 Marine & Logistics Harbor Sentries',
    vehicleModel: 'Mitsubishi Strada 4x4 Heavy Harbor Patrol',
    onboardGear: ['Marine VHF Transceiver', 'Search Floodlight', 'Waterproof Body Armor'],
    facilityName: 'Subic Bay Freeport Container Terminal',
    threatLevel: 'Normal',
    lastPing: '3s ago',
    responseRadiusKm: 30,
  }
];

interface IncidentResponseMapSectionProps {
  onOpenProposal?: () => void;
  onOpenAssessment?: () => void;
}

export const IncidentResponseMapSection: React.FC<IncidentResponseMapSectionProps> = ({
  onOpenProposal,
  onOpenAssessment,
}) => {
  const [markers, setMarkers] = useState<PatrolMarker[]>(INITIAL_PATROL_MARKERS);
  const [selectedMarker, setSelectedMarker] = useState<PatrolMarker>(INITIAL_PATROL_MARKERS[0]);
  const [selectedSector, setSelectedSector] = useState<string>('All Sectors');
  const [radarSpeed, setRadarSpeed] = useState<'normal' | 'fast' | 'paused'>('normal');
  
  // LAYER TOGGLES
  const [showCruisers, setShowCruisers] = useState(true);
  const [showCommandHQ, setShowCommandHQ] = useState(true);
  const [showFacilities, setShowFacilities] = useState(true);
  const [showRangeRings, setShowRangeRings] = useState(true);
  const [showCoordinates, setShowCoordinates] = useState(true);

  // SIMULATED ACTIVE INCIDENT DRILL STATE
  const [activeDrill, setActiveDrill] = useState<IncidentAlert | null>(null);
  const [drillCountdown, setDrillCountdown] = useState<number>(0);
  const [drillLog, setDrillLog] = useState<string[]>([]);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // FILTERED MARKERS
  const filteredMarkers = markers.filter((m) => {
    if (selectedSector !== 'All Sectors' && m.sector !== selectedSector) return false;
    if (!showCruisers && (m.type === 'patrol-cruiser' || m.type === 'rapid-ert' || m.type === 'k9-unit')) return false;
    if (!showCommandHQ && m.type === 'command-hq') return false;
    if (!showFacilities && m.type === 'secured-facility') return false;
    return true;
  });

  // SECTORS
  const sectors = [
    'All Sectors',
    'Central Luzon',
    'Metro Manila',
    'Subic / Bataan',
  ];

  // HANDLE COUNTDOWN TIMER FOR SIMULATED DRILL
  useEffect(() => {
    if (activeDrill && drillCountdown > 0) {
      countdownIntervalRef.current = setInterval(() => {
        setDrillCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownIntervalRef.current as NodeJS.Timeout);
            setDrillLog((logs) => [
              `[SUCCESS] ERT Intercept Unit arrived at target perimeter! Incident neutralized & secured.`,
              ...logs
            ]);
            return 0;
          }
          if (prev === 180) {
            setDrillLog((logs) => [
              `[DISPATCH] Cruiser-Apex-01 reports sirens engaged. Approaching Ingress Gate 3.`,
              ...logs
            ]);
          }
          if (prev === 90) {
            setDrillLog((logs) => [
              `[ALERT] Visual contact established by tactical dashcam. Perimeter cordon deployed.`,
              ...logs
            ]);
          }
          return prev - 1;
        });
      }, 1000);
    } else if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
    }

    return () => {
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, [activeDrill, drillCountdown]);

  // TRIGGER SIMULATED RAPID DISPATCH DRILL
  const handleTriggerDrill = () => {
    const targetFacility = markers.find((m) => m.id === 'facility-01') || markers[3];
    const assignedCruiser = markers.find((m) => m.id === 'patrol-01') || markers[1];

    const newDrill: IncidentAlert = {
      id: `DRILL-${Math.floor(1000 + Math.random() * 9000)}`,
      title: 'Perimeter Tripwire Sensor Alarm (Gate 3 Warehouse)',
      sector: 'Central Luzon / Clark Sub-Zone',
      severity: 'CRITICAL',
      timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
      targetMarkerId: targetFacility.id,
      description: 'Automated infrared beam break detected at perimeter fence line. Immediate mobile dispatched.',
      etaSeconds: 245, // 4 mins 5 seconds
      assignedUnitId: assignedCruiser.id,
    };

    setActiveDrill(newDrill);
    setDrillCountdown(245);
    setSelectedMarker(targetFacility);
    setDrillLog([
      `[00:00] Perimeter Tripwire Alarm triggered at ${targetFacility.facilityName}.`,
      `[00:02] Central Command repeater automated alert broadcast on 462.575 MHz.`,
      `[00:05] ${assignedCruiser.callSign} acknowledged. Full tactical throttle engaged. ETA 4m 05s.`,
    ]);

    // Update marker status in state
    setMarkers((prev) =>
      prev.map((m) => {
        if (m.id === assignedCruiser.id) {
          return { ...m, status: 'Dispatched', speedKmH: 78, threatLevel: 'Drill Active' };
        }
        if (m.id === targetFacility.id) {
          return { ...m, threatLevel: 'Drill Active' };
        }
        return m;
      })
    );
  };

  // CANCEL / RESET DRILL
  const handleResetDrill = () => {
    setActiveDrill(null);
    setDrillCountdown(0);
    setDrillLog([]);
    setMarkers(INITIAL_PATROL_MARKERS);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="incident-map" className="py-24 bg-[#050505] border-b border-white/5 text-white relative overflow-hidden">
      
      {/* BACKGROUND AMBIENT RADIAL GLOWS */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/5">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>SENTRY-NET • REAL-TIME INCIDENT RESPONSE &amp; PATROL RADAR</span>
            </div>
            
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
              ACTIVE PATROL ZONES &amp; RAPID RESPONSE MAP
            </h2>
            
            <p className="text-zinc-400 text-sm max-w-2xl font-light leading-relaxed">
              Tactical situational awareness across NCVL operational sectors in Luzon and Metro Manila. 
              Track deployed mobile patrol cruisers, standby Emergency Response Teams (ERT), and automated 
              perimeter alarms with guaranteed sub-7-minute intercept capabilities.
            </p>
          </div>

          {/* TELEMETRY QUICK STATUS CHIPS */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 rounded-sm bg-[#0a0a0a] border border-white/10 font-tech text-xs flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-zinc-300">DISPATCH UPTIME:</span>
              <span className="text-emerald-400 font-bold">99.99%</span>
            </div>

            <div className="px-3 py-1.5 rounded-sm bg-[#0a0a0a] border border-white/10 font-tech text-xs flex items-center space-x-2">
              <Navigation className="w-3 h-3 text-amber-500" />
              <span className="text-zinc-300">ACTIVE CRUISERS:</span>
              <span className="text-amber-500 font-bold">28 ONLINE</span>
            </div>

            <button
              onClick={activeDrill ? handleResetDrill : handleTriggerDrill}
              className={`px-4 py-2 rounded-sm text-xs font-tech font-bold uppercase tracking-wider flex items-center space-x-2 transition-all cursor-pointer ${
                activeDrill 
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]'
                  : 'bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{activeDrill ? 'Reset Drill Simulation' : 'Simulate Rapid Response Drill'}</span>
            </button>
          </div>
        </div>

        {/* CONTROLS TOOLBAR: SECTORS & RADAR TOGGLES */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 bg-[#0a0a0a] border border-white/5 rounded-sm text-xs">
          
          {/* SECTOR TABS */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-[10px] uppercase font-tech text-zinc-500 mr-2 font-bold flex items-center">
              <Compass className="w-3 h-3 mr-1" /> Sector:
            </span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1.5 rounded-sm whitespace-nowrap text-[11px] font-tech font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedSector === sec
                    ? 'bg-amber-500 text-black font-bold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* RADAR SPEED & LAYER CONTROLS */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end text-[11px] font-tech text-zinc-400">
            
            {/* RADAR SPEED TOGGLE */}
            <div className="flex items-center space-x-1 bg-[#050505] p-1 rounded-sm border border-white/5">
              <span className="text-[9px] uppercase px-1.5 text-zinc-500">Sweep:</span>
              <button
                onClick={() => setRadarSpeed('normal')}
                className={`px-2 py-0.5 rounded-sm ${radarSpeed === 'normal' ? 'bg-zinc-800 text-amber-400' : 'hover:text-zinc-200'}`}
              >
                Normal
              </button>
              <button
                onClick={() => setRadarSpeed('fast')}
                className={`px-2 py-0.5 rounded-sm ${radarSpeed === 'fast' ? 'bg-zinc-800 text-amber-400' : 'hover:text-zinc-200'}`}
              >
                Fast
              </button>
              <button
                onClick={() => setRadarSpeed('paused')}
                className={`px-2 py-0.5 rounded-sm ${radarSpeed === 'paused' ? 'bg-zinc-800 text-amber-400' : 'hover:text-zinc-200'}`}
              >
                Static
              </button>
            </div>

            {/* LAYER TOGGLES */}
            <div className="flex items-center space-x-3">
              <label className="flex items-center space-x-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showCruisers}
                  onChange={(e) => setShowCruisers(e.target.checked)}
                  className="rounded border-zinc-700 text-amber-500 focus:ring-0 bg-zinc-900 w-3 h-3"
                />
                <span>Cruisers</span>
              </label>

              <label className="flex items-center space-x-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFacilities}
                  onChange={(e) => setShowFacilities(e.target.checked)}
                  className="rounded border-zinc-700 text-amber-500 focus:ring-0 bg-zinc-900 w-3 h-3"
                />
                <span>Facilities</span>
              </label>

              <label className="flex items-center space-x-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showRangeRings}
                  onChange={(e) => setShowRangeRings(e.target.checked)}
                  className="rounded border-zinc-700 text-amber-500 focus:ring-0 bg-zinc-900 w-3 h-3"
                />
                <span>Rings</span>
              </label>
            </div>

          </div>
        </div>

        {/* ACTIVE SIMULATION ALERT BANNER */}
        {activeDrill && (
          <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-pulse">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-sm bg-red-500/20 border border-red-500 flex items-center justify-center text-red-400 flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] uppercase font-tech font-bold px-2 py-0.5 bg-red-500 text-white rounded-sm">
                    {activeDrill.severity} ALARM IN PROGRESS
                  </span>
                  <span className="font-tech text-xs text-red-300">ID: {activeDrill.id}</span>
                </div>
                <h4 className="text-sm font-bold text-white mt-1">
                  {activeDrill.title}
                </h4>
                <p className="text-xs text-red-200/80 font-light">
                  {activeDrill.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-black/60 px-4 py-2 rounded-sm border border-red-500/30">
              <div className="text-right">
                <div className="text-[9px] uppercase font-tech text-zinc-400">Guaranteed Tactical ETA</div>
                <div className="text-2xl font-tech font-black text-amber-400">
                  {formatSeconds(drillCountdown)}
                </div>
              </div>
              <button
                onClick={handleResetDrill}
                className="px-3 py-1.5 text-[11px] font-tech uppercase bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-sm"
              >
                Acknowledge
              </button>
            </div>
          </div>
        )}

        {/* RADAR DISPLAY + HUD INSPECTOR SPLIT STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8-COLUMNS: THE CIRCULAR TACTICAL RADAR CANVAS */}
          <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-sm p-4 sm:p-8 shadow-2xl relative flex flex-col items-center justify-center overflow-hidden">
            
            {/* RADAR TELEMETRY HEADER OVERLAY */}
            <div className="w-full flex items-center justify-between text-[11px] font-tech text-zinc-400 pb-3 border-b border-white/5 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="uppercase text-white font-bold tracking-wider">RADAR SYSTEM: SENTRY-GRID V4.8</span>
              </div>
              <div className="hidden sm:flex items-center space-x-4 text-[10px] text-zinc-500">
                <span>BEARING: 045° NNE</span>
                <span>RANGE: 60 KM RADIUS</span>
                <span>CENTRAL LAT: 15.2163° N</span>
                <span>LON: 120.5739° E</span>
              </div>
            </div>

            {/* RADAR SCREEN CONTAINER (ASPECT SQUARE) */}
            <div className="relative w-full max-w-[560px] aspect-square rounded-full border-2 border-zinc-800 bg-[#050608] shadow-[inset_0_0_80px_rgba(0,0,0,0.9),0_0_50px_rgba(245,158,11,0.05)] overflow-hidden flex items-center justify-center">
              
              {/* RADAR BACKGROUND GRID PATTERN */}
              <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

              {/* CONCENTRIC DISTANCE RANGE RINGS */}
              {showRangeRings && (
                <>
                  {/* 15 KM RING */}
                  <div className="absolute w-[30%] h-[30%] rounded-full border border-zinc-700/50 pointer-events-none flex items-start justify-center">
                    <span className="text-[8px] font-tech text-zinc-600 -mt-2 bg-[#050608] px-1">15 KM</span>
                  </div>

                  {/* 30 KM RING */}
                  <div className="absolute w-[55%] h-[55%] rounded-full border border-zinc-700/50 pointer-events-none flex items-start justify-center">
                    <span className="text-[8px] font-tech text-zinc-600 -mt-2 bg-[#050608] px-1">30 KM</span>
                  </div>

                  {/* 45 KM RING */}
                  <div className="absolute w-[80%] h-[80%] rounded-full border border-zinc-700/50 pointer-events-none flex items-start justify-center">
                    <span className="text-[8px] font-tech text-zinc-600 -mt-2 bg-[#050608] px-1">45 KM</span>
                  </div>

                  {/* 60 KM OUTER RING */}
                  <div className="absolute w-[98%] h-[98%] rounded-full border border-amber-500/20 pointer-events-none flex items-start justify-center">
                    <span className="text-[8px] font-tech text-amber-500/60 -mt-2 bg-[#050608] px-1">60 KM MAX PATROL BORDER</span>
                  </div>
                </>
              )}

              {/* RADAR CROSSHAIRS (VERTICAL & HORIZONTAL AXIS) */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-zinc-800 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-zinc-800 pointer-events-none" />

              {/* DIAGONAL GRID LINES */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-full h-[1px] bg-zinc-700 rotate-45" />
                <div className="w-full h-[1px] bg-zinc-700 -rotate-45" />
              </div>

              {/* CARDINAL COMPASS LABELS */}
              <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-tech font-bold text-amber-500/80">000° N</span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-tech font-bold text-zinc-500">180° S</span>
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-tech font-bold text-zinc-500">270° W</span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-tech font-bold text-zinc-500">090° E</span>

              {/* ROTATING RADAR SWEEP BEAM */}
              {radarSpeed !== 'paused' && (
                <div 
                  className={`absolute inset-0 pointer-events-none ${radarSpeed === 'fast' ? 'animate-radar-sweep-fast' : 'animate-radar-sweep'}`}
                >
                  {/* CONIC GRADIENT SWEEP TRAIL */}
                  <div 
                    className="w-full h-full rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg at 50% 50%, rgba(245, 158, 11, 0.22) 0deg, rgba(245, 158, 11, 0.08) 25deg, transparent 65deg, transparent 360deg)'
                    }}
                  />
                  {/* SWEEP EDGE LINE */}
                  <div className="absolute top-0 left-1/2 w-[1.5px] h-1/2 bg-amber-400 shadow-[0_0_10px_#f59e0b] origin-bottom" />
                </div>
              )}

              {/* DISPATCH VECTOR LINE (IF DRILL IS ACTIVE) */}
              {activeDrill && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                  <line 
                    x1="44%" 
                    y1="36%" 
                    x2="37%" 
                    y2="44%" 
                    stroke="#ef4444" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                    className="animate-pulse"
                  />
                </svg>
              )}

              {/* LOCATION / PATROL MARKERS */}
              {filteredMarkers.map((marker) => {
                const isSelected = selectedMarker?.id === marker.id;
                const isDrillTarget = activeDrill?.targetMarkerId === marker.id;
                const isDispatched = marker.status === 'Dispatched';

                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedMarker(marker)}
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer focus:outline-none transition-transform duration-300"
                    title={`${marker.callSign} (${marker.type})`}
                  >
                    {/* ACTIVE SONAR PING RING AROUND MARKER */}
                    <span 
                      className={`absolute -inset-2 rounded-full pointer-events-none ${
                        isDrillTarget || isDispatched
                          ? 'bg-red-500/40 animate-sonar-ping'
                          : isSelected
                          ? 'bg-amber-500/40 animate-sonar-ping'
                          : marker.type === 'command-hq'
                          ? 'bg-amber-400/20 animate-sonar-ping'
                          : 'opacity-0 group-hover:opacity-100 bg-white/20'
                      }`}
                    />

                    {/* MARKER ICON CONTAINER */}
                    <div 
                      className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isDrillTarget
                          ? 'bg-red-600 border-red-300 text-white shadow-[0_0_20px_#ef4444] scale-125 animate-bounce'
                          : isDispatched
                          ? 'bg-amber-500 border-white text-black shadow-[0_0_15px_#f59e0b] scale-110'
                          : isSelected
                          ? 'bg-white border-amber-500 text-black shadow-[0_0_15px_rgba(255,255,255,0.8)] scale-110'
                          : marker.type === 'command-hq'
                          ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                          : marker.type === 'rapid-ert'
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : marker.type === 'secured-facility'
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : marker.type === 'k9-unit'
                          ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                          : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-amber-400 hover:text-white'
                      }`}
                    >
                      {marker.type === 'command-hq' && <Building2 className="w-3.5 h-3.5" />}
                      {marker.type === 'patrol-cruiser' && <Car className="w-3.5 h-3.5" />}
                      {marker.type === 'rapid-ert' && <Zap className="w-3.5 h-3.5" />}
                      {marker.type === 'secured-facility' && <ShieldCheck className="w-3.5 h-3.5" />}
                      {marker.type === 'k9-unit' && <Eye className="w-3.5 h-3.5" />}

                      {/* DIRECTIONAL SPEED HEADING INDICATOR DOT */}
                      {marker.speedKmH && marker.speedKmH > 0 && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      )}
                    </div>

                    {/* HOVER CALLSIGN MICRO-LABEL */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded-sm bg-black/90 border border-white/10 text-[9px] font-tech text-zinc-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-40 shadow-lg">
                      {marker.callSign}
                    </div>
                  </button>
                );
              })}

            </div>

            {/* RADAR FOOTER LEGEND */}
            <div className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 pt-4 border-t border-white/5 text-[11px] font-tech text-zinc-400">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span>Command Base</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 border border-white" />
                <span>Patrol Cruisers</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span>ERT Interceptors</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>Secured Client Facilities</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <span>K-9 Units</span>
              </div>
            </div>

          </div>

          {/* RIGHT 4-COLUMNS: TACTICAL HUD & TELEMETRY INSPECTOR */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* UNIT DETAILS INSPECTOR CARD */}
            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-xl space-y-5 text-xs font-tech">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <Crosshair className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500">
                    TARGET TELEMETRY INSPECTOR
                  </span>
                </div>
                <span className="text-[9px] uppercase px-2 py-0.5 rounded-sm bg-zinc-900 border border-white/5 text-zinc-400">
                  {selectedMarker.sector}
                </span>
              </div>

              {/* UNIT CALLSIGN & STATUS */}
              <div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Asset Call Sign</div>
                <h3 className="font-heading font-black text-xl text-white tracking-wide mt-0.5">
                  {selectedMarker.callSign}
                </h3>
                {selectedMarker.facilityName && (
                  <p className="text-zinc-400 text-xs font-sans mt-0.5">
                    {selectedMarker.facilityName}
                  </p>
                )}
              </div>

              {/* TELEMETRY METRIC GRID */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#050505] rounded-sm border border-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block">Status</span>
                  <span className={`font-bold flex items-center ${
                    selectedMarker.status === 'Dispatched' 
                      ? 'text-red-400' 
                      : selectedMarker.status === 'Standby / High-Alert'
                      ? 'text-amber-400'
                      : 'text-emerald-400'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
                    {selectedMarker.status}
                  </span>
                </div>

                <div className="p-3 bg-[#050505] rounded-sm border border-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block">Speed / Bearing</span>
                  <span className="text-zinc-200 font-bold">
                    {selectedMarker.speedKmH ? `${selectedMarker.speedKmH} KM/H` : 'Stationary Base'}
                  </span>
                </div>

                <div className="p-3 bg-[#050505] rounded-sm border border-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block">GPS Coordinates</span>
                  <span className="text-zinc-300 text-[10px]">
                    {selectedMarker.lat.toFixed(4)}° N, {selectedMarker.lng.toFixed(4)}° E
                  </span>
                </div>

                <div className="p-3 bg-[#050505] rounded-sm border border-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase block">Emergency Radius</span>
                  <span className="text-amber-400 font-bold">
                    {selectedMarker.responseRadiusKm} KM Intercept
                  </span>
                </div>
              </div>

              {/* PERSONNEL & GEAR INFO */}
              {selectedMarker.personnel && (
                <div className="space-y-1.5 pt-2 border-t border-white/5 font-sans">
                  <span className="text-[10px] uppercase font-tech text-zinc-500 font-bold block">Assigned Squad:</span>
                  <p className="text-xs text-zinc-300 font-light">
                    {selectedMarker.personnel}
                  </p>
                </div>
              )}

              {selectedMarker.vehicleModel && (
                <div className="space-y-1.5 font-sans">
                  <span className="text-[10px] uppercase font-tech text-zinc-500 font-bold block">Patrol Vehicle:</span>
                  <p className="text-xs text-amber-500/90 font-tech font-bold">
                    {selectedMarker.vehicleModel}
                  </p>
                </div>
              )}

              {selectedMarker.onboardGear && (
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] uppercase font-tech text-zinc-500 font-bold block">Equipment Onboard:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMarker.onboardGear.map((g, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-sm bg-[#050505] border border-white/5 text-[10px] text-zinc-300">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ACTION TRIGGER BUTTONS */}
              <div className="pt-3 border-t border-white/5 space-y-2">
                <button
                  onClick={activeDrill ? handleResetDrill : handleTriggerDrill}
                  className="w-full bg-white hover:bg-amber-500 text-black py-2.5 font-black uppercase text-xs tracking-widest transition-all rounded-sm flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Test Emergency Intercept Drill</span>
                </button>

                {onOpenProposal && (
                  <button
                    onClick={onOpenProposal}
                    className="w-full bg-[#050505] hover:bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-amber-500 py-2.5 uppercase text-xs tracking-wider transition-colors rounded-sm flex items-center justify-center cursor-pointer font-bold"
                  >
                    Request Dedicated Patrol Sector &rarr;
                  </button>
                )}
              </div>

            </div>

            {/* REAL-TIME SIMULATION ACTIVITY LOG */}
            <div className="p-5 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-xl space-y-3 font-tech text-xs">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center space-x-2 text-[10px] text-zinc-400 uppercase font-bold">
                  <Activity className="w-3.5 h-3.5 text-amber-500" />
                  <span>LIVE REPEATER RADIO CHATTER (LOG)</span>
                </div>
                <span className="text-[9px] text-emerald-400 font-bold">CHANNEL 1 ACTIVE</span>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {drillLog.length > 0 ? (
                  drillLog.map((log, idx) => (
                    <div key={idx} className="text-[11px] text-zinc-300 border-l-2 border-amber-500 pl-2.5 py-0.5 leading-relaxed font-light">
                      {log}
                    </div>
                  ))
                ) : (
                  <>
                    <div className="text-[11px] text-zinc-400 border-l-2 border-emerald-500 pl-2.5 py-0.5">
                      [0100H] All 12 post sentries at Clark Sector verified alert. Roving supervisor logged.
                    </div>
                    <div className="text-[11px] text-zinc-400 border-l-2 border-zinc-700 pl-2.5 py-0.5">
                      [0215H] Cruiser-Apex-01 completed perimeter sweep at Angeles Industrial Park. Zero incursions.
                    </div>
                    <div className="text-[11px] text-zinc-400 border-l-2 border-zinc-700 pl-2.5 py-0.5">
                      [0330H] Central command radio battery tests: 100% nominal across all VHF handhelds.
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM METRICS STRIP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/5 font-tech">
          <div className="p-4 bg-[#0a0a0a] border border-white/5 rounded-sm">
            <span className="text-zinc-500 text-[10px] uppercase font-bold block mb-1">Guaranteed Intercept</span>
            <span className="text-2xl font-black text-amber-400">&lt; 7 Minutes</span>
            <p className="text-[10px] text-zinc-400 mt-1">Contractual ERT arrival speed within coverage radius</p>
          </div>

          <div className="p-4 bg-[#0a0a0a] border border-white/5 rounded-sm">
            <span className="text-zinc-500 text-[10px] uppercase font-bold block mb-1">Fleet Communication</span>
            <span className="text-2xl font-black text-white">140+ Units</span>
            <p className="text-[10px] text-zinc-400 mt-1">Motorola digital repeaters with encrypted cryptographic hops</p>
          </div>

          <div className="p-4 bg-[#0a0a0a] border border-white/5 rounded-sm">
            <span className="text-zinc-500 text-[10px] uppercase font-bold block mb-1">Graveyard Supervision</span>
            <span className="text-2xl font-black text-emerald-400">100% Nightly</span>
            <p className="text-[10px] text-zinc-400 mt-1">Unannounced roving field inspections between 0100H and 0430H</p>
          </div>

          <div className="p-4 bg-[#0a0a0a] border border-white/5 rounded-sm">
            <span className="text-zinc-500 text-[10px] uppercase font-bold block mb-1">Police &amp; Bureau Liaison</span>
            <span className="text-2xl font-black text-white">PNP-SOSIA / 911</span>
            <p className="text-[10px] text-zinc-400 mt-1">Direct hotlink to regional command police districts</p>
          </div>
        </div>

      </div>

    </section>
  );
};
