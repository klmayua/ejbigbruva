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
      
<nav className="bg-surface/70 backdrop-blur-md dark:bg-surface/70 docked full-width top-0 sticky z-50 border-b border-on-surface/10">
<div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-4">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP7m8tXkL6i-7U39wR4eePQJ8OyU6HHEsPhAIfa7qzQj-kNl4_V-ytJBVglKsgVHHZTB7phx4IlHQNFvjVNupVAcLFLpAKQ-gpbsO1YZN5yxdmsrV1D_12mYmu31awVigQJ9GYWHWlMnFY46MO52Xanhj-iZbypzkdEy9-D-edZVEyXST5CmE1RoCpxKsVozBlLvwUyPgyWy5Hr80cOI1PuFPgSm4o7Rn8no19AldyA0sC5YiPZT3LuK1w7TO8dj_0b4MUdLiq-3Y" alt="BIGBRUVA Crest" className="h-10 w-10 object-contain" width={160} height={80} style={{ objectFit: 'contain' }} />
<span className="text-headline-md font-headline-md font-bold text-secondary dark:text-secondary tracking-tighter">BIGBRUVA</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/">Services</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/">Portfolio</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/">Institutional</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/about">About</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md" href="/">Management</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:block text-on-surface-variant hover:text-secondary transition-colors text-label-md font-label-md">Consult with Management</button>
<button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-DEFAULT text-label-md font-label-md hover:bg-secondary transition-all duration-300">Proceed to Booking</button>
</div>
</div>
</nav>

<header className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-end">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105" data-alt="A dignified portrait of a prominent leader in traditional Agbada attire, exuding authority and wisdom. The lighting is dramatic and moody, with deep shadows and warm highlights reflecting a high-end editorial style. The atmosphere is quiet, powerful, and deeply institutional, set against a rich, dark background that emphasizes the statesman's presence." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByR6q7B6FxUSqJyoe9E-b2srvyFqwBVOSbn8el9t-bzq3cw5wZqgUIe5hr_hXmwam24drT0ArYs4a2CWlNZrpC1OZ2di7SVakHbBDGS6ktMBL1unIPc0CJQ5xC1Tz7ClRV_g-sOsx6m4mkrL8evEL9aWGylPzkTEQJtJ4RvhpZSGnGIvsSZDT2Ly75rFKKRXC3MZceYKEL2Vpp4Y3wOEL7RzTpMA4f_eJoCs6jPCZGEIwFHfWkxy39ZgDxKSsfGn6MO6YpCfDgCMY')" }}>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="relative w-full px-margin-desktop pb-16 max-w-container-max mx-auto">
<span className="text-secondary font-label-md text-label-md uppercase tracking-[0.2em] mb-4 block">Institutional Engagement</span>
<h1 className="text-display-lg font-display-lg text-on-surface leading-tight max-w-2xl">Tailor Your Engagement</h1>
</div>
</header>

<main className="max-w-container-max mx-auto px-margin-desktop py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-16">

<section>
<div className="flex items-center gap-4 mb-8">
<span className="text-secondary text-headline-md font-headline-md">01</span>
<h2 className="text-headline-lg font-headline-lg">Core Service Selection</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="group relative flex items-center p-6 glass-card cursor-pointer hover:border-secondary transition-all">
<input defaultChecked className="hidden peer" name="service" type="radio" />
<div className="w-full">
<span className="block text-secondary text-label-md mb-1">Strategic</span>
<span className="block text-on-surface font-headline-md text-headline-md">Keynote Speaking</span>
<p className="text-on-surface-variant text-label-sm mt-2">Global insights and transformative leadership narratives for high-level summits.</p>
</div>
<div className="opacity-0 peer-checked:opacity-100 absolute top-4 right-4">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
</label>
<label className="group relative flex items-center p-6 glass-card cursor-pointer hover:border-secondary transition-all">
<input className="hidden peer" name="service" type="radio" />
<div className="w-full">
<span className="block text-secondary text-label-md mb-1">Institutional</span>
<span className="block text-on-surface font-headline-md text-headline-md">Strategic Advisory</span>
<p className="text-on-surface-variant text-label-sm mt-2">Private counsel for boards, ministries, and executive committees.</p>
</div>
<div className="opacity-0 peer-checked:opacity-100 absolute top-4 right-4">
<span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
</label>
</div>
</section>

<section>
<div className="flex items-center gap-4 mb-8">
<span className="text-secondary text-headline-md font-headline-md">02</span>
<h2 className="text-headline-lg font-headline-lg">Institutional Enhancements</h2>
</div>
<div className="space-y-4">
<label className="flex items-center justify-between p-4 bg-surface-container-low border-b-2 border-on-surface/10 hover:border-secondary transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 border-secondary text-secondary focus:ring-secondary bg-transparent" type="checkbox" />
<span className="text-on-surface font-body-lg text-body-lg">Social Media Amplification</span>
</div>
<span className="text-secondary font-label-md">+$5,000</span>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-low border-b-2 border-on-surface/10 hover:border-secondary transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 border-secondary text-secondary focus:ring-secondary bg-transparent" type="checkbox" />
<span className="text-on-surface font-body-lg text-body-lg">Archive Content Licensing</span>
</div>
<span className="text-secondary font-label-md">+$12,500</span>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-low border-b-2 border-on-surface/10 hover:border-secondary transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 border-secondary text-secondary focus:ring-secondary bg-transparent" type="checkbox" />
<span className="text-on-surface font-body-lg text-body-lg">Pre-Event Strategy Session</span>
</div>
<span className="text-secondary font-label-md">+$8,000</span>
</label>
<label className="flex items-center justify-between p-4 bg-surface-container-low border-b-2 border-on-surface/10 hover:border-secondary transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<input className="w-5 h-5 border-secondary text-secondary focus:ring-secondary bg-transparent" type="checkbox" />
<span className="text-on-surface font-body-lg text-body-lg">VIP Reception Appearance</span>
</div>
<span className="text-secondary font-label-md">+$15,000</span>
</label>
</div>
</section>

<section>
<div className="flex items-center gap-4 mb-8">
<span className="text-secondary text-headline-md font-headline-md">03</span>
<h2 className="text-headline-lg font-headline-lg">Logistical Particulars</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
<div className="relative">
<label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Audience Scale</label>
<select className="w-full bg-surface-container-low border-b-2 border-on-surface/20 py-4 px-2 focus:border-secondary outline-none transition-colors appearance-none">
<option>Small Group (1-50)</option>
<option>Corporate Hall (51-500)</option>
<option>National Stadium (1000+)</option>
</select>
<span className="material-symbols-outlined absolute right-2 bottom-4 pointer-events-none">expand_more</span>
</div>
<div className="relative">
<label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Technical Requirements</label>
<select className="w-full bg-surface-container-low border-b-2 border-on-surface/20 py-4 px-2 focus:border-secondary outline-none transition-colors appearance-none">
<option>Full AV Suite (4K, Stereo Surround)</option>
<option>Standard Mic (Podium Only)</option>
<option>No Recording Permitted</option>
</select>
<span className="material-symbols-outlined absolute right-2 bottom-4 pointer-events-none">expand_more</span>
</div>
<div className="md:col-span-2 relative">
<label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Venue Location</label>
<input className="w-full bg-surface-container-low border-b-2 border-on-surface/20 py-4 px-2 focus:border-secondary outline-none transition-colors" placeholder="City, Country" type="text" />
</div>
</div>
</section>
</div>

<aside className="lg:col-span-4 h-fit sticky top-24">
<div className="glass-card p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[80px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
</div>
<h3 className="text-headline-md font-headline-md border-b border-on-surface/10 pb-4 mb-6">Investment Summary</h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center text-body-md">
<span className="text-on-surface-variant">Base Engagement</span>
<span className="font-bold text-on-surface">$45,000</span>
</div>
<div className="flex justify-between items-center text-body-md">
<span className="text-on-surface-variant">Technical Logistics</span>
<span className="font-bold text-on-surface">$2,500</span>
</div>
<div className="flex justify-between items-center text-body-md">
<span className="text-on-surface-variant">Regional Premium</span>
<span className="font-bold text-on-surface">$5,000</span>
</div>
</div>
<div className="border-t-2 border-secondary/30 pt-6 mb-10">
<span className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-2">Total Estimated Investment</span>
<div className="text-[40px] font-headline-lg text-secondary">$52,500</div>
<p className="text-on-surface-variant text-label-sm mt-2">Subject to final contract negotiation and board approval.</p>
</div>

<div className="space-y-4">
<button className="w-full bg-secondary text-on-secondary py-5 font-label-md text-label-md uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-secondary/20">
                            Secure Engagement
                        </button>
<button className="w-full border-2 border-secondary text-secondary py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary/10 transition-all">
                            Consult with Management
                        </button>
</div>
</div>
<p className="text-on-surface-variant text-label-sm mt-6 text-center italic">
                    All engagements are governed by the BigBruva Institutional Protocol v4.2.
                </p>
</aside>
</div>
</main>

<footer className="bg-surface-container-lowest dark:bg-surface-container-lowest full-width border-t border-secondary/10">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto">
<div className="flex flex-col items-center md:items-start gap-4">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWvF-nHdw2xKstGjft8ySDVK94zelb6MpCkEiDtT3PB8YXAgFgSYTRjSILgn5BvsGjb8lQmrgvgruVQDyp5-wOa5NCgbujblFQ_9CiIGu8T-eLVUcjr-FzmkhptVpclIV49zl-7XM7EQFTibf-k2lRoNuCBdPeNi1GNgvX4B7FUwB40bOJud9sWs-2TOB6nXSBiJLWIxGhYfQVUOlsC9jjYDuDknGT_-IGmQMPwL4oGy-3cSjdPWDsU2Cha_B7DU9NEB_kmzHoZSs" alt="BIGBRUVA Official Crest" className="h-16 w-auto object-contain mb-2" width={160} height={80} style={{ objectFit: 'contain' }} />
<p className="text-body-md font-body-md text-secondary-fixed-dim max-w-xs text-center md:text-left">Architecting institutional influence through strategic excellence and narrative authority.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="/">Privacy Protocol</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="/">Terms of Engagement</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="/">Strategic Partnerships</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="/media">Media Kit</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors text-label-sm font-label-sm" href="/contact">Contact Registry</a>
</div>
<p className="text-label-sm font-label-sm text-secondary-fixed-dim opacity-60 mt-8 md:mt-0">© 2024 BIGBRUVA Institutional. All Rights Reserved. Part of the Ebidilo Group.</p>
</div>
</footer>
    </>
  );
}
