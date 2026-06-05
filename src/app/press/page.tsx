"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, observerOptions);

    // Initial hero reveal
    const hero = document.getElementById('hero-content');
    if (hero) {
      setTimeout(() => {
        hero.classList.remove('opacity-0', 'translate-y-8');
        hero.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }

    // Section reveal elements
    document.querySelectorAll('section > div, .space-y-32 > div').forEach(el => {
      if (!el.id) {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000');
        revealObserver.observe(el);
      }
    });

    // Mobile menu toggle logic
    const menuBtn = document.querySelector('nav .material-symbols-outlined[data-icon="menu"], header button.material-symbols-outlined, nav span.material-symbols-outlined:last-child');
    const aside = document.querySelector('aside');
    if (menuBtn && aside) {
      const toggleMenu = () => {
        aside.classList.toggle('hidden');
        aside.classList.toggle('flex');
      };
      menuBtn.addEventListener('click', toggleMenu);
      return () => menuBtn.removeEventListener('click', toggleMenu);
    }

    // Simple Parallax scroll logic for hero image
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('section img');
      if (heroImage instanceof HTMLElement) {
        heroImage.style.transform = `scale(1.05) translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
<nav className="fixed top-0 w-full z-50 bg-surface/70 dark:bg-surface/70 backdrop-blur-md border-b border-on-surface/10">
<div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
<div className="flex items-center gap-4">
<img alt="BIGBRUVA Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKDUJTaZQMpdDOC2D3t7osqjlQOQxKaophIXE6loxPxOQzHL14Sd6mRLxwQH_9wp6_MTNIAld3Xgqf8WEUqZjJEP2ew47rJcn1W7j3XliCqL3Fn3nGotPP4sc6NKw2m6wiUN3oE4CbxLvR5wAX3wNA4iv-pu2LVJamUp_O8z3KIQBmsubc1yvrcxtRynp2YgtxKFsaRKSPfBoJKsBmfsW0yVSW36cxWu8dHK4dqv3dWYjL7WHkBo2ralFMQ69j_6eKNeKEj1x9lrc" />
<span className="font-headline-md text-headline-md uppercase tracking-widest text-on-surface dark:text-on-surface">BIGBRUVA</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/">Home</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/about">About</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/legacy">Legacy</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/media">Media</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-md text-label-md" href="/voice">Voice</a>
<a className="text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md" href="/press">Press</a>
</div>
<div className="flex items-center gap-4">
<button className="font-label-md text-label-md text-secondary border border-secondary px-6 py-2 hover:bg-secondary hover:text-background transition-all">Media Kit</button>
</div>
</div>
</nav>
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
<div className="md:col-span-8 glass-panel p-10 rounded-lg flex flex-col justify-between">
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
<div className="glass-panel p-8 rounded-lg border-l-4 border-secondary">
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

<div className="group relative overflow-hidden rounded-lg">
<img alt="Ejike Ebidilo in Traditional Attire" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="font-label-sm text-label-sm text-secondary mb-1">TRADITIONAL PORTRAIT</p>
<button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> High-Res
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg">
<img alt="Ejike Ebidilo Studio Close-up" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="font-label-sm text-label-sm text-secondary mb-1">STUDIO PROFILE</p>
<button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> High-Res
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg">
<img alt="Ejike Ebidilo Executive Lounge" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="font-label-sm text-label-sm text-secondary mb-1">EXECUTIVE PORTRAIT</p>
<button className="bg-surface text-on-surface px-4 py-2 text-xs rounded border border-secondary/30 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> High-Res
                        </button>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg">
<img alt="Ejike Ebidilo Casual Modern" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
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

<article className="glass-panel group p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container-high transition-cubic cursor-pointer transition-all duration-1000 opacity-100 translate-y-0">
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

<article className="glass-panel group p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start hover:bg-surface-container-high transition-cubic cursor-pointer transition-all duration-1000 opacity-100 translate-y-0">
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

<section className="glass-panel p-16 rounded-xl text-center border-t-4 border-secondary overflow-hidden relative transition-all duration-1000 opacity-100 translate-y-0">
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

<footer className="bg-surface-container-lowest border-t border-secondary/20 py-16 px-margin-desktop">
<div className="flex flex-col items-center justify-center space-y-8 w-full max-w-container-max mx-auto">
<div className="flex flex-col items-center">

<div className="mt-4 flex flex-col items-center"></div>
</div>
<nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-sm text-label-sm uppercase tracking-widest" href="/legacy">Legacy Archive</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-sm text-label-sm uppercase tracking-widest" href="/">Privacy Policy</a>
<a className="text-secondary hover:text-secondary transition-colors font-label-sm text-label-sm uppercase tracking-widest" href="/press">Press Kit</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-sm text-label-sm uppercase tracking-widest" href="/media">Media Inquiries</a>
</nav>
<div className="editorial-line w-24"></div>
<p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant text-center opacity-60">
                © 2024 BIGBRUVA. THE ORIGINAL BIG BROTHER. ALL RIGHTS RESERVED.
            </p>
</div>
</footer>
    </>
  );
}
