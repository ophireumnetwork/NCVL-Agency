import React, { useState } from 'react';
import { 
  Camera, 
  GraduationCap, 
  Eye, 
  ShieldCheck, 
  CheckCircle, 
  Award,
  Maximize2
} from 'lucide-react';
import { TRAINING_PROGRAMS, GALLERY_COLLECTION } from '../../data/companyData';
import { GalleryItem } from '../../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'training' | 'gallery'>('gallery');
  const [galleryCategory, setGalleryCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'Mobile Patrol & Vehicles', label: 'Tactical Fleet' },
    { id: 'Command Center & Monitoring', label: 'Command Centers' },
    { id: 'Equipment & Hardware', label: 'Tactical Gear & Hardware' },
    { id: 'VIP Escort & Protection', label: 'VIP Operations' },
  ];

  const filteredGallery = GALLERY_COLLECTION.filter((item: GalleryItem) => {
    return galleryCategory === 'all' || item.category === galleryCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-[#050505] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL EVIDENCE &amp; ACADEMY DOCTRINE</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
            TACTICAL TRAINING &amp; AGENCY GALLERY
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Examine our high-readiness fleet, command communications gear, and our proprietary 
            Guard Skills Development Training Academy where guards undergo continuous tactical drilling.
          </p>

          {/* TOGGLE TABS */}
          <div className="pt-6 flex justify-center">
            <div className="inline-flex p-1 rounded-sm bg-[#0a0a0a] border border-white/10">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-6 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Operational Photos ({GALLERY_COLLECTION.length})
              </button>
              <button
                onClick={() => setActiveTab('training')}
                className={`px-6 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === 'training'
                    ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                10-Module Training Curriculum
              </button>
            </div>
          </div>
        </div>

        {/* VIEW 1: OPERATIONAL PHOTO GALLERY */}
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setGalleryCategory(cat.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    galleryCategory === cat.id
                      ? 'bg-white text-black shadow-md'
                      : 'bg-[#0a0a0a] text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* GALLERY GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item: GalleryItem) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className="group relative rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 overflow-hidden cursor-pointer shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[9px] font-tech uppercase text-amber-500 font-bold tracking-widest">
                        {item.category}
                      </span>
                      <Maximize2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                    </div>

                    <h4 className="font-heading font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-zinc-400 text-xs font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: GUARD SKILLS DEVELOPMENT TRAINING ACADEMY */}
        {activeTab === 'training' && (
          <div className="space-y-8">
            <div className="p-8 sm:p-10 rounded-sm bg-[#0a0a0a] border border-white/5 shadow-[0_0_50px_rgba(245,158,11,0.05)] space-y-4">
              <div className="inline-flex items-center space-x-2 text-[9px] font-tech text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>IN-HOUSE CADET DOCTRINE</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">
                Guard Skills Development Training Academy
              </h3>
              <p className="text-zinc-400 text-xs font-light max-w-3xl leading-relaxed">
                Before any security guard or officer is posted at a client establishment, they undergo mandatory 
                tactical and customer service orientation at our training hall in Mabalacat City, Pampanga. 
                Our curriculum aligns with PNP-SOSIA rules, Technical Education and Skills Development Authority (TESDA) standards, 
                and Certified Security Professional (CSP) international security benchmarks.
              </p>
            </div>

            {/* 10 MODULES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TRAINING_PROGRAMS.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/40 flex items-start space-x-4 transition-all group"
                >
                  <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 font-tech font-black text-sm flex-shrink-0">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm text-white group-hover:text-amber-400 transition-colors">
                      {mod.title}
                    </h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
