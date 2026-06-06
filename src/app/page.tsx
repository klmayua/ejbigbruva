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
      {/* Page specific overrides to hide global nav/footer */}
      <style dangerouslySetInnerHTML={{__html: `
        body > nav { display: none !important; }
        body > footer { display: none !important; }
      `}} />

      {/* TopNavBar (Homepage Specific) */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center">
          <div className="relative h-12 md:h-16 w-32 md:w-48 shrink-0">
            <Image 
              alt="BIGBRUVA Logo" 
              src="/images/EjBigBruva_Logo_Full_No_bg.png" 
              fill
              className="object-contain object-left"
              sizes="(max-width: 768px) 128px, 192px"
              priority
            />
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="font-label-md text-secondary border-b-2 border-secondary pb-1 cursor-pointer transition-all">Home</Link>
          <Link href="/about" className="font-label-md text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">About</Link>
          <Link href="/legacy" className="font-label-md text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">Legacy</Link>
          <Link href="/media" className="font-label-md text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">Media</Link>
          <Link href="/voice" className="font-label-md text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">Voice</Link>
          <Link href="/events" className="font-label-md text-on-surface-variant hover:text-secondary cursor-pointer transition-colors duration-300">Events</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="px-6 py-2 bg-secondary text-on-secondary font-label-md rounded-lg hover:brightness-110 transition-all cursor-pointer active:scale-95 shadow-lg">Contact</Link>
          <span className="material-symbols-outlined text-secondary cursor-pointer md:hidden select-none">menu</span>
        </div>
      </nav>

      {/* SideNavBar (Hidden on Mobile/Tablet) */}
      <aside className="fixed left-0 top-0 h-full w-72 z-40 hidden xl:flex flex-col bg-surface-container-lowest border-r border-outline-variant/10 shadow-2xl">
        <div className="p-8 border-b border-outline-variant/10">
          <div className="relative w-32 h-16 mb-4">
            <Image 
              alt="BIGBRUVA Logo" 
              src="/images/EjBigBruva_Logo_Full_No_bg.png" 
              fill
              className="object-contain object-left"
              sizes="128px"
            />
          </div>
          <p className="font-label-sm text-on-surface-variant tracking-wider uppercase opacity-70">Ejike Ebidilo Institutional</p>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <Link href="/" className="flex items-center gap-4 p-3 bg-secondary/10 text-secondary rounded-lg font-semibold transition-all duration-200">
            <span className="material-symbols-outlined">home</span>
            <span className="font-label-md">Home</span>
          </Link>
          <Link href="/about" className="flex items-center gap-4 p-3 text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">person_celebrate</span>
            <span className="font-label-md">About</span>
          </Link>
          <Link href="/legacy" className="flex items-center gap-4 p-3 text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">history_edu</span>
            <span className="font-label-md">Legacy</span>
          </Link>
          <Link href="/media" className="flex items-center gap-4 p-3 text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">video_library</span>
            <span className="font-label-md">Media</span>
          </Link>
          <Link href="/voice" className="flex items-center gap-4 p-3 text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">record_voice_over</span>
            <span className="font-label-md">Voice</span>
          </Link>
          <Link href="/events" className="flex items-center gap-4 p-3 text-on-surface-variant hover:bg-surface-container hover:text-on-surface rounded-lg transition-all duration-200 cursor-pointer">
            <span className="material-symbols-outlined">event</span>
            <span className="font-label-md">Events</span>
          </Link>
        </div>
        <div className="p-8">
          <Link href="/community" className="w-full py-3 bg-secondary text-on-secondary font-bold rounded-lg transition-transform hover:brightness-110 active:scale-95 shadow-xl block text-center">
            Join Community
          </Link>
        </div>
      </aside>

      <main className="xl:pl-72">

<section className="relative min-h-[90vh] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<Image src="/images/EJ_Agbada_01.jpeg" alt="Ejike Ebidilo in traditional Agbada" className="w-full h-full object-cover object-center" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 hero-gradient"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>
<div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-4xl py-20">
<span className="font-label-md text-secondary tracking-[0.2em] uppercase mb-6 block">Institutional Identity</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-tight">
                    THE ORIGINAL <br/> <span className="text-secondary italic">BIG BROTHER.</span>
</h1>
<p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                    Broadcaster. Storyteller. Mentor. <br/>
<span className="text-on-background font-bold">Voice of Generations.</span>
</p>
<p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-xl mb-12">
                    For over four decades, Ejike Ebidilo has been the resonance behind Nigeria's most iconic broadcasts, shaping the cultural conversation and mentoring the architects of modern media.
                </p>
<div className="flex flex-wrap gap-6">
<button className="px-8 py-4 bg-secondary text-on-secondary font-bold rounded hover:-translate-y-1 transition-all shadow-xl">The Legacy</button>
<button className="px-8 py-4 border border-secondary/40 text-secondary font-bold rounded hover:bg-secondary/10 transition-all">Latest Media</button>
</div>
</div>

<div className="absolute right-margin-desktop bottom-1/4 hidden xl:block">
<div className="vertical-text font-label-sm text-secondary/40 tracking-[0.6em] uppercase pointer-events-none select-none">
                    EJIKE EBIDILO • SINCE 1978
                </div>
</div>
</section>

<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter border-y border-outline-variant/20 py-20">
<div className="text-center group">
<div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">45+</div>
<div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Years of Excellence</div>
</div>
<div className="text-center group">
<div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">5000+</div>
<div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Hours On Air</div>
</div>
<div className="text-center group">
<div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">120+</div>
<div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Protégés Mentored</div>
</div>
<div className="text-center group">
<div className="font-display-lg text-headline-lg md:text-display-lg text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">15</div>
<div className="font-label-sm text-on-surface-variant uppercase tracking-widest">National Awards</div>
</div>
</div>
</section>

<section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7 flex flex-col justify-center">
<span className="font-label-md text-secondary mb-6 block uppercase tracking-widest">Featured Chronicle</span>
<h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-background mb-10 leading-tight">
                        A Life Behind The <br/> <span className="text-secondary italic">Microphone.</span>
</h2>
<div className="space-y-6 font-body-lg text-on-surface-variant/90 leading-relaxed max-w-2xl">
<p>
                            From the early days of radio waves reaching across the federation to the digital frontier of global streaming, Ejike's voice has been a constant companion to millions.
                        </p>
<p>
                            His approach to storytelling transcends mere reporting; it is an art form rooted in deep empathy, linguistic precision, and an unwavering commitment to the truth. Whether narrating a nation's history or guiding a new talent, the "Big Brother" archetype is felt in every syllable.
                        </p>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-4 text-secondary font-label-md group hover:gap-6 transition-all" href="/">
                            READ THE FULL ARCHIVE
                            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
<div className="md:col-span-5 relative">
<div className="aspect-[3/4] bg-surface-container overflow-hidden rounded shadow-2xl relative">
<Image src="/images/EJ_casual_01.jpeg" alt="Ejike Ebidilo in a casual portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute bottom-6 left-6 p-6 glass-panel max-w-[260px] rounded shadow-xl">
<p className="font-label-sm text-secondary italic mb-2 tracking-tight">Internal Monologue</p>
<p className="font-body-md text-on-surface">"The voice is the soul's first draft of reality."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-surface-container-low overflow-hidden relative">
<div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
<span className="material-symbols-outlined text-secondary text-7xl mb-12 opacity-50" data-icon="format_quote">format_quote</span>
<blockquote className="font-display-lg text-headline-lg md:text-display-lg text-on-background mb-12 italic leading-tight">
                    "Great broadcasting isn't about the volume of your voice, but the depth of the silence you command between your words."
                </blockquote>
<div className="h-1 w-24 bg-secondary mx-auto mb-8"></div>
<cite className="font-label-md text-secondary tracking-[0.3em] uppercase not-italic">Ejike Ebidilo, 2024</cite>
</div>
</section>

<section className="py-32 px-margin-mobile md:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<span className="font-label-md text-secondary mb-4 block uppercase tracking-widest">Media Repository</span>
<h2 className="font-headline-lg text-on-background">Echoes of Influence</h2>
</div>
<button className="font-label-md text-on-surface-variant hover:text-secondary transition-colors border-b border-transparent hover:border-secondary pb-1 uppercase tracking-widest">View All Archives</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
<Image src="/images/EJ_Agbada_01.jpeg" alt="Vintage portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
<span className="material-symbols-outlined text-white text-5xl" data-icon="play_circle">play_circle</span>
</div>
</div>
<h3 className="font-headline-md text-on-background mb-2">The Golden Era Interviews</h3>
<p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Archived Audio • 1994</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-surface-container-highest mb-6 overflow-hidden relative rounded-lg flex items-center justify-center border border-outline-variant/10">
<span className="material-symbols-outlined text-secondary/10 text-9xl group-hover:scale-110 transition-transform duration-1000" data-icon="mic">mic</span>
<div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
<span className="material-symbols-outlined text-white text-5xl" data-icon="podcasts">podcasts</span>
</div>
</div>
<h3 className="font-headline-md text-on-background mb-2">Voice of Generations</h3>
<p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Monograph • 2023</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-surface-container mb-6 overflow-hidden relative rounded-lg">
<Image src="/images/EJ_casual_01.jpeg" alt="Creative session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" fill sizes="(max-width: 768px) 100vw, 50vw" />
<div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
<span className="material-symbols-outlined text-white text-5xl" data-icon="auto_stories">auto_stories</span>
</div>
</div>
<h3 className="font-headline-md text-on-background mb-2">Beyond the Script</h3>
<p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Masterclass • Ongoing</p>
</div>
</div>
</section>

      {/* Footer Section */}
      <footer className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/10 text-center">
        <div className="mb-12">
          <img 
            alt="BIGBRUVA Crest" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzoQachYWqkheryCjc0oj1MFa-C1ZPMJ7iMTX-2-IDj7U9vodjQkBDg6bzs8DGk-WmboILzxQlYaQcA2aHbUEYZcJRksEek2fr3QWgIrtR-1uivfoHhCgtW90_f6_8W4NQYgsLsKZ0qSQin7U0OqkqxqrlplbfTuEt6pFWYYQmG4aDRV2AFdu5ZJyhZyKPZTRJaMbuic6zpM-OG6I9l73dLr-tV4GAyFoG0xg_-5hrsvTea3SIsK9OnWGI5gPT5RFgnnA0E5N6ZZU" 
            className="h-40 md:h-56 w-auto mx-auto object-contain mb-8" 
          />
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy</Link>
            <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="/press">Press</Link>
            <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</Link>
            <Link className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</Link>
          </div>
          <div className="flex justify-center gap-10 mb-10">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110">public</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110">podcasts</span>
            <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary cursor-pointer transition-all hover:scale-110">video_library</span>
          </div>
          <p className="font-label-sm text-on-surface-variant/40 tracking-widest uppercase">
            © 2024 BIGBRUVA - Ejike Ebidilo. All Rights Reserved.
          </p>
        </div>
      </footer>
</main>

    </>
  );
}
