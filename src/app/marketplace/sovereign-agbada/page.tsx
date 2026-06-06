"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [selectedSize, setSelectedSize] = useState("XL");

  const sizes = ["L", "XL", "XXL"];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
        
        body {
            background-color: #121413;
            color: #e2e3e1;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        .serif {
            font-family: 'Libre Caslon Text', serif;
        }
        .glass-panel {
            background: rgba(30, 32, 31, 0.7);
            backdrop-filter: blur(12px);
            border: 0.5px solid rgba(233, 195, 73, 0.15);
        }
        .nav-blur {
            backdrop-filter: blur(20px);
            background: rgba(18, 20, 19, 0.85);
        }
        .gold-border-bottom {
            border-bottom: 2px solid #e9c349;
        }
        .selection-active {
            background-color: #e9c349;
            color: #241a00;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #121413;
        }
        ::-webkit-scrollbar-thumb {
            background: #e9c34933;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #e9c349;
        }
      `}} />

      {/* Top Navigation Bar */}
      <header className="docked full-width top-0 sticky z-50 bg-surface/70 backdrop-blur-md dark:bg-surface/70 border-b border-on-surface/10">
        <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 cursor-pointer">
              <img alt="BIGBRUVA Crest" className="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
              <span className="text-headline-md font-headline-md font-bold text-secondary dark:text-secondary tracking-tighter uppercase">BIGBRUVA</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/">Home</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/about">About</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/legacy">Legacy</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/media">Media</Link>
            <Link className="text-secondary font-bold border-b-2 border-secondary pb-1 text-label-md font-label-md" href="/marketplace">Marketplace</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block text-label-md font-label-md text-secondary border border-secondary/30 px-4 py-2 hover:bg-secondary/10 transition-all active:scale-95">Consult with Management</Link>
            <Link href="/bookings" className="bg-secondary text-on-secondary text-label-md font-label-md px-6 py-2 font-bold hover:brightness-110 transition-all active:scale-95">Proceed to Booking</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Product Visuals Cluster */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-[2/3] w-full overflow-hidden">
              <img alt="Limited Edition Agbada Series - Statesman White" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw"/>
              <div className="absolute top-6 left-6 glass-panel px-4 py-2">
                <p className="text-label-sm font-label-sm text-secondary uppercase tracking-widest">Archive Reference: EJ_Agbada_01</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-surface-container-low relative overflow-hidden group">
                <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors"></div>
                <img alt="Detailed Texture Shot" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw"/>
              </div>
              <div className="aspect-square bg-surface-container-low relative flex items-center justify-center border border-secondary/10">
                <div className="text-center p-6">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2 flex justify-center">verified</span>
                  <p className="text-label-md font-label-md text-secondary uppercase">Authenticated Artifact</p>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-2">Certified Grade A Swiss Voile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Narrative & Selection */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <section>
              <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface leading-tight mb-4 font-serif">Limited Edition Agbada Series</h1>
              <h2 className="text-headline-md font-headline-md text-secondary serif italic mb-6">Statesman White</h2>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-headline-lg font-headline-lg text-on-surface">$12,500.00</span>
                <span className="text-label-md font-label-md text-on-surface-variant border-l border-on-surface/20 pl-4 uppercase tracking-widest">Exclusive Release</span>
              </div>
              <div className="space-y-6">
                <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                  The Statesman White Agbada is a testament to generational sovereignty and the quiet power of tradition. Crafted for the modern diplomat, this piece merges high-fashion silhouette with ancestral weight.
                </p>
                <div className="glass-panel p-6 space-y-4">
                  <h3 className="text-label-md font-label-md text-secondary uppercase tracking-widest">Fabric Particulars</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary"></span>
                      <span className="text-body-md font-body-md text-on-surface">Premium Swiss Voile Base</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary"></span>
                      <span className="text-body-md font-body-md text-on-surface">Hand-stitched Filigree Embroidery</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-secondary"></span>
                      <span className="text-body-md font-body-md text-on-surface">Reinforced Internal Architecture</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Selection Actions */}
            <section className="space-y-8">
              <div>
                <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-4">Select Size</label>
                <div className="flex gap-4">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-3 text-label-md font-label-md cursor-pointer transition-all ${
                        selectedSize === size
                          ? 'bg-secondary text-on-secondary font-bold'
                          : 'border border-secondary/30 text-on-surface-variant hover:bg-secondary/5'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-4">Numbered Edition</label>
                <div className="p-4 bg-surface-container flex justify-between items-center border border-on-surface/10">
                  <span className="text-body-md font-body-md text-on-surface">Sequence Identifier</span>
                  <span className="text-headline-md font-headline-md text-secondary serif">1 of 50</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button className="w-full bg-secondary py-5 text-on-secondary text-label-md font-label-md font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer border-none outline-none">
                  Acquire Artifact
                </button>
                <button className="w-full border border-secondary/40 py-5 text-secondary text-label-md font-label-md font-bold uppercase tracking-widest hover:bg-secondary/5 active:scale-[0.98] transition-all cursor-pointer">
                  Request Private Fitting
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Related Items Section */}
        <section className="mt-24 pt-12 border-t border-on-surface/10">
          <h3 className="text-headline-md font-headline-md text-on-surface mb-12 uppercase tracking-tight">Complementary Enhancements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Related 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-surface-container-low overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                <img alt="Sovereign Cufflinks" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw"/>
              </div>
              <p className="text-label-md font-label-md text-on-surface uppercase mb-1">Sovereign Cufflinks</p>
              <p className="text-body-md font-body-md text-secondary serif">$2,800.00</p>
            </div>
            {/* Related 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-surface-container-low overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                <img alt="Signed Portrait" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw"/>
              </div>
              <p className="text-label-md font-label-md text-on-surface uppercase mb-1">Signed Portrait EJ_Agbada_02</p>
              <p className="text-body-md font-body-md text-secondary serif">$4,500.00</p>
            </div>
            {/* Related 3 - Contextual Link */}
            <div className="border border-secondary/10 flex flex-col items-center justify-center p-8 text-center bg-surface-container-lowest">
              <span className="material-symbols-outlined text-secondary text-5xl mb-4 flex justify-center">architecture</span>
              <h4 className="text-headline-md font-headline-md text-on-surface mb-2 font-serif">Bespoke Protocol</h4>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6">Inquire about our private commissioning service for custom statesman-grade attire.</p>
              <Link className="text-label-md font-label-md text-secondary border-b border-secondary pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest" href="/contact">Begin Engagement</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-secondary/10 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto animate-none">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img alt="BIGBRUVA Crest" className="h-8 w-8 object-contain opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
              <span className="text-headline-md font-headline-md text-secondary font-bold tracking-tighter uppercase">BIGBRUVA</span>
            </div>
            <p className="text-label-sm font-label-sm text-secondary-fixed-dim text-center md:text-left max-w-xs">© 2024 BIGBRUVA Institutional. All Rights Reserved. Part of the Ebidilo Group.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="/community">Privacy Protocol</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Engagement</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Strategic Partnerships</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="/press">Media Kit</Link>
            <Link className="text-label-sm font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Contact Registry</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
