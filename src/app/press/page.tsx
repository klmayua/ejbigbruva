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
      

<main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

<header className="mb-20 text-center">
<span className="font-label-md text-label-md text-secondary tracking-[0.3em] uppercase block mb-4">Official Newsroom</span>
<h1 className="font-display-lg text-display-lg mb-6 leading-tight">Media &amp; Press Archive</h1>
<div className="editorial-line w-full max-w-2xl mx-auto mb-8"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                The authoritative source for news, updates, and official communications from BIGBRUVA. High-resolution brand assets and sanctioned media materials for professional publication.
            </p>
</header>

<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24 transition-all duration-1000 opacity-100 translate-y-0">
<div className="md:col-span-8 glass-01 p-10 rounded-lg flex flex-col justify-between">
<div>
<h2 className="font-headline-lg text-headline-lg mb-4 text-secondary">Official Biography</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                        Born from a legacy of charisma and leadership, BIGBRUVA represents the pinnacle of premium entertainment and cultural influence. Known as "The Original Big Brother," Ejike Ebidilo has redefined the intersection of media personality and visionary creator. His career spans decades of groundbreaking voice work, events, and community building, cementing his place as a sovereign figure in the global media landscape.
                    </p>
</div>
<div className="flex gap-4">
<button className="bg-secondary text-background font-label-md text-label-md px-8 py-3 rounded hover:scale-[1.02] active:scale-95 transition-cubic flex items-center gap-2">
<span className="material-symbols-outlined">download</span> Download Full Bio (PDF)
                    </button>
<button className="border border-outline-variant text-on-surface font-label-md text-label-md px-8 py-3 rounded hover:bg-surface-variant transition-cubic">
                        View Career Timeline
                    </button>
</div>
</div>
<div className="md:col-span-4 flex flex-col gap-gutter">
<div className="bg-primary-container p-8 rounded-lg">
<h3 className="font-headline-md text-headline-md text-primary mb-2">Media Kit</h3>
<p className="font-label-md text-label-md text-primary/80 mb-6 uppercase">Winter 2024 Collection</p>
<button className="w-full bg-white/10 hover:bg-white/20 text-on-primary-container py-4 rounded-lg flex items-center justify-center gap-2 transition-cubic">
<span className="material-symbols-outlined">folder_zip</span> Download Bundle
                    </button>
</div>
<div className="glass-01 p-8 rounded-lg border-l-4 border-secondary">
<h3 className="font-label-md text-label-md text-secondary uppercase mb-4 tracking-widest">Brand Colors</h3>
<div className="flex gap-2">
<div className="w-12 h-12 rounded-full bg-[#0c0f0e] border border-outline shadow-inner" title="Midnight Navy"></div>
<div className="w-12 h-12 rounded-full bg-[#e9c349] border border-outline shadow-inner" title="Royal Gold"></div>
<div className="w-12 h-12 rounded-full bg-[#e2e3e1] border border-outline shadow-inner" title="Soft Ivory"></div>
</div>
</div>
</div>
</section>

<section className="mb-24 transition-all duration-1000 opacity-100 translate-y-0">
<div className="flex items-end justify-between mb-10 border-b border-outline-variant pb-6">
<div>
<h2 className="font-headline-lg text-headline-lg uppercase tracking-tight">Approved Photography</h2>
<p className="font-label-md text-label-md text-on-surface-variant mt-2">FOR EDITORIAL USE ONLY. PLEASE CREDIT ACCORDINGLY.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-secondary font-label-md text-label-md hover:underline decoration-2">
                    Gallery View <span className="material-symbols-outlined">arrow_outward</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<Image src="/images/EJ_Agbada_01.jpeg" alt="Ejike Ebidilo in Traditional Attire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: 'center 20%' }} />
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="font-label-sm text-label-sm text-secondary mb-1">TRADITIONAL PORTRAIT</p>
<button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> High-Res
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<Image src="/images/EJ_casual_01.jpeg" alt="Ejike Ebidilo Studio Close-up" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: 'center 20%' }} />
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="font-label-sm text-label-sm text-secondary mb-1">STUDIO PROFILE</p>
<button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> High-Res
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<Image src="/images/EJ_Agbada_02.jpeg" alt="Ejike Ebidilo Executive Lounge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: 'center 20%' }} />
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="font-label-sm text-label-sm text-secondary mb-1">EXECUTIVE PORTRAIT</p>
<button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> High-Res
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
<Image src="/images/EJ_casual_02.jpeg" alt="Ejike Ebidilo Casual Modern" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: 'center 20%' }} />
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="font-label-sm text-label-sm text-secondary mb-1">CASUAL SOPHISTICATION</p>
<button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> High-Res
                        </button>
</div>
</div>
</div>
</section>

<section className="mb-24 transition-all duration-1000 opacity-100 translate-y-0">
<div className="flex items-center justify-between mb-10">
<h2 className="font-headline-lg text-headline-lg">Press Releases</h2>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
<button className="p-2 border border-outline-variant rounded hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">search</span>
</button>
</div>
</div>
<div className="space-y-6">

<article className="glass-01 group p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container-high transition-cubic cursor-pointer transition-all duration-1000 opacity-100 translate-y-0">
<div className="md:w-32 flex-shrink-0">
<p className="font-label-md text-label-md text-secondary">NOV 14, 2024</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Global Event</p>
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md mb-3 group-hover:text-secondary transition-colors">BIGBRUVA Announces Exclusive "Legacy Night" Gala in London</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Official announcement regarding the highly anticipated European debut of the sovereign entertainment icon Ejike Ebidilo.</p>
<div className="flex gap-4 text-secondary font-label-md text-label-md">
<span className="flex items-center gap-1 hover:underline">Read Release <span className="material-symbols-outlined text-sm">chevron_right</span></span>
<span className="flex items-center gap-1 hover:underline">PDF Version <span className="material-symbols-outlined text-sm">picture_as_pdf</span></span>
</div>
</div>
</article>

<article className="glass-01 group p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container-high transition-cubic cursor-pointer transition-all duration-1000 opacity-100 translate-y-0">
<div className="md:w-32 flex-shrink-0">
<p className="font-label-md text-label-md text-secondary">OCT 22, 2024</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Foundation</p>
</div>
<div className="flex-grow">
<h3 className="font-headline-md text-headline-md mb-3 group-hover:text-secondary transition-colors">Launch of the BIGBRUVA Creative Arts Scholarship Fund</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Empowering the next generation of African talent through specialized training in voice, production, and digital media.</p>
<div className="flex gap-4 text-secondary font-label-md text-label-md">
<span className="flex items-center gap-1 hover:underline">Read Release <span className="material-symbols-outlined text-sm">chevron_right</span></span>
<span className="flex items-center gap-1 hover:underline">PDF Version <span className="material-symbols-outlined text-sm">picture_as_pdf</span></span>
</div>
</div>
</article>
</div>
</section>

<section className="mb-24 transition-all duration-1000 opacity-100 translate-y-0">
<h2 className="font-headline-lg text-headline-lg mb-10">Selected Coverage</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<a className="block p-8 border border-outline-variant/30 bg-surface-container-lowest hover:border-secondary transition-colors group" href="/">
<div className="flex items-center justify-between mb-6">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Vogue Entertainment</span>
<span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</div>
<h4 className="font-headline-md text-headline-md italic mb-4">"The Quiet Majesty of Ejike Ebidilo: Defining Sovereign Celebrity."</h4>
<p className="font-label-md text-label-md text-secondary">May 2024 Issue</p>
</a>
<a className="block p-8 border border-outline-variant/30 bg-surface-container-lowest hover:border-secondary transition-colors group" href="/media">
<div className="flex items-center justify-between mb-6">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Global Media Hub</span>
<span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</div>
<h4 className="font-headline-md text-headline-md italic mb-4">"The Voice That Built an Empire: An Interview with BIGBRUVA."</h4>
<p className="font-label-md text-label-md text-secondary">June 2024 Feature</p>
</a>
<a className="block p-8 border border-outline-variant/30 bg-surface-container-lowest hover:border-secondary transition-colors group" href="/media">
<div className="flex items-center justify-between mb-6">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Business Daily</span>
<span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</div>
<h4 className="font-headline-md text-headline-md italic mb-4">"Media Monetization: How Ejike Ebidilo Revolutionized Talent Branding."</h4>
<p className="font-label-md text-label-md text-secondary">July 2024 Profile</p>
</a>
</div>
</section>

<section className="glass-01 p-16 rounded-xl text-center border-t-4 border-secondary overflow-hidden relative transition-all duration-1000 opacity-100 translate-y-0">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
<h2 className="font-headline-lg text-headline-lg mb-6">Media Inquiries</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                For interview requests, event appearances, and official media partnerships, please contact our global press office.
            </p>
<div className="flex flex-col md:flex-row gap-6 justify-center items-center">
<div className="text-center">
<p className="font-label-sm text-label-sm text-secondary uppercase mb-2">Global Media Relations</p>
<p className="font-headline-md text-headline-md">press@bigbruva.com</p>
</div>
<div className="hidden md:block w-px h-12 bg-outline-variant"></div>
<div className="text-center">
<p className="font-label-sm text-label-sm text-secondary uppercase mb-2">Urgent Inquiries</p>
<p className="font-headline-md text-headline-md">+44 20 7946 0958</p>
</div>
</div>
</section>
</main>


    </>
  );
}
