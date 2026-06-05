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
      

<main className="pt-32 pb-24">

<section className="relative px-margin-desktop max-w-container-max mx-auto mb-32">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 space-y-8 z-10">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-md text-label-md text-secondary tracking-widest uppercase">The Sovereign Assembly</span>
</div>
<h1 className="font-display-lg text-display-lg royal-gradient-text leading-tight">
                        Gathering the Pillars of <br/>Modern Sovereignty.
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                        EJ's Circle is an exclusive fraternity dedicated to the cultivation of Wisdom, the preservation of Health, and the fortification of Wealth. Step into the inner sanctum of institutional knowledge.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 pt-4">
<button className="bg-secondary text-on-secondary-container px-10 py-4 rounded-xl font-label-md text-lg hover:bg-secondary-fixed transition-all shadow-xl shadow-secondary/10">
                            Apply for Membership
                        </button>
<button className="border border-secondary/40 text-secondary px-10 py-4 rounded-xl font-label-md text-lg hover:bg-secondary/5 transition-all">
                            View The Pillars
                        </button>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="relative z-10 aspect-[2/3] w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuy0CFtoE9DY-Yl2RLWmytXbM9KK9D3uOn0jZu5K9xHoWGSsp5iXaGeS2O-oZgiYkrJWxvQgsrXRO8zvOF7mUVgSW0fnOweRhspvCBDwf5pUkTOlvIk3Uh885vDhNK4qlnNp4gwIaVxnZfCRk0azKWC2dvFk2l7XR5BPsXk5wrBucR9Xnbxxu34DjazKMTqTOTpX9EC7hQP-x9TVUN7gbUe9LXlSC_BCjDq1tNDxD4LIjMXZLSzrzuF9oCXwFu6CjyZHEkG67rtKo" alt="EJ Agbada 01" className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0e] via-transparent to-transparent opacity-60"></div>
</div>

<div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
<div className="absolute -bottom-12 -left-12 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] -z-10"></div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-32 mb-32">
<div className="px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-20 space-y-4">
<h2 className="font-headline-lg text-headline-lg text-secondary">The Foundational Pillars</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                        The architecture of a sovereign man is built upon three non-negotiable foundations. Within the Circle, we master each with institutional precision.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-01 p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
<span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Wisdom</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Deep archival knowledge and strategic discernment. Transitioning from mere information to profound institutional insight.
                        </p>
</div>

<div className="glass-01 p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
<span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Health</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            The physical temple. Optimization of biological function and resilience through elite-level wellness protocols.
                        </p>
</div>

<div className="glass-01 p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
<span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Wealth</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Legacy-scale financial architecture. Strategic archival of capital and the generation of generational abundance.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-margin-desktop max-w-container-max mx-auto mb-32">
<div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
<div>
<span className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase">Selection</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">Institutional Tiers</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                    Access levels curated for your current stage of the sovereign journey. From foundational growth to absolute management.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20 rounded-3xl overflow-hidden">

<div className="p-12 border-r border-outline-variant/20 bg-surface-container-lowest flex flex-col">
<div className="mb-12">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-2">Tier I</h4>
<h3 className="font-headline-md text-headline-md text-on-surface">Bronze</h3>
</div>
<ul className="space-y-6 mb-12 flex-grow">
<li className="flex gap-3 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Monthly Pillar Briefings
                        </li>
<li className="flex gap-3 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Community Access
                        </li>
<li className="flex gap-3 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Digital Archive Entry
                        </li>
</ul>
<button className="w-full py-4 border border-outline-variant text-on-surface font-label-md hover:bg-surface-container-high transition-colors">Select Bronze</button>
</div>

<div className="p-12 border-r border-outline-variant/20 bg-primary-container/20 flex flex-col relative">
<div className="absolute top-0 right-12 bg-secondary text-on-secondary-fixed px-4 py-1 font-label-sm uppercase rounded-b-lg">Most Active</div>
<div className="mb-12">
<h4 className="font-label-md text-secondary uppercase tracking-widest mb-2">Tier II</h4>
<h3 className="font-headline-md text-headline-md text-on-surface">Silver</h3>
</div>
<ul className="space-y-6 mb-12 flex-grow">
<li className="flex gap-3 text-on-surface font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Weekly Live Sessions
                        </li>
<li className="flex gap-3 text-on-surface font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Gathering Priority
                        </li>
<li className="flex gap-3 text-on-surface font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Resource Library Pro
                        </li>
<li className="flex gap-3 text-on-surface font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Direct EJ Q&amp;A
                        </li>
</ul>
<button className="w-full py-4 bg-secondary text-on-secondary-fixed font-label-md hover:opacity-90 transition-opacity">Select Silver</button>
</div>

<div className="p-12 bg-surface-container-lowest flex flex-col">
<div className="mb-12">
<h4 className="font-label-md text-on-surface-variant uppercase tracking-widest mb-2">Tier III</h4>
<h3 className="font-headline-md text-headline-md text-on-surface">Sovereign</h3>
</div>
<ul className="space-y-6 mb-12 flex-grow">
<li className="flex gap-3 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Private 1-on-1 Counsel
                        </li>
<li className="flex gap-3 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Inner Circle Retreats
                        </li>
<li className="flex gap-3 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Full Portfolio Audit
                        </li>
<li className="flex gap-3 text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-secondary text-xl">check_circle</span> Legacy Protection Vault
                        </li>
</ul>
<button className="w-full py-4 border border-secondary text-secondary font-label-md hover:bg-secondary/5 transition-colors">Apply for Sovereign</button>
</div>
</div>
</section>

<section className="px-margin-desktop max-w-container-max mx-auto mb-32">
<div className="bg-surface-container rounded-3xl p-12 lg:p-20 relative overflow-hidden">
<div className="relative z-10">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
<h2 className="font-headline-lg text-headline-lg text-secondary mb-4 md:mb-0">Upcoming Gatherings</h2>
<button className="flex items-center gap-2 text-secondary font-label-md hover:gap-4 transition-all">
                            View All Events <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="space-y-6">

<div className="flex flex-col md:flex-row md:items-center gap-8 p-6 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 transition-colors group cursor-pointer bg-surface-container-highest/30">
<div className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-secondary/10 border border-secondary/20">
<span className="font-headline-md text-secondary">14</span>
<span className="font-label-sm text-on-surface-variant uppercase">OCT</span>
</div>
<div className="flex-grow">
<h4 className="font-headline-md text-on-surface mb-1 group-hover:text-secondary transition-colors">Sovereign Wealth Intensive</h4>
<p className="font-body-md text-on-surface-variant">London, UK &amp; Digital Stream</p>
</div>
<button className="bg-surface-container-high px-8 py-3 rounded-lg text-on-surface font-label-md border border-outline-variant/30 hover:bg-secondary hover:text-on-secondary-fixed transition-all">
                                Register
                            </button>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-8 p-6 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 transition-colors group cursor-pointer bg-surface-container-highest/30">
<div className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-secondary/10 border border-secondary/20">
<span className="font-headline-md text-secondary">02</span>
<span className="font-label-sm text-on-surface-variant uppercase">NOV</span>
</div>
<div className="flex-grow">
<h4 className="font-headline-md text-on-surface mb-1 group-hover:text-secondary transition-colors">The Wisdom Summit</h4>
<p className="font-body-md text-on-surface-variant">Lagos, Nigeria | Private Location</p>
</div>
<button className="bg-surface-container-high px-8 py-3 rounded-lg text-on-surface font-label-md border border-outline-variant/30 hover:bg-secondary hover:text-on-secondary-fixed transition-all">
                                Register
                            </button>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoiuz0ZKnOe9tYMYLUi_B_7JYe0N-WPQeXIFI_7fItbHNqayaVBWtAtsnx8o9iXJLf9NmTFDJ6MXUBUU95ztYGgMncVUNYdVvSXeT2JckhaK0bj2r2sHlGVskN_SXD3qEPxJBUrjQu6fJRY9RSJjZ-ZftXP67v_j674r26G-MN_x0y0SAmdhxJWWb1dPLhncz-UcdU0gli2teJfV2U39FmPj8atNfJ3tgPUxr7bQO7x5jogoHg4SSPVbz1IaMEeZfbV7bKJYyYDE" alt="Institutional background" className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
</div>
</section>

<section className="px-margin-desktop max-w-container-max mx-auto">
<div className="relative rounded-3xl overflow-hidden py-24 text-center">
<div className="absolute inset-0 bg-[#082e73] opacity-90"></div>
<div className="absolute inset-0">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3MRo4r1m7QNx5bWEQaMNO_XdApM6dZbqpkkL9NJ2tq4HNWlKLw28FcfEn0J2LKMvHnyUqfKTSPAiqyXvcS1R9a_kSg-YDqc6g4lA9VEA1eAer2EWfFofFnPn-gEt9wluEvN6xED_iGmj1tcTEbBn_nA-8yRhP6hso6Pjn5z6p0_nxqKB8uSQKmAeUrm8sMemEojKrLylIse9ZXbRRxDrTbhrhj8DxMXf0SjPS7qWxOrI31bzCYyopjXlQhJhUv1Y3IutzyvSlxmA" alt="Executive space" className="w-full h-full object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="relative z-10 max-w-3xl mx-auto px-6">
<h2 className="font-display-lg text-display-lg text-secondary mb-8">Ready to step into <br/>The Circle?</h2>
<p className="font-body-lg text-body-lg text-on-primary-container mb-12">
                        Applications are currently open for the Q4 Cohort. Join a brotherhood of men committed to the highest expression of their potential.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="bg-secondary text-on-secondary-fixed px-12 py-5 rounded-full font-label-md text-lg hover:scale-105 transition-transform shadow-2xl">
                            Join The Circle
                        </button>
<button className="border border-white/20 text-white backdrop-blur-md px-12 py-5 rounded-full font-label-md text-lg hover:bg-white/10 transition-all">
                            Talk to an Advisor
                        </button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
