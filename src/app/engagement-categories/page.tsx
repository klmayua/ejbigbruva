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
      

<main className="pt-24">

<section className="relative h-[80vh] flex items-center px-margin-desktop overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-[#121413] via-[#121413]/60 to-transparent z-10"></div>
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPQROOtZ9sZToGRTaQP4UUBSblYZD5YxnzGTUvJfC-qcyQmZEbkcNc9NRHaxspmM_90Lvii4So4ywNQop3-RUHy7_BQkGmmHHhTLkPYUR_t8LDr6WGpDyP-VDLWaw08pNFUG8SDOKSM0zBryz6IWYEDeKnTiDxjSjmDRIhlvuUXVRkW0MdioLmXWFxRNifrbKJQ5GpXUk-KtsHl8S5VAtFnkS8APND9I3l9U95ZH_z7zAO4I9XV41wH_mo2bgo4XwO15kvc1yBpmQ" alt="Hero Image" className="w-full h-full object-cover object-top opacity-60" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="relative z-20 max-w-3xl">
<span className="font-label-md text-label-md text-secondary uppercase tracking-[0.3em] mb-4 block">Institutional Engagements</span>
<h1 className="font-display-lg text-display-lg text-shadow-premium leading-tight mb-6">
                    Secure the <span className="italic">voice</span> of a generation.
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                    Executive-level presence for summits, panels, and prestige brand partnerships. Elevate your institutional narrative through deep timbre narration and industry leadership.
                </p>
<div className="flex gap-6">
<a className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-label-md flex items-center gap-2 hover:bg-secondary/90 transition-all" href="#services">
                        EXPLORE SERVICES
                        <span className="material-symbols-outlined text-sm">arrow_downward</span>
</a>
</div>
</div>
</section>

<section className="py-24 px-margin-desktop max-w-container-max mx-auto" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline-lg text-headline-lg mb-4 underline decoration-secondary/30 underline-offset-8">Engagement Models</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Select the spheres of influence required for your engagement. Our management will tailor the protocol to your specific institutional needs.</p>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Phase 01: Scope Selection</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">

<div className="service-card glass-01 p-8 rounded-lg cursor-pointer transition-all hover:border-secondary group" onClick={() => {}}>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">podium</span>
<h3 className="font-headline-md text-headline-md mb-2">Keynote Speaking</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-6 uppercase tracking-wider">Institutional Focus</p>
<p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Visionary discourse for global summits and corporate annuals.</p>
</div>

<div className="service-card glass-01 p-8 rounded-lg cursor-pointer transition-all hover:border-secondary group" onClick={() => {}}>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">groups</span>
<h3 className="font-headline-md text-headline-md mb-2">Panel Moderation</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-6 uppercase tracking-wider">Industry Leadership</p>
<p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Strategic dialogue facilitation with high-level stakeholders.</p>
</div>

<div className="service-card glass-01 p-8 rounded-lg cursor-pointer transition-all hover:border-secondary group" onClick={() => {}}>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">workspace_premium</span>
<h3 className="font-headline-md text-headline-md mb-2">Brand Ambassadorship</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-6 uppercase tracking-wider">Prestige Partnerships</p>
<p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Long-term alignment with Tier-1 luxury and financial entities.</p>
</div>

<div className="service-card glass-01 p-8 rounded-lg cursor-pointer transition-all hover:border-secondary group" onClick={() => {}}>
<span className="material-symbols-outlined text-secondary text-4xl mb-6">mic</span>
<h3 className="font-headline-md text-headline-md mb-2">Voiceover Commissions</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant mb-6 uppercase tracking-wider">Deep Timbre Narration</p>
<p className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Authoritative vocal presence for commercials and documentaries.</p>
</div>
</div>
</section>


<section className="py-24 px-margin-desktop max-w-container-max mx-auto">
<h2 className="font-headline-lg text-headline-lg text-center mb-16">The Path to Engagement</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="text-center space-y-4">
<div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mx-auto mb-6">
<span className="font-headline-md text-headline-md text-secondary">1</span>
</div>
<h3 className="font-headline-md text-headline-md">Vetting</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Our team reviews all inquiries for institutional alignment and schedule feasibility.</p>
</div>
<div className="text-center space-y-4">
<div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mx-auto mb-6">
<span className="font-headline-md text-headline-md text-secondary">2</span>
</div>
<h3 className="font-headline-md text-headline-md">Briefing</h3>
<p className="font-body-md text-body-md text-on-surface-variant">A strategic alignment session to define speech objectives and technical requirements.</p>
</div>
<div className="text-center space-y-4">
<div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center mx-auto mb-6">
<span className="font-headline-md text-headline-md text-secondary">3</span>
</div>
<h3 className="font-headline-md text-headline-md">Execution</h3>
<p className="font-body-md text-body-md text-on-surface-variant">On-site delivery of professional services with complete executive support.</p>
</div>
</div>
</section>

<section className="h-[60vh] relative">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-NctS94O-v_SPgyVCUzwqomvKzY6gwcJdJI0HCeTnV3jIkf_eccqR8fK8dNBCV3fYs0mdrjVpqoc3YiQmTvXzV14ngrtrPGTeIo00ECGQ1KbPzItRRTw8GBsZ94CyVCzvxkYrOcNddUJA8uyb9lZ-984dV1kPu8GaluuUadYZZL79aWN8XZG90qNmOyG1y0v4g_8dEBXinRL8qnGN0-x_GRfhq69V57iz6FXCG4rmhQXMobleLZzHQx6xGLGoOPC6HAK6sY7qlrA" alt="Atmospheric Shot" className="w-full h-full object-cover grayscale opacity-30" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
</section>
</main>


    </>
  );
}
