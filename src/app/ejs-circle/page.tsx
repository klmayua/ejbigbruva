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
      
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-primary-container/70 backdrop-blur-md border-b border-outline-variant/10">
<div className="font-headline-md text-headline-md tracking-tighter text-secondary uppercase">
            BIGBRUVA
        </div>
<div className="hidden md:flex items-center gap-gutter">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/">Home</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/legacy">Legacy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/media">Media</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/marketplace">Marketplace</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors duration-300" href="/">EJlive</a>
<a className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1" href="/ejs-circle">EJ's Circle</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:block bg-secondary text-on-secondary-container px-6 py-2 rounded-lg font-label-md hover:scale-105 transition-transform">
                Join The Circle
            </button>
<div className="w-10 h-10 rounded-full border border-secondary/30 overflow-hidden">
<img alt="EJ Official Crest Logo" className="w-full h-full object-cover" data-alt="A dignified close-up portrait of a mature man in a sharp navy suit, representing the institutional leadership of BIGBRUVA. The lighting is low-key and dramatic, reflecting a premium dark-mode aesthetic with subtle golden rim lighting. The atmosphere is one of sovereign authority and quiet confidence, set against a deep navy blue background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB1dFiflShMjA2auiBugDP9tWezQEa5pn1J85PD2ZcR_AGWXjlO9xjQKnBTiBUzgjgPoFo-iaRriHOHlcDmKT8xyHP1aBJrEtKaXCzgyaFS2Z9ZI7fmmwihDW1SLZZdZm3GMp_Wta-TmlmjB_2dDEpNQzCtvAB1_JqIvPYe6tik0Op9mG7GwMq-BGYZZ6XISdPMuvEGYseEGvB2vAjEhO1FhDkX6SiPeiljtn3sQXtqMYxzu1I2LQE7kvt_bu9MtWXj_XZ8YcRii4"/>
</div>
</div>
</nav>
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
<img alt="EJ Agbada 01" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuy0CFtoE9DY-Yl2RLWmytXbM9KK9D3uOn0jZu5K9xHoWGSsp5iXaGeS2O-oZgiYkrJWxvQgsrXRO8zvOF7mUVgSW0fnOweRhspvCBDwf5pUkTOlvIk3Uh885vDhNK4qlnNp4gwIaVxnZfCRk0azKWC2dvFk2l7XR5BPsXk5wrBucR9Xnbxxu34DjazKMTqTOTpX9EC7hQP-x9TVUN7gbUe9LXlSC_BCjDq1tNDxD4LIjMXZLSzrzuF9oCXwFu6CjyZHEkG67rtKo"/>
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

<div className="glass-panel p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
<span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Wisdom</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Deep archival knowledge and strategic discernment. Transitioning from mere information to profound institutional insight.
                        </p>
</div>

<div className="glass-panel p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
<span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Health</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            The physical temple. Optimization of biological function and resilience through elite-level wellness protocols.
                        </p>
</div>

<div className="glass-panel p-10 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500">
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
<img alt="Institutional background" className="w-full h-full object-cover" data-alt="A macro close-up of high-quality navy blue pinstripe suit fabric, showcasing the intricate weave and sophisticated texture. The lighting is soft and directional, highlighting the subtle sheen of the premium material. The overall image carries a sense of bespoke tailoring, professional luxury, and traditional institutional power, perfectly matching a dark-mode sovereign aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhoiuz0ZKnOe9tYMYLUi_B_7JYe0N-WPQeXIFI_7fItbHNqayaVBWtAtsnx8o9iXJLf9NmTFDJ6MXUBUU95ztYGgMncVUNYdVvSXeT2JckhaK0bj2r2sHlGVskN_SXD3qEPxJBUrjQu6fJRY9RSJjZ-ZftXP67v_j674r26G-MN_x0y0SAmdhxJWWb1dPLhncz-UcdU0gli2teJfV2U39FmPj8atNfJ3tgPUxr7bQO7x5jogoHg4SSPVbz1IaMEeZfbV7bKJYyYDE"/>
</div>
</div>
</section>

<section className="px-margin-desktop max-w-container-max mx-auto">
<div className="relative rounded-3xl overflow-hidden py-24 text-center">
<div className="absolute inset-0 bg-[#082e73] opacity-90"></div>
<div className="absolute inset-0">
<img alt="Executive space" className="w-full h-full object-cover" data-alt="A wide-angle shot of a minimalist, high-end executive boardroom in a skyscraper at night. The city lights twinkle outside massive floor-to-ceiling windows. Inside, the furniture is sleek and dark, with subtle reflections on polished surfaces. The scene is dominated by deep navy blues and blacks, with small, warm golden lights creating a sense of exclusive, high-stakes decision-making and sovereign authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3MRo4r1m7QNx5bWEQaMNO_XdApM6dZbqpkkL9NJ2tq4HNWlKLw28FcfEn0J2LKMvHnyUqfKTSPAiqyXvcS1R9a_kSg-YDqc6g4lA9VEA1eAer2EWfFofFnPn-gEt9wluEvN6xED_iGmj1tcTEbBn_nA-8yRhP6hso6Pjn5z6p0_nxqKB8uSQKmAeUrm8sMemEojKrLylIse9ZXbRRxDrTbhrhj8DxMXf0SjPS7qWxOrI31bzCYyopjXlQhJhUv1Y3IutzyvSlxmA"/>
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

<footer className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto border-t border-outline-variant/10 bg-surface-container-lowest">
<div className="mb-8 md:mb-0">
<div className="font-headline-lg text-headline-lg text-secondary opacity-20 mb-2">BIGBRUVA</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 BIGBRUVA Institutional. All Rights Reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-gutter">
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/">Archival Terms</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/legacy">Legacy Privacy</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/">Sovereign Rights</a>
<a className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary underline transition-all" href="/contact">Contact</a>
</div>
</footer>
    </>
  );
}
