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
      

<main>

<section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_h1mPW9svPqfwsOX0sYgbICAdnzIORdrJJ8Yg_jdm1zyoGGgFY3oUMahNIX9O38o55HNw9Mw9bGlS41T-cBIFz9Hr90Fe4G_6W7AUeGN4NkdaSOe7WJMXHcwlyGMBTPyYcIG1HNEI5eYdD8BGMfu78_RPkkVn9PksglrjMEUfCpjZn1rZ15fL2I9BkaxFhBuKuoT31FPqOYJln76DwOfdfpZgeA0Fd4R0QoneGa1Y_K2rJas2_kdvHk5iT3yusp2H7wdpHCY7n9k" alt="A cinematic, high-fashion portrait of an elegant figure standing in a minimalist concrete architectural space with dramatic sunlight streaming through vertical gaps. The atmosphere is sophisticated and authoritative, with deep shadows and warm highlight tones reflecting a luxury brand aesthetic. The composition emphasizes grandeur and exclusive access within a modern digital prestige environment." className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="max-w-2xl">
<span className="text-secondary text-label-md font-label-md tracking-widest mb-4 block">EXCLUSIVELY CURATED</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">The Sovereign Collection</h1>
<p className="text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                        Access an elite archive of cultural artifacts and institutional assets. Curated with precision for the discerning global citizen.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary text-on-secondary-fixed px-8 py-4 text-label-md font-label-md font-bold uppercase tracking-wider flex items-center gap-2">
                            Explore Archive <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="glass-01 text-on-surface px-8 py-4 text-label-md font-label-md font-bold uppercase tracking-wider border border-secondary/20">
                            Request Dossier
                        </button>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-8 border-b border-on-surface/5 sticky top-[73px] z-40">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="text-label-md font-label-md active-filter whitespace-nowrap">All Collections</button>
<button className="text-label-md font-label-md text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap">Digital Archives</button>
<button className="text-label-md font-label-md text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap">Limited Editions</button>
<button className="text-label-md font-label-md text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap">Media Licensing</button>
<button className="text-label-md font-label-md text-on-surface-variant hover:text-secondary transition-colors whitespace-nowrap">Institutional Assets</button>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
<span>Price</span>
<span className="material-symbols-outlined text-[14px]">expand_more</span>
</div>
<div className="w-[1px] h-4 bg-outline-variant"></div>
<div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">workspace_premium</span>
<span>Exclusivity</span>
<span className="material-symbols-outlined text-[14px]">expand_more</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="group relative flex flex-col h-full bg-surface-container border border-on-surface/5 transition-all duration-500 hover:border-secondary/30">
<div className="aspect-[4/5] overflow-hidden relative">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIAS73r5oHNVG-zaIKXQYZakAEnuRIw0wQ1yprHLatV0Lc76gfjSvDsN4VcOn9taVQm6P5G9R-PV07OW32ovodRzlfc9q3EQf1uljxlAhNNKnRrfhKIWz2Wk9fcYmnfmYRQNxnkeA01YVM9Dz9cmrY38_Gc7WnGQAkUptudsh7uWe7jlOU6UTMZlDEuzpUeHDyxbJSVKXmjMw7EpQUYw0Q-PgIn-lDEAcriFRVljBVk97brCj3W2t-ayHdpkhER6_6zrcxSJn5Foc" alt="A high-fidelity close-up of professional audio equipment in a dark, moody studio. Gold-plated microphones and vintage soundboards are softly illuminated by warm amber spotlights. The aesthetic is extremely premium, focusing on craftsmanship and high-end media production, perfectly capturing the essence of a legacy voice archive." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-4 right-4 bg-secondary/90 text-on-secondary-fixed text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">Limited Release</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">Digital Archives</span>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors">Legacy Voice Pack</h3>
<p className="text-body-md text-on-surface-variant text-sm mb-6 line-clamp-2">The complete vocal synthesis profile of the primary orator. Certified for institutional broadcast.</p>
<div className="mt-auto flex justify-between items-center pt-6 border-t border-on-surface/5">
<span className="font-bold text-secondary text-lg">$12,500</span>
<button className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary-fixed transition-all duration-300">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full bg-surface-container border border-on-surface/5 transition-all duration-500 hover:border-secondary/30">
<div className="aspect-[4/5] overflow-hidden relative">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb52fV9hMaQuaY4vFp7_c7lHmBV2vip38n6voAJ_Gac2e4DCViX6EbfAlV2ClMHvtkc2WbXQhXGp9bY-8e-iUdLZezwEKD-V967sftBtALIPhHABG_1RbRCc6fw76THB1AbJE_AY2o4vTI_xh-bDh-rqbcMWj87hqoGkTGSYP8RUMu6sQGU1PrCgelbQpaXLkKiBbzSILtb_LmWBay3DFyapAMcnMOwUx5jSKNkPVuN65eBvC9PezgqoP-8f59FPT5ZFUdQ9JQ4S4" alt="Exquisite detailed shot of traditional West African Agbada embroidery, featuring heavy gold thread patterns on deep navy blue luxury silk. The texture is rich and tactile, showcasing master craftsmanship. The lighting highlights the intricate sheen of the metallic threads, conveying a sense of heritage and high-end fashion exclusivity." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-4 right-4 bg-on-surface text-background text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">1 of 10</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">Limited Editions</span>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors">Limited Edition Agbada Series</h3>
<p className="text-body-md text-on-surface-variant text-sm mb-6 line-clamp-2">Hand-woven ceremonial attire featuring bespoke gold-thread embroidery. Signed by the artisan.</p>
<div className="mt-auto flex justify-between items-center pt-6 border-t border-on-surface/5">
<span className="font-bold text-secondary text-lg">$4,200</span>
<button className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary-fixed transition-all duration-300">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full bg-surface-container border border-on-surface/5 transition-all duration-500 hover:border-secondary/30">
<div className="aspect-[4/5] overflow-hidden relative">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuADoQr8aA3HuZ9QbV2N3-JtRtuCX59japQIyN-OaGvll64hERFRDyDoJz5XfbuetXLmLjoEC8VJiCwMPdQPywu4bN5ypYbO1nGSmFutRYe1LkvnFj-HBWIIgY1mqryrIEnk8yf2NEWEsgJ-RgZLaRoQw5kDGQCm_kRMfOcP-qyKLpgzNJrLmU5jQJTYjuYm0aS2XTrC9l9e7CvXnZQMr-UDGEYlPWaGQd5W3fwiJJVDVrfC9hGmixFNQfgJWilYb3fiw71Juo3Ku2Y" alt="A vintage cinematic film reel and professional editing console in a dark archive room. The scene is lit with a subtle blue rim light and warm yellow overhead glow, emphasizing the weight and history of institutional media. The focus is sharp on the metallic texture of the film canister, representing exclusive documentary licensing rights." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute top-4 right-4 bg-secondary/90 text-on-secondary-fixed text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">Institutional</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">Media Licensing</span>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors">Documentary Licensing Rights</h3>
<p className="text-body-md text-on-surface-variant text-sm mb-6 line-clamp-2">Global distribution rights for the 'Empire Rising' documentary series. High-fidelity master copies.</p>
<div className="mt-auto flex justify-between items-center pt-6 border-t border-on-surface/5">
<span className="font-bold text-secondary text-lg">Contact for Price</span>
<button className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary-fixed transition-all duration-300">
<span className="material-symbols-outlined">mail</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full bg-surface-container border border-on-surface/5 transition-all duration-500 hover:border-secondary/30">
<div className="aspect-[4/5] overflow-hidden relative">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwTl7VMYpFXiQoxAmhWiSF8RYetli7Sw2pIdCbDAgAl2M-RqgP0TPczoqn7dI7U1krv8Mc0AHG_S0IkJBJlVfHWSC8dMBaqy-u280RreCS149NEfxggGaTNX8aPLj50ZcMzYgSn5zhygiBA3omKhHfuEqcp5itlGg24U-1ehM82TkBmGEzDU05XV6egjrvNOAqvgLMRZbfRwvEvTdTppWKKaRVWxkwKPtQgfA8X8CRjR1CqP-gNP2YnpEd4QnRqjGO9hDtYsk_a1s" alt="A high-end gallery wall featuring a large, framed black and white photograph of a powerful architectural landscape. The frame is minimal and black, and a discreet gold signature is visible in the corner. Professional gallery lighting casts soft shadows, highlighting the premium paper quality and the exclusive nature of this signed photographic print." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-2">Limited Editions</span>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-secondary transition-colors">Signed Photographic Prints</h3>
<p className="text-body-md text-on-surface-variant text-sm mb-6 line-clamp-2">A set of three museum-grade prints capturing the inner sanctuary of the Bruva headquarters.</p>
<div className="mt-auto flex justify-between items-center pt-6 border-t border-on-surface/5">
<span className="font-bold text-secondary text-lg">$1,850</span>
<button className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary-fixed transition-all duration-300">
<span className="material-symbols-outlined">shopping_bag</span>
</button>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<button className="border border-outline-variant px-12 py-4 text-label-md font-label-md uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all duration-300">
                    Load More Acquisitions
                </button>
</div>
</section>

<section className="bg-surface-container-highest py-24 px-margin-mobile md:px-margin-desktop text-center overflow-hidden relative">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="font-headline-lg text-headline-lg mb-6">Request Private Access</h2>
<p className="text-on-surface-variant text-body-lg mb-10">Institutional partners and verified patrons may request access to the Vault—a restricted collection of tier-one historical data and primary artifacts.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
<input className="flex-grow bg-background border-0 border-b-2 border-on-surface/20 px-4 py-4 focus:ring-0 focus:border-secondary transition-colors text-on-surface" placeholder="Institutional Email Address" type="email"/>
<button className="bg-secondary text-on-secondary-fixed px-8 py-4 font-bold uppercase tracking-wider whitespace-nowrap">Apply for Clearance</button>
</form>
</div>
</section>
</main>


    </>
  );
}
