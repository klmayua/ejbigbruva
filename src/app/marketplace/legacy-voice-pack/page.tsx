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
      
<header className="fixed top-0 w-full z-50 bg-primary-container/70 dark:bg-primary-container/70 backdrop-blur-md border-b border-secondary/15 h-20 flex justify-between items-center px-margin-desktop">
<div className="flex items-center gap-4">
<img alt="BIGBRUVA Crest" className="w-12 h-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
<span className="font-display-lg text-display-lg text-secondary dark:text-secondary uppercase tracking-widest hidden lg:block">BIGBRUVA</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors" href="/">Home</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors" href="/about">About</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors" href="/legacy">Legacy</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors" href="/media">Media</a>
<a className="font-label-md text-label-md text-secondary font-bold border-b-2 border-secondary pb-1" href="/marketplace">Marketplace</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:text-secondary transition-colors" href="/contact">Contact</a>
</nav>
<div className="flex items-center gap-6">
<button className="material-symbols-outlined text-secondary text-2xl">search</button>
<button className="font-label-md text-label-md bg-secondary text-on-secondary px-6 py-2 rounded-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">Account</button>
</div>
</header>
<main className="pt-20">

<section className="relative w-full h-[70vh] flex items-end overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover grayscale-[0.5] opacity-60" data-alt="A cinematic, high-end recording studio interior bathed in dramatic amber and navy lighting. Professional vintage microphones stand prominently in the foreground, with soundproofing acoustic panels and soft glowing control monitors in the background. The atmosphere is sophisticated and institutional, reflecting a premium audio production environment with deep shadows and golden highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdOl4GyMmM_JkfqSlFXlSTEx0bCKx_09edrXDhNvm6wht6rSsKFht94RjG0xZ_0IPdGgn1QOYzmLQTVCd7XWiP453s9Eeb_zA2TVFMAeyZ6f7OitHmY2c9D2KUhJtCwJ5WToQchetjIFC_07sWByw8_ZdsgEgyWC6_Z7UuMDbdkeCNZl6aj_VlWEvaAgfwC6Elr8gku4qBEWVm5dMBOX6LHNKsAaVxUvn_kDHwkRY8TgCkrfkU4QhCI79AIGN6gHZLEkC0B_7nH1U"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop pb-16">
<span className="font-label-md text-label-md text-secondary tracking-[0.3em] uppercase mb-4 block">Institutional Series</span>
<h1 className="font-display-lg text-display-lg lg:text-[80px] text-white leading-tight mb-6">The Legacy Voice Pack<br/><span className="italic font-normal gold-gradient-text">— Volume I</span></h1>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-desktop py-20 grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-8 space-y-16">

<div className="glass-panel p-8 rounded-lg">
<div className="flex items-center gap-6 mb-8">
<button className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center hover:scale-105 transition-transform" id="play-btn">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</button>
<div>
<p className="font-label-md text-label-md text-secondary uppercase tracking-widest">Preview: Institutional Intro</p>
<h3 className="font-headline-md text-headline-md text-white">Baritone Range Signature</h3>
</div>
</div>

<div className="h-24 w-full flex items-center gap-[2px]" id="waveform">

</div>
</div>

<article className="space-y-6">
<h2 className="font-headline-lg text-headline-lg text-secondary">The Authority of Sound</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        Volume I of the Legacy Voice Pack series offers an unparalleled auditory signature. Specifically engineered for institutional branding, this collection features a commanding baritone range that resonates with trust, history, and permanence. Each recording has been captured in an acoustically dead environment to ensure maximum flexibility in post-production.
                    </p>
<p className="font-body-md text-body-md text-on-surface-variant opacity-80">
                        Designed for entities that require their digital presence to match their physical heritage. From automated concierge systems to flagship documentary narration, 'The Legacy' provides the sonic weight your brand deserves.
                    </p>
</article>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="border-l border-secondary/30 pl-6 py-2">
<p className="font-label-sm text-label-sm text-secondary/60 uppercase">Format</p>
<p className="font-body-lg text-body-lg text-white">WAV, MP3, AIFF</p>
</div>
<div className="border-l border-secondary/30 pl-6 py-2">
<p className="font-label-sm text-label-sm text-secondary/60 uppercase">Resolution</p>
<p className="font-body-lg text-body-lg text-white">24-bit / 96kHz</p>
</div>
<div className="border-l border-secondary/30 pl-6 py-2">
<p className="font-label-sm text-label-sm text-secondary/60 uppercase">Components</p>
<p className="font-body-lg text-body-lg text-white">142 Mastered Assets</p>
</div>
</div>

<div className="pt-16">
<h4 className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-8">Related Assets</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-container border border-white/5 cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" data-alt="A stack of aged, premium parchment documents with wax seals and intricate calligraphy. The lighting is warm and directional, highlighting the texture of the paper and the depth of the embossments. A scholarly and archival mood that suggests legal narration rights and historical authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUSgH3eFNvc6FmN3KCnjGfv81gk-cp_G7xlbevS-N8BBbBgDjsfD9fi4aYM1mVsZrFj2lv-FLYTUFu70mRaYaCAkmyRNR-bv79Io9UfxjvCL-dLs8U6XV53dIZlXco9eQdqm-_V9Yi3GI8S67AHGjNUxNv80lF7vrP1dEHKwS0fbpcdKKCz5E7UwFVxYuRrZ0TxBDqnX7QvHSWsCXdN5v-ujFOeewzrLw2RpWvtCpKBh_-d6HMIjEXlbMk3MuJrVbAp0ncRC6Huy8"/>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h5 className="font-headline-md text-headline-md text-white">Documentary Narration Rights</h5>
<p className="text-secondary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                                    Explore License <span className="material-symbols-outlined text-sm">arrow_forward</span>
</p>
</div>
</div>
<div className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-container border border-white/5 cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40" data-alt="Abstract golden metallic shapes interlocking to form a modern crest-like structure. Soft bokeh in the background with particles of light floating in a deep navy void. Sophisticated branding aesthetics suitable for high-end institutional visual assets." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ing7vTS8xHKKgapOXe-Yz_irgBGzndu2vT3RIAnav4NHNKE7JQTuBHrpUp6qF-IGLaNhhuuJLnbJM9FsvtIVpzqNwV-JUlgU7wkOQQjv24njvaoPeE5zs4Yh9B1TNBe-E3OhnwrW6KlBBmnwzOw4t0pob_xIO-C7_v7EgZkq4viKNlGfjPmNkVwVXGh5p7TFBFTUQEYmWASziSaVECmNh_g8Wkx4J5tSZtN363jDm1S-lZ6RFbhMfmsUntQ2-79AZB2LeMFqB4Q"/>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h5 className="font-headline-md text-headline-md text-white">Crest Branding Assets</h5>
<p className="text-secondary group-hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                                    View Collection <span className="material-symbols-outlined text-sm">arrow_forward</span>
</p>
</div>
</div>
</div>
</div>
</div>

<aside className="col-span-12 lg:col-span-4">
<div className="sticky top-32 space-y-8">

<div className="bg-surface-container-high p-8 border border-secondary/10 relative">
<div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
<div className="bg-secondary text-on-secondary text-[10px] font-bold uppercase rotate-45 translate-x-4 translate-y-2 py-1 text-center w-24">Premium</div>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-6">Investment Summary</h3>
<div className="space-y-4 mb-8">
<label className="block p-4 border border-secondary/20 bg-background/50 cursor-pointer hover:border-secondary transition-colors group">
<input defaultChecked className="hidden peer" name="license" type="radio"/>
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant group-hover:text-white transition-colors">Individual License</span>
<span className="font-body-lg text-body-lg text-secondary">$450.00</span>
</div>
</label>
<label className="block p-4 border border-secondary/20 bg-background/50 cursor-pointer hover:border-secondary transition-colors group">
<input className="hidden peer" name="license" type="radio"/>
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant group-hover:text-white transition-colors">Institutional License</span>
<span className="font-body-lg text-body-lg text-secondary">$1,200.00</span>
</div>
</label>
<label className="block p-4 border border-secondary/20 bg-background/50 cursor-pointer hover:border-secondary transition-colors group">
<input className="hidden peer" name="license" type="radio"/>
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant group-hover:text-white transition-colors">Global Broadcast</span>
<span className="font-body-lg text-body-lg text-secondary">$3,500.00</span>
</div>
</label>
</div>
<div className="space-y-4">
<button className="w-full bg-secondary text-on-secondary font-bold font-label-md text-label-md py-4 uppercase tracking-widest hover:brightness-110 transition-all">Purchase Now</button>
<button className="w-full border border-secondary text-secondary font-bold font-label-md text-label-md py-4 uppercase tracking-widest hover:bg-secondary/10 transition-all">Consult for Enterprise</button>
</div>
<div className="mt-8 pt-8 border-t border-white/5 space-y-3">
<div className="flex items-center gap-3 text-on-surface-variant opacity-70">
<span className="material-symbols-outlined text-sm">verified_user</span>
<span className="text-xs uppercase tracking-tighter">Lifetime Institutional Rights</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant opacity-70">
<span className="material-symbols-outlined text-sm">cloud_download</span>
<span className="text-xs uppercase tracking-tighter">Instant Secure Access</span>
</div>
</div>
</div>

<div className="relative h-48 rounded-lg overflow-hidden glass-panel flex items-center justify-center p-8 group">
<img alt="Crest Accent" className="w-24 opacity-20 grayscale group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
<div className="absolute inset-0 flex items-center justify-center">
<p className="font-display-lg text-[20px] text-secondary tracking-[0.4em] uppercase">Bigbruva Quality</p>
</div>
</div>
</div>
</aside>
</section>
</main>

<footer className="relative w-full py-16 bg-background dark:bg-background border-t border-secondary/10 mt-20">
<div className="flex flex-col items-center gap-base max-w-container-max mx-auto px-margin-desktop">
<img alt="BIGBRUVA Footer Crest" className="w-24 h-24 opacity-20 mb-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRvSa_kb5jU2Ls7WpBSvV2HfQo6EkEJ5Nr_TVfFfUbmuDJ7eRMrrkPOp233f4HnQK_HrEO3Mfqae8r7oOEZ15B-VvK4Dd1xTR6vPAeVL49ZfQVmzjDxtsLlOOexjrg2BM0qR9Mxv_LnS-2DbisQEAGJ5X-NtOlzgoiGUt41KnFJEMUxNkSJZjLXM1cY1H6PEF9KXy2Oc1OL_fURiO6hBFICG6mppSK8oMywXAwS_BRayPEoDo-qG4J-06XdEoLfRuVk-Uf-8aVmM"/>
<nav className="flex flex-wrap justify-center gap-8 mb-8">
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="/">Privacy Policy</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="/">Terms of Service</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="/">Licensing</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary-fixed transition-colors uppercase tracking-widest" href="/">Archive Access</a>
</nav>
<p className="font-body-md text-body-md text-on-surface-variant opacity-60 text-center max-w-2xl">
                © 2024 BIGBRUVA (Ejike Ebidilo). All Rights Reserved. Institutional Seal of Legacy. Our audio assets are protected by cryptographic provenance and international copyright law.
            </p>
</div>
</footer>
    </>
  );
}
