import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  ShoppingCart, 
  Eye, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Check, 
  Sparkles,
  Award
} from 'lucide-react';
import { SECURITY_PRODUCTS } from '../../data/companyData';
import { Product } from '../../types';

interface EcommerceStoreSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  openCart: () => void;
}

export const EcommerceStoreSection: React.FC<EcommerceStoreSectionProps> = ({
  onQuickView,
  onAddToCart,
  openCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'surveillance', label: '4K AI CCTV Cameras' },
    { id: 'access-control', label: 'Walkthrough Scanners & Metal Detectors' },
    { id: 'communication', label: 'Motorola Tactical Radios' },
    { id: 'tactical-gear', label: 'Guardhouse Duty Outfitting' },
    { id: 'emergency-systems', label: 'Perimeter Alarm Systems' },
  ];

  const formatPHP = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredProducts = SECURITY_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="store" className="py-24 bg-[#050505] border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* STORE HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-amber-500">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>THE VAULT • COMMERCIAL HARDWARE &amp; LOGISTICS STORE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tighter uppercase italic">
              AGENCY-TESTED SECURITY EQUIPMENT
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl font-light leading-relaxed">
              Equip your corporate facility, condominium, shopping mall, or patrol squad with the same 
              commercial-grade surveillance cameras, multi-zone metal detectors, and tactical communication 
              gear deployed by NCVL Security Agency nationwide.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={openCart}
              className="bg-white hover:bg-amber-500 text-black px-6 py-3 rounded-sm text-xs font-black uppercase tracking-widest flex items-center shadow-lg transition-all cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4 mr-2 text-black" />
              <span>Requisition Cart</span>
            </button>
          </div>
        </div>

        {/* STORE CONTROLS: SEARCH & CATEGORY CHIPS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* CATEGORY TABS */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-sm whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'bg-[#0a0a0a] border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* SEARCH & SORT */}
          <div className="flex items-center space-x-3 w-full lg:w-auto text-xs">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search equipment, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-sm pl-10 pr-3.5 py-2 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#0a0a0a] border border-zinc-800 rounded-sm px-3.5 py-2 text-zinc-300 focus:border-amber-500 focus:outline-none uppercase text-[11px] font-tech font-bold"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedIds[product.id];

            return (
              <div
                key={product.id}
                className="rounded-sm bg-[#0a0a0a] border border-white/5 hover:border-amber-500/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]"
              >
                {/* IMAGE WITH BADGE & QUICK VIEW TRIGGER */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />

                  {/* BADGES */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.badge && (
                      <span className="px-2.5 py-0.5 rounded-sm text-[9px] uppercase font-tech font-bold bg-amber-500 text-black shadow">
                        {product.badge}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-sm text-[9px] font-tech font-bold uppercase bg-black/80 text-emerald-400 border border-emerald-800/60 backdrop-blur-sm">
                      ● IN STOCK
                    </span>
                  </div>

                  {/* QUICK VIEW BUTTON OVERLAY */}
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-sm bg-black/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs flex items-center backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer font-tech uppercase"
                  >
                    <Eye className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
                    <span>Quick Specsheet</span>
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 font-tech">
                      <span className="capitalize text-amber-500/80">{product.category.replace('-', ' ')}</span>
                      <span>★ {product.rating} ({product.reviewCount})</span>
                    </div>

                    <h3 
                      onClick={() => onQuickView(product)}
                      className="font-heading font-bold text-lg text-white hover:text-amber-400 cursor-pointer line-clamp-1 transition-colors"
                    >
                      {product.name}
                    </h3>

                    <p className="text-zinc-400 text-xs font-light line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* TOP 2 SPECS */}
                    <div className="bg-[#050505] border border-white/5 rounded-sm p-2.5 text-[11px] space-y-1 font-tech">
                      {Object.entries(product.specs).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="flex justify-between text-zinc-400">
                          <span>{k}:</span>
                          <span className="text-zinc-200 font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PRICE & ACTION */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[9px] text-zinc-500 uppercase tracking-wider font-tech">Corporate Price</div>
                      <div className="font-tech text-xl font-bold text-amber-500">
                        {formatPHP(product.price)}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`px-5 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest flex items-center transition-all cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                          : 'bg-white hover:bg-amber-500 text-black shadow-md'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 mr-1.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-1.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* TRUST ACCREDITATION INCLUSION FOOTER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5 text-xs text-zinc-400 font-tech">
          <div className="flex items-center space-x-3 p-4 rounded-sm bg-[#0a0a0a] border border-white/5">
            <Truck className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <div className="text-white font-bold uppercase tracking-wider">Fast Metro &amp; Luzon Delivery</div>
              <div className="text-zinc-500 text-[11px] font-light">Dispatched direct from Mabalacat Central Armory</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-sm bg-[#0a0a0a] border border-white/5">
            <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <div className="text-white font-bold uppercase tracking-wider">1 to 3 Years Agency Warranty</div>
              <div className="text-zinc-500 text-[11px] font-light">Direct parts replacement &amp; recalibration</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 rounded-sm bg-[#0a0a0a] border border-white/5">
            <Wrench className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <div className="text-white font-bold uppercase tracking-wider">Optional On-Site Installation</div>
              <div className="text-zinc-500 text-[11px] font-light">Cabling, archway testing &amp; guard orientation</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
