import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SecurityAssessmentModal } from './components/SecurityAssessmentModal';
import { ProposalModal } from './components/ProposalModal';
import { AdminPortalModal } from './components/AdminPortalModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';

// PAGE SECTIONS
import { HeroSection } from './components/sections/HeroSection';
import { TrustCapabilityBar } from './components/sections/TrustCapabilityBar';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { EcommerceStoreSection } from './components/sections/EcommerceStoreSection';
import { TacticalFleetSection } from './components/sections/TacticalFleetSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { AssessmentProcessSection } from './components/sections/AssessmentProcessSection';
import { OperationsCommandSection } from './components/sections/OperationsCommandSection';
import { IncidentResponseMapSection } from './components/sections/IncidentResponseMapSection';
import { LeadershipSection } from './components/sections/LeadershipSection';
import { ClientExperienceSection } from './components/sections/ClientExperienceSection';
import { GallerySection } from './components/sections/GallerySection';
import { CredentialsSection } from './components/sections/CredentialsSection';
import { OfficeLocationsSection } from './components/sections/OfficeLocationsSection';
import { CareersSection } from './components/sections/CareersSection';
import { ContactSection } from './components/sections/ContactSection';

import { CartItem, Product, GalleryItem } from './types';
import { SECURITY_PRODUCTS, COMPANY_PROFILE } from './data/companyData';
import { Phone, Shield, FileText, ShoppingCart, ArrowUp } from 'lucide-react';

export default function App() {
  // MODAL STATES
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [isProposalOpen, setIsProposalOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // CART STATE (INITIALIZED WITH SAMPLE PRODUCTS TO SHOWCASE FUNCTIONALITY)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: SECURITY_PRODUCTS[0], // Sentinel 4K Camera
      quantity: 4,
      withInstallation: true,
    },
    {
      product: SECURITY_PRODUCTS[2], // Motorola Radios
      quantity: 6,
      withInstallation: false,
    },
  ]);

  // CART ACTIONS
  const handleAddToCart = (product: Product, quantity = 1, withInstallation = false) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, withInstallation: item.withInstallation || withInstallation }
            : item
        );
      }
      return [...prev, { product, quantity, withInstallation }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToStore = () => {
    const el = document.getElementById('store');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 font-body selection:bg-[#C89B2C] selection:text-black">
      
      {/* EXECUTIVE HEADER */}
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        openCart={() => setIsCartOpen(true)}
        openAssessment={() => setIsAssessmentOpen(true)}
        openProposal={() => setIsProposalOpen(true)}
        openAdmin={() => setIsAdminOpen(true)}
      />

      {/* MAIN CONTENT RUNTIME */}
      <main className="relative">
        {/* 1. HERO SECTION */}
        <HeroSection
          openAssessment={() => setIsAssessmentOpen(true)}
          openProposal={() => setIsProposalOpen(true)}
          onNavigateStore={scrollToStore}
        />

        {/* 2. TRUST & CAPABILITY BAR */}
        <TrustCapabilityBar
          openAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 3. ABOUT & PHILOSOPHY */}
        <AboutSection
          openProposal={() => setIsProposalOpen(true)}
        />

        {/* 4. SECURITY SERVICES CATALOG */}
        <ServicesSection
          openProposal={() => setIsProposalOpen(true)}
          openAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 5. E-COMMERCE HARDWARE STORE */}
        <EcommerceStoreSection
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={(prod) => handleAddToCart(prod, 1, false)}
          openCart={() => setIsCartOpen(true)}
        />

        {/* 6. TACTICAL RESPONSE FLEET */}
        <TacticalFleetSection
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 7. INDUSTRIES WE PROTECT */}
        <IndustriesSection
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenProposal={() => setIsProposalOpen(true)}
        />

        {/* 8. VULNERABILITY ASSESSMENT PROCESS */}
        <AssessmentProcessSection
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenProposal={() => setIsProposalOpen(true)}
        />

        {/* 9. OPERATIONS COMMAND & SUPERVISION */}
        <OperationsCommandSection />

        {/* 10. INTERACTIVE INCIDENT RESPONSE & PATROL RADAR MAP */}
        <IncidentResponseMapSection
          onOpenProposal={() => setIsProposalOpen(true)}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 11. LEADERSHIP & MANAGEMENT TEAM */}
        <LeadershipSection />

        {/* 11. AUTHENTIC CLIENT PORTFOLIO */}
        <ClientExperienceSection />

        {/* 12. GALLERY & TRAINING DOCTRINE */}
        <GallerySection
          onOpenLightbox={(item) => setLightboxItem(item)}
        />

        {/* 13. STATUTORY LICENSING & COMPLIANCE */}
        <CredentialsSection />

        {/* 14. OFFICE LOCATIONS & SATELLITE BASES */}
        <OfficeLocationsSection />

        {/* 15. CAREERS & RECRUITMENT PORTAL */}
        <CareersSection />

        {/* 16. CONTACT & TENDER CHANNELS */}
        <ContactSection
          onOpenProposal={() => setIsProposalOpen(true)}
        />
      </main>

      {/* FOOTER */}
      <Footer
        openAssessment={() => setIsAssessmentOpen(true)}
        openProposal={() => setIsProposalOpen(true)}
        openAdmin={() => setIsAdminOpen(true)}
      />

      {/* FLOATING ACTION SPEED DIAL / EMERGENCY CONTACT WIDGET */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2.5">
        {/* QUICK PROPOSAL BUTTON */}
        <button
          onClick={() => setIsProposalOpen(true)}
          className="px-4 py-2.5 bg-[#0a0a0a] hover:bg-amber-500 hover:text-black text-zinc-300 border border-zinc-800 hover:border-amber-500 rounded-sm shadow-2xl flex items-center space-x-2 text-xs font-tech font-bold uppercase tracking-wider transition-all backdrop-blur-md cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-amber-500" />
          <span className="hidden sm:inline">Request Proposal</span>
        </button>

        {/* 24/7 HOTLINE BUTTON */}
        <a
          href={`tel:${COMPANY_PROFILE.primaryPhones[0].replace(/[^0-9]/g, '')}`}
          className="px-5 py-3 bg-white hover:bg-amber-500 text-black rounded-sm shadow-[0_0_25px_rgba(245,158,11,0.3)] flex items-center space-x-2 text-xs font-black uppercase tracking-widest transition-all cursor-pointer"
        >
          <Phone className="w-4 h-4 text-black" />
          <span>(045) 9341-494</span>
        </a>
      </div>

      {/* MODALS */}
      {/* 1. E-COMMERCE CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cartItems}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* 2. SECURITY VULNERABILITY ASSESSMENT CALCULATOR */}
      <SecurityAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onOpenProposal={() => {
          setIsAssessmentOpen(false);
          setIsProposalOpen(true);
        }}
      />

      {/* 3. MULTI-STEP 6-STAGE PROPOSAL TENDER MODAL */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />

      {/* 4. ADMIN & SUPABASE DATABASE PORTAL */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* 5. PRODUCT QUICK VIEW SPECSHEET MODAL */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(prod, qty, install) => handleAddToCart(prod, qty, install)}
      />

      {/* 6. IMAGE LIGHTBOX MODAL */}
      <ImageLightboxModal
        isOpen={!!lightboxItem}
        imageSrc={lightboxItem?.src || ''}
        imageTitle={lightboxItem?.title || ''}
        imageCategory={lightboxItem?.category || ''}
        imageDescription={lightboxItem?.description || ''}
        onClose={() => setLightboxItem(null)}
      />

    </div>
  );
}
