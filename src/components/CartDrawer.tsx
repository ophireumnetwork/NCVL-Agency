import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Wrench, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall,
  Lock
} from 'lucide-react';
import { CartItem } from '../types';
import { AGENCY_ASSETS } from '../data/assets';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart?: CartItem[];
  items?: CartItem[];
  updateQuantity?: (productId: string, delta: number) => void;
  onUpdateQuantity?: (productId: string, quantity: number) => void;
  removeItem?: (productId: string) => void;
  onRemoveItem?: (productId: string) => void;
  toggleInstallation?: (productId: string) => void;
  clearCart?: () => void;
  onClearCart?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart: cartProp,
  items,
  updateQuantity,
  onUpdateQuantity,
  removeItem,
  onRemoveItem,
  toggleInstallation,
  clearCart,
  onClearCart,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    deliveryAddress: '',
    paymentTerms: 'Bank Transfer (BDO/BPI Corporate)',
    notes: '',
  });
  const [orderRefNumber, setOrderRefNumber] = useState('');

  const cart = cartProp || items || [];

  const handleRemove = (productId: string) => {
    if (removeItem) removeItem(productId);
    else if (onRemoveItem) onRemoveItem(productId);
  };

  const handleUpdateDelta = (productId: string, delta: number, currentQty: number) => {
    if (updateQuantity) {
      updateQuantity(productId, delta);
    } else if (onUpdateQuantity) {
      onUpdateQuantity(productId, Math.max(0, currentQty + delta));
    }
  };

  const handleToggle = (productId: string) => {
    if (toggleInstallation) toggleInstallation(productId);
  };

  const handleClear = () => {
    if (clearCart) clearCart();
    else if (onClearCart) onClearCart();
  };

  if (!isOpen) return null;

  const calculateSubtotal = () => {
    return (cart || []).reduce((total, item) => {
      const itemBase = item.product.price * item.quantity;
      const installFee = item.withInstallation ? 2500 * item.quantity : 0;
      return total + itemBase + installFee;
    }, 0);
  };

  const formatPHP = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleProcessOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.phone || !clientInfo.email) {
      alert('Please provide your name, phone number, and email to receive the quotation.');
      return;
    }

    const ref = `NCVL-EQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRefNumber(ref);
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* BACKDROP */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-[#0d0d10] border-l border-[#26262e] text-zinc-100 flex flex-col shadow-2xl">
          
          {/* HEADER */}
          <div className="px-6 py-5 bg-[#09090b] border-b border-[#22222a] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-amber-500/40 p-0.5 bg-black flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                <img 
                  src={AGENCY_ASSETS.logo} 
                  alt="NCVL Security Crest" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-white tracking-wide">
                  Agency Equipment Order
                </h3>
                <p className="text-[11px] text-zinc-400">
                  Certified Security Hardware & Systems
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

          {/* CONTENT ACCORDING TO STEP */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutStep === 'cart' && (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                      <ShieldCheck className="w-8 h-8 text-zinc-600" />
                    </div>
                    <h4 className="font-heading font-semibold text-lg text-zinc-300">
                      Your Equipment List is Empty
                    </h4>
                    <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                      Explore our 4K AI CCTV cameras, multi-zone metal detectors, 
                      tactical Motorola radios, and guardhouse outfitting gear.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-4 py-2 bg-[#C89B2C] hover:bg-[#E2BC58] text-black text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      Browse Equipment Catalog
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800">
                      <span>{cart.length} Security Items Selected</span>
                      <button
                        onClick={handleClear}
                        className="text-xs text-red-400 hover:text-red-300 hover:underline"
                      >
                        Clear All
                      </button>
                    </div>

                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-3.5 bg-zinc-900/70 border border-zinc-800/80 rounded-lg space-y-3"
                      >
                        <div className="flex items-start space-x-3">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded border border-zinc-700/60 bg-black flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-white line-clamp-1">
                              {item.product.name}
                            </h4>
                            <div className="text-xs text-[#E2BC58] font-tech font-medium mt-0.5">
                              {formatPHP(item.product.price)}
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-0.5">
                              {item.product.commercialWarranty}
                            </p>
                          </div>
                          <button
                            onClick={() => handleRemove(item.product.id)}
                            className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* INSTALLATION TOGGLE */}
                        <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px]">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={item.withInstallation || false}
                              onChange={() => handleToggle(item.product.id)}
                              className="rounded border-zinc-700 text-[#C89B2C] focus:ring-[#C89B2C] bg-zinc-800"
                            />
                            <span className="text-zinc-300 flex items-center">
                              <Wrench className="w-3 h-3 mr-1 text-[#C89B2C]" />
                              Include NCVL Field Installation (+₱2,500)
                            </span>
                          </label>

                          {/* QUANTITY CONTROLS */}
                          <div className="flex items-center space-x-2 bg-black/40 border border-zinc-800 rounded px-1.5 py-0.5">
                            <button
                              onClick={() => handleUpdateDelta(item.product.id, -1, item.quantity)}
                              className="p-1 text-zinc-400 hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-tech font-bold px-1.5">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateDelta(item.product.id, 1, item.quantity)}
                              className="p-1 text-zinc-400 hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <form id="checkout-form" onSubmit={handleProcessOrder} className="space-y-4 text-xs">
                <div className="p-3 bg-[#C89B2C]/10 border border-[#C89B2C]/30 rounded text-[#E2BC58] flex items-center space-x-2">
                  <Lock className="w-4 h-4 flex-shrink-0" />
                  <span>
                    Official Equipment Requisition & Direct Corporate Delivery Form
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">Contact Person *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Director Carlos Santos"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">Company / Establishment *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mega Logistic Warehouse or Parkwood HOA"
                      value={clientInfo.company}
                      onChange={(e) => setClientInfo({ ...clientInfo, company: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-zinc-300 mb-1 font-medium">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0917-XXX-XXXX"
                        value={clientInfo.phone}
                        onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-300 mb-1 font-medium">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="procurement@company.ph"
                        value={clientInfo.email}
                        onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">Site Delivery Address *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Site facility street address, municipality/city, province"
                      value={clientInfo.deliveryAddress}
                      onChange={(e) => setClientInfo({ ...clientInfo, deliveryAddress: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">Preferred Terms</label>
                    <select
                      value={clientInfo.paymentTerms}
                      onChange={(e) => setClientInfo({ ...clientInfo, paymentTerms: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white focus:border-[#C89B2C] focus:outline-none"
                    >
                      <option>Bank Transfer (BDO / BPI Corporate Account)</option>
                      <option>Company Check / Cash on Delivery (COD)</option>
                      <option>Corporate Purchase Order (30 Days Terms for Verified Accounts)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 mb-1 font-medium">Special Requirements / Notes</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Requires ceiling brackets, specific radio frequency coding, or Saturday delivery"
                      value={clientInfo.notes}
                      onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-500 focus:border-[#C89B2C] focus:outline-none"
                    />
                  </div>
                </div>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C89B2C]/20 border border-[#C89B2C] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#C89B2C]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white">
                  Quotation & Order Dispatched
                </h3>
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg max-w-sm mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Reference No:</span>
                    <span className="font-tech font-bold text-[#E2BC58]">{orderRefNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Client Name:</span>
                    <span className="text-zinc-200">{clientInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Company:</span>
                    <span className="text-zinc-200">{clientInfo.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Estimated Total:</span>
                    <span className="font-bold text-[#C89B2C]">{formatPHP(calculateSubtotal())}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  An official formal sales quote and bill of materials has been queued to 
                  <strong> {clientInfo.email}</strong>. Our logistics officer from Mabalacat HQ 
                  will contact you shortly at <strong>{clientInfo.phone}</strong>.
                </p>

                <div className="pt-4 flex flex-col gap-2">
                  <a
                    href="tel:0459341494"
                    className="w-full py-2.5 bg-zinc-900 border border-zinc-700 hover:border-[#C89B2C] text-zinc-200 font-semibold rounded text-xs flex items-center justify-center"
                  >
                    <PhoneCall className="w-4 h-4 mr-2 text-[#C89B2C]" />
                    Call Logistics Dispatch: (045) 9341-494
                  </a>
                  <button
                    onClick={() => {
                      clearCart();
                      setCheckoutStep('cart');
                      onClose();
                    }}
                    className="w-full py-2.5 bg-[#C89B2C] hover:bg-[#E2BC58] text-black font-bold uppercase tracking-wider text-xs rounded transition-colors"
                  >
                    Return to Website
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* FOOTER ACTIONS */}
          {cart.length > 0 && checkoutStep !== 'success' && (
            <div className="p-6 bg-[#0a0a0d] border-t border-[#22222a] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Hardware Subtotal</span>
                  <span className="font-tech font-semibold text-zinc-200">
                    {formatPHP(cart.reduce((s, i) => s + i.product.price * i.quantity, 0))}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Certified Field Installation</span>
                  <span className="font-tech text-zinc-200">
                    {formatPHP(cart.reduce((s, i) => s + (i.withInstallation ? 2500 * i.quantity : 0), 0))}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-2 border-t border-zinc-800 text-white">
                  <span>Estimated Total (PHP)</span>
                  <span className="font-tech text-lg text-[#E2BC58]">
                    {formatPHP(calculateSubtotal())}
                  </span>
                </div>
              </div>

              {checkoutStep === 'cart' ? (
                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-3 bg-gradient-to-r from-[#C89B2C] to-[#E2BC58] hover:from-[#E2BC58] hover:to-[#C89B2C] text-black font-bold uppercase tracking-wider text-xs rounded shadow-lg flex items-center justify-center transition-all cursor-pointer"
                >
                  <span>Proceed to Quotation Checkout</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-1/3 py-2.5 bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold text-xs rounded"
                  >
                    Back to Items
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    className="w-2/3 py-2.5 bg-[#C89B2C] hover:bg-[#E2BC58] text-black font-bold uppercase tracking-wider text-xs rounded flex items-center justify-center shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Submit Requisition
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
