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
      {/* SideNavBar (Dashboard Specific) */}
      <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 bg-surface-container-lowest border-r border-outline-variant/10 py-4 px-4 z-50">
        <div className="flex flex-col gap-6 h-full">
          {/* Brand Identity */}
          <div className="px-2 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-secondary/20 relative">
                <Image 
                  alt="EJ Institutional Seal" 
                  className="object-contain p-1" 
                  src="/images/EjBigBruva_Logo_Full_No_bg.png"
                  fill
                  sizes="40px"
                />
              </div>
              <div>
                <h1 className="font-headline-md text-headline-md text-secondary leading-none">BIGBRUVA</h1>
                <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Sovereign Management</p>
              </div>
            </div>
          </div>
          {/* Primary CTA */}
          <button className="w-full bg-secondary text-on-secondary-fixed py-3 px-4 rounded-xl font-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer border-none outline-none">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 600" }}>add</span>
            New Broadcast
          </button>
          {/* Navigation Links */}
          <nav className="flex-1 mt-4 space-y-1">
            <Link className="flex items-center gap-3 px-4 py-3 text-on-secondary-container bg-secondary-container rounded-xl font-bold transition-transform active:scale-95" href="/dashboard">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-all" href="/podcast">
              <span className="material-symbols-outlined">mic</span>
              <span className="font-label-md text-label-md">Podcast Admin</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-all" href="/blog">
              <span className="material-symbols-outlined">edit_note</span>
              <span className="font-label-md text-label-md">Blog Manager</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-all" href="/ejs-circle">
              <span className="material-symbols-outlined">groups</span>
              <span className="font-label-md text-label-md">Circle Analytics</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-all" href="/legacy">
              <span className="material-symbols-outlined">account_balance</span>
              <span className="font-label-md text-label-md">Wealth Archival</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-xl transition-all" href="/">
              <span className="material-symbols-outlined">home</span>
              <span className="font-label-md text-label-md">Main Site</span>
            </Link>
          </nav>
          {/* Footer Links */}
          <div className="border-t border-outline-variant/10 pt-4 pb-4 space-y-1">
            <Link className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-secondary transition-colors" href="#">
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md text-label-md">Support</span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-secondary transition-colors" href="#">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md text-label-md">Logout</span>
            </Link>
          </div>
        </div>
      </aside>

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
<div className="w-10 h-10 rounded-full border-2 border-secondary p-0.5 relative">
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

            {/* Right Column: Quick Actions & Alerts */}
            <aside className="lg:col-span-4 space-y-gutter">
              {/* Quick Actions */}
              <div className="glass-card rounded-xl p-6 border-l-4 border-l-secondary">
                <h4 className="font-headline-md text-headline-md text-on-surface mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high rounded-xl border border-outline-variant/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">sensors</span>
                      <span className="font-label-md">New Broadcast</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high rounded-xl border border-outline-variant/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">post_add</span>
                      <span className="font-label-md">Post Article</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high rounded-xl border border-outline-variant/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">calendar_month</span>
                      <span className="font-label-md">Schedule Gathering</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* System Status Shader */}
              <div className="relative h-64 rounded-xl overflow-hidden border border-outline-variant/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#041635] to-transparent p-6 flex flex-col justify-end">
                  <h5 className="font-headline-md text-secondary">Archive Engine</h5>
                  <p className="font-label-sm text-white/80">Processing Sovereign Records: 4.2TB/s</p>
                </div>
              </div>

              {/* Notification Banner */}
              <div className="bg-primary-container p-6 rounded-xl border border-secondary/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-secondary">info</span>
                  <p className="font-label-md text-on-primary-container font-bold uppercase tracking-widest">Sovereign Alert</p>
                </div>
                <p className="font-body-md text-on-surface-variant">Server migration in Sector 7 scheduled for 02:00 UTC. Ensure all circle archival data is synced.</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Dashboard Footer */}
        <footer className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-outline-variant/10 bg-surface-container-lowest mt-16">
          <div className="mb-6 md:mb-0">
            <h3 className="font-headline-lg text-headline-lg text-secondary opacity-20">BIGBRUVA</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">© 2024 BIGBRUVA Institutional. All Rights Reserved.</p>
          </div>
          <div className="flex gap-8">
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="#">Archival Terms</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="#">Legacy Privacy</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="#">Sovereign Rights</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/contact">Contact</Link>
          </div>
        </footer>
      </main>

<div className="fixed inset-0 pointer-events-none opacity-10 z-0">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary filter blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary filter blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
</div>
    </>
  );
}
