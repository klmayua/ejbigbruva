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
      


<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDthJtVmtofKYEHiaLHXe2WuFYXRvbF-yJ_sWL6edRJEmQt6AW-fNIFLuEZxdLuChdV0p8B_5PdYp4j9hIGPiPZDVHDFVksazvBII0mlm3SqT-cMyYdlcOAfnt7Rv5NYHMvYeSXGrQSolKAifjlAGYHyimhL3GzISJv1TGF7D8R-BWYgT8EdCBdh_zCKR2X5gWZcEuFOQ4yxqMIQKSdcPcsuy6jwona-4t6YGIKXFaHfelPH0JozaUsydwcLxQbMWthFNssoldWN1c" alt="Ejike Ebidilo in Agbada" className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-transparent to-surface-container-lowest"></div>
</div>
<div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop">
<span className="font-label-md text-label-md text-secondary tracking-[0.5em] uppercase mb-8 block opacity-0 animate-[fadeIn_1s_ease-out_forwards]">Institutional Archive</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8 max-w-4xl mx-auto leading-tight">
            Architecting the <span className="italic text-secondary">Cultural Narrative</span> of a Generation.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            A digital museum honoring the lifelong commitment to excellence, voice, and the institutional legacy of Ejike Ebidilo.
        </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<button className="bg-secondary text-on-secondary px-10 py-4 font-label-md text-label-md rounded hover:bg-secondary/90 transition-all">Enter The Vault</button>
<button className="border border-secondary/50 text-secondary px-10 py-4 font-label-md text-label-md rounded hover:bg-secondary/5 transition-all">View Milestones</button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="keyboard_double_arrow_down">keyboard_double_arrow_down</span>
</div>
</header>

<section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="mb-16">
<h2 className="font-display-lg text-headline-lg text-secondary mb-4">Recognition &amp; Distinction</h2>
<div className="h-0.5 w-16 bg-secondary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-8 group relative overflow-hidden glass-panel p-10 rounded shadow-2xl">
<div className="flex justify-between items-start mb-12">
<span className="font-label-sm text-label-sm text-secondary border border-secondary/30 px-3 py-1">HISTORIC EVENT</span>
<span className="font-display-lg text-headline-md text-on-surface/10">2014</span>
</div>
<h3 className="font-display-lg text-headline-lg text-on-surface mb-6">The Continental Proclamation</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                A defining moment where the vision for BIGBRUVA was first unveiled to a pan-African audience, setting the stage for a decade of cultural leadership and institutional growth.
            </p>
<div className="flex items-center gap-4 text-secondary group-hover:gap-6 transition-all duration-300 cursor-pointer">
<span className="font-label-md text-label-md uppercase tracking-wider">Read the Manifesto</span>
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>

<div className="md:col-span-4 glass-panel p-10 rounded border-l-4 border-secondary flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-8" data-icon="workspace_premium">workspace_premium</span>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Pioneer Award</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Recognized for outstanding contributions to media excellence and authentic storytelling across the diaspora.
                </p>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em]">Global Media Summit</p>
</div>
</div>

<div className="md:col-span-4 glass-panel p-10 rounded flex flex-col items-center text-center">
<div className="w-16 h-16 rounded border border-secondary/20 flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="forum">forum</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Impact Stories</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                A collection of testimonials from industry leaders on the lasting influence of the BIGBRUVA mission.
            </p>
<button className="font-label-md text-label-md text-secondary border-b border-secondary/30 hover:border-secondary transition-all">Explore Archive</button>
</div>

<div className="md:col-span-8 relative rounded overflow-hidden min-h-[400px] bg-primary-container/20 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10 p-10 flex flex-col justify-end">
<h3 className="font-display-lg text-headline-lg text-on-surface mb-2">The Legacy Repository</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Curating 20 years of digital and physical artifacts.</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<span className="material-symbols-outlined text-secondary text-[240px]" data-icon="inventory_2">inventory_2</span>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-32 relative overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
<div className="text-center mb-24">
<h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-secondary mb-4 italic">Chronicle of Influence</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">Mapping the seminal moments that defined an era.</p>
</div>
<div className="relative">

<div className="absolute left-1/2 -translate-x-1/2 h-full w-px timeline-line hidden md:block"></div>
<div className="space-y-32">

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="md:text-right md:pr-16 order-2 md:order-1">
<span className="font-display-lg text-headline-md text-secondary mb-2 block">2010</span>
<h4 className="font-headline-md text-headline-md text-on-surface mb-4">The Foundation Stones</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">The inaugural broadcast that challenged conventional media norms and introduced the world to the voice of Ejike Ebidilo.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary gold-glow z-20 hidden md:block"></div>
<div className="md:pl-16 order-1 md:order-2">
<div className="aspect-video glass-panel rounded flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-secondary/20 text-6xl" data-icon="podcasts">podcasts</span>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="md:pr-16 order-1">
<div className="aspect-video glass-panel rounded flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-secondary/20 text-6xl" data-icon="public">public</span>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary gold-glow z-20 hidden md:block"></div>
<div className="md:pl-16 order-2">
<span className="font-display-lg text-headline-md text-secondary mb-2 block">2018</span>
<h4 className="font-headline-md text-headline-md text-on-surface mb-4">Global Expansion</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Expansion into institutional consulting, bridging the gap between traditional heritage and modern corporate identity.</p>
</div>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="md:text-right md:pr-16 order-2 md:order-1">
<span className="font-display-lg text-headline-md text-secondary mb-2 block">2024</span>
<h4 className="font-headline-md text-headline-md text-on-surface mb-4">The Institutional Legacy</h4>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Formalizing the BIGBRUVA legacy through the creation of this digital archive and the launch of the Excellence Initiative.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary gold-glow z-20 hidden md:block"></div>
<div className="md:pl-16 order-1 md:order-2">
<div className="aspect-video glass-panel rounded flex items-center justify-center border border-white/5">
<span className="material-symbols-outlined text-secondary/20 text-6xl" data-icon="auto_awesome">auto_awesome</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-margin-mobile md:px-margin-desktop border-y border-white/5">
<div className="max-w-4xl mx-auto text-center">
<span className="material-symbols-outlined text-secondary text-5xl mb-12 block" data-icon="format_quote">format_quote</span>
<blockquote className="font-display-lg text-headline-lg text-on-surface mb-12 italic leading-relaxed md:text-4xl">
            "Legacy is not what we leave behind, but how we teach others to see the future. The BIGBRUVA mission is a testament to the power of a singular voice amplified by collective purpose."
        </blockquote>
<cite className="font-label-md text-label-md text-secondary uppercase tracking-[0.4em] not-italic">— Archive Curatorial Board</cite>
</div>
</section>

<section className="py-32 px-margin-mobile md:px-margin-desktop text-center bg-surface">
<div className="max-w-2xl mx-auto">
<h2 className="font-display-lg text-headline-lg text-on-surface mb-6">Contribute to the Narrative</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">Have a story or artifact related to the BIGBRUVA journey? We invite you to be part of our growing institutional history.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-secondary text-on-secondary px-8 py-4 font-label-md text-label-md rounded flex items-center justify-center gap-3 hover:opacity-90 transition-all">
<span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
                SUBMIT ARTIFACT
            </button>
<button className="border border-white/20 text-on-surface px-8 py-4 font-label-md text-label-md rounded flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
                CONTACT ARCHIVIST
            </button>
</div>
</div>
</section>



<button className="fixed bottom-8 right-8 bg-secondary text-on-secondary w-14 h-14 rounded shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[100] group">
<span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform" data-icon="chat_bubble" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
</button>
    </>
  );
}
