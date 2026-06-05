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
<div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto h-20">
<div className="flex items-center gap-4">
<img alt="BIGBRUVA Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKDUJTaZQMpdDOC2D3t7osqjlQOQxKaophIXE6loxPxOQzHL14Sd6mRLxwQH_9wp6_MTNIAld3Xgqf8WEUqZjJEP2ew47rJcn1W7j3XliCqL3Fn3nGotPP4sc6NKw2m6wiUN3oE4CbxLvR5wAX3wNA4iv-pu2LVJamUp_O8z3KIQBmsubc1yvrcxtRynp2YgtxKFsaRKSPfBoJKsBmfsW0yVSW36cxWu8dHK4dqv3dWYjL7WHkBo2ralFMQ69j_6eKNeKEj1x9lrc" />
<span className="font-headline-md text-headline-md uppercase tracking-widest text-on-surface dark:text-on-surface">BIGBRUVA</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/">Home</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/about">About</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/legacy">Legacy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/media">Media</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/voice">Voice</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-300 font-label-md text-label-md" href="/events">Events</a>
<a className="text-secondary font-bold border-b-2 border-secondary pb-1 font-label-md text-label-md" href="/contact">Contact</a>
</div>
<div className="flex gap-4">
<button className="bg-secondary text-on-secondary px-6 py-2 font-label-md text-label-md uppercase tracking-widest transition-transform active:scale-95">Gallery</button>
</div>
</div>
</nav>

<header className="pt-40 pb-20 px-margin-desktop max-w-container-max mx-auto">
<div className="max-w-3xl">
<h1 className="font-display-lg text-display-lg mb-4 text-on-surface leading-tight">Institutional Inquiries</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">The office of BIGBRUVA manages all global media, speaking engagements, and official partnerships for Ejike Ebidilo.</p>
</div>
</header>
<main className="px-margin-desktop max-w-container-max mx-auto pb-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

<div className="lg:col-span-5 space-y-gutter">

<div className="glass-card p-10 flex flex-col h-full group hover:border-secondary transition-colors duration-500">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-secondary text-4xl">movie</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Media Requests</h3>
</div>
<p className="text-on-surface-variant font-body-md mb-8 flex-grow">For press interviews, broadcast appearances, and digital features. Our media team ensures rapid vetting and official statements.</p>
<a className="text-secondary font-label-md text-label-md uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:media@bigbruva.com">
            media@bigbruva.com <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>

<div className="glass-card p-10 flex flex-col group hover:border-secondary transition-colors duration-500">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-secondary text-4xl">mic</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Speaking &amp; Events</h3>
</div>
<p className="text-on-surface-variant font-body-md mb-8">Official bookings for keynote addresses, corporate leadership seminars, and high-profile public appearances.</p>
<a className="text-secondary font-label-md text-label-md uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:bookings@bigbruva.com">
            bookings@bigbruva.com <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>

<div className="glass-card p-10 flex flex-col group hover:border-secondary transition-colors duration-500">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-secondary text-4xl">handshake</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Partnerships</h3>
</div>
<p className="text-on-surface-variant font-body-md mb-8">Strategic alliances with institutions that align with the BIGBRUVA legacy of excellence and authority.</p>
<a className="text-secondary font-label-md text-label-md uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href="mailto:partnerships@bigbruva.com">
            partnerships@bigbruva.com <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</div>

<div className="lg:col-span-7">
<div className="glass-card p-12 h-full">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-12">Submit Formal Inquiry</h2>
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="flex flex-col">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
<input className="text-input text-on-surface py-3" placeholder="Johnathan Sterling" type="text" />
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Professional Email</label>
<input className="text-input text-on-surface py-3" placeholder="sterling@corp.com" type="email" />
</div>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Organization / Department</label>
<input className="text-input text-on-surface py-3" placeholder="Global Media Group" type="text" />
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Inquiry Type</label>
<select className="text-input text-on-surface py-3 appearance-none bg-transparent">
<option className="bg-surface">Media Request</option>
<option className="bg-surface">Speaking Engagement</option>
<option className="bg-surface">Strategic Partnership</option>
<option className="bg-surface">Institutional Inquiry</option>
<option className="bg-surface">Legacy Archive Access</option>
</select>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mb-2">Detailed Message</label>
<textarea className="text-input text-on-surface py-3 resize-none" placeholder="Briefly describe the nature of your request, proposed dates, and relevant context..." rows={4}></textarea>
</div>
<div className="pt-8">
<button className="bg-secondary text-on-secondary px-12 py-4 font-label-md text-label-md uppercase tracking-widest font-bold hover:scale-[1.02] active:scale-95 transition-transform w-full md:w-auto shadow-xl" type="submit">
                Submit Documentation
              </button>
</div>
</form>
</div>
</div>
</div>

<section className="mt-gutter">
<div className="glass-card py-12 px-10 flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">Digital Presence</h4>
<p className="text-on-surface-variant font-body-md">Connect with the official BIGBRUVA ecosystem across global networks.</p>
</div>
<div className="flex gap-10">
<a className="group" href="/">
<div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
<span className="material-symbols-outlined text-on-surface group-hover:text-secondary">public</span>
</div>
</a>
<a className="group" href="/">
<div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
<span className="material-symbols-outlined text-on-surface group-hover:text-secondary">rss_feed</span>
</div>
</a>
<a className="group" href="/">
<div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
<span className="material-symbols-outlined text-on-surface group-hover:text-secondary">share</span>
</div>
</a>
<a className="group" href="/podcast">
<div className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-secondary transition-colors">
<span className="material-symbols-outlined text-on-surface group-hover:text-secondary">podcasts</span>
</div>
</a>
</div>
</div>
</section>
</main>

<footer className="w-full py-16 px-margin-desktop bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-secondary/20">
<div className="flex flex-col items-center justify-center space-y-8 w-full max-w-container-max mx-auto">
<div className="h-32 w-auto mb-4 flex items-center justify-center">https://lh3.googleusercontent.com/aida-public/AB6AXuCWvF-nHdw2xKstGjft8ySDVK94zelb6MpCkEiDtT3PB8YXAgFgSYTRjSILgn5BvsGjb8lQmrgvgruVQDyp5-wOa5NCgbujblFQ_9CiIGu8T-eLVUcjr-FzmkhptVpclIV49zl-7XM7EQFTibf-k2lRoNuCBdPeNi1GNgvX4B7FUwB40bOJud9sWs-2TOB6nXSBiJLWIxGhYfQVUOlsC9jjYDuDknGT_-IGmQMPwL4oGy-3cSjdPWDsU2Cha_B7DU9NEB_kmzHoZSs</div>

<nav className="flex flex-wrap justify-center gap-8">
<a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy Archive</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/">Privacy Policy</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/press">Press Kit</a>
<a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors" href="/media">Media Inquiries</a>
</nav>
<p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant text-center border-t border-outline-variant/30 pt-8 w-full">
        © 2024 BIGBRUVA. THE ORIGINAL BIG BROTHER. ALL RIGHTS RESERVED.
      </p>
</div>
</footer>
    </>
  );
}
