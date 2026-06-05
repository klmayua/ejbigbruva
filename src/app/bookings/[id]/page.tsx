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


</div>
</main>


    </>
  );
}
