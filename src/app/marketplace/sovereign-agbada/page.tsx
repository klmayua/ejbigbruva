"use client";

import Image from 'next/image';
import React from 'react';
import useReveal from '@/hooks/useReveal';
import useParallax from '@/hooks/useParallax';
import Link from 'next/link';

export default function Page() {
  useReveal();
  useParallax();
  

  return (
    <>
      

<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="relative aspect-[2/3] w-full overflow-hidden">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw" alt="Limited Edition Agbada Series - Statesman White" className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-6 left-6 glass-panel px-4 py-2">
<p className="text-label-sm font-label-sm text-secondary uppercase tracking-widest">Archive Reference: EJ_Agbada_01</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square bg-surface-container-low relative overflow-hidden group">
<div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors"></div>
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw" alt="Detailed Texture Shot" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="aspect-square bg-surface-container-low relative flex items-center justify-center border border-secondary/10">
<div className="text-center p-6">
<span className="material-symbols-outlined text-secondary text-4xl mb-2">verified</span>
<p className="text-label-md font-label-md text-secondary uppercase">Authenticated Artifact</p>
<p className="text-body-md font-body-md text-on-surface-variant mt-2">Certified Grade A Swiss Voile</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-10">
<section>
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface leading-tight mb-4">Limited Edition Agbada Series</h1>
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

<section className="space-y-8">
<div>
<label className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest block mb-4">Select Size</label>
<div className="flex gap-4">
<button className="flex-1 py-3 border border-secondary/30 text-label-md font-label-md hover:bg-secondary/5 transition-all">L</button>
<button className="flex-1 py-3 bg-secondary text-on-secondary-fixed text-label-md font-label-md font-bold">XL</button>
<button className="flex-1 py-3 border border-secondary/30 text-label-md font-label-md hover:bg-secondary/5 transition-all">XXL</button>
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
<button className="w-full bg-secondary py-5 text-on-secondary-fixed text-label-md font-label-md font-bold uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all">
                            Acquire Artifact
                        </button>
<button className="w-full border border-secondary/40 py-5 text-secondary text-label-md font-label-md font-bold uppercase tracking-widest hover:bg-secondary/5 active:scale-[0.98] transition-all">
                            Request Private Fitting
                        </button>
</div>
</section>
</div>
</div>

<section className="mt-24 pt-12 border-t border-on-surface/10">
<h3 className="text-headline-md font-headline-md text-on-surface mb-12 uppercase tracking-tight">Complementary Enhancements</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-square bg-surface-container-low overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw" alt="Sovereign Cufflinks" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<p className="text-label-md font-label-md text-on-surface uppercase mb-1">Sovereign Cufflinks</p>
<p className="text-body-md font-body-md text-secondary serif">$2,800.00</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-surface-container-low overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhO5-CCfbP7SAB4pPlPH5ooM3R0KyV-CEyzp4eu6aiNRxj4_hXa2aNHfabn0beqKRFLqeMO6RUvCXUEUSTyzI8E1Ye3pVk-QuS_uMLrWzpsboyxo4NGxf7wWXFKV-CudkZpdqtVRTTiFgINCY8BR7htIlTIy_vSAWy2KM7N-YkSA0ZgbeSgtVMXfnBhe0fZ-_oYX39wEcRUqBo-nYZ0HTLSr4kcPh87DstRgLVi34G4vtBqnGQA1O7i6dhj4LJqnwxCezQvIDFbSw" alt="Signed Portrait" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<p className="text-label-md font-label-md text-on-surface uppercase mb-1">Signed Portrait EJ_Agbada_02</p>
<p className="text-body-md font-body-md text-secondary serif">$4,500.00</p>
</div>

<div className="border border-secondary/10 flex flex-col items-center justify-center p-8 text-center bg-surface-container-lowest">
<span className="material-symbols-outlined text-secondary text-5xl mb-4">architecture</span>
<h4 className="text-headline-md font-headline-md text-on-surface mb-2">Bespoke Protocol</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-6">Inquire about our private commissioning service for custom statesman-grade attire.</p>
<a className="text-label-md font-label-md text-secondary border-b border-secondary pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest" href="/">Begin Engagement</a>
</div>
</div>
</section>
</main>


    </>
  );
}
