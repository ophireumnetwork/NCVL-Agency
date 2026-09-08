import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  Check, 
  Shield, 
  Truck, 
  Clock, 
  CheckCircle,
  Wrench,
  Star
} from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, withInstallation: boolean) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [withInstallation, setWithInstallation] = useState<boolean>(true);
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  if (!product) return null;

  const formatPHP = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity, withInstallation);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-[#0e0e12] border border-[#2e2e38] rounded-xl shadow-2xl overflow-hidden text-zinc-100 my-8">
        
        {/* HEADER */}
        <div className="px-6 py-4 bg-[#09090c] border-b border-[#22222a] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] uppercase tracking-wider font-tech px-2 py-0.5 rounded bg-[#C89B2C]/20 text-[#E2BC58] font-bold border border-[#C89B2C]/40">
              {product.badge || 'Security Spec'}
            </span>
            <span className="text-xs text-zinc-400">NCVL Hardware Specsheet</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* PRODUCT IMAGE & GUARANTEES */}
          <div className="space-y-3">
            <div className="relative aspect-square rounded-lg border border-zinc-700/80 overflow-hidden bg-black flex items-center justify-center group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-tech text-white border border-zinc-700">
                ⭐ {product.rating} ({product.reviewCount} installs)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded flex items-center space-x-1.5">
                <Truck className="w-4 h-4 text-[#C89B2C] flex-shrink-0" />
                <span>Immediate Luzon Dispatch</span>
              </div>
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-[#C89B2C] flex-shrink-0" />
                <span>{product.commercialWarranty}</span>
              </div>
            </div>
          </div>

          {/* DETAILS & CONFIG */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-white leading-snug">
                {product.name}
              </h3>
              
              <div className="text-xl font-tech font-bold text-[#E2BC58]">
                {formatPHP(product.price)}
                <span className="text-xs text-zinc-400 font-normal ml-2">
                  (VAT inclusive)
                </span>
              </div>

              <p className="text-zinc-300 text-xs leading-relaxed">
                {product.description}
              </p>

              {/* SPECIFICATION TABLE */}
              <div className="pt-2">
                <h4 className="font-semibold text-zinc-200 text-xs uppercase tracking-wider mb-2 text-[#C89B2C]">
                  Technical Specifications:
                </h4>
                <div className="bg-zinc-900/80 border border-zinc-800 rounded p-2.5 space-y-1.5 text-[11px]">
                  {Object.entries(product.specs || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-zinc-800/60 pb-1 last:border-0 last:pb-0">
                      <span className="text-zinc-400">{key}:</span>
                      <span className="text-zinc-200 font-medium text-right ml-2">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div className="pt-1">
                <h4 className="font-semibold text-zinc-300 text-xs mb-1">Key Advantages:</h4>
                <ul className="space-y-1 text-zinc-400 text-[11px]">
                  {(product.features || []).slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C89B2C] mr-1.5 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ACTION CONTROLS */}
            <div className="pt-3 border-t border-zinc-800 space-y-3">
              <label className="flex items-center space-x-2 cursor-pointer bg-zinc-900/60 p-2 rounded border border-zinc-800">
                <input
                  type="checkbox"
                  checked={withInstallation}
                  onChange={(e) => setWithInstallation(e.target.checked)}
                  className="rounded border-zinc-700 text-[#C89B2C] focus:ring-[#C89B2C] bg-zinc-800"
                />
                <span className="text-zinc-300 text-xs flex items-center">
                  <Wrench className="w-3.5 h-3.5 mr-1.5 text-[#C89B2C]" />
                  Include NCVL On-Site Installation & Calibration (+₱2,500)
                </span>
              </label>

              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-zinc-700 rounded bg-zinc-900 px-2 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-zinc-400 hover:text-white font-bold"
                  >
                    -
                  </button>
                  <span className="px-2 font-tech font-bold text-sm text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 text-zinc-400 hover:text-white font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={addedAnimation}
                  className="flex-1 py-2.5 bg-gradient-to-r from-[#C89B2C] to-[#E2BC58] hover:from-[#E2BC58] hover:to-[#C89B2C] text-black font-bold uppercase tracking-wider text-xs rounded shadow-lg flex items-center justify-center transition-all cursor-pointer"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 mr-1.5" />
                      <span>Added to Quotation List</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-1.5" />
                      <span>Add to Equipment Requisition</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
