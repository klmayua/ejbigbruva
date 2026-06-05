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
      


<main className="flex-1 md:ml-64 relative min-h-screen overflow-y-auto bg-surface-container-lowest">

<header className="sticky top-0 w-full z-40 flex justify-between items-center px-margin-desktop py-6 bg-primary-container/70 backdrop-blur-md border-b border-outline-variant/10">
<div>
<h2 className="font-headline-md text-headline-md text-secondary uppercase tracking-tighter">Command Center</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant">Welcome back, EJ. The sovereign ecosystem is stable.</p>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/20">
<span className="material-symbols-outlined text-secondary text-sm mr-2">search</span>
<input className="bg-transparent border-none text-on-surface font-label-sm focus:ring-0 placeholder-on-surface-variant/40 w-48" placeholder="Search archive..." type="text"/>
</div>
<button className="bg-secondary text-on-secondary-fixed font-label-md px-6 py-2 rounded-full transition-opacity active:opacity-80">
                    Join The Circle
                </button>
<div className="w-10 h-10 rounded-full border-2 border-secondary p-0.5">
<Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcnpzog0FwEy88AZYurgd7UvQCkNDy_3eH1x9_q2-rB0TAahXXO0UOGILo7NOC3Z63wPmmZdX4-0zuwAdgmivbg3B2TyZ1WNRWLR6anOmJFXLi-ZWGyI6zeIFMhYk3jcEjYQOpj39kAL0qWBur4jjs5F_9IDKkMdC_puOjBxwczXauMMs4qnNMm71SWW-RUWwhKhk2mSb-PlnyrXlgNOaNpsXF9iKCz4LhjidTFUy61Tcl9GyisCbFIjaFGKy2rsQcwKgH8uhZzIE" alt="EJ Profile" className="w-full h-full object-cover rounded-full" fill sizes="(max-width: 768px) 100vw, 50vw" />
</div>
</div>
</header>
<div className="px-margin-desktop py-10 max-w-7xl mx-auto">

<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">

<div className="glass-card p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="material-symbols-outlined text-4xl" data-icon="podcast">podcasts</span>
</div>
<p className="font-label-md text-on-surface-variant mb-2">Podcast Listens</p>
<div className="flex items-baseline gap-2">
<h3 className="font-headline-lg text-headline-lg text-on-surface">142.8k</h3>
<span className="text-secondary font-label-sm flex items-center">+12%</span>
</div>
<div className="mt-4 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ width: "75%" }}></div>
</div>
</div>

<div className="glass-card p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="material-symbols-outlined text-4xl" data-icon="diversity_3">diversity_3</span>
</div>
<p className="font-label-md text-on-surface-variant mb-2">Community Growth</p>
<div className="flex items-baseline gap-2">
<h3 className="font-headline-lg text-headline-lg text-on-surface">32,401</h3>
<span className="text-secondary font-label-sm flex items-center">+4.2%</span>
</div>
<div className="mt-4 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ width: "45%" }}></div>
</div>
</div>

<div className="glass-card p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="material-symbols-outlined text-4xl" data-icon="verified_user">verified_user</span>
</div>
<p className="font-label-md text-on-surface-variant mb-2">Archive Integrity</p>
<div className="flex items-baseline gap-2">
<h3 className="font-headline-lg text-headline-lg text-on-surface">99.9%</h3>
<span className="text-secondary font-label-sm flex items-center">Stable</span>
</div>
<div className="mt-4 w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ width: "99%" }}></div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-8 space-y-6">
<div className="flex justify-between items-center mb-4">
<h4 className="font-headline-md text-headline-md text-on-surface">Institutional Log</h4>
<button className="text-secondary font-label-sm hover:underline">View All Records</button>
</div>
<div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden">
<div className="p-6 border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex items-start gap-4">
<div className="bg-primary-container p-3 rounded-full">
<span className="material-symbols-outlined text-secondary" data-icon="broadcast_on_home">broadcast_on_home</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-body-lg text-on-surface font-semibold">Live Broadcast: "The Sovereign Mindset"</p>
<span className="font-label-sm text-on-surface-variant">2h ago</span>
</div>
<p className="font-body-md text-on-surface-variant mt-1">Successfully streamed to 12.4k concurrent listeners. Engagement rate: 84%.</p>
<div className="mt-4 flex gap-4">
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-secondary">EJlive</span>
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-tertiary-container">Completed</span>
</div>
</div>
</div>
</div>
<div className="p-6 border-b border-outline-variant/10 hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="bg-primary-container p-3 rounded-full">
<span className="material-symbols-outlined text-secondary" data-icon="article">article</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-body-lg text-on-surface font-semibold">New Blog Publication: "Wealth Archival Principles"</p>
<span className="font-label-sm text-on-surface-variant">5h ago</span>
</div>
<p className="font-body-md text-on-surface-variant mt-1">Managed by Sarah K. Article scheduled for distribution across EJ's Circle.</p>
<div className="mt-4 flex gap-4">
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-secondary">Blog Manager</span>
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-tertiary-container">Published</span>
</div>
</div>
</div>
</div>
<div className="p-6 hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="flex items-start gap-4">
<div className="bg-primary-container p-3 rounded-full">
<span className="material-symbols-outlined text-secondary" data-icon="event_note">event_note</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-body-lg text-on-surface font-semibold">Circle Gathering Scheduled</p>
<span className="font-label-sm text-on-surface-variant">Yesterday</span>
</div>
<p className="font-body-md text-on-surface-variant mt-1">Monthly mastermind session set for Dec 15th. 450 RSVPs confirmed within 20 minutes.</p>
<div className="mt-4 flex gap-4">
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-secondary">EJ's Circle</span>
<span className="px-3 py-1 bg-surface-container-highest rounded-full font-label-sm text-on-tertiary-container">Scheduled</span>
</div>
</div>
</div>
</div>
</div>
</div>


</div>
</div>


</main>

<div className="fixed inset-0 pointer-events-none opacity-10 z-0">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary filter blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary filter blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
</div>
    </>
  );
}
